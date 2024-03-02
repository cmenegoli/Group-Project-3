// Copy over the variables from the previous activity
// Assign `x` and `y` values for the Plotly trace object
let trace11 = {
    x: ['2017','2018','2019','2020','2021','2022'],
    y: [78285300,81959640,79471253,72804785,75181360,79947796],
    name:'Total Realeases',
    type: 'bar',
    width:0.35,
    marker: {
      color: 'rgb(255,0,0)',
      line: {
        color: '#FFFFFF',
        width: 3
      }
    }
  };
  let trace22 ={
    x:['2017','2018','2019','2020','2021','2022'],
    y:[1041339334,1090751844,909535789,427025391,482012548,499302638],
    name:'Treatment',
    type: 'bar',
    width:0.35,
    marker: {
      color: 'rgb(245,222,179)',line: {
        color: '#FFFFFF',
        width: 3
      }
    },
  
  
  };
  let trace33={
    x:['2017','2018','2019','2020','2021','2022'],
    y:[589228490,809938481,748741357,707969718,719945712,660521649],
    name:'Energy Recovery',
    type:'bar',
    width:0.35,
    marker: {
      color: 'rgb(176,224,230)',
      line: {
        color: '#FFFFFF',
        width: 3
      }
    }
    
  };
  let trace44={
    x:['2017','2018','2019','2020','2021','2022'],
    y:[175132907,165459483,178454411,150186016,119485739,163119837],
    name:'Recycling',
    type:'bar',
    width:0.35,
    marker: {
      color: 'rgb(60,179,113)',
      line: {
        color: '#FFFFFF',
        width: 3
      }
    }
    
  };
  
  // Leave the code below unchanged
  let data = [trace11,trace22,trace33,trace44];
  
  let layout = {

    width:800,
    height:570,
    hovermode:'closet',
    legend: {orientation: 'h', y: -0.3},

    barmode: 'stack',
    title :{
      text:'<b>Production-Related Waste Managed,<br>Petroleum,2017 - 2022<b>',
      
    },
    
    xaxis:{
      title:'<b>Year<b>',
    },
    yaxis:{
      title:'<b>Million of Pounds<b>'
    }
    
  
  };
  
  Plotly.newPlot("bar", data, layout);
// Data for the pie chart for Texas waste management with updated style to match the new picture
var data1 = [{
  values: [158974400, 16309950, 113585100, 22162810], // Corresponding values
  labels: ['Energy_Recovery', 'Recycling', 'Treatment', 'Total_Releases'], // Categories
  type: 'pie',
  textinfo: 'label+percent',
  hoverinfo: 'label+percent',
  textposition: 'inside',
  marker: {
    // Colors based on the provided legend image
    colors: ['rgb(176,224,230)', 'rgb(60,179,113)', 'rgb(245,222,179)', 'rgb(255,0,0)'], // green, skyblue, wheat, red
    line: {
      color: '#FFFFFF',
      width: 3
    }
  }
}];

var layout1 = {
  title: {
    text: '<b>Production-Related Waste Managed,<br> Texas - 2022<b>',
    position: 'top center'
  },
  showlegend: true,
  legend: {
    xanchor: 'center',
    yanchor: 'top',
    y: -0.1, // Adjust the legend's position to be a bit higher
    x: 0.5
  },
  font: {
    family: 'Arial, sans-serif'
  }
};

Plotly.newPlot('pieChartDiv', data1, layout1);


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
let data2 = [trace1,trace2,trace3,trace4,trace5];
let layout2={
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
Plotly.newPlot("plot", data2,layout2);