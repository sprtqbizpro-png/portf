export const skills = [
{title:'Frontend',items:['React.js','Next.js','Angular','Vue.js','Nuxt.js','HTML5','CSS3','JavaScript','TypeScript']},
{title:'Backend & APIs',items:['Node.js','Express.js','NestJS','Fastify','Hono','Django','Flask','FastAPI','Spring Boot','REST API','GraphQL']},
{title:'AI & Voice Agents',items:['PyTorch','TensorFlow','Keras','LangChain','LangGraph','RAG','OpenAI']},
{title:'Mobile & Android',items:['Kotlin','Java','Swift','React Native','Flutter','Native iOS']},
{title:'Databases',items:['PostgreSQL','MySQL','MariaDB','Microsoft SQL Server','Oracle Database','SQLite','MongoDB','Supabase']},
{title:'Cloud, DevOps & Automation',items:['AWS','Microsoft Azure','Vercel','Docker','Google Cloud Platform']},
{title:'Web3 & Blockchain',items:['Solidity','Rust','Ethereum','Solana','Ethers.js','Viem','Web3.js']},
{title:'Tools & Collaboration',items:['Git','GitHub','GitLab','Visual Studio Code','Jira','Slack','Agile/Scrum']},
];
export type Project = {name:string,url:string,description:string,role:string,category:string,accent:string};
export const projects:Project[] = [
{name:"AnyTrack",url:"https://anytrack.io",description:"Tracks marketing campaigns and customer journeys across ads, websites, and conversion events.",role:"Build tracking scripts, conversion APIs, attribution dashboards, integrations, and billing.",category:"Marketing",accent:"#59d9ec"},
{name:"Webhook.site",url:"https://webhook.site",description:"Lets developers create temporary URLs to inspect, test, and debug incoming webhooks.",role:"Build request capture, real-time inspection, payload history, API endpoints, and team workspaces.",category:"Developer Tools",accent:"#59d9ec"},
{name:"Cronitor",url:"https://cronitor.io",description:"Monitors cron jobs, background tasks, and scheduled workflows by detecting missed or failed runs.",role:"Build ping endpoints, alert rules, incident history, integrations, dashboards, and billing.",category:"Developer Tools",accent:"#59d9ec"},
{name:"Hypefury",url:"https://hypefury.com",description:"Social-media growth and scheduling tool focused on Twitter/X creators and automation.",role:"Build post scheduling, engagement automation, analytics, account connections, queues, and billing.",category:"Marketing",accent:"#59d9ec"},
{name:"Plutio",url:"https://plutio.com",description:"All-in-one business-management platform for freelancers, agencies, and small businesses.",role:"Build projects, tasks, invoices, proposals, client portals, time tracking, and team collaboration.",category:"Productivity",accent:"#59d9ec"},

{name:'Bannerbear',url:'https://bannerbear.com',description:'API-driven image, banner, and video generation from templates.',role:'Template editor, image-rendering API, queues, billing, and admin dashboard.',category:'Developer Tools',accent:'#d7c5ff'},
{name:'ScreenshotOne',url:'https://screenshotone.com',description:'Website screenshot and PDF generation API.',role:'Screenshot API, browser automation, caching, API keys, rate limits, and billing.',category:'Developer Tools',accent:'#b8e1ff'},
{name:'PDF.ai',url:'https://pdf.ai',description:'AI-powered PDF chat, search, and information extraction.',role:'PDF upload, text extraction, AI chat interface, vector search, and document permissions.',category:'AI & Automation',accent:'#f8d5f2'},
{name:'Senja',url:'https://senja.io',description:'Collect testimonials and publish social proof.',role:'Feedback collection, testimonial walls, embeds, customization, analytics, and team workspaces.',category:'Marketing',accent:'#ded1ff'},
{name:'Buttondown',url:'https://buttondown.email',description:'Newsletter publishing and subscriber management.',role:'Newsletter editor, subscriber management, email delivery, analytics, and paid subscriptions.',category:'Marketing',accent:'#d5e9c1'},
{name:'Vemetric',url:'https://vemetric.com',description:'Vemetric is an open-source, privacy-first analytics platform that combines website analytics and product analytics. It tracks page views, custom events, user behavior, and funnels while using cookieless tracking and EU-based hosting.',role:'Senior Full Stack Developer — Build the analytics dashboard, event-tracking SDK, data-ingestion API, funnel and retention reports, multi-tenant workspaces, role-based access, subscription billing, and scalable data pipeline.',category:'Analytics & Finance',accent:'#cde9dc'},
{name:'Healthchecks',url:'https://healthchecks.io',description:'Cron and scheduled-task monitoring.',role:'Cron monitoring, ping endpoints, alert rules, incident history, and notification integrations.',category:'Developer Tools',accent:'#d7e7f7'},
{name:'TrustMRR',url:'https://trustmrr.com',description:'SaaS revenue metrics and public dashboards.',role:'Revenue tracking, subscription metrics, charts, data connections, and public dashboard pages.',category:'Analytics & Finance',accent:'#c9ead8'},
{name:'Carrd',url:'https://carrd.co',description:'Simple one-page websites and landing pages.',role:'Page builder, templates, custom domains, publishing, user accounts, and premium plans.',category:'Productivity',accent:'#ffded0'},
{name:'Remote OK',url:'https://remoteok.com',description:'Remote jobs, company profiles, and applications.',role:'Job listings, company profiles, applications, search, payments, moderation, and employer dashboards.',category:'Platforms',accent:'#f3d4d1'},
];
