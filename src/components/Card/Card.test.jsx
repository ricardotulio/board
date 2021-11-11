import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

it('can render a card', () => {
  const card = {
    title: 'card title',
    description: 'card description'
  }

  const { container, getByText } = render(<Card card={ card } />)
  expect(getByText('card title')).toBeInTheDocument()
  expect(getByText('card description')).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()
})
