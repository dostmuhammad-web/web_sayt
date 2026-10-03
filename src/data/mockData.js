export const categories = [
  { id: 'web-development', name: 'Web Development', icon: '🌐', color: '#1dbf73' },
  { id: 'react', name: 'React', icon: '⚛️', color: '#61dafb' },
  { id: 'javascript', name: 'JavaScript', icon: '📜', color: '#f7df1e' },
  { id: 'ui-ux', name: 'UI/UX', icon: '🎨', color: '#ff6b6b' },
  { id: 'graphic-design', name: 'Graphic Design', icon: '🖌️', color: '#9b59b6' },
  { id: 'video-editing', name: 'Video Editing', icon: '🎬', color: '#e74c3c' },
  { id: 'translation', name: 'Translation', icon: '🌍', color: '#3498db' },
  { id: 'writing', name: 'Writing', icon: '✍️', color: '#2ecc71' },
  { id: 'seo', name: 'SEO', icon: '📈', color: '#f39c12' },
  { id: 'marketing', name: 'Marketing', icon: '📢', color: '#e67e22' },
  { id: 'mobile-development', name: 'Mobile Development', icon: '📱', color: '#34495e' },
]

const firstNames = ['Alex','Sarah','James','Emma','Michael','Sofia','David','Olivia','Daniel','Isabella','Chris','Mia','Ryan','Ava','John','Lily','Robert','Chloe','Kevin','Grace','Mark','Eva','Andrew','Zoe','Brian','Hannah','Thomas','Luna','Peter','Nora','Jason','Leila','Paul','Yasmin','Eric','Aisha','Sam','Maya','Victor','Anna','George','Sana','Frank','Nina','Oscar','Dina','Leo','Mila','Adam','Kara','Steve','Ruth','Helen','Alice','Bob','Carol','Derek','Lucy','Nadia','Farid','Umid','Dilnoza','Aziz','Jasur','Malika','Bekzod','Sevara','Shahzod','Madina']
const lastNames = ['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez','Martinez','Hernandez','Lopez','Gonzalez','Wilson','Anderson','Thomas','Taylor','Moore','Jackson','Martin','Lee','Perez','Thompson','White','Harris','Kim','Chen','Patel','Ali','Khan','Ivanov','Petrov','Sidorov','Karimov','Rahimov','Azizov','Yusupov','Ismoilov','Qodirov','Nazarov','Toshmatov']
const professionsByCat = {
  'web-development': ['Full Stack Developer','WordPress Expert','Web Developer','Backend Developer'],
  'react': ['React Developer','Frontend Engineer','Next.js Expert','React Native Dev'],
  'javascript': ['JavaScript Developer','Node.js Developer','Full Stack JS','TypeScript Expert'],
  'ui-ux': ['UI/UX Designer','Product Designer','UX Researcher','Figma Expert'],
  'graphic-design': ['Graphic Designer','Brand Designer','Illustrator','Logo Designer'],
  'video-editing': ['Video Editor','Motion Designer','After Effects Expert','YouTube Editor'],
  'translation': ['Translator','Interpreter','Localization Expert','Proofreader'],
  'writing': ['Content Writer','Copywriter','Technical Writer','Ghostwriter'],
  'seo': ['SEO Specialist','SEO Consultant','Link Builder','Content SEO'],
  'marketing': ['Digital Marketer','Social Media Manager','Ads Specialist','Growth Hacker'],
  'mobile-development': ['Mobile Developer','Flutter Developer','iOS Developer','Android Developer'],
}
const skillsByCat = {
  'web-development': ['HTML','CSS','PHP','WordPress','Laravel','MySQL','REST API','Webflow'],
  'react': ['React.js','Next.js','Redux','Tailwind','TypeScript','GraphQL','Jest','Vite'],
  'javascript': ['JavaScript','Node.js','Express','MongoDB','Vue.js','ES6+','Webpack','Socket.io'],
  'ui-ux': ['Figma','Adobe XD','Sketch','Prototyping','Wireframing','User Research','Design System','Principle'],
  'graphic-design': ['Photoshop','Illustrator','InDesign','Branding','Logo','Poster','Packaging','Typography'],
  'video-editing': ['Premiere Pro','After Effects','DaVinci','Final Cut','Motion Graphics','Color Grading','Sound Design','Animation'],
  'translation': ['English','Russian','Uzbek','German','French','Spanish','Arabic','Turkish'],
  'writing': ['Blog Writing','Copywriting','SEO Writing','Editing','Proofreading','Storytelling','Research','Ghostwriting'],
  'seo': ['On-Page SEO','Off-Page SEO','Keyword Research','Technical SEO','Backlinks','Analytics','GSC','SERP'],
  'marketing': ['Facebook Ads','Google Ads','Instagram','Email Marketing','Funnel','Analytics','Strategy','Content Marketing'],
  'mobile-development': ['Flutter','React Native','Swift','Kotlin','Firebase','Dart','iOS','Android'],
}

const serviceTitles = {
  'web-development': [
    'Professional WordPress website development','Custom e-commerce store with Shopify','Landing page design that converts','Full stack web app with MERN','Business website with admin panel','Speed optimization for WordPress','Responsive website from Figma to code','Booking system website development','Portfolio website for creatives','SaaS dashboard development','Membership website with payments','Real estate listing website','Restaurant ordering website','Clinic appointment website','Educational LMS platform','Custom CMS development','API integration services','Website redesign & modernization','Bug fixing and maintenance','Webflow to WordPress conversion','WooCommerce store setup','Payment gateway integration','Multilingual website setup','Website security & backup setup','PWA progressive web app',
  ],
  'react': [
    'Modern React single page application','Next.js SEO optimized website','React admin dashboard with charts','E-commerce frontend in React','React + Redux Toolkit app','Migrate class components to hooks','React performance optimization','Custom React component library','React form with validation','Real-time chat app with React','React portfolio with animations','Booking calendar in React','React + TypeScript enterprise app','Headless CMS with React','React testing with Jest & RTL','React + Firebase app','Infinite scroll & pagination','React drag & drop builder','React Native cross platform app','Gatsby static site generation','React + GraphQL Apollo client','Micro frontend with React','React animation with Framer Motion','Accessible React components','SSR with Next.js 14 app router',
  ],
  'javascript': [
    'Vanilla JavaScript interactive website','Node.js REST API development','Chrome extension with JavaScript','JavaScript bug fixing & refactoring','Interactive data visualization D3.js','Real-time app with Socket.io','JavaScript game development','Automate tasks with Node.js','Convert PSD to JavaScript app','ES6 modernization of legacy code','Custom slider & carousel with JS','JavaScript PDF generator','Node.js + MongoDB backend','Discord bot with JavaScript','Electron desktop app','Three.js 3D web experience','JavaScript form automation','Web scraping with Puppeteer','JavaScript email automation','Vue.js to vanilla JS migration','TypeScript migration services','JavaScript unit testing setup','Webpack configuration & optimization','JWT authentication implementation','PWA with vanilla JavaScript',
  ],
  'ui-ux': [
    'Modern app UI/UX design in Figma','Landing page UX that converts visitors','Mobile app UX research & prototypes','Dashboard UI design system','Website redesign with UX audit','Wireframes & user flows for startup','E-commerce UX optimization','SaaS product design from scratch','Design system for scaleups','User interview & persona creation','Figma auto-layout & components','Neumorphism & glassmorphism UI','Dark mode UI design','Onboarding flow UX design','Checkout flow optimization','Accessibility WCAG audit','iOS & Android app design','NFT marketplace UI design','Crypto dashboard UI','AI tool interface design','Figma to Framer prototype','UX writing & microcopy','Competitor UX analysis','A/B test design variations','Pitch deck UI design',
  ],
  'graphic-design': [
    'Minimalist logo design 3 concepts','Brand identity & style guide','Business card & stationery design','Social media post template pack','YouTube thumbnail design pack','Packaging & label design','T-shirt & merch design','Infographic design','Flyer & brochure design','Icon set custom design','Illustration for website hero','Book cover design','Menu design for restaurant','Poster for event','Pitch deck design','Pattern & textile design','3D mockup for product','Brand mascot illustration','Real estate flyer design','Wedding invitation design','Car wrap design','Album cover artwork','NFT collection design','Letterhead & envelope design','Resume & portfolio design',
  ],
  'video-editing': [
    'YouTube video editing with effects','Reels & TikTok viral editing','Podcast video editing','Wedding highlight cinematic edit','Corporate promo video edit','Music video creative cut','Animated logo intro','Subtitles & captions editing','Color grading cinematic look','Sound design & mixing','Green screen keying & compositing','Travel vlog editing','Gaming montage edit','Real estate video tour','Explainer video editing','Documentary storytelling edit','Ads video for Facebook','Event recap video','Slow motion & transitions','4K video editing & export','Intro & outro animation','Vertical video for shorts','Interview multi-cam edit','Stop motion video edit','AI enhanced video upscaling',
  ],
  'translation': [
    'English to Russian accurate translation','Technical document translation','Website localization EN-RU-UZ','Legal contract translation','Medical report translation','Book & ebook translation','Video subtitles translation','App localization & strings','Certified academic translation','Marketing copy transcreation','Urgent 24h translation service','Proofreading & editing translation','Uzbek to English native translation','German to English business translation','Arabic to English translation','French translation with formatting','Spanish subtitle translation','Turkish to English translation','Chinese business translation','Korean drama subtitles','Notarized translation service','Transcription + translation','CV & resume translation','E-commerce product translation','Game localization translation',
  ],
  'writing': [
    'SEO blog post 1000 words','Sales copy that converts','Technical documentation writing','LinkedIn ghostwriting service','Ebook writing 5000 words','Product description writing','Press release writing','Email newsletter sequence','Script for YouTube video','Whitepaper for SaaS','Case study writing','Website about page storytelling','Grant proposal writing','Resume & cover letter writing','Academic essay writing','Children story book writing','Video script & storyboard','Podcast show notes writing','Landing page copy','Ad copy for Facebook & Google','Translation & rewriting service','Proofreading & editing service','Quora & Reddit content','Amazon product listing copy','ChatGPT prompt engineering guide',
  ],
  'seo': [
    'Full SEO audit & action plan','Keyword research 100 keywords','On-page SEO optimization','Technical SEO fix core web vitals','Link building 10 DA 50+ backlinks','Local SEO Google Business setup','E-commerce SEO for Shopify','YouTube SEO & ranking','Backlink disavow & cleanup','Competitor SEO gap analysis','Content SEO calendar 30 days','Schema markup implementation','SERP featured snippet optimization','Multilingual SEO hreflang setup','SEO for WordPress + RankMath','Page speed optimization 90+','Guest post outreach 5 links','SEO press release distribution','App store ASO optimization','Bing & Yandex SEO','SEO migration without loss','Monthly SEO reporting dashboard','Toxic links audit','AI content SEO optimization','Shopify SEO product optimization',
  ],
  'marketing': [
    'Facebook ads campaign setup','Instagram growth organic strategy','Email marketing automation Klaviyo','Google Ads search & display','TikTok ads viral campaign','LinkedIn B2B lead generation','Sales funnel with ClickFunnels','Influencer marketing outreach','Content calendar 30 posts','Brand strategy workshop','Community management 30 days','Viral giveaway campaign','Chatbot for Messenger & IG','Affiliate program setup','Webinar funnel marketing','Pinterest traffic strategy','Twitter X growth hacking','YouTube channel marketing','Quora & Reddit marketing','Marketing audit & roadmap','Shopify store marketing plan','Retargeting pixel & audiences','UGC video ad creative','Newsletter growth strategy','SMM monthly management',
  ],
  'mobile-development': [
    'Flutter cross-platform mobile app','React Native e-commerce app','iOS Swift native app','Android Kotlin native app','Food delivery app like UberEats','Taxi booking mobile app','Fitness tracking mobile app','Chat & messaging mobile app','E-learning mobile app','Booking & appointment app','Social media mobile app','Marketplace mobile app','Banking & fintech mobile app','Real estate listing app','Travel booking mobile app','News & blog mobile app','Music streaming mobile app','QR code scanner app','AR try-on mobile app','Offline first mobile app','Push notifications integration','In-app purchase integration','App store deployment ASO','Mobile app UI in Flutter','Migrate app to Flutter 3',
  ],
}

function seededRandom(seed){
  let x = Math.sin(seed)*10000
  return x - Math.floor(x)
}
let freelancerCounter = 1
export const freelancers = []
categories.forEach(cat => {
  const count = 8 + Math.floor(Math.random()*4) // 8-11 per category, total ~ 90+
  for(let i=0;i<count;i++){
    const fn = firstNames[Math.floor(Math.random()*firstNames.length)]
    const ln = lastNames[Math.floor(Math.random()*lastNames.length)]
    const name = `${fn} ${ln}`
    const profList = professionsByCat[cat.id]
    const prof = profList[Math.floor(Math.random()*profList.length)]
    const rating = (3.8 + Math.random()*1.2).toFixed(1)
    const numRating = parseFloat(rating)
    const completed = 12 + Math.floor(Math.random()*420)
    const hourly = 10 + Math.floor(Math.random()*90)
    const levelRand = Math.random()
    let level = 'Level 1'
    if(levelRand>0.85) level='Top Rated'
    else if(levelRand>0.6) level='Level 2'
    const skillPool = skillsByCat[cat.id]
    const skills = [...skillPool].sort(()=>0.5-Math.random()).slice(0, 5+Math.floor(Math.random()*3))
    const avatarId = freelancerCounter
    const id = `f-${freelancerCounter++}`
    freelancers.push({
      id,
      name,
      avatar: `https://i.pravatar.cc/300?img=${(avatarId % 70)+1}`,
      profession: prof,
      category: cat.id,
      categories: [cat.id, categories[Math.floor(Math.random()*categories.length)].id],
      rating: numRating,
      reviewsCount: Math.floor(completed * 0.7 + Math.random()*20),
      completedJobs: completed,
      hourlyRate: hourly,
      skills,
      level,
      location: ['Tashkent, UZ','New York, US','London, UK','Berlin, DE','Dubai, AE','Istanbul, TR','Seoul, KR'][Math.floor(Math.random()*7)],
      languages: ['English','Russian','Uzbek'].slice(0, 2+Math.floor(Math.random()*2)).join(', '),
      memberSince: `${2018+Math.floor(Math.random()*6)}`,
      about: `I'm a ${prof} with ${3+Math.floor(Math.random()*8)} years experience. I specialize in ${skills.slice(0,3).join(', ')}. I deliver high-quality work on time and provide unlimited support. Let's build something amazing together! 100% satisfaction guarantee.`,
      portfolio: Array.from({length: 6}, (_,k)=> `https://picsum.photos/seed/${id}-${k}/600/400`),
      reviews: Array.from({length: 3+Math.floor(Math.random()*5)}, (_,k)=> ({
        id: `${id}-r-${k}`,
        author: firstNames[Math.floor(Math.random()*firstNames.length)],
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)+1}`,
        rating: 4 + Math.floor(Math.random()*2),
        text: ['Great work! Very professional and fast delivery.','Excellent communication and quality. Highly recommended!','Delivered on time with amazing quality. Will hire again.','Outstanding freelancer, understood requirements perfectly.','Super fast and high quality, 5 stars!'][Math.floor(Math.random()*5)],
        date: `2024-${String(2+Math.floor(Math.random()*10)).padStart(2,'0')}-${String(5+Math.floor(Math.random()*20)).padStart(2,'0')}`
      }))
    })
  }
})

// ensure at least 85 freelancers
while(freelancers.length < 85){
  freelancers.push({...freelancers[0], id:`f-extra-${freelancers.length}`, name: `Extra Freelancer ${freelancers.length}`})
}

export const services = []
let serviceId = 1
categories.forEach(cat=>{
  const titles = serviceTitles[cat.id]
  // repeat to reach 50+
  const expanded = []
  while(expanded.length < 52){
    expanded.push(...titles.map(t=> t))
  }
  expanded.slice(0,52).forEach((baseTitle, idx)=>{
    const freelancer = freelancers.filter(f=> f.category===cat.id || f.categories.includes(cat.id))[idx % freelancers.filter(f=> f.category===cat.id || f.categories.includes(cat.id)).length] || freelancers[idx % freelancers.length]
    const variantSuffixes = ['Pro','Premium','Fast Delivery','+ Revisions','2024 Edition','For Startups','Enterprise','Minimal','Creative','Modern']
    const title = idx < titles.length ? `I will ${baseTitle.toLowerCase()}` : `I will ${baseTitle.toLowerCase()} ${variantSuffixes[idx % variantSuffixes.length].toLowerCase()}`
    const rating = (4.2 + Math.random()*0.8).toFixed(1)
    const reviews = 5 + Math.floor(Math.random()*300)
    const basePrice = 20 + Math.floor(Math.random()*480) // 20-500
    const deliveryOptions = [1,2,3,5,7,10,14]
    const delivery = deliveryOptions[Math.floor(Math.random()*deliveryOptions.length)]
    const imageSeed = `${cat.id}-${idx}`
    services.push({
      id: `s-${serviceId++}`,
      title: title.charAt(0).toUpperCase()+title.slice(1),
      category: cat.id,
      categoryName: cat.name,
      image: `https://picsum.photos/seed/${imageSeed}/600/400`,
      images: [
        `https://picsum.photos/seed/${imageSeed}-1/800/500`,
        `https://picsum.photos/seed/${imageSeed}-2/800/500`,
        `https://picsum.photos/seed/${imageSeed}-3/800/500`,
      ],
      freelancerId: freelancer.id,
      freelancerName: freelancer.name,
      freelancerAvatar: freelancer.avatar,
      freelancerLevel: freelancer.level,
      rating: parseFloat(rating),
      reviewsCount: reviews,
      price: basePrice,
      deliveryTime: delivery,
      revisions: [1,2,3,5,'Unlimited'][Math.floor(Math.random()*5)],
      description: `Looking for ${baseTitle.toLowerCase()}? You are in the right place!\n\nI will provide professional ${cat.name.toLowerCase()} service with attention to detail and modern standards. Includes:\n✓ 100% Satisfaction guarantee\n✓ Fast delivery & quick response\n✓ Unlimited revisions (per package)\n✓ Source files included\n✓ Commercial rights\n\nWhy choose me?\n- ${freelancer.completedJobs}+ projects completed\n- ${freelancer.rating} star rating\n- ${freelancer.level} seller\n- Expert in ${freelancer.skills.slice(0,3).join(', ')}\n\nContact me before ordering for custom offer!`,
      skills: freelancer.skills.slice(0,3),
      packages: {
        basic: { name:'Basic', price: basePrice, delivery: delivery, revisions: 2, features:['1 concept','Source file','2 revisions'] },
        standard: { name:'Standard', price: Math.round(basePrice*1.8), delivery: Math.max(2, delivery-1), revisions: 5, features:['3 concepts','Source file','5 revisions','Priority support'] },
        premium: { name:'Premium', price: Math.round(basePrice*3.2), delivery: Math.max(1, delivery), revisions: 'Unlimited', features:['Unlimited concepts','Source + 3D mockup','Unlimited revisions','VIP support','Money back'] },
      },
      faqs: [
        {q:'What do you need to start?', a:'Just send me your requirements and any reference files.'},
        {q:'Do you provide source files?', a:'Yes, all packages include source files.'},
        {q:'How fast can you deliver?', a:`I can deliver in ${delivery} days standard, rush delivery available.`},
      ]
    })
  })
})

export function getFreelancerById(id){ return freelancers.find(f=>f.id===id)}
export function getServiceById(id){ return services.find(s=>s.id===id)}
export function getServicesByCategory(catId){ return services.filter(s=>s.category===catId)}
