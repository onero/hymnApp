//Write Psalmnumber 1-10 and retrieve
function getHymn() {
  var whichHymn = document.getElementById("whichHymn").value;

    for (var i in hymns) {
      document.getElementById("hymnText").innerHTML = hymns[whichHymn].text;
    }

};
