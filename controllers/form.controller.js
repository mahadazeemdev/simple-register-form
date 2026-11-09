import pool from '../config/database.js';
import createFormTable from "../models/form.model.js";

export const form_page = (req, res) => {
    res.render('form');
};

export const submit_form = async (req, res) => {
    const { email, password } = req.body;

    try {
        await pool.query(
            `INSERT INTO form_table (email, password) VALUES (?, ?)`,
            [email, password]
        );
        res.redirect('/');
    } catch (error) {
        res.send(error);
    }

};