import { vector } from '../src/vector'

describe('Vector Math', () => {

    it("Add vectors", () => {
        expect(vector.addVector({ x: 0 }, { y: 0 })).toEqual({ x: 0, y: 0 })
        expect(vector.addVector({ x: 1, y: 1 }, { x: -1, y: -1 })).toEqual({ x: 0, y: 0 })
        expect(vector.addVector({ x: 1, y: 1 }, { x: 1, y: 1 })).toEqual({ x: 2, y: 2 })
        expect(vector.addVector({ x: 0, y: 1 }, { x: 1, y: 0 })).toEqual({ x: 1, y: 1 })
        expect(vector.addVector({ x: NaN }, { x: 1, y: 0 })).toEqual({ x: 1, y: 0 })
        //@ts-ignore
        expect(vector.addVector({ x: undefined }, { x: 1, y: 0 })).toEqual({ x: 1, y: 0 })
        //@ts-ignore
        expect(vector.addVector({ x: null }, { x: 1, y: 0 })).toEqual({ x: 1, y: 0 })
    })
    it("subtract vectors", () => {
        expect(vector.subtractVector({ x: 0 }, { y: 0 })).toEqual({ x: 0, y: 0 })
        expect(vector.subtractVector({ x: 1, y: 1 }, { x: -1, y: -1 })).toEqual({ x: 2, y: 2 })
        expect(vector.subtractVector({ x: 1, y: 1 }, { x: 1, y: 1 })).toEqual({ x: 0, y: 0 })
        expect(vector.subtractVector({ x: 0, y: 1 }, { x: 1, y: 0 })).toEqual({ x: -1, y: 1 })
        expect(vector.subtractVector({ x: NaN }, { x: 1, y: 0 })).toEqual({ x: -1, y: 0 })
        //@ts-ignore
        expect(vector.addVector({ x: undefined }, { x: 1, y: 0 })).toEqual({ x: 1, y: 0 })
        //@ts-ignore
        expect(vector.addVector({ x: null }, { x: 1, y: 0 })).toEqual({ x: 1, y: 0 })
    })
    it("vector normal", () => {
        expect(vector.getVectorNormal({ x: 1, y: 0 })).toEqual(1)
        expect(vector.getVectorNormal({ x: -1, y: 0 })).toEqual(1)
        expect(Math.fround(vector.getVectorNormal({ x: 0.5, y: 0.5 }))).toEqual(0.7071067690849304)
        expect(Math.fround(vector.getVectorNormal({ x: -1, y: 2 }))).toEqual(2.2360680103302)
        expect(Math.fround(vector.getVectorNormal({ x: NaN }))).toEqual(0)
        //@ts-ignore
        expect(Math.fround(vector.getVectorNormal({ x: undefined }))).toEqual(0)
        //@ts-ignore
        expect(Math.fround(vector.getVectorNormal({ x: null }))).toEqual(0)

    })
    it('dotProduct', () => {
        expect(vector.dotProduct({ x: 0 }, { y: 0 })).toBe(0)
        expect(vector.dotProduct({ x: 1 }, { y: 1 })).toBe(0)
        expect(vector.dotProduct({ x: 1 }, { x: 1, y: 1 })).toBe(1)
        expect(vector.dotProduct({ x: 1, y: -1 }, { x: 1, y: 1 })).toBe(0)
    })
    it('multiple vector by scalar', () => {
        expect(vector.multipleVectorByScalar({ x: 0, y: 0 }, 0)).toEqual({ x: 0, y: 0 })
        expect(vector.multipleVectorByScalar({ x: 1, y: 1 }, 0)).toEqual({ x: 0, y: 0 })
        expect(vector.multipleVectorByScalar({ x: 1, y: 1 }, 2)).toEqual({ x: 2, y: 2 })
        expect(vector.multipleVectorByScalar({ x: 1, y: 1 }, -1)).toEqual({ x: -1, y: -1 })
        expect(vector.multipleVectorByScalar({ x: 1, y: 0 }, -1)).toEqual({ x: -1, y: -0 })
    })
    it('convert To Unit Vector', () => {
        expect(vector.convertToUnitVector({ x: 1, y: 0 })).toEqual({ x: 1, y: 0 })
        expect(vector.convertToUnitVector({ x: 0, y: 1 })).toEqual({ x: 0, y: 1 })
        expect(vector.convertToUnitVector({ x: -1, y: 1 })).toEqual({ x: -0.7071067690849304, y: 0.7071067690849304 })
        expect(vector.convertToUnitVector({ x: 0.5, y: 0.5 })).toEqual({ x: 0.7071067690849304, y: 0.7071067690849304 })
    })

    it('angle between vector0', () => {
        expect(vector.getVectorAngle({ x: 1, y: 0 }, { x: 1, y: 0 })).toBe(0)
        expect(vector.getVectorAngle({ x: 1, y: 0 }, { x: -1, y: 0 })).toBe(Math.fround(Math.PI))
        expect(vector.getVectorAngle({ x: 1, y: 0 }, { x: 0, y: 1 })).toBe(1.5707963705062866)
    })
})