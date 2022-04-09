import { deleteUser, getAllUser, updateUser, getAllUserWithFilter } from './../controllers/users.controller';
import { validatorField } from './../middlewares/validator-field.middlewares';
import { Router } from 'express';
import { check } from 'express-validator';
import { registerUser } from '../controllers/users.controller';
const router = Router();
router.get('/', getAllUser);
router.get('/byFiltervaccine/:vaccinationType', getAllUserWithFilter);
router.post(
	'/register',
	[
		check('dni', 'El dni es obligatorio').not().isEmpty(),
		check('userName', 'El userName es obligatorio').not().isEmpty(),
		check('name', 'El name es obligatorio').not().isEmpty(),
		check('lasname', 'El lasname es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatorio').not().isEmpty(),
		check('rol', 'El rol es obligatorio').not().isEmpty(),
		check('password', 'El password es obligatorio').not().isEmpty(),
		check('email').isEmail(),
		validatorField
	],
	registerUser
);

router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
export default router;
