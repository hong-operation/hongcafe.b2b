# Hongcafe B2B — GitHub Pages 배포 안내

이 프로젝트는 GitHub Pages에서 직접 배포할 수 있도록 정리된 React/Vite 프로젝트입니다.

## 배포 방법

1. 이 폴더의 **내용 전체**를 GitHub 저장소 루트에 업로드합니다.
2. GitHub 저장소에서 `Settings → Pages`로 이동합니다.
3. `Build and deployment → Source`를 **GitHub Actions**로 선택합니다.
4. `main` 브랜치에 커밋이 올라가면 `.github/workflows/deploy-pages.yml`이 자동 실행됩니다.
5. `Actions`에서 `Deploy GitHub Pages`가 초록색 체크로 완료되면 Pages 주소로 접속합니다.

## 현재 배포 설정

- 패키지 매니저: `package.json`의 `packageManager`에 지정된 pnpm 버전 사용
- Node.js: 22
- GitHub Pages 프로젝트 경로를 Vite `base`에 자동 반영
- `dist/index.html`을 `dist/404.html`로 복사해 SPA 직접 접근/새로고침에 대응

## 이미지

- 로고는 `client/public`의 로컬 파일을 사용합니다.
- 유니타로 활동 이미지 6개는 `client/src/pages/UniTaro.tsx`의 Notion 외부 이미지 링크를 사용합니다.
- 파트너십 사례 이미지는 기존 Notion 외부 이미지 링크를 유지합니다.

## 보안

- `.project-config.json`, `.env*`, 빌드 산출물 등은 `.gitignore`로 제외합니다.
- API 키/토큰/비밀번호는 저장소 코드에 직접 추가하지 마세요.
- 이 프로젝트는 공개 웹사이트 배포용이지만 npm 패키지로 배포하지 않도록 `private: true`가 설정되어 있습니다.

## 외부 링크 참고

- 홍카페 및 상담사 모집 링크는 HTTPS 주소를 사용합니다.
- 피플벤처스 회사 홈페이지는 현재 실제 접속 주소에 맞춰 `http://peoplev.co.kr/`를 유지합니다. 대상 사이트에서 HTTPS를 지원하게 되면 그때 HTTPS로 변경하세요.
- 외부 새 창 링크는 `noopener noreferrer`를 적용합니다.
