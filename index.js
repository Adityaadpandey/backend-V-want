const Express = require('express');
const BodyParser = require('body-parser');
const connectToMongo = require('./db');
const cors = require('cors');


const app = Express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(BodyParser.json());
connectToMongo();

app.get('/', (req, res) => { 
    res.send('Hello World');
});
app.use('/api/auth',require('./routes/auth'))

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
})