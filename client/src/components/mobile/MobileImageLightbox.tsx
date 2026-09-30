import { useEffect } from "react";
import { createPortal } from "react-dom";

interface MobileImageLightboxProps {
  src: string | null;
  alt: string;
  title?: string;
  showTitle?: boolean;
  onClose: () => void;
}

export default function MobileImageLightbox({
  src,
  alt,
  title,
  showTitle = true,
  onClose,
}: MobileImageLightboxProps) {
  useEffect(() => {
    if (!src) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      body.style.overflow = previous.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [src, onClose]);

  if (!src || typeof document === "undefined") return null;

  return createPortal(
    <div className="m-image-lightbox" role="dialog" aria-modal="true" aria-label={title || alt}>
      <button
        type="button"
        className="m-image-lightbox-backdrop"
        aria-label="이미지 보기 닫기"
        onClick={onClose}
      />
      <div className="m-image-lightbox-panel">
        <div className={`m-image-lightbox-toolbar${showTitle && title ? "" : " is-title-hidden"}`}>
          {showTitle && title ? <div className="m-image-lightbox-title">{title}</div> : null}
          <button type="button" className="m-image-lightbox-close" onClick={onClose} aria-label="닫기">
            <span aria-hidden="true">×</span>
            <span>닫기</span>
          </button>
        </div>
        <div className="m-image-lightbox-canvas">
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>,
    document.body,
  );
}
