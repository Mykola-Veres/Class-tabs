import Chart from 'chart.js/auto';
const ctx = document.getElementById('myChart').getContext('2d');
// import axios from "axios";
import papaparse from "papaparse";
function fetchRequestQuack () {
  const response = fetch("https://api.covidtracking.com/v1/us/daily.csv")
    response.then(responce => responce.text()
    .then(res => {const dataRes = papaparse.parse(res, {header: true}).data;
  //   console.log(dataRes)
  //   const label = dataRes.map(entry=> entry.date)
  // console.log(label)
  //   const positive = dataRes.map(entry=> entry.positive)
  //   console.log(positive)

    const reduceDate = dataRes.reduce((acc, entry) => {acc.label.push(entry.date)
    acc.positive.push(entry.positive)
    return acc}, {label: [], positive: [] })
  callback(reduceDate)
}))}

fetchRequestQuack ()
console.log(ctx)

function callback ({label, positive}) {
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: label,
      datasets: [{
          label: '# of Votes',
          data: positive,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(red)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          fill: true
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
})}