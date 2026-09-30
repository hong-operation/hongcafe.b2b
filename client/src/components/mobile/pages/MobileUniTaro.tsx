import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileCard, MobileEyebrow, MobileLead, MobileMain, MobileSection, MobileTitle } from "../MobileUI";
import MobileImageLightbox from "../MobileImageLightbox";

const gallery = [
  ["https://www.notion.so/image/attachment%3A7535bce3-5f8a-4ee2-983c-7277cfa06952%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C2.png?table=block&id=3c953279-2277-805d-b9bf-f2d055355146&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2", "유니타로 사진1"],
  ["https://www.notion.so/image/attachment%3A72d4a700-7556-4d39-bf94-a2b01eeebf6e%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C3.png?table=block&id=3c953279-2277-80b3-975c-c47dd7270033&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2", "유니타로 사진2"],
  ["https://www.notion.so/image/attachment%3Aa9cea4b8-ed16-42e5-a9dc-c8d4a9566eaa%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C4.png?table=block&id=3c953279-2277-8078-a26f-fb7f6f9cb0c2&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2", "유니타로 사진3"],
  ["https://www.notion.so/image/attachment%3A96fe6268-ff0e-4707-bccc-00fa2b728fd3%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C1.png?table=block&id=3c953279-2277-805c-9cb9-e9f12db64815&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2", "유니타로 사진4"],
  ["https://www.notion.so/image/attachment%3A2303e317-9547-4e2d-b21e-f99a7da3c6c6%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C6.jpg?table=block&id=3c953279-2277-8007-93b7-e50abebcbcd1&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2", "유니타로 사진5"],
  ["https://www.notion.so/image/attachment%3A2e4bc20f-12d6-492c-9036-88bfd940708e%3A%EC%9C%A0%EB%8B%88%ED%83%80%EB%A1%9C6.png?table=block&id=3c953279-2277-80e4-bdb9-d08e60c7c0e4&spaceId=e7653279-2277-81ad-86c9-00037a3d3339&width=2000&userId=&cache=v2", "유니타로 사진6"],
];

export default function MobileUniTaro() {
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  return <div className="mobile-page-shell"><Header /><MobileMain>
    <MobileSection className="m-first-section"><MobileEyebrow>Program 02 · UniTaro</MobileEyebrow><MobileTitle as="h1">타로는 이야기를 꺼내는 <span className="m-gold">창구</span>입니다</MobileTitle><MobileLead>홍카페는 타로 상담이 사회적 고립을 겪는 분들에게 자신의 이야기를 꺼내고 감정을 표현할 수 있는 하나의 창구가 될 수 있다고 생각합니다. 이를 바탕으로 대학 내 심리·상담·복지 등 관련 학과 및 학생 동아리와의 협업을 통해 타로 상담의 긍정적인 가치를 확산합니다.</MobileLead><a href="https://forms.gle/RamLCbA7SbhehbUw8" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-primary">협업 제안하기</a>
      <MobileCard className="m-overview-card"><span className="m-small-label">PROGRAM OVERVIEW</span><h3>유니타로</h3><p>대학 내 타로 교육 및 커뮤니티 지원 프로그램</p><div className="m-divider" /><span className="m-small-label">TARGET</span><ul className="m-clean-list"><li>대학 심리·상담·복지 관련 학과</li><li>학생 동아리 및 커뮤니티</li><li>타로 교육 및 상담 관심층</li></ul></MobileCard>
    </MobileSection>

    <MobileSection tone="soft"><MobileEyebrow>What We Provide</MobileEyebrow><MobileTitle>유니타로가 <strong>제공하는 것</strong></MobileTitle><div className="m-stack">{[["📚","타로 교육","체계적인 타로 이론 및 실습 교육"],["🤝","커뮤니티","학생 동아리 및 네트워크 지원"],["💡","심리 상담","전문 상담사와의 협업 기회"]].map(([icon,title,desc])=><MobileCard className="m-inline-card" key={title}><span className="m-icon">{icon}</span><div><h3>{title}</h3><p>{desc}</p></div></MobileCard>)}</div></MobileSection>

    <MobileSection><MobileEyebrow>Collaboration Cases</MobileEyebrow><MobileTitle>협업 <strong>사례</strong></MobileTitle><div className="m-gallery-grid">{gallery.map(([src,title])=><button type="button" className="m-gallery-card" onClick={() => setPreview({ src, title })} key={src} aria-label={`${title} 크게 보기`}><img src={src} alt={title} loading="lazy" /></button>)}</div></MobileSection>

    <MobileSection tone="dark" className="m-center"><MobileTitle>협업 <span className="m-gold">제안하기</span></MobileTitle><MobileLead light>함께할 관련 학과 및 동아리를 모집합니다.</MobileLead><a href="https://forms.gle/RamLCbA7SbhehbUw8" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-primary">협업 제안하기</a></MobileSection>
  </MobileMain><Footer /><MobileImageLightbox src={preview?.src ?? null} alt={preview?.title ?? "유니타로 사진"} showTitle={false} onClose={() => setPreview(null)} /></div>;
}
