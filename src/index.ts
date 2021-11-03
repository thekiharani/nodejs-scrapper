import express, { Request, Response } from 'express'
import { bitconScrapper, guardianScrapper } from './scrapper'
import router from './routes'

const app = express()
app.use(express.json())

app.use('/', router)

// guardianScrapper()
// bitconScrapper()

app.listen(3009, () => {
  console.log('Dev server running on: http://localhost:3009')
})
