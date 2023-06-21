const helper = require('./helper.js');

//startup
exports.idea_finetuning = async function (req, res) {
  const { idea } = req.body;

  const data = {
    prompt: "Business Idea Finetuning",
    user_response: `I have an idea for a new company. Please give me feedback on the idea and ways to improve the idea. My startup idea is ${idea}`
  }
  helper.makeRequest(data, res);
}

exports.create_team = async function (req, res) {
  const { description } = req.body;

  const data = {
    prompt: "Create Your Team",
    user_response: `For a new company i want to know more about what kind of people i should hire. The team could consists of freelancers or fultime workers. What type of people are neccessary to make the company a succes. The company is ${description}`
  }
  helper.makeRequest(data, res);
}

exports.startup_strategy = async function (req, res) {
  const { company, status } = req.body;

  const data = {
    prompt: "Startup Strategy",
    user_response: `For a new company i am looking for a strategy and ideas to create the company. The idea is ${company} and i am already at ${status} stage. `
  }
  helper.makeRequest(data, res);
}

exports.idea_generator = async function (req, res) {
  const { amount, topic } = req.body;

  const data = {
    prompt: "Business Idea Generator",
    user_response: `Please write ${amount} amount of business ideas in ${topic}. Create a name for the company and write in a few sentences what the idea for the business is and why it is good.`
  }
  helper.makeRequest(data, res);
}

exports.pricing_strategy = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "Pricing Strategy",
    user_response: `Develop a pricing strategy for ${product} that considers cost, value, competition, and target market to optimize revenue and market share for company. Explain why you have set the prices at that point.`
  }
  helper.makeRequest(data, res);
}

exports.create_brand = async function (req, res) {
  const { description } = req.body;

  const data = {
    prompt: "Create A Brand",
    user_response: `for ${description} i am looking for a branding strategy. This includes the brands value, purpose, vision and ideal customer description.`
  }
  helper.makeRequest(data, res);
}

//growth strategy
exports.goto_market_strategy = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "Go To Market Strategy",
    user_response: `evelop a go-to-market strategy for ${product} that includes marketing, sales, distribution, and customer support plans.`
  }
  helper.makeRequest(data, res);
}

exports.digital_marketing_strategy = async function (req, res) {
  const { company } = req.body;

  const data = {
    prompt: "Digital Marketing Strategy",
    user_response: `Design a digital marketing strategy for ${company} that leverages SEO, SEM, social media, email marketing, and other digital channels to reach the target audience and drive customer acquisition.`
  }
  helper.makeRequest(data, res);
}

exports.content_marketing = async function (req, res) {
  const { company, topic, type } = req.body;

  const data = {
    prompt: "Content Marketing Strategy",
    user_response: `Create a one week content marketing strategy for ${company} that includes daily content ideas about ${topic} to engage and inform the target audience and support lead generation efforts. The content should be ${type}.`
  }
  helper.makeRequest(data, res);
}

exports.scarcity_principle = async function (req, res) {
  const { product, customer } = req.body;

  const data = {
    prompt: "Scarcity Principle",
    user_response: `Write a marketing strategy to implement the 'Scarcity Principle' to create a sense of urgency and desire for our ${product} among ${customer}. Highlight the limited availability or exclusive nature of the product, and provide a clear call to action for customers to take advantage of the opportunity before it's too late.`
  }
  helper.makeRequest(data, res);
}

exports.lean_startup = async function (req, res) {
  const { product, customer } = req.body;

  const data = {
    prompt: "Lean Startup",
    user_response: `Using the 'Lean Startup Methodology' framework, please outline a plan that involves rapid experimentation and iteration to find a scalable business model for our ${product} that will appeal to ${customer}. Describe the steps you would take to validate your assumptions and gather feedback from customers to inform your marketing strategy.`
  }
  helper.makeRequest(data, res);
}

exports.positive_conditioning = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "Positive Conditioning",
    user_response: `Using the 'Classical Conditioning' framework, please write a marketing strategy outline that associates our ${product} with positive outcomes and reinforces this association through repetition. Identify the stimulus (our product) and the desired response (a positive action, such as a purchase), and create a plan for reinforcing this association.`
  }
  helper.makeRequest(data, res);
}

//new venture
exports.business_names = async function (req, res) {
  const { amount, topic } = req.body;

  const data = {
    prompt: "Business Names",
    user_response: `Please create ${amount} amount of business name. Use this as a reference: ${topic}.`
  }
  helper.makeRequest(data, res);
}

exports.business_idea_generator = async function (req, res) {
  const { amount, topic } = req.body;

  const data = {
    prompt: "Business Idea Generator",
    user_response: `Please write ${amount} amount of business ideas in ${topic}. Create a name for the company and write in a few sentences what the idea for the business is and why it is good.`
  }
  helper.makeRequest(data, res);
}

exports.plan_development = async function (req, res) {
  const { idea } = req.body;

  const data = {
    prompt: "Business Plan Development",
    user_response: `Please create a checklist for setting up an idea that ${idea} with steps to create a succesfull company for it.`
  }
  helper.makeRequest(data, res);
}

exports.product_forecasting = async function (req, res) {
  const { idea } = req.body;

  const data = {
    prompt: "Product Demand/Forecasting",
    user_response: `Write a forecast/demand outline for a product that ${idea}. Create an introduction on how this product can do in the future, potential risks for long term and a short summary of how to improve upon the idea to make it more future proof.`
  }
  helper.makeRequest(data, res);
}