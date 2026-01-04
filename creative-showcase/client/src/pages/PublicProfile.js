

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PublicProfile() {
  const { username } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/images/user/${username}`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, [username]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{username}'s Gallery</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "10px",
        }}
      >
        {images.map((img) => (
          <img
            key={img._id}
            src={
              img.imageUrl.startsWith("http")
                ? img.imageUrl
                : `http://localhost:5000${img.imageUrl}`
            }
            alt="art"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}
