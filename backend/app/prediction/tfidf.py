import pickle
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

def tfidf(tfidf_vector):
    with open('backend/app/models/tfidf_matrix.pkl', 'rb') as file:
        tfidf_matrix = pickle.load(file)

    with open('backend/app/models/restaurants.pkl', 'rb') as file:
        df = pickle.load(file)

    similarity_scores = cosine_similarity(tfidf_vector, tfidf_matrix)
    top_indices = similarity_scores.argsort()[0][::-1][:10]
    df['TFIDF_Similarity'] = similarity_scores[0]

    return df.iloc[top_indices][["Place_ID", "Name", "Ratings", "Total_Reviews", "TFIDF_Similarity"]]