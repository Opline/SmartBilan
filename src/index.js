const express = require("express")
console.log('mount')
debugger
require("dotenv").config()
const {Configuration, OpenAIApi} = require("openai")
const app = express();
app.use(express.json());
app.all("/find-complexity", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

const configuration = new Configuration({apiKey: process.env.OPEN_AI_KEY})
const openAi = new OpenAIApi(configuration);

app.post("/find-complexity", async (req, res) => {
  try {
    console.log(req.body.prompt)
    const { prompt } = req.body
    const finalPrompt = `\n\nHuman:${prompt}\nAI:`
    const response = await openAi.createCompletion({model:"gpt-3.5-turbo-instruct",
      prompt :finalPrompt,
      temperature:0.6,
      max_tokens:500,
      top_p:1,
      frequency_penalty:0.0,
      presence_penalty:0.6,
      stop:[" Human:", " AI:"]})
    return res.status(200).json({success: true, data: response.data.choices[0].text})
  } catch (error) {
    return res.status(400).json({ sucess: false, error: error.response ? error.response.data : "There was an issue with the server"})
  }
})
  const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servir Listing on port ${port} `))
