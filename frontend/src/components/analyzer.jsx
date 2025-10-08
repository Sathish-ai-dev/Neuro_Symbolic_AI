import { useState } from "react";
import { analyzeDocument } from "../api";
import ResultCard from "./ResultCard";

export default function Analyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    const data = await analyzeDocument(text);
    setResult(data);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Legal Document Analyzer</h2>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={6}
        placeholder="Paste legal text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleAnalyze}
      >
        Analyze
      </button>

      {result && (
        <div className="mt-4">
          <ResultCard title="Entities" items={result.entities} />
          <ResultCard title="Obligations" items={result.obligations} />
        </div>
      )}
    </div>
  );
}
