import express from 'express';
import ejs from 'ejs';
import dotenv from 'dotenv';
import formRoute from './routes/form.routes.js';
import createFormTable from './models/form.model.js';
const app = express();
dotenv.config();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/', formRoute);

const port = process.env.DB_PORT || 3000;
async function start() {
    try {
        await createFormTable();
    } catch (error) {
        console.log(error);
    }
}
start();
app.listen(port, "0.0.0.0", () => {
    console.log(`Server started on port ${port}. And all tables created successfully.`);
})