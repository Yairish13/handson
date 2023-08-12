const fs = require('fs');
const path = require('path');

const dummyJSONPath = path.join(__dirname, '../../data/data.json');

const readDummyJSON = () => {
    const jsonData = fs.readFileSync(dummyJSONPath, 'utf8');
    return JSON.parse(jsonData);
}
const products = readDummyJSON();