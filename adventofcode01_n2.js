// https://adventofcode.com/2018/day/1#part2


const Http = new XMLHttpRequest();
const url='https://adventofcode.com/2018/day/1/input';
let resp;
let frqChangeList;
let frqChangeListInt;
let result;
let newFreqs;
let reachedTwice;


Http.open("GET", url);
Http.send();
Http.onreadystatechange = function(e){
    if (this.readyState === XMLHttpRequest.DONE) {
        resp = this.response;   //let resp = this.responseText; (both returning a string.)

        //test:
        resp = "+3\n+3\n+4\n-2\n-4\n";

        frqChangeList = resp.split("\n");

        frqChangeListInt = [];
        result = 0;
        newFreqs = [0];

        // get resulting frequency:
        for (let i=0; i < frqChangeList.length; i++) {
            let a = parseInt(frqChangeList[i]);             //or: let a = Number(frqChangeList[i]);
            if ( a || a == 0) {
                frqChangeListInt.push(a);
                result += a;
            }
            newFreqs.push(result);
        }
        console.log("Resulting frequency: " + result);


        // get 1st frequency reached twice:

        let tempResult = 0;
        let tempList = [0];

        function find() {
            for (let i=0; i < frqChangeListInt.length; i++) {
                
                tempResult += frqChangeListInt[i];

                tempList.some(function(element) {

                    if (tempResult == element) {
                        reachedTwice = element;
                        console.log("reachedTwice: " + reachedTwice)
                        return true;
                    }
                });

                if (reachedTwice) break;

                else tempList.push(tempResult);
            }

            if (!reachedTwice) find();
        }

        find();
    }
};