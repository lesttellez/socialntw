const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

//router.route('/').get(getUsers).post(createUser);
//outer.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

//router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;