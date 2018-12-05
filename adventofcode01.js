/*
Import jQuery for Console:

var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-3.1.1.min.js";
jq.onload = function(){ 
	jQuery.noConflict();
}
document.getElementsByTagName('head')[0].appendChild(jq);

=============================================================

Data isn't in json format, so this didn't work:

const url = "https://adventofcode.com/2018/day/1/input";

$.getJSON(url, function(result) {
    console.log(typeof result);
    console.log(result);
});

*/

/*
for refreshing knowledge:
https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa

=============================================================
*/

// https://adventofcode.com/2018/day/1#part2


const Http = new XMLHttpRequest();
const url='https://adventofcode.com/2018/day/1/input';

Http.open("GET", url);
Http.send();
Http.onreadystatechange = function(e){
    if (this.readyState === XMLHttpRequest.DONE) {
        let resp = this.response;   //let resp = this.responseText; (both returning a string.)

        //test:
        resp = "+7\n+7\n-2\n-7\n-4";

        const frqChangeList = resp.split("\n");
        let result = 0;
        let newFrqs = [0];
        let reachedTwice;

        // get resulting frequency:
        for (let i=0; i < frqChangeList.length-1; i++) {
            let a = parseInt(frqChangeList[i]);             //or: let a = Number(frqChangeList[i]);
            result += a;
            newFrqs.push(result);
        }

        console.log("Resulting frequency: " + result);


        /*
        // get 1st frequency reached twice:
        for (let i=0; i < newFrqs.length-1; i++) {

            for (let j=0; j <= i; j++) {

                if (j == i ) {
                    continue;
                }
                else if (newFrqs[i] == newFrqs[j]) {
                    reachedTwice = newFrqs[j];
                    console.log("1st frequency reached twice: " + reachedTwice);
                    break;
                }                
            }

            if (reachedTwice) break;
        }
        */
    }
};