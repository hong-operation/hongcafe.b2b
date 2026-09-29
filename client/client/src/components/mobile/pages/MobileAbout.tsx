import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileCard, MobileEyebrow, MobileIconCard, MobileLead, MobileMain, MobileSection, MobileStatGrid, MobileTitle } from "../MobileUI";

export default function MobileAbout() {
  const services = [
    ["🃏", "타로 상담", "타로 카드를 통해 연애, 진로, 인간관계 등 다양한 분야의 상담을 제공합니다."],
    ["🌙", "사주 상담", "사주명리학을 바탕으로 운세와 인생 전반에 대한 상담을 제공합니다."],
    ["🔮", "신점 상담", "신점을 바탕으로 현재의 흐름과 고민에 대한 방향을 제시합니다."],
    ["📞", "전화상담", "실시간 전화로 깊이 있는 1:1 상담을 제공합니다."],
    ["💬", "채팅 상담", "채팅으로 편하게 상담받을 수 있습니다."],
    ["✨", "기타 상담", "펫타로, 대면 상담, 클래스 등 다양한 상담을 제공합니다."],
  ];
  const values = [
    ["01", "신뢰성", "엄격한 심사 과정을 통해 검증된 상담사만 활동하며 투명한 운영으로 신뢰할 수 있는 상담 환경을 제공합니다."],
    ["02", "상담 품질", "안정적이고 만족도 높은 상담 경험을 제공할 수 있도록 서비스 품질 관리에 집중합니다."],
    ["03", "접근성", "24시간 언제든 편리하게 이용할 수 있는 환경을 제공하여 누구나 부담 없이 상담을 받을 수 있습니다."],
    ["04", "서비스 확장", "펫타로, 대면 상담, 클래스 등 다양한 상담을 제공합니다."],
  ];
  return (
    <div className="mobile-page-shell"><Header /><MobileMain>
      <MobileSection className="m-first-section">
        <MobileEyebrow>About Hongcafe</MobileEyebrow>
        <MobileTitle as="h1">홍카페는 <span className="m-gold">신뢰</span>를 바탕으로 한<br /><strong>상담 플랫폼</strong></MobileTitle>
        <MobileLead>국내 최대 규모의 타로·사주·신점 상담 플랫폼으로, 깊이 있는 1:1 상담 경험을 제공합니다.</MobileLead>
        <div className="m-highlight">320만 건 이상 누적 상담과 1,200명 이상의 전문 상담사, 고객 만족도 ★4.95/5를 기록하며 프리미엄 상담 플랫폼으로 자리매김했습니다.</div>
        <div className="m-actions">
          <a href="https://www.hongcafe.com/" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-primary">홍카페 방문하기</a>
          <a href="http://peoplev.co.kr/" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-outline">피플벤처스 소개</a>
        </div>
        <MobileStatGrid items={[
          { val: "국내 1위", label: "전화 운세 플랫폼" }, { val: "320만+", label: "누적 상담 건수" },
          { val: "1,200+", label: "전문 상담사" }, { val: "★4.95/5", label: "고객 만족도" },
        ]} />
      </MobileSection>

      <MobileSection tone="soft"><MobileEyebrow>Why Choose Hongcafe</MobileEyebrow><MobileTitle>홍카페가 <strong>선택받는 이유</strong></MobileTitle><MobileLead>타로, 사주, 신점 등 다양한 분야의 1:1 전화 상담을 제공하는 국내 최대 규모의 운세 전문 플랫폼입니다.</MobileLead>
        <div className="m-stack"><MobileIconCard icon="🕐" title="24시간 상담" desc="언제든 편한 시간에 전화·채팅으로 상담받을 수 있습니다." /><MobileIconCard icon="✅" title="검증된 상담사" desc="엄격한 심사를 거친 검증된 상담사들만 활동합니다." /><MobileIconCard icon="📱" title="언제 어디서나" desc="앱과 웹을 통해 언제 어디서나 쉽게 이용할 수 있습니다." /></div>
      </MobileSection>

      <MobileSection><MobileEyebrow>Service Categories</MobileEyebrow><MobileTitle>제공 <strong>서비스</strong></MobileTitle><MobileLead>홍카페에서는 다양한 운세 상담 서비스를 제공합니다.</MobileLead>
        <div className="m-stack">{services.map(([icon,title,desc]) => <MobileIconCard key={title} icon={icon} title={title} desc={desc} />)}</div>
      </MobileSection>

      <MobileSection tone="soft"><MobileEyebrow>Our Values</MobileEyebrow><MobileTitle>홍카페의 <strong>가치</strong></MobileTitle><MobileLead>홍카페는 신뢰, 품격, 그리고 혁신을 바탕으로 운영됩니다.</MobileLead>
        <div className="m-stack">{values.map(([num,title,desc]) => <MobileCard key={num} className="m-number-card"><span>{num}</span><h3>{title}</h3><p>{desc}</p></MobileCard>)}</div>
      </MobileSection>

      <MobileSection tone="dark" className="m-center"><MobileTitle>홍카페와 함께<br /><span className="m-gold">새로운 기회</span>를 만들어보세요</MobileTitle><MobileLead light>파트너십, 유니타로, 상담사 모집 등 다양한 협업 방식이 준비되어 있습니다.</MobileLead><div className="m-actions"><Link href="/#programs" className="m-btn m-btn-primary">협업 문의하기</Link><a href="https://www.hongcafe.com/" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-dark-outline">홍카페 방문</a></div></MobileSection>
    </MobileMain><Footer /></div>
  );
}
