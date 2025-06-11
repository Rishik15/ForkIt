import pickle

price_map = {
                1 : "cheap inexpensive low-price low-cost economical economic affordable",
                2 : "moderate fair mid-price reasonable average",
                3 : "expensive fancy lavish",
                4 : "luxurious high-end premium fine-dining"
            }

def tfidf_preprocess(query, price, cuisine, types):
    price_text = price_map.get(price, "")
    cuisine_text = " ".join(cuisine) if cuisine else ""
    type_text = " ".join(types) if types else ""
    
    user_query = f"{query} {cuisine_text} {type_text} {price_text}"
    
    tfidf_vector = process_user_query(user_query)
    return tfidf_vector


def process_user_query(query):
    with open("backend/app/models/tfidf_vectorizer.pkl", "rb") as f:
        vectorizer = pickle.load(f)
    query_tfidf = vectorizer.transform([query])
    return query_tfidf