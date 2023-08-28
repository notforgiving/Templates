const templates = [
    
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1339/1/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1148/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1329/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1331/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1252/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1253/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1170/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1151/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1057/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1056/",
  "https://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1467/",
];
const wrapper = document.querySelector("#container");

const temp = templates.map((item) => {
  return `<iframe
  src="${item}"
  frameborder="1"
  width="480px"
  height="500px"
></iframe>`;
});

wrapper.innerHTML += temp.join("");
