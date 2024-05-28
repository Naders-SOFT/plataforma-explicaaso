// client/src/App.js

import React, { useState } from 'react';

function Naosei() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    // try {
    //   const response = await fetch('http://localhost:3003/pdf', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   const data = await response.json();
    //   setFileUrl(data.fileUrl);
    // } catch (error) {
    //   console.error('Error uploading file:', error);
    // }
    fetch('http://localhost:3003/pdf', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setFileUrl(data.fileUrl)
    })
    .catch(error => {
      console.error('Error uploading file:', error)
    })
  };

  return (
    <div className="App">
      <h1>Upload de Arquivo</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {fileUrl && (
        <div>
          <h3>Arquivo enviado com sucesso!</h3>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">Ver arquivo</a>
        </div>
      )}
    </div>
  );
}

export default Naosei;
