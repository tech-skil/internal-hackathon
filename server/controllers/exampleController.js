const Example = require('../models/exampleModel');

exports.createExample = async (req, res) => {
  try {
    const newExample = new Example(req.body);
    const savedExample = await newExample.save();
    res.status(201).json(savedExample);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllExamples = async (req, res) => {
  try {
    const examples = await Example.find();
    res.status(200).json(examples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};