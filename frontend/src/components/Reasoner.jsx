import { useState } from "react";
import { queryReasoning } from "../api";

export default function Reasoner() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleQuery = async () => {
    try {
      const data = await queryReasoning(query);

      if (!data || !data.result) {
        setResult("⚠️ No response from backend.");
      } else if (
        Array.isArray(data.result) &&
        data.result.length === 1 &&
        Object.keys(data.result[0]).length === 0
      ) {
        setResult("✅ Query succeeded, but no variables to display.");
      } else {
        setResult(data.result);
      }
    } catch (err) {
      setResult("❌ Error: Could not connect to backend or query failed.");
    }
  };

  return (
    <div className="pt-6 border-t">
      <h2 className="text-xl font-semibold mb-2">Compliance Reasoner</h2>
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Enter Prolog query (e.g. obligation(recipient, X).)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleQuery}
      >
        Run Reasoning
      </button>

      {result && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          {typeof result === "string" ? (
            <p>{result}</p>
          ) : (
            <pre>{JSON.stringify(result, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
}
