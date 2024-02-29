let pie_url = 'http://127.0.0.1:3009/api/v1.0/pieChartDiv'

// Data for the pie chart for Texas waste management with updated colors to match the bar chart
var data = [{
  values: [158974400, 16309950, 113585100, 22162810], // Corresponding values
  labels: ['Energy_Recovery', 'Recycling', 'Treatment', 'Total_Releases'], // Categories
  type: 'pie',
  hole: .4, // For a donut chart
  hoverinfo: 'label+percent',
  textinfo: 'label+value',
  marker: {
    // Approximate colors based on the provided bar chart image
    colors: ['#FFC0CB', '#DDA0DD', '#87CEFA', '#FFDAB9'] // pink, plum, lightskyblue, peachpuff
  }
}];

var layout = {
  title: 'Distribution of Waste Management Categories in Texas',
  showlegend: true
};

Plotly.newPlot('pieChartDiv', data, layout);