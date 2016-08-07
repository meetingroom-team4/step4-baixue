let readline = require('readline');
let route = require('./route');

function main(input) {
    let response = route(input);
    console.log(response.text);

    if (response.rerun) {
        main(input);
    }
}

function start() {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function (input) {
        main(input);
    });

    main();
}
start();