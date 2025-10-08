from pyswip import Prolog

def load_rules(file_path):
    with open(file_path, 'r') as f:
        return f.read()

def query_compliance(rules, query):
    prolog = Prolog()
    for line in rules.strip().split('\n'):
        if line and not line.startswith('%'):
            prolog.assertz(line.strip('.'))
    result = list(prolog.query(query.strip('.')))
    return result
