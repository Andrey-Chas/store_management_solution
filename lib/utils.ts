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

  let type = "other";
  if (!extension) {
    type = "unknown";
  } else {
    switch (extension) {
      // images
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
      case "webp":
      case "svg":
      case "avif":
      case "bmp":
      case "tiff":
        type = "image";
        break;

      // videos
      case "mp4":
      case "mov":
      case "avi":
      case "mkv":
      case "webm":
      case "flv":
      case "wmv":
        type = "video";
        break;

      // audio
      case "mp3":
      case "wav":
      case "m4a":
      case "aac":
      case "ogg":
      case "flac":
        type = "audio";
        break;

      // archives
      case "zip":
      case "rar":
      case "7z":
      case "tar":
      case "gz":
      case "bz2":
        type = "archive";
        break;

      // documents
      case "pdf":
      case "doc":
      case "docx":
      case "xls":
      case "xlsx":
      case "ppt":
      case "pptx":
      case "txt":
      case "csv":
      case "md":
      case "rtf":
      case "odt":
        type = "document";
        break;

      // code files
      case "js":
      case "ts":
      case "jsx":
      case "tsx":
      case "py":
      case "java":
      case "go":
      case "rb":
      case "php":
      case "css":
      case "html":
      case "json":
      case "xml":
      case "yml":
      case "yaml":
      case "sh":
      case "ps1":
      case "rs":
      case "swift":
      case "kt":
      case "c":
      case "cpp":
      case "cs":
        type = "code";
        break;

      default:
        type = "other";
    }
  }

  return { type, extension };
};
