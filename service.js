// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
const urlB64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  console.log(outputArray)
  return outputArray
  
}

self.addEventListener('activate', async () => {
  // This will be called only once when the service worker is activated.    
  console.log("SW activated")
  try {
    const applicationServerKey = urlB64ToUint8Array(
      'BJPNR5HIy3FmJN1-5zc4XXvImuEEelaCgAHeS8ZV8scXnbcCStnCC0Beh4teH34kOSqnzSB3R-C3DRlJhcMLCoQ'
    )
    const options = { applicationServerKey, userVisibleOnly: true }
    const subscription = await self.registration.pushManager.subscribe(options)
    console.log(JSON.stringify(subscription))
  } catch (err) {
    console.log('Error', err)
  }
})
