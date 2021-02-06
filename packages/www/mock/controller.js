const { handleSuccessResponse } = require('./utils')

const _project = (id, userId, title) => ({
  id,
  userId,
  title,
})
const projects = [_project('AAA', '1111', 'AAAA'), _project('BBB', '1111', 'AAAA')]

const controller = {
  'GET /api/project': (req, res) => {
    return res.json(handleSuccessResponse(projects))
  },
}

module.exports = controller
