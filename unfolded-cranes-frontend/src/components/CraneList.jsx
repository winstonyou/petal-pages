import { useEffect, useState } from "react";

export default function CraneList() {
  const [entries, setEntries] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/cranes")
      .then((res) => res.json())
      .then((data) => setEntries(data.reverse()))
      .catch((err) => console.error("Failed to fetch entries:", err));
  }, []);

  const toggleExpanded = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getFlowerColor = (rating) => {
    switch (rating) {
      case 5:
        return "bg-pink-200";
      case 4:
        return "bg-rose-200";
      case 3:
        return "bg-yellow-200";
      case 2:
        return "bg-orange-200";
      case 1:
        return "bg-red-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="mt-10 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Your Garden 🌼
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {entries.map((entry) => (
          <div key={entry.id} className="flex flex-col items-center">
            <div
              onClick={() => toggleExpanded(entry.id)}
              className={`relative w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold cursor-pointer shadow-lg transform transition hover:scale-105 ${getFlowerColor(
                entry.rating
              )}`}
              style={{
                backgroundImage: "url('/flower-clipart-xl.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="z-20 text-white drop-shadow-md">{entry.rating}</span>
            </div>


            {expandedId === entry.id && (
              <div className="mt-3 bg-white bg-opacity-70 rounded-xl shadow-md p-4 w-72 text-sm space-y-2 border border-gray-300">
                <p><span className="font-semibold">🌹 Rose:</span> {entry.rose}</p>
                <p><span className="font-semibold">🗡️ Thorn:</span> {entry.thorn}</p>
                <p><span className="font-semibold">🌱 Bud:</span> {entry.bud}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
