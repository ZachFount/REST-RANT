const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'images/emy-XoByiBymX20-unsplash.jpg',
    founded: 1997
}, {
    name: 'Coffee Cafe',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Coffee, Bakery',
    pic: '/images/louis-hansel-ZbNGCV0jyPw-unsplash.jpg',
    rants: 'best tasting coffee around',
    founded: 2020
},
{
    name: 'Bakers Bakery',
    city: 'Orlando',
    state: 'FL',
    cuisines: 'Coffee',
    pic: '/images/louis-hansel-U1uGNwt3DP4-unsplash.jpg',
    rants: 'should be your only choice',
    founded: 2021
}])

.then(() =>{
    console.log('success')
    process.exit()
})
.catch(() => {
    console.log('failure', err)
    process.exit
})