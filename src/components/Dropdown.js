import React, { Component } from 'react';
import styled               from 'styled-components';


const Wrapper=styled.div`
	border: 1px solid #a6a6a6;
	box-shadow: 0 5px 10px hsla(0,0%,0%, 0.15);
	width: 100%;
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1;
`;

export class Dropdown extends Component{
	constructor(props){
		super();
		this.state={
			value: ``,
			focus: false,
			debounce: props.debounce || 300
		};
	}

	onSelect=props=>{
		const { onSelect }=this.props;
		onSelect && onSelect(props);
	};

	extraEvents=child=>({
		onMouseDown: ()=>this.onSelect(child.props)
	});

	setExtraProps=child=>React.cloneElement(
		child,
		this.extraEvents(child)
	);

	getChildren=children=>React.Children.map(
		children,
		this.setExtraProps
	);

	render(){
		const { children }=this.props;
		return (
			<Wrapper>
				{this.getChildren(children)}
			</Wrapper>
		);
	}
}