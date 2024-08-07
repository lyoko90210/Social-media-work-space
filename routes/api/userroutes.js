const router = require('express').Router();
const{
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteuser,
 // updateCourse,
  //deleteCourse,
} = require('../../controllers/usercontrllers.js');

// localhost:3001/api/user/
router.route('/').get(getUsers).post(createUser);

// localhost:3001/api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteuser);
  //.put(updateCourse)
  //.delete(deleteCourse);

module.exports = router;
