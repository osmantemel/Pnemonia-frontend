import React, { useState } from 'react';
import '../css/Fotoload.css';

const FotoLoad = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        console.log(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`photo-upload ${dragging ? 'active' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h1>Fotoğraf Yükleme</h1>
      <div className="upload-area">
        <label htmlFor="fileInput" className="file-label">
          Fotoğraf Seç
        </label>
        <input
          type="file"
          id="fileInput"
          onChange={handleChange}
          className="file-input"
        />
        <p>veya</p>
        <p className="drop-text">Dosyayı sürükleyip bırakın</p>
      </div>
      {file && (
        <div className="uploaded-file">
          <p>Yüklenen Dosya: {file.name}</p>
        </div>
      )}
      <button onClick={handleSubmit} className="upload-button">
        Gönder
      </button>
    </div>
  );
};

export default FotoLoad;
