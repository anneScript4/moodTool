// SAD BUTTON

function sad(){
    // Hide all other Buttons
        var happyHide = document.getElementById("happy");
        happyHide.classList.add("hide");
    
        var contentHide = document.getElementById("content");
        contentHide.classList.add("hide");
    
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
        var completeTag = document.getElementById("complete-container");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
    
    // Hide Text on Emotion
        document.getElementById("sad").innerHTML = ""
    }
    
    
    // HAPPY BUTTON
    
    function happy(){
    // Hide all other Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
        
        var contentHide = document.getElementById("content");
        contentHide.classList.add("hide");
        
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
        var completeTag = document.getElementById("complete-container");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
    
    // Hide Text on Emotion
    document.getElementById("happy").innerHTML = ""
    }
    
    
    // Content BUTTON
    
    function content(){
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
        var contentOpacity = document.getElementById("content");
        contentOpacity.style.opacity = "1";
        
    // Show Underlying Emotions
        var contentTag = document.getElementById("underlying-content");
        contentTag.classList.remove("hide");
        contentTag.classList.add("underlying");
        
    // Show Complete button
        var completeTag = document.getElementById("complete-container");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
    
    // Hide Text on Emotion
    document.getElementById("content").innerHTML = ""
    }
    
    
    // FEAR BUTTON
    
    function fear(){
    // Hide all other Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
        
        var happyHide = document.getElementById("happy");
        happyHide.classList.add("hide");
        
        var contentHide = document.getElementById("content");
        contentHide.classList.add("hide");
        
        var angerHide = document.getElementById("anger");
        angerHide.classList.add("hide");
        
        var surpriseHide = document.getElementById("surprise");
        surpriseHide.classList.add("hide");
        
    // Change clicked button opacity
        var fearOpacity = document.getElementById("fear");
        fearOpacity.style.opacity = "1";
        
    // Show Underlying Emotions
        var underlyingTag = document.getElementById("underlying-fear");
        underlyingTag.classList.remove("hide");
        underlyingTag.classList.add("underlying");
        
    // Show Complete button
        var completeTag = document.getElementById("complete-container");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
    
    // Hide Text on Emotion
    document.getElementById("fear").innerHTML = ""
    }
    
    
    // ANGER BUTTON
    
    function anger(){
    // Hide all other Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
        
        var happyHide = document.getElementById("happy");
        happyHide.classList.add("hide");
        
        var contentHide = document.getElementById("content");
        contentHide.classList.add("hide");
        
        var fearHide = document.getElementById("fear");
        fearHide.classList.add("hide");
        
        var surpriseHide = document.getElementById("surprise");
        surpriseHide.classList.add("hide");
        
    // Change clicked button opacity
        var angerOpacity = document.getElementById("anger");
        angerOpacity.style.opacity = "1";
        
    // Show Underlying Emotions
        var underlyingTag = document.getElementById("underlying-anger");
        underlyingTag.classList.remove("hide");
        underlyingTag.classList.add("underlying");
        
    // Show Complete button
        var completeTag = document.getElementById("complete-container");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
    
    // Hide Text on Emotion
    document.getElementById("anger").innerHTML = ""
    }
    
    
    // SURPRISE BUTTON
    
    function surprise(){
    // Hide all other Buttons
        var sadHide = document.getElementById("sad");
        sadHide.classList.add("hide");
        
        var happyHide = document.getElementById("happy");
        happyHide.classList.add("hide");
        
        var contentHide = document.getElementById("content");
        contentHide.classList.add("hide");
        
        var fearHide = document.getElementById("fear");
        fearHide.classList.add("hide");
        
        var angerHide = document.getElementById("anger");
        angerHide.classList.add("hide");
        
    // Change clicked button opacity
        var surpriseOpacity = document.getElementById("surprise");
        surpriseOpacity.style.opacity = "1";
        
    // Show Underlying Emotions
        var underlyingTag = document.getElementById("underlying-surprise");
        underlyingTag.classList.remove("hide");
        underlyingTag.classList.add("underlying");
        
    // Show Complete button
        var completeTag = document.getElementById("complete-container");
        completeTag.classList.remove("hide");
        completeTag.classList.add("complete");
    
    // Hide Text on Emotion
    document.getElementById("surprise").innerHTML = ""
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
    
        var contentHide = document.getElementById("content");
        contentHide.classList.add("hide");
    
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
    
        var underlyingContent = document.getElementById("underlying-content");
        underlyingContent.classList.add("hide");
        underlyingContent.classList.remove("underlying");
    
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
    