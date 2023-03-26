let slideNum = 1;
slider(slideNum);

function Next(n) {
  slider((slideNum += n));
}

function Current(n) {
  slider((slideNum = n));
}

function slider(n) {
  let i;
  let Image = document.getElementsByClassName("img");
  let dots = document.getElementsByClassName("dot");
  if (n > Image.length) {
    slideNum = 1;
  }
  if (n < 1) {
    slideNum = Image.length;
  }
  for (i = 0; i < Image.length; i++) {
    Image[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  Image[slideNum - 1].style.display = "block";
  dots[slideNum - 1].className += " active";
}
