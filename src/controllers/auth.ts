import * as faunadb from 'faunadb'
import { Request, Response } from 'express'
import { client } from '../fauna.config'

const { Create, Get, Paginate, Match, Index, Ref } = faunadb.query

export const renderHomepage = async (req: Request, res: Response) => {
  const doc = await client.query(
    Get(
      Match(Index('by_name'), 'faith')
    )
  ).catch(e => console.log(e))

  res.json(doc)
}