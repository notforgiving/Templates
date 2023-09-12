const templates = [
  "LRPROMO-1056/",
  "LRPROMO-1057/",
  "LRPROMO-1148/",
  "LRPROMO-1151/",
  "LRPROMO-1170/",
  "LRPROMO-1252/",
  "LRPROMO-1253/",
  "/LRPROMO-1279/",
  "LRPROMO-1329/",
  "LRPROMO-1331/",
  "LRPROMO-1339/1/",
  "LRPROMO-1365/",
  "LRPROMO-1387/",
  "LRPROMO-1436/1/",
  "LRPROMO-1467/",
  "tretjakov.n/LRPROMO-1433/1/",
];

const wrapper = document.querySelector("#container");

const temp = templates.map((item) => {
  return `<iframe
  src="http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/${item}"
  frameborder="1"
  width="480px"
  height="500px"
></iframe>`;
});

wrapper.innerHTML += temp.join("");
