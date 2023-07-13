function isPrime(num) {

    // Converts 'num' argument to Number data type in case it's a String (if it's non-numerical
    // string, the value NaN is going to be assigned to 'num')
    num = Number(num);

    // In case 'num' is a negative or non-integer value or a string that could not be converted
    // to Number, then it's just not possible to check if it's a prime number.
    if (num < 0 || num === NaN || num % 1 !== 0) {
        console.log(`Não foi possível verificar se ${num} é um número primo`);
        return null;
    
    // Case to handle 0 and 1, which are not prime numbers. 
    } else if (num <= 1) {
        console.log(`${num} não é um número primo`);
        return false;

    // Case to handle any number above 2 (which is the first integer and only even prime number)
    // here is where most numbers are really going to be checked
    } else if (num >= 3) {

        // checks if the 'num' is an even number, which can never be prime (except 2)
        if (num % 2 === 0) {
            console.log(`${num} não é um número primo`);
            return false;
        }

        // Here we get the square root of 'num', which we'll use in the loop below
        const num_root = Math.sqrt(num);

        // This for loop checks if the number can be exactly divided (with rest 0) by i
        // and if that's the case, 'num' is not a prime number.
        // The loop starts at 3 and is updated by +2 every iteration so to go through odd values
        // only as even numbers would be redundant (as we've already checked the division by 2)
        // The condition for the loop is that 'i' is less or equal to the square root of 'num'
        // whereas if 'i' it's bigger it's confirmed that 'num' is a prime number *(see after loop).
        for (let i = 3; i <= num_root; i += 2){
            if (num % i === 0) {
                console.log(`${num} não é um número primo`);
                return false;
            }
        }

        // * To briefly try to reason this, having A * B = C, if factor 'A' is bigger than a C's
        // square root then factor 'B' has to be smaller than that same root, otherwise A * B
        // would be even bigger than C. So if we've checked that reach the moment when i > num_root
        // then, we've already checked that there's no factor smaller then num_root
    }
    
    // if the function reached this line, then 'num' is either a prime number which has already been
    // successfully checked by the previous loop or 2 which bypasses each conditional above and is
    // also a prime number.
    console.log(`${num} é um número primo`);
    return true;
}