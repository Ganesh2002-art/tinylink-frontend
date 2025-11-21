import { deleteLinkApi } from "../utils/api";

export default function LinksTable({ links, onDeleted }) {
  return (
    <>
      {/* Desktop Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Target</th>
            <th>Clicks</th>
            <th>Last Clicked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {links.map((l) => (
            <tr key={l.code}>
              <td><a href={`/${l.code}`} target="_blank">{l.code}</a></td>
              <td>{l.target_url}</td>
              <td>{l.total_clicks}</td>
              <td>{l.last_clicked ?? "Never"}</td>
              <td>
                <button onClick={() => navigator.clipboard.writeText(`${window.location.origin}/${l.code}`)}>Copy</button>
                <button onClick={async () => { await deleteLinkApi(l.code); onDeleted(); }}>Delete</button>
                <a href={`/code/${l.code}`}><button>Stats</button></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="mobile-list">
        {links.map((l) => (
          <div key={l.code} className="mobile-card">
            <div className="mobile-row"><b>Code:</b> {l.code}</div>
            <div className="mobile-row"><b>URL:</b> {l.target_url}</div>
            <div className="mobile-row"><b>Clicks:</b> {l.total_clicks}</div>
            <div className="mobile-row"><b>Last Clicked:</b> {l.last_clicked ?? "Never"}</div>

            <div className="mobile-actions">
              <button onClick={() => navigator.clipboard.writeText(`${window.location.origin}/${l.code}`)}>Copy</button>
              <button onClick={async () => { await deleteLinkApi(l.code); onDeleted(); }}>Delete</button>
              <a href={`/code/${l.code}`}><button>Stats</button></a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
