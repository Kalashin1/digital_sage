import * as express from 'express'
import * as dotenv from 'dotenv'

import { router } from './router/router'

dotenv.config()

const app = express()

app.use(express.json())
app.use(router)

app.listen(
  process.env.PORT || 3000,
  () => console.log(`app running, visit  http://localhost:${process.env.PORT || 3000}/`)
)