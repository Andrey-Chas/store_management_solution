import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value));
};

export const getFileType = (fileName: string) => {
  const parts = fileName.split(".");
  const extension = parts.length > 1 ? (parts.pop() || "").toLowerCase() : "";

  const imageExts = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp", "tiff"]);
  const videoExts = new Set(["mp4", "mov", "avi", "mkv", "webm", "flv", "wmv"]);
  const audioExts = new Set(["mp3", "wav", "m4a", "aac", "ogg", "flac"]);
  const archiveExts = new Set(["zip", "rar", "7z", "tar", "gz", "bz2"]);
  const documentExts = new Set(["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "csv", "md", "rtf", "odt"]);
  const codeExts = new Set(["js", "ts", "jsx", "tsx", "py", "java", "go", "rb", "php", "css", "html", "json", "xml", "yml", "yaml", "sh", "ps1", "rs", "swift", "kt", "c", "cpp", "cs"]);

  let type = "other";
  if (!extension) {
    type = "unknown";
  } else if (imageExts.has(extension)) {
    type = "image";
  } else if (videoExts.has(extension)) {
    type = "video";
  } else if (audioExts.has(extension)) {
    type = "audio";
  } else if (documentExts.has(extension)) {
    type = "document";
  } else if (archiveExts.has(extension)) {
    type = "archive";
  } else if (codeExts.has(extension)) {
    type = "code";
  }

  return { type, extension };
};
