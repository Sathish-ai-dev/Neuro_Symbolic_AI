import Analyzer from "./components/Analyzer";
import Reasoner from "./components/Reasoner";

export default function App() {
  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        🧠 Neuro-Symbolic Legal AI
      </h1>
      <Analyzer />
      <Reasoner />
    </div>
  );
}
