const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const analyzeComplaint = async (req, res) => {
  try {
    const { description } = req.body;

    const prompt = `
You are an AI complaint analyzer.

Analyze this complaint:
"${description}"

Return:
1. Priority
2. Department
3. Summary
4. Auto Response

Respond ONLY in JSON format like:
{
  "priority":"",
  "department":"",
  "summary":"",
  "autoResponse":""
}
`;

    const completion =
      await client.chat.completions.create({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const responseText =
      completion.choices[0].message.content;

    const result = JSON.parse(responseText);

    res.json(result);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  analyzeComplaint,
};