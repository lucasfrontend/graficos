/*----------CANTIDAD DE SUCESOS------------------*/

const ctx = document.getElementById("eventsNumber").getContext("2d");
const chart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["Accidentes", "Incidente\ngrave", "Incidente", "Intervención"],
    datasets: [{
      label: "Cantidad de Sucesos (2020)",
      data: [ 30, 15, 13, 23, 35],
      backgroundColor: [
        "rgb(1, 114, 184)", 
        "rgb(1, 114, 184)", 
        "rgb(1, 114, 184)", 
        "rgb(1, 114, 184)"
      ],
      borderColor: [
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)"
      ],
      /*
      borderWidth: 3,
      */
      hoverBorderWidth: 0
    }] 
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        barPercentage: 0.5,
        ticks: {
          fontSize: 15,
          beginAtZero: true
        },
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
      }
      }]
    }
  }

});

/*-------------------------OPERACIONES-----------------------------*/


const operations = document.getElementById("operations").getContext("2d");

var nonCommercialOperations = {
  label: "Linea 1", 
  data: [50, 10, 20, 24, 9, 6, 8, 8, 17, 15, 25, 21],
  /*lineTension: 0.3,*/
  borderColor: "rgb(106, 147, 181)",
  backgroundColor: 'transparent',
  /*borderDash: [5, 10],*/
  pointBorderColor: "rgb(106, 147, 181)",
  pointBackgroundColor: "rgb(106, 147, 181)",
  pointRadius: 4,
  pointHoverRadius: 7,
/*  pointHitRadius: 10, */
/*  pointBorderWidth: 0, */
  pointStyle: 'rectRounded'
};


var vuelosComerciales = {
  label: "Linea 2", 
  data: [30, 5, 13, 20, 10,5, 3, 3, 10, 15, 20, 20],
  /*lineTension: 0.3,*/
  borderColor: "rgb(97, 123, 114)",
  backgroundColor: 'transparent',
  /*borderDash: [5, 10],*/
  pointBorderColor: "rgb(97, 123, 114)",
  pointBackgroundColor: "rgb(97, 123, 114)",
  pointRadius: 4,
  pointHoverRadius: 7,
/*  pointHitRadius: 10, */
/*  pointBorderWidth: 0, */
  pointStyle: 'rectRounded'
};

var operacionesEspecializadas = {
  label: "Linea 3", 
  data: [20, 15, 30, 30, 35, 30, 40, 20, 30, 5, 11, 12],
  borderColor: 'rgb(196, 78, 103)',
  backgroundColor: 'transparent',
  /*borderDash: [5, 10],*/
  pointBorderColor: "rgb(196, 78, 103)", 
  pointBackgroundColor: 'rgb(196, 78, 103)',
  pointRadius: 4,
  pointHoverRadius: 7,
/*  pointHitRadius: 10, */
/*  pointBorderWidth: 0, */
  pointStyle: 'rectRounded'
};

var desconocido = {
  label: "Linea 4",
  data: [10, 15, 20, 30, 25, 10, 5, 10, 15, 20, 30, 20],
  /*lineTension: 0,*/
  /*fill: false,*/
  borderColor: 'rgb(251, 177, 52)',
  backgroundColor: 'transparent',
  /*borderDash: [5, 10],*/
  pointBorderColor: '	rgb(251, 177, 52)',
  pointBackgroundColor: 'rgb(251, 177, 52)',
  pointRadius: 4,
  pointHoverRadius: 7,
/*  pointHitRadius: 10, */
/*  pointBorderWidth: 0, */
  pointStyle: 'rectRounded'
};

var speedData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    datasets:  [nonCommercialOperations, vuelosComerciales, operacionesEspecializadas, desconocido]
};

var lineChart = new Chart(operations, {
  type: 'line',
  data: speedData,
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Cantidad"
        },
        barPercentage: 0.5,
        ticks: {
          fontSize: 18,
          beginAtZero: true
        },/*,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }*/
      }],
      xAxes: [{
        gridLines: {
            color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          fontSize: 15,
        }   
    }]
    }
  }
});




/*-----------------------RESUMEN--------------------------- */

var summary = document.getElementById("summary");
/*
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
*/


var pieChart = new Chart(summary, {
  type: 'doughnut',
  data: {
    labels: [
        "Operaciones especializadas",
        "Operaciones estatales",
        "Transporte aéreo comercial",
        "Operaciones no comerciales",
        "Desconocido",
        "Ilegal"
    ],
    datasets: [
        {
            data: [57, 5, 104, 298, 7, 4],
            backgroundColor: [
              "rgb(97, 123, 114)",
              "rgb(151, 109, 127)",
              "rgb(196, 78, 103)",
              
              'rgb(251, 177, 52)',

              "rgb(106, 147, 181)",
              "rgb(103, 97, 116)"
            ],
            /*
            borderColor: [
              "rgb(97, 103, 114)",
              "rgb(151, 99, 127)",
              "rgb(196, 58, 103)",

              'rgb(106, 127, 181)',
              
              "rgb(106, 127, 181)",
              "rgb(103, 77, 116)"

            ],
            borderWidth: 3, */
            hoverBorderWidth: 0
        }]
      },
      options: {
        legend: {
          display: false
        },
        cutoutPercentage: 30
      }
});
   
