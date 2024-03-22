import { clampValue } from "./mathFunctions";



export function addDay(inputTime: number, addDays: number) {
    const date = new Date(inputTime);
    return date.setDate(date.getUTCDay() + addDays);
}

export function subtractDay(inputTime: number, addDays: number) {
    const date = new Date(inputTime);
    console.log(date.toDateString())
    console.log(date.getUTCDay(), addDays)
    const newValue = date.getUTCDay() - addDays
    console.log(newValue)
    return date.setDate(newValue);
}


export function addCurrentDays(addDays: number) {
    return addDay(Date.now(), addDays)
}

export function subtractCurrentDays(subDays: number) {
    return addDay(Date.now(), subDays * -1)
}