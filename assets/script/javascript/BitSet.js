BitSet=(function(){
const BitSetArrayType = Uint32Array;
const wordSize = 8*BitSetArrayType.BYTES_PER_ELEMENT;
class BitSet
{
	constructor(arg0=0){
		switch(typeof arg0){
			case 'number':
				this._data = new BitSetArrayType(Math.ceil(arg0/wordSize));
				break;
			case 'object':
				if(arg0 instanceof BitSet)
					this._data = new BitSetArrayType(arg0._data);
				break;
		}
	}
	_boundCheck(i){
		
	}
	clearBit(i){
		_boundCheck(i);
		var wordindex = Math.floor(i/wordSize), bitoffset = i%wordSize;
		this._data[wordindex] ^= this._data[wordindex] & 1<<bitoffset;
	}
	setBit(i,val=true){
		_boundCheck(i);
		val = val%2;//ensure it's a boolean
		if(val==true)
		var wordindex = Math.floor(i/wordSize), bitoffset = i%wordSize;
		this._data[wordindex] ^= this._data[wordindex] & 1<<bitoffset;
		this._data[wordindex]|=(val%2)<<bitoffset;
	}
	getBit(i){
		_boundCheck(i);
		var wordindex = Math.floor(i/wordSize), bitoffset = i%wordSize;
		return ((this._data[wordindex]>>bitoffset)&1)==true;
	}
	and(arg1){
		//TODO
	}
	or(arg1){
		//TODO
	}
	xor(arg1){
		//TODO
	}
	clone(){
		return new BitSet(this.data);
	}
}
return BitSet;
})()