import { useMemo } from "react";

export default function ImageViewer() {
  const { src, title, valid } = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const rawSrc = params.get("src") ?? "";
    const rawTitle = params.get("title") ?? "이미지";

    try {
      const parsed = new URL(rawSrc);
      return { src: rawSrc, title: rawTitle, valid: parsed.protocol === "https:" };
    } catch {
      return { src: "", title: rawTitle, valid: false };
    }
  }, []);

  return (
    <main className="image-viewer-page">
      <div className="image-viewer-toolbar">
        <div className="image-viewer-title">{title}</div>
        <button
          type="button"
          className="image-viewer-close"
          onClick={() => {
            if (window.history.length > 1) window.history.back();
            else window.close();
          }}
        >
          닫기
        </button>
      </div>
      <div className="image-viewer-canvas">
        {valid ? <img src={src} alt={title} /> : <p>이미지를 불러올 수 없습니다.</p>}
      </div>
    </main>
  );
}
