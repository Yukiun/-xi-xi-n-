const fiboProcess = function(n, preVal, prePreVal, begin) {
    if (n === begin) {
        return prePreVal
    } else {
        begin++
        return fiboProcess(n, prePreVal, prePreVal + preVal, begin)
    }
}
const fibo = function(n) {
    if (n <= 1) {
        return n
    } else {
        return fiboProcess(n, 0, 1, 2)
    }
}
