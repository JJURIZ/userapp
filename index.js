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

// Read from users table
// FIND ONE USER
db.user.findOne({
    where: { firstName: 'Sturgil' }
}).then(foundUser => {
    console.log(foundUser.get())
})

//FIND ALL USERS
db.user.findAll().then(allUsers => {
    console.log(allUsers)
});

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
db.user.destroy({
    where: { firstName: '' }
}).then(numRowsDeleted => {
    console.log(numRowsDeleted)
})