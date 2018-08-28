import React from "react"
import { shallow } from 'enzyme'

import Example from "../src/module"

describe(`Header`, () =>
	it(`renders correctly`, () => {
		expect(shallow(<Example />).text()).toEqual(`Example Component`)		
	})
)