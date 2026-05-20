import { useState, useEffect, useCallback } from "react";

// ─── useFetch Custom Hook ────────────────────────────────────────────────────
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

// Fallback colors if image fails
const COLORS = [
  "#7ed321", "#9b59b6", "#2ecc71", "#e91e8c",
  "#3498db", "#b6e0b6", "#6c3483", "#ff69b4",
];

// ─── Photo Card ──────────────────────────────────────────────────────────────
function PhotoCard({ item, index }) {
  const [imgError, setImgError] = useState(false);
  const imageUrl = item.images?.[0];
  const showPlaceholder = !imageUrl || imgError;

  return (
    <div style={styles.card}>
      <div style={styles.imgBox}>
        {showPlaceholder ? (
          <div style={{ ...styles.placeholder, background: COLORS[index % COLORS.length] }}>
            <span style={styles.placeholderText}>600 x 600</span>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={item.title}
            onError={() => setImgError(true)}
            style={styles.img}
          />
        )}
      </div>
      <p style={styles.caption}>{item.title}</p>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <div style={styles.root}>
      <h2 style={styles.heading}>Photos</h2>

      {loading && <p style={styles.status}>Loading...</p>}
      {error && <p style={styles.status}>Error: {error}</p>}

      {data && (
        <div style={styles.grid}>
          {data.map((item, i) => (
            <PhotoCard key={item.id} item={item} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  root: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    padding: "16px",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 0,
    maxWidth: 860,
    margin: "0 auto",
  },
  card: {
    background: "#000",
    border: "1px solid #2a2a2a",
    padding: 6,
  },
  imgBox: {
    width: "100%",
    aspectRatio: "1 / 1",
    overflow: "hidden",
    marginBottom: 4,
  },
  placeholder: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "rgba(0,0,0,0.35)",
    fontSize: 11,
    fontStyle: "italic",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  caption: {
    fontSize: 11,
    color: "#bbb",
    padding: "0 2px 4px",
    lineHeight: 1.3,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  status: {
    textAlign: "center",
    color: "#888",
    marginTop: 40,
    fontSize: 14,
  },
};