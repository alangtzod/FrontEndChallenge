//Developer: Gutierrez Oviedo Alan Atzin
function getMultiplos(from, to, check3, check5) {
    for (let i = from; i <= to; i++) {
        if (i % check3 == 0) {
            if (i % check5 == 0) {
                console.log("FizzBuzz - " + i + "\n");
            } else {
                console.log("Fizz - " + i + "\n");
            }
        } else {
            if (i % check5 == 0) {
                if (i % check3 == 0) {
                    console.log("FizzBuzz - " + i + "\n");
                } else {
                    console.log("Buzz - " + i + "\n");
                }
            } else {
                console.log(i + "\n");
            }
        }
    }
}
var from = 1;
var to = 100;
var check3 = 3;
var check5 = 5;
getMultiplos(from, to, check3, check5);