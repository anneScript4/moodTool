// SAD BUTTON

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
    
    // Change clicked button opacity
        var sadOpacity = document.getElementById("sad");
        sadOpacity.style.opacity = "1";
    
    // Show Underlying Emotions
        var underlyingTag = document.getElementById("underlying-sad");
        underlyingTag.classList.remove("hide");
        underlyingTag.classList.add("underlying");
    
    // Show Complete button
        var completeTag = document.getElementById("complete");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
}
    
    
    // HAPPY BUTTON
    
function happy(){
    // Hide all other Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
        
        var disgustHide = document.getElementById("disgust");
        disgustHide.classList.add("hide");
        
        var fearHide = document.getElementById("fear");
        fearHide.classList.add("hide");
        
        var angerHide = document.getElementById("anger");
        angerHide.classList.add("hide");
        
        var surpriseHide = document.getElementById("surprise");
        surpriseHide.classList.add("hide");
            
    // Change clicked button opacity
        var happyOpacity = document.getElementById("happy");
        happyOpacity.style.opacity = "1";
        
    // Show Underlying Emotions
        var underlyingTag = document.getElementById("underlying-happy");
        underlyingTag.classList.remove("hide");
        underlyingTag.classList.add("underlying");
        
    // Show Complete button
        var completeTag = document.getElementById("complete");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
}
    
    
    // DISGUST BUTTON
    
function disgust(){
    // Hide all other Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
        
        var happyHide = document.getElementById("happy");
        happyHide.classList.add("hide");
        
        var fearHide = document.getElementById("fear");
        fearHide.classList.add("hide");
        
        var angerHide = document.getElementById("anger");
        angerHide.classList.add("hide");
        
        var surpriseHide = document.getElementById("surprise");
        surpriseHide.classList.add("hide");
        
    // Change clicked button opacity
        var happyOpacity = document.getElementById("happy");
        happyOpacity.style.opacity = "1";
        
    // Show Underlying Emotions
        var underlyingTag = document.getElementById("underlying-disgust");
        underlyingTag.classList.remove("hide");
        underlyingTag.classList.add("underlying");
        
    // Show Complete button
        var completeTag = document.getElementById("complete");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
}
    
    
    // FEAR BUTTON
    
function fear(){
    // Hide all other Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
        
        var happyHide = document.getElementById("happy");
        happyHide.classList.add("hide");
        
        var disgustHide = document.getElementById("disgust");
        disgustHide.classList.add("hide");
        
        var angerHide = document.getElementById("anger");
        angerHide.classList.add("hide");
        
        var surpriseHide = document.getElementById("surprise");
        surpriseHide.classList.add("hide");
        
    // Change clicked button opacity
        var happyOpacity = document.getElementById("happy");
        happyOpacity.style.opacity = "1";
        
    // Show Underlying Emotions
        var underlyingTag = document.getElementById("underlying-fear");
        underlyingTag.classList.remove("hide");
        underlyingTag.classList.add("underlying");
        
    // Show Complete button
        var completeTag = document.getElementById("complete");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
}
    
    
    // ANGER BUTTON
    
function anger(){
    // Hide all other Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
        
        var happyHide = document.getElementById("happy");
        happyHide.classList.add("hide");
        
        var disgustHide = document.getElementById("disgust");
        disgustHide.classList.add("hide");
        
        var fearHide = document.getElementById("fear");
        fearHide.classList.add("hide");
        
        var surpriseHide = document.getElementById("surprise");
        surpriseHide.classList.add("hide");
        
    // Change clicked button opacity
        var happyOpacity = document.getElementById("happy");
        happyOpacity.style.opacity = "1";
        
    // Show Underlying Emotions
        var underlyingTag = document.getElementById("underlying-anger");
        underlyingTag.classList.remove("hide");
        underlyingTag.classList.add("underlying");
        
    // Show Complete button
        var completeTag = document.getElementById("complete");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
}
    
    
    // SURPRISE BUTTON
    
function surprise(){
    // Hide all other Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
        
        var happyHide = document.getElementById("happy");
        happyHide.classList.add("hide");
        
        var disgustHide = document.getElementById("disgust");
        disgustHide.classList.add("hide");
        
        var fearHide = document.getElementById("fear");
        fearHide.classList.add("hide");
        
        var angerHide = document.getElementById("anger");
        angerHide.classList.add("hide");
        
    // Change clicked button opacity
        var happyOpacity = document.getElementById("happy");
        happyOpacity.style.opacity = "1";
        
    // Show Underlying Emotions
        var underlyingTag = document.getElementById("underlying-surprise");
        underlyingTag.classList.remove("hide");
        underlyingTag.classList.add("underlying");
        
    // Show Complete button
        var completeTag = document.getElementById("complete");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
}
    
    
    // Complete Button
    
function complete(){
    // Show Quote
        var completeTag = document.getElementById("completeId")
        completeTag.style.display = "block"
    
    // Hide Everything Else on the page
    
    // Hide Emotion Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
    
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
    
    // Hide Underlying Emotions
        var underlyingSad = document.getElementById("underlying-sad");
        underlyingSad.classList.add("hide");
        underlyingSad.classList.remove("underlying");
    
        var underlyingHappy = document.getElementById("underlying-happy");
        underlyingHappy.classList.add("hide");
        underlyingHappy.classList.remove("underlying");
    
        var underlyingDisgust = document.getElementById("underlying-disgust");
        underlyingDisgust.classList.add("hide");
        underlyingDisgust.classList.remove("underlying");
    
        var underlyingFear = document.getElementById("underlying-fear");
        underlyingFear.classList.add("hide");
        underlyingFear.classList.remove("underlying");
    
        var underlyingAnger = document.getElementById("underlying-anger");
        underlyingAnger.classList.add("hide");
        underlyingAnger.classList.remove("underlying");
    
        var underlyingSurprise = document.getElementById("underlying-surprise");
        underlyingSurprise.classList.add("hide");
        underlyingSurprise.classList.remove("underlying");
        
    // Hide Complete Button
        var completeTag = document.getElementById("complete");
        completeTag.classList.add("hide");
        completeTag.classList.remove("complete");
    
}