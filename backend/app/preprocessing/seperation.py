import ast
import sys
from categorical_preprocessing import categorical_preprocess
from tfidf_preprocessing import tfidf_preprocess

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

    

# {
#   "group": [
#     {
#       "cuisines": ["Mexican", "Seafood", "Vegetarian"],
#       "preferences": {
#         "Wheelchair_Accessible_Entrance": 1,
#         "Dine_In": 1,
#         "Reservable": 0,
#         "Serves_Beer": 1,
#         "Serves_Breakfast": 0,
#         "Serves_Brunch": 1,
#         "Serves_Dinner": 1,
#         "Serves_Lunch": 1,
#         "Serves_Vegetarian_Food": 1,
#         "Serves_Wine": 0
#       },
#       "price_level": 2,
#       "restaurant_types": ["cafe"],
#       "query": "Looking for a cozy seafood dinner with vegetarian options"
#     },
#     {
#       "cuisines": ["Indian", "Vegetarian", "Vegan"],
#       "preferences": {
#         "Wheelchair_Accessible_Entrance": 0,
#         "Dine_In": 1,
#         "Reservable": 1,
#         "Serves_Beer": 0,
#         "Serves_Breakfast": 1,
#         "Serves_Brunch": 0,
#         "Serves_Dinner": 1,
#         "Serves_Lunch": 1,
#         "Serves_Vegetarian_Food": 1,
#         "Serves_Wine": 0
#       },
#       "price_level": 1,
#       "restaurant_types": ["cafe"],
#       "query": "Affordable Indian food that’s good for lunch"
#     },
#     {
#       "cuisines": ["Japanese", "Sushi Bars"],
#       "preferences": {
#         "Wheelchair_Accessible_Entrance": 1,
#         "Dine_In": 1,
#         "Reservable": 1,
#         "Serves_Beer": 1,
#         "Serves_Breakfast": 0,
#         "Serves_Brunch": 0,
#         "Serves_Dinner": 1,
#         "Serves_Lunch": 0,
#         "Serves_Vegetarian_Food": 0,
#         "Serves_Wine": 1
#       },
#       "price_level": 3,
#       "restaurant_types": ["cafe"],
#       "query": "Fancy sushi dinner with good ambiance"
#     }
#   ]
# }