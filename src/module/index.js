import React from 'react'

export default class ExampleComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			name: `Component`,
		}
	}

	render() {
		const props = Object.assign({}, this.props)
		return (
			<div className='ExampleComponent'>
				Example {props.name}
			</div>
		)
	}
}