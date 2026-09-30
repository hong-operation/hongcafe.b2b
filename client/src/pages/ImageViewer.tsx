import { useMemo } from "react";

export default function ImageViewer() {
  const { src, title, valid, showTitle } = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const rawSrc = params.get("src") ?? "";
    const rawTitle = params.get("title") ?? "이미지";
    const showTitle = params.get("showTitle") !== "0";

    try {
      const parsed = new URL(rawSrc);
      return { src: rawSrc, title: rawTitle, valid: parsed.protocol === "https:", showTitle };
    } catch {
      return { src: "", title: rawTitle, valid: false, showTitle };
    }
  }, []);

  return (
    <main className="image-viewer-page">
      <div className={`image-viewer-toolbar${showTitle ? "" : " is-title-hidden"}`}>
        {showTitle ? <div className="image-viewer-title">{title}</div> : null}
        <button
          type="button"
          className="image-viewer-close"
          onClick={() => {
            // The viewer is opened in a separate same-origin tab.
            // Focus the original page first, then close only this viewer tab so
            // the original page keeps its exact scroll position.
            if (window.opener && !window.opener.closed) {
              window.opener.focus();
            }
            window.close();
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
