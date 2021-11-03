import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs'

type Post = {
  title: string | undefined
  url: string | undefined
}

export const guardianScrapper = async () => {
  const URL = 'https://www.theguardian.com/international'
  const res = await axios(URL)
  const html = res.data
  const $ = cheerio.load(html)

  const posts: Post[] = []
  $('.fc-item__title', html).each(function () {
    const title = $(this).text()
    const url = $(this).find('a').attr('href')

    posts.push({
      title,
      url,
    })
  })

  fs.writeFileSync('results/guardian.json', JSON.stringify(posts))

  console.log('Done')
}

export const bitconScrapper = () => {
  const URL = 'https://news.bitcoin.com'
  axios(URL)
    .then((res) => {
      const html = res.data
      const $ = cheerio.load(html)
      const posts: Post[] = []
      $('.story--medium__info', html).each(function () {
        const title = $(this).find('h6').text()
        const url = $(this).find('a').attr('href')

        posts.push({
          title,
          url,
        })
      })

      fs.writeFileSync('results/btc.json', JSON.stringify(posts))
    })
    .catch((err) => {
      console.log(err)
    })
}
