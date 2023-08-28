const templates = [
    
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1339/1/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1148/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1329/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1331/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1252/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1253/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1170/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1151/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1057/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1056/",
  "http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/LRPROMO-1467/",
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
