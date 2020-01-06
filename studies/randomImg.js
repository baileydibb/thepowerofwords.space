window.onload = function generate_bkImage()
{
  var randomImage = Math.round(Math.random() * (7) + 1);
  src = "barbara-kruger/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("bkImage");
  image.setAttribute("src", src);
  image.onload = function(){calculate_aspect(image);}

  generate_barsImage();
}

function generate_barsImage()
{
  var randomImage = Math.round(Math.random() * (10) + 1);
  src = "bob-and-roberta-smith/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("barsImage");
  image.setAttribute("src", src);
  image.onload = function(){calculate_aspect(image);}

  generate_dcImage();
}

function generate_dcImage()
{
  var randomImage = Math.round(Math.random() * (9) + 1);
  src = "douglas-coupland/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("dcImage");
  image.setAttribute("src", src);
  image.onload = function(){calculate_aspect(image);}

  generate_krImage();
}

function generate_krImage()
{
  var randomImage = Math.round(Math.random() * (7) + 1);
  src = "kay-rosen/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("krImage");
  image.setAttribute("src", src);
  image.onload = function(){calculate_aspect(image);}

  generate_lwImage();
}

function generate_lwImage()
{
  var randomImage = Math.round(Math.random() * (8) + 1);
  src = "lawrence-weiner/image/my-work/" + randomImage + ".png";

  var image = document.getElementById("lwImage");
  image.setAttribute("src", src);
  image.onload = function(){calculate_aspect(image);}

  generate_logosImage();
}

function generate_logosImage()
{
  var randomImage = Math.round(Math.random() * (6) + 1);
  src = "logos/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("logosImage");
  image.setAttribute("src", src);
  image.onload = function(){calculate_aspect(image);}

  generate_taImage();
}

function generate_taImage()
{
  var randomImage = Math.round(Math.random() * (6) + 1);
  src = "tauba-auerbach/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("taImage");
  image.setAttribute("src", src);
  image.onload = function(){calculate_aspect(image);}

  generate_typoImage();
}

function generate_typoImage()
{
  var randomImage = Math.round(Math.random() * (11) + 1);
  src = "typography/image/my-work/" + randomImage + ".jpg";

  var image = document.getElementById("typoImage");
  image.setAttribute("src", src);
  image.onload = function(){calculate_aspect(image);}

  generate_46spImage()
}

function generate_46spImage()
{
  var randomImage = Math.round(Math.random() * (45) + 1);
  src = "46-summer-pictures/image/" + randomImage + ".JPG";

  var image = document.getElementById("46spImage");
  image.setAttribute("src", src);
  image.onload = function(){calculate_aspect(image);}
}

function calculate_aspect(image)
{
  var container = document.getElementsByClassName("preview-img");
  container = container[0];
  var height = image.height;
  var width = image.width;
  if (width > height)
  {
    var padding = (container.clientHeight - height) / 2;
    image.style.padding = padding + "px 0px";
  }
}