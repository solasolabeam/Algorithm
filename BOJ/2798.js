let fs = require('fs')
let input = fs.readFileSync("dev/stdin").toString().trim()

input = input.split('\n')
let goal = Number(input[0].split(' ')[1])
let arr = input[1].split(' ')
let max = 0;
let sum = 0;

for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            sum = Number(arr[i]) + Number(arr[j]) + Number(arr[k]);
            if (sum <= goal) {
                if (max < sum) {
                    max = sum
                }
            }
        }
    }
}

console.log(max)