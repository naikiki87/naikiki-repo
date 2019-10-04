var xPos = (document.body.clientWidth / 2) - (w / 2);
//       xPos += window.screenLeft;  //듀얼 모니터일때....
   var yPos = (screen.availHeight / 2) - (h / 2);

   window.open(href,"pop_window","width="+w+",height="+h+", left="+xPos+", top="+yPos+", toolbars=no, resizable=no, scrollbars=no");

function taskAdd() {
  window.open("taskAdd.html",
  "a",
  //"width=700, height=430, left=100, top=50"
  "width=700, height=430, left="+xPos+", top="+yPos+", location=no, toolbars=no, resizable=no, scrollbars=no"
  //"height=300, left=100, top=50"
  );
}

function test() {
  alert("Hello");
}



function taskModify() {
  window.open("popupview.html",
  "a",
  "width=400, height=300, left=100, top=50, status=no"
  );
}

function taskMonitoring() {
  window.open("popupview.html",
  "a",
  "width=400, height=300, left=100, top=50"
  );
}
