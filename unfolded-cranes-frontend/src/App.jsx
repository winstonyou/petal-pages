import { useState } from "react";
import CraneList from "./components/CraneList";

function App() {
  const [form, setForm] = useState({
    rating: "",
    rose: "",
    thorn: "",
    bud: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/cranes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ crane: form }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await response.json();
      setMessage("🌸 Crane submitted successfully!");
      setForm({ rating: "", rose: "", thorn: "", bud: "" });
    } catch (err) {
      setMessage("❌ Failed to submit your crane.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-700">Petal Pages 🧠</h1>

        <div>
          <label className="block text-sm font-medium mb-1">✨ How was your day? (1–5)</label>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">🌹 Rose (something good)</label>
          <textarea
            name="rose"
            value={form.rose}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">🗡️ Thorn (something bad)</label>
          <textarea
            name="thorn"
            value={form.thorn}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">🌱 Bud (something to look forward to)</label>
          <textarea
            name="bud"
            value={form.bud}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Crane"}
        </button>

        {message && (
          <p className="text-center text-sm mt-2 text-gray-700">{message}</p>
        )}
      </form>
      <CraneList />
    </div>
  );
}

export default App;
