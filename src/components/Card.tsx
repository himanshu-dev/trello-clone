import { CardContainer } from '../styles'
import { useRef } from 'react'
import { isDraggedItem, useCardDrop, useItemDrag } from '../utils'
import { useAppState } from '../state'

type CardProps = {
  id: string
  text: string
  columnId: string
  isPreview?: boolean
}

export const Card = ({ id, text, columnId, isPreview }: CardProps) => {
  const { draggedItem } = useAppState()
  const ref = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({ id, type: 'CARD', text, columnId })
  const { drop } = useCardDrop({ id, type: 'CARD', text, columnId })

  drag(drop(ref))
  return (
    <CardContainer
      ref={ref}
      $isPreview={isPreview}
      $isHidden={isDraggedItem(draggedItem, 'CARD', id) && !isPreview}>
      {text}
    </CardContainer>
  )
}
