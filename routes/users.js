const { Router } = require('express');
const { getUsers, updateUsers, createUsers, deleteUsers } = require('../controllers/users');


const router = Router();


router.post('/crear', createUsers)
router.get('', getUsers);
router.post('/actualizar', updateUsers);
router.post('/eliminar', deleteUsers);

module.exports = router;