const slugify = require('slugify')
const path = require('path')
const projects = require("./content/projects.json");

exports.createPages = ({ actions }) => {
  projects.forEach(project => {
    actions.createPage({
      path: `/projects/${slugify(project.name, {lower: true, strict: true})}`,
      component: path.resolve('./src/components/Project/index.js'),
      context: project,
    })
  })
}