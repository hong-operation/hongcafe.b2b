import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-page min-h-screen bg-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden pt-16"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '100px 40px 80px',
          marginTop: '60px'
        }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 35%, #FCF7EE 0%, #fff 65%)'
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '3.5px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '28px',
              opacity: 0,
              animation: 'fadeUp 0.9s 0.15s forwards'
            }}
          >
            People Ventures × Hongcafe Business
          </p>

          <h1
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(38px, 5.5vw, 72px)',
              fontWeight: 300,
              lineHeight: '1.25',
              marginBottom: '28px',
              color: '#0E0E0E',
              opacity: 0,
              animation: 'fadeUp 0.9s 0.3s forwards'
            }}
          >
            국내 최대 규모의<br />
            <span style={{ color: '#C8A97A', fontWeight: 600 }}>운세 서비스</span>
            <br />
            <strong style={{ fontWeight: 700 }}>홍카페</strong>와 함께하세요
          </h1>

          <p
            style={{
              fontSize: '15px',
              color: '#888',
              lineHeight: '1.9',
              maxWidth: '500px',
              marginBottom: '48px',
              margin: '0 auto 48px',
              opacity: 0,
              animation: 'fadeUp 0.9s 0.45s forwards'
            }}
          >
            타로, 사주, 신점 등 다양한 분야의 1:1 전화 상담을 제공하는<br />
            홍카페가 새로운 비즈니스 기회를 제안합니다.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              opacity: 0,
              animation: 'fadeUp 0.9s 0.6s forwards',
              marginTop: '80px'
            }}
          >
            <a
              href="#programs"
              style={{
                background: '#C8A97A',
                color: '#fff',
                border: 'none',
                padding: '13px 30px',
                borderRadius: '2px',
                fontSize: '13.5px',
                fontWeight: 500,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.15s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#9A7850';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C8A97A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              프로그램 보기
            </a>
            <Link
              href="/about"
              style={{
                background: 'transparent',
                color: '#0E0E0E',
                border: '1px solid rgba(0,0,0,0.14)',
                padding: '13px 30px',
                borderRadius: '2px',
                fontSize: '13.5px',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C8A97A';
                e.currentTarget.style.color = '#C8A97A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.14)';
                e.currentTarget.style.color = '#0E0E0E';
              }}
            >
              홍카페 소개
            </Link>
          </div>


        </div>
      </section>

      {/* Numbers Section */}
      <div
        style={{
          background: '#0E0E0E',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0
        }}
      >
        {[
          { val: '국내 1위', label: '전화 운세 플랫폼' },
          { val: '320만+', label: '누적 상담 건수' },
          { val: '91만+', label: '이용자 후기' },
          { val: '50%+', label: '높은 재이용률' }
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '36px 32px',
              borderRight: idx !== 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '28px',
                fontWeight: 600,
                color: '#C8A97A',
                lineHeight: 1
              }}
            >
              {item.val}
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Programs Section */}
      <section
        id="programs"
        style={{
          padding: '100px 40px',
          background: '#fff'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ marginBottom: '56px' }}>
            <p
              style={{
                fontSize: '9.5px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#C8A97A',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              Business Programs
              <span
                style={{
                  flex: 1,
                  height: '1px',
                  background: 'rgba(200,169,122,0.18)'
                }}
              ></span>
            </p>
            <h2
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(26px, 3vw, 40px)',
                fontWeight: 400,
                lineHeight: '1.4',
                marginBottom: '14px',
                color: '#0E0E0E'
              }}
            >
              홍카페 비즈니스<br />
              <strong style={{ fontWeight: 700 }}>프로그램</strong>
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: '#888',
                lineHeight: '1.85',
                maxWidth: '100%',
                marginBottom: '56px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              파트너십, 유니타로, 상담사 모집까지 — 홍카페와 함께할 수 있는 다양한 방식을 소개합니다.
            </p>
          </div>

          {/* Program Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(200,169,122,0.18)',
              border: '1px solid rgba(200,169,122,0.18)'
            }}
          >
            {[
              {
                num: 'Program 01',
                icon: '🤝',
                name: '파트너십',
                desc: '가맹점 운영 및 제휴를 통한 비즈니스 기회',
                link: '/partnership'
              },
              {
                num: 'Program 02',
                icon: '🎓',
                name: '유니타로',
                desc: '대학 내 타로 교육 및 커뮤니티 지원',
                link: '/unitaro'
              },
              {
                num: 'Program 03',
                icon: '💼',
                name: '상담사 모집',
                desc: '전문 상담사 모집 및 운영 지원',
                link: '/recruit'
              }
            ].map((prog, idx) => (
              <Link
                key={idx}
                href={prog.link}
                style={{
                  background: '#fff',
                  padding: '48px 36px',
                  textDecoration: 'none',
                  color: '#0E0E0E',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F9F3E8';
                  const topBar = e.currentTarget.querySelector('[data-top-bar]') as HTMLElement;
                  if (topBar) {
                    topBar.style.transform = 'scaleX(1)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff';
                  const topBar = e.currentTarget.querySelector('[data-top-bar]') as HTMLElement;
                  if (topBar) {
                    topBar.style.transform = 'scaleX(0)';
                  }
                }}
              >
                <div
                  data-top-bar
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: '#C8A97A',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.35s'
                  }}
                ></div>
                <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#C8A97A', marginBottom: '28px' }}>
                  {prog.num}
                </div>
                <div style={{ fontSize: '30px', marginBottom: '18px' }}>{prog.icon}</div>
                <div
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: '21px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}
                >
                  {prog.name}
                </div>
                <div
                  style={{
                    fontSize: '12.5px',
                    color: '#888',
                    lineHeight: '1.85',
                    flex: 1,
                    marginBottom: '28px'
                  }}
                >
                  {prog.desc}
                </div>
                <div style={{ fontSize: '11.5px', color: '#C8A97A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  자세히 보기 <span style={{ transition: 'transform 0.2s' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          background: '#F5F4F1',
          padding: '100px 40px'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '72px',
              alignItems: 'center'
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  fontWeight: 400,
                  lineHeight: '1.4',
                  marginBottom: '24px',
                  color: '#0E0E0E'
                }}
              >
                홍카페는<br />
                <strong style={{ fontWeight: 700 }}>신뢰할 수 있는 파트너</strong>
              </h2>
              <div style={{ fontSize: '13.5px', color: '#888', lineHeight: '1.95', marginBottom: '16px' }}>
                <p style={{ marginBottom: '16px' }}>
                  <b style={{ color: '#0E0E0E', fontWeight: 500 }}>국내 최대 규모의 운세 플랫폼</b>으로서 안정적인 수익 창출 기회를 제공합니다.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  <b style={{ color: '#0E0E0E', fontWeight: 500 }}>전문 매니저의 1:1 관리</b>와 체계적인 모니터링으로 파트너의 성공을 지원합니다.
                </p>
                <p>
                  <b style={{ color: '#0E0E0E', fontWeight: 500 }}>다양한 협업 방식</b>을 통해 각 파트너의 상황에 맞는 맞춤형 솔루션을 제공합니다.
                </p>
              </div>
              <Link
                href="/partnership"
                style={{
                  display: 'inline-block',
                  marginTop: '12px',
                  fontSize: '12px',
                  color: '#C8A97A',
                  borderBottom: '1px solid #C8A97A',
                  textDecoration: 'none',
                  paddingBottom: '2px',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                파트너십 자세히 보기 →
              </Link>
            </div>

            {/* Stats Box */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                background: 'rgba(200,169,122,0.18)',
                border: '1px solid rgba(200,169,122,0.18)'
              }}
            >
              {[
                { val: '320만+', label: '누적 상담 건수' },
                { val: '91만+', label: '이용자 후기' },
                { val: '50%+', label: '높은 재이용률' },
                { val: '국내 1위', label: '전화 운세 플랫폼' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
                    padding: '30px 26px'
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: '30px',
                      fontWeight: 700,
                      color: '#C8A97A',
                      lineHeight: 1,
                      marginBottom: '8px'
                    }}
                  >
                    {stat.val}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#888' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: '#0E0E0E',
          textAlign: 'center',
          padding: '100px 40px'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(26px, 3.5vw, 44px)',
              fontWeight: 300,
              color: '#fff',
              marginBottom: '16px',
              lineHeight: '1.4'
            }}
          >
            홍카페와 함께 <span style={{ color: '#C8A97A', fontWeight: 600 }}>성장</span>하세요
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '40px',
              lineHeight: '1.8'
            }}
          >
            새로운 비즈니스 기회를 탐색하고 있다면, 지금 바로 홍카페에 문의하세요.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
            <Link
              href="/partnership"
              style={{
                background: '#C8A97A',
                color: '#fff',
                border: 'none',
                padding: '13px 30px',
                borderRadius: '2px',
                fontSize: '13.5px',
                fontWeight: 500,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#9A7850';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C8A97A';
              }}
            >
              파트너십 문의
            </Link>
            <Link
              href="/contact"
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '13px 30px',
                borderRadius: '2px',
                fontSize: '13.5px',
                textDecoration: 'none',
                transition: 'border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C8A97A';
                e.currentTarget.style.color = '#C8A97A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              회사 안내
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
