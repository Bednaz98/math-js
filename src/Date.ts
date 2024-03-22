

import { add, sub } from "date-fns";
export function addDay(inputTime: number, addDays: number) {
    const date = new Date(inputTime);
    return add(date, { days: addDays }).getUTCMilliseconds();
}

export function subtractDay(inputTime: number, addDays: number) {
    const date = new Date(inputTime);
    return sub(date, { days: addDays }).getTime()
}
