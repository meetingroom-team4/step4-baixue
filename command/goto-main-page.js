let gotoZipToBar = require('./goto-zip-to-bar');
let gotoBarToZip = require('./goto-bar-to-zip');
let exit = require('./exit');
let invalidInput = require('./invalid input');

function mainPage(input) {
    return{
        text: `1.请将zipcode转换为barcode
2.请将barcode转换为zipcode
3.退出
请选择1～3：`,
        newMapping:{
            '1': gotoZipToBar,
            '2': gotoBarToZip,
            '3': exit,
            '#': invalidInput
        }
    }
}

module.exports = mainPage;