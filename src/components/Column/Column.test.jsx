import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Column from './Column'
import styles from './styles.module.css'

it('can render a column', () => {
  const { container, getByText } = render(<Column title="To Do" />)
  expect(getByText('To Do')).toBeInTheDocument()
})
