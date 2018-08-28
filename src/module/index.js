import React from 'react'

export default class ExampleComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			name: `Component`,
		}
	}

	render() {
		return (
			<div className='ExampleComponent'>
				Example {this.state.name}
			</div>
		)
	}
}