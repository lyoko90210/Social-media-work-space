
const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: function() {
          return this._createdAt;
        }
      },
    userName: 
      {
        type: String,
        required: true,

      },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
