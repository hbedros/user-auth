  $(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATA_BASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: "",
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
    };

    firebase.initializeApp(config);

  });