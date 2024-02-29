document.addEventListener("DOMContentLoaded", function () {
  var chrt = document.getElementById("chartId").getContext("2d");
  var chartId = new Chart(chrt, {
    type: 'bar',
    data: {
      labels: ['2020-1', '2020-2', '2021-1', '2021-2'],
      datasets: [
        { 
          type:"bar",
          label: 'TC',
          yAxisID: "B",
          data: [12, 32, 50, 69],
          backgroundColor: 'lightblue',
          borderColor: 'lightblue',
          borderWidth: 2
        },
        {
          type:"line",
          label: 'CPA',
          yAxisID: 'A',
          data: [3.2, 2.9, 3.4, 3.1],
          backgroundColor: 'lightgreen',
          borderColor: 'lightgreen',
          borderWidth: 2
        },
        {
            type:"line",
            label: 'GPA',
            yAxisID: 'A',
            data: [2.7, 3.2, 3.4, 2.9],
            backgroundColor: 'purple',
            borderColor: 'purple',
            borderWidth: 2
          }
      ]
    },
    options: {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
            display: true,
            text: 'Điểm học tập',
            align:'start',
            font: {
                weight: 'bold',
                size:18
            },
            padding: {
                top: 10,
                bottom: 30
            }
            },
            legend: {
            display: true,
            position: 'bottom'
            }
        },
        scales: {
            A: {
                type: 'linear',
                display: true,
                position: 'right',
                min:0,max:4,
                title: {
                    display: true,
                    position: "top",
                    text: 'Điểm' // Text for the y-axis
                  }
              },
            B: {
                type: 'linear',
                display: true,
                position: 'left',
                min:0,max:200,
                
                title: {
                    display: true,
                    position: "top",
                    text: 'TC tích lũy' // Text for the y-axis
                  },
                grid: {
                  drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            },
        }
    }
  });

  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2020-1', '2020-2', '2021-1', '2021-2'],
      datasets: [{
        data: [82, 89, 73, 75],
        backgroundColor: 'lightblue',
        borderColor: 'lightblue',
        borderWidth: 2
      }]
    },
    options: {
        color: "#5ab1ef",
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins:{
            title: {
            display: true,
            text: 'Điểm rèn luyện',
            align:'start',
            font: {
                weight: 'bold',
                size:18
            },
            padding: {
                top: 10,
                bottom: 30
            }
            },
            legend: {
            display:false
            }
        },
      scales: {
        y: {
          min:0,max:100
        },
        xAxes: [{
            ticks: {
                beginAtZero: false
            }
        }]
      }
    }
  });
});
