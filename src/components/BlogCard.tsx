"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, Eye, MessageCircle, ThumbsUp } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt?: string;
  author: string;
  authorImage?: string;
  date: string;
  readTime: string;
  views?: number;
  comments?: number;
  likes?: number;
  category?: string;
  onReadMore?: () => void;
}

export function BlogCard({
  image,
  title,
  excerpt,
  author,
  authorImage,
  date,
  readTime,
  views,
  comments,
  likes,
  category,
  onReadMore,
}: BlogCardProps) {
  return (
    <article
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={onReadMore}
    >
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback src={image} alt={title} className="h-full w-full object-cover" />
        {category ? (
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-sm text-white">
            {category}
          </div>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-[#0D402D]">{title}</h3>
        {excerpt ? <p className="mb-4 line-clamp-2 text-muted-foreground">{excerpt}</p> : null}
        <div className="mb-4 flex items-center">
          {authorImage ? (
            <ImageWithFallback
              src={authorImage}
              alt={author}
              className="mr-3 h-10 w-10 rounded-full object-cover"
            />
          ) : null}
          <div>
            <div className="text-sm font-medium">{author}</div>
            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {date}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {readTime}
              </span>
            </div>
          </div>
        </div>
        {views !== undefined || comments !== undefined || likes !== undefined ? (
          <div className="flex items-center space-x-4 border-t border-border pt-4 text-sm text-muted-foreground">
            {views !== undefined ? (
              <span className="flex items-center">
                <Eye className="mr-1 h-4 w-4" />
                {views}
              </span>
            ) : null}
            {comments !== undefined ? (
              <span className="flex items-center">
                <MessageCircle className="mr-1 h-4 w-4" />
                {comments}
              </span>
            ) : null}
            {likes !== undefined ? (
              <span className="flex items-center">
                <ThumbsUp className="mr-1 h-4 w-4" />
                {likes}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
