"use client";
import { useState, useRef, ChangeEvent } from "react";

// Simple client-side profile photo upload with in-memory preview.
// No backend involved; images are not persisted.
export default function ProfilePhotoUpload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const clearSelection = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
  };

  return (
    <section aria-label="Profile photo upload" style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: 8 }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Profile preview"
            width={96}
            height={96}
            style={{ width: 96, height: 96, objectFit: "cover", borderRadius: "50%", border: "1px solid #ccc" }}
          />
        ) : (
          <div
            aria-label="No image selected"
            style={{ width: 96, height: 96, borderRadius: "50%", background: "#f3f3f3", border: "1px solid #ccc" }}
          />
        )}
        <div style={{ display: "grid", gap: ".5rem" }}>
          <input ref={inputRef} type="file" accept="image/*" onChange={onFileChange} />
          {previewUrl && (
            <button type="button" onClick={clearSelection} style={{ width: "fit-content" }}>
              Clear
            </button>
          )}
        </div>
      </div>
      <p style={{ marginTop: ".75rem", color: "#555" }}>
        This is a local preview only. There is no upload backend yet.
      </p>
    </section>
  );
}
