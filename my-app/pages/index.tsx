import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Button from '../components/ui/Button/index'


const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <h1>Test Page</h1>
      <Button label="test" />
    </Layout>
  )
}

export default Home
