"use client";

import { useState } from "react";
import { X, Upload, Trash2 } from "lucide-react";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (images: string[]) => void;
  title?: string;
}

export function ImageUploadModal({
  isOpen,
  onClose,
  onUpload,
  title = "Upload Images",
}: ImageUploadModalProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setSelectedFiles((prev) => [...prev, ...files]);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...urls]);
  };

  const handleRemoveImage = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    onUpload(previewUrls);
    setSelectedFiles([]);
    setPreviewUrls([]);
    onClose();
  };

  const handleClose = () => {
    setSelectedFiles([]);
    setPreviewUrls([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="text-xl font-semibold text-[#0D402D]">{title}</h2>
          <button
            onClick={handleClose}
            className="rounded-full p-2 transition-colors hover:bg-secondary"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <label
              htmlFor="file-upload"
              className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border transition-colors hover:bg-secondary"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <Upload className="mb-3 h-12 w-12 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">PNG, JPG, JPEG (MAX. 5MB each)</p>
              </div>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
              />
            </label>
          </div>

          {previewUrls.length ? (
            <div>
              <h3 className="mb-4 font-semibold">
                Selected Images ({previewUrls.length})
              </h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {previewUrls.map((url, index) => (
                  <div key={url} className="group relative">
                    <img src={url} alt={`Preview ${index + 1}`} className="h-40 w-full rounded-lg object-cover" />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute right-2 top-2 rounded-full bg-red-600 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label="Remove image"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-border p-6">
          <button
            onClick={handleClose}
            className="rounded border border-border px-6 py-3 transition-colors hover:bg-secondary"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={!previewUrls.length}
            className="rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Upload {previewUrls.length ? `(${previewUrls.length})` : ""}
          </button>
        </div>
      </div>
    </div>
  );
}