/*----------------------------SUCESOS POR FASE DE VUELO--------------------------------------*/
const faseDeVuelo = document.getElementById("faseDeVuelo").getContext("2d");
const chart3 = new Chart(faseDeVuelo, {
  type: "bar",
  data: {
    labels: ["Rodaje salida", "Despegue", "Ascenso", "Crucero", "Maniobras", "Aproximación", "Descenso", "Aterrizaje", "Rodaje a plataforma", "Estacionado", "Se desconoce"],
    datasets: [{
      label: "Cantidad de Sucesos (2020)",
      data: [ 30, 15, 13, 23, 35, 30, 20, 10, 4, 6, 7, 40],
      backgroundColor: [
        "rgb(1, 114, 184)", 
        "rgb(1, 114, 184)", 
        "rgb(1, 114, 184)", 
        "rgb(1, 114, 184)",
        "rgb(1, 114, 184)",
        "rgb(1, 114, 184)",
        "rgb(1, 114, 184)",
        "rgb(1, 114, 184)",
        "rgb(1, 114, 184)",
        "rgb(1, 114, 184)",
        "rgb(1, 114, 184)"
      ],
      borderColor: [
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)",
        "rgb(1, 94, 184)"
      ],
      /*
      borderWidth: 3,
      */
      hoverBorderWidth: 0
    }] 
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        barPercentage: 0.5,
          beginAtZero: true
        
        /*,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }*/
      }],
      xAxes: [{
        ticks: {
          fontSize: 15,
        },
        gridLines: {
            color: "rgba(0, 0, 0, 0)",
        }   
    }]
    }
  }

});
 


/*-----------------DOBLE DOS --------------------------*/

var harmonizedCategory = document.getElementById("harmonizedCategory").getContext("2d");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var line1 = {
  label: 'Line 1',
  data: [0, 0, 15, 15, 47, 10, 30, 0],
  backgroundColor: 'rgb(106, 147, 181)',
  borderColor: 'rgb(106, 127, 181)',
  /*
  borderWidth: 2,
  */
  hoverBorderWidth: 0
};

var line2 = {
  label: 'Line 2',
  data: [0, 0, 0, 0, 0, 0, 0, 0],
  backgroundColor: 'rgba(99, 132, 0)',
  borderColor: 'rgba(99, 112, 0)',
  /*
  borderWidth: 2,
  */
  hoverBorderWidth: 0
};

var line3 = {
  label: 'Line 3',
  data: [0, 0, 5, 0, 0, 0, 7, 0],
  backgroundColor: 'rgb(97, 123, 114)',
  borderColor: 'rgb(97, 103, 114)',
  /*borderWidth: 2,*/
  hoverBorderWidth: 0
};

var line4 = {
  label: 'Line 4',
  data: [20, 35, 70, 35, 125, 0, 80, 0],
  backgroundColor: 'rgb(251, 177, 52)',
  borderColor: 'rgb(251, 157, 52)',
  /*borderWidth: 2,*/
  hoverBorderWidth: 0
};

var line5 = {
  label: 'Line 5',
  data: [0, 0, 0, 0, 25, 0, 25, 0],
  backgroundColor: 'rgb(103, 97, 116)',
  borderColor: 'rgb(103, 77, 116)',
  /*borderWidth: 2,*/
  hoverBorderWidth: 0
};

var line6 = {
  label: 'Line 5',
  data: [0, 3, 0, 0, 3, 0, 0 , 0],
  backgroundColor: 'rgb(196, 78, 103)',
  borderColor: 'rgb(196, 58, 103)',
  /*borderWidth: 2,*/
  hoverBorderWidth: 0
};

var category = {
  labels: ["CFIT", "LOC-I", "RS", "GS", "OD", "MED", "OTHER", "UNK"],
  datasets: [line1, line2, line3, line4, line5, line6]
};

var chartOptions = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      barPercentage: 0.8,
      ticks: {
        fontSize: 15
      },
      categoryPercentage: 0.6,
      gridLines: {
        color: "rgba(0, 0, 0, 0)",
      }
    }],
    yAxes: [{
      ticks: {
        fontSize: 15,
      }   
      /*
      gridLines: {
        /*color: "rgba(0, 0, 0, 0)",
      }*/
    },
    ]
  }
};

var barChart = new Chart(harmonizedCategory, {
  type: 'bar',
  data: category,
  options: chartOptions
});

/*-----------------ACCIDENTES POR CATEGORIA --------------------------*/

var accidentCategory = document.getElementById("accidentCategory").getContext("2d");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var accidentes = {
  label: 'Line 1',
  data: [0, 0, 15, 15, 47, 10, 30, 0, 10, 0, 20, 30, 0, 10, 20 , 30, 20, 10, 0, 10, 0, 0, 20, 30, 40],
  backgroundColor: "rgb(1, 114, 184)",
  borderColor: "rgb(1, 94, 184)",
  /*borderWidth: 2,*/
  hoverBorderWidth: 0
};

var accidentesFatales = {
  label: 'Line 2',
  data: [10, 0, 10, 50, 0, 20, 0, 10, 10, 20, 0, 5, 0, 10, 0, 20, 10, 0, 10, 20, 10, 0, 0, 10, 30],
  backgroundColor: "rgb(45, 44, 43)",
  borderColor: "rgb(45, 24, 43)",
  /*borderWidth: 2, */
  hoverBorderWidth: 0
};

var categoryA = {
  labels: ["SCF-PP", "ARC", "LOC-I", "RE", "LALT", "LOC-G", "F-POST", "CTOL", "ADRM", "OTROS", "FUEL", "CFIT", "UIMC", "GCOL", "MAC", "RI", "USOS", "AMAC", "GTOW", "WILD", "F-NI", "ICE", "LOLI", "RAMP", "WSTRW"],
  datasets: [accidentes, accidentesFatales]
};

var chartOptions = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      gridLines: {
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        fontSize: 15
      }
    }],
    yAxes: [{
      ticks: {
        fontSize: 15,
      }   
      /*
      gridLines: {
        /*color: "rgba(0, 0, 0, 0)",
      }*/
    },
    ]
  }
};

var barChart = new Chart(accidentCategory, {
  type: 'bar',
  data: categoryA,
  options: chartOptions
});