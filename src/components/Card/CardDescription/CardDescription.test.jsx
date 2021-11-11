import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardDescription from './CardDescription'

it('can render card description', () => {
  const description = 'it is a card description'
  const { container, getByText } = render(
    <CardDescription description={description} />
  )

  expect(getByText('it is a card description')).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()
})
