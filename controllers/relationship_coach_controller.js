const helper = require('./helper.js');

//friends
exports.making_new_friends = async function (req, res) {
  const { description } = req.body;

  const data = {
    prompt: "Making New Friends",
    user_response: `Provide a number of tips on how to make new friends in while being genuine and open. The situation that i have now is ${description}.`
  }
  helper.makeRequest(data, res);
}

exports.maintaining_friendships = async function (req, res) {
  const { challenges } = req.body;

  const data = {
    prompt: "Maintaining Friendships",
    user_response: `Suggest strategies for maintaining long-lasting friendships, even when faced with ${challenges}.`
  }
  helper.makeRequest(data, res);
}

exports.resolve_conflicts = async function (req, res) {
  const { description } = req.body;

  const data = {
    prompt: "Resolve Conflicts",
    user_response: `Please help me how to improve upon this situation ${description}.`
  }
  helper.makeRequest(data, res);
}

exports.write_letter = async function (req, res) {
  const { description, topic } = req.body;

  const data = {
    prompt: "Write A Letter",
    user_response: `Write a letter for a friend, these are the specefics for the friend: ${description} about ${topic}.`
  }
  helper.makeRequest(data, res);
}

//romantic
exports.find_partner = async function (req, res) {
  const { requirements, why } = req.body;

  const data = {
    prompt: "Find A Partner",
    user_response: `Share number of suggestions on how to find a compatible girlfriend or boyfriend, considering ${requirements}. This is what i find difficult and the reason why i don't have a partner ${why}.`
  }
  helper.makeRequest(data, res);
}

exports.improve_relationship = async function (req, res) {
  const { suggestions } = req.body;

  const data = {
    prompt: "Improve Relationship",
    user_response: `Share a number of tips on how i can improve my relationship with my partner. This is something that i think we can improve upon: ${suggestions}.`
  }
  helper.makeRequest(data, res);
}

exports.resolve_romantic_conflict = async function (req, res) {
  const { situation } = req.body;

  const data = {
    prompt: "Resolve Romantic Conflict",
    user_response: `A have a conflict with my partner, this is what happened ${situation}.`
  }
  helper.makeRequest(data, res);
}

exports.dealing_with_breakup = async function (req, res) {
  const { situation } = req.body;

  const data = {
    prompt: "Dealing With Breakup",
    user_response: `I have just broken up with my partner, please give me tips and advice on how to deal with the breakup. This is the story; ${situation}.`
  }
  helper.makeRequest(data, res);
}

//communication
exports.improve_communication = async function (req, res) {
  const { aspect } = req.body;

  const data = {
    prompt: "Improve Communication",
    user_response: `Explain a number of techniques to improve communication in relationships, with a focus on ${aspect}.`
  }
  helper.makeRequest(data, res);
}

exports.handle_conversation = async function (req, res) {
  const { situation } = req.body;

  const data = {
    prompt: "Handle Difficult Conversation",
    user_response: `Describe a number of strategies for handling difficult conversations in relationships, such as ${situation}.`
  }
  helper.makeRequest(data, res);
}

exports.nonverbal_communication = async function (req, res) {
  const { suggestion } = req.body;

  const data = {
    prompt: "Nonverbal Communication",
    user_response: `Provide number of tips on how to understand and interpret nonverbal communication cues in relationships. Use this as reference ${suggestion}.`
  }
  helper.makeRequest(data, res);
}

exports.create_message = async function (req, res) {
  const { say } = req.body;

  const data = {
    prompt: "Create a Message",
    user_response: `please write a message to someone to inform this person of ${say}.`
  }
  helper.makeRequest(data, res);
}