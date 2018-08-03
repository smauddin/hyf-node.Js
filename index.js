const fs = require('fs');
const util = require('util');

const start = new Date();

// fs.readFile('./file1.txt', (err, data) => {
//     console.log('length file1: ', data.length);
//     const end = new Date();
//     console.log('total time ', end - start);
// });

const readFileP = util.promisify(fs.readFile);

const file1Promise = readFileP('file1.txt', 'utf8');
const file2Promise = readFileP('file2.txt', 'utf8');
const file3Promise = readFileP('file3.txt', 'utf8');
const file4Promise = readFileP('file4.txt', 'utf8');



Promise.all([file1Promise, file2Promise, file3Promise, file4Promise])
    .then((data) => {
        //const filesConcat = data[0] + " " + data[1] + " " + data[2] + " " + data[3];
        console.log('data', data);

        const filesJoin = data.join(" ");
        console.log('filesJoin');
        const array_Words = filesJoin.toLowerCase().split(/[^a-zA-Z0-9]/).filter(word => word.length > 0);
        let tempArray = [];
        let countArray = [];

        for (const word of array_Words) {
            let count = 0;
            if (tempArray.includes(word)) {
                countArray[tempArray.indexOf(word)]++;

            } else {
                count++;
                countArray.push(count);
                tempArray.push(word);
            }

        }

        for (let i = 0; i < tempArray.length; i++) {
            console.log(tempArray[i] + " " + countArray[i] + " " + "time(s).");
        }
        const end = new Date();
        console.log("Time Execution:", end - start);
    }).catch((err) => {
        if (err) throw err;
    });

    
    fs.readFile('file1.txt', 'utf8', (err, data) => {
        console.log(data, data[0]);
    });
