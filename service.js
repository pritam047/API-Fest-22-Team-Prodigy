const Meme = require("./models/Meme");

// fastify-openapi-glue library expects the method names in the Service class 
// to match the `operationId` from each path in your schema. 
// That's how it will know the request method (GET/POST, etc) and the schema 
// for the request/response of each route
class Service {
  constructor() {}

  getMemes = async (_req, res) => {
    const Memes = await Meme.find();
    res.send(Memes);
  };

  addMeme = async (req, res) => {
    // create and save Meme to db
    console.log(req.body);
    const newMeme = await Meme.create(req.body);

    res.code(201).send(newMeme);
  };

  getMeme = async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that Meme exists
    const findMeme = await Meme.findById(id);

    if (findMeme) {
      res.send(findMeme);
    } else {
      res.code(404).send({ message: `Meme with id '${id}' not found` });
    }
  };

  updateMeme = async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that Meme exists
    const updtMeme = await Meme.findById(id);

    if (updtMeme) {
      // Update Meme in database
      await Meme.updateOne(req.body);
      // send empty response with status 204
      res.code(204).send({message: `Meme with id ${id} updated`});
    } else {
      res.code(404).send({ message: `Meme with id '${id}' not found` });
    }
  };

  deleteMeme = async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that restuarant exists
    const delMeme = await Meme.findById(id);

    if (delMeme) {
      // Delete Meme from database
      await Meme.findByIdAndRemove(id);
      // send empty response with status 204
      res.code(204).send({message: `Meme with id ${id} deleted`});
    } else {
      res.code(404).send({ message: `Meme with id '${id}' not found` });
    }
  };
}

module.exports = Service;