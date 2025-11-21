export default function SearchBar({ query, setQuery }) {
  return (
    <input
      className="search-input"
      placeholder="Search by code or URL..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
