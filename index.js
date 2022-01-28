const fastify = require("fastify")({ logger: true });
const { nanoid } = require("nanoid");
const mongoose = require("mongoose")
const cors = require("cors")


/* Example of defining a route for GET / */
require("dotenv").config();
fastify.get("/", async (req, res) => {
  res.send({ message: "hello world!" });
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