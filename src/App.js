import React, { Component } from 'react';
import { Iterator }         from './utils';
import { Input }            from './components';


const inc=new Iterator();
const generateObject=(elem, id)=>({ id: inc.next, name: `${id}_name` });
const createArray=(length=10)=>new Array(length).fill(0);
const generateList=(length)=>createArray(length).map(generateObject);

class App extends Component{
	componentDidMount=()=>{
		console.log(generateList());
	};

	render(){
		return (
			<div>
				<Input/>
			</div>
		);
	}
}

export default App;
