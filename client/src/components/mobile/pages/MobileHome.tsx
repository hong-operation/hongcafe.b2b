import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MobileCard,
  MobileContainer,
  MobileEyebrow,
  MobileLead,
  MobileMain,
  MobileSection,
  MobileStatGrid,
  MobileTitle,
} from "../MobileUI";

const programs = [
  { num: "Program 01", icon: "🤝", name: "파트너십", desc: "파트너십을 통한 새로운 기회", link: "/partnership" },
  { num: "Program 02", icon: "🎓", name: "유니타로", desc: "대학 내 타로 교육 및 커뮤니티 지원", link: "/unitaro" },
  { num: "Program 03", icon: "💼", name: "상담사 모집", desc: "전문 상담사 모집 및 운영 지원", link: "/recruit" },
];

export default function MobileHome() {
  return (
    <div className="mobile-page-shell">
      <Header />
      <MobileMain className="mobile-home">
        <section className="m-hero m-hero-center">
          <MobileContainer>
            <MobileEyebrow>People Ventures × Hongcafe Business</MobileEyebrow>
            <MobileTitle as="h1">
              국내 최대 규모의 <span className="m-gold">운세 서비스</span><br />홍카페와 함께하세요
            </MobileTitle>
            <MobileLead>타로, 사주, 신점 등 다양한 분야의 1:1 전화 상담을 제공하는 홍카페가 새로운 비즈니스 기회를 제안합니다.</MobileLead>
            <div className="m-actions">
              <a href="#programs" className="m-btn m-btn-primary">프로그램 보기</a>
              <Link href="/about" className="m-btn m-btn-outline">홍카페 소개</Link>
            </div>
          </MobileContainer>
        </section>

        <section className="m-metrics-dark">
          <MobileContainer>
            <MobileStatGrid dark items={[
              { val: "국내 1위", label: "전화 운세 플랫폼" },
              { val: "320만+", label: "누적 상담 건수" },
              { val: "91만+", label: "이용자 후기" },
              { val: "50%+", label: "높은 재이용률" },
            ]} />
          </MobileContainer>
        </section>

        <MobileSection id="programs">
          <MobileEyebrow>Business Programs</MobileEyebrow>
          <MobileTitle>홍카페 비즈니스<br /><strong>프로그램</strong></MobileTitle>
          <MobileLead>파트너십, 유니타로, 상담사 모집까지 — 홍카페와 함께할 수 있는 다양한 방식을 소개합니다.</MobileLead>
          <div className="m-stack">
            {programs.map((program) => (
              <Link href={program.link} key={program.num} className="m-program-card">
                <div className="m-program-top"><span>{program.num}</span><b>{program.icon}</b></div>
                <h3>{program.name}</h3>
                <p>{program.desc}</p>
                <span className="m-card-link">자세히 보기 →</span>
              </Link>
            ))}
          </div>
        </MobileSection>

        <MobileSection tone="soft">
          <MobileEyebrow>Trusted Partner</MobileEyebrow>
          <MobileTitle>홍카페는<br /><strong>신뢰할 수 있는 파트너</strong></MobileTitle>
          <div className="m-stack m-gap-sm">
            <MobileCard><b>국내 최대 규모의 운세 플랫폼</b><p className="m-card-desc">안정적인 수익 창출 기회를 제공합니다.</p></MobileCard>
            <MobileCard><b>전문 매니저의 1:1 관리</b><p className="m-card-desc">체계적인 모니터링으로 파트너의 성공을 지원합니다.</p></MobileCard>
            <MobileCard><b>다양한 협업 방식</b><p className="m-card-desc">각 파트너의 상황에 맞는 맞춤형 솔루션을 제공합니다.</p></MobileCard>
          </div>
          <MobileStatGrid items={[
            { val: "320만+", label: "누적 상담 건수" },
            { val: "91만+", label: "이용자 후기" },
            { val: "50%+", label: "높은 재이용률" },
            { val: "국내 1위", label: "전화 운세 플랫폼" },
          ]} />
          <Link href="/partnership" className="m-text-link">파트너십 자세히 보기 →</Link>
        </MobileSection>

        <MobileSection tone="dark" className="m-center">
          <MobileTitle>홍카페와 함께 <span className="m-gold">성장</span>하세요</MobileTitle>
          <MobileLead light>새로운 비즈니스 기회를 탐색하고 있다면, 지금 바로 홍카페에 문의하세요.</MobileLead>
          <div className="m-actions">
            <Link href="/partnership" className="m-btn m-btn-primary">파트너십 문의</Link>
            <Link href="/contact" className="m-btn m-btn-dark-outline">회사 안내</Link>
          </div>
        </MobileSection>
      </MobileMain>
      <Footer />
    </div>
  );
}
