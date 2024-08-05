const { User } = require('../models');

module.exports = {
  // Get all courses
  async getthought(req, res) {
    try {
      const users = await User.find()
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a course
  async getSinglethought(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
       



      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a course
  async createthought(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a course
  async deleteCourse(req, res) {
    try {
      const course = await Course.findOneAndDelete({ _id: req.params.courseId });

      if (!course) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      await Student.deleteMany({ _id: { $in: course.students } });
      return res.json({ message: 'Course and students deleted!' });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Update a course
  async updateCourse(req, res) {
    try {
      const course = await Course.findOneAndUpdate(
        { _id: req.params.courseId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!course) {
        return res.status(404).json({ message: 'No course with this id!' });
      }

      return res.json(course);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
