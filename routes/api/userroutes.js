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

//get all only requires base url
// get one requires base url and req.params.userId (insert in url)
//post requires base url and req.body
// put/update requires base url and req.params.userId inserted into and req.body
// delete requires base url and req.params.userId inserted into url


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
