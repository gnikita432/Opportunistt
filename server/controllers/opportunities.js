import Opportunitydescription from "../models/Opportunitydescription.js";

export const getOpportunities = async (req, res) => {
  try {
    const Opportunitydes = await Opportunitydescription.find();
    // console.log(Opportunitydescription);
    res.status(200).json(Opportunitydes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createOpp = async (req, res) => {
  const opp = req.body;
  const newOpp = new OppMessage(opp);

  try {
    await newOpp.save();
    res.status(201).json(newOpp);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
