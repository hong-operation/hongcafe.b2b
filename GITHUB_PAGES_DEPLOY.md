# 홍카페 비즈니스 - GitHub Pages 배포 안내

이 프로젝트는 Manus 실행환경 없이 GitHub Pages에서 직접 배포되도록 정리된 버전입니다.

## 최초 1회 설정

1. 이 프로젝트의 파일을 GitHub 저장소 `main` 브랜치에 업로드합니다.
2. GitHub 저장소에서 **Settings → Pages**로 이동합니다.
3. **Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
4. 저장소의 **Actions** 탭에서 `Deploy GitHub Pages` 작업이 완료될 때까지 확인합니다.
5. 완료되면 **Settings → Pages**에 공개 홈페이지 주소가 표시됩니다.

기본 주소 형식:

`https://<GitHub계정>.github.io/<저장소명>/`

## 이후 수정

`main` 브랜치에 수정 내용을 올리면 GitHub Actions가 자동으로 새 버전을 빌드하고 Pages에 반영합니다.

## 이미지 관리

- `client/public` 안의 로고는 GitHub Pages에서 직접 제공합니다.
- 파트너십 페이지의 Notion 이미지 링크는 기존 그대로 유지했습니다.
- 유니타로 페이지의 기존 Manus 이미지 URL 6개는 현재 화면을 보존하기 위해 그대로 두었습니다. 해당 이미지를 Notion에 다시 올린 뒤 `client/src/pages/UniTaro.tsx`의 `galleryImages` 안 `src` 값만 새 Notion 외부 링크로 교체하면 됩니다.

## 커스텀 도메인을 연결할 경우

현재 자동 배포는 GitHub의 프로젝트 주소(`/저장소명/`)를 기준으로 빌드합니다. 나중에 `b2b.hongcafe.com` 같은 커스텀 도메인을 연결할 때는 배포 workflow의 `VITE_BASE_PATH`를 `/`로 바꾸면 됩니다.

`.github/workflows/deploy-pages.yml`에서:

```yaml
VITE_BASE_PATH: /
```

으로 변경한 뒤 다시 배포하세요.
