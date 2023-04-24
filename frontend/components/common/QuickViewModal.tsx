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

import { ComposedModal, ModalBody, ModalHeader } from '@carbon/react'
import React from 'react'

interface IQuickViewModalProps {
  open: boolean
}

export const QuickViewModal: React.FC<IQuickViewModalProps> = ({
  open,
}: IQuickViewModalProps) => {
  return (
    <ComposedModal open={open}>
      <ModalHeader title="Quick view" />
      <ModalBody />
    </ComposedModal>
  )
}
