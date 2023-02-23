import { funcaoModulo } from "../script";

describe('Todos os teste da funcaoModulo', () => {
	it('funcaoModulo([[5, 6, 8], [8, 7, 3], [4, 9, 1]]) tem que resultar em 6', () => {
		expect(funcaoModulo([[5, 6, 8], [8, 7, 3], [4, 9, 1]])).toEqual(6)
	})

	it('funcaoModulo([[15, 88, 90], [0, 9, 1], [3, 11, 28]]) tem que resultar em 50', () => {
		expect(funcaoModulo([[15, 88, 90], [0, 9, 1], [3, 11, 28]])).toEqual(50)
	})

	it('funcaoModulo([[17, 90, 98, 50], [100, 125, 5, 87], [3, 11, 4, 0], [37, 75, 67, 77]]) tem que resultar em 120', () => {
		expect(funcaoModulo([[17, 90, 98, 50], [100, 125, 5, 87], [3, 11, 4, 0], [37, 75, 67, 77]])).toEqual(120)
	})
})
