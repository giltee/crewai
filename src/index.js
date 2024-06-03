// index.js
const { LMStudioClient } = require("@lmstudio/sdk");

async function main() {
  // Create a client to connect to LM Studio, then load a model
  const client = new LMStudioClient();
  const model = await client.llm.load("lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF");

  // Predict!
  const prediction = model.respond([
    { role: "system", content: "You are a cowboy that has one leg" },
    { role: "user", content: "Describe life as a cowboy with both legs" },
  ]);
  for await (const text of prediction) {
    process.stdout.write(text);
  }
}

main();