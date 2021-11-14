import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ColumnFormContainer from './ColumnFormContainer'

Enzyme.configure({ adapter: new Adapter() })

it('should submit form when button is clicked', () => {
  const onSubmit = jest.fn()
  const wrapper = shallow(<ColumnFormContainer onSubmit={ onSubmit } />)
  
  wrapper.children().find('button').simulate('click')
  expect(onSubmit.mock.calls.length).toBe(1)
})
