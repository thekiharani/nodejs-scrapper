import { Router, Request, Response } from 'express'
import fs from 'fs'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Geek' })
})

router.get('/guardian', (req: Request, res: Response) => {
  fs.readFile('results/guardian.json', (err, data) => {
    if (err) throw err
    let posts = JSON.parse(data.toString())
    return res.status(200).json({ posts })
  })
})

router.get('/btc', (req: Request, res: Response) => {
  fs.readFile('results/btc.json', (err, data) => {
    if (err) throw err
    let posts = JSON.parse(data.toString())
    return res.status(200).json({ posts })
  })
})

export default router
