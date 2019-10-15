function toggleMenu()
{
  menu = document.getElementById("menu");
  menuButton = document.getElementById("menubutton")

  if (menu.style.display == "inline-block")
  {
    menu.style.display = "";
    menuButton.style.filter = "";
  }
  else
  {
    menu.style.display = "inline-block";
    menuButton.style.filter = "brightness(80%)";
  }
}
