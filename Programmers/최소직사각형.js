function solution(arr) {
    arr.forEach((v, i) => {
        if (v[0] < v[1]) {
            arr[i] = [v[1], v[0]]
        }
    })
    let h = 0;
    let w = 0;
    arr.forEach(v => {
        if (h < v[0]) {
            h = v[0]
        }
        if (w < v[1]) {
            w = v[1]
        }
    })

    return h * w
}
