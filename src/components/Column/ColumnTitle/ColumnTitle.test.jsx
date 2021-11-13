import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ColumnTitle from './ColumnTitle'

it('should render a ColumnTitle', () => {
  const title = 'To Do'
  const { container, getByText } = render(<ColumnTitle>{ title }</ColumnTitle>)

  expect(getByText(title)).toBeInTheDocument()
})

it('should render a ColumnTitle when title is not passed', () => {
  const { container, getByText } = render(<ColumnTitle />)

  expect(getByText('Column Title')).toBeInTheDocument()
})
