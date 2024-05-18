import { CancelIconButton } from '../styles'

import { ReactComponent as CrossIcon } from '../assets/cross.svg'

export const CancelButton = (props: { onCancel: () => void }) => {
  return (
    <CancelIconButton onClick={props.onCancel}>
      <CrossIcon height={20} width={20} />
    </CancelIconButton>
  )
}
