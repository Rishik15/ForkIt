from collections import Counter
import numpy as np
import sys
import ast

def aggregate_group_preferences(input_json):
    group = input_json["group"]
    num_people = len(group)

    cuisine_counter = Counter()
    for person in group:
        cuisine_counter.update(person["cuisines"])
    aggregated_cuisines = [cuisine for cuisine, count in cuisine_counter.items() if count / num_people >= 0.3]

    type_counter = Counter()
    for person in group:
        type_counter.update(person["restaurant_types"])
    aggregated_types = [rtype for rtype, count in type_counter.items() if count / num_people >= 0.3]

    preference_keys = group[0]["preferences"].keys()
    preference_values = {key: [] for key in preference_keys}

    for person in group:
        for key in preference_keys:
            preference_values[key].append(person["preferences"][key])

    aggregated_preferences = {
                                key: 1 if np.mean(values) >= 0.5 else 0
                                for key, values in preference_values.items()
                            }

    price_levels = [person["price_level"] for person in group]
    aggregated_price_level = int(round(np.median(price_levels)))

    combined_query = ". ".join([person["query"] for person in group])

    user_preference = {
        "cuisines": aggregated_cuisines,
        "restaurant_types": aggregated_types,
        "preferences": aggregated_preferences,
        "price_level": aggregated_price_level,
        "query": combined_query
    }
    print("\nAggregated User Preference:", user_preference) 
    print("\n")

    return user_preference


if __name__ == "__main__":
    argument = sys.argv[1]
    input_json = ast.literal_eval(argument)
    print("\n", aggregate_group_preferences(input_json))

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