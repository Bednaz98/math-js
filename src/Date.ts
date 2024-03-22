


export function addDay(inputTime: number, addDays: number) {
    const date = new Date(inputTime);
    return date.setDate(date.getDate() + addDays);
}

export function subtractDay(inputTime: number, addDays: number) {
    const date = new Date(inputTime);
    return date.setDate(date.getDate() - addDays);
}


export function addCurrentDays(addDays: number) {
    return addDay(Date.now(), addDays)
}

export function subtractCurrentDays(subDays: number) {
    return addDay(Date.now(), subDays * -1)
}