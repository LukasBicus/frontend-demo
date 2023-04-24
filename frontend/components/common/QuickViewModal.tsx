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
  PokemonModalFieldsFragment,
  useGetPokemonModalLazyQuery,
} from '@/__generated__/graphql'
import { useLoading } from '@/components/common/LoadingProvider'
import { ToastKind, useToastContext } from '@/components/common/ToastProvider'
import { getClient } from '@/lib/apolloClient'
import { ComposedModal, ModalBody, ModalHeader } from '@carbon/react'
import React, { useCallback, useState } from 'react'

export const useQuickViewModal = () => {
  const { showLoading, hideLoading } = useLoading()
  const { showToast } = useToastContext()
  const client = getClient()
  const [loadModal] = useGetPokemonModalLazyQuery({ client })
  const [modalData, setModalData] = useState<null | PokemonModalFieldsFragment>(
    null,
  )
  const getOpenModalHandler = useCallback(
    (id: string) => async () => {
      try {
        showLoading()
        const { data } = await loadModal({ variables: { id } })
        if (data) {
          setModalData(data.pokemonById)
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
    setModalData(null)
  }, [])
  return {
    getOpenModalHandler,
    modalData,
    closeModal,
  }
}

interface IQuickViewModalProps {
  onClose: () => void

  pokemon: PokemonModalFieldsFragment | null
}

export const QuickViewModal: React.FC<IQuickViewModalProps> = ({
  pokemon,
  onClose,
}: IQuickViewModalProps) => {
  return (
    <ComposedModal open={Boolean(pokemon)} onClose={onClose}>
      <ModalHeader title="Quick view" />
      <ModalBody>{JSON.stringify(pokemon)}</ModalBody>
    </ComposedModal>
  )
}
