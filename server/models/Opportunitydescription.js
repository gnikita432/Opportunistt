import mongoose from "mongoose";

const opportunitySchema = mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  creator: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Opportunitydescription = mongoose.model(
  "Opportunitydescription",
  opportunitySchema
);

export default Opportunitydescription;
