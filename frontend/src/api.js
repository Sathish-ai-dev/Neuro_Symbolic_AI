export async function analyzeDocument(text) {
  const res = await fetch("http://localhost:5000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ document: text }),
  });
  return res.json();
}

export async function queryReasoning(query) {
  const res = await fetch("http://localhost:5000/reason", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  return res.json();
}
