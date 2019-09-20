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
  var c;
  var step = 1;
  var arrow_dif;
  var arrow_len;

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
  arrow_len = 5;

  if(destpt_x >= startpt_x) {
    c = 1;
  }
  else{
    c = 2;
  }
  console.log("arrow case : " + c);

  m_arrow_x = pointing_x(destpt_x, destpt_y, degree, arrow_len, c, step);
  m_arrow_y = pointing_y(m_arrow_x, destpt_x, destpt_y, degree);

  step = 1;
  r_arrow_x = pointing_x(m_arrow_x, m_arrow_y, v_degree, arrow_len, c, step);
  r_arrow_y = pointing_y(r_arrow_x, m_arrow_x, m_arrow_y, v_degree);

  step = 2;
  l_arrow_x = pointing_x(m_arrow_x, m_arrow_y, v_degree, arrow_len, c, step);
  l_arrow_y = pointing_y(l_arrow_x, m_arrow_x, m_arrow_y, v_degree);

  var svgdiv = document.getElementById('parent');
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('id', 'linkid');
  path.setAttribute('class', 'linkline');
  //line.setAttribute('stroke-dasharray', "10, 5");

  path.setAttribute('d', "M" + startpt_x + "," + startpt_y + " " + destpt_x + "," + destpt_y + " " + r_arrow_x + "," + r_arrow_y + " " + l_arrow_x + "," + l_arrow_y + " " + destpt_x + "," + destpt_y);

  svgdiv.appendChild(path);

}

function pointing_x(a, b, d, l, c, step) {

  var x1, x2, result;

  var A = 1 + (d*d);
  var B = (-2*a*d*d) - (2*a);
  var C = (a*a) + (a*a*d*d) - (l*l);


  x1 = (-1*B + Math.sqrt(B*B - 4*A*C)) / (2*A);
  x2 = (-1*B - Math.sqrt(B*B - 4*A*C)) / (2*A);

  if(c == 1) {
    if(step == 1) {
      result = Math.min(x1, x2);
      //console.log("first");
    }
    else {
      result = Math.max(x1, x2);
      //console.log("second");
    }
  }
  else {
    if(step == 1) {
      result = Math.max(x1, x2);
      //console.log("first");
    }
    else {
      result = Math.min(x1, x2);
      //console.log("second");
    }
  }


  return result;
}
function pointing_y(x, a, b, d) {
  var result;

  result = d * x + b - a*d;

  return result;
}
