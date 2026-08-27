import React, { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Recruit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          gridTemplateColumns: '1.15fr 1fr',
          gap: '64px',
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
            Program 03 · Consultant Recruit
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(28px, 3.8vw, 50px)',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '20px',
              color: '#0E0E0E'
            }}
          >
            전문성에 맞는<br />
            높은 수익과 함께<br />
            <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>체계적인 지원</em>을<br />
            받으세요
          </h1>

          {/* Lead */}
          <p
            style={{
              fontSize: '14px',
              color: '#888',
              lineHeight: 1.9,
              marginBottom: '28px'
            }}
          >
            홍카페에서는 타로 · 사주 · 신점 각 분야 전문가 상담사를 모집하고 있습니다.<br />
            회원 수가 많은 운세 플랫폼으로 상담 기회가 안정적인 편이며,<br />
            다양한 운영 지원을 제공하고 있습니다.
          </p>

          {/* Free Notice */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12.5px',
              color: '#C8A97A',
              background: '#F9F3E8',
              border: '1px solid rgba(200,169,122,0.3)',
              borderRadius: '2px',
              padding: '10px 16px',
              marginBottom: '28px'
            }}
          >
            ✓ 신청, 심사, 등록까지 일체 비용이 발생하지 않습니다
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a
              href="https://www.hongcafe.com/board/recruit"
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
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#9A7850';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C8A97A';
              }}
            >
              상담사 지원하기
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            background: '#0E0E0E',
            padding: '40px 32px',
            borderRadius: '2px'
          }}
        >
          <h3
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '28px'
            }}
          >
            상담사 등급 체계
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px' }}>GREEN</div>
              <div style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>그린</div>
              <div style={{ fontSize: '12px', color: '#C8A97A' }}>시작가 500코인</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px' }}>PURPLE</div>
              <div style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>퍼플</div>
              <div style={{ fontSize: '12px', color: '#C8A97A' }}>시작가 1,000코인</div>
            </div>
          </div>

          <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
            각 등급은 0~6단계로 운영됩니다. 0단계는 기본 등급이며,<br />
            1단계부터는 파트너 계약 및 활동 조건을 충족하면 승급할 수 있습니다.<br />
            단계가 높아질수록 상담 단가와 지원 혜택이 확대됩니다.
          </p>
        </div>
      </section>

      {/* Recruitment Field Section */}
      <section
        style={{
          width: '100%',
          background: '#F9F3E8',
          padding: '80px 40px',
          marginTop: '80px'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '16px'
            }}
          >
            Recruitment Field
          </div>

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
            모집 <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>분야</em>
          </h2>

          <p
            style={{
              fontSize: '13.5px',
              color: '#888',
              marginBottom: '48px',
              lineHeight: 1.8
            }}
          >
            타로, 사주, 신점 각 분야의 전문 상담사를 모집합니다.
          </p>

          {/* Service Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}
          >
            {[
              { icon: '🃏', name: '타로', desc: '연애, 진로, 인간관계 등 다양한 분야의 상담이 가능한\n타로 상담사를 모집합니다.' },
              { icon: '🌙', name: '사주', desc: '사주명리학을 기반으로 운세와 인생 전반에 대한\n상담이 가능한 상담사를 모집합니다.' },
              { icon: '🔮', name: '신점', desc: '신점을 바탕으로 현재의 흐름과 고민에 대한\n상담이 가능한 상담사를 모집합니다.' }
            ].map((service) => (
              <div
                key={service.name}
                style={{
                  background: '#FFFFFF',
                  padding: '40px 32px',
                  textAlign: 'center',
                  borderRadius: '2px',
                  transition: 'background 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E8DCC8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0E0E0E', marginBottom: '12px' }}>
                  {service.name}
                </h3>
                <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
                  {service.desc.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < service.desc.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        style={{
          width: '100%',
          background: '#FFFFFF',
          padding: '80px 40px'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '16px'
            }}
          >
            Benefits
          </div>

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
            상담사 활동 <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>혜택</em>
          </h2>

          {/* Benefits Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px'
            }}
          >
            {[
              { icon: '👤', name: '전문 매니저 1:1 관리', desc: '전문 매니저가 개별 배정되어 운영 지원 및 상담 성장을 밀착 지원합니다.' },
              { icon: '📣', name: '마케팅 지원 및 노출 확대', desc: '마케팅 지원과 플랫폼 내 노출 확대 지원으로 더 많은 고객에게 다가갑니다.' },
              { icon: '✅', name: '진짜 사진 인증 상담사 제도', desc: '진짜 사진 인증 상담사 제도를 운영하여 고객 신뢰를 높입니다.' },
              { icon: '⬆️', name: '파트너 상담사 승급 혜택', desc: '파트너 상담사로 승급 시 추가 혜택 및 개별 지원이 제공됩니다.' }
            ].map((benefit) => (
              <div
                key={benefit.name}
                style={{
                  padding: '32px',
                  background: '#F9F3E8',
                  borderRadius: '2px',
                  transition: 'background 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E8DCC8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F9F3E8';
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#0E0E0E', marginBottom: '12px' }}>
                  {benefit.name}
                </h3>
                <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Income Section */}
      <section
        style={{
          width: '100%',
          background: '#F9F3E8',
          padding: '80px 40px'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <h3
            style={{
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              fontWeight: 600,
              color: '#0E0E0E',
              marginBottom: '32px'
            }}
          >
            추가 수익 창출
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}
          >
            {[
              { icon: '📝', name: '작명 서비스', desc: '작명, 부적, 맞춤 작업물 등 상품을 등록하고\n판매할 수 있습니다.' },
              { icon: '🎓', name: '클래스 운영', desc: '타로·사주 교육 클래스를 개설하고 운영할 수 있습니다.' },
              { icon: '🤝', name: '대면 상담', desc: '오프라인 대면 상담 상품 등록이 가능합니다.' }
            ].map((income) => (
              <div
                key={income.name}
                style={{
                  background: '#FFFFFF',
                  padding: '32px',
                  textAlign: 'center',
                  borderRadius: '2px',
                  transition: 'background 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E8DCC8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{income.icon}</div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#0E0E0E', marginBottom: '12px' }}>
                  {income.name}
                </h4>
                <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
                  {income.desc.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < income.desc.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade System Section */}
      <section
        style={{
          width: '100%',
          background: '#FFFFFF',
          padding: '80px 40px'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '16px'
            }}
          >
            Grade System
          </div>

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
            상담사 단계 <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>시스템</em>
          </h2>

          <p
            style={{
              fontSize: '13.5px',
              color: '#888',
              marginBottom: '40px',
              lineHeight: 1.8
            }}
          >
            그린 / 퍼플 두 가지 체계로 운영되며 각각 0~6단계까지 있습니다.
          </p>

          {/* Grade Table */}
          <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '13px'
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid #C8A97A' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#0E0E0E' }}>등급</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#0E0E0E' }}>시작가</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#0E0E0E' }}>특징</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { grade: '그린0단계', price: '500코인', feature: '상담사 시작 단계' },
                  { grade: '퍼플0단계', price: '1,000코인', feature: '상담사 시작 단계' },
                  { grade: '그린1~6단계', price: '500~1,200코인', feature: '활동 실적에 따른 단계 상승 및 단가 설정과 추가 혜택 제공' },
                  { grade: '퍼플1~6단계', price: '1,000~3,000코인', feature: '활동 실적에 따른 단계 상승 및 단가 설정과 추가 혜택 제공' }
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid #E8DCC8',
                      background: idx % 2 === 0 ? '#FFFFFF' : '#F9F3E8'
                    }}
                  >
                    <td style={{ padding: '16px', color: '#0E0E0E' }}>{row.grade}</td>
                    <td style={{ padding: '16px', color: '#0E0E0E' }}>{row.price}</td>
                    <td style={{ padding: '16px', color: '#888' }}>{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payment Info Section */}
      <section
        style={{
          width: '100%',
          background: '#F9F3E8',
          padding: '80px 40px'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '16px'
            }}
          >
            Payment Info
          </div>

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
            정산 <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>안내</em>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              marginBottom: '56px'
            }}
          >
            {[
              { step: 'STEP 01', icon: '📅', name: '정산 주기', desc: '매달 10일 정산금을 지급합니다.' },
              { step: 'STEP 02', icon: '💳', name: '정산 방식', desc: '수익에서 수수료를 제외한 금액을 정산합니다.' },
              { step: 'STEP 03', icon: '🏦', name: '정산 계좌', desc: '등록하신 계좌로 자동 이체됩니다.' }
            ].map((payment, idx) => (
              <div key={idx} style={{ textAlign: 'center', background: '#FFFFFF', padding: '32px', borderRadius: '2px', border: '1px solid rgba(200,169,122,0.1)' }}>
                <div style={{ fontSize: '10px', color: '#C8A97A', marginBottom: '12px', fontWeight: 600 }}>
                  {payment.step}
                </div>
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{payment.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#0E0E0E', marginBottom: '12px' }}>
                  {payment.name}
                </h3>
                <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
                  {payment.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Referral Section */}
          <div
            style={{
              background: '#FFFFFF',
              padding: '32px',
              borderRadius: '2px',
              textAlign: 'center',
              borderLeft: '4px solid #C8A97A'
            }}
          >
            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#0E0E0E', marginBottom: '12px' }}>
              🤝 추천 상담사 모집
            </h3>
            <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
              기존 상담사 선생님이 새로운 상담사를 추천하면 추천 수수료를 받을 수 있습니다. 상호 성장의 기회를 나누세요.
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section
        style={{
          width: '100%',
          background: '#FFFFFF',
          padding: '80px 40px'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C8A97A',
              marginBottom: '16px'
            }}
          >
            Recruitment Process
          </div>

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
            모집 <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>절차</em>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px'
            }}
          >
            {[
              { step: '01', icon: '📝', name: '지원서 제출', desc: '공식 상담사 모집 페이지에서\n지원서를 작성합니다.' },
              { step: '02', icon: '📞', name: '심사', desc: '담당자가 활동 적합 여부를 확인하는\n심사를 진행합니다.' },
              { step: '03', icon: '✅', name: '승인', desc: '제출하신 정보를 검토하여 승인합니다.' },
              { step: '04', icon: '🎉', name: '활동 시작', desc: '등록 완료 후 상담 활동을 시작합니다.' }
            ].map((process, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  padding: '32px 24px',
                  background: '#F9F3E8',
                  borderRadius: '2px',
                  transition: 'background 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E8DCC8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F9F3E8';
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 600, color: '#C8A97A', marginBottom: '12px' }}>
                  {process.step}
                </div>
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{process.icon}</div>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#0E0E0E', marginBottom: '12px' }}>
                  {process.name}
                </h3>
                <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
                  {process.desc.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < process.desc.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaSectionRef}
        style={{
          width: '100%',
          background: '#0E0E0E',
          padding: '120px 40px',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '20px',
              color: '#FFFFFF'
            }}
          >
            전문성에 맞는<br />
            <em style={{ fontStyle: 'normal', color: '#C8A97A', fontWeight: 600 }}>높은 수익</em>을 원하신다면
          </h2>

          <p
            style={{
              fontSize: '13.5px',
              color: 'rgba(255,255,255,.4)',
              marginBottom: '40px',
              lineHeight: 1.8
            }}
          >
            홍카페에서 안정적인 상담 기회와 체계적인 지원을 받으세요.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <a
              href="https://www.hongcafe.com/board/recruit"
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
              상담사 지원하기
            </a>
          </div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      {showCTA && (
        <a
          href="https://www.hongcafe.com/board/recruit"
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
          상담사 지원하기
        </a>
      )}

      <Footer />
    </div>
  );
}
