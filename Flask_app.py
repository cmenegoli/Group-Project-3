# Import the dependencies.
import numpy as np
import flask
print(flask.__version__)
import sqlalchemy
print(sqlalchemy.__version__)
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Database/Production_waste.sqlite")
Base = declarative_base()
Base.metadata.create_all(engine)
# reflect an existing database into a new model
#Base = automap_base()
# reflect the tables
#Base.prepare(autoload_with=engine, reflect=True)
# Save references to each table
#managedata=Base.classes.Production_waste
# Create our session (link) from Python to the DB
session =Session(engine)
class Production(Base):
    __tablename__ = "Production_waste"
    id =Column(Integer,primary_key=True)
    State = Column(String)
    Energy_Recovery= Column(Float)
    Recycling= Column(Float) 
    Treatment= Column(Float) 
    Total_Releases=Column(Float)
    Production_WSTE=Column(Float)
    RecRcy =Column(Float)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
# Define what to do when the user hits the homepage
##@app.route("/")

#    """List all available api routes."""
#    return (
#        f"Available Routes:<br/>"
#        f"/api/v1.0/selectstate<br/>"
#    )
#def home():
 #   return render_template('websiteInProgress.html')
    
@app.route("/")
def web():
    return render_template('Dashboard.html')
@app.route('/map')
def map():
    return render_template('texas_petroleum_cluster_map.html')

@app.route("/api/v1.0/selectstate")        
def alldata():
    session=Session(engine)
    result1=session.query(Production.State).all()
    session.close()
    # Convert list of tuples into normal list
    state_list = list(np.ravel(result1))
    return jsonify(state_list)

@app.route("/api/v1.0/pieChartDiv")        
def piedata():
    session=Session(engine)
    result1=session.query(Production.State, Production.Production_WSTE).all()
    session.close()
    # Convert list of tuples into normal list
    waste_dict = {state: prod_waste for state, prod_waste in result1}
    return jsonify(waste_dict)

        # Define main branch 
if __name__ == "__main__":
    app.run(debug = True)
    
    

