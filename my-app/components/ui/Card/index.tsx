import { FC } from 'react'

export type Props = {
  name: string
}

const Card: FC<Props> = ({name}) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default Card
