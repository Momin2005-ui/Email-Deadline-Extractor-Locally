// passport passpoer-local express-session express-flash

const express = require('express');
const cors = require('cors');
const app=express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))




app.listen(3000, () => {
    console.log("Server started on port 3000");
})