// console.log("hello world");

const offerType = document.getElementById("input");
console.log(offerType);
const pageViewsHTML = document.getElementById("pageViews");
const pageViews = [50, 100, 150, 200, 250, 300];

offerType.addEventListener("change", (e) => {
  switch (offerType.value) {
    case "1":
      pageViewsHTML.innerHTML = pageViews[0];
      break;
    case "2":
      pageViewsHTML.innerHTML = pageViews[1];
      break;
    case "3":
      pageViewsHTML.innerHTML = pageViews[2];
      break;
    case "4":
      pageViewsHTML.innerHTML = pageViews[3];
      break;
    case "5":
      pageViewsHTML.innerHTML = pageViews[4];
      break;
    case "6":
      pageViewsHTML.innerHTML = pageViews[5];
      break;
    default:
      pageViewsHTML.innerHTML = "sth is wrong";
  }
});
