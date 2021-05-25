import * as faunadb from 'faunadb'
import * as dotenv from 'dotenv'

dotenv.config()

export const client = new faunadb.Client({ secret: process.env.SECRET_KEY })

