let mainPage = require('./command/goto-main-page');

let defultMapping = {
    '#': mainPage
};
let mapping = defultMapping;

function route(input) {
    let command = mapping[input]|| mapping['#'];
    let response = command(input);

    if(response.error) {
        return{
            text: response.error
        }
    }
    if(response.reset) {
        mapping = defultMapping;
        return {
            text: response.text,
            rerun: true
        }
    }
    if(response.newMapping) {
        mapping = response.newMapping;
        return{
            text:response.text
        }
    }

    return{
        text: response.text
    }
}

module.exports = route;