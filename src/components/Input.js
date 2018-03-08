import React, { Component } from 'react';


let counter=0;
const debounce=({ interval=300, value, onEnd })=>{
	counter++;
	const reset=()=>{
		onEnd && onEnd({ value, counter });
		counter=0;
	};
	const nextValue=prevCounter=>{
		setTimeout(()=>{
			prevCounter === counter && reset();
		}, interval);
	};
	nextValue(counter);
};

export class Input extends Component{
	state={
		value: ``
	};
	onChange=e=>{
		const { value }=e.target;
		debounce({
			value,
			onEnd: ({ value, counter })=>console.log(`onEnd`, value, counter)
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