import * as React from "react";

// Simple X mark to represent the X (formerly Twitter) logo.
export function XLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M3 3h5.5l3.1 4 3.6-4H20l-6.4 7.3L21 21h-5.5l-3.6-4.6L8 21H4l6.8-7.7z" />
    </svg>
  );
}
