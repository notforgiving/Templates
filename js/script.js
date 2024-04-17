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
  "LRPROMO-1585",
  "LRPROMO-1587",
  "LRPROMO-1642",
  "LRPROMO-1800",
  "LRPROMO-1589",
  "LRPROMO-1588",
  "LRPROMO-1577",
  "LRPROMO-1613",
  "LRPROMO-1515",
  "LRPROMO-1853",
  "LRPROMO-1856",
  "LRPROMO-1903",
  "LRPROMO-1757",
  "LRPROMO-1866",
  "LRPROMO-1835",
  "LRPROMO-1836",
  "LRPROMO-1785",
  "LRPROMO-1867",
  "LRPROMO-1997",
  "LRPROMO-1907",
  "LRPROMO-1952",
  "LRPROMO-1725",
  "LRPROMO-1969",
  "LRPROMO-1984",
  "LRPROMO-1983",
  "LRPROMO-1970",
  "LRPROMO-2095",
  "LRPROMO-1758",
  "LRPROMO-2047",
  "LRPROMO-2066",
  "LRPROMO-2070",
  "LRPROMO-2048",
  "LRPROMO-2117",
  "LRPROMO-2097",
  "LRPROMO-2125",
  "LRPROMO-2226",
  "LRPROMO-2151",
  "LRPROMO-2124",
  "LRPROMO-2283",
  "LRPROMO-2264",
  "LRPROMO-2263",
];

const wrapper = document.querySelector("#container");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const arrowsContainer = document.querySelector(".arrows");
const valuesBtns = document.querySelector("#values");
const allBtn = document.querySelector("#allBtn");
const showMore = document.querySelector('#show_more');

let currentTemp = templates.length - 1;

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

let lengthTemplatesArray = templates.length;
const stopper = 100;

const render = (currentTemp = 0, all = false) => {
  if (!all) {
    wrapper.innerHTML = "";
    wrapper.innerHTML = `<iframe
    src="http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/${templates[currentTemp]}/"
    frameborder="1"
    width="520px"
    height="650px"
    ></iframe>`;
  } else {
    let revertArray = [];
    wrapper.innerHTML = "";

    for (let index = lengthTemplatesArray - 1; index >= 0; index--) {
      revertArray.push(templates[index]);
    }

    wrapper.innerHTML += revertArray
      .map((item, index) =>
        index <= stopper
          ? `<iframe
      src="http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/${item}/"
      frameborder="1"
      width="520px"
      height="500px"
      ></iframe>`
          : ""
      )
      .join("");
  }
};

render(currentTemp);

console.log("Ты уже сверстал  - " + lengthTemplatesArray + " лендов");
