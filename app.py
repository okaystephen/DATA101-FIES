from flask import Flask, Response, jsonify, render_template
import pandas as pd
import json 
import os

# app = Flask(__name__, static_url_path='/static')
app = Flask(__name__, template_folder='templates')

data_url = 'data/Family Income and Expenditure.csv'

mapbox_token = os.environ.get('MAP', None)

# DATA ENDPOINTS
@app.route('/regions')
def get_regions():
    df = pd.read_csv(data_url)
    df = df.iloc[:,[1]]         # get only Region column

    # rename region values
    df.replace({'Region' : {'I - Ilocos Region': 'Region I', 'II - Cagayan Valley': 'Region II', 
                'III - Central Luzon' : 'Region III', 'IVA - CALABARZON': 'Region IVA',
                'IVB - MIMAROPA':'Region IVB','V - Bicol Region':'Region V', 
                'VI - Western Visayas':'Region VI','VII - Central Visayas': 'Region VII', 
                'VIII - Eastern Visayas': 'Region VIII', 'IX - Zasmboanga Peninsula': 'Region IX',
                'X - Northern Mindanao': 'Region X', 'XI - Davao Region': 'Region XI',
                'XII - SOCCSKSARGEN': 'Region XII', 'Caraga': 'Region XIII', ' ARMM': 'ARMM'}}, inplace=True)

    # sort renamed region values
    regions = sorted(list(df.Region.unique()))

    # store in a dictionary format
    regions_dict = pd.DataFrame(list(zip(regions, regions)), columns=[
                                'value', 'label']).to_json(orient="records")
    
    return Response(regions_dict, mimetype="application/json")

@app.route('/data')
def get_data():
    df = pd.read_csv(data_url)
    df = df.iloc[:, [0,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,33,34,35,47,50,51,54,55,56]]          # get only needed columns

    # clean column names
    df.rename(columns= {'Crop Farming and Gardening expenses': 'Crop Farming and Gardening Expenditure', 
                        'Housing and water Expenditure': 'Housing and Water Expenditure',
                        'Restaurant and hotels Expenditure': 'Restaurant and Hotel Expenditure',
                        'Total Fish and  marine products Expenditure': 'Total Fish and Marine Products Expenditure',
                        'Members with age less than 5 year old': 'Members with Age less than 5 years old',
                        'Members with age 5 - 17 years old': 'Members with Age 5-17 years old',
                        'Total Number of Family members': 'Total Number of Family Members',
                        'Number of Cellular phone': 'Number of Cellular Phone'}, inplace=True)

    data = sorted(df.columns.to_list())

    # store in dictionary format
    data_dict = pd.DataFrame(list(zip(data, data)), columns=[
                                'value', 'label']).to_json(orient="records")

    return Response(data_dict, mimetype="application/json")

# Get average value (data type) per region
@app.route('/fies')
def get_fies():
    df = pd.read_csv(data_url)
    
    df = df.iloc[:, [0,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,33,34,35,47,50,51,54,55,56]] 
    
    df.replace({'Region' : {'I - Ilocos Region': 'Region I', 'II - Cagayan Valley': 'Region II', 
                'III - Central Luzon' : 'Region III', 'IVA - CALABARZON': 'Region IVA',
                'IVB - MIMAROPA':'Region IVB','V - Bicol Region':'Region V', 
                'VI - Western Visayas':'Region VI','VII - Central Visayas': 'Region VII', 
                'VIII - Eastern Visayas': 'Region VIII', 'IX - Zasmboanga Peninsula': 'Region IX',
                'X - Northern Mindanao': 'Region X', 'XI - Davao Region': 'Region XI',
                'XII - SOCCSKSARGEN': 'Region XII', 'Caraga': 'Region XIII', ' ARMM': 'ARMM'}}, inplace=True)

    df.rename(columns= {'Crop Farming and Gardening expenses': 'Crop Farming and Gardening Expenditure', 
            'Housing and water Expenditure': 'Housing and Water Expenditure',
            'Restaurant and hotels Expenditure': 'Restaurant and Hotel Expenditure',
            'Total Fish and  marine products Expenditure': 'Total Fish and Marine Products Expenditure',
            'Members with age less than 5 year old': 'Members with Age less than 5 years old',
            'Members with age 5 - 17 years old': 'Members with Age 5-17 years old',
            'Total Number of Family members': 'Total Number of Family Members',
            'Number of Cellular phone': 'Number of Cellular Phone'}, inplace=True)

    df_groupby = df.groupby(by=["Region"]).mean().reset_index()
    data_dict = df_groupby.to_dict(orient="records")
    
    data_json = json.dumps(data_dict) 

    return Response(data_json, mimetype="application/json")

# @app.route('/countries')
# def get_countries():
#     # TODO: Get the countries and return as a list or JSON to the JS file
#     df = pd.read_csv(data_url)
#     df.columns = ['country', 'category', 'consumption', 'co2']
#     countries = sorted(list(df.country.unique()))

#     country_dict = pd.DataFrame(list(zip(countries, countries)), columns=[
#                                 'value', 'label']).to_json(orient="records")
#     return Response(country_dict, mimetype="application/json")


# @app.route('/data')
# def get_data():
#     data = pd.read_csv(data_url)
#     data.columns = ['country', 'category', 'consumption', 'co2']

#     data_json = data.to_json(orient="records")
#     return Response(data_json, mimetype="application/json")


# @app.route('/data/<country>')
# def get_country_data(country):
#     # TODO: Get the data filtered by the provided country in the argument
#     df = pd.read_csv(data_url)
#     df.columns = ['country', 'category', 'consumption', 'co2']

#     filtered_df = df[df['country'] == country].to_json(orient='records')
#     return Response(filtered_df, mimetype="application/json")


# STATIC PAGES
@app.route('/')
def index():
    # return app.send_static_file('index.html')
    return render_template('index.html')


@app.route('/about')
def about():
    # return app.send_static_file('about.html')
    return render_template('about.html')


@app.route('/dashboard')
def dashboard():
    # return app.send_static_file('dashboard.html')
    return render_template('dashboard.html', mapbox_token=mapbox_token)

if __name__ == '__main__':
    app.run(debug=True)
