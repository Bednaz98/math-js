import { RotaryNumberConfig, compareRotaryNow, getRotaryNumberArray, getRotaryString, getTFKey, getTFTimeDevisor, roundTime } from '../src/rotaryNumber'

describe('Rotary Numbers', () => {
    it('check devisorTime', () => {
        for (let i = 0; i < 120; i++) {
            const result = getTFTimeDevisor(i)
            expect(result % 60).toBeFalsy()
        }

    });
    it('roundTime Same time', () => {

        for (let i = 0; i < 1000; i++) {
            const result1 = roundTime(Date.now() * i + 2, 1)
            const result2 = roundTime(Date.now() * i, 1)
            expect(result1).toBe(result2)
        }
    });
    it('roundTime different time', () => {
        const result1 = roundTime(Date.now(), 1)
        for (let i = 50000; i < 60000; i++) {
            const result2 = roundTime(Date.now() * i, 1)
            expect(result1).not.toBe(result2)
        }
    });
    it('Test Key hash', () => {
        const key = "tsewharw"
        expect(getTFKey(key)).not.toBe(key)
    });
    const config: RotaryNumberConfig = {
        divisorMinutes: 1,

        TwoFactoryKey: "tjawe3",
    }
    const inputString = "tjawe3"
    it("getRotaryNumberArray Same", () => {

        const initTime = roundTime(Date.now(), 1)
        const initValue = getRotaryNumberArray(initTime, inputString, config)
        for (let i = 0; i < 1000; i++) {
            const time = roundTime(Date.now() + i, 1)
            const result = getRotaryNumberArray(time, inputString, config)
            expect(result).toEqual(initValue)
        }
    });
    it("getRotaryNumberArray Different", () => {

        const initTime = roundTime(Date.now(), 1);
        const initValue = getRotaryNumberArray(initTime, inputString, config);
        for (let i = 5; i < 10; i++) {
            const time = roundTime(Date.now() + i * 1000000, 1);
            const result = getRotaryNumberArray(time, inputString);
            expect(initValue).not.toEqual(result);
        }
    });
    it('check rotary string', () => {
        for (let i = 0; i < 10; i++) {
            const directTime = i * 1000
            const result = getRotaryString(Date.now() + directTime, inputString, config)
            expect(compareRotaryNow(result, inputString, config)).toBeTruthy()
        }

    })

    it('check rotary direct time', () => {
        for (let i = 0; i < 50; i++) {
            const directTime = i * 60 * 1000 * (config?.divisorMinutes ?? 5) - 1;
            const genRotary = getRotaryString(directTime, inputString, config)
            const result = compareRotaryNow(genRotary, inputString, config, directTime)
            expect(result).toBeTruthy()
        }

    })
});