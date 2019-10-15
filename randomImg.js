window.onload =
function generate_studyImage()
{
  var studies = [["barbara-kruger", 8],
                 ["bob-and-roberta-smith", 11],
                 ["douglas-coupland", 10],
                 ["kay-rosen", 8],
                 ["logos", 7],
                 ["typography", 12]];

  var randomStudy = Math.round(Math.random() * (studies.length - 1));

  var randomImage = Math.round(Math.random() * (studies[randomStudy][1] - 1) + 1);
  src = "studies/" + studies[randomStudy][0] + "/image/my-work/" + randomImage + ".jpg";

  var studyImage = document.getElementById("studyImage");
  studyImage.setAttribute("src", src);

  generate_moodBoardImage();
}

function generate_moodBoardImage()
{
  var randomImage = Math.round(Math.random() * 13 + 1);
  src = "mood-board/image/" + randomImage + ".jpg";

  var moodBoardImage = document.getElementById("moodBoardImage");
  moodBoardImage.setAttribute("src", src);

  generate_finalPieceImage();
}

function generate_finalPieceImage()
{
  var randomImage = Math.round(Math.random() * 4 + 1);
  src = "final-piece/image/piece-" + randomImage + ".jpg";

  var finalPieceImage = document.getElementById("finalPieceImage");
  finalPieceImage.setAttribute("src", src);
}
