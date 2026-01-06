# Backend (Express)

간단한 Express 서버로 `/api/health` 엔드포인트만 제공합니다.

## 시작하기

```bash
npm install
npm run dev
```

기본 포트는 `3001`이며 `PORT` 환경변수로 변경 가능합니다.

## API

- `GET /api/health`: 서버 상태 확인

## 폴더 구조

- `index.js`: 서버 실행
- `app.js`: 미들웨어/라우팅 구성
- `routes/health.js`: 헬스 체크 라우트
