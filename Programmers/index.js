function solution(arr) {
    let h = 0;
    let w = 0;
    let idxH = 0;
    let idxW = 0;
    let valueH = 0;
    let valueW = 0;
    let before = 0;
    let after = 0;
    arr.forEach((v, i) => {
        if (h < v[0]) {
            h = v[0]
            idxH = i
            valueH = v
        }
        if (w < v[1]) {
            w = v[1]
            idxW = i
            valueW = v
        }
    })

    before = h * w;
    console.log('h1: ', h)
    console.log('w1: ', w)
    console.log('idxH1: ', idxH)
    console.log('idxW1: ', idxW)

    arr[idxH] = [valueH[1], valueH[0]]


    h = 0;
    w = 0;
    idxH = 0;
    idxW = 0;
    valueH = 0;
    valueW = 0;
    after = 0;
    arr.forEach((v, i) => {
        if (h < v[0]) {
            h = v[0]
            idxH = i
            valueH = v
        }
        if (w < v[1]) {
            w = v[1]
            idxW = i
            valueW = v
        }
    })

    after = h * w;
    console.log('h2: ', h)
    console.log('w2: ', w)
    console.log('idxH2: ', idxH)
    console.log('idxW2: ', idxW)

    return before > after ? after : before


}

// console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
// console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))