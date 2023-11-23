
export interface Vector {
    [key: string]: number
}

function addVector(vectorA: Vector, vectorB: Vector): Vector {
    const keys = Object.keys({ ...vectorA, ...vectorB })
    return keys.map(e => {
        const a = vectorA?.[e] ?? 0
        const b = vectorB?.[e] ?? 0
        return { [e]: ((!Number.isNaN(a) ? a : 0) + (!Number.isNaN(b) ? b : 0)) }
    }).reduce((p, c) => ({ ...p, ...c }), {})
}

function subtractVector(vectorA: Vector, vectorB: Vector): Vector {
    const keys = Object.keys({ ...vectorA, ...vectorB })
    return keys.map(e => {
        const a = vectorA?.[e] ?? 0
        const b = vectorB?.[e] ?? 0
        return { [e]: ((!Number.isNaN(a) ? a : 0) - (!Number.isNaN(b) ? b : 0)) }
    }).reduce((p, c) => ({ ...p, ...c }), {})
}

function getVectorNormal(vector: Vector): number {
    return Math.fround(Math.sqrt((Object.values(vector).map(e => {
        if (Number.isNaN(e)) return 0
        else if (e === undefined) return 0
        else if (e === null) return 0
        return Math.fround(Math.pow(e, 2))
    })).reduce((p, c) => p + c, 0)))
}

function dotProduct(vectorA: Vector, vectorB: Vector): number {
    const keys = Object.keys({ ...vectorA, ...vectorB })
    return keys.map(e => {
        const a = Number.isNaN(vectorA?.[e]) ? 0 : vectorA?.[e] ?? 0
        const b = Number.isNaN(vectorB?.[e]) ? 0 : vectorB?.[e] ?? 0
        return Math.fround(a * b)
    }).reduce((p, c) => p + c, 0)

}

function multipleVectorByScalar(vector: Vector, scalar: number): Vector {
    const keys = Object.keys(vector)
    return keys.map(e => ({ [e]: Math.fround(vector[e] * scalar) })).reduce((p, c) => ({ ...p, ...c }), {})
}
function convertToUnitVector(vector: Vector) {
    return (multipleVectorByScalar(vector, (1 / getVectorNormal(vector))))
}

function getVectorAngle(vectorA: Vector, vectorB: Vector) {
    const dot = dotProduct(vectorA, vectorB);
    const normal = getVectorNormal(vectorA) * getVectorNormal(vectorB);
    return Math.fround(Math.acos(dot / normal))
}

function crossProduct(vectorA: Vector, vectorB: Vector) { }


export const vector = { addVector, subtractVector, getVectorNormal, dotProduct, multipleVectorByScalar, convertToUnitVector, getVectorAngle }