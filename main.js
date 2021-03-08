Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:0
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id=" captured_image" src="'+data_uri+'"/>';
        });
}
console.log('ml5 version:', ml5.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/NHVOA0Czo/model.json',modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded");
}
