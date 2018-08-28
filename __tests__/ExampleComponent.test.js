import React from "react"
import renderer from "react-test-renderer"

import Example from "../src/module"

describe(`Example`, () =>
	it(`renders correctly`, () => {
		const container = renderer.create(<Example />)
		const tree = container.toJSON()
		expect(tree).toMatchSnapshot()
	})
)