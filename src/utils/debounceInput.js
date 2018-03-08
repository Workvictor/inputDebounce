let counter=0;
export const debounceInput=({
	interval=300,
	value=``,
	onEnd=({ value, counter })=>null
})=>{
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