import React, { Component } from 'react';
import { debounceInput }    from './index';


export class Input extends Component{
	state={
		value: ``
	};
	onChange=e=>{
		const { value }=e.target;
		debounceInput({
			value,
			// onEnd: ({ value, counter })=>console.log(`onEnd`, value, counter)
		});
		this.setState({ value });
	};
	onFocus=e=>{

	};
	onBlur=e=>{

	};
	componentWillReceiveProps=nextProps=>{
		const { value }=nextProps;
		value !== this.props.value && this.setState({ value });
	};

	render(){
		return (
			<input
				onChange={this.onChange}
				onFocus={this.onFocus}
				onBlur={this.onBlur}
				value={this.state.value}
			/>
		);
	}
}