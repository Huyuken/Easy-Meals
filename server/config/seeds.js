const db = require('./connection');
const { User, Favorite, Grocery, Recipe } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
    firstName: 'Sebastian',
    lastName: 'Casanovas',
    email: 'test1@email.com',
    password: 'testpassword',
    });

    await User.create({
        firstName: 'Alfredo',
        lastName: 'Morales',
        email: 'test2@email.com',
        password: 'testpassword',
        });

    await User.create({
        firstName: 'Brian',
        lastName: 'Campero',
        email: 'test3@email.com',
        password: 'testpassword',
        });
        
    await User.create({
        firstName: 'Christopher',
        lastName: 'Cristobal',
        email: 'test4@email.com',
        password: 'testpassword',
        });

    console.log('Users seeded!');

    process.exit();
});
