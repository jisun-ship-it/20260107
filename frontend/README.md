# Frontend (React + Vite)

텍스트 기반 2-depth 트리 사이드 네비게이션을 제공하는 React UI입니다.

## 시작하기

```bash
npm install
npm run dev
```

기본 주소는 `http://localhost:5174`입니다. (포트는 `vite.config.js`에서 변경 가능)

## GitHub Pages 배포

루트 `docs/`에 빌드 결과를 생성하도록 설정되어 있습니다.

```bash
npm run build
```

이후 GitHub Pages의 소스를 `main` 브랜치의 `/docs`로 지정하면 됩니다.

## 주요 기능

- 상위 카테고리 클릭 시 하위 카테고리 펼침/접힘
- 텍스트 전용 사이드 네비게이션
- 단색 배경

## 폴더 구조

- `src/App.jsx`: 트리 메뉴 렌더링
- `src/App.css`: 레이아웃/스타일
