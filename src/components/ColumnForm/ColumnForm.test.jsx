import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ColumnForm from './ColumnForm'

it('should render a ColumnForm', () => {
  const { container } = render(<ColumnForm />)
  expect(container.firstChild).toMatchSnapshot()
})
