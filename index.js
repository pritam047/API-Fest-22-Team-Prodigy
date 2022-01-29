const fastify = require("fastify")({ logger: true });
const openapiGlue = require("fastify-openapi-glue");
const { nanoid } = require("nanoid");
const mongoose = require("mongoose")
const cors = require("cors")

const Service = require("./service");


require("dotenv").config();

const glueOptions = {
  specification: `${__dirname}/schema.yaml`,
  service: new Service(),
};

fastify.register(openapiGlue, glueOptions);

/* Example of defining a route for GET / */
fastify.get("/", async (req, res) => {
  // res.send({ message: "hello world!" });
  res.redirect('/memes');
});


// Start the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    // Connect to DB
    mongoose
      .connect(process.env.DB_CONNECT_URI)
      .then(() => {
        console.log("MongoDB connected.");

        mongoose.set("toJSON", {
          virtuals: true,
          transform: (_doc, converted) => {
            delete converted._id;
          },
        });
      })
      .catch((err) => console.log(err));
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  start();