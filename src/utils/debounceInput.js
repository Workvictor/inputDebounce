import { Iterator } from './index';


const iterator=new Iterator();
export const debounceInput=({
	interval=300,
	value=``,
	onEnd=({ value, counter })=>null
})=>{
	const reset=()=>{
		onEnd && onEnd({ value, counter:iterator.counter });
		iterator.reset();
	};
	const nextValue=prevCounter=>{
		setTimeout(()=>{
			prevCounter === iterator.prev && reset();
		}, interval);
	};
	nextValue(iterator.next());
};