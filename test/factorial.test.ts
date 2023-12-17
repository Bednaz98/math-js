import { factorial } from '../src/factorial';


describe('factorial test', () => {

    test('factorial results', () => {
        const result0 = factorial(0);
        expect(result0).toBe(1);
        const result1 = factorial(1);
        expect(result1).toBe(1);
        const result2 = factorial(2);
        expect(result2).toBe(2);
        const result3 = factorial(3);
        expect(result3).toBe(6);
        const result4 = factorial(4);
        expect(result4).toBe(24);
        const result20 = factorial(10);
        expect(result20).toBe(3628800);
    })

})