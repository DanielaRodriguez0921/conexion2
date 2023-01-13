const { Router } = require('express');
const { getUsers, updateUsers, createUsers, deleteUsers } = require('../controllers/users');


const router = Router();


router.post('/crear', createUsers)
router.get('', getUsers);
router.post('/actualizar', updateUsers);
router.delete('/eliminar/:id', deleteUsers);

module.exports = router;