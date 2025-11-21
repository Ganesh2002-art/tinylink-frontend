import { useState, useEffect } from "react";
import AddLinkForm from "../components/AddLinkForm";
import LinksTable from "../components/LinksTable";
import SearchBar from "../components/SearchBar";
import { fetchLinks } from "../utils/api";

export default function Dashboard() {
  const [links, setLinks] = useState([]);
  const [query, setQuery] = useState("");

  async function load() {
    const data = await fetchLinks();
    setLinks(data);
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = links.filter(
    (l) =>
      l.code.toLowerCase().includes(query.toLowerCase()) ||
      l.target_url.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <AddLinkForm onCreated={load} />
      <SearchBar query={query} setQuery={setQuery} />
      <LinksTable links={filtered} onDeleted={load} />
    </div>
  );
}
