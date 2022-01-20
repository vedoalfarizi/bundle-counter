class Counter {
    constructor(payload) {
				this._verifyPayload(payload);
				
				const { apples, cakes } = payload;

        this._apples = apples;
        this._cakes = cakes;
				this._boxes = 1;
    }

		_verifyPayload({ apples, cakes }) {
			if(!apples || !cakes) {
				throw new Error('Parameter pada fungsi tidak lengkap');
			}

			if(typeof apples !== 'number' || typeof cakes !== 'number') {
				throw new Error('Parameter hanya bisa berupa angka');
			}
		}

    countBoxes() {
			const border = this._apples < this._cakes ?
				this._apples : this._cakes;

			for (let idx = border; idx > 1; idx--) {
				if(this._apples % idx === 0 && this._cakes % idx === 0){
					this._boxes = idx;
					return this._boxes;
				}				
			}

			return this._boxes;
		}

		countDetail() {
				return {
					apples: this._apples / this._boxes,
					cakes: this._cakes / this._boxes,
				}	
		}
}

module.exports = Counter;