const express = require('express');

// express app
const app = express();


// register view enginge
// app.set('view engine', 'ejs');
app.set('views', 'views');

// listen for requests
app.listen(3000);

// home
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// about
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
});

// create page
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
