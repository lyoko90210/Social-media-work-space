const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getthought(req, res) {
    try {
      const thoughts = await Thought.find();
      return res.json(thoughts);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSinglethought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      return res.json(thought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Create a thought
  async createthought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      return res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a course
  async deletethought(req, res) {
    try {
      const course = await Course.findOneAndDelete({ _id: req.params.userId });

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
  async updatethought (req, res) {
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
