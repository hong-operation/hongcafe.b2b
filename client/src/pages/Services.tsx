import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const milestones = [
    { year: "2022.01", title: "고용노동부 청년 친화 강소기업 3년 연속 선정" },
    { year: "2020.01", title: "고용노동부 청년 친화 강소기업 선정" },
    { year: "2019.12", title: "DSC인베스트먼트로부터 투자 유치" },
    { year: "2018.11", title: "ETRI로부터 딥러닝 기반의 서버형 음성인식 기술 이전" },
    { year: "2018.11", title: "서울지방중소벤처기업청장상 수상" },
    { year: "2018.09", title: "이노비즈(기술혁신형 중소기업) 인증" },
    { year: "2017.10", title: "중소벤처기업부 창업성장기술개발사업 선정" },
    { year: "2016.07", title: "벤처기업 확인" },
    { year: "2016.04", title: "기업부설연구소 설립" },
    { year: "2014.11", title: "(주)피플벤처스 설립" },
  ];

  const coreValues = [
    { 
      num: '01',
      title: "신뢰", 
      description: "검증된 시스템과 상담사 관리로 믿을 수 있는\n서비스를 제공합니다."
    },
    { 
      num: '02',
      title: "윤리", 
      description: "책임감 있는 기준으로 상담 환경을 운영합니다."
    },
    { 
      num: '03',
      title: "사용자 중심", 
      description: "사용자의 경험과 만족을 최우선으로\n서비스를 설계합니다."
    },
  ];

  const globalExpansion = [
    { region: "일본(홍카페 재팬)", desc: "현지 법인 설립 및 로컬 서비스 정착에 이어 한인 대상 서비스까지 확장" },
    { region: "북미 지역", desc: "미국, 캐나다 진출을 통한 글로벌 상담·파트너십 네트워크 확대" },
    { region: "오세아니아 지역", desc: "호주, 뉴질랜드 상담 서비스 오픈으로 글로벌 이용자 접근성 강화" },
    { region: "동남아시아 지역", desc: "베트남 서비스 오픈을 통해 신규 시장 진입 및 아시아권 확장 본격화" },
    { region: "향후 계획", desc: "유럽 및 추가 동남아 시장 진출 검토, 다문화 상담·파트너십 모델 구축" },
  ];

  return (
    <div className="site-page" style={{ minHeight: '100vh', background: '#FFFFFF' }}>
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
            About People Ventures
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
            사람의 가능성에<br />
            <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>투자</em>하는<br />
            <strong style={{ fontWeight: 700 }}>피플벤처스</strong>
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
            {'2014년 설립된 피플벤처스는 음성 콘텐츠를 통해 사람과 사람을 연결하는\n1:1 통화 기반 플랫폼을 운영합니다.'.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < '2014년 설립된 피플벤처스는 음성 콘텐츠를 통해 사람과 사람을 연결하는\n1:1 통화 기반 플랫폼을 운영합니다.'.split('\n').length - 1 && <br />}
              </span>
            ))}
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
            신뢰와 윤리를 핵심 가치로 다양한 음성통화 서비스를 통해 보다 깊이 있는 연결 경험을 제공하며 개인과 기업, 사회의 성장을 함께 만들어갑니다.
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a
              href="https://harvest-innovation-b6f.notion.site/27af1fd9a3ef808480e2eeb07da1691e"
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
              더 알아보기
            </a>
            <a
              href="https://www.hongcafe.com/"
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
              홍카페 방문
            </a>
          </div>
        </div>

        {/* Right Column - Mission & Vision */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1px',
            background: 'rgba(200,169,122,0.18)',
            border: '1px solid rgba(200,169,122,0.18)'
          }}
        >
          {[
            { label: 'MISSION', text: '문제 해결이 중요한 사람과 이에 대한 지원이 가능한 사람을 연결하고,\n자리이타의 정신으로 개인과 기업, 사회가 함께 성장할 수 있는\n가치를 제공합니다.' },
            { label: 'VISION', text: '사람이 가지고 있는 가능성과 경험에 투자하며 고객과 사회의 이익까지 저변을 넓혀가며 함께 공생하며 성장하는 것에 중점을 두고 있습니다.' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#C8A97A',
                  marginBottom: '12px',
                  fontWeight: 600
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.85 }}>
                {item.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
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
            Core Values
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
            피플벤처스의 <strong style={{ fontWeight: 700 }}>핵심 가치</strong>
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
            신뢰, 윤리, 사용자 중심의 가치를 바탕으로 서비스를 운영합니다.
          </p>

          {/* Values Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(200,169,122,0.18)',
              border: '1px solid rgba(200,169,122,0.18)'
            }}
          >
            {coreValues.map((value) => (
              <div
                key={value.num}
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
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    marginBottom: '10px',
                    color: '#0E0E0E'
                  }}
                >
                  {value.title}
                </div>
                <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.8 }}>
                  {value.description.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < value.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Expansion Section */}
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
            Global Expansion
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
            글로벌 <strong style={{ fontWeight: 700 }}>확장</strong>
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
            피플벤처스는 아시아, 북미, 오세아니아 등 다양한 지역으로 확장하고 있습니다.
          </p>

          {/* Expansion Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1px',
              background: 'rgba(200,169,122,0.18)',
              border: '1px solid rgba(200,169,122,0.18)'
            }}
          >
            {globalExpansion.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  padding: '36px 32px',
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
                    fontSize: '15px',
                    fontWeight: 600,
                    marginBottom: '10px',
                    color: '#0E0E0E'
                  }}
                >
                  {item.region}
                </div>
                <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.8 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Section */}
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
            Company History
            <div style={{ flex: 1, height: '1px', background: 'rgba(200,169,122,0.18)' }} />
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
            피플벤처스 <strong style={{ fontWeight: 700 }}>연혁</strong>
          </h2>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr auto 1fr' : '1fr auto 1fr',
                  alignItems: 'center',
                  gap: '24px',
                  marginBottom: '48px',
                  position: 'relative'
                }}
              >
                {idx % 2 === 0 ? (
                  <>
                    {/* Left Content */}
                    <div
                      style={{
                        background: '#FFFFFF',
                        padding: '24px 28px',
                        borderRadius: '2px',
                        textAlign: 'right',
                        border: '1px solid rgba(200,169,122,0.18)',
                        transition: 'all 0.25s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#F9F3E8';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#C8A97A', marginBottom: '6px' }}>
                        {milestone.year}
                      </div>
                      <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>
                        {milestone.title}
                      </div>
                    </div>
                    {/* Center Dot */}
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        background: '#C8A97A',
                        borderRadius: '50%',
                        border: '3px solid #FFFFFF',
                        boxShadow: '0 0 0 1px rgba(200,169,122,0.18)',
                        zIndex: 10,
                        flexShrink: 0
                      }}
                    />
                    {/* Right Empty */}
                    <div />
                  </>
                ) : (
                  <>
                    {/* Left Empty */}
                    <div />
                    {/* Center Dot */}
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        background: '#C8A97A',
                        borderRadius: '50%',
                        border: '3px solid #FFFFFF',
                        boxShadow: '0 0 0 1px rgba(200,169,122,0.18)',
                        zIndex: 10,
                        flexShrink: 0
                      }}
                    />
                    {/* Right Content */}
                    <div
                      style={{
                        background: '#FFFFFF',
                        padding: '24px 28px',
                        borderRadius: '2px',
                        textAlign: 'left',
                        border: '1px solid rgba(200,169,122,0.18)',
                        transition: 'all 0.25s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#F9F3E8';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#C8A97A', marginBottom: '6px' }}>
                        {milestone.year}
                      </div>
                      <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>
                        {milestone.title}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
