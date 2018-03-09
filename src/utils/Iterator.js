export class Iterator{
	counter=0;

	get prev(){
		return this.counter - 1;
	}

	next=()=>this.counter++;

	reset=()=>{
		this.counter=0;
	};
}