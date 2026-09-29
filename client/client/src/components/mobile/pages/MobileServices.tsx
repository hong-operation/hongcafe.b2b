import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileCard, MobileEyebrow, MobileLead, MobileMain, MobileSection, MobileTitle } from "../MobileUI";

const milestones = [
  ["2022.01", "고용노동부 청년 친화 강소기업 3년 연속 선정"], ["2020.01", "고용노동부 청년 친화 강소기업 선정"],
  ["2019.12", "DSC인베스트먼트로부터 투자 유치"], ["2018.11", "ETRI로부터 딥러닝 기반의 서버형 음성인식 기술 이전"],
  ["2018.11", "서울지방중소벤처기업청장상 수상"], ["2018.09", "이노비즈(기술혁신형 중소기업) 인증"],
  ["2017.10", "중소벤처기업부 창업성장기술개발사업 선정"], ["2016.07", "벤처기업 확인"],
  ["2016.04", "기업부설연구소 설립"], ["2014.11", "(주)피플벤처스 설립"],
];

export default function MobileServices() {
  return <div className="mobile-page-shell"><Header /><MobileMain>
    <MobileSection className="m-first-section"><MobileEyebrow>About People Ventures</MobileEyebrow><MobileTitle as="h1">사람의 가능성에 <span className="m-gold">투자</span>하는<br /><strong>피플벤처스</strong></MobileTitle><MobileLead>2014년 설립된 피플벤처스는 음성 콘텐츠를 통해 사람과 사람을 연결하는 1:1 통화 기반 플랫폼을 운영합니다.</MobileLead><div className="m-highlight">신뢰와 윤리를 핵심 가치로 다양한 음성통화 서비스를 통해 보다 깊이 있는 연결 경험을 제공하며 개인과 기업, 사회의 성장을 함께 만들어갑니다.</div><div className="m-actions"><a href="https://harvest-innovation-b6f.notion.site/27af1fd9a3ef808480e2eeb07da1691e" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-primary">더 알아보기</a><a href="https://www.hongcafe.com/" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-outline">홍카페 방문</a></div>
      <div className="m-stack m-top-space"><MobileCard className="m-dark-card"><span className="m-small-label">MISSION</span><p>문제 해결이 중요한 사람과 이에 대한 지원이 가능한 사람을 연결하고, 자리이타의 정신으로 개인과 기업, 사회가 함께 성장할 수 있는 가치를 제공합니다.</p></MobileCard><MobileCard className="m-dark-card"><span className="m-small-label">VISION</span><p>사람이 가지고 있는 가능성과 경험에 투자하며 고객과 사회의 이익까지 저변을 넓혀가며 함께 공생하며 성장하는 것에 중점을 두고 있습니다.</p></MobileCard></div>
    </MobileSection>

    <MobileSection tone="soft"><MobileEyebrow>Core Values</MobileEyebrow><MobileTitle>피플벤처스의 <strong>핵심 가치</strong></MobileTitle><MobileLead>신뢰, 윤리, 사용자 중심의 가치를 바탕으로 서비스를 운영합니다.</MobileLead><div className="m-stack">
      <MobileCard className="m-number-card"><span>01</span><h3>신뢰</h3><p>검증된 시스템과 상담사 관리로 믿을 수 있는 서비스를 제공합니다.</p></MobileCard>
      <MobileCard className="m-number-card"><span>02</span><h3>윤리</h3><p>책임감 있는 기준으로 상담 환경을 운영합니다.</p></MobileCard>
      <MobileCard className="m-number-card"><span>03</span><h3>사용자 중심</h3><p>사용자의 경험과 만족을 최우선으로 서비스를 설계합니다.</p></MobileCard>
    </div></MobileSection>

    <MobileSection><MobileEyebrow>Global Expansion</MobileEyebrow><MobileTitle>글로벌 <strong>확장</strong></MobileTitle><MobileLead>피플벤처스는 아시아, 북미, 오세아니아 등 다양한 지역으로 확장하고 있습니다.</MobileLead><div className="m-stack">
      {[
        ["일본(홍카페 재팬)","현지 법인 설립 및 로컬 서비스 정착에 이어 한인 대상 서비스까지 확장"],
        ["북미 지역","미국, 캐나다 진출을 통한 글로벌 상담·파트너십 네트워크 확대"],
        ["오세아니아 지역","호주, 뉴질랜드 상담 서비스 오픈으로 글로벌 이용자 접근성 강화"],
        ["동남아시아 지역","베트남 서비스 오픈을 통해 신규 시장 진입 및 아시아권 확장 본격화"],
        ["향후 계획","유럽 및 추가 동남아 시장 진출 검토, 다문화 상담·파트너십 모델 구축"],
      ].map(([title,desc]) => <MobileCard key={title}><div className="m-card-title">{title}</div><p className="m-card-desc">{desc}</p></MobileCard>)}
    </div></MobileSection>

    <MobileSection tone="soft"><MobileEyebrow>Company History</MobileEyebrow><MobileTitle>피플벤처스 <strong>연혁</strong></MobileTitle><div className="m-timeline">{milestones.map(([year,title]) => <div className="m-timeline-item" key={`${year}-${title}`}><span>{year}</span><p>{title}</p></div>)}</div></MobileSection>
  </MobileMain><Footer /></div>;
}
