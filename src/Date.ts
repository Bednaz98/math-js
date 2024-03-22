import { clampValue } from "./mathFunctions";



export function addDay(inputTime: number, addDays: number) {
    const date = new Date(inputTime);
    return date.setDate(date.getDate() + addDays);
}

export function subtractDay(inputTime: number, addDays: number) {
    const date = new Date(inputTime);
    const newValue = clampValue(date.getDate() - addDays, 1, 31)
    console.log(newValue)
    return date.setDate(newValue);
}


export function addCurrentDays(addDays: number) {
    return addDay(Date.now(), addDays)
}

export function subtractCurrentDays(subDays: number) {
    return addDay(Date.now(), subDays * -1)
}