import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Board from './Board'

it('can render a board', () => {
  const { container } = render(<Board />)
  expect(container.firstChild).toMatchSnapshot()
})
