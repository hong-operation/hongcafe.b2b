import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileCard, MobileEyebrow, MobileLead, MobileMain, MobileSection, MobileTitle } from "../MobileUI";

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
    images: ["https://www.notion.so/image/attachment%3A4344b6c0-3a46-47a7-bd59-4382d765c196%3Aoo%EC%83%90%EB%9F%AC%EB%93%9C%EA%B3%B5%EC%8B%9D%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.jpg?table=block&id=34c53279-2277-8067-abbb-e2b9f64b4fef&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2"],
  },
  {
    name: "OO 온라인 반려동물 카페",
    desc: "메인 페이지 배너 등록",
    images: ["https://www.notion.so/image/attachment%3Afa5a10fb-7556-4787-8082-46ce30c96d1f%3Aoo%EC%98%A8%EB%9D%BC%EC%9D%B8%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%EC%B9%B4%ED%8E%98.jpg?table=block&id=34c53279-2277-80cb-9bb3-c5c22353e4b5&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2"],
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

const faqs = [
  ["홍카페 파트너십 프로그램이 무엇인가요?", "홍카페 파트너십 프로그램은 고객을 소개하고 관리하는 마케팅 파트너를 위한 제도입니다. 파트너로 가입하면 신규 고객을 홍카페에 추천하고, 해당 고객의 서비스 이용에 따라 정해진 수익을 얻을 수 있습니다."],
  ["보상 구조와 계산 방식은 어떻게 되나요?", "홍카페 파트너십의 보상 구조는 고객의 이용 금액에 대한 지급 형태입니다. 각 파트너가 고객으로부터 얻을 수 있는 누적 최대 수익은 등급에 따라 달라집니다. 파트너십 활동에 누적 최대 수익은 제한이 없습니다."],
  ["파트너 수익은 언제, 어떻게 지급되나요?", "파트너가 활동을 통해 얻은 수익은 매월 정기 정산됩니다. 일반적으로 월말에 마감하여 그달 발생한 수익금을 합산한 후, 익월 일정일(20일)에 등록된 파트너의 계좌로 지급합니다. 정산 시에는 세법에 따라 소득세 및 원천세가 공제됩니다."],
  ["파트너 활동에서 지켜야 할 규칙이 있나요?", "홍카페 파트너는 윤리적인 마케팅 활동을 준수해야 합니다. 허위 과장 광고나 스팸 행위는 금지되며, 고객에게 정확한 정보와 정직한 권유를 하는 것이 원칙입니다. 회사 정책에 어긋나는 홍보를 할 경우 경고나 자격 박탈이 있을 수 있습니다."],
  ["소개받은 고객이 결제를 하지 않으면 수익금도 없나요?", "수익금은 고객이 유료 상담을 이용하거나 코인을 충전하는 등 실제 결제가 발생한 경우에만 적립됩니다. 무료 가입만 한 경우나 이벤트로 지급된 코인을 사용하는 등 실제 매출이 없는 경우에는 수익금이 발생하지 않습니다."],
  ["파트너 활동 중 궁금한 사항이나 지원이 필요하면 어디에 문의하면 되나요?", "전담 파트너 지원팀과 고객센터를 통해 도움을 받을 수 있습니다. 홍카페 파트너 전용 채널이 운영되고 있으며, 여기에서 공지 사항 확인이나 질의응답이 가능합니다. 또한 전화나 이메일로 문의하면 신속히 안내를 받을 수 있습니다."],
  ["'고객 졸업'이란 무엇이며 기준은 무엇인가요?", "고객 졸업이란 파트너가 소개한 고객으로부터 받을 수 있는 최대 수익금 한도에 도달한 상태를 의미합니다. 해당 고객의 누적 이용으로 인한 파트너 수익이 등급별 상한(고객이 누적 2,000만원을 사용)에 이르면 그 순간 고객은 '졸업' 처리됩니다. 졸업한 고객은 이후로는 해당 파트너에게 더 이상의 수익을 제공하지 않게 됩니다."],
  ["한 번 졸업한 고객에게서 다시 수익을 받을 방법은 없나요?", "졸업한 고객으로부터는 해당 파트너에게 더 이상의 직접 수익금은 발생하지 않습니다. 다만, 그 고객이 파트너로 전환되어 본인의 하위 파트너로 참여하게 된다면 다른 형태로 협업이 될 수 있습니다. 또한 졸업한 고객도 지인 소개 등을 통해 간접적으로 새로운 고객 유치에 도움을 줄 수 있으므로, 관계를 잘 유지하는 것이 좋습니다."],
];

export default function MobilePartnership() {
  const [open, setOpen] = useState<number | null>(null);
  return <div className="mobile-page-shell"><Header /><MobileMain>
    <MobileSection className="m-first-section"><MobileEyebrow>Program 01 · Partnership</MobileEyebrow><MobileTitle as="h1">파트너십은 단순한 제휴가 <span className="m-gold">아닙니다</span></MobileTitle><MobileLead>홍카페는 파트너와 함께 새로운 연결을 설계하고, 고객과 시장을 이어주는 다리가 됩니다. 파트너와 고객 모두에게 지속 가능한 가치와 경험을 제공합니다.</MobileLead><div className="m-highlight">브랜드와 브랜드가 함께 성장하는 순환 구조 — 홍카페와 함께라면 새로운 시장, 새로운 관계, 그리고 새로운 기회를 경험할 수 있습니다.</div><div className="m-actions"><a href="https://forms.gle/Vr7vrAzJUustKnCS9" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-primary">파트너십 신청하기</a><a href="#how-mobile" className="m-btn m-btn-outline">운영 방식 보기</a></div>
      <MobileCard className="m-overview-card"><span className="m-small-label">PROGRAM OVERVIEW</span>{[["제휴 방식","링크 / QR코드 제공"],["리워드","상담 발생 시 수수료"],["최대 보상","신규 1인당 최대 100만원"],["정산일","매월 20일"],["시작 비용","없음 (무료)"],["지원","전담 파트너 매니저"]].map(([k,v]) => <div className="m-key-row" key={k}><span>{k}</span><b>{v}</b></div>)}</MobileCard>
    </MobileSection>

    <MobileSection id="how-mobile"><MobileEyebrow>Partnership Structure</MobileEyebrow><MobileTitle>파트너십 <strong>구조</strong></MobileTitle><MobileLead>추천인(MP) → 신규 가입 → 코인 결제 → 정산 지급의 단순하고 명확한 구조입니다.</MobileLead><div className="m-step-list">{[
      ["01","🔗","초대 링크 전달","파트너(MP)가 전용 초대 링크 및 QR코드를 고객에게 전달합니다."],
      ["02","👤","신규 가입","고객이 링크를 통해 홍카페 신규 가입합니다."],
      ["03","💳","코인 결제/사용","고객이 코인 충전 후, 상담을 이용합니다."],
      ["04","💰","정산 지급","사용 금액의 5% 기준으로 매월 정산됩니다."],
    ].map(([num,icon,title,desc]) => <MobileCard className="m-step-card" key={num}><span className="m-step-num">STEP {num}</span><span className="m-icon">{icon}</span><div><h3>{title}</h3><p>{desc}</p></div></MobileCard>)}</div></MobileSection>

    <MobileSection tone="soft"><MobileEyebrow>Reward System</MobileEyebrow><MobileTitle>보상 <strong>체계</strong></MobileTitle><MobileLead>안정적이고 투명한 수익 구조를 제공합니다.</MobileLead><div className="m-stack">
      {[
        {grade:"GMP", direct:"직접 초대한 회원 적립 시 5% (1인당 최대 100만원)", lower:"본인이 등록한 MMP의 고객 결제 금액 → 0.5%", rate:"최대 6.5%", max:"130만원"},
        {grade:"MMP", direct:"직접 초대한 회원 적립 시 5% (1인당 최대 100만원)", lower:"본인이 등록한 MP의 고객 결제 금액 → 1%", rate:"최대 6%", max:"120만원"},
        {grade:"MP", direct:"직접 초대한 회원 적립 시 5% (1인당 최대 100만원)", lower:"없음", rate:"5%", max:"100만원"},
      ].map((r) => <MobileCard className="m-reward-card" key={r.grade}><h3>{r.grade}</h3><div className="m-key-row"><span>직접 보상</span><b>{r.direct}</b></div><div className="m-key-row"><span>하위 파트너 추가 보상</span><b>{r.lower}</b></div><div className="m-key-row"><span>총 수익율</span><b className="m-gold">{r.rate}</b></div><div className="m-key-row"><span>최대 수익</span><b>{r.max}</b></div></MobileCard>)}
      </div><div className="m-stack m-top-space">{[["🔒","안정성","자동 정산 시스템 기반, 매월 보상 지급"],["📈","높은 수익성","신규 회원 1명당 최대 100만원 보상"],["🌐","확장성","추천 회원이 늘어날수록 파트너 수익 극대화"]].map(([icon,title,desc]) => <MobileCard key={title} className="m-inline-card"><span className="m-icon">{icon}</span><div><h3>{title}</h3><p>{desc}</p></div></MobileCard>)}</div>
    </MobileSection>

    <MobileSection><MobileEyebrow>Partnership Cases</MobileEyebrow><MobileTitle>파트너십 <strong>사례</strong></MobileTitle><MobileLead>다양한 업종에서 홍카페 파트너십을 활용하고 있습니다.</MobileLead><div className="m-stack">{cases.map((item) => <MobileCard className="m-case-card" key={item.name}><div className={`m-image-strip${item.images.length === 1 ? " is-single" : ""}`}>{item.images.map((src,i)=><a className="m-image-preview-link" href={`${import.meta.env.BASE_URL}image-viewer?src=${encodeURIComponent(src)}&title=${encodeURIComponent(`${item.name} 이미지 ${i+1}`)}`} target="_blank" rel="noopener noreferrer" key={src} aria-label={`${item.name} 이미지 ${i+1} 새 창에서 보기`}><img src={src} alt={`${item.name} ${i+1}`} loading="lazy" /></a>)}</div><h3>{item.name}</h3><p>{item.desc}</p></MobileCard>)}</div></MobileSection>

    <MobileSection tone="soft"><MobileTitle>자주 묻는 질문</MobileTitle><div className="m-faq-list">{faqs.map(([q,a],idx)=><div className="m-faq" key={q}><button type="button" onClick={()=>setOpen(open===idx?null:idx)}><span>{q}</span><b>{open===idx?"−":"+"}</b></button>{open===idx&&<p>{a}</p>}</div>)}</div></MobileSection>

    <MobileSection tone="dark" className="m-center"><MobileTitle>파트너십 <span className="m-gold">신청하기</span></MobileTitle><MobileLead light>지금 바로 홍카페 파트너가 되어 새로운 수익 기회를 만들어보세요.</MobileLead><a href="https://forms.gle/Vr7vrAzJUustKnCS9" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-primary">신청하기</a></MobileSection>
  </MobileMain><Footer /></div>;
}
