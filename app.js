const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', (req, res) => {
  res.send('这是node后台的内容')
})

app.get('/api/newsData', async (req, res) => {
  // 解决ajax跨域问题
  res.append('Access-Control-Allow-Origin', '*')
  res.append('Access-Control-Allow-content-type', '*')
  // 请求新闻相关数据
  let result = await axios.get(
    'https://i.snssdk.com/forum/home/v1/info/?activeWidget=1&forum_id=1656784762444839'
  )
  let dataList = result.data
  res.send(dataList)
})

app.get('/api/news', async (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')
  res.append('Access-Control-Allow-content-type', '*')
  // 请求相关数据
  let result = await axios.get(
    'https://i.snssdk.com/api/feed/forum_flow/v1/?activeWidget=1&query_id=1656810113086509&tab_id=1656810113086525&category=forum_flow_subject&is_preview=0&stream_api_version=82&aid=13&offset=0&count=20'
  )
  let dataList = result.data
  res.send(dataList)
})

app.listen(8080, () => {
  console.log('Server Start')
})
