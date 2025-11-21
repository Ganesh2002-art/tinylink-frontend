import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLink } from "../utils/api";
import "../styles/stats.css";

export default function StatsPage() {
  const { code } = useParams();
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLink(code).then((data) => {
      setLink(data);
      setLoading(false);
    });
  }, [code]);

  if (loading) return <p className="loading">Loading stats...</p>;
  if (!link || link.error) return <p className="error">Link not found.</p>;

  return (
    <div className="stats-container">
      <h2>Stats for <span>{link.code}</span></h2>

      <div className="stats-card">
        <p><strong>Target URL:</strong> {link.target_url}</p>
        <p><strong>Total Clicks:</strong> {link.total_clicks}</p>
        <p><strong>Created At:</strong> {new Date(link.created_at).toLocaleString()}</p>
        <p><strong>Last Clicked:</strong> {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "Never"}</p>

        <button
          className="copy-btn"
          onClick={() => navigator.clipboard.writeText(`${window.location.origin}/${link.code}`)}
        >
          Copy Full Link
        </button>

        <a className="back-btn" href="/">← Back</a>
      </div>
    </div>
  );
}
