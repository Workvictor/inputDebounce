export class Iterator{
	counter=0;

	get next(){
		return this.counter++;
	}
}