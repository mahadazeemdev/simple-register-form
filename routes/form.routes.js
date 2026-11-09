import express from 'express';
import * as formController from '../controllers/form.controller.js';
const router = express.Router();

router.get('/', formController.form_page);
router.post('/submit', formController.submit_form);

export default router;