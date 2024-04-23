// Your code here
function range(start, end) {
    let arr = []
    if (start === end) {
        return [end]
    }
    arr.push(start)
    return arr.concat(range(start+1, end));
}


//console.log(range(1,15));

function sumRec(arr) {
    if (arr.length === 0) {
        return 0
    }

    return arr[0] + sumRec(arr.slice(1))
}
   
//console.log(sumRec([1,2,3,4,5]));

function exp(b, n) {
    if (n === 0) {
        return 1
    }
    return b * exp(b, n - 1)
}

//console.log(exp(2,1800));


function exp(b, n) {
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return b
    }

    if (n%2 === 0) {
        return exp(b, n / 2) ** 2
    }

    if (n%2 !== 0) {
        return b * (exp(b, (n - 1) / 2) ** 2)
    }   
}

//console.log(exp(2,10000));

function fibonacci(n) {
    if (n === 1) {
        return [0]
    }
    if (n === 2) {
        return [0, 1]
    }

    fib_series = fibonacci(n-1)
    len = fib_series.length
    last_num = fib_series[len - 1] + fib_series[len - 2]
   return fib_series.concat(last_num) 
}
//console.log(fibonacci(10));

function deepDup(arr){
    let dup_arr = []

    if (arr.length === 0) {
       return []
    }

    arr.forEach(function(ele) {
        if (Array.isArray(ele)) {
          dup_arr.push(deepDup(ele))
        }
        else {
          dup_arr.push(ele)
        }
    }) 
    return dup_arr
}


arr = [1, [2], [3, [4]]]
console.log(deepDup(arr));