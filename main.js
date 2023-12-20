import './style.css'

let r = document.getElementById("boule");
 
  let left = 0;
  let top = 0;
  
   document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      top -= 6;
      r.style.top = top + top + "px";
    } 
    else if (e.key === 'ArrowDown') {
      top += 6;
      r.style.top = top + top + "px";
    } 
    else if (e.key === 'ArrowRight') {
      left += 6;
      r.style.left = left + left + "px";
    }
    else if (e.key === 'ArrowLeft') {
      left -= 6;
      r.style.left = left + left + "px";
    } 
  })

  // function movet(e) {
  //   if (e.keyCode == 40) {
  //     top += 6;
  //     r.style.top = (parseInt(top) + top) + "px";
  //   }
  // }

  // function moveb(e) {
  //   if(e.KeyCode == 38){
  //     bottom += 6;
  //     r.style.bottom = parseInt(r.style.bottom) + bottom + "px";
  //   }
  // }

  // function mover(e) {
  //   if(e.keycode == 39){
  //     right += 6;
  //     r.style.right = (parseInt(right) + right) + "px";
  //   }
  // }

  // function movel(e) {
  //   if(e.keycode == 37){
  //     left += 6;
  //     r.style;
  //     r.style.right = (parseInt(left) + left) + "px";
  //   }
  // }


