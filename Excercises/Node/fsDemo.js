import fs from 'fs/promises';

// readFile() - callback

// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// readFileSync() - Synchronous version

// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

// readFile() - Promise.then

// fs.readFile('./test.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err)); 


// // reaFile - async/await

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

// writeFile

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello this is me writing to the file');
    } catch (error) {
        console.log(error);
    }
}

// append file

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', "\nThis is appended text");
    } catch (error) {
        console.log(error);
    }
}


appendFile();