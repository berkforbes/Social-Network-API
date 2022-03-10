const { truncate } = require("fs");
const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    vaidate: [validateEmail, "Please enter a valid email address"],
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
});

// retrieve the length of users friends array
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) =>
    total + friend.length +1, 0)
})