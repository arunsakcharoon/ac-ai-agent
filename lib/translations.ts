export type Lang = 'en' | 'th';

export const t = {
  en: {
    hero: {
      badge: 'Available for projects',
      h1a: 'Build smarter',
      h1b: 'with AI,',
      h1c: 'done right.',
      sub: 'Practical AI consulting — from simple workflow to autonomous agent systems.',
      cta: 'Contact me →',
    },
    about: {
      tagline: 'Practical AI consulting — end-to-end, from strategy to production.',
      tags: ['LLM Integration', 'AI Agent Systems', 'Workflow Automation', 'RAG & Knowledge Bases', 'AI Strategy', 'Prompt Engineering'],
    },
    showcase: {
      heading: 'Portfolio',
      count: (n: number) => `${n} services`,
    },
    news: {
      heading: 'AI News',
      live: 'Live · 6h',
    },
    footer: {
      cta: 'Ask for service →',
    },
  },
  th: {
    hero: {
      badge: 'พร้อมรับงาน',
      h1a: 'สร้างธุรกิจฉลาดขึ้น',
      h1b: 'ด้วย AI',
      h1c: 'อย่างมีประสิทธิภาพ',
      sub: 'ที่ปรึกษา AI ครบวงจร — ตั้งแต่ระบบอัตโนมัติเบื้องต้นจนถึง AI Agent อิสระ',
      cta: 'ติดต่อฉัน →',
    },
    about: {
      tagline: 'ที่ปรึกษา AI ครบวงจร — ตั้งแต่กลยุทธ์จนถึงการใช้งานจริง',
      tags: ['การผสาน LLM', 'ระบบ AI Agent', 'ระบบอัตโนมัติ', 'RAG & ฐานความรู้', 'กลยุทธ์ AI', 'Prompt Engineering'],
    },
    showcase: {
      heading: 'ผลงาน',
      count: (n: number) => `${n} บริการ`,
    },
    news: {
      heading: 'ข่าว AI',
      live: 'สด · 6ชม',
    },
    footer: {
      cta: 'ขอรับบริการ →',
    },
  },
} as const;
