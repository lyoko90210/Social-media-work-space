const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
 // updateCourse,
  //deleteCourse,
} = require('../../controllers/usercontrllers.js');

// localhost:3001/api/user
router.route('/').get(getUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:userId')
  .get(getSingleUser)
  //.put(updateCourse)
  //.delete(deleteCourse);

module.exports = router;
