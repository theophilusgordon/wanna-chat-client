const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the file"],
    },
    description: {
      type: String,
      required: [true, "Please provide a title for the file"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("File", fileSchema);
