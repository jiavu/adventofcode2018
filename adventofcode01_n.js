// https://adventofcode.com/2018/day/1#part2


const Http = new XMLHttpRequest();
const url='https://adventofcode.com/2018/day/1/input';

let frqChangeList;
let frqChangeListInt;
let result;
let newFreqs;
let reachedTwice;


Http.open("GET", url);
Http.send();
Http.onreadystatechange = function(e){
    if (this.readyState === XMLHttpRequest.DONE) {
        let resp = this.response;   //let resp = this.responseText; (both returning a string.)

        //test:
        resp = "+7\n+7\n-2\n-7\n-4";

        frqChangeList = resp.split("\n");
        frqChangeListInt = [];
        result = 0;
        newFreqs = [0];

        // get resulting frequency:
        for (let i=0; i < frqChangeList.length-1; i++) {
            let a = parseInt(frqChangeList[i]);             //or: let a = Number(frqChangeList[i]);
            frqChangeListInt.push(a);
            result += a;
            newFreqs.push(result);
        }
        console.log("Resulting frequency: " + result);

        // get 1st frequency reached twice:
        for (let i=0; i < newFreqs.length-1; i++) {
            let frq = newFreqs[i];
            
            for (let j=i; j < frqChangeListInt.length-1; j++) {
                frq += frqChangeListInt[j];

                console.log("index " + j +":"+frqChangeListInt[j]);

                if ( newFreqs[i] == frq) {
                    reachedTwice = frq;
                    break;
                }
            }
            if (reachedTwice) {
                console.log("reached twice: " + reachedTwice);
                break;
            }
        }
    }
};