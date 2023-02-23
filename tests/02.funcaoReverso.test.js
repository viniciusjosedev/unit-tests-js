import { funcaoReverso } from "../script";

describe('Todos os teste da funcaoReverso', () => {
	it('funcaoReverso(10) tem que resultar em /01/', () => {
		expect(funcaoReverso(10)).toEqual('01');
	})
	it('funcaoReverso(549) tem que resultar em /01/', () => {
		expect(funcaoReverso(549)).toEqual('945');
	})
	it('funcaoReverso(999) tem que resultar em /01/', () => {
		expect(funcaoReverso(999)).toEqual('999');
	})
	it('funcaoReverso(419) tem que resultar em /01/', () => {
		expect(funcaoReverso(419)).toEqual('914');
	})
	it('funcaoReverso(898) tem que resultar em /01/', () => {
		expect(funcaoReverso(898)).toEqual('898');
	})
	it('funcaoReverso(123) tem que resultar em /01/', () => {
		expect(funcaoReverso(123)).toEqual('321');
	})

})
