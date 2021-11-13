import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './Modal'

it('can render a modal', () => {
  const { container } = render(<Modal />)
  expect(container.firstChild).toMatchSnapshot()
})

it('should start invisible', () => {
  const { container } = render(<Modal />)
  expect(container.firstChild).toHaveClass('modal')
  expect(container.firstChild.classList.contains('active')).toBe(false)
})

it('should be visible if is activated', () => {
  const { container } = render(<Modal active={ true } />)
  expect(container.firstChild).toHaveClass('modal')
  expect(container.firstChild).toHaveClass('active')
})
