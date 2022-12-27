


/*
total no. of = 9
how may positive numbers = 3
how may zeros  = 2
how may negative numbers = 4

3/9 = 
2/ 9 = 
4 / 9
*/

const getRations = (arr) => {

    const totalNumbers = arr.length;
    let postiveNumbers = 0;
    let negativeNumbers = 0;
    let zeros = 0;



    arr.forEach(number => {
        if (number > 0) {
            postiveNumbers++
        }

        if (number < 0) {
            negativeNumbers++
        }

        if (number === 0) {
            zeros++
        }

    });

    console.log(+(postiveNumbers / totalNumbers).toFixed(6))
    console.log(+(negativeNumbers / totalNumbers).toFixed(6))
    console.log(+(zeros / totalNumbers).toFixed(6))

}


const arr = [1, 3, 4, 0, 0, -1, -9, -8, -3]
getRations(arr)

