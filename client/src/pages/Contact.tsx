import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contactInfo = [
    {
      label: "Address",
      icon: "📍",
      content: "(주)피플벤처스\n서울시 마포구 성암로 330\nDMC첨단산업센터 621호"
    },
    {
      label: "Email",
      icon: "✉️",
      content: "help@peoplev.co.kr",
      link: "mailto:help@peoplev.co.kr"
    },
    {
      label: "Phone",
      icon: "☎️",
      content: "1644-8190",
      link: "tel:1644-8190"
    }
  ];

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
          textAlign: 'center'
        }}
      >
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
          Contact Us
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
          피플벤처스와<br />
          <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>연락</em>하세요
        </h1>

        {/* Lead */}
        <p
          style={{
            fontSize: '14.5px',
            color: '#888',
            lineHeight: 1.9,
            maxWidth: '520px',
            margin: '0 auto'
          }}
        >
          궁금한 점이나 협업 제안이 있으시면 언제든 연락주세요. 빠르게 답변해드리겠습니다.
        </p>
      </section>

      {/* Contact Information Cards */}
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
              gap: '14px',
              justifyContent: 'center'
            }}
          >
            Information
            <div style={{ flex: 1, height: '1px', background: 'rgba(200,169,122,0.18)', maxWidth: '80px' }} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(24px, 2.8vw, 36px)',
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: '48px',
              color: '#0E0E0E',
              textAlign: 'center'
            }}
          >
            연락처 <strong style={{ fontWeight: 700 }}>정보</strong>
          </h2>

          {/* Contact Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(200,169,122,0.18)',
              border: '1px solid rgba(200,169,122,0.18)'
            }}
          >
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
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
                <div
                  style={{
                    fontSize: '32px',
                    marginBottom: '16px'
                  }}
                >
                  {info.icon}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#C8A97A',
                    marginBottom: '12px',
                    fontWeight: 600
                  }}
                >
                  {info.label}
                </div>
                {info.link ? (
                  <a
                    href={info.link}
                    style={{
                      fontSize: '14px',
                      color: '#0E0E0E',
                      lineHeight: 1.8,
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#C8A97A';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#0E0E0E';
                    }}
                  >
                    {info.content}
                  </a>
                ) : (
                  <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                    {info.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
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
            Location
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
            찾아오시는 <strong style={{ fontWeight: 700 }}>길</strong>
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
            서울시 마포구 성암로 330 DMC첨단산업센터 621호에 위치하고 있습니다.
          </p>

          {/* Map */}
          <div
            style={{
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(200,169,122,0.18)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            <iframe
              title="피플벤처스 위치 지도"
              src="https://www.google.com/maps?q=37.58474,126.88564&z=16&output=embed"
              width="100%"
              height="500"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
