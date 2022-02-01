let div = document.getElementById("scrollDiv");
let val = 1;
div.addEventListener("scroll", scrollfn);
function scrollfn() {
  console.log(div.scrollTop, div.clientHeight, div.scrollHeight);
  if (div.scrollTop + div.clientHeight >= div.scrollHeight) {
    appendVal();
  }
}

function appendVal() {
  let i = 0;
  while (i < 25) {
    let h3 = document.createElement("h3");
    h3.innerText = "Masai Student " + val++;
    div.append(h3);
    i++;
  }
}
appendVal();
