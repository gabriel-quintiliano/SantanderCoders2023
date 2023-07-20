## Futher explanations on files

### 'questao 1 (Gabriel Quintiliano Prova 30-06-2023).txt' & 'questoes 2 a 6 (Gabriel Quintiliano Prova 30-06-2023).txt'

These are the files that were actually sent for Ada Tech for grading, although 'questao 1 (Gabriel Quintiliano Prova 30-06-2023).txt' is a JavaScript code snippet, I've sent it as a text file as it was allowed and by the time I also wasn't that familiar with Git and GitHub.

### isPrime-original.js

isPrime-original.js was not sent for grading, it's the exact same JavaScript code that's in 'questao 1 (Gabriel Quintiliano Prova 30-06-2023).txt' but now in a proper JavaScript file and with a more descriptive name.

### isPrime-rethought.js

isPrime-rethought.js was also not sent for grading, I started working on this file the day after the Coding Tank test, as after finishing the test while looking at everything more calmly, I've notice some minor misspellings and a logic error. isPrime-rethought.js is a code that intends to solve the same question #1, but with mistakes made now correct, better logic applied and former unforseen use cases addressed.

The <b>logic error</b> in 'questao 1 (Gabriel Quintiliano Prova 30-06-2023).txt' is that by trying to "cache" new prime numbers discovered in the knownPrimes array, so that latter executions of the isPrime function (still the same program execution) could be possibly faster by first checking if the current number being checked is either included among the already known primes (so we can return right away that the current number is prime) or if it's divisible by one of those (so we can return right away that the current number is NOT a prime)

Then, only if none of these conditions above is met the function will be checking number by number if there is any divisor of the current number, and that's where my logic error is, because also trying to optimize the fuction's execution, the next loop starts by the very next number relative to the last known prime, thus the fuction will only correctly identify prime numbers if the function is running checking numbers sequentially, if any non prime number is skipped over that's no big deal, but if the same happens with any prime number, then the second for loop might already start after all the divisor of the current number being checked.

The logic error can be clear seen when we execute the isPrime function as below:

[By this moment knownPrimes is an empty array]

isPrime(111) [this is not a prime number as it has 11 as a divisor (in adiction to 0 and 111), so knownPrimes keeps empty]
isPrime(31) [as this is a prime number, now knowPrimes includes 31]

[checking for 31 was enough to ruin the function's logic and now if we check for 111 again it will fail]

isPrime(111)
[by the fault logic applied, now the function will return that 111 is a prime number and will also include it in the knownPrimes array. This happend because the first for loop doesn't triggers the return command as 111 is not divisible by 31 and is also not included in knownPrimes, so when we look at the second for loop, we notice that it's initialized at 32 (31 + 1), and thus will only check for divisors of 111 above 32, which are inexistent (but for the 111) and based on that the functions mistakes 111 for a prime number]

[other examples of non prime numbers being mistaken for prime numbers just after the checking 31 would be EVERY EVEN NUMBER, as well as 25, 49, 111, among others]
