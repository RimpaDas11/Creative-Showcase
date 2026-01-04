




import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/images/all")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(console.error);
  }, []);

  return (
    <div className="masonry">
      {images.map((img) => {
        const src = img.imageUrl.startsWith("http")
          ? img.imageUrl
          : `http://localhost:5000${img.imageUrl}`;

        return (
          <img
            key={img._id}
            src={src}
            alt=""
            className="masonry-item"
            loading="lazy"
            onError={(e) => {
              e.target.remove(); // remove broken images
            }}
          />
        );
      })}
    </div>
  );
}
