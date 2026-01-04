


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  const token = localStorage.getItem("token");

  const loadImages = async () => {
    if (!token) return;

    const res = await axios.get(
      "http://localhost:5000/api/images/user",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setImages(res.data);
  };

  const uploadImage = async () => {
    if (!file) return alert("Choose an image");

    const formData = new FormData();
    formData.append("image", file);

    await axios.post(
      "http://localhost:5000/api/images/upload",
      formData,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setFile(null);
    loadImages();
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Gallery</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br /><br />
      <button onClick={uploadImage}>Upload</button>

      <hr />

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
                e.target.remove();   
              }}
            />
          );
        })}
      </div>
    </div>
  );
}





