### 🧠 Neuro-Symbolic Legal AI

A hybrid AI system that combines **natural language processing (NLP)** and **symbolic reasoning (Prolog)** to analyze legal documents and assess compliance. Built with **React + Tailwind** frontend and **Flask + PySwip** backend.

---

## 📸 Demo Screenshot

![Final_Result](/Result/Result1.png)

## 🚀 Features

- ✍️ **Legal Document Analyzer**: Extracts entities and obligations from legal text using NLP.
- 🧠 **Compliance Reasoner**: Evaluates symbolic logic queries using Prolog.
- ⚡ **Full-stack Integration**: React frontend + Flask backend + SWI-Prolog engine.
- 🎨 **Tailwind UI**: Responsive, clean, and customizable interface.

---

## 🧱 Tech Stack

| Layer       | Tools Used                          |
|-------------|-------------------------------------|
| Frontend    | React, Vite, Tailwind CSS           |
| Backend     | Flask, PySwip (SWI-Prolog), CORS    |
| NLP Engine  | spaCy (custom pipeline)             |
| Symbolic AI | Prolog rules via PySwip             |

---

## 📦 Installation

### 1. Clone the repo

### 2. Setup backend
'''bash
   cd backend
   python -m venv venv
   venv\Scripts\activate  # On Windows
   pip install -r requirements.txt
   python -m spacy download en_core_web_sm   
   python app.py
   - Runs on http://localhost:5000

![Backend_Result](/backend/image.png)

### 3. Setup frontend
   bash
   cd frontend
   npm install
   npm run dev
   - Runs on http://localhost:5173

![Frontend_Result](/frontend/image.png)

### 🧪 Usage
### 📝 Legal Document Analyzer
## Paste legal clauses like:

* text:
    - The Recipient shall not disclose any Confidential Information to third parties without prior written consent from the Discloser.
    - Click Analyze to extract:

    - Entities: Recipient, Confidential Information, Discloser

    - Obligations: "shall not disclose..."

### 🧠 Compliance Reasoner
* Enter Prolog-style queries like:

    - prolog
    - obligation(recipient, X).
    - duration(confidentiality, Years).
    - compliant(company).
    - Click Run Reasoning to get symbolic results.

### 🧪 Sample Test Cases
* Legal Analyzer
Input Clause	 |  Expected Output
--------------------------------------------
NDA clause	     |  Entities + 2 obligations
GDPR clause	     |  Consent + deletion duties
Payment terms    |  Payment + penalty obligations

* Reasoner
Prolog Query	                   | Expected Result
--------------------------------------------
obligation(recipient, disclosure). |	[{}]
obligation(recipient, X).          |	[{"X": "disclosure"}]
duration(confidentiality, Years).  |	[{"Years": 5}]

### 📚 Future Enhancements
- 🔍 File upload for document analysis

- 🧠 Auto-generation of Prolog rules from NLP output

- 📊 Visualization of reasoning chains

- 🌐 Deployment to Hugging Face or Vercel

### 👨‍💻 Author
Sathish S
LinkedIn: [https://www.linked.com/in/sathish-ai-dev]
GitHub:   [https://www.github.com/Sathish-ai-dev]

### 📄 License
* MIT License
  - Let me know if you want to add badges, deploy instructions, or a Hugging Face model card. You're documenting like a pro!