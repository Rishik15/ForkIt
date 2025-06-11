from flask import Flask, request, jsonify
from backend.app.Pipeline.pipeline import pipeline

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        input_json = request.get_json()

        result_df = pipeline(input_json)

        result_json = result_df.to_dict(orient='records')

        return jsonify({
            'recommendations': result_json
        })

    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True)
