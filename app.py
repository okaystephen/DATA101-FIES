from flask import Flask, Response, jsonify
import pandas as pd

app = Flask(__name__)

data_url = 'data/Family Income and Expenditure.csv'

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
    return app.send_static_file('index.html')


@app.route('/about')
def about():
    return app.send_static_file('about.html')

@app.route('/dashboard')
def dashboard():
    return app.send_static_file('dashboard.html')


if __name__ == '__main__':
    app.run(debug=True)
