from flask import Flask, request, jsonify
from flask_cors import CORS
from nlp_extractor import extract_entities, extract_obligations
from symbolic_engine import load_rules, query_compliance

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "✅ Neuro-Symbolic Legal AI backend is running."

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    text = data['document']
    entities = extract_entities(text)
    obligations = extract_obligations(text)
    return jsonify({'entities': entities, 'obligations': obligations})

@app.route('/reason', methods=['POST'])
def reason():
    data = request.json
    query = data['query']
    rules = load_rules('rules/sample_rules.pl')
    result = query_compliance(rules, query)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
