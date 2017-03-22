express = require('express')
router = express.Router()

router.get('/hello', (req, res, next)->
   res.send("你好,这是我的服务器")
)

module.exports = router
