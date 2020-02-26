self.addEventListener('push', event => {
  const result = event.data.json()

  /** we can set icon for notification under body */
  self.registration.showNotification(result.title, {
    body: result.message
  })
})
