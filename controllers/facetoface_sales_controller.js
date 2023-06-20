const helper = require('./helper.js');

// sales techniques
exports.opening_techniques = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Sales Opening Techniques",
    user_response: `Teach ${amount} effective opening techniques for face-to-face sales encounters that help establish rapport and engage the prospect in a conversation about ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.questioning_techniques = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Sales Questioning Techniques",
    user_response: `Demonstrate ${amount} questioning techniques that uncover the prospect's needs, preferences, and pain points related to ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.closing_techniques = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Sales Questioning Techniques",
    user_response: `Present ${amount} proven closing techniques for face-to-face sales encounters that lead to a successful sale of ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.handling_objections = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Sales Handling Objections Techniques",
    user_response: ` Share ${amount} for addressing common objections that may arise during face-to-face sales encounters for ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.sales_upselling = async function (req, res) {
  const { amount, product } = req.body;

  const data = {
    prompt: "Upselling and Cross-selling Techniques",
    user_response: `Explain ${amount} upselling and cross-selling techniques that can be used in face-to-face sales encounters to increase the value of a sale for ${product}.`
  }
  helper.makeRequest(data, res);
}

//body language communication
exports.reading_body_language = async function (req, res) {
  const { amount, product, business } = req.body;

  const data = {
    prompt: "Reading Prospect's Body Language",
    user_response: `Provide ${amount} for interpreting a prospect's body language and nonverbal cues during a face-to-face sales encounter, helping to gauge their interest and comfort level for ${business} and ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.salespersons_body_language = async function (req, res) {
  const { amount } = req.body;

  const data = {
    prompt: "Salesperson's Body Language",
    user_response: `Offer ${amount} for improving a salesperson's body language and nonverbal communication during a face-to-face sales encounter to project confidence, trustworthiness, and professionalism.`
  }
  helper.makeRequest(data, res);
}

exports.mirror_techniques = async function (req, res) {
  const { amount, product, business } = req.body;

  const data = {
    prompt: "Mirroring Techniques",
    user_response: `Teach ${amount} for mirroring a prospect's body language and tone of voice during a face-to-face sales encounter to establish rapport and make the prospect feel understood for ${business} and ${product}.`
  }
  helper.makeRequest(data, res);
}

//rapport building
exports.rapport_building = async function (req, res) {
  const { amount, product, business } = req.body;

  const data = {
    prompt: "Rapport Building Techniques",
    user_response: `Demonstrate ${amount} for building rapport with prospects during face-to-face sales encounters, including active listening, empathy, and genuine compliments for ${business} and ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.establish_trust = async function (req, res) {
  const { amount, product, business } = req.body;

  const data = {
    prompt: "Establishing Trust",
    user_response: `Share ${amount} for establishing trust with prospects during face-to-face sales encounters, such as being transparent, providing social proof, and displaying expertise for ${business} and ${product}.`
  }
  helper.makeRequest(data, res);
}

exports.maintain_relationships = async function (req, res) {
  const { amount, product, business } = req.body;

  const data = {
    prompt: "Maintaining Relationships",
    user_response: `Provide ${amount} for maintaining strong relationships with clients after a face-to-face sale, ensuring long-term loyalty and repeat business for ${business} and ${product}.`
  }
  helper.makeRequest(data, res);
}

//presentation
exports.presentation_structure = async function (req, res) {
  const { amount, product, business } = req.body;

  const data = {
    prompt: "Presentation Structure",
    user_response: `Teach ${amount} for structuring a compelling face-to-face sales presentation that highlights the value of ${product} and addresses the prospect's needs and concerns for for ${business} and ${product}`
  }
  helper.makeRequest(data, res);
}