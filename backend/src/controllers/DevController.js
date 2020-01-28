const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } }       
      ],
    })
    return res.json(users);
  },
  async store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ username: username });

    if (userExists)
      return res.json(userExists)

    const devResponse = await axios.get(`https://api.github.com/users/${username}`)
    const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`)
    const repos = [];

    async function addLanguages(repo) {
      const languagesReponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/languages`)
      const languages = [];
      for (const language in languagesReponse.data) {
        languages.push(language);
      }
      repos.push()
    }

    for (let index = 0; index < reposResponse.data.length; index++) {
      const repo = reposResponse.data[index];
      await addLanguages(repo);
    }

    const { name, avatar_url: avatar, bio } = devResponse.data

    const dev = await Dev.create({
      name,
      username,
      avatar,
      bio,
      repos
    })

    return res.json(dev)
  }
}