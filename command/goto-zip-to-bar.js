let zipToBar = require('./zipcode-to-barcode');

function gotoZipToBar(input) {
    return{
        text: 'please input zipcode',
        newMapping:{
            '#': zipToBar
        }
    }
}

module.exports = gotoZipToBar;