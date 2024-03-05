Project 3
Data Visualization of Emissions and Waste Management from Oil and Gas
Data Visualization track

Contributors
Carolina Menegoli
Trina Alaniz
Iryna Balanivska
Laura Lang
Frances Zhu

Project Overview
This comprehensive dashboard focuses on the intricate balance between economic growth and 
environmental stewardship within the petroleum sector of the United States, with a special 
emphasis on Texas. Leveraging the principles set forth by the Pollution Prevention Act of 1990 
and the Toxic Release Inventory (TRI), it explores innovative strategies for reducing pollution 
through source reduction, recycling, and more. By incorporating visual and statistical analyses, 
along with a detailed summary, the project offers valuable insights into waste management 
practices over time, correlating these with Gross Domestic Product (GDP) to provide a nuanced 
view of the industry's impact and potential policy implications.


Data Sources and Ethical Considerations

In conducting this data visualization project, we have carefully considered the ethical implications of working with environmental data. We understand the sensitivity and potential impact of the information presented, as it relates to public health and environmental integrity. Data used in this project is sourced responsibly from the Environmental Protection Agency's TRI Explorer ([TRI Explorer](https://enviro.epa.gov/triexplorer/industry.html?pYear=2022&pLoc=324&pParent=TRI&pDataSet=TRIQ1)), ensuring accuracy and reliability. The TRI tracks the management of toxic chemicals that may pose a significant threat to human health and the environment. In our analysis and visualization, we strive to maintain the integrity of the data, providing an unbiased and factual representation of emissions and waste management from the oil and gas sector. We commit to transparency in our methodology and open communication of our findings, recognizing the importance of such data in fostering informed decisions and actions by stakeholders and the public at large. By highlighting trends and insights through our visualizations, we aim to contribute positively to the discourse on environmental management and encourage responsible environmental stewardship.



Features
1. Production-Related Waste Managed, Petroleum, 2017–2022
An interactive stacked bar chart presents the management of production-related waste in the 
petroleum industry from 2017 to 2022. Segments within each bar represent different waste 
management methods:

   ● Recycling (Green)
   
   ● Energy Recovery (Teal)
   
   ● Treatment (Beige)
   
   ● Total Releases (Red)


   This visual tool highlights the predominance of recycling and energy recovery, notes a decrease
   in waste management in response to the COVID-19 pandemic, and underscores a minimal 
   reliance on direct waste release.

2. Production-Related Waste Managed, Texas, 2022
   
A pie chart illustrates the distribution of waste management methods in Texas for the year 2022,
emphasizing:

   ● Energy Recovery (51.1%, Blue)
   
   ● Treatment (36.5%, Beige)
   
   ● Recycling (Smallest visible segment, Green)
   
   ● Total Releases (Minor fraction, Red)

This chart demonstrates Texas's focus on energy recovery and treatment as primary methods 
of managing production-related waste, with minimal direct releases into the environment.

3. Top 20 State Production Waste in Petroleum vs. GDP
   
   A scatter plot explores the relationship between production waste in the petroleum industry and 
   GDP among the top 20 states. Texas, California, Pennsylvania, and Louisiana emerge as key 
   contributors, highlighting the critical balance between economic prosperity and environmental 
   sustainability. The visual narrative provided by the plot underscores the significance of the 
   petroleum sector to regional economies and environmental health.

4. Regional Cluster Map and Final Findings
   
   The Regional Cluster Map displays the geolocation and number of facilities per regional area in 
   Texas, concluding with an analysis that reflects a strong commitment to environmental 
   protection through treatment and energy recovery practices. The analysis acknowledges a dip in
   waste management activities in 2020 due to the pandemic but also highlights the resilience and 
   adaptability of the industry.





Repository Structure

- `Database/`: 
  - `Production_waste.sqlite`: An SQLite database containing information about production-related waste management.

- `csv_data/`: 
  - `2022_us.csv`: Dataset for the year 2022 related to US emissions and waste management.
  - `GDP_States_2017_2022.csv`: Dataset containing state-wise GDP data from 2017 to 2022.
  - `states.csv`: Dataset containing state-related information.

- `static/`: 
  - `Dashboard.js`: JavaScript for interactive dashboard features.
  - `barplots.js`: JavaScript for generating bar plot visualizations.
  - `piechart.js`: JavaScript for generating pie chart visualizations.
  - `plots.js`: General JavaScript plotting utilities.

- `templates/`: 
  - `Dashboard.html`: The main dashboard view template.
  - `bar.html`: Template for bar plot visualizations.
  - `index.html`: The homepage template.
  - `petroleum_heatmap.html`: Template for the heatmap of petroleum data.
  - `piechart.html`: Template for pie chart visualizations.
  - `texas_petroleum_cluster_map.html`: Template for the Texas petroleum cluster map.
  - `websiteInProgress.html`: Template for the in-progress state of the website.

- `Flask_app.py`: The main Flask application script to run the web server.
- `*.ipynb`: Jupyter notebooks that contain the data analysis and visualization code.
- `README.md`: Provides an overview and instructions for the project.


Conclusion
This project not only showcases the current practices and achievements in production-related 
waste management within the petroleum industry but also calls attention to the ongoing need for
innovation and improvement. By illustrating the delicate balance between economic growth and 
environmental stewardship, it provides a valuable framework for future policy development and 
industry practices, ensuring the sustainable advancement of the petroleum sector.
