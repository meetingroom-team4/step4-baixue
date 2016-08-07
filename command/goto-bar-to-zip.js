let barToZip = require('./barcode-to-zipcode');

function gotoBarToZip(input) {
    return{
        text: 'please input barcode',
        newMapping:{
            '#': barToZip
        }
    }
}

module.exports = gotoBarToZip;