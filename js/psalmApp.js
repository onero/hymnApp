//Write Psalmnumber 1-10 and retrieve
function getPsalm() {
  var whichPsalm = document.getElementById("whichPsalm").value;

    for (var i in psalms) {
      document.getElementById("psalmText").innerHTML = psalms[whichPsalm].text;
    }

};
