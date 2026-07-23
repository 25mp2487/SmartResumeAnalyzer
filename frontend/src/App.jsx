import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(
    "Waiting for resume upload"
  );

  // Backend connection
  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      });
  }, []);

  // Select file
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      setUploadStatus("Resume selected successfully.");
    }
  };

  // Upload file to backend
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a resume first.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setUploadStatus(data.message);
    } catch (error) {
      console.error(error);
      setUploadStatus("Upload failed.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #0f172a, #1e293b, #0f172a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "800px",
          backgroundColor: "#1e293b",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0px 0px 25px rgba(0,0,0,0.4)",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "15px",
          }}
        >
          Smart Resume Analyzer
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Generate a professional portfolio website from your resume in
          minutes.
        </p>

        {/* Select Resume */}
        <label
          style={{
            backgroundColor: "#2563eb",
            padding: "14px 28px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Choose Resume

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>

        {/* Upload Button */}
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleUpload}
            style={{
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              padding: "12px 28px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Upload Resume
          </button>
        </div>

        <p
          style={{
            marginTop: "15px",
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          Supported formats: PDF, DOC and DOCX
        </p>

        {/* Resume Details */}
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#0f172a",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "left",
          }}
        >
          <h3>Resume Details</h3>

          <p>
            <strong>Selected File:</strong>{" "}
            {selectedFile ? selectedFile.name : "No file selected"}
          </p>

          <p>
            <strong>File Size:</strong>{" "}
            {selectedFile
              ? (selectedFile.size / 1024).toFixed(2) + " KB"
              : "--"}
          </p>

          <p>
            <strong>Upload Status:</strong> {uploadStatus}
          </p>
        </div>

        {/* Backend Connection */}
        <div
          style={{
            marginTop: "25px",
            backgroundColor: "#0f172a",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Backend Connection Status</h3>

          <p style={{ color: "#38bdf8" }}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
