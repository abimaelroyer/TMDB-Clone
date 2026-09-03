import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void; // A function to call when the user submits
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState(""); // Local state to hold the input text

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from refreshing (default HTML behavior)
    if (query.trim()) {
      onSearch(query); // Send the text up to App.tsx
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update state as you type
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;