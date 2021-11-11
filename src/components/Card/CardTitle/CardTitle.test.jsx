import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardTitle from './CardTitle'

it('can render a title', () => {
  const title = 'card title'
  const { container, getByText } = render(<CardTitle title={title} />)
  expect(getByText('card title')).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()
})

