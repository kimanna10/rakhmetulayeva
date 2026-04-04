"use client";
import { galleryService } from "@/services/gallery";
import { useState } from "react";

export default function AdminPage() {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const url = await galleryService.upload(file);
      console.log("Uploaded to:", url);
      alert("File uploaded!");
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="pt-[150px] flex flex-col gap-4 items-start">
      <h1>Admin Page</h1>
      <input type="file" onChange={handleUpload} />
      {uploading && <p>Uploading...</p>}
    </main>
  );
}
