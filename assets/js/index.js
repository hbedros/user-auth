  $(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyALJlqbV2CBSFy-nTDjDn5N_0fow6CiziU",
        authDomain: "user-auth-e01be.firebaseapp.com",
        databaseURL: "https://user-auth-e01be.firebaseio.com",
        projectId: "user-auth-e01be",
        storageBucket: "",
        messagingSenderId: "387653187343"
    };

    firebase.initializeApp(config);

    $(".register form").on("submit", function(event){
        event.preventDefault();

        var email = $(".register .email").val();
        var password = $(".register .password").val();
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(user){
                console.log(user);
            })
            .catch(function(err){
                console.log(err);
            });   
    });

    $(".login form").on("submit", function(event){
        event.preventDefault();

        var email = $(".login .email").val();
        var password = $(".login .password").val();
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(user){
                console.log(user);
            })
            .catch(function(err){
                console.log(err);
            });   
    });
    
  });