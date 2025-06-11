import pandas as pd

columns = [
    "Wheelchair_Accessible_Entrance", "Dine_In", "Reservable", "Serves_Beer", "Serves_Breakfast", "Serves_Brunch",
    "Serves_Dinner", "Serves_Lunch", "Serves_Vegetarian_Food", "Serves_Wine", "Price_Level", "restaurant", "bar",
    "bakery", "cafe", "American", "Italian", "Pizza", "Sandwiches", "Breakfast & Brunch", "New American", "Burgers",
    "Seafood", "Mexican", "Salad", "Chinese", "Fast Food", "Latin American", "Indian", "Sushi Bars", "Delis",
    "Chicken Wings", "Desserts", "Diners", "Asian Fusion", "Halal", "Steakhouses", "Caribbean", "Japanese", "Thai",
    "Mediterranean", "Spanish", "Vegetarian", "Barbeque", "Soup", "Middle Eastern", "Ramen", "Coffee & Tea",
    "Soul Food", "Caterers", "Noodles", "Pakistani", "Tacos", "Ice Cream", "Frozen Yogurt", "French", "Pancakes",
    "Tex-Mex", "Gluten-Free", "Vegan", "Comfort Food", "Afghan", "Southern", "Greek", "Turkish", "Cajun/Creole",
    "Vietnamese", "Cheesesteaks", "Korean", "Polish", "Haitian", "Hot Dogs", "Poke", "Hot Pot", "Buffets",
    "Food Trucks", "Empanadas", "Tapas/Small Plates", "Creperies", "Teppanyaki", "Moroccan", "Venezuelan",
    "Falafel", "Szechuan", "New Mexican Cuisine", "German", "Hungarian", "Portuguese", "Iberian", "Colombian",
    "Dominican", "Modern European", "Kebab", "Filipino"
]

def categorical_preprocess(cuisines, price, preferences, types):
    vector = [0] * len(columns)
    
    for i, col in enumerate(columns):
        if col in preferences:
            vector[i] = preferences[col]

    price_index = columns.index("Price_Level")
    vector[price_index] = price

    for t in types:
        if t in columns:
            type_index = columns.index(t)
            vector[type_index] = 1
    
    for cuisine in cuisines:
        if cuisine in columns:
            cuisine_index = columns.index(cuisine)
            vector[cuisine_index] = 1

    vector_df = pd.DataFrame([vector], columns=columns)
    return vector_df
    
    
