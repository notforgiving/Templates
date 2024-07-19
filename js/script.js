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
  "LRPROMO-1339",
  "LRPROMO-1365",
  "LRPROMO-1366",
  "LRPROMO-1368",
  "LRPROMO-1387",
  "LRPROMO-1396",
  "LRPROMO-1429",
  "LRPROMO-1433",
  "LRPROMO-1436",
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
  "LRPROMO-2097",
  "LRPROMO-2117",
  "LRPROMO-2125",
  "LRPROMO-2226",
  "LRPROMO-2151",
  "LRPROMO-2124",
  "LRPROMO-2238",
  "LRPROMO-2263",
  "LRPROMO-2264",
  "LRPROMO-2283",
  "LRPROMO-2299",
  "LRPROMO-2300",
  "LRPROMO-2301",
  "LRPROMO-2308",
  "LRPROMO-2309",
  "LRPROMO-2345",
  "LRPROMO-2349",
  "LRPROMO-2351/1",
  "LRPROMO-2351/2",
  "LRPROMO-2357",
  "LRPROMO-2370",
  "LRPROMO-2306",
  "LRPROMO-2388",
  "LRPROMO-2405",
  "LRPROMO-2387",
  "LRPROMO-2460",
  "LRPROMO-2390",
  "LRPROMO-2415",
  "LRPROMO-2428",
  "LRPROMO-2433",
  "LRPROMO-2472",
];

let view = localStorage.getItem("viewTemplates") || "ONE";
let limitAllViews = 20;
const targetURL = "https://templates.fair-2sale.com";

const pagination = document.querySelector(".pagination");
if (templates.length == 0) {
  pagination.classList.add("dnone");
}

let currentTemp = templates.length - 1;

const container = document.querySelector("#container");

const nextFrameBtn = document.querySelector(".next");
const prevFrameBtn = document.querySelector(".prev");

const render = (item) => {
  container.innerHTML = `<iframe
      src="${targetURL}/${item}/"
      frameborder="1"
      width="520px"
      height="700px"
      ></iframe>`;
};

const renderAll = (more = 0) => {
  if (more === 0) {
    container.innerHTML = "";
  }

  templates
    .reverse()
    .slice(more, limitAllViews + more)
    .forEach((item, index) => {
      if (index <= limitAllViews) {
        container.innerHTML += `<iframe
      src="${targetURL}/${item}/"
      frameborder="1"
      width="520px"
      height="700px"
      ></iframe>`;
      }
    });
};

const checkNextAndPrevBtns = () => {
  if (nextFrameBtn && prevFrameBtn) {
    if (currentTemp === templates.length - 1) {
      nextFrameBtn.setAttribute("disabled", true);
      prevFrameBtn.removeAttribute("disabled");
    } else if (currentTemp === 1) {
      prevFrameBtn.setAttribute("disabled", true);
      nextFrameBtn.removeAttribute("disabled");
    } else {
      nextFrameBtn.removeAttribute("disabled");
      prevFrameBtn.removeAttribute("disabled");
    }
  }
};

const pag_container = document.querySelector(".prev_container");

const paginationStruct = (type) => {
  const decrimentPart = `<button data-target="decriment">...</button>`;
  const incrimentPart = `<button data-target="incriment">...</button>`;

  switch (type) {
    case "start": {
      return `
        <button data-target="1"
         class="${currentTemp === 1 ? "active" : ""}">
         1
        </button>

        <button data-target="2"
         class="${currentTemp === 2 ? "active" : ""}">
        2
        </button>

        <button data-target="3"
         class="${currentTemp === 3 ? "active" : ""}">
        3
        </button>

        ${incrimentPart}

         <button data-target="${templates.length - 1}">
         ${templates.length - 1}
         </button>
        `;
    }
    case "center": {
      return `
        <button data-target="1">1</button>

       ${decrimentPart}

        <button data-target="${currentTemp - 1}">
        ${currentTemp - 1}
        </button>
        <button data-target="${currentTemp}" class="active">
        ${currentTemp}
        </button>
        <button data-target="${currentTemp + 1}">
        ${currentTemp + 1}
        </button>

        ${incrimentPart}

        <button data-target="${templates.length - 1}">
        ${templates.length - 1}
        </button>
        `;
    }
    case "end": {
      return `
        <button data-target="1">1</button>

        ${decrimentPart}

        <button data-target="${templates.length - 3}" 
        class="${currentTemp === templates.length - 3 ? "active" : ""}"
        >
        ${templates.length - 3}
        </button>

        <button data-target="${templates.length - 2}"
        class="${currentTemp === templates.length - 2 ? "active" : ""}"
        >
        ${templates.length - 2}
        </button>

        <button data-target="${templates.length - 1}"
        class="${currentTemp === templates.length - 1 ? "active" : ""}"
        >
        ${templates.length - 1}
        </button>
        `;
    }
  }
};

const renderPagination = () => {
  if (Math.abs(currentTemp - templates.length) <= 3) {
    pag_container.innerHTML = paginationStruct("end");
  } else if (Math.abs(currentTemp - 0) <= 3) {
    pag_container.innerHTML = paginationStruct("start");
  } else pag_container.innerHTML = paginationStruct("center");

  const buttons = pag_container.querySelectorAll("button");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      if (btn.getAttribute("data-target") === "decriment") {
        currentTemp -= 4;
      } else if (btn.getAttribute("data-target") === "incriment") {
        currentTemp += 4;
      } else {
        currentTemp = Number(btn.getAttribute("data-target"));
      }

      renderPagination();
      render(templates[currentTemp]);
      checkNextAndPrevBtns();
    })
  );
};

if (pag_container) {
  if (templates.length !== 0) {
    renderPagination();
  }
}

const togglePage = (direction) => {
  switch (direction) {
    case "next": {
      currentTemp++;
      renderPagination();
      render(templates[currentTemp]);
      checkNextAndPrevBtns();
      break;
    }
    case "prev": {
      currentTemp--;
      renderPagination();
      render(templates[currentTemp]);
      checkNextAndPrevBtns();
      break;
    }
  }
};

if (nextFrameBtn && prevFrameBtn) {
  nextFrameBtn.addEventListener("click", () => {
    togglePage("next");
  });
  prevFrameBtn.addEventListener("click", () => {
    togglePage("prev");
  });
}
const selectRender = () => {
  switch (view) {
    case "ALL": {
      pagination.classList.add("dnone");
      container.classList.add("all");
      renderAll();
      checkNextAndPrevBtns();
      break;
    }
    case "ONE": {
      pagination.classList.remove("dnone");
      container.classList.remove("all");
      render(templates[currentTemp]);
      break;
    }
  }
};

if (container) {
  selectRender();
  checkNextAndPrevBtns();
}

const changeView = document.querySelector(".changeView");

if (changeView) {
  changeView.addEventListener("click", () => {
    if (view === "ALL") {
      templates.reverse();
    }
    view = view === "ONE" ? "ALL" : "ONE";
    localStorage.setItem("viewTemplates", view);
    selectRender();
  });
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight
  ) {
    if (view === "ALL") {
      renderAll(limitAllViews);
    }
  }
});
