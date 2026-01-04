import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile() {
  const { username } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/images/user/${username}`)
      .then(res => res.json())
      .then(data => setImages(data));
  }, [username]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{username}'s Gallery</h2>

      <div className="masonry">
        {images.map(img => (
          <img
            key={img._id}
            src={img.imageUrl}
            alt=""
            className="masonry-item"
          />
        ))}
      </div>
    </div>
  );
}
