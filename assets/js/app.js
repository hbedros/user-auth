$(document).ready(function() {

firebase.initializeApp(config);

$(".register form").on("submit", function(event){
    event.preventDefault();
        $(document).ready(function() {

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

});
    
});