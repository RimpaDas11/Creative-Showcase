import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Landing() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/images/all")
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Creative Showcase</h1>

      <div className="masonry">
        {images.map(img => (
          <img
            key={img._id}
            src={`http://localhost:5000${img.imageUrl}`}
            alt="art"
            className="masonry-item"
          />
        ))}
      </div>
    </>
  );
}
