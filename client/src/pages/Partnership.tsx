import React, { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Partnership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCTA, setShowCTA] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
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

  const cases = [
    {
      name: "OO 샐러드 오목교점",
      desc: "테이블 POP, QR 부착 사례",
      images: [
        "https://www.notion.so/image/attachment%3Aa65acdcc-e8de-418c-9899-5572f75a2321%3AOO%EC%83%90%EB%9F%AC%EB%93%9C_%EC%98%A4%EB%AA%A9%EA%B5%90.jpg?table=block&id=34c53279-2277-80fe-9659-f280d73d7fe0&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
        "https://www.notion.so/image/attachment%3A0cf66568-366b-4eba-aa5f-0b0d874d2559%3AOO%EC%83%90%EB%9F%AC%EB%93%9C_%EC%98%A4%EB%AA%A9%EA%B5%902.jpg?table=block&id=34c53279-2277-80c5-8626-d1e360d6cf63&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
      ],
    },
    {
      name: "OO 만화카페 화곡역점",
      desc: "홍보 포스터, 테이블 POP 설치 사례",
      images: [
        "https://www.notion.so/image/attachment%3A1dadd4fa-755a-4c9d-ac62-a1341bcf9909%3AOO%EB%A7%8C%ED%99%94%EC%B9%B4%ED%8E%98_%ED%99%94%EA%B3%A1%EC%97%AD%EC%A0%902.jpg?table=block&id=34c53279-2277-80eb-b6bc-e7749396d512&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
        "https://www.notion.so/image/attachment%3A9d0c651e-3fcb-4def-97dd-5894eeb86fe0%3AOO%EB%A7%8C%ED%99%94%EC%B9%B4%ED%8E%98_%ED%99%94%EA%B3%A1%EC%97%AD%EC%A0%90.jpg?table=block&id=34b53279-2277-801f-a8cd-c99fe06d5ba0&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
      ],
    },
    {
      name: "OO 디저트 카페 홍대점",
      desc: "매장 테이블, 벽면 QR 부착 사례",
      images: [
        "https://www.notion.so/image/attachment%3Aa4cf9c20-13e6-4e16-99c9-d4cc4ab12ed4%3AOO%EB%94%94%EC%A0%80%ED%8A%B8%EC%B9%B4%ED%8E%98_%ED%99%8D%EB%8C%80%EC%A0%902.jpg?table=block&id=34c53279-2277-8034-b2e4-dac857512ee2&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
        "https://www.notion.so/image/attachment%3A56ee7f84-4c66-46a1-b9a9-375632f92407%3AOO%EB%94%94%EC%A0%80%ED%8A%B8%EC%B9%B4%ED%8E%98_%ED%99%8D%EB%8C%80%EC%A0%90.jpg?table=block&id=34c53279-2277-8037-9a3c-f022bb3f2d0d&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
      ],
    },
    {
      name: "OO 반려동물 유치원",
      desc: "테이블 명함형 쿠폰, 벽면 QR 부착 사례",
      images: [
        "https://www.notion.so/image/attachment%3Ac7fdc178-bcf5-4ac7-a0f6-382c223da3e3%3AOO%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%EC%9C%A0%EC%B9%98%EC%9B%904.jpg?table=block&id=34c53279-2277-8056-9d55-c41c84e3ffdd&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
        "https://www.notion.so/image/attachment%3A5cc05120-88be-42dc-a780-886cbee96e6e%3AOO%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%EC%9C%A0%EC%B9%98%EC%9B%90.jpg?table=block&id=34c53279-2277-8003-a1e7-ff0ed37b7678&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
        "https://www.notion.so/image/attachment%3A0570a229-8518-4de9-9b38-137ca0677404%3AOO%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%EC%9C%A0%EC%B9%98%EC%9B%902.jpg?table=block&id=34c53279-2277-80ff-98af-c6c079e8a483&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
        "https://www.notion.so/image/attachment%3A2c911978-366b-4df4-90f9-7e4f32ad02a0%3AOO%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%EC%9C%A0%EC%B9%98%EC%9B%903.jpg?table=block&id=34b53279-2277-80f3-9d5e-fbbdd61d540a&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
      ],
    },
    {
      name: "OO 카페",
      desc: "포스터, 벽면 QR 부착 사례",
      images: [
        "https://www.notion.so/image/attachment%3A9cd6866b-ee06-466d-a247-b29f7243b7a0%3Aoo%EC%B9%B4%ED%8E%98.jpg?table=block&id=34c53279-2277-807e-8484-e2176019fb8f&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
        "https://www.notion.so/image/attachment%3A774223a5-7ad7-4c7e-a4ea-08609fa02737%3Aoo%EC%B9%B4%ED%8E%982.jpg?table=block&id=34c53279-2277-8068-a654-f517f84d2307&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
      ],
    },
    {
      name: "OO 샐러드 공식 홈페이지",
      desc: "홍카페 제휴 기념 이벤트 진행",
      images: [
        "https://www.notion.so/image/attachment%3A4344b6c0-3a46-47a7-bd59-4382d765c196%3Aoo%EC%83%90%EB%9F%AC%EB%93%9C%EA%B3%B5%EC%8B%9D%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.jpg?table=block&id=34c53279-2277-8067-abbb-e2b9f64b4fef&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
      ],
    },
    {
      name: "OO 온라인 반려동물 카페",
      desc: "메인 페이지 배너 등록",
      images: [
        "https://www.notion.so/image/attachment%3Afa5a10fb-7556-4787-8082-46ce30c96d1f%3Aoo%EC%98%A8%EB%9D%BC%EC%9D%B8%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%EC%B9%B4%ED%8E%98.jpg?table=block&id=34c53279-2277-80cb-9bb3-c5c22353e4b5&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
      ],
    },
    {
      name: "OO 온라인 카페",
      desc: "SNS 게시물 게시, 메인 페이지 배너 등록",
      images: [
        "https://www.notion.so/image/attachment%3A3f03419b-d8d2-426d-a788-a8b5832e28a6%3Aoo%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%B9%B4%ED%8E%98.jpg?table=block&id=34c53279-2277-804d-9401-ce837955990e&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
        "https://www.notion.so/image/attachment%3Ab40c14f2-c6ce-40a7-a4d8-4362e8d4cdce%3Aoo%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%B9%B4%ED%8E%982.jpg?table=block&id=34c53279-2277-80fe-97d6-f197d098d73b&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2",
      ],
    },
  ];

  const handlePrevImage = () => {
    if (selectedCase !== null) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? cases[selectedCase].images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedCase !== null) {
      setCurrentImageIndex((prev) =>
        prev === cases[selectedCase].images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="site-page" style={{ minHeight: '100vh', background: '#FFFFFF' }}>
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
            Program 01 · Partnership
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
            파트너십은<br />
            단순한 제휴가<br />
            <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>아닙니다</em>
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
            홍카페는 파트너와 함께 새로운 연결을 설계하고,<br />
            고객과 시장을 이어주는 다리가 됩니다.<br />
            파트너와 고객 모두에게 지속 가능한 가치와 경험을 제공합니다.
          </p>

          {/* Message Box */}
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
            브랜드와 브랜드가 함께 성장하는 순환 구조 — 홍카페와 함께라면 새로운 시장, 새로운 관계, 그리고 새로운 기회를 경험할 수 있습니다.
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a
              href="https://forms.gle/Vr7vrAzJUustKnCS9"
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
              파트너십 신청하기
            </a>
            <a
              href="#how"
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
              운영 방식 보기
            </a>
          </div>
        </div>

        {/* Right Column - Overview Card */}
        <div style={{ background: '#0E0E0E', padding: '36px 32px' }}>
          <div
            style={{
              fontSize: '9.5px',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '24px'
            }}
          >
            Program Overview
          </div>
          {[
            { key: '제휴 방식', val: '링크 / QR코드 제공' },
            { key: '리워드', val: '상담 발생 시 수수료' },
            { key: '최대 보상', val: '신규 1인당 최대 100만원' },
            { key: '정산일', val: '매월 20일' },
            { key: '시작 비용', val: '없음 (무료)' },
            { key: '지원', val: '전담 파트너 매니저' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '14px 0',
                borderBottom: idx !== 5 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                gap: '16px'
              }}
            >
              <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,.4)', minWidth: '80px' }}>
                {item.key}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', fontWeight: 500, textAlign: 'right' }}>
                {item.val}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Structure Section */}
      <section style={{ padding: '88px 40px' }} id="how">
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
            Partnership Structure
            <div style={{ flex: 1, height: '1px', background: 'rgba(200,169,122,0.18)' }} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: '14px',
              color: '#0E0E0E'
            }}
          >
            파트너십 <strong style={{ fontWeight: 700 }}>구조</strong>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '14px',
              color: '#888',
              lineHeight: 1.85,
              maxWidth: '520px',
              marginBottom: '56px'
            }}
          >
            추천인(MP) → 신규 가입 → 코인 결제 → 정산 지급의 단순하고 명확한 구조입니다.
          </p>



          {/* Flow Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              background: 'rgba(200,169,122,0.18)',
              border: '1px solid rgba(200,169,122,0.18)'
            }}
          >
            {[
              { num: '01', icon: '🔗', name: '초대 링크 전달', desc: '파트너(MP)가 전용 초대 링크 및 QR코드를\n고객에게 전달합니다.' },
              { num: '02', icon: '👤', name: '신규 가입', desc: '고객이 링크를 통해 홍카페 신규 가입합니다.' },
              { num: '03', icon: '💳', name: '코인 결제/사용', desc: '고객이 코인 충전 후, 상담을 이용합니다.' },
              { num: '04', icon: '💰', name: '정산 지급', desc: '사용 금액의 5% 기준으로 매월 정산됩니다.' }
            ].map((step) => (
              <div key={step.num} style={{ background: '#FFFFFF', padding: '32px 24px' }}>
                <div
                  style={{
                    fontSize: '9.5px',
                    letterSpacing: '2px',
                    color: '#C8A97A',
                    marginBottom: '16px'
                  }}
                >
                  STEP {step.num}
                </div>
                <div style={{ fontSize: '24px', marginBottom: '14px' }}>{step.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px', color: '#0E0E0E' }}>
                  {step.name}
                </div>
                <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.75 }}>
                  {step.desc.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < step.desc.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward Section */}
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
            Reward System
            <div style={{ flex: 1, height: '1px', background: 'rgba(200,169,122,0.18)' }} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: '14px',
              color: '#0E0E0E'
            }}
          >
            보상 <strong style={{ fontWeight: 700 }}>체계</strong>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '14px',
              color: '#888',
              lineHeight: 1.85,
              maxWidth: '520px',
              marginBottom: '56px'
            }}
          >
            안정적이고 투명한 수익 구조를 제공합니다.
          </p>

          {/* Reward Table */}
          <div
            style={{
              width: '100%',
              overflowX: 'auto',
              marginBottom: '32px',
              border: '1px solid rgba(200,169,122,0.18)'
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '13px',
                color: '#0E0E0E'
              }}
            >
              <thead>
                <tr style={{ background: '#F9F3E8', borderBottom: '2px solid rgba(200,169,122,0.18)' }}>
                  <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: 600, color: '#0E0E0E' }}>등급</th>
                  <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: 600, color: '#0E0E0E' }}>직접 보상</th>
                  <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: 600, color: '#0E0E0E' }}>하위 파트너 추가 보상</th>
                  <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: 600, color: '#0E0E0E' }}>총 수익율</th>
                  <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: 600, color: '#0E0E0E' }}>최대 수익</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(200,169,122,0.18)' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 600, background: '#FFFFFF' }}>GMP</td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', lineHeight: 1.6 }}>
                    직접 초대한 회원 적립 시: 5%<br />
                    <span style={{ fontSize: '12px', color: '#888' }}>(1인당 최대 100만원)</span>
                  </td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', lineHeight: 1.6 }}>
                    본인이 등록한 MMP의 고객 결제 금액 → 0.5%
                  </td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', fontWeight: 600, color: '#C8A97A' }}>최대 6.5%</td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', fontWeight: 600 }}>130만원</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(200,169,122,0.18)' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 600, background: '#FFFFFF' }}>MMP</td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', lineHeight: 1.6 }}>
                    직접 초대한 회원 적립 시: 5%<br />
                    <span style={{ fontSize: '12px', color: '#888' }}>(1인당 최대 100만원)</span>
                  </td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', lineHeight: 1.6 }}>
                    본인이 등록한 MP의 고객 결제 금액 → 1%
                  </td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', fontWeight: 600, color: '#C8A97A' }}>최대 6%</td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', fontWeight: 600 }}>120만원</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 12px', fontWeight: 600, background: '#FFFFFF' }}>MP</td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', lineHeight: 1.6 }}>
                    직접 초대한 회원 적립 시: 5%<br />
                    <span style={{ fontSize: '12px', color: '#888' }}>(1인당 최대 100만원)</span>
                  </td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF' }}>없음</td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', fontWeight: 600, color: '#C8A97A' }}>5%</td>
                  <td style={{ padding: '16px 12px', background: '#FFFFFF', fontWeight: 600 }}>100만원</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Reward Highlights Grid */}
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
              { icon: '🔒', title: '안정성', desc: '자동 정산 시스템 기반, 매월 보상 지급' },
              { icon: '📈', title: '높은 수익성', desc: '신규 회원 1명당 최대 100만원 보상' },
              { icon: '🌐', title: '확장성', desc: '추천 회원이 늘어날수록 파트너 수익 극대화' }
            ].map((item) => (
              <div key={item.title} style={{ background: '#FFFFFF', padding: '28px 24px' }}>
                <div style={{ fontSize: '22px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontSize: '13.5px', fontWeight: 500, marginBottom: '6px', color: '#0E0E0E' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
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
            Partnership Cases
            <div style={{ flex: 1, height: '1px', background: 'rgba(200,169,122,0.18)' }} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: '14px',
              color: '#0E0E0E'
            }}
          >
            파트너십 <strong style={{ fontWeight: 700 }}>사례</strong>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '14px',
              color: '#888',
              lineHeight: 1.85,
              maxWidth: '520px',
              marginBottom: '56px'
            }}
          >
            다양한 업종에서 홍카페 파트너십을 활용하고 있습니다.
          </p>

          {/* Cases Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px'
            }}
          >
            {cases.map((caseItem, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCase(idx);
                  setCurrentImageIndex(0);
                }}
                style={{
                  border: '1px solid rgba(200,169,122,0.18)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  textAlign: 'left',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#FFFFFF',
                  cursor: 'pointer',
                  padding: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C8A97A';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,169,122,0.18)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '75%',
                    overflow: 'hidden',
                    background: '#f0f0f0'
                  }}
                >
                  <img
                    src={caseItem.images[0]}
                    alt={caseItem.name}
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

                {/* Text */}
                <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#0E0E0E' }}>
                    {caseItem.name}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#888' }}>
                    {caseItem.desc}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '88px 40px', background: '#F5F4F1' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          {/* Title */}
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: '56px',
              color: '#0E0E0E',
              textAlign: 'center'
            }}
          >
            자주 묻는 질문
          </h2>

          {/* FAQ List */}
          <div style={{ maxWidth: '100%', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
                background: 'rgba(200,169,122,0.18)',
                border: '1px solid rgba(200,169,122,0.18)'
              }}
            >
              {[
                {
                  q: "홍카페 파트너십 프로그램이 무엇인가요?",
                  a: "홍카페 파트너십 프로그램은 고객을 소개하고 관리하는 마케팅 파트너를 위한 제도입니다. 파트너로 가입하면 신규 고객을 홍카페에 추천하고,\n해당 고객의 서비스 이용에 따라 정해진 수익을 얻을 수 있습니다.",
                },
                {
                  q: "보상 구조와 계산 방식은 어떻게 되나요?",
                  a: "홍카페 파트너십의 보상 구조는 고객의 이용 금액에 대한 지급 형태입니다. 각 파트너가 고객으로부터 얻을 수 있는 누적 최대 수익은 등급에 따라 달라집니다.\n파트너십 활동에 누적 최대 수익은 제한이 없습니다.",
                },
                {
                  q: "파트너 수익은 언제, 어떻게 지급되나요?",
                  a: "파트너가 활동을 통해 얻은 수익은 매월 정기 정산됩니다. 일반적으로 월말에 마감하여 그달 발생한 수익금을 합산한 후, 익월 일정일(20일)에 등록된 파트너의 계좌로 지급합니다.\n정산 시에는 세법에 따라 소득세 및 원천세가 공제됩니다.",
                },
                {
                  q: "파트너 활동에서 지켜야 할 규칙이 있나요?",
                  a: "홍카페 파트너는 윤리적인 마케팅 활동을 준수해야 합니다. 허위 과장 광고나 스팸 행위는 금지되며, 고객에게 정확한 정보와 정직한 권유를 하는 것이 원칙입니다.\n회사 정책에 어긋나는 홍보를 할 경우 경고나 자격 박탈이 있을 수 있습니다.",
                },
                {
                  q: "소개받은 고객이 결제를 하지 않으면 수익금도 없나요?",
                  a: "수익금은 고객이 유료 상담을 이용하거나 코인을 충전하는 등 실제 결제가 발생한 경우에만 적립됩니다. 무료 가입만 한 경우나 이벤트로 지급된 코인을 사용하는 등\n실제 매출이 없는 경우에는 수익금이 발생하지 않습니다.",
                },
                {
                  q: "파트너 활동 중 궁금한 사항이나 지원이 필요하면 어디에 문의하면 되나요?",
                  a: "전담 파트너 지원팀과 고객센터를 통해 도움을 받을 수 있습니다. 홍카페 파트너 전용 채널이 운영되고 있으며, 여기에서 공지 사항 확인이나 질의응답이 가능합니다.\n또한 전화나 이메일로 문의하면 신속히 안내를 받을 수 있습니다.",
                },
                {
                  q: "'고객 졸업'이란 무엇이며 기준은 무엇인가요?",
                  a: "고객 졸업이란 파트너가 소개한 고객으로부터 받을 수 있는 최대 수익금 한도에 도달한 상태를 의미합니다. 다시 말해, 해당 고객의 누적 이용으로 인한 파트너 수익이\n등급별 상한(고객이 누적 2,000만원을 사용)에 이르면 그 순간 고객은 \"졸업\" 처리가 됩니다. 졸업한 고객은 이후로는 해당 파트너에게 더 이상의 수익을 제공하지 않게 됩니다.",
                },
                {
                  q: "한 번 졸업한 고객에게서 다시 수익을 받을 방법은 없나요?",
                  a: "졸업한 고객으로부터는 해당 파트너에게 더 이상의 직접 수익금은 발생하지 않습니다. 졸업 개념 자체가 한 고객당 지급되는 최대 보상 완료를 의미하기 때문입니다.\n다만, 그 고객이 파트너로 전환되어 본인의 하위 파트너로 참여하게 된다면 다른 형태로 협업이 될 수는 있습니다. 또한 졸업한 고객도 지인 소개 등을 통해 간접적으로\n새로운 고객 유치에 도움을 줄 수 있으므로, 관계를 잘 유지하는 것이 좋습니다.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderBottom: idx !== 7 ? '1px solid rgba(200,169,122,0.18)' : 'none'
                  }}
                >
                  <div
                    onClick={() => {
                      setOpenFaqIndex(openFaqIndex === idx ? null : idx);
                    }}
                    style={{
                      cursor: 'pointer',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'background 0.2s',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: '#0E0E0E',
                      userSelect: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F9F3E8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: '#C8A97A', transition: 'transform 0.3s', flexShrink: 0, marginLeft: '16px' }}>
                      {openFaqIndex === idx ? '−' : '+'}
                    </span>
                  </div>
                  {openFaqIndex === idx && (
                    <div style={{ padding: '0 24px 20px 24px', fontSize: '13px', color: '#888', lineHeight: 1.85 }}>
                      {faq.a.split('\n').map((line, lineIdx) => (
                        <React.Fragment key={lineIdx}>
                          {line}
                          {lineIdx < faq.a.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            파트너십 <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>신청하기</em>
          </h2>
          <p
            style={{
              fontSize: '13.5px',
              color: 'rgba(255,255,255,.4)',
              marginBottom: '36px',
              lineHeight: 1.8
            }}
          >
            지금 바로 홍카페 파트너가 되어 새로운 수익 기회를 만들어보세요
          </p>
          <a
            href="https://forms.gle/Vr7vrAzJUustKnCS9"
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
            신청하기
          </a>
        </div>
      </section>

      {/* Sticky CTA Button */}
      {showCTA && (
        <a
          href="https://forms.gle/Vr7vrAzJUustKnCS9"
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
          신청하기
        </a>
      )}

      {/* Modal for Partnership Cases */}
      {selectedCase !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setSelectedCase(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '8px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                position: 'sticky',
                top: 0,
                background: '#FFFFFF',
                borderBottom: '1px solid rgba(200,169,122,0.18)',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0E0E0E' }}>
                {cases[selectedCase].name}
              </h3>
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#888',
                  fontSize: '24px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0E0E0E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#888';
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  background: '#f0f0f0',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  height: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '0',
                  cursor: 'pointer'
                }}
                onClick={() =>
                  window.open(cases[selectedCase].images[currentImageIndex], '_blank', 'noopener,noreferrer')
                }
              >
                <img
                  src={cases[selectedCase].images[currentImageIndex]}
                  alt={`${cases[selectedCase].name} 이미지 ${currentImageIndex + 1}`}
                  style={{
                    width: 'auto',
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

              {/* Navigation */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <button
                  onClick={handlePrevImage}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px',
                    cursor: 'pointer',
                    color: '#0E0E0E',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f0f0f0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                  }}
                >
                  <ChevronLeft size={24} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#888' }}>
                    {currentImageIndex + 1} / {cases[selectedCase].images.length}
                  </span>
                  <button
                    onClick={() =>
                      window.open(cases[selectedCase].images[currentImageIndex], '_blank', 'noopener,noreferrer')
                    }
                    style={{
                      fontSize: '12px',
                      padding: '6px 12px',
                      background: '#C8A97A',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '2px',
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
                    원본 보기
                  </button>
                </div>

                <button
                  onClick={handleNextImage}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px',
                    cursor: 'pointer',
                    color: '#0E0E0E',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f0f0f0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
