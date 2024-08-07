const router = require('express').Router();
const{
  getthought,
  getSinglethought,
  createthought,
  updatethought,
  deletethought,
  // Import or define the updatethought function here
  //deleteCourse,
} = require('../../controllers/thoughtcontrollers.js');

// localhost:3001/api/user/
router.route('/').get(getthought).post(createthought);

// localhost:3001/api/user/:userId
router
  .route('/:user')
  .get(getSinglethought)
  .put(updatethought)
  .delete(deletethought);
  //.put(updateCourse)
  //.delete(deleteCourse);

module.exports = router;
