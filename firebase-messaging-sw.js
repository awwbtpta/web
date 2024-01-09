importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA6YdVjy7yfzjM_5zDsXmE4WStiSxROetU",
  authDomain: "awwbtpta.firebaseapp.com",
  databaseURL:
    "https://awwbtpta-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "awwbtpta",
  storageBucket: "awwbtpta.appspot.com",
  messagingSenderId: "811041662600",
  appId: "1:811041662600:web:48f5ad7a1b7436599aa13d",
  measurementId: "G-CWWRY84V9P",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
