// src/components/Links.jsx
import { useEffect, useState } from "react";

export default function Links() {
  const [links, setLinks] = useState([]);
  const LINKS_FILE = process.env.REACT_APP_LINKS || "/links.json"; // fallback

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(LINKS_FILE);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setLinks(data);
      } catch (err) {
        console.error("No se pudieron cargar los links:", err);
      }
    }
    load();
  }, [LINKS_FILE]);

  return (
    <ul>
      {links.map(([label, url], i) => (
        <li key={i}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
