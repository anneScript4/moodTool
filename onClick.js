function sad(){
// Hide all other Buttons
    var happyHide = document.getElementById("happy");
    happyHide.classList.add("hide");

    var disgustHide = document.getElementById("disgust");
    disgustHide.classList.add("hide");

    var fearHide = document.getElementById("fear");
    fearHide.classList.add("hide");

    var angerHide = document.getElementById("anger");
    angerHide.classList.add("hide");

    var surpriseHide = document.getElementById("surprise");
    surpriseHide.classList.add("hide");

// Show Underlying Emotions
    var underlyingTag = document.getElementById("underlying-sad");
    underlyingTag.classList.remove("hide");
}