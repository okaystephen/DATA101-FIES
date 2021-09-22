# Family Income and Expenditure Survey Data Visualization

Data plays a big role in providing poverty indicators and estimates in a country. The Family Income and Expenditure Survey (FIES) is one of the data sources used to estimate poverty in the Philippines which the Philippine Statistics Authority (PSA) conducts every 3 years. Its goal is to understand the current state of household income and expenditures to offer a foundation when it comes to developing or improving social and economic policies. Specifically, the FIES statistics show how much and what sorts of products and services families tend to spend their money on, as well as their sources of income. It also explores different household characteristics such as yearly income level, number of family members, age and occupation of household head, and household expenditure patterns. 

#

### Setup for Mac (Local):
- In Terminal/Command Prompt, set directory to the folder of this repository.
- Set up the virtual environment:
  - Enter `python3 -m venv venv`
  - Enter `venv/bin/activate`
  - Enter `pip install Flask pandas`
- To start the web application, enter `python app.py`
- Go to a browser, and enter `127.0.0.1:5000/`

### Setup for Windows (Local):
- In Command Prompt, set directory to the folder of this repository.
- Set up the virtual environment:
  - Enter `py -m venv env`
  - Activate env by running `.\env\Scripts\activate`
  - Install Flask by running `py -m pip install Flask`
  - Install pandas by running `py -m pip install pandas`
- To start the web application, enter `python app.py`
- Go to a browser, and enter `127.0.0.1:5000/`

### Heroku
The web application can now be accessed via [Heroku](http://data101-fies.herokuapp.com/)
