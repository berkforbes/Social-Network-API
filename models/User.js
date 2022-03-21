const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat')
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: 'Username is required',
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: 'Email is required',
      unique: true,
      match: [/.+@.+\..+/]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// retrieve the length of users friends array
UserSchema.virtual("friendCount").get(function () {
  return this.friends.reduce((total, friend) => total + friend.length + 1, 0);
});

const User = model('User', UserSchema)

// export the User model
module.exports = User;