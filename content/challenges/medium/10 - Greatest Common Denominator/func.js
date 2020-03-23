// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.
module.exports = (int1, int2) => {
    //let log = console.log;  
    while (int2 != 0){
        r = int1
        int1 = int2
        int2 = r % int2
    }
    return int1
}
