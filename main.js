var SpeechRecognition = window.webkitSpeechRecognition;
var recog = new SpeechRecognition();
function st()
{
    recog.start();
}
recog.onresult = function(event){
    console.log(event);
    eg = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = eg;
    speak()
}
function speak()
{
    var synth = window.speechSynthesis;
    sd = document.getElementById("textbox").value;
    ut = new SpeechSynthesisUtterance(sd);
    synth.speak(ut);
    Webcam.attach("#camera")
}
Webcam.set({
height:360, width:360,image_format:'jpg',jpg_quality:90
});
camera = document.getElementById("camera")