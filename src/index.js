const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/caio', (req, res) => {
    res.send('Caiozinho');
});
require('./controllers/authController')(app);
/**app.get('/', (req, res)=>{
    res.send('OK');
})
app.listen(3000);**/
app.listen(3000);