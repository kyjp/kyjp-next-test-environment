import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './index'

const text = 'default'

describe('Button component', () => {
  it('The label is reflected on the button', () => {
    render(<Button label={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
