// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging.js');

const config = {
        apiKey: 'AIzaSyBp7MQkZHx00lpCthWsTd_0eO5Hc54bIso',
    authDomain: 'chanda-calculator-c702c.firebaseapp.com',
    projectId: 'chanda-calculator-c702c',
    storageBucket: 'chanda-calculator-c702c.appspot.com',
    messagingSenderId: '1086098697716',
    appId: '1086098697716'
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

self.addEventListener('sync', (event) => {
    if (event.tag === 'myBackgroundSync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    // Your background sync logic here (e.g., sync data to server)
    // You can use IndexedDB or any other storage mechanism.
    // Example: Fetch data from IndexedDB and send it to the server.
    // ...
}


