const templates = [
  "LRPROMO-1056",
  "LRPROMO-1057",
  "LRPROMO-1148",
  "LRPROMO-1151",
  "LRPROMO-1170",
  "LRPROMO-1252",
  "LRPROMO-1253",
  "LRPROMO-1279",
  "LRPROMO-1329",
  "LRPROMO-1331",
  "LRPROMO-1339/1",
  "LRPROMO-1365",
  "LRPROMO-1366",
  "LRPROMO-1368",
  "LRPROMO-1387",
  "LRPROMO-1396",
  "LRPROMO-1429",
  "tretjakov.n/LRPROMO-1433/1",
  "LRPROMO-1436/1",
  "LRPROMO-1444",
  "LRPROMO-1460",
  "LRPROMO-1467",
  "LRPROMO-1516",
  "LRPROMO-1575",
  "LRPROMO-1576",
  "LRPROMO-1580",
];

let currentTemp = 0;
const wrapper = document.querySelector("#container");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const arrowsContainer = document.querySelector(".arrows");
const valuesBtns = document.querySelector("#values");
const allBtn = document.querySelector("#allBtn");

nextBtn.addEventListener("click", () => {
  currentTemp++;
  if (currentTemp !== templates.length) {
    render(currentTemp);
  } else {
    currentTemp = templates.length - 1;
  }
});

prevBtn.addEventListener("click", () => {
  currentTemp--;
  if (currentTemp !== -1) {
    render(currentTemp);
  } else {
    currentTemp = 0;
  }
});

valuesBtns.innerHTML += templates
  .map((item, index) => {
    return `<button id="land-${index}" class="selectTemp">${
      index + 1
    }</button>`;
  })
  .join("");

const selectBtns = document.querySelectorAll(".selectTemp");
selectBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    render(e.target.id.replace("land-", ""));
  });
});

allBtn.addEventListener("click", () => {
  if (arrowsContainer.classList.contains("none")) {
    arrowsContainer.classList.remove("none");
    render(currentTemp, false);
  } else {
    arrowsContainer.classList.add("none");
    render(currentTemp, true);
  }
});

const render = (currentTemp = 0, all = false) => {
  if (!all) {
    wrapper.innerHTML = "";
    wrapper.innerHTML = `<iframe
    src="http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/${templates[currentTemp]}/"
    frameborder="1"
    width="520px"
    height="500px"
    ></iframe>`;
  } else {
    wrapper.innerHTML = "";
    wrapper.innerHTML += templates
      .map((item, index) => {
        return `<iframe
    src="http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/${item}/"
    frameborder="1"
    width="520px"
    height="500px"
    ></iframe>`;
      })
      .join("");
  }
};

render(currentTemp);
