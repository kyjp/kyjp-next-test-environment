import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Dummy from './dummy'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '../app/store'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'localhost'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  }
})

const handlers = [
  rest.get(`${API_URL}/api/kwargs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 'test',
          name: 'test'
        }
      ])
    )
  })
]

const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('Dummy page', () => {
  it('Should render all the elements that fetch api correctly', async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Dummy />
        </QueryClientProvider>
      </Provider>
    )
    expect(await screen.findByText('test:test')).toBeInTheDocument()
  })
})
