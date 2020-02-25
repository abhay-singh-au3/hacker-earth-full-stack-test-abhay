const csv = require('csvtojson');
const Member = require('./models/member');

const insertData = async (path) => {
    const jsonArray = await csv().fromFile(path)
    for(let elem of jsonArray) {
        const member = new Member({...elem})
        member.save()
    }
}

module.exports = insertData
