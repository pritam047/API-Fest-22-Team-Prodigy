const fastify = require("fastify")({ logger: true });
const { nanoid } = require("nanoid");

/* Example of defining a route for GET / */

fastify.get("/", async (req, res) => {
  res.send({ message: "hello world!" });
});


// Start the server!
const start = async () => {
    try {
      await fastify.listen(3000);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  start();