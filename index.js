// Add all models
const db = require('./models');

//CREATE A USER
/*db.profile.create({
    height: '5\'7"',
    weight: 150,
    gender: 'Male'
}).then(createdProfile => {
    console.log(createdProfile.get());
})
*/
// db.user.findOne().then((foundUser) => {
//     foundUser.createPet({
//         name: "Muffin",
//         species: 'Cat'
//     })
// })

// db.user.findOne().then((foundUser) => {
//     foundUser.getPets().then((foundPets) => {
//         console.log(foundPets);
//     })
// })

//LOOKUP
// db.pet.findOne({
//     where: {
//         name: 'Muffin'
//     }
// }).then((muffin) => {
//     muffin.getUser().then((foundUser) => {
//         console.log(foundUser)
//     })
// })

// CREATED NO USER
// db.pet.create({
//     name: 'Herc',
//     speceies: 'Min pin'
// }).then((herc) => {
//     console.log(herc)
// })


// SETS A FIELD ON AN EXISTING ROW---SEE ABOVE (HERC CREATED, NO USER)
db.pet.findOne({
    where: {
        name: 'Herc'
    }
}).then((herc) => {
    // const user will run after addUser - this won't work!
    // const user = db.user.findOne()
    // herc.addUser(user)

    db.user.findOne().then((foundUser) => {
        herc.setUser(foundUser)
    })
})

// Read from users table
// FIND ONE USER
// db.user.findOne({
//     where: { firstName: 'Sturgil' }
// }).then(foundUser => {
//     console.log(foundUser.get())
// })

//FIND ALL USERS
// db.user.findAll().then(allUsers => {
//     console.log(allUsers)
// });

// UPDATE A USER
/*
db.user.update({
    lastName: 'Stimpson'
}, {
    where: { firstName: 'Sturgil' }
}).then(numRowsChanged => {
    console.log(numRowsChanged)
});
*/

//Delete a user
// db.user.destroy({
//     where: { firstName: '' }
// }).then(numRowsDeleted => {
//     console.log(numRowsDeleted)
// })

// db.toy.create({
//     type: 'Squeaky',
//     color: 'red'
// });

// db.pet.findOne({
//     where: {
//         name: 'Muffin'
//     }
// }).then((muffin)=> {
//     db.toy.findOne({
//         where: {
//             color: 'red',
//             type: 'Squeaky'
//         }
//     }).then((foundToy) => {
//         muffin.addToy(foundToy)
//     })
// })

db.toy.findOne({
    where: {
        type: 'Squeaky',
        color: 'red'
    }
}).then((foundToy) => {
    foundToy.getPets().then((pets) => {
        console.log(pets)
    })
})