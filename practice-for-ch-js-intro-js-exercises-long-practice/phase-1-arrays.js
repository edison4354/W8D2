// Your code here
Array.prototype.uniq = function() {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (!arr.includes(this[i])) {
            arr.push(this[i])
        }
    }
    return arr
}

console.log([1,2,2,3,3,3].uniq()) // => [1,2,3]

Array.prototype.twoSum = function() {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0 ){
                arr.push([i, j])
            }
        }
    }
    return arr
}

console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]

Array.prototype.transpose = function() {
    let arr = []

    for (let i = 0; i < this.length; i++) {
        let sub_arr = []
        for (let j = 0; j < this.length; j++) {
            sub_arr.push(this[j][i])
        }
        arr.push(sub_arr)
    }
    return arr
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]
