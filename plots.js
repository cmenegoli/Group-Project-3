// Create our first trace
let trace1 = {
    x:[81960,  81747, 60135,  54099,  52622,  50351,  35859,  29888,  28867, 
       23499,  18465,  15812,   9692,   8839,6738,   4335,   3954,   3234,   2993,   1493,
        
     ],
          
    y: [213898.3,  174794.6, 191583 ,  689681.3,  379111.5,  539898.2,   75172.6,  864170.9,
        235807.3,   53983.4,  396009.2,  641143.6,  412101.3,  646731.3, 101315. ,  187226.2,  114152.9,
        54798.7,  217568.1,  416114.4,
        ],
    text:[  'Utah', 'Kansas',
       'California', 'Oklahoma', 'Ohio', 'Minnesota', 'Michigan',
       'Delaware', 'Illinois', 'Alabama', 'Montana', 'Indiana',
       'Washington', 'Tennessee', 'New Jersey', 'New Mexico', 
       'Nevada','Mississippi', 'North Dakota', 'Kentucky', 'Colorado'],
    type: "scatter",
    name:'Other States',
    mode:'markers+text',
    textposition: 'top center',
    marker:{size:20,
    color:'rgb(164, 194, 244)'
    }
  };
let trace2={
  x:[310780],
  y:[1924007.5],
  text:['Texas'],
  name:'Texas',
  mode:'markers+text',
  type:"scatter",
  textposition: 'top center',
  marker:{
    size:100,
    color:'rgb(142, 124, 195)',
  }
};
let trace3={
  x:[76859],
  y:[3167460.8],
  text:['California'],
  name:'California',
  mode:'markers+text',
  type:"scatter",
  textposition: 'top center',
  marker:{
    size:70,
    color:'rgb(234, 153, 153)',
  }
};
let trace4={
  x:[115453],
  y:[772335.9],
  text:['Pennsylvania'],
  name:'Pennsylvania',
  mode:'markers+text',
  type:"scatter",
  textposition: 'top center',
  marker:{
    size:70,
    color:'rgb(255, 217, 102)',
  }
  
};
let trace5={
  x:[319296],
  y:[231262.3],
  text:['Louisiana'],
  name:'Louisiana',
  mode:'markers+text',
  type:"scatter",
  textposition: 'top center',
  marker:{
    size:70,
    color:'rgb(32,178,170)',
  }
  
};
  // The data array consists of both traces
let data = [trace1,trace2,trace3,trace4,trace5];
let layout={
 // showlegend:false,orientation: 'v', x: -0.3
 width:900,
 height:600,
  showlegend:false,
  title:{
    text:'Top 20 State Production waste in petroleum  vs. GDP',
    font:{
      family: 'Courier New, monospace',
      size: 24
    }},
  xaxis:{
    title:{
      text:'Production waste : Billion of Pounds ',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
  },
     },
  yaxis:{
    title:{
      text:'Real GDP : Million of dollars',
      font: {
        family: 'Courier New, monospace',
        size: 15,
        color: '#7f7f7f'
      }
  },
  }
 
}

  // Note that we omitted the layout object this time
  // This will use default parameters for the layout
Plotly.newPlot("plot", data,layout);
