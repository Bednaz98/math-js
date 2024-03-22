import { addCurrentDays, addDay, subtractDay, subtractCurrentDays } from '../src/Date';


const extractDayNumber = (checkDate: number) => Number((new Date(checkDate)).toDateString().split(" ")[2])
describe('Date Functions', () => {
    it("addDay", () => {
        const time = 1000 * 60 * 60 * 24;

        for (let i = 0; i > 10; i++) {
            expect(extractDayNumber(addDay(time, i))).toBe(i + 1)
        }

    })
    it("subtractDay", () => {
        const time = 1000 * 60 * 60 * 24;
        for (let i = 0; i < 10; i++) {
            expect(extractDayNumber(subtractDay(time * 10, i))).toBe(10 - i)
        }
    })

    it("check addCurrentDays", () => {
        expect(addCurrentDays(5) > Date.now()).toBeTruthy()
    })
    it("check subtractDays", () => {
        expect(subtractCurrentDays(5) < Date.now()).toBeTruthy()
    })

})