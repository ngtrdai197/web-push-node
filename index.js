const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require('path')
const { vapidKeys } = require('./key-web-push')

const app = express()
app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.json())

const PORT = 5000 || process.env.PORT

webpush.setVapidDetails(
  'mailto:ngtrdai290197@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

app.post('/subscribe', (req, res, next) => {
  const payload = JSON.stringify({
    title: 'You have new message',
    message: 'Welcome ....'
  })
  const subscription = req.body
  webpush.sendNotification(subscription, payload)
})

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`)
})
