import React, { Component } from 'react';
import styled               from 'styled-components';
import {
	debounceInput,
	Dropdown
}                           from './index';


const Wrapper=styled.div`
	position: relative;
`;

const StyledInput=styled.input`
	width: 100%;
	outline: none;
`;

const InputDropDown=props=>{
	const { items, focus }=props;
	return (items && focus)
		? <Dropdown {...props} >
			{items}
		</Dropdown>
		: null;
};

export class Input extends Component{
	constructor(props){
		super();
		this.state={
			value: ``,
			focus: false,
			debounce: props.debounce || 300
		};
	}

	onChange=e=>{
		const { onChange }=this.props;
		const { value }=e.target;
		debounceInput({
			value,
			onEnd: ({ value, counter })=>onChange && onChange({ value, counter }),
			interval: this.state.debounce
		});
		this.setState({ value });
	};
	onFocus=e=>{
		const { onFocus }=this.props;
		this.setState({ focus: true });
		onFocus && onFocus(e);
	};
	onBlur=e=>{
		const { onBlur }=this.props;
		this.setState({ focus: false });
		onBlur && onBlur(e);
	};
	onSelect=({ elem })=>{
		const { onSelect, valueSelector=`name`, multiselect }=this.props;
		const getValue=()=>multiselect ? `` : (elem[valueSelector] || ``);
		this.setState({
			value: getValue()
		});
		onSelect && onSelect({ elem, ...multiselect ? { listItem: elem } : {} });
	};

	render(){
		const { value, focus }=this.state;
		const { items, className, placeholder }=this.props;
		return (
			<Wrapper
				{...{ className }}
			>
				<StyledInput
					onChange={this.onChange}
					onFocus={this.onFocus}
					onBlur={this.onBlur}
					value={value}
					placeholder={placeholder}
				/>
				<InputDropDown {...{ items, focus }} onSelect={this.onSelect}/>
			</Wrapper>
		);
	}
}