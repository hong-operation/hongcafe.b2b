import { Link } from "wouter";
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-white py-9" style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}>
      <div className="px-10 max-w-[1080px] mx-auto">
        <div className="grid grid-cols-3 gap-6 items-center">
          {/* Left - Logo */}
          <div className="flex items-center">
            <img src={`${import.meta.env.BASE_URL}hongcafe_logo.png`} alt="홍카페" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
          </div>

          {/* Center - Info */}
          <div className="text-center">
            <p className="text-xs text-white/25 leading-relaxed">
              (주) 피플벤처스 | 대표: 현철우<br />
              사업자등록번호: 130-87-04142<br />
              서울특별시 마포구 성암로 330 621호
            </p>
          </div>

          {/* Right - Social Media */}
          <div className="flex gap-4 justify-end items-center">
            <a
              href="https://www.instagram.com/hongcafe_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@hongcafe_fortune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
