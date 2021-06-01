export function sum (a, b) {
    return a + b
}

export function sumWithLoggs (a, b) {
    console.log('in logger', logger(sum(a, b)))
    console.log('sum', sum(a, b))
}

export function logger (func) {
    console.log('called func')
    func()
}

export function hasProfileAvatar (profile) {
    return Boolean(!profile.hiddenAvatar && profile.avatar)
}