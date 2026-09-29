import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileCard, MobileEyebrow, MobileLead, MobileMain, MobileSection, MobileTitle } from "../MobileUI";

export default function MobileContact() {
  return <div className="mobile-page-shell"><Header /><MobileMain>
    <MobileSection className="m-first-section m-center"><MobileEyebrow>Contact Us</MobileEyebrow><MobileTitle as="h1">피플벤처스와 <span className="m-gold">연락</span>하세요</MobileTitle><MobileLead>궁금한 점이나 협업 제안이 있으시면 언제든 연락주세요. 빠르게 답변해드리겠습니다.</MobileLead></MobileSection>
    <MobileSection tone="soft"><MobileEyebrow>Information</MobileEyebrow><MobileTitle>연락처 <strong>정보</strong></MobileTitle><div className="m-stack">
      <MobileCard className="m-contact-card"><span className="m-icon">📍</span><b>ADDRESS</b><p>(주)피플벤처스<br />서울시 마포구 성암로 330<br />DMC첨단산업센터 621호</p></MobileCard>
      <MobileCard className="m-contact-card"><span className="m-icon">✉️</span><b>EMAIL</b><a href="mailto:help@peoplev.co.kr">help@peoplev.co.kr</a></MobileCard>
      <MobileCard className="m-contact-card"><span className="m-icon">☎️</span><b>PHONE</b><a href="tel:1644-8190">1644-8190</a></MobileCard>
    </div></MobileSection>
    <MobileSection><MobileEyebrow>Location</MobileEyebrow><MobileTitle>찾아오시는 <strong>길</strong></MobileTitle><MobileLead>서울시 마포구 성암로 330 DMC첨단산업센터 621호에 위치하고 있습니다.</MobileLead><div className="m-map"><iframe title="피플벤처스 위치 지도" src="https://www.google.com/maps?q=37.58474,126.88564&z=16&output=embed" width="100%" height="340" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></MobileSection>
  </MobileMain><Footer /></div>;
}
