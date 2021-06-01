import {sum, logger, sumWithLoggs, hasProfileAvatar} from "./utils";

const profileStub = {
    avatar: '/image.jpeg',
    hiddenAvatar: false,
    dateBirth: '01/01/1991',
    name: 'John',
    age: 27,
    status: 'I am alive'
}

describe('utils', () => {
    it('returns sum', () => {
        expect(sum(1, 2)).toBe(3)
    })

    it('sumWithLoggs', () => {
        const funcMock = jest.fn()
        const funcMock1 = jest.fn(() => {
            console.log('we tried to call func1')
        })

        expect(logger(funcMock)).toBe(undefined)
        expect(logger(funcMock1)).toBe(undefined)
    })

    it('hasProfileAvatar', () => {
        expect(hasProfileAvatar(profileStub)).toBe(true)

        expect(hasProfileAvatar({ ...profileStub, avatar: '' })).toBe(false)
        expect(hasProfileAvatar({ ...profileStub, hiddenAvatar: true })).toBe(false)
    })
})