import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      <Header />

      {/* 404 Section */}
      <section
        style={{
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '100px 40px',
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
        <div className="relative z-10" style={{ maxWidth: '600px' }}>
          {/* 404 Number */}
          <div
            style={{
              fontSize: 'clamp(80px, 15vw, 180px)',
              fontWeight: 700,
              color: '#C8A97A',
              lineHeight: 1,
              marginBottom: '24px',
              opacity: 0,
              animation: 'fadeUp 0.9s 0.15s forwards'
            }}
          >
            404
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 300,
              lineHeight: '1.3',
              marginBottom: '20px',
              color: '#0E0E0E',
              opacity: 0,
              animation: 'fadeUp 0.9s 0.3s forwards'
            }}
          >
            페이지를 찾을 수 없습니다
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '15px',
              color: '#888',
              lineHeight: '1.8',
              marginBottom: '48px',
              opacity: 0,
              animation: 'fadeUp 0.9s 0.45s forwards'
            }}
          >
            죄송합니다. 요청하신 페이지가 존재하지 않거나 삭제되었습니다.
            <br />
            홈으로 돌아가 다시 시작해주세요.
          </p>

          {/* Button */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              opacity: 0,
              animation: 'fadeUp 0.9s 0.6s forwards'
            }}
          >
            <button
              onClick={handleGoHome}
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
              홈으로 돌아가기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
