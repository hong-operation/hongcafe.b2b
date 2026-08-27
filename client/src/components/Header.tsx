import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePartnershipOpen, setIsMobilePartnershipOpen] = useState(false);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-white/94 backdrop-blur-sm border-b border-[rgba(200,169,122,0.18)]" style={{ height: '60px' }}>
      <div className="px-4 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={`${import.meta.env.BASE_URL}hongcafe_logo.png`} alt="홍카페 BI" className="h-7 w-auto" />
          <span className="font-medium text-sm text-[#0E0E0E]">홍카페 비즈니스</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/about" className="text-[#888] hover:text-[#C8A97A] transition-colors text-xs font-normal" style={{ letterSpacing: '0.2px' }}>
            홍카페 소개
          </Link>
          <Link href="/services" className="text-[#888] hover:text-[#C8A97A] transition-colors text-xs font-normal" style={{ letterSpacing: '0.2px' }}>
            회사 소개
          </Link>
          <Link href="/contact" className="text-[#888] hover:text-[#C8A97A] transition-colors text-xs font-normal" style={{ letterSpacing: '0.2px' }}>
            회사 안내
          </Link>

          {/* Partnership Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPartnershipOpen(true)}
            onMouseLeave={() => setIsPartnershipOpen(false)}
          >
            <button className="flex items-center gap-1 text-[#888] hover:text-[#C8A97A] transition-colors text-xs font-normal" style={{ letterSpacing: '0.2px' }}>
              제휴 문의
              <ChevronDown className={`w-3 h-3 transition-transform ${isPartnershipOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isPartnershipOpen && (
              <div 
                className="absolute top-full left-0 mt-0 w-40 bg-white border border-[rgba(200,169,122,0.18)] shadow-md py-2 z-50"
                onMouseEnter={() => setIsPartnershipOpen(true)}
                onMouseLeave={() => setIsPartnershipOpen(false)}
              >
                <Link
                  href="/partnership"
                  className="block px-4 py-2 text-[#0E0E0E] hover:text-[#C8A97A] transition-colors text-xs"
                >
                  파트너십
                </Link>
                <Link
                  href="/unitaro"
                  className="block px-4 py-2 text-[#0E0E0E] hover:text-[#C8A97A] transition-colors text-xs"
                >
                  유니타로
                </Link>
                <Link
                  href="/recruit"
                  className="block px-4 py-2 text-[#0E0E0E] hover:text-[#C8A97A] transition-colors text-xs"
                >
                  상담사 모집
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4" style={{ visibility: 'hidden' }}>
          <Link href="/contact" className="text-xs font-medium px-5 py-2 border border-[#C8A97A] text-[#C8A97A] hover:bg-[#C8A97A] hover:text-white transition-all" style={{ borderRadius: '2px' }}>
            문의하기
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-[#F9F3E8] rounded transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[rgba(200,169,122,0.18)]">
          <nav className="px-4 md:px-10 py-4 flex flex-col gap-4">
            <Link 
              href="/about" 
              className="text-[#888] hover:text-[#C8A97A] transition-colors text-xs font-normal"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              홍카페 소개
            </Link>
            <Link 
              href="/services" 
              className="text-[#888] hover:text-[#C8A97A] transition-colors text-xs font-normal"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              회사 소개
            </Link>
            <Link 
              href="/contact" 
              className="text-[#888] hover:text-[#C8A97A] transition-colors text-xs font-normal"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              회사 안내
            </Link>

            {/* Mobile Partnership Menu */}
            <div className="border-t border-[rgba(200,169,122,0.18)] pt-4">
              <button 
                className="flex items-center gap-1 text-[#888] hover:text-[#C8A97A] transition-colors text-xs font-normal w-full"
                onClick={() => setIsMobilePartnershipOpen(!isMobilePartnershipOpen)}
              >
                제휴 문의
                <ChevronDown className={`w-3 h-3 transition-transform ${isMobilePartnershipOpen ? "rotate-180" : ""}`} />
              </button>

              {isMobilePartnershipOpen && (
                <div className="mt-3 pt-3 border-t border-[rgba(200,169,122,0.18)] flex flex-col gap-2">
                  <Link
                    href="/partnership"
                    className="text-[#888] hover:text-[#C8A97A] transition-colors text-xs"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobilePartnershipOpen(false);
                    }}
                  >
                    파트너십
                  </Link>
                  <Link
                    href="/unitaro"
                    className="text-[#888] hover:text-[#C8A97A] transition-colors text-xs"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobilePartnershipOpen(false);
                    }}
                  >
                    유니타로
                  </Link>
                  <Link
                    href="/recruit"
                    className="text-[#888] hover:text-[#C8A97A] transition-colors text-xs"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobilePartnershipOpen(false);
                    }}
                  >
                    상담사 모집
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-xs font-medium px-5 py-2 border border-[#C8A97A] text-[#C8A97A] hover:bg-[#C8A97A] hover:text-white transition-all inline-block mt-2" style={{ borderRadius: '2px', visibility: 'hidden' }}>
              문의하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
