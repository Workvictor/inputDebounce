import React, { Component } from 'react';
import styled               from 'styled-components';
import { Iterator }         from './utils';
import { Input }            from './components';


const Wrapper=styled.div`
	width: 500px;
	display: flex;
`;
const StyledInput=styled(Input)`
	border: 2px solid #000;
	margin-bottom: 30px;
`;

const Item=styled.div`
	cursor: pointer;
	padding: 4px 8px;
	background-color: #fff;
	&:hover{
		background-color: #bbbbbb;		
	}
`;

const inc=new Iterator();
const generateObject=(elem, id)=>({ id: inc.next(), name: `${id}_name` });
const createArray=(length=10)=>new Array(length).fill(0);
const generateList=(length)=>createArray(length).map(generateObject);

const getItems=items=>items.map((elem, id)=>
	<Item
		key={id}
		elem={elem}
	>
		{elem.name}
	</Item>
);

class App extends Component{
	constructor(){
		super();
		this.state={
			items: [],
			selectedList: [],
		};
	}

	componentDidMount=()=>{
		this.setState({
			items: generateList()
		});
	};

	onUserInput=({ value })=>{
		console.log(value);
	};

	onSelect=({ elem, listItem })=>{
		const { selectedList }=this.state;
		const isUnique=elem=>elem.id !== listItem.id;
		(listItem && selectedList.every(isUnique)) &&
		this.setState({
			selectedList: [
				...selectedList,
				listItem
			]
		});
	};

	render(){
		return (
			<Wrapper>
				<div>
					<StyledInput
						debounce={500}
						onChange={this.onUserInput}
						items={getItems(this.state.items)}
						onSelect={this.onSelect}
						placeholder={`has dropdown`}
					/>
				</div>
				<div>
					<StyledInput
						debounce={500}
						onChange={this.onUserInput}
						placeholder={`has no dropdown`}
					/>
				</div>
				<div>
					<StyledInput
						debounce={500}
						onChange={this.onUserInput}
						items={getItems(this.state.items)}
						onSelect={this.onSelect}
						multiselect
						placeholder={`multiselect`}
					/>
					{
						this.state.selectedList.map((item, id)=>
							<div key={id}>
								<button>X</button>
								{item.name}
							</div>
						)
					}
				</div>
			</Wrapper>
		);
	}
}

export default App;
