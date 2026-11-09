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

const port = process.env.DB_PORT;
async function start() {
    try {
        await createFormTable();
        app.listen(port, () => {
            console.log(`Server started on port ${port}. And all tables created successfully.`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();