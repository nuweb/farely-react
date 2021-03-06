import { findDOMNode } from 'react-dom'
import FareActions from '../../../actions/fare_actions'
import Instructions from '../instructions.jsx'
import {
  renderIntoDocument
} from 'react-addons-test-utils'

describe('Instructions', () => {

  let component

  beforeEach(() => {
    component = renderIntoDocument(<Instructions />)
  })

  it('defaults to showing instructions', () => {
    expect(component.state.showInstructions).to.be.true
  })

  it('shows the instructions when there are no purchase options', () => {
    FareActions.updateFareParameters(null, null)

    expect(component.state.showInstructions).to.be.true
    const hiddenAttribute = findDOMNode(component).attributes.getNamedItem('hidden')
    expect(hiddenAttribute).not.to.be.ok
  })

  it('hides instructions when there are purchase options', () => {
    FareActions.updateFareParameters('2', '40')

    expect(component.state.showInstructions).to.be.false
    const hiddenAttribute = findDOMNode(component).attributes.getNamedItem('hidden')
    expect(hiddenAttribute).to.be.ok
  })

})
