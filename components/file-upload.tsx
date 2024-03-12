"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { UploadButton } from "@/lib/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
        title="close image"
        onClick={() => onChange("")}
        className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
        type="button"
        >
            <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadButton
      className="bg-indigo-500 px-3 pb-3 text-white rounded-xl"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};