//myEach
Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

arr = [1,2,3,4,5]
// arr.myEach(function(ele){
//     console.log(ele);
// })


//myMap
Array.prototype.myMap = function(callback) {
    let arr = []
      this.myEach(function(ele){
         arr.push(callback(ele))
    })
    return arr
}

myMap = arr.myMap(function(ele){ return ele*2 })
//console.log(myMap);


//myReduce
Array.prototype.myReduce = function(callback, initialValue = 0) {
    //initialValue = initialValue || 0
    this.myEach(function(ele) {
        initialValue = callback(initialValue, ele)
    })
    return  initialValue;  
}

let callback = function(acc, el) {
    return acc + el;
}

console.log([1, 2, 3].myReduce(callback, 10));