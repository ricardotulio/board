import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardActions from './CardActions'

it('can render an action bar', () => {
  const { container } = render(<CardActions />)
  expect(container.firstChild).toMatchSnapshot()
})
