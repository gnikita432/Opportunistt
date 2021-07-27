import Opportunitydescription from "../models/Opportunitydescription.js";

export const getOpportunities = async (req, res) => {
  try {
    const Opportunitydes = await Opportunitydescription.find();
    // console.log(Opportunitydescription);
    res.status(200).json(Opportunitydes);
  } catch (error) {
    res.status(404).json({message:error.message})
  }
};

export const createOpp = (req, res) => {
  res.send("Post creation");
};
