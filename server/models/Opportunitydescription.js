import mongoose from "mongoose";

const opportunitySchema = mongoose.opportunitySchema({
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
  "Opportunitiesdescription",
  opportunitySchema
);

export default Opportunitydescription;
