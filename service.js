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
    const newMeme = await Meme.create(req.body);

    res.code(201).send(newMeme);
  };

  getMeme = async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that Meme exists
    const Meme = await Meme.findById(id);

    if (Meme) {
      res.send(Meme);
    } else {
      res.code(404).send({ message: `Meme with id '${id}' not found` });
    }
  };

  updateMeme = async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that Meme exists
    const Meme = await Meme.findById(id);

    if (Meme) {
      // Update Meme in database
      await Meme.update(req.body);
      // send empty response with status 204
      res.code(204).send();
    } else {
      res.code(404).send({ message: `Meme with id '${id}' not found` });
    }
  };

  deleteMeme = async (req, res) => {
    // get id from path parameters
    const { id } = req.params;

    // check that restuarant exists
    const Meme = await Meme.findById(id);

    if (Meme) {
      // Delete Meme from database
      await Meme.findByIdAndRemove(id);
      // send empty response with status 204
      res.code(204).send();
    } else {
      res.code(404).send({ message: `Meme with id '${id}' not found` });
    }
  };
}

module.exports = Service;