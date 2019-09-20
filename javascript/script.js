/*
Vue.component('component-a', {
  template: `<div id="div1" class='div-content' style="display:none;">
    <p class='no-drag'> BOX </p>
  </div>`
})

Vue.component('component-b', {
  template: `<div id="div2" class='div-content' style="display:none;">
    <p class='no-drag'> BOX </p>
  </div>`
})
Vue.component('component-c', {
  template: `<div id="div3" class='div-content' style="display:none;">
    <p class='no-drag'> BOX </p>
  </div>`
  //'<div> hello world CCC !!!</div>'
})
Vue.component('component-d', {
  template: `<div id="div4" class='div-content' style="display:none;">
    <p class='no-drag'> BOX </p>
  </div>`
  //'<div> hello world CCC !!!</div>'
})


new Vue({
  el: '#app'
})
*/


var drag_flag=0;
var src;
var dest;
var x1, y1, x2, y2;
var divE1, divE2;
var divwid1, divhei1, divwid2, divhei2;
var div_cnt = 0;

var test2 = document.getElementById("context-menus");
//var contextmenu = document.getElementByClassName(".div-content");
/*
function toggleOnOff(num) {
  num === 1 ? test.classList.add("active") : test.classList.remove("active");
}

function showMenu(x, y) {


  //test.setAttribute('style', "top :" + y + "px; left : "+x+"px");
  console.log("here test");
  test.style.top = y + "px";
  test.style.left = x + "px";

}
*/
/*
function createDIV() {
  var obj = document.getElementById("contents");
  var newDIV = document.createElement("div");

  div_cnt += 1;

  newDIV.innerHTML = "<p class='no-drag'> CC </p>";

  newDIV.setAttribute("id", "div" + div_cnt);
  newDIV.setAttribute('class', "div-content");

  obj.appendChild(newDIV);

}
*/

var check = $("input[type='checkbox']");
check.click(function(){
  if(drag_flag == 0) {
    drag_flag = 1;
    $('.div-content').draggable({disabled: false});
  }
  else {
    drag_flag = 0;
    $('.div-content').draggable({disabled: true});
  }
  $(".toggle").toggle();
  console.log(drag_flag);
});

$(function() {
  $(document).on("click","#linkid",function(){
    console.log("line clicked");
    var p = this.parentElement; // 부모 HTML 태그 요소
    p.removeChild(this);
  });

  $(document).on("contextmenu",".div-content",function(){
    event.preventDefault();

    console.log(event.target.id);

    test2.style.left = event.clientX + "px";
    test2.style.top = event.clientY + "px";
    test2.classList.add("active");
    console.log(event.clientX);
  });

  $(document).on("click","*",function(){
    test2.classList.remove("active");
  });


  $("div").bind({
    mousedown : function(event) {
      event.stopPropagation();
      if(drag_flag == 1) {
        //$('.div-content').draggable({disabled: false});
      }
      else {
        //$('.div-content').draggable({disabled: true});

        var divE1 = $(event.target);
        var divid = $(event.target).attr('id');


        //console.log(divid);

        var divclass = $(event.target).attr('class');
        var divx = divE1.offset().left;
        var divy = divE1.offset().top;

        //console.log("x : " + divx);
        //console.log("y : " + divy);

        divwid1 = divE1.width();
        divhei1 = divE1.height();
        x1 = divx-200;
        y1 = divy-80;
        //x1 = divx + divwid1/2;
        //y1 = divy + divhei1/2;

        //console.log("Start : x : " + x1 + ", y : " + y1);
      }
    },
    mouseup : function(event) {
      event.stopPropagation();
      if(drag_flag == 1) {} // do nothing
      else {
        divE2 = $(event.target);
        var divid = $(event.target).attr('id');
        var divx = divE2.position().left;
        var divy = divE2.position().top;

        divwid2 = divE2.width();
        divhei2 = divE2.height();
        dest = divid;
        x2=divx-200;
        y2=divy-80;
        //x2 = divx + divwid2/2;
        //y2 = divy + divhei2/2;

        if(dest == "parent" || dest =="app" || dest == "contents" || dest == "aside" || dest == "header" ) {

          console.log("choosed background");
        }
        else {
          if(src == dest) {}
          else{
            //console.log("Dest : x : " + x2 + ", y : " + y2);

            //console.log("Height2 : " + divhei2);

            addlink(x1, y1, x2, y2, divwid1, divhei1, divwid2, divhei2);
            //addlink(x1, y1, x2, y2);
          }
        }
      }
    }
  });
});
