"use client";

import Image from "next/image";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";

const previewImages = {
  light: {
    src: "/launcher-preview-light.png",
    alt: "Divergence Launcher preview in light mode",
  },
  dark: {
    src: "/launcher-preview-dark-clean.png",
    alt: "Divergence Launcher preview in dark mode",
  },
};

const imageSize = {
  width: 2464,
  height: 1744,
};

export function LauncherPreviewZoom() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="Enlarge launcher preview"
        className="group relative mx-auto block w-full cursor-zoom-in rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={previewImages.light.src}
          alt={previewImages.light.alt}
          width={imageSize.width}
          height={imageSize.height}
          className="mx-auto block h-auto max-h-[320px] w-full object-contain drop-shadow-xl transition-transform duration-200 group-hover:scale-[1.015] dark:hidden"
        />
        <Image
          src={previewImages.dark.src}
          alt={previewImages.dark.alt}
          width={imageSize.width}
          height={imageSize.height}
          className="mx-auto hidden h-auto max-h-[320px] w-full object-contain drop-shadow-xl transition-transform duration-200 group-hover:scale-[1.015] dark:block"
        />
      </button>

      {isOpen ? (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/78 p-4 backdrop-blur-sm animate-in fade-in-0 duration-200 sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Launcher preview"
            className="relative w-full max-w-6xl animate-in zoom-in-95 duration-200"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close launcher preview"
              className="absolute right-2 top-2 z-10 inline-flex size-9 items-center justify-center rounded-lg border border-white/20 bg-black/55 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/35"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="size-4" />
            </button>
            <Image
              src={previewImages.light.src}
              alt={previewImages.light.alt}
              width={imageSize.width}
              height={imageSize.height}
              className="mx-auto block max-h-[84vh] w-full object-contain drop-shadow-2xl dark:hidden"
              priority
            />
            <Image
              src={previewImages.dark.src}
              alt={previewImages.dark.alt}
              width={imageSize.width}
              height={imageSize.height}
              className="mx-auto hidden max-h-[84vh] w-full object-contain drop-shadow-2xl dark:block"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
