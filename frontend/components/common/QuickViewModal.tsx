/**
 * implement hook, types, getMore info about pokemon (see playground)
 * add show modal button to PokemonCard
 * develop dummy modal component
 * create hook
 * - getOpenModalHandler(id: pokemonId) - starts loading, starts fetching data for pokemon with id id, opens modal, stops loading
 * - close modal
 * - modalData: PokemonModalFields | null
 * show data in modal
 * style modal
 */

import {
  Attack,
  PokemonModalFieldsFragment,
  useGetPokemonModalLazyQuery,
} from '@/__generated__/graphql'
import { useLoading } from '@/components/common/LoadingProvider'
import { ToastKind, useToastContext } from '@/components/common/ToastProvider'
import { getClient } from '@/lib/apolloClient'
import { ComposedModal, ModalBody, ModalHeader } from '@carbon/react'
import React, { useCallback, useState } from 'react'

export type ModalData =
  | {
      pokemon: PokemonModalFieldsFragment
      open: boolean
    }
  | {
      pokemon: null
      open: false
    }
export const useQuickViewModal = () => {
  const { showLoading, hideLoading } = useLoading()
  const { showToast } = useToastContext()
  const client = getClient()
  const [loadModal] = useGetPokemonModalLazyQuery({ client })
  const [modalData, setModalData] = useState<ModalData>({
    pokemon: null,
    open: false,
  })
  const getOpenModalHandler = useCallback(
    (id: string) => async () => {
      try {
        showLoading()
        const { data } = await loadModal({ variables: { id } })
        if (data?.pokemonById) {
          setModalData({
            pokemon: data.pokemonById,
            open: true,
          })
        }
      } catch (e) {
        showToast({
          kind: ToastKind.Error,
          title: 'Failed to load modal data',
        })
      } finally {
        hideLoading()
      }
    },
    [hideLoading, loadModal, showLoading, showToast],
  )
  const closeModal = useCallback(() => {
    setModalData((prevData) => ({ ...prevData, open: false }))
  }, [])
  return {
    getOpenModalHandler,
    modalData,
    closeModal,
  }
}

interface IQuickViewModalProps {
  onClose: () => void
  modalData: ModalData
}

const getAttackLabel = (attack: Attack) =>
  `${attack.name}(${attack.type} - ${attack.damage})`

export const QuickViewModal: React.FC<IQuickViewModalProps> = ({
  modalData: { pokemon, open },
  onClose,
}: IQuickViewModalProps) => {
  return (
    <ComposedModal open={open} onClose={onClose}>
      <ModalHeader
        title={pokemon ? `${pokemon.name}'s quick view` : 'Quick view'}
      />
      <ModalBody>
        {pokemon ? (
          <div>
            <div>
              <span>Classification:</span> {pokemon.classification}
            </div>
            <div>
              Fast attacks:{' '}
              {pokemon.attacks.fast
                ? pokemon.attacks.fast.map(getAttackLabel).join(', ')
                : 'No Fast attacks'}
            </div>
            <div>
              Special attacks:{' '}
              {pokemon.attacks.special
                ? pokemon.attacks.special.map(getAttackLabel).join(', ')
                : 'No special attacks'}
            </div>
            <div>Resistances: {pokemon.resistant.join(', ')}</div>
            <div>Weaknesses: {pokemon.weaknesses.join(', ')}</div>
            <div>Flee rate: {pokemon.fleeRate}</div>
          </div>
        ) : null}
      </ModalBody>
    </ComposedModal>
  )
}
