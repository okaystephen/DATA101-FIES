from flask import Flask, Response, jsonify
import pandas as pd

app = Flask(__name__)

data_url = 'data/food_consumption.csv'

# DATA ENDPOINTS


@app.route('/countries')
def get_countries():
    # TODO: Get the countries and return as a list or JSON to the JS file
    df = pd.read_csv(data_url)
    df.columns = ['country', 'category', 'consumption', 'co2']
    countries = sorted(list(df.country.unique()))

    country_dict = pd.DataFrame(list(zip(countries, countries)), columns=[
                                'value', 'label']).to_json(orient="records")
    return Response(country_dict, mimetype="application/json")


@app.route('/data')
def get_data():
    data = pd.read_csv(data_url)
    data.columns = ['country', 'category', 'consumption', 'co2']

    data_json = data.to_json(orient="records")
    return Response(data_json, mimetype="application/json")


@app.route('/data/<country>')
def get_country_data(country):
    # TODO: Get the data filtered by the provided country in the argument
    df = pd.read_csv(data_url)
    df.columns = ['country', 'category', 'consumption', 'co2']

    filtered_df = df[df['country'] == country].to_json(orient='records')
    return Response(filtered_df, mimetype="application/json")


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
