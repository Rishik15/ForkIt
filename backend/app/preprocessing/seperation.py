import ast
import sys
from backend.app.preprocessing.categorical_preprocessing import categorical_preprocess
from backend.app.preprocessing.tfidf_preprocessing import tfidf_preprocess

def seperation(user_preferences):
    cuisines = user_preferences["cuisines"]
    preferences = user_preferences["preferences"]
    price = user_preferences["price_level"]
    query = user_preferences["query"]
    types = user_preferences["restaurant_types"]

    categorical_df = categorical_preprocess(cuisines, price, preferences, types)
    tdidf_vector = tfidf_preprocess(query, price, cuisines, types)

    return categorical_df, tdidf_vector

if __name__ == "__main__":
    argument = sys.argv[1]
    user_preferences = ast.literal_eval(argument)
    print(seperation(user_preferences))