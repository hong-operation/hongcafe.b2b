import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileLead, MobileMain, MobileSection, MobileTitle } from "../MobileUI";

export default function MobileNotFound() {
  return <div className="mobile-page-shell"><Header /><MobileMain><MobileSection className="m-first-section m-center"><span className="m-error-code">404</span><MobileTitle as="h1">페이지를 찾을 수 없습니다</MobileTitle><MobileLead>요청하신 페이지가 이동되었거나 존재하지 않습니다.</MobileLead><Link href="/" className="m-btn m-btn-primary">홈으로 돌아가기</Link></MobileSection></MobileMain><Footer /></div>;
}
