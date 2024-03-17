$(document).ready(function() {
    function validateinputs(event) {
        var username = $("#username").val();
        var password = $("#password").val();
        console.log(username);
        console.log(password);
    
        event.preventDefault(); // Prevent form submission
    
        if (username == "" || password == "") {
            alert("Username and password must be filled out");
            return false;
        }
    
        var usernamePattern = /^[a-zA-Z]\w+$/;
        if (!usernamePattern.test(username)) {
            $("#error").html("Invalid Username");
            alert("Username must start with a letter and only contain letters, numbers, and underscores");
            return false;
        }
    
        var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            $("#error").html("Invalid Password");
            alert("Password must be at least 8 characters long and contain at least one letter, one number, and one special character");
            return false;
        }
    
        $("#error").html("");
        $("#success").html("Welcome to the site!");
    
        // Redirect with a delay
        setTimeout(function() {
            window.location.href = 'none.html';
        }, 2000);
    
        return true;
    }

    $("#loginForm").submit(validateinputs);
});