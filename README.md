# Project 3
Data Visualization of Emissions and Waste Management from Oil and Gas
Data Visualization track

# Contributors
Carolina Menegoli
Trina Alaniz
Iryna Balanivska
Laura Lang
Frances Zhu

# Project Overview
This comprehensive dashboard focuses on the intricate balance between economic growth and 
environmental stewardship within the petroleum sector of the United States, with a special 
emphasis on Texas. Leveraging the principles set forth by the Pollution Prevention Act of 1990 
and the Toxic Release Inventory (TRI), it explores innovative strategies for reducing pollution 
through source reduction, recycling, and more. By incorporating visual and statistical analyses, 
along with a detailed summary, the project offers valuable insights into waste management 
practices over time, correlating these with Gross Domestic Product (GDP) to provide a nuanced 
view of the industry's impact and potential policy implications.
# Features
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

# Conclusion
This project not only showcases the current practices and achievements in production-related 
waste management within the petroleum industry but also calls attention to the ongoing need for
innovation and improvement. By illustrating the delicate balance between economic growth and 
environmental stewardship, it provides a valuable framework for future policy development and 
industry practices, ensuring the sustainable advancement of the petroleum sector.






# Data Sources

The data for our analysis is sourced from the Environmental Protection Agency (EPA) and includes metrics on how much of each chemical is recycled, combusted for energy recovery, treated for destruction, or otherwise released on-site and off-site. This information is collectively referred to as production-related waste managed.

# Project Structure

- `Database/`: Contains the SQLite database files and schemas.
- `csv_data/`: Includes CSV files that store the data used in the project.
- `static/`: Holds static files like stylesheets and JavaScript files for the web interface.
- `templates/`: Contains HTML templates for the web interface.
- `Flask_app.py`: The main Flask application script to run the web server.
- `*.ipynb`: Jupyter notebooks that contain the data analysis and visualization code.
- `README.md`: Provides an overview and instructions for the project.

