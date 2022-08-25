import { useQueryKwargs } from '../hooks/useQueryKwargs'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Button from '../components/ui/Button/index'


const Dummy: NextPage = () => {
  const { status, data } = useQueryKwargs()
  if (status === 'loading') return (<h1>Loading...</h1>)
  if (status === 'error') return (<div>Error</div>)
  return (
    <Layout title="Test">
      <h1>Test Page</h1>
      {data?.map((kwarg, index) => {
        return (
          <div key={index}>{`${kwarg.id}:${kwarg.name}`}</div>
        )
      })}
      <Button label="button" />
    </Layout>
  )
}

export default Dummy
