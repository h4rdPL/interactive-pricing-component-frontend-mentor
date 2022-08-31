// console.log("hello world");

const offerType = document.getElementById("input");
const pageViewsHTML = document.getElementById("pageViews");
const moneyPerMonthHTML = document.getElementById("money");
const pageViews = [50, 100, 150, 200, 250, 300];
const moneyPerMonth = [16, 32, 64, 128, 200, 240];
offerType.addEventListener("change", () => {
  switch (offerType.value) {
    case "1":
      pageViewsHTML.innerHTML = pageViews[0];
      moneyPerMonthHTML.innerHTML = moneyPerMonth[0];
      break;
    case "2":
      pageViewsHTML.innerHTML = pageViews[1];
      moneyPerMonthHTML.innerHTML = moneyPerMonth[1];

      break;
    case "3":
      pageViewsHTML.innerHTML = pageViews[2];
      moneyPerMonthHTML.innerHTML = moneyPerMonth[2];
      break;
    case "4":
      pageViewsHTML.innerHTML = pageViews[3];
      moneyPerMonthHTML.innerHTML = moneyPerMonth[3];
      break;
    case "5":
      pageViewsHTML.innerHTML = pageViews[4];
      moneyPerMonthHTML.innerHTML = moneyPerMonth[4];
      break;
    case "6":
      pageViewsHTML.innerHTML = pageViews[5];
      moneyPerMonthHTML.innerHTML = moneyPerMonth[5];
      break;
    default:
      pageViewsHTML.innerHTML = "sth is wrong";
  }
});
