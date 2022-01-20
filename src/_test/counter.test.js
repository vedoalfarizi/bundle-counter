const Counter = require('../counter');

describe('a counter', () => {
	it('should contains countBoxes and countDetail function', () => {
		const counter = new Counter({
			apples: 25,
			cakes: 20,
		});

		expect(counter).toHaveProperty('_verifyPayload');
		expect(counter).toHaveProperty('countBoxes');
		expect(counter).toHaveProperty('countDetail');

		expect(counter._verifyPayload).toBeInstanceOf(Function);
		expect(counter.countBoxes).toBeInstanceOf(Function);
		expect(counter.countDetail).toBeInstanceOf(Function);
	});

	describe('a _verifyPayload function', () => {
		it('should throw Error when not given apples or cakes', () => {
			expect(() => new Counter({ apples: 25 })).toThrowError();
			expect(() => new Counter({ cakes: 20 })).toThrowError();
		});

		it('should throw Error when not parameters not a number', () => {
			expect(() => new Counter({ apples: 25, cakes: 'duapuluh' })).toThrowError();
			expect(() => new Counter({ apples: 'dualima', cakes: 20 })).toThrowError();
		});

		it('should not throw Error and return object correctly', () => {
			expect(() => new Counter({ apples: 25, cakes: 20 })).not.toThrowError();
		});
	});

	describe('a countBoxes function', () => {
		it('should success count boxes when cakes fewer than apples', () => {
			const apples = 25;
			const cakes = 20;

			const counter = new Counter({
				apples,
				cakes,
			});

			const result = counter.countBoxes();

			expect(result).toEqual(5);
		});

		it('should success count boxes when apples fewer than cakes', () => {
			const apples = 14;
			const cakes = 52;

			const counter = new Counter({
				apples,
				cakes,
			});

			const result = counter.countBoxes();

			expect(result).toEqual(2);
		});

		it('should return 1 when both of them was primes', () => {
			const apples = 7;
			const cakes = 3;

			const counter = new Counter({
				apples,
				cakes,
			});

			const result = counter.countBoxes();

			expect(result).toEqual(1);
		});
	});

	describe('a countDetail function', () => {
		it('should success count apples and cakes iin each boxes', () => {
			const apples = 25;
			const cakes = 20;

			const counter = new Counter({
				apples,
				cakes,
			});

			counter.countBoxes();
			const result = counter.countDetail();

			expect(result).toStrictEqual({
				apples: 5,
				cakes: 4,
			});
		});
	});
});
