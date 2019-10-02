


$("#testBtn").click(function(){
  console.log("Hello");
})

$("#tb_0").click(function(){
  $("#article").load("javascript/schemaManage.html");
  console.log("Hello");
})

function oksSwitchTab(tab_id, tab_content) {
    // first of all we get all tab content blocks (I think the best way to get them
    // by class names)
    console.log("fnc op");
    var x = document.getElementsByClassName("tabcontent");
    //var x = document.getElementsByClassName("wrap");
    var i;
    console.log(x.length);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'; // hide all tab content
    }
    document.getElementById(tab_content).style.display = 'block'; // display the content of the tab we need

    // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
    var x = document.getElementsByClassName("tabmenu");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].className = 'tabmenu';
    }
    document.getElementById(tab_id).className = 'tabmenu active';
}


  Vue.component('view-section', {
    template: '#view-template'
  });

  Vue.component('input-section', {
    template: '#input-template'
  });

  // view section
  new Vue({
    el: '#view_section'
  });
  // input section
  new Vue({
    el: '#input_section'
  });

  $("#append_row").on("click", function() {
    var len = Number($("#list_table tr").length);
    console.log("len1 : " + len);
    var index;
    len -= 1;
    console.log("len2 : " + len);
    index = (len - 1) * 11;

    console.log("index : " + index);

    var str = document.getElementsByTagName('td')[index].childNodes[0].nodeValue;
    console.log("AAA : "+ str);

    //if(temp == '') return;

    $("#list_table").append(
      $("<tr>").append(
        $("<td>").append( Number(str) + 1 ),
        $("<td>").append( $("#add_Port").val() ),
        $("<td>").append( $("#add_RootID").val() ),
        $("<td>").append( $("#add_Password").val() ),
        $("<td>").append( ),
        $("<td>").append( $("#add_Role").val() ),
        $("<td>").append( $("#add_OutCompID").val() ),
        $("<td>").append( $("#add_Module").val() ),
        $("<td>").append( $("#add_Description").val() ),
        $("<td>").append(
          $("<a>").prop("href", "#").addClass("delete-link").append("DEL")
        ),
        $("<td>").append(
          $("<a>").prop("href", "https://naikiki87.github.io/naikiki-repo/mainUI.html").addClass("show-link").append("LINK")
        )
      )
    );
    $("#add_ID").val('');
    $("#add_Port").val('');
    $("#add_RootID").val('');
    $("#add_Password").val('');
    $("#add_Role").val('');
    $("#add_OutCompID").val('');
    $("#add_Module").val('');
    $("#add_Description").val('');
  });


  $("#list_table").on("click", ".delete-link", function () {
    $(this).parent().parent().remove();
  });

  $("#list_table").on("click", ".show-link", function () {
    console.log("Hello");
  });
