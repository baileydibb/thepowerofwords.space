window.onload = function generate_studyImage()
{
  var studies = [["46-summer-pictures", 46], 
		 ["barbara-kruger", 8],
                 ["bob-and-roberta-smith", 11],
                 ["douglas-coupland", 10],
                 ["kay-rosen", 8],
                 ["lawrence-weiner", 9],
                 ["logos", 7],
                 ["tauba-auerbach", 7],
                 ["typography", 12]
                ];

  var randomStudy = Math.round(Math.random() * (studies.length - 1));

  var randomImage = Math.round(Math.random() * (studies[randomStudy][1] - 1) + 1);
  if (randomStudy == 0)
  {
    src = "studies/" + studies[randomStudy][0] + "/image/" + randomImage + ".jpg";
  }
  else if (randomStudy == 5)
  {
    src = "studies/" + studies[randomStudy][0] + "/image/my-work/" + randomImage + ".png";
  }
  else
  {
  src = "studies/" + studies[randomStudy][0] + "/image/my-work/" + randomImage + ".jpg";
  }

  var studyImage = document.getElementById("studyImage");
  studyImage.setAttribute("src", src);
  studyImage.onload = function(){calculate_aspect(studyImage);}

  generate_moodBoardImage();
}

function generate_moodBoardImage()
{
  var randomImage = Math.round(Math.random() * 13 + 1);
  src = "mood-board/image/" + randomImage + ".jpg";

  var moodBoardImage = document.getElementById("moodBoardImage");
  moodBoardImage.setAttribute("src", src);
  moodBoardImage.onload = function(){calculate_aspect(moodBoardImage);}

  generate_finalPieceImage();
}

function generate_finalPieceImage()
{
  var randomImage = Math.round(Math.random() * 4 + 1);
  src = "final-piece/image/piece-" + randomImage + ".jpg";

  var finalPieceImage = document.getElementById("finalPieceImage");
  finalPieceImage.setAttribute("src", src);
  finalPieceImage.onload = function(){calculate_aspect(finalPieceImage);}
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
