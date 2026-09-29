import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileCard, MobileEyebrow, MobileLead, MobileMain, MobileSection, MobileTitle } from "../MobileUI";

export default function MobileRecruit() {
  const fields = [["🃏","타로","연애, 진로, 인간관계 등 다양한 분야의 상담이 가능한 타로 상담사를 모집합니다."],["🌙","사주","사주명리학을 기반으로 운세와 인생 전반에 대한 상담이 가능한 상담사를 모집합니다."],["🔮","신점","신점을 바탕으로 현재의 흐름과 고민에 대한 상담이 가능한 상담사를 모집합니다."]];
  const benefits = [["👤","전문 매니저 1:1 관리","전문 매니저가 개별 배정되어 운영 지원 및 상담 성장을 밀착 지원합니다."],["📣","마케팅 지원 및 노출 확대","마케팅 지원과 플랫폼 내 노출 확대 지원으로 더 많은 고객에게 다가갑니다."],["✅","진짜 사진 인증 상담사 제도","진짜 사진 인증 상담사 제도를 운영하여 고객 신뢰를 높입니다."],["⬆️","파트너 상담사 승급 혜택","파트너 상담사로 승급 시 추가 혜택 및 개별 지원이 제공됩니다."]];
  return <div className="mobile-page-shell"><Header /><MobileMain>
    <MobileSection className="m-first-section"><MobileEyebrow>Program 03 · Consultant Recruit</MobileEyebrow><MobileTitle as="h1">전문성에 맞는 높은 수익과 함께 <span className="m-gold">체계적인 지원</span>을 받으세요</MobileTitle><MobileLead>홍카페에서는 타로 · 사주 · 신점 각 분야 전문가 상담사를 모집하고 있습니다. 회원 수가 많은 운세 플랫폼으로 상담 기회가 안정적인 편이며, 다양한 운영 지원을 제공하고 있습니다.</MobileLead><div className="m-notice">✓ 신청, 심사, 등록까지 일체 비용이 발생하지 않습니다</div><a href="https://www.hongcafe.com/board/recruit" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-primary">상담사 지원하기</a>
      <MobileCard className="m-overview-card"><span className="m-small-label">상담사 등급 체계</span><div className="m-grade-top"><div><span>GREEN</span><b>그린</b><em>시작가 500코인</em></div><div><span>PURPLE</span><b>퍼플</b><em>시작가 1,000코인</em></div></div><p>각 등급은 0~6단계로 운영됩니다. 0단계는 기본 등급이며, 1단계부터는 파트너 계약 및 활동 조건을 충족하면 승급할 수 있습니다. 단계가 높아질수록 상담 단가와 지원 혜택이 확대됩니다.</p></MobileCard>
    </MobileSection>

    <MobileSection tone="soft"><MobileEyebrow>Recruitment Field</MobileEyebrow><MobileTitle>모집 <span className="m-gold">분야</span></MobileTitle><MobileLead>타로, 사주, 신점 각 분야의 전문 상담사를 모집합니다.</MobileLead><div className="m-stack">{fields.map(([icon,title,desc])=><MobileCard className="m-inline-card" key={title}><span className="m-icon">{icon}</span><div><h3>{title}</h3><p>{desc}</p></div></MobileCard>)}</div></MobileSection>

    <MobileSection><MobileEyebrow>Benefits</MobileEyebrow><MobileTitle>상담사 활동 <span className="m-gold">혜택</span></MobileTitle><div className="m-stack">{benefits.map(([icon,title,desc])=><MobileCard className="m-inline-card" key={title}><span className="m-icon">{icon}</span><div><h3>{title}</h3><p>{desc}</p></div></MobileCard>)}</div></MobileSection>

    <MobileSection tone="soft"><MobileTitle>추가 수익 창출</MobileTitle><div className="m-stack">{[["📝","작명 서비스","작명, 부적, 맞춤 작업물 등 상품을 등록하고 판매할 수 있습니다."],["🎓","클래스 운영","타로·사주 교육 클래스를 개설하고 운영할 수 있습니다."],["🤝","대면 상담","오프라인 대면 상담 상품 등록이 가능합니다."]].map(([icon,title,desc])=><MobileCard className="m-inline-card" key={title}><span className="m-icon">{icon}</span><div><h3>{title}</h3><p>{desc}</p></div></MobileCard>)}</div></MobileSection>

    <MobileSection><MobileEyebrow>Grade System</MobileEyebrow><MobileTitle>상담사 단계 <span className="m-gold">시스템</span></MobileTitle><MobileLead>그린 / 퍼플 두 가지 체계로 운영되며 각각 0~6단계까지 있습니다.</MobileLead><div className="m-stack">{[
      ["그린0단계","500코인","상담사 시작 단계"],["퍼플0단계","1,000코인","상담사 시작 단계"],["그린1~6단계","500~1,200코인","활동 실적에 따른 단계 상승 및 단가 설정과 추가 혜택 제공"],["퍼플1~6단계","1,000~3,000코인","활동 실적에 따른 단계 상승 및 단가 설정과 추가 혜택 제공"],
    ].map(([grade,price,feature])=><MobileCard className="m-grade-card" key={grade}><h3>{grade}</h3><b>{price}</b><p>{feature}</p></MobileCard>)}</div></MobileSection>

    <MobileSection tone="soft"><MobileEyebrow>Payment Info</MobileEyebrow><MobileTitle>정산 <span className="m-gold">안내</span></MobileTitle><div className="m-step-list">{[["STEP 01","📅","정산 주기","매달 10일 정산금을 지급합니다."],["STEP 02","💳","정산 방식","수익에서 수수료를 제외한 금액을 정산합니다."],["STEP 03","🏦","정산 계좌","등록하신 계좌로 자동 이체됩니다."]].map(([step,icon,title,desc])=><MobileCard className="m-step-card" key={step}><span className="m-step-num">{step}</span><span className="m-icon">{icon}</span><div><h3>{title}</h3><p>{desc}</p></div></MobileCard>)}</div><MobileCard className="m-referral-card"><h3>🤝 추천 상담사 모집</h3><p>기존 상담사 선생님이 새로운 상담사를 추천하면 추천 수수료를 받을 수 있습니다. 상호 성장의 기회를 나누세요.</p></MobileCard></MobileSection>

    <MobileSection><MobileEyebrow>Recruitment Process</MobileEyebrow><MobileTitle>모집 <span className="m-gold">절차</span></MobileTitle><div className="m-step-list">{[["01","📝","지원서 제출","공식 상담사 모집 페이지에서 지원서를 작성합니다."],["02","📞","심사","담당자가 활동 적합 여부를 확인하는 심사를 진행합니다."],["03","✅","승인","제출하신 정보를 검토하여 승인합니다."],["04","🎉","활동 시작","등록 완료 후 상담 활동을 시작합니다."]].map(([step,icon,title,desc])=><MobileCard className="m-step-card" key={step}><span className="m-step-num">STEP {step}</span><span className="m-icon">{icon}</span><div><h3>{title}</h3><p>{desc}</p></div></MobileCard>)}</div></MobileSection>

    <MobileSection tone="dark" className="m-center"><MobileTitle>전문성에 맞는 <span className="m-gold">높은 수익</span>을 원하신다면</MobileTitle><MobileLead light>홍카페에서 안정적인 상담 기회와 체계적인 지원을 받으세요.</MobileLead><a href="https://www.hongcafe.com/board/recruit" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-primary">상담사 지원하기</a></MobileSection>
  </MobileMain><Footer /></div>;
}
