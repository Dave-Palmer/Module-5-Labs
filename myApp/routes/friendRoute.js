const express = require('express');
const router = express.Router();
const friends = require('../models/friends')

// const friends = [
//     {
//         id: 1,
//         name: 'Amy Adams',
//         age: 20,
//         gender: 'female'
//     },
//     {
//         id: 2,
//         name: 'Betty Brown',
//         age: 55,
//         gender: 'unknown'
//     },
//     {
//         id: 3,
//         name: 'Caitlin Coombs',
//         age: 21,
//         gender: 'female'
//     }
// ]

router.get('/all', (req, res) => {
    res.json(friends)
})

router.get('/:id', (req, res) => {
    console.log(req.params)
    //gets the value stored in id via request parameters
    let idParam = req.params.id;

    let matchingFriend = friends.find(friend => friend.id == idParam)
    res.json(matchingFriend)
})

router.post('/new', (req, res) => {
    let newFriend = req.body;
    console.log(newFriend)
    console.log(friends.length)
    if (!newFriend.id) {
        newFriend.id = friends.length + 1
    }
    friends.push(newFriend)
    res.json(newFriend)
})

module.exports = router;