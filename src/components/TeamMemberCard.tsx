"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Phone } from "lucide-react";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  onViewProfile?: () => void;
}

export function TeamMemberCard({
  image,
  name,
  role,
  email,
  phone,
  onViewProfile,
}: TeamMemberCardProps) {
  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
      onClick={onViewProfile}
    >
      <div className="relative h-80 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-lg font-semibold text-[#0D402D]">{name}</h3>
        <p className="mb-4 text-muted-foreground">{role}</p>
        {email || phone ? (
          <div className="space-y-2 text-sm">
            {email ? (
              <div className="flex items-center text-muted-foreground">
                <Mail className="mr-2 h-4 w-4" />
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  {email}
                </a>
              </div>
            ) : null}
            {phone ? (
              <div className="flex items-center text-muted-foreground">
                <Phone className="mr-2 h-4 w-4" />
                <a
                  href={`tel:${phone}`}
                  className="transition-colors hover:text-primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  {phone}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
