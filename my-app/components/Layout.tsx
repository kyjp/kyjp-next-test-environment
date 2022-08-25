import { ReactNode, FC } from 'react'
import Head from 'next/head'

type Props = {
  children: ReactNode
  title: string
}

const Layout: FC<Props> = ({ children, title = '' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
