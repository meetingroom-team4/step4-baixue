let {zipcodeToBarcode} = require('../core/zip-and-bar-exchange');

function zipToBar(zipcode) {
    let barcode = zipcodeToBarcode(zipcode);
    if(barcode === 'error!!!'){
        return{
            error: 'please input right zipcode'
        }
    }else {
        return{
            text: barcode,
            reset: true
        }
    }
}

module.exports = zipToBar;