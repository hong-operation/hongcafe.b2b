import Header from "@/components/Header";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          padding: '120px 40px 80px',
          marginTop: '60px',
          maxWidth: '1080px',
          margin: '60px auto 0',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '72px',
          alignItems: 'start'
        }}
      >
        {/* Left Column */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '10px',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              border: '1px solid rgba(200,169,122,0.3)',
              borderRadius: '2px',
              padding: '5px 12px',
              marginBottom: '22px'
            }}
          >
            About Hongcafe
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '20px',
              color: '#0E0E0E'
            }}
          >
            홍카페는<br />
            <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>신뢰</em>를 바탕으로 한<br />
            <strong style={{ fontWeight: 700 }}>상담 플랫폼</strong>
          </h1>

          {/* Lead */}
          <p
            style={{
              fontSize: '14.5px',
              color: '#888',
              lineHeight: 1.9,
              marginBottom: '32px'
            }}
          >
            국내 최대 규모의 타로·사주·신점 상담 플랫폼으로,<br />
            깊이 있는 1:1 상담 경험을 제공합니다.
          </p>

          {/* Highlight Box */}
          <div
            style={{
              borderLeft: '2px solid #C8A97A',
              padding: '16px 20px',
              background: '#F9F3E8',
              marginBottom: '32px',
              fontSize: '13.5px',
              color: '#5a4a30',
              lineHeight: 1.85
            }}
          >
            320만 건 이상 누적 상담과 1,200명 이상의 전문 상담사, 고객 만족도 ★4.95/5를 기록하며 프리미엄 상담 플랫폼으로 자리매김했습니다.
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a
              href="https://www.hongcafe.com/"
              target="_blank"
              rel="noopener noreferrer"
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
                display: 'inline-block',
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
              홍카페 방문하기
            </a>
            <a
              href="http://peoplev.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                color: '#0E0E0E',
                border: '1px solid rgba(0,0,0,0.14)',
                padding: '13px 30px',
                borderRadius: '2px',
                fontSize: '13.5px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'border-color 0.2s, color 0.2s',
                cursor: 'pointer'
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
              피플벤처스 소개
            </a>
          </div>
        </div>

        {/* Right Column - Stats */}
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
            { val: '국내 1위', label: '전화 운세 플랫폼' },
            { val: '320만+', label: '누적 상담 건수' },
            { val: '1,200+', label: '전문 상담사' },
            { val: '★4.95/5', label: '고객 만족도' }
          ].map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#C8A97A',
                  lineHeight: 1,
                  marginBottom: '8px'
                }}
              >
                {stat.val}
              </div>
              <div style={{ fontSize: '11px', color: '#888', letterSpacing: '.5px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ padding: '88px 40px', background: '#F5F4F1' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
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
            Why Choose Hongcafe
            <div style={{ flex: 1, height: '1px', background: 'rgba(200,169,122,0.18)' }} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(24px, 2.8vw, 36px)',
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: '12px',
              color: '#0E0E0E'
            }}
          >
            홍카페가<br />
            <strong style={{ fontWeight: 700 }}>선택받는 이유</strong>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '13.5px',
              color: '#888',
              lineHeight: 1.85,
              maxWidth: '520px',
              marginBottom: '48px'
            }}
          >
            타로, 사주, 신점 등 다양한 분야의 1:1 전화 상담을 제공하는<br />
            국내 최대 규모의 운세 전문 플랫폼입니다.
          </p>

          {/* Features Grid */}
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
              { icon: '🕐', title: '24시간 상담', desc: '언제든 편한 시간에 전화·채팅으로 상담받을 수 있습니다.' },
              { icon: '✅', title: '검증된 상담사', desc: '엄격한 심사를 거친 검증된 상담사들만 활동합니다.' },
              { icon: '📱', title: '언제 어디서나', desc: '앱과 웹을 통해 언제 어디서나 쉽게 이용할 수 있습니다.' }
            ].map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: '#FFFFFF',
                  padding: '40px 32px',
                  textAlign: 'center',
                  transition: 'background 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F9F3E8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{feature.icon}</div>
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    marginBottom: '10px',
                    color: '#0E0E0E'
                  }}
                >
                  {feature.title}
                </div>
                <div style={{ fontSize: '12.5px', color: '#888', lineHeight: 1.8 }}>
                  {feature.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '88px 40px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
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
            Service Categories
            <div style={{ flex: 1, height: '1px', background: 'rgba(200,169,122,0.18)' }} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(24px, 2.8vw, 36px)',
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: '12px',
              color: '#0E0E0E'
            }}
          >
            제공 <strong style={{ fontWeight: 700 }}>서비스</strong>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '13.5px',
              color: '#888',
              lineHeight: 1.85,
              maxWidth: '520px',
              marginBottom: '48px'
            }}
          >
            홍카페에서는 다양한 운세 상담 서비스를 제공합니다.
          </p>

          {/* Services Grid */}
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
              { icon: '🃏', name: '타로 상담', desc: '타로 카드를 통해 연애, 진로, 인간관계 등 다양한 분야의 상담을 제공합니다.' },
              { icon: '🌙', name: '사주 상담', desc: '사주명리학을 바탕으로 운세와 인생 전반에 대한\n상담을 제공합니다.' },
              { icon: '🔮', name: '신점 상담', desc: '신점을 바탕으로 현재의 흐름과 고민에 대한\n방향을 제시합니다.' },
              { icon: '📞', name: '전화상담', desc: '실시간 전화로 깊이 있는 1:1 상담을 제공합니다.' },
              { icon: '💬', name: '채팅 상담', desc: '채팅으로 편하게 상담받을 수 있습니다.' },
              { icon: '✨', name: '기타 상담', desc: '펫타로, 대면 상담, 클래스 등 다양한 상담을 제공합니다.' }
            ].map((service) => (
              <div
                key={service.name}
                style={{
                  background: '#FFFFFF',
                  padding: '40px 32px',
                  textAlign: 'center',
                  transition: 'background 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F9F3E8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{service.icon}</div>
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    marginBottom: '10px',
                    color: '#0E0E0E'
                  }}
                >
                  {service.name}
                </div>
                <div style={{ fontSize: '12.5px', color: '#888', lineHeight: 1.8 }}>
                  {service.desc.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < service.desc.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '88px 40px', background: '#F5F4F1' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
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
            Our Values
            <div style={{ flex: 1, height: '1px', background: 'rgba(200,169,122,0.18)' }} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(24px, 2.8vw, 36px)',
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: '12px',
              color: '#0E0E0E'
            }}
          >
            홍카페의 <strong style={{ fontWeight: 700 }}>가치</strong>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '13.5px',
              color: '#888',
              lineHeight: 1.85,
              maxWidth: '520px',
              marginBottom: '48px'
            }}
          >
            홍카페는 신뢰, 품격, 그리고 혁신을 바탕으로 운영됩니다.
          </p>

          {/* Values Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1px',
              background: 'rgba(200,169,122,0.18)',
              border: '1px solid rgba(200,169,122,0.18)'
            }}
          >
            {[
              { num: '01', title: '신뢰성', desc: '엄격한 심사 과정을 통해 검증된 상담사만 활동하며 투명한 운영으로 신뢰할 수 있는\n상담 환경을 제공합니다.' },
              { num: '02', title: '상담 품질', desc: '안정적이고 만족도 높은 상담 경험을 제공할 수 있도록 서비스 품질 관리에 집중합니다.' },
              { num: '03', title: '접근성', desc: '24시간 언제든 편리하게 이용할 수 있는 환경을 제공하여 누구나 부담 없이\n상담을 받을 수 있습니다.' },
              { num: '04', title: '서비스 확장', desc: '펫타로, 대면 상담, 클래스 등 다양한 상담을 제공합니다.' }
            ].map((value) => (
              <div
                key={value.num}
                style={{
                  background: '#FFFFFF',
                  padding: '40px 36px',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F9F3E8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                }}
              >
                <div
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#C8A97A',
                    lineHeight: 1,
                    marginBottom: '16px'
                  }}
                >
                  {value.num}
                </div>
                <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px', color: '#0E0E0E' }}>
                  {value.title}
                </div>
                <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.8 }}>
                  {value.desc.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < value.desc.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: '#0E0E0E',
          textAlign: 'center',
          padding: '88px 40px'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(24px, 3vw, 40px)',
              fontWeight: 300,
              color: '#FFFFFF',
              marginBottom: '14px',
              lineHeight: 1.4
            }}
          >
            홍카페와 함께<br />
            <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>새로운 기회</em>를 만들어보세요
          </h2>
          <p
            style={{
              fontSize: '13.5px',
              color: 'rgba(255,255,255,.4)',
              marginBottom: '36px',
              lineHeight: 1.8
            }}
          >
            파트너십, 유니타로, 상담사 모집 등 다양한 협업 방식이 준비되어 있습니다.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Link
              href="/#programs"
              style={{
                background: '#C8A97A',
                color: '#fff',
                border: 'none',
                padding: '14px 36px',
                borderRadius: '2px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-block',
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
              협업 문의하기
            </Link>
            <a
              href="https://www.hongcafe.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,.7)',
                border: '1px solid rgba(255,255,255,.15)',
                padding: '14px 32px',
                borderRadius: '2px',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'border-color 0.2s, color 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C8A97A';
                e.currentTarget.style.color = '#C8A97A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)';
                e.currentTarget.style.color = 'rgba(255,255,255,.7)';
              }}
            >
              홍카페 방문
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
