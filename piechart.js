// Data for the pie chart for Texas waste management with updated style to match the new picture
var data = [{
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

var layout = {
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

Plotly.newPlot('pieChartDiv', data, layout);
