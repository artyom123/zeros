module.exports = function getZerosCount(number) {
    let count = 0, i = 1, x = 0;

    while(x < number){
        x = Math.pow(5,i++);
        count += Math.floor(number / x);
    }
    return count;
}
