
capitalletter = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "&#8679;",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];
  letter = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "&#8679;",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  $(document).ready(function () {
    function replacel() {
      alert($(".r2:nth-child(2)").text());
    }
    lowercase = true;
    theme = "white";
    $(".erase").click(function () {
      text = $("#display").html();
      if (text.substr(text.length - 6, 6) == "&nbsp;") {
        text = text.substr(0, text.length - 6);
      } else {
        text = text.substr(0, text.length - 1);
      }
      $("#display").html(text);
    });

    $(".i").click(function () {
      $("#display").append($(this).html());
    });

    $(".fiveline").click(function () {
      $("#display").append("<br>");
    });
    $(".up").click(function () {
      if (lowercase === true) {
        row = "";
        for (i = 0; i <= 10; i++) {
          $(".r2 span:nth-child(" + i + ")").html(capitalletter[i - 1]);
        }
        for (i = 10; i <= 19; i++) {
          b = i - 10;
          $(".r3 span:nth-child(" + b + ")").html(capitalletter[i - 1]);
        }
        for (i = 19; i <= 30; i++) {
          b = i - 19;
          $(".r4 span:nth-child(" + b + ")").html(capitalletter[i - 1]);
        }
        lowercase = false;
      } else {
        for (i = 0; i <= 10; i++) {
          $(".r2 span:nth-child(" + i + ")").html(letter[i - 1]);
        }
        for (i = 10; i <= 19; i++) {
          b = i - 10;
          $(".r3 span:nth-child(" + b + ")").html(letter[i - 1]);
        }
        for (i = 19; i <= 30; i++) {
          b = i - 19;
          $(".r4 span:nth-child(" + b + ")").html(letter[i - 1]);
        }
        lowercase = true;
      }
    });
    $(".theme").click(function () {
      if (theme == "white") {
        $(".key").addClass("keyd");
        $("#keyboard").attr("id", "keyboardtwo");
        $("#display").css({ background: "#133337", color: "#fff" });
        theme = "dark";
      } else {
        $(".key").removeClass("keyd");
        $("#keyboardtwo").attr("id", "keyboard");
        $("#display").css({ background: "#FFFFFF", color: "#000" });
        theme = "white";
      }
    });
  });