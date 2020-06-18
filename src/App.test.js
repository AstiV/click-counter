import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a ShallowWrapper for the App component
 *
 * @param {object} props - Component props specific to this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    return shallow(<App {...props} />)
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {*} value - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttribute = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`)
}

test('renders without crashing', () => {
    const wrapper = setup()
    const appComponent = findByTestAttribute(wrapper, 'component-app')
    expect(appComponent.length).toBe(1)
})
test('renders increment button', () => {
    const wrapper = setup()
    const button = findByTestAttribute(wrapper, 'increment-button')
    expect(button.length).toBe(1)
})
test('renders counter display', () => {
    const wrapper = setup()
    const counterDisplay = findByTestAttribute(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1)
})
test('counter starts at 0', () => {
    const wrapper = setup()
    const appComponent = findByTestAttribute(wrapper, 'component-app')
    expect(appComponent.length).toBe(1)
})
test('clicking button increments the counter', () => {
    const wrapper = setup()
    const appComponent = findByTestAttribute(wrapper, 'component-app')
    expect(appComponent.length).toBe(1)
})
