$(document).ready(function() {

    function redirectWithDelay() {
        var redirectUrl = 'none.html';
        var delay = 2000;

        setTimeout(function() {
            window.location.href = redirectUrl;
        }, delay);
    }

 
    

    function validatesignup(event) {
        event.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();
        var confirmpassword = $("#confirmpassword").val();
        var gender = $("#genders").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var dob = $("#dataofbirth").val();
        var address = $("#address").val();
        var country = $("#country").val();

        if (username == "" || password == "" || confirmpassword == "") {
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

        if (password != confirmpassword) {
            $("#error").html("Passwords do not match");
            alert("Passwords do not match");
            return false;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $("#error").html("Invalid Email");
            alert("Invalid Email");
            return false;
        }

        var phonePattern = /^\d{11}$/;
        if (!phonePattern.test(phone)) {
            $("#error").html("Invalid Phone Number");
            alert("Invalid Phone Number");
            return false;
        }

        let today = new Date();
        let birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        if (dob == "") {
            $("#error").html("Invalid Date of Birth");
            alert("Invalid Date of Birth");
            return false;
        } else if (age < 18) {
            $("#error").html("You must be 18 years old to sign up");
            alert("You must be 18 years old to sign up");
            return false;
        }

        if (address == "") {
            $("#error").html("Invalid Address");
            alert("Invalid Address");
            return false;
        }

        if (country == "") {
            $("#error").html("Invalid Country");
            alert("Invalid Country");
            return false;
        }

        if (gender == "Select") {
            $("#error").html("Invalid Gender");
            alert("Please select one of the options");
            return false;
        }

        $("#error").html("");
        $("#success").html("Sign up successful! Welcome to the site!");
        redirectWithDelay();
        return true;
    }

    function resetbtn() {
        $("#error").html("");
        $("#success").html("");
        $("#username").val("");
        $("#password").val("");
        $("#confirmpassword").val("");
        $("#genders").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#dataofbirth").val("");
        $("#address").val("");
        $("#country").val("");
    }

    // Event bindings
    $(".signupbtn").click(validatesignup);
    $(".resetbtn").click(resetbtn);
    $("#formid").submit(validateinputs);
});
