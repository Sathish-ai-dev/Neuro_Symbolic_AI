import spacy

nlp = spacy.load("en_core_web_sm")

def extract_entities(text):
    doc = nlp(text)
    return [(ent.text, ent.label_) for ent in doc.ents]

def extract_obligations(text):
    obligations = []
    for sent in nlp(text).sents:
        if "shall" in sent.text or "must" in sent.text:
            obligations.append(sent.text)
    return obligations
