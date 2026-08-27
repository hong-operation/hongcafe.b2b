import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Users, Heart, Shield, CheckCircle, TrendingUp, MessageCircle } from "lucide-react";

export default function HomeOptionA() {
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex items-center justify-between overflow-hidden pt-16"
      >
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            minWidth: '100%',
            minHeight: '100%'
          }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DWNRFmpi3Ec?autoplay=1&mute=1&loop=1&playlist=DWNRFmpi3Ec&controls=0&modestbranding=1"
              title="홍카페 소개 영상"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-5"></div>

        {/* Content - Left Side */}
        <div className="relative z-20 text-white px-4 md:px-8 max-w-2xl w-full md:w-1/2 flex flex-col justify-center h-full">
          <p className="font-medium mb-4 md:mb-8 tracking-wide text-sm md:text-base lg:text-2xl">
            국내 최대 규모의 운세 서비스
          </p>
          <h1 
            className="font-bold leading-tight text-2xl md:text-3xl lg:text-5xl" 
            style={{ 
              lineHeight: '1.4',
              color: 'white'
            }}
          >
            타로, 사주, 신점 등<br />
            다양한 분야의 1:1 상담<br />
            서비스를 제공하는 홍카페
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-bold leading-relaxed text-center">
            홍카페는 타로, 사주, 신점 등 다양한 분야의 1:1 상담 서비스를 제공하는 국내 최대 규모의 운세 전문 플랫폼입니다.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Service Categories Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            제공 서비스
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Taro Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <div className="text-4xl mb-2">🃏</div>
                  <p className="text-xs text-gray-500">[이미지 영역]</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-3">타로</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">
                  타로 카드를 통한 심층적인 상담 및 조언을 제공합니다.
                </p>
                <a href="#" className="text-primary font-semibold text-sm md:text-base hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                  상담 시작하기
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Saju Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌙</div>
                  <p className="text-xs text-gray-500">[이미지 영역]</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-3">사주</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">
                  사주 분석을 통한 개인의 운명과 미래를 해석해드립니다.
                </p>
                <a href="#" className="text-primary font-semibold text-sm md:text-base hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                  상담 시작하기
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Shinjeom Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <p className="text-xs text-gray-500">[이미지 영역]</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-3">신점</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">
                  신점을 통해 현재의 상황을 진단하고 조언을 드립니다.
                </p>
                <a href="#" className="text-primary font-semibold text-sm md:text-base hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                  상담 시작하기
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            홍카페의 특징
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2">24시간 운영</h3>
              <p className="text-sm md:text-base text-gray-600">
                언제나 원하는 시간에 전문가 상담을 받을 수 있습니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2">전문 상담사</h3>
              <p className="text-sm md:text-base text-gray-600">
                2,500명 이상의 검증된 전문 상담사들이 서비스합니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2">안전한 거래</h3>
              <p className="text-sm md:text-base text-gray-600">
                안전한 결제 시스템과 개인정보 보호를 보장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Why Choose HongCafe - Stats Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              홍카페가 선택받는 이유
            </h2>
            <p className="text-lg text-muted-foreground">
              국내 최고의 운세 플랫폼으로서 신뢰할 수 있는 서비스를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <p className="text-foreground font-semibold">제휴 파트너사</p>
              <p className="text-sm text-muted-foreground mt-2">
                다양한 업종과 협력하며 지속적으로 성장 중
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">200K+</div>
              <p className="text-foreground font-semibold">활성 사용자</p>
              <p className="text-sm text-muted-foreground mt-2">
                매일 신뢰할 수 있는 상담을 받고 있습니다
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-foreground font-semibold">전문 상담사</p>
              <p className="text-sm text-muted-foreground mt-2">
                각 분야의 전문가들이 최고의 서비스 제공
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Business Success Cases Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
              비즈니스 성공 사례
            </h2>
            <p className="text-lg text-muted-foreground">
              홍카페와 함께 성장한 고객사들의 이야기
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Success Case 1 */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <div className="text-6xl mb-2">🌍</div>
                  <p className="text-xs text-gray-400">[사례 이미지 1]</p>
                </div>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-base md:text-lg font-bold text-foreground">새로운 시장 확대</h3>
                </div>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed flex-grow">
                  홍카페 파트너십을 통해 새로운 고객층을 확보하고 시장을 확대했습니다. 기존 사업 영역을 넘어 다양한 기회를 창출하고 있습니다.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>○○ 만화카페</span>
                  </div>
                  <Link href="/partnership" className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                    문의하기
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Success Case 2 */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-gradient-to-br from-secondary/15 to-primary/15 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <div className="text-6xl mb-2">🚀</div>
                  <p className="text-xs text-gray-400">[사례 이미지 2]</p>
                </div>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-base md:text-lg font-bold text-foreground">비즈니스 확장</h3>
                </div>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed flex-grow">
                  홍카페 파트너십을 통해 새로운 비즈니스 모델을 개발했습니다. 글로벌 확장까지 가능한 기반을 마련하며 지속적인 성장을 이루고 있습니다.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>○○ 반려동물 유치원</span>
                  </div>
                  <Link href="/partnership" className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                    문의하기
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Success Case 3 */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-gradient-to-br from-accent/15 to-primary/15 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <div className="text-6xl mb-2">👥</div>
                  <p className="text-xs text-gray-400">[사례 이미지 3]</p>
                </div>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-base md:text-lg font-bold text-foreground">사용자 확보 사례</h3>
                </div>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed flex-grow">
                  유니타로 프로그램을 통해 대학생 고객층을 확보했습니다. 브랜드 인지도 상승과 함께 지속적인 고객 유입이 이루어지고 있습니다.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>○○ 대학교</span>
                  </div>
                  <Link href="/unitaro" className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                    문의하기
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Business Areas Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
              제휴 문의
            </h2>
            <p className="text-lg text-muted-foreground">
              홍카페와 함께 새로운 기회를 만들어보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Partnership */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">파트너십</h3>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                홍카페와 함께 새로운 비즈니스 기회를 창출하세요
              </p>
              <Link href="/partnership">
                <a className="text-primary font-semibold text-sm md:text-base hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                  자세히 보기
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
            </div>

            {/* Unitaro */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">유니타로</h3>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                대학생 고객층 확보의 새로운 기회
              </p>
              <Link href="/unitaro">
                <a className="text-primary font-semibold text-sm md:text-base hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                  자세히 보기
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
            </div>

            {/* Recruitment */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">상담사 모집</h3>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                홍카페의 전문 상담사로 함께하세요
              </p>
              <Link href="/recruit">
                <a className="text-primary font-semibold text-sm md:text-base hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                  자세히 보기
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            홍카페와 함께 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            국내 최대 규모의 운세 플랫폼 홍카페에서 새로운 기회를 만나보세요
          </p>
          <a href="#" className="text-primary font-semibold text-base md:text-lg hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
            홍카페 바로가기
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
