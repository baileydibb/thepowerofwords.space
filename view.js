var pos;

function display(link)
{
  nav = document.getElementsByTagName("nav");
  main = document.getElementsByTagName("main");
  studyName = document.getElementById("studyName");
  footer = document.getElementsByTagName("footer");
  view = document.getElementById("view");

  nav = nav[0];
  main = main[0];
  footer = footer[0]

  if (view.style.display == "block")
  {
    main.style.display = "block";
    nav.style.display = "block";
    studyName.style.display = "block";
    footer.style.display = "block";
    view.style.display = "none";
    view.firstElementChild.firstElementChild.src = "";
    window.scrollTo(pos[0], pos[1]);
  }
  else
  {
    var top  = window.pageYOffset;
    var left = window.pageXOffset;
    pos = [left, top];
    main.style.display = "none";
    nav.style.display = "none";
    studyName.style.display = "none";
    footer.style.display = "none";
    view.style.display = "block";
    var image = view.firstElementChild.firstElementChild;
    image.src = link.firstElementChild.src;
    image.onload = function(){calculate_aspect(image);}
  }
}

function calculate_aspect(image)
{
  var container = document.getElementById("view-img");

  var height = image.naturalHeight;
  var width = image.naturalWidth;

  if (container.clientWidth / width < container.clientHeight / height)
  {
    image.style.width = "100%";
    image.style.height = "auto";
  }
  else
  {
    image.style.height = "100%";
    image.style.width = "auto";
  }
}
