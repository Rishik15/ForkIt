from backend.app.preprocessing.aggregation import aggregate_group_preferences
from backend.app.preprocessing.seperation import seperation
from backend.app.prediction.cosinesimilarity import cosinesimilarity
from backend.app.prediction.tfidf import tfidf
from backend.app.scoring.finalRecommendations import scoring


def pipeline(input_json):
    user_preferences = aggregate_group_preferences(input_json)
    categorical_df, tdidf_vector = seperation(user_preferences)

    svd_recommendations = cosinesimilarity(categorical_df)
    tfidf_recommendations = tfidf(tdidf_vector)
    
    final_recommendations = scoring(svd_recommendations, tfidf_recommendations)

    return final_recommendations

