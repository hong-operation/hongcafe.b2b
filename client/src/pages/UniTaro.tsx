import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function UniTaro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);
  const [showCTA, setShowCTA] = useState(true);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ctaSectionRef.current) {
        const ctaRect = ctaSectionRef.current.getBoundingClientRect();
        setShowCTA(ctaRect.top > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryImages = [
    {
      src: "https://app.notion.com/image/attachment%3A6bb787bc-0368-4177-9531-a4012eab6dcf%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C4.png?table=block&id=3c953279-2277-80bd-b8c0-f0117698d2a2&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=31ad872b-594c-81ae-b42f-00029a33de05&cache=v2&imgBuildSrc=requestProxiedImageUrl",
      title: "타로 교육 프로그램",
    },
    {
      src: "https://app.notion.com/image/attachment%3A069c1c5e-d54f-4d84-a77f-a25400d2d746%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C3.png?table=block&id=3c953279-2277-801a-a8b7-df8ded4a3604&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=31ad872b-594c-81ae-b42f-00029a33de05&cache=v2&imgBuildSrc=requestProxiedImageUrl",
      title: "학생 커뮤니티 활동",
    },
    {
      src: "https://app.notion.com/image/attachment%3A7676a0c7-2c29-46e4-a241-4cab302a8eae%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C2.png?table=block&id=3c953279-2277-80e5-931e-e0d97cd61514&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=31ad872b-594c-81ae-b42f-00029a33de05&cache=v2&imgBuildSrc=requestProxiedImageUrl",
      title: "타로 카드 소개",
    },
    {
      src: "https://app.notion.com/image/attachment%3A90d10d18-1861-4f26-a4a9-70633fccd06c%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C1.png?table=block&id=3c953279-2277-8006-b2b2-c90d003a9601&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=31ad872b-594c-81ae-b42f-00029a33de05&cache=v2&imgBuildSrc=requestProxiedImageUrl",
      title: "심리 상담 세션",
    },
    {
      src: "https://app.notion.com/image/attachment%3Ad734ddef-2b0b-43c2-b3af-20764fafcf52%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C5.png?table=block&id=3c953279-2277-80ee-b499-ee47fc34d067&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=31ad872b-594c-81ae-b42f-00029a33de05&cache=v2&imgBuildSrc=requestProxiedImageUrl",
      title: "협업 대학 활동",
    },
    {
      src: "https://app.notion.com/image/attachment%3A6fdc0a30-5ba3-4fde-a129-b8fac08c365c%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C6.png?table=block&id=3c953279-2277-80c1-bee7-fdcf63f8b09a&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=31ad872b-594c-81ae-b42f-00029a33de05&cache=v2&imgBuildSrc=requestProxiedImageUrl",
      title: "프로그램 참여자",
    },
  ];

  const handlePrevImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) =>
        prev === null ? 0 : prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) =>
        prev === null ? 0 : prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Header />

      {/* Hero Section - 2 Column Layout */}
      <section
        style={{
          padding: '120px 40px 72px',
          maxWidth: '1080px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '72px',
          alignItems: 'start',
          marginTop: '60px'
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
              border: '1px solid rgba(200,169,122,0.18)',
              borderRadius: '2px',
              padding: '5px 12px',
              marginBottom: '22px'
            }}
          >
            Program 02 · UniTaro
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '24px',
              color: '#0E0E0E'
            }}
          >
            타로는 이야기를<br />
            꺼내는 <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>창구</em>입니다
          </h1>

          {/* Lead */}
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(14,14,14,.6)',
              lineHeight: 1.9,
              maxWidth: '580px',
              marginBottom: '40px'
            }}
          >
            홍카페는 타로 상담이 사회적 고립을 겪는 분들에게 자신의 이야기를 꺼내고<br />
            감정을 표현할 수 있는 하나의 창구가 될 수 있다고 생각합니다.<br />
            이를 바탕으로 대학 내 심리·상담·복지 등 관련 학과 및 학생 동아리와의<br />
            협업을 통해 타로 상담의 긍정적인 가치를 확산합니다.
          </p>

          {/* CTA Button */}
          <a
            href="https://forms.gle/RamLCbA7SbhehbUw8"
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
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#9A7850';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C8A97A';
            }}
          >
            협업 제안하기
          </a>
        </div>

        {/* Right Column - Info Card */}
        <div
          style={{
            background: '#0E0E0E',
            padding: '40px',
            borderRadius: '2px',
            border: '1px solid rgba(200,169,122,0.2)'
          }}
        >
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#C8A97A',
                marginBottom: '12px'
              }}
            >
              Program Overview
            </div>
            <h3
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '24px',
                fontWeight: 300,
                color: '#FFFFFF',
                marginBottom: '16px'
              }}
            >
              유니타로
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,.6)',
                lineHeight: 1.8
              }}
            >
              대학 내 타로 교육 및 커뮤니티 지원 프로그램
            </p>
          </div>

          <div style={{ borderTop: '1px solid rgba(200,169,122,0.2)', paddingTop: '24px' }}>
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '11px',
                  color: '#C8A97A',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Target
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}
              >
                <li style={{ fontSize: '13px', color: 'rgba(255,255,255,.7)', marginBottom: '8px' }}>• 대학 심리·상담·복지 관련 학과</li>
                <li style={{ fontSize: '13px', color: 'rgba(255,255,255,.7)', marginBottom: '8px' }}>• 학생 동아리 및 커뮤니티</li>
                <li style={{ fontSize: '13px', color: 'rgba(255,255,255,.7)' }}>• 타로 교육 및 상담 관심층</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section style={{ padding: '88px 40px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontSize: '9.5px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '16px'
            }}
          >
            What We Provide
          </div>

          {/* Section Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '56px',
              color: '#0E0E0E'
            }}
          >
            유니타로가<br />
            제공하는 것
          </h2>

          {/* Support Boxes Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px'
            }}
          >
            {[
              {
                title: '📚 타로 교육',
                desc: '체계적인 타로 이론 및 실습 교육'
              },
              {
                title: '🤝 커뮤니티',
                desc: '학생 동아리 및 네트워크 지원'
              },
              {
                title: '💡 심리 상담',
                desc: '전문 상담사와의 협업 기회'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  border: '1px solid rgba(14,14,14,0.1)',
                  borderRadius: '2px',
                  background: '#FFFFFF',
                  transition: 'background 0.3s, transform 0.3s',
                  cursor: 'pointer',
                  marginTop: '0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F5F5F5';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#0E0E0E',
                    marginBottom: '12px'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(14,14,14,.6)',
                    lineHeight: 1.6
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Cases Section */}
      <section style={{ padding: '88px 40px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontSize: '9.5px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '16px'
            }}
          >
            Collaboration Cases
          </div>

          {/* Section Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '56px',
              color: '#0E0E0E'
            }}
          >
            협업 사례
          </h2>

          {/* Gallery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  paddingBottom: '100%',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  background: '#F5F5F5'
                }}
                onClick={() => setSelectedImageIdx(idx)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageIdx !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setSelectedImageIdx(null)}
        >
          <button
            onClick={() => setSelectedImageIdx(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '24px'
            }}
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            style={{
              position: 'absolute',
              left: '20px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '12px',
              borderRadius: '2px'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={galleryImages[selectedImageIdx].src}
            alt="Modal"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain'
            }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            style={{
              position: 'absolute',
              right: '20px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '12px',
              borderRadius: '2px'
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section
        ref={ctaSectionRef}
        style={{
          width: '100%',
          background: '#0E0E0E',
          padding: '80px 40px',
          textAlign: 'center'
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
            협업 <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>제안하기</em>
          </h2>
          <p
            style={{
              fontSize: '13.5px',
              color: 'rgba(255,255,255,.4)',
              marginBottom: '36px',
              lineHeight: 1.8
            }}
          >
            함께할 관련 학과 및 동아리를 모집합니다.
          </p>
          <a
            href="https://forms.gle/RamLCbA7SbhehbUw8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#C8A97A',
              color: '#0E0E0E',
              border: 'none',
              padding: '15px 40px',
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
            협업 제안하기
          </a>
        </div>
      </section>

      {/* Sticky CTA Button */}
      {showCTA && (
        <a
          href="https://forms.gle/RamLCbA7SbhehbUw8"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: '#C8A97A',
            color: '#FFFFFF',
            padding: '12px 24px',
            borderRadius: '9999px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 40,
            transition: 'all 0.3s',
            cursor: 'pointer',
            fontSize: '14px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#9A7850';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#C8A97A';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
        >
          협업 제안하기
        </a>
      )}

      <Footer />
    </div>
  );
}
