// api/index.js
//https://github.com/dynamis/lyceum/blob/main/nuxt-with-express/express/index.js
import express from "express";

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


router.get('/test', function(req, res) {
  res.json({ msg: ['Test successful!!!!!', 'test2'] })
})

app.use('/api', router);


export default fromNodeMiddleware(app);