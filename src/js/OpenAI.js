import axios from 'axios'
export {createChatCompletion, created}

const created =  async (msg) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    body: msg,
    headers: myHeaders,
    method: 'POST',
    redirect: 'follow',
  };
  const res = await fetch("http://localhost:5000/find-complexity", requestOptions)
  const text = await res.text();
  return text
}
async function createChatCompletion(messages2, options2 = {}) {
  try {
    const messages = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\\n\\nHuman: Hello, who are you?\nIA:"
    const options = {  temperature:0.9,
      max_tokens:150,
      top_p:1,
      frequency_penalty:0.0,
      presence_penalty:0.6,
      stop:[" Human:", " AI:"]}
    const response = await axios.post("localhost:5000/find-complexity", {
      model: options.model || "gpt-3.5-turbo-instruct",
      messages,
      ...options,
    });
    debugger
    return response.data.choices;
  } catch (error) {
    console.error("Error creating chat completion:", error);
  }
}
