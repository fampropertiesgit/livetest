// jshint esversion: 6

importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '347541004446'
});

const messaging = firebase.messaging();

let notificationAction = "";

// [START background_handler]
messaging.setBackgroundMessageHandler(function (payload) {
  const notificationTitle = payload.data.title;
  notificationAction = payload.data.url;

  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
// [END background_handler]

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow(notificationAction));
});