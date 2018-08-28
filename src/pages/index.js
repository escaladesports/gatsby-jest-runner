import React, { Fragment } from 'react'
import Example from '../module'

export default class HomePage extends React.Component {
	render() {
		return (
			<Fragment>
				<div>Home Page</div>
				<Example />
			</Fragment>
		)
	}
}