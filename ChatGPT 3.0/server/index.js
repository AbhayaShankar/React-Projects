import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";

import { Configuration, OpenAIApi } from "openai";

const app = express();

env.config();

// for not getting errors on cross origins -- for more details refer npm docs
app.use(cors());

// app to use body parser -- npm docs refer
app.use(bodyParser.json());

// Configure new open AI api
const configuration = new Configuration({
  organization: "org-qsB5FqQU25jxzs30F9hyKHhA",
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

// listening on port
app.listen("3080", () => {
  console.log("Listening on Port 3080");
});

// dummy port to tset if the port is working
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// post route for sending requests.

app.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 1200,
      temperature: 0.5,
    });
    res.json({ message: response.data.choices[0].text });
  } catch (error) {
    console.log(err);
    res.send(err).status(400);
  }
});
