const helper = require('./helper.js');

//sales copy
exports.sales_page_headlines = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Sales Page Headlines",
    user_response: `Generate ${amount} attention-grabbing headlines for a sales page about ${product} that address the main pain points of the target audience and emphasize the unique selling points.`
  }
  helper.makeRequest(data, res);
}

exports.product_descriptions = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "Product Description",
    user_response: `Develop a new keyword-rich, informative, and captivating product summary/description that is around 1000 words for ${product}. 
    Generate a bulleted list of 5 possible H1 headings for this product page, and make each H1 less than 7 words each. Please also include bulleted 
    list of broad match keywords that were used to accomplish writing the product summary. Write a persuasive and professional sounding Meta Title 
    and Description that integrates similar language present in the new product summary text. Make sure to include a numerical aspect in the Meta Title.
     Do not echo my prompt. Do not remind me what I asked you for. Do not apologize. Do not self-reference. Write all output in English.`
  }
  helper.makeRequest(data, res);
}

exports.cta_phrases = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Call to Action Phrases",
    user_response: `Generate ${amount} compelling call-to-action phrases for ${product} that encourage the user to take the desired action, such as signing up or making a purchase.`
  }
  helper.makeRequest(data, res);
}

exports.ad_copy = async function (req, res) {
  const { benefits, product, customer } = req.body;

  const data = {
    prompt: "Ad Copy",
    user_response: `Write an ad copy for ${product} that has ${benefits} for a target audience who ${customer}, focusing on the main selling points and including a strong call to action.`
  }
  helper.makeRequest(data, res);
}

//blog posts
exports.blog_post_SEO = async function (req, res) {
  const { keyword } = req.body;

  const data = {
    prompt: "Blog Post SEO",
    user_response: `write a 100% unique, creative and in a human-like style article of minimum 1000 words. There should be minimum 7 headings and 10 sub-headings in the content. For the keyword ${keyword} using Markdown formatting.
    Try to use contractions, idioms, transitional phrases, interjections, dangling modifiers, and colloquialisms, and avoiding repetitive phrases and unnatural sentence structures. 
    The article should include SEO meta-description (must include the ${keyword} in the description), Introduction, a click worthy short title. Also, Use the seed keyword as the first H2. Always use a combination of paragraphs, lists, and tables for a better reader experience.  Write at least one paragraph with heading ${keyword} . Write down atleast 5 faqs with answers and conclusion. 
    Make sure article is plagiarism free. Don't forget to use question mark (?) at the end of questions. Try not to change the original ${keyword}  while writing the Title. Try to use The ${keyword} 2-3 times in article. try to include ${keyword} in headings as well. write a content which can easily pass ai detection tools test.`
  }
  helper.makeRequest(data, res);
}

exports.blog_post_titles = async function (req, res) {
  const { amount, topic } = req.body;

  const data = {
    prompt: "Blog Post Titles",
    user_response: `Generate ${amount} interesting and SEO-friendly blog post titles about ${topic} that will engage readers and encourage them to click through.`
  }
  helper.makeRequest(data, res);
}

exports.blog_post_outlines = async function (req, res) {
  const { wordcount, topic } = req.body;

  const data = {
    prompt: "Blog Post Outlines",
    user_response: `Create a detailed outline for a ${wordcount} word blog post about ${topic}, including main points, subheadings, and supporting information.`
  }
  helper.makeRequest(data, res);
}

exports.blog_content_upgrades = async function (req, res) {
  const { amount, topic } = req.body;

  const data = {
    prompt: "Blog Content Upgrades",
    user_response: `Generate ${amount} ideas for content upgrades to accompany blog posts about ${topic}, such as checklists, templates, or guides, that provide additional value to readers.`
  }
  helper.makeRequest(data, res);
}

exports.guest_post_pitches = async function (req, res) {
  const { target, author, topic } = req.body;

  const data = {
    prompt: "Guest Post Pitches",
    user_response: `Write a guest post pitch for ${target}, offering a high-quality article about ${topic} that will appeal to their audience and include a brief ${author} with relevant expertise.`
  }
  helper.makeRequest(data, res);
}

exports.promote_blog = async function (req, res) {
  const { amount, topic } = req.body;

  const data = {
    prompt: "Promote your Blog",
    user_response: `Generate a list of ${amount} tactics to promote a blog post about ${topic}, such as social media promotion, email marketing, or influencer outreach.`
  }
  helper.makeRequest(data, res);
}

//website copy
exports.homepage_copy = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "Homepage Copy",
    user_response: `Write a compelling homepage copy for a website about ${product}, focusing on the unique selling points, benefits, and a clear call to action.`
  }
  helper.makeRequest(data, res);
}

exports.about_us_copy = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "About Us Copy",
    user_response: `Write an engaging About Us page for a website about ${product}, telling the story of the brand and showcasing the expertise and values that set it apart.`
  }
  helper.makeRequest(data, res);
}

exports.services_copy = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "Services/Products Copy",
    user_response: `Write a descriptive and persuasive copy for a Services or Products page about ${product}, highlighting the key features, benefits, and unique selling points.`
  }
  helper.makeRequest(data, res);
}

exports.reviews_copy = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Testimonials/Reviews Copy",
    user_response: `Generate a list of ${amount} realistic and persuasive testimonials or reviews for ${product}, emphasizing the positive experiences of satisfied customers.`
  }
  helper.makeRequest(data, res);
}

exports.contact_page_copy = async function (req, res) {
  const { product } = req.body;

  const data = {
    prompt: "Contact us Page Copy",
    user_response: `Write a concise and inviting contact page for a website about ${product}, providing clear instructions on how to get in touch and what to expect in terms of response time.`
  }
  helper.makeRequest(data, res);
}

//press releases
exports.press_headlines = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Press Release Headlines",
    user_response: `Generate ${amount} newsworthy and attention-grabbing headlines for a press release about ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.press_body = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Press Release Body",
    user_response: `Write a well-structured press release body of ${amount} for ${product}, focusing on the key details, quotes, and a clear call to action for readers.`
  }
  helper.makeRequest(data, res);
}

exports.press_distribution = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Press Release Distribution Channels",
    user_response: `Generate a list of ${amount} targeted distribution channels for a press release about ${product}, such as relevant media outlets, journalists, or influencers.
    `
  }
  helper.makeRequest(data, res);
}