// Copy over the variables from the previous activity
// Assign `x` and `y` values for the Plotly trace object
let trace1 = {
    x: ['2017','2018','2019','2020','2021','2022'],
    y: [78285300,81959640,79471253,72804785,75181360,79947796],
    name:'Total Realeases',
    type: 'bar',
    width:0.35,
    marker: {
      color: 'rgb(255,0,0)'
    }
  };
  let trace2 ={
    x:['2017','2018','2019','2020','2021','2022'],
    y:[1041339334,1090751844,909535789,427025391,482012548,499302638],
    name:'Treatment',
    type: 'bar',
    width:0.35,
    marker: {
      color: 'rgb(245,222,179)'
    },
  
  
  };
  let trace3={
    x:['2017','2018','2019','2020','2021','2022'],
    y:[589228490,809938481,748741357,707969718,719945712,660521649],
    name:'Energy Recovery',
    type:'bar',
    width:0.35,
    marker: {
      color: 'rgb(176,224,230)'
    }
    
  };
  let trace4={
    x:['2017','2018','2019','2020','2021','2022'],
    y:[175132907,165459483,178454411,150186016,119485739,163119837],
    name:'Recycling',
    type:'bar',
    width:0.35,
    marker: {
      color: 'rgb(60,179,113)',
    }
    
  };
  
  // Leave the code below unchanged
  let data = [trace1,trace2,trace3,trace4];
  
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