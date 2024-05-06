import { CardContainer } from '../styles/styles'

type CardProps = {
  id: string
  text: string
}

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>
}
