"use client";

import { useState } from "react";
import { X, Lock } from "lucide-react";

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (password: string) => void;
}

export function AdminLoginModal({ isOpen, onClose, onLogin }: AdminLoginModalProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      onLogin(password);
      setPassword("");
      setError("");
      onClose();
    } else {
      setError("Incorrect password");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-border p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-[#0D402D]">Admin Login</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-secondary"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <p className="mb-4 text-sm text-muted-foreground">
            Enter the admin password to access content management features.
          </p>
          <div className="mb-4">
            <label htmlFor="password" className="mb-2 block text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="w-full rounded border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter admin password"
              autoFocus
            />
            {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
          </div>
          <div className="mb-4 rounded bg-secondary p-3 text-xs text-muted-foreground">
            <strong>Demo credentials:</strong> password is{" "}
            <code className="rounded bg-white px-1 py-0.5">admin123</code>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
