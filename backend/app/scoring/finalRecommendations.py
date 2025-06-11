import pandas as pd
import numpy as np

def scoring(categorical, tfidf):
    merged_df = pd.merge(
        categorical,
        tfidf,
        on='Place_ID',
        how='outer',
        suffixes=('_svd', '_tfidf')
    )
    if 'Name_svd' in merged_df.columns and 'Name_tfidf' in merged_df.columns:
        merged_df['Name'] = merged_df['Name_svd'].combine_first(merged_df['Name_tfidf'])
    elif 'Name_svd' in merged_df.columns:
        merged_df['Name'] = merged_df['Name_svd']
    elif 'Name_tfidf' in merged_df.columns:
        merged_df['Name'] = merged_df['Name_tfidf']
    else:
        merged_df['Name'] = ''

    merged_df['SVD_Similarity'] = merged_df['SVD_Similarity'].fillna(0)
    merged_df['TFIDF_Similarity'] = merged_df['TFIDF_Similarity'].fillna(0)

    merged_df['Ratings'] = merged_df['Ratings_tfidf'].combine_first(merged_df['Ratings_svd'])
    merged_df['Total_Reviews'] = merged_df['Total_Reviews_tfidf'].combine_first(merged_df['Total_Reviews_svd'])

    merged_df['Normalized_Ratings'] = merged_df['Ratings'] / 5.0
    merged_df['Normalized_Reviews'] = np.log1p(merged_df['Total_Reviews'])
    merged_df['Normalized_Reviews'] /= merged_df['Normalized_Reviews'].max()

    w_svd = 0.2
    w_tfidf = 0.3
    w_rating = 0.2
    w_reviews = 0.3

    merged_df['Combined_Score'] = (
                                    w_svd * merged_df['SVD_Similarity'] +
                                    w_tfidf * merged_df['TFIDF_Similarity'] +
                                    w_rating * merged_df['Normalized_Ratings'] +
                                    w_reviews * merged_df['Normalized_Reviews']
                                )
    
    final_top_5 = merged_df.sort_values('Combined_Score', ascending=False).head(5)

    return final_top_5[['Place_ID', 'Name']]