const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {
  async devs(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },
  async repos(req, res) {
    const { dev } = req.headers;

    const devs = await Dev.find();
    const repos = []

    function getColor(language) {
      switch (language) {
        case 'JavaScript':
          return 'blue'
        case 'C#':
          return 'pink'
        case 'C':
          return 'purple'
        case 'Java':
          return 'green'
        case 'HTML':
          return 'yellow'
        default:
          return 'blue'
      }
    }

    devs.forEach(dev => {
      dev.repos.forEach(repo => {
        repos.push({
          name: repo.name,
          language: {
            name: repo.languages[0],
            color: getColor(repo.languages[0])
          }
        });
      });
    });
    return res.json(repos);
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

      repos.push({
        name: repo.name,
        link: repo.url,
        languages
      })
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