import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from './index'

const text = 'default'

describe('Card component', () => {
  it('The name is reflected on the card', () => {
    render(<Card name={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
