function addlink(start_x, start_y, dest_x, dest_y, w1, h1, w2, h2) {

  console.log(start_x);
  var startpt_x = 0, startpt_y=0, destpt_x=0, destpt_y=0;
  var s_top = start_y;
  var d_top = dest_y;
  var s_bottom = start_y + h1;
  var d_bottom = dest_y + h2;
  var s_left = start_x;
  var d_left = dest_x;
  var s_right = start_x + w1;
  var d_right = dest_x + w2;

  var r_arrow_x, r_arrow_y, l_arrow_x, l_arrow_y;
  var m_arrow_x, m_arrow_y;
  var degree, v_degree;
  var arrow_size;
  var dif = 0.01;
  var arrow_len = 0.97;

/*
  console.log("s_top : " + s_top);
  console.log("d_top : " + d_top);
  console.log("s_bot : " + s_bottom);
  console.log("d_bot : " + d_bottom);
  console.log("s_left : " + s_left);
  console.log("d_left : " + d_left);
  console.log("s_right : " + s_right);
  console.log("d_right : " + d_right);
*/

  if(s_top >= d_bottom) {
    if(s_left >= (d_right + w2)) {
      console.log("case 1");
      startpt_x = s_left;
      startpt_y = s_top + h1/2;
      destpt_x = d_right;
      destpt_y = d_top + h2/2;
    }
    else if((s_right+w1) <= d_left) {
      console.log("case 2");
      startpt_x = s_right;
      startpt_y = s_top + h1/2;
      destpt_x = d_left;
      destpt_y = d_top + h2/2;
    }
    else {
      console.log("case 3");
      startpt_x = s_left + w1/2;
      startpt_y = s_top;
      destpt_x = d_left + w2/2;
      destpt_y = d_bottom;
    }
  }
  else if(s_bottom <= d_top) {
    if(s_left >= (d_right+w2)) {
      console.log("case 4");
      startpt_x = s_left;
      startpt_y = s_top + h1/2;
      destpt_x = d_right;
      destpt_y = d_top + h2/2;
    }
    else if((s_right+w1) <= d_left) {
      console.log("case 5");
      startpt_x = s_right;
      startpt_y = s_top + h1/2;
      destpt_x = d_left;
      destpt_y = d_top + h2/2;
    }
    else {
      console.log("case 6");
      startpt_x = s_left + w1/2;
      startpt_y = s_bottom;
      destpt_x = d_left + w2/2;
      destpt_y = d_top;
    }
  }
  else{
    if(s_left >= d_right) {
      console.log("case 7");
      startpt_x = s_left;
      startpt_y = s_top + h1/2;
      destpt_x = d_right;
      destpt_y = d_top + h2/2;
    }
    else if(s_right <= d_bottom) {
      console.log("case 8");
      startpt_x = s_right;
      startpt_y = s_top + h1/2;
      destpt_x = d_left;
      destpt_y = d_top + h2/2;
    }
  }

  degree = (destpt_y - startpt_y) / (destpt_x - startpt_x);
  v_degree = -1 / degree;

  console.log("start x : " + startpt_x + ", start y : " + startpt_y);
  console.log("dest x : " + destpt_x + ", dest y : " + destpt_y);

  console.log("degree : " + degree);
  console.log("v degree : " + v_degree);

  if(destpt_x >= startpt_x) {
    console.log("arrow case 3");

    m_arrow_x = destpt_x - arrow_len * 0.85;
    m_arrow_x = destpt_x - arrow_len * 0.85;

//    m_arrow_x = destpt_x * arrow_len;
    m_arrow_y = degree * (m_arrow_x - startpt_x) + startpt_y;

    console.log("Arrow x : " + m_arrow_x + ", Arrow y : " + m_arrow_y);

//r_arrow_x = m_arrow_x + dif;


    r_arrow_x = m_arrow_x * (1 + dif);
    r_arrow_y = v_degree * (r_arrow_x - m_arrow_x) + m_arrow_y;

    console.log("Arrow_r x : " + r_arrow_x + ", Arrow_r y : " + r_arrow_y);

//l_arrow_x = m_arrow_x - dif;
    l_arrow_x = m_arrow_x * (1 - dif);
    l_arrow_y = v_degree * (l_arrow_x - m_arrow_x) + m_arrow_y;
    console.log("Arrow_l x : " + l_arrow_x + ", Arrow_l y : " + l_arrow_y);
  }
  else {
    console.log("arrow case 2");

    m_arrow_x = destpt_x * (1/arrow_len);
    m_arrow_y = degree * (m_arrow_x - startpt_x) + startpt_y;

    console.log("Arrow x : " + m_arrow_x + ", Arrow y : " + m_arrow_y);

    r_arrow_x = m_arrow_x * (1 + dif);
    r_arrow_y = v_degree * (r_arrow_x - m_arrow_x) + m_arrow_y;

    console.log("Arrow_r x : " + r_arrow_x + ", Arrow_r y : " + r_arrow_y);

    l_arrow_x = m_arrow_x * (1 - dif);
    l_arrow_y = v_degree * (l_arrow_x - m_arrow_x) + m_arrow_y;
    console.log("Arrow_l x : " + l_arrow_x + ", Arrow_l y : " + l_arrow_y);
  }

/*
  if(destpt_y <= startpt_y) {
    if(destpt_x >= startpt_x) {
      console.log("arrow case 1");

      m_arrow_x = destpt_x * arrow_len;
      m_arrow_y = degree * (m_arrow_x - startpt_x) + startpt_y;

      console.log("Arrow x : " + m_arrow_x + ", Arrow y : " + m_arrow_y);

      r_arrow_x = m_arrow_x * (1 + dif);
      r_arrow_y = v_degree * (r_arrow_x - m_arrow_x) + m_arrow_y;

      console.log("Arrow_r x : " + r_arrow_x + ", Arrow_r y : " + r_arrow_y);

      l_arrow_x = m_arrow_x * (1 - dif);
      l_arrow_y = v_degree * (l_arrow_x - m_arrow_x) + m_arrow_y;
      console.log("Arrow_l x : " + l_arrow_x + ", Arrow_l y : " + l_arrow_y);



    }
    else {
      console.log("arrow case 2");

    }
  }
  else {
    if(destpt_x >= startpt_x) {
      console.log("arrow case 3");

      m_arrow_x = destpt_x * arrow_len;
      m_arrow_y = degree * (m_arrow_x - startpt_x) + startpt_y;

      console.log("Arrow x : " + m_arrow_x + ", Arrow y : " + m_arrow_y);

      r_arrow_x = m_arrow_x * (1 + dif);
      r_arrow_y = v_degree * (r_arrow_x - m_arrow_x) + m_arrow_y;

      console.log("Arrow_r x : " + r_arrow_x + ", Arrow_r y : " + r_arrow_y);

      l_arrow_x = m_arrow_x * (1 - dif);
      l_arrow_y = v_degree * (l_arrow_x - m_arrow_x) + m_arrow_y;
      console.log("Arrow_l x : " + l_arrow_x + ", Arrow_l y : " + l_arrow_y);
    }

    else {
      console.log("arrow case 4");
    }
  }
  */

/*
  console.log("s_pot_x : " + startpt_x);
  console.log("s_pot_y : " + startpt_y);
  console.log("d_pot_x : " + destpt_x);
  console.log("d_pot_y : " + destpt_y);
*/
/*
  var svgdiv = document.getElementById('parent');
  var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('id', 'linkid');
  line.setAttribute('class', 'linkline');
  //line.setAttribute('stroke-dasharray', "10, 5");
  line.setAttribute('x1', startpt_x);
  line.setAttribute('y1', startpt_y);
  line.setAttribute('x2', destpt_x);
  line.setAttribute('y2', destpt_y);
  */

  var svgdiv = document.getElementById('parent');
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('id', 'linkid');
  path.setAttribute('class', 'linkline');
  //line.setAttribute('stroke-dasharray', "10, 5");
  path.setAttribute('d', "M" + startpt_x + "," + startpt_y + " " + destpt_x + "," + destpt_y + " " + r_arrow_x + "," + r_arrow_y + " " + l_arrow_x + "," + l_arrow_y + " " + destpt_x + "," + destpt_y);

  svgdiv.appendChild(path);

}
