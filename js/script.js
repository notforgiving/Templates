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
];

const wrapper = document.querySelector("#container");

const temp = templates.map((item) => {
  return `<iframe
  src="http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/${item}/"
  frameborder="1"
  width="520px"
  height="500px"
></iframe>`;
});

wrapper.innerHTML += temp.join("");
