const mongoose = require("mongoose");
const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      minlength: [10, "Setup must be at least 10 characters long"],
      required: [true, "Setup is required"],
    },
    punchline: {
      type: String,
      minlength: [3, "Punchline must be at least 3 characters long"],
      required: [true, "Punchline is required"],
    },
  },
  { timestamps: true }
);
