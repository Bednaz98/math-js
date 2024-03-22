import { addCurrentDays, addDay, subtractDay, subtractCurrentDays } from '../src/Date';


const extractDayNumber = (checkDate: number) => Number((new Date(checkDate)).toDateString().split(" ")[2])
describe('Date Functions', () => {

    it("addDay", () => {
        const time = 1000 * 60 * 60 * 24;
        expect(extractDayNumber(addDay(time, 0))).toBe(1)
        expect(extractDayNumber(addDay(time, 1))).toBe(2)
        expect(extractDayNumber(addDay(time, 2))).toBe(3)
    })
    it("subtractDay", () => {
        const time = 1000 * 60 * 60 * 24 * 10;
        expect(extractDayNumber(subtractDay(time, 0))).toBe(10)
        expect(extractDayNumber(subtractDay(time, 1))).toBe(9)
        expect(extractDayNumber(subtractDay(time, 2))).toBe(8)
    })

    it("check addCurrentDays", () => {
        expect(addCurrentDays(5) > Date.now()).toBeTruthy()
    })
    it("check subtractDays", () => {
        expect(subtractCurrentDays(5) < Date.now()).toBeTruthy()
    })

})