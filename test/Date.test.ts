import { addDay, subtractDay } from '../src/Date';


const extractDayNumber = (checkDate: number) => {
    const date = (new Date(checkDate))
    const dateString = date.toUTCString().split(" ")[1];
    const value = parseInt(dateString)
    return value
}
describe('Date Functions', () => {
    it("addDay", () => {
        const time = 1000 * 60 * 60 * 24;
        for (let i = 0; i > 10; i++) {
            expect(extractDayNumber(addDay(time, i))).toBe(i + 1);
        }
    })
    it("subtractDay", () => {
        const time = 1000 * 60 * 60 * 24;
        for (let i = 0; i < 10; i++) {
            expect(extractDayNumber(subtractDay(time * 10, i))).toBe(11 - i);
        }
    })
})