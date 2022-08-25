import { FC, memo } from 'react'
import styles from './index.module.sass'

export type Props = {
  label: string
}

const Button: FC<Props> = memo(({label}) => {
  return (
    <button className={ styles.button }>
      {label}
    </button>
  )
})

export default Button
