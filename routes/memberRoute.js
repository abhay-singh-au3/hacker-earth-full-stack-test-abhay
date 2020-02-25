const express = require('express');
let router = express.Router();

const Member = require('../models/member');

router.get('/', (req, res) => {
    Member.find().limit(10)
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

router.get('/page/:page', (req, res) => {
    const page = req.params.page;
    let pageSkip = page * 10;
    Member.find().limit(10).skip(pageSkip)
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

router.get('/:memberID', (req, res) => {
    Member.findOne().where({ member_id: req.params.memberID })
        .exec()
        .then(docs => {
            if (docs) {
                res.status(200).json(docs)
            } else {
                res.status(404).json({ message: "No member found with that member_id" })
            }
        })
})

router.post('/widget', (req, res) => {
    const { amount, status } = req.body;
    Member.find()
        .where({ loan_amnt: { $lt: amount }, verification_status: status }).limit(10)
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                res.status(200).json(docs)
            } else {
                res.status(404).json({ message: "Nothing found!" })
            }
        })
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;