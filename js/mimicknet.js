function drawImage(){
  var ctx = $("canvas")[0].getContext("2d"),
    img = new Image();

  img.onload = function(){
    ctx.drawImage(img, 0, 0, 500, 500);
    $("span").text("Loaded.");
  };
  img.src = "http://imgur.com/SmYfo2m";
  // img.crossOrigin = "Anonymous";
  $("span").text("Loading...");

  // mobilenet.load().then(model => {
  //   // Classify the image.
  //   model.classify(img).then(predictions => {
  //     console.log('Predictions: ');
  //     console.log(predictions);
  //   });
  // });
}


$("button").click(drawImage);
