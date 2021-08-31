const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

// routing
app.get('/', (req, res) => {

    const studentInfo = {
        name: 'Sergio',
        lastName: 'Puente',
        campus: 'Madrid',
        course: 'Web Dev (LT <strong>Germán</strong>)',
        date: 'August 2021',
        address: {
            street: 'García Luna',
            number: 22,
            city: 'Madrid'
        },
        debt: true,
        pending: 3200,
        cost: 7000,
        subjects: ['HTML', 'CSS', 'JS', 'MERN', 'EXPRESS']
    }

    res.render('home-page', studentInfo)
})

app.listen(3000, () => console.log('App listening on port 3000'))