export const SITE = {
  name: 'Soohyun Park',
  nameKo: '박수현',
  role: '프론트엔드 개발자',
  githubUrl: 'https://github.com/sootopia',
  githubHandle: '@sootopia',
  email: 'shpark7502@gmail.com',
} as const;

export const NAV_ITEMS = [
  { id: 'strengths', label: '핵심역량' },
  { id: 'projects', label: '프로젝트' },
  { id: 'experience', label: '경력' },
  { id: 'contact', label: '문의' },
] as const;

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export const STRENGTHS = [
  {
    title: '디자인을 이해하는 개발',
    description:
      '웹디자이너로 시작해 쌓아온 UX/UI에 대한 이해를 바탕으로, 디자인의 의도와 사용자 경험을 코드로 구현합니다. 시각적인 완성도뿐 아니라 실제 사용성과 인터랙션까지 고려해 자연스럽고 완성도 높은 UI를 만듭니다.',
    image: '/images/strength1.webp',
  },
  {
    title: '구조적인 개발',
    description:
      '재사용성과 유지보수성을 고려해 컴포넌트를 설계하고, 프로젝트의 규모와 특성에 맞는 효율적인 구조를 고민합니다. 단순히 동작하는 코드를 넘어, 이후의 확장과 변경까지 고려한 안정적인 코드를 작성합니다.',
    image: '/images/strength2.webp',
  },
  {
    title: '유연한 소통과 협업',
    description:
      '다양한 의견과 관점을 열린 자세로 받아들이고, 더 나은 방향이라면 유연하게 수용하고 개선합니다. 다양한 협업 도구를 적극 활용해 상황에 맞는 방식으로 소통하며, 기획·디자인 파트 등 다양한 직군과 원활하게 협업합니다.',
    image: '/images/strength3.webp',
  },
] as const;

export const PROJECTS = [
  {
    title: '소금같은 예술 웹페이지 구축',
    description:
      '국/영문 콘텐츠와 다수의 백엔드 데이터 연동이 필요한 웹페이지를 Vue3 및 Pinia 기반으로 개발하였습니다.',
    image: '/images/project1_thumb.webp',
  },
  {
    title: '락소히든몰딩 쇼핑몰 리뉴얼',
    description: '독립몰 기반 쇼핑몰을 카페24 기반 쇼핑몰로 이전하고 리뉴얼을 진행, 맞춤형 쇼핑몰 UI를 구현했습니다.',
    image: '/images/project2_thumb.webp',
  },
  {
    title: '유렌카 장기렌트 플랫폼 개발 총괄',
    description:
      '소통, 기획, 디자인, 개발, 배포 및 인프라 세팅까지 전 과정을 직접 총괄하여 풀스택 서비스를 구현했습니다.',
    image: '/images/project3_thumb.webp',
  },
  {
    title: '승계고 플랫폼 개발 총괄',
    description: '렌트 승계 플랫폼을 Vue3와 Pinia 기반으로 개발했으며 배포 및 인프라 세팅까지 직접 총괄하였습니다.',
    image: '/images/project4_thumb.webp',
  },
] as const;

export type TechName =
  | 'Next.js'
  | 'Github'
  | 'TypeScript'
  | 'React'
  | 'Vue'
  | 'Gitlab'
  | 'Pinia'
  | 'Storybook'
  | 'Tailwind CSS'
  | 'Bootstrap'
  | 'JavaScript';

export const EXPERIENCES = [
  {
    period: '2022 - 현재',
    company: '프리랜서',
    role: '프론트엔드 개발자',
    stack: ['Github', 'Next.js', 'React', 'Vue', 'TypeScript', 'Pinia', 'Storybook', 'Tailwind CSS'] as TechName[],
    highlights: [
      '레거시 시스템 구조를 분석하고 개선하며 신규 웹 시스템 설계 및 개발',
      '요구사항 분석부터 UX/UI 설계, 디자인시스템 구축 및 배포까지 서비스 개발 전반을 주도',
      'React 기반 VR 투어 플랫폼 구축 및 WebSocket을 활용한 실시간 채팅 기능 구현',
      'AWS 인프라 구성 및 GitHub Actions 기반 CI/CD 환경 구축을 통한 배포 프로세스 자동화',
      '생성형 AI 및 에이전트를 적극 활용하여 개발 효율성 및 콘텐츠 품질 향상',
    ],
    current: true,
  },
  {
    period: '2019 - 2022',
    company: '원픽셀 스튜디오',
    role: '시스템개발팀 / 팀장',
    stack: ['Github', 'React', 'Vue', 'TypeScript', 'JavaScript', 'Bootstrap'] as TechName[],
    highlights: [
      '브랜드 사이트 및 웹페이지 템플릿 프론트엔드 개발',
      'Vue/React 기반 SPA 개발 및 유지보수',
      'UX/UI 설계 및 디자인 시스템 구축',
      '고객응대 및 상담, 컨설팅 업무 진행 및 대면 미팅 및 협의',
    ],
    current: false,
  },
  {
    period: '2017 - 2019',
    company: '도트피아',
    role: '제품개발 및 퍼블리싱',
    stack: ['Github', 'JavaScript', 'Bootstrap'] as TechName[],
    highlights: [
      '오픈소스 CMS(그누보드, 워드프레스 등)를 활용한 고객사 웹사이트 구축 및 유지보수',
      'Photoshop, Illustrator, Zeplin을 활용한 페이지 디자인',
      'UX/UI 설계 및 디자인 시스템 구축',
      'Javascript 및 Bootstrap 기반 사내 CRM 개발',
    ],
    current: false,
  },
  {
    period: '2016 - 2017',
    company: '(주)웹스리퍼블릭',
    role: '웹 퍼블리셔',
    stack: ['JavaScript', 'Bootstrap'] as TechName[],
    highlights: [
      '회사 웹사이트 및 브랜딩 페이지 개발',
      '카페24 빌더 솔루션을 활용한 고객사 웹사이트 구축 및 유지보수',
      'jQuery, JavaScript, Bootstrap 기반 상품 개발',
      '고객 응대 및 상담, 소통 창구 업무',
    ],
    current: false,
  },
  {
    period: '2014 - 2016',
    company: '(주)케이시크',
    role: '웹 디자이너 / 웹 퍼블리셔',
    stack: ['JavaScript', 'Bootstrap'] as TechName[],
    highlights: [
      '회사 웹사이트 및 브랜딩 페이지 개발',
      '사내 CMS를 활용한 관공서/대학/교육기관 웹사이트 구축 및 유지보수',
      '각 학교/기관 홈페이지 담당자 대상 솔루션 교육 진행',
      '사내 그룹웨어 및 CMS 퍼블리싱 및 고도화',
      'Photoshop, Illustrator를 활용한 페이지 디자인',
    ],
    current: false,
  },
] as const;
