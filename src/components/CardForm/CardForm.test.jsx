import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardForm from './CardForm'

it('can render card form', () => {
  const { container } = render(<CardForm />)
  expect(container.firstChild).toMatchSnapshot()
})
