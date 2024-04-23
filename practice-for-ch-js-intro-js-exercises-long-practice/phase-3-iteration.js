// Your code here
Array.prototype.bubbleSort = function() {
    let sorted = false;

    while(!sorted) {
        sorted = true
        for (let i = 0; i < this.length - 1; i++ ) {
            let j = i+1 
            if (this[i] > this[j]) {
                let temp = this[i]
                this[i] = this[j]
                this[j] = temp
                sorted = false
            }
        };
    }
    return this
};


arr = [6, 5, 3, 1, 8]

console.log(arr.bubbleSort());

String.prototype.substrings = function() {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j <= this.length; j++) {
            arr.push(this.slice(i, j));
        };
    };
    return arr
};

const string = "Hello" // -> ['H', 'He', 'Hel', etc...]
console.log(string.substrings())