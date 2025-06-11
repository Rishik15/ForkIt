import pickle
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity


def cosinesimilarity(user_df):
    with open("backend/app/models/svd_model.pkl", "rb") as f:
        svd = pickle.load(f)
    user_vector_reduced = svd.transform(user_df)

    with open('backend/app/models/restaurantVectors.pkl', 'rb') as f:
        restaurant_vectors_df = pickle.load(f)

    with open('backend/app/models/restaurants.pkl', 'rb') as file:
        df = pickle.load(file)

    restaurantVectors = restaurant_vectors_df.iloc[:, 2:].values
    cosine_similarities = cosine_similarity(user_vector_reduced, restaurantVectors)
    top_10_indices = np.argsort(cosine_similarities[0])[::-1][:10]

    top_10_restaurants = df.iloc[top_10_indices][['Place_ID', 'Name', "Ratings", 'Total_Reviews']]
    top_10_restaurants['SVD_Similarity'] = cosine_similarities[0][top_10_indices]

    return top_10_restaurants
