# Multiples of 3 and 5

## Description: 

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

### Python

    print sum(filter(lambda x: x%3==0 or x%5==0 , range(0, 1000)))


### Javascript

    var result = Array.apply(null, Array(1000)).map(function(_, i) {
        return i;
    }).reduce(function(prev, val) {
        return (val % 3 === 0 || val % 5 === 0) ? prev += val : prev;
    }, 0);

    console.log(result);
