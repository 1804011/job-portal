const mongoose = require("mongoose");
const validator = require("validator");
const jobSchema = mongoose.Schema(
  {
    jobName: {
      type: String,
      required: [true, "job name must be provided"],
    },
    companyName: {
      type: String,
      required: [true, "company name must be provided"],
    },
    location: {
      area: {
        type: String,
        required: [true, "area name must be provided"],
      },
      city: {
        type: String,
        required: [true, "city name must be provided"],
      },
    },
    Description: {
      type: String,
      maxLength: 500,
    },
    jobTypes: {
      type: String,
      enum: {
        values: ["part time", "full time", "intern"],
        message: "job types must be part time or full time or intern",
      },
      required: [true, "job types must be provided "],
    },
    salary: {
      type: Number,
      required: [true, "salary must be provided"],
      validate: {
        validator: (value) => {
          return value > 0;
        },
        message: "salary must be positive",
      },
    },
    tags: [
      {
        type: String,
        required: [true, "tags must be provided"],
        enum: {
          values: ["react", "node", "python", "php", "vue", "js"],
          message: "values must be react/node/python/php/vue/js",
        },
      },
    ],
    deadline: {
      type: Date,
      required: [true, "date must be provided"],
    },
  },
  {
    timestamps: true,
  }
);
const Job = mongoose.model("Job", jobSchema);
exports = Job;
