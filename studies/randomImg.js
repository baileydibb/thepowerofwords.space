window.onload =
function generate_bkImage()
{
  var randomImage = Math.round(Math.random() * (7) + 1);
  src = "barbara-kruger/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("bkImage");
  image.setAttribute("src", src);

  generate_barsImage();
}

function generate_barsImage()
{
  var randomImage = Math.round(Math.random() * (10) + 1);
  src = "bob-and-roberta-smith/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("barsImage");
  image.setAttribute("src", src);

  generate_dcImage();
}

function generate_dcImage()
{
  var randomImage = Math.round(Math.random() * (9) + 1);
  src = "douglas-coupland/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("dcImage");
  image.setAttribute("src", src);

  generate_krImage();
}

function generate_krImage()
{
  var randomImage = Math.round(Math.random() * (7) + 1);
  src = "kay-rosen/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("krImage");
  image.setAttribute("src", src);

  generate_logosImage();
}

function generate_logosImage()
{
  var randomImage = Math.round(Math.random() * (6) + 1);
  src = "logos/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("logosImage");
  image.setAttribute("src", src);

  generate_typoImage();
}

function generate_typoImage()
{
  var randomImage = Math.round(Math.random() * (11) + 1);
  src = "typography/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("typoImage");
  image.setAttribute("src", src);
}
