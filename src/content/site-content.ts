export const siteConfig = {
  name: "RayStar Media",
  tagline: "Premium Digital Marketing for the Trading Ecosystem",
  url: "https://raystarmedia.com",
  email: "hello@raystarmedia.com",
  whatsapp: "+91 00000 00000",
  whatsappLink: "https://wa.me/9100000000000",
  linkedin: "https://linkedin.com/company/raystarmedia",
  calendly: "https://calendly.com/raystarmedia/strategy-call",
  location: "Mumbai, India",
  parentCompany: "Raystar Group",
  copyright: "© 2025 RayStar Media. All rights reserved.",
  acceptingClients: true,
} as const;

export const navigation = {
  logo: "RAYSTAR",
  links: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Book Strategy Call",
    href: "/strategy-call",
  },
} as const;

export const uiCopy = {
  learnMore: "Learn More",
  backToInsights: "Back to Insights",
  viewAllServices: "View All Services",
  bookStrategyCall: "Book Strategy Call",
  readyToGetStarted: "Ready to get started?",
  timeline: "Timeline",
  calendlyEmbed: "CALENDLY_EMBED",
  selectTimeSlot:
    "Select a time slot below to book your 30-minute strategy call.",
  whatsIncluded: "What\'s Included",
  whoThisIsFor: "Who This Is For",
  comingSoon:
    "This article is coming soon. RayStar Media is preparing in-depth insights drawn from real industry experience — not generic marketing advice.",
  strategyPrompt:
    "Want to discuss this topic with someone who has worked inside the industry?",
} as const;

export const ticker = {
  items: [
    { symbol: "EURUSD", value: "1.0842", change: "+0.12%", direction: "up" as const },
    { symbol: "GBPUSD", value: "1.2634", change: "-0.08%", direction: "down" as const },
    { symbol: "XAUUSD", value: "2,341.50", change: "+0.34%", direction: "up" as const },
    { symbol: "BTCUSD", value: "67,420", change: "+1.2%", direction: "up" as const },
    { symbol: "USDJPY", value: "154.32", change: "-0.22%", direction: "down" as const },
    { symbol: "NASDAQ", value: "18,204", change: "+0.45%", direction: "up" as const },
    { symbol: "CRUDE OIL", value: "82.14", change: "-0.19%", direction: "down" as const },
  ],
} as const;

export const homePage = {
  hero: {
    badge: "Fintech Marketing Specialists",
    headline: "Most marketing agencies don't know what a pip is. We do.",
    subheadline:
      "We help forex brokers, prop trading firms, trading academies, signal providers, and trading educators acquire more traders and students — through marketing built by people who have worked inside the industry. Not observers. Insiders.",
    primaryCta: { label: "Book Strategy Call", href: "/strategy-call" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    terminalLines: [
      "> initializing growth engine...",
      "> loading trader acquisition modules",
      "> compliance filters: active",
      "> targeting: forex · prop · academy · signals",
      "> status: ready_to_scale",
    ],
  },
  whoWeHelp: {
    label: "Who We Help",
    headline: "Built for the entire trading ecosystem",
    description:
      "From brokers to educators — we speak your language because we've worked inside your world.",
    segments: [
      { id: "TYPE_01", title: "Forex Brokers", description: "Acquire funded traders with compliant, high-converting campaigns." },
      { id: "TYPE_02", title: "Prop Trading Firms", description: "Recruit funded traders and build brand authority in competitive markets." },
      { id: "TYPE_03", title: "Trading Academies", description: "Fill cohorts with students who are ready to learn and invest." },
      { id: "TYPE_04", title: "Signal Providers", description: "Grow subscribers through Telegram-first funnels and paid acquisition." },
      { id: "TYPE_05", title: "Fintech Companies", description: "Launch and scale financial products with industry-native marketing." },
      { id: "TYPE_06", title: "Financial Media", description: "Build audience and monetize content across trading communities." },
      { id: "TYPE_07", title: "Affiliate Networks & IBs", description: "Scale partner acquisition with performance-driven campaigns." },
    ],
  },
  whyRaystar: {
    label: "Why RayStar",
    headline: "We don't learn your industry on your budget.",
    description:
      "Generic agencies treat financial marketing like any other vertical. We treat it like the specialized discipline it is.",
    points: [
      {
        title: "Trader psychology, decoded",
        description:
          "We understand how traders think, what makes them convert, and what makes them leave — because we've seen it from inside a broker.",
      },
      {
        title: "Compliance-first creatives",
        description:
          "We know what Meta flags in financial ads — and how to build compliant creatives that actually run and convert.",
      },
      {
        title: "Industry insiders",
        description:
          "We speak broker before we speak marketer — whether your world is broking, prop trading, education, or signals, it's our world too.",
      },
    ],
  },
  servicesPreview: {
    label: "Services",
    headline: "Marketing engineered for financial markets",
    description: "Every service is built around one reality — the trading ecosystem operates differently.",
    cta: { label: "View All Services", href: "/services" },
    services: [
      {
        id: "SVC_01",
        icon: "target",
        title: "Trader Acquisition Campaigns",
        description: "Paid ads built for lead generation across brokers, academies, and signal services.",
        href: "/services/trader-acquisition-campaigns",
      },
      {
        id: "SVC_06",
        icon: "share2",
        title: "Social Media & Content",
        description: "Real market content, not recycled quotes — built for engagement and conversion.",
        href: "/services/social-media-organic",
      },
      {
        id: "SVC_09",
        icon: "trending-up",
        title: "Full Growth Retainer",
        description: "One dedicated fintech marketing partner for end-to-end growth.",
        href: "/services/fintech-marketing-consulting",
      },
    ],
  },
  process: {
    label: "Our Process",
    headline: "A systematic approach to trading industry growth",
    description: "No guesswork. No generic playbooks. A proven framework built for fintech.",
    steps: [
      {
        number: "01",
        title: "Discovery & Audit",
        description: "Deep dive into your current marketing, ad accounts, funnels, and competitive landscape.",
      },
      {
        number: "02",
        title: "Strategy & Architecture",
        description: "Build a compliant, channel-specific growth plan mapped to your acquisition goals.",
      },
      {
        number: "03",
        title: "Creative & Launch",
        description: "Develop industry-native creatives, landing pages, and campaigns ready for deployment.",
      },
      {
        number: "04",
        title: "Optimize & Scale",
        description: "Continuous A/B testing, performance tracking, and scaling what works.",
      },
    ],
  },
  faq: {
    label: "FAQ",
    headline: "Common questions",
    description: "Everything you need to know before we start working together.",
    items: [
      {
        question: "Do you only work with forex brokers?",
        answer:
          "No. While forex brokers are our core expertise, we serve the entire trading ecosystem — prop trading firms, trading academies, signal providers, trading educators, fintech companies, and affiliate networks.",
      },
      {
        question: "How do you handle Meta ad compliance for financial services?",
        answer:
          "We've managed financial ad accounts through countless review cycles. Our creatives are built with compliance in mind from day one — proper disclaimers, approved messaging frameworks, and landing pages that meet platform requirements.",
      },
      {
        question: "What makes you different from a generic digital agency?",
        answer:
          "Our founder has worked inside a forex broker running digital marketing. We understand trader psychology, cost-per-deposit metrics, and the nuances of financial advertising that generic agencies consistently get wrong.",
      },
      {
        question: "What's the minimum engagement?",
        answer:
          "We work on both project-based and retainer models. During your strategy call, we'll recommend the best approach based on your goals, budget, and current marketing maturity.",
      },
      {
        question: "Do you work with clients outside India?",
        answer:
          "Yes. We serve clients globally — with particular strength in India, Middle East, and Southeast Asia markets where we've run extensive campaigns.",
      },
      {
        question: "How quickly can we get started?",
        answer:
          "After your strategy call, we typically begin onboarding within one week. Campaign launches depend on scope — simple paid ad campaigns can go live within 2-3 weeks.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Book a Strategy Call",
    headline: "A more useful way to start the conversation",
    description:
      "Share a few details and we'll come prepared with a sharper, more relevant strategy discussion. If the fit is right, we'll map your next growth move together.",
    benefits: [
      "A quick view of what is holding back your acquisition",
      "Practical recommendations tailored to your market",
      "A direct path to a strategy call, without the fluff",
    ],
    cta: { label: "Book Strategy Call", href: "/strategy-call" },
    highlights: [
      "Honest audit of your current marketing",
      "Specific recommendations for your business",
      "No pitch, no pressure, no obligation",
    ],
    form: {
      title: "Book a Call With Us",
      description: "Premium strategy session built for founders who want clear direction.",
      fields: {
        firstName: { label: "First Name", placeholder: "First name" },
        lastName: { label: "Last Name", placeholder: "Last name" },
        workEmail: { label: "Work Email", placeholder: "you@company.com" },
        phone: { label: "Phone", placeholder: "+91 98765 43210" },
      },
      submit: "Book Strategy Call",
      note:
        "By submitting, you agree to receive communications from RayStar Media in accordance with our Privacy Policy.",
    },
  },
} as const;

export const servicesPage = {
  label: "Services",
  headline: "What we do — and why it works differently in financial markets",
  description:
    "Financial advertising has rules, nuances, and audience psychology that generic agencies consistently get wrong. Every service we offer is built around one reality — the trading ecosystem operates differently. We operate inside it, whether you're a forex broker, a prop trading firm, a trading academy, or a signal provider.",
  cta: { label: "Book Strategy Call", href: "/strategy-call" },
} as const;

export const services = [
  {
    id: "SVC_01",
    slug: "trader-acquisition-campaigns",
    name: "Trader Acquisition Campaigns",
    category: "Paid Advertising",
    icon: "target",
    summary: "Paid ads across every major platform — built for lead generation across the trading ecosystem.",
    headline: "Ads that get past the algorithm and past the skepticism",
    overview:
      "Paid ads across every major platform — Meta, Google, YouTube, Twitter/X, Reddit, Quora, TikTok, and Telegram (Euro Cabinet and TON ads). Built for lead generation across the trading ecosystem — brokers acquiring live traders, academies filling cohorts, signal providers growing subscribers, and prop firms recruiting funded traders.",
    included: [
      "Platform strategy and audience research built on trader behaviour signals, not generic interest targeting",
      "Compliant ad creatives that survive financial-vertical ad review",
      "Landing page and funnel alignment for each campaign",
      "Ongoing optimisation and A/B testing",
      "Monthly performance reporting with cost-per-lead and cost-per-deposit tracking",
    ],
    audience: ["Forex brokers", "Prop trading firms", "Trading academies", "Signal providers", "Fintech companies"],
    cta: "Book a strategy call to see what a compliant, high-converting funnel looks like for your business",
  },
  {
    id: "SVC_02",
    slug: "seo-search-visibility",
    name: "SEO and Search Visibility",
    category: "SEO",
    icon: "search",
    summary: "Search engine optimisation built for fintech — broker review targeting and trading audience keywords.",
    headline: "Rank where your next trader, student, or subscriber is already searching",
    overview:
      "Search engine optimisation built for fintech — broker review targeting, keyword strategy for trading audiences, and long-form content that ranks. More organic traffic means cheaper and more consistent acquisition over time, whether you're a broker chasing review-page rankings or an academy or signal service chasing course and subscription keywords.",
    included: [
      "Keyword research mapped to trading, education, and signal-service search intent",
      "On-page and technical SEO audits",
      "Long-form content built around real trader and student questions",
      "Broker and platform review-page strategy",
      "Monthly ranking and traffic reporting",
    ],
    audience: ["Forex brokers", "Trading academies", "Signal providers", "Fintech platforms"],
    cta: "Book a call to get a free SEO snapshot of where you stand today",
  },
  {
    id: "SVC_03",
    slug: "web-landing-page-development",
    name: "Website and Landing Page Development",
    category: "Web Development",
    icon: "globe",
    summary: "High-converting websites and landing pages built specifically for the trading and fintech industry.",
    headline: "Websites and landing pages built to convert, not just look good",
    overview:
      "High-converting websites and landing pages built specifically for the trading and fintech industry. Designed to turn visitors into signups — whether that's a broker account, an academy enrolment, or a signal subscription.",
    included: [
      "Custom website design and development",
      "Landing pages for individual campaigns and offers",
      "Conversion-focused UX for account signups, enrolments, or subscriptions",
      "Mobile-first, fast-loading builds",
      "CRM and analytics integration",
    ],
    audience: ["Forex brokers", "Prop trading firms", "Trading academies", "Signal providers"],
    cta: "Book a call to discuss your website or landing page project",
  },
  {
    id: "SVC_04",
    slug: "graphic-design-video",
    name: "Graphic Design and Video Editing",
    category: "Creative",
    icon: "palette",
    summary: "Ad creatives, social media graphics, and promotional videos built with financial compliance in mind.",
    headline: "Creative that's built for financial compliance, not just aesthetics",
    overview:
      "Ad creatives, social media graphics, banner ads, promotional videos, reels, and brand design — all built with financial market compliance and conversion in mind, for brokers, academies, prop firms, and signal services alike.",
    included: [
      "Ad creative design for paid campaigns",
      "Social media graphics and templates",
      "Promotional and educational video editing",
      "Reels and short-form video content",
      "Brand identity and design systems",
    ],
    audience: ["Any business across the trading ecosystem needing on-brand, compliant creative"],
    cta: "Book a call to talk through your next campaign or brand refresh",
  },
  {
    id: "SVC_05",
    slug: "events-webinars",
    name: "Finance Webinars and Online Events",
    category: "Events",
    icon: "video",
    summary: "End-to-end event marketing for trading webinars, seminars, and live sessions.",
    headline: "Full-funnel promotion for webinars, seminars, and live sessions",
    overview:
      "End-to-end event marketing for trading webinars, broker seminars, academy live classes, live trading sessions, and investment events. Includes registration campaigns, reminder sequences, live promotion, and post-event follow-up.",
    included: [
      "Registration campaign strategy and paid promotion",
      "Reminder and nurture sequences",
      "Live event promotion across channels",
      "Post-event follow-up and conversion sequences",
      "Recording repurposing for ongoing content",
    ],
    audience: ["Forex brokers", "Trading academies", "Prop trading firms hosting webinars or seminars"],
    cta: "Book a call to plan your next event launch",
  },
  {
    id: "SVC_06",
    slug: "social-media-organic",
    name: "Social Media Organic Management",
    category: "Social Media",
    icon: "share2",
    summary: "Full organic management with market analysis posts and educational content.",
    headline: "Content that reflects real market conditions, not recycled quotes",
    overview:
      "Full organic management across Facebook, Instagram, LinkedIn, YouTube, Twitter/X, Quora, and Reddit. Market analysis posts, educational content, promotions, trading news, and community engagement — content that reflects real market conditions, whether the account belongs to a broker, an academy, or a signal provider.",
    included: [
      "Content calendar and strategy",
      "Market analysis and educational posts",
      "Community management and engagement",
      "Platform-specific content formatting",
      "Monthly performance reporting",
    ],
    audience: ["Forex brokers", "Trading academies", "Signal providers", "Prop trading firms"],
    cta: "Book a call to see a sample content calendar for your niche",
  },
  {
    id: "SVC_07",
    slug: "telegram-full-stack",
    name: "Telegram Full Stack",
    category: "Telegram",
    icon: "send",
    summary: "The most complete Telegram offering in fintech marketing.",
    headline: "The most complete Telegram offering in fintech marketing",
    overview:
      "Everything Telegram: organic content and channel management, community growth, paid Telegram ads (Euro Cabinet and TON ads), Telegram bot development (signal delivery, subscription management, lead capture, onboarding automation), and end-to-end signal service setup — particularly relevant for signal providers and academies running paid communities.",
    included: [
      "Channel content and community management",
      "Paid Telegram advertising",
      "Bot development for signal delivery and subscriptions",
      "Lead capture and onboarding automation",
      "Full signal service setup and monetisation strategy",
    ],
    audience: ["Signal providers", "Forex brokers", "Trading academies and educators"],
    cta: "Book a call to see how a Telegram-first funnel could work for you",
  },
  {
    id: "SVC_08",
    slug: "whatsapp-marketing",
    name: "WhatsApp Marketing and Automation",
    category: "WhatsApp",
    icon: "message-circle",
    summary: "Full WhatsApp solution for brokers, academies, and signal services.",
    headline: "WhatsApp built for retention, not just broadcast",
    overview:
      "Full WhatsApp solution for brokers, academies, and signal services operating in India, Middle East, and Southeast Asia. WhatsApp Business API setup, broadcast campaigns, automated onboarding sequences, bot development, re-engagement campaigns, and CRM integration.",
    included: [
      "WhatsApp Business API setup",
      "Broadcast campaign strategy",
      "Automated onboarding sequences",
      "Bot development for smooth client or student retention",
      "Re-engagement campaigns for dormant traders or students",
      "CRM integration",
    ],
    audience: ["Forex brokers", "Trading academies", "Signal providers operating in India, Middle East, and Southeast Asia"],
    cta: "Book a call to map out your WhatsApp retention flow",
  },
  {
    id: "SVC_09",
    slug: "fintech-marketing-consulting",
    name: "Fintech Marketing Consulting",
    category: "Consulting",
    icon: "lightbulb",
    summary: "Strategic guidance from someone who has sat inside a broker.",
    headline: "Strategic guidance from someone who has sat inside a broker",
    overview:
      "One-on-one strategic consulting for forex brokers, prop firms, trading academies, signal providers, and fintech companies. Covers digital marketing strategy, paid ads audit, social media positioning, Telegram and signal service advice, and full marketing roadmaps for launching from scratch.",
    included: [
      "Marketing strategy sessions",
      "Paid ad account audits",
      "Social and content positioning review",
      "Telegram and signal service monetisation advice",
      "Full launch roadmaps for new brokers, academies, or signal services",
    ],
    audience: ["Founders and marketing leads across the trading ecosystem"],
    cta: "Book a call to start the conversation",
  },
] as const;

export const aboutPage = {
  label: "About",
  headline: "Raystar Media exists because the forex and trading industry deserves marketing from someone who actually understands it.",
  founder: {
    name: "Rishab Gandhi",
    role: "Founder & CEO",
    image: "/founder/rishab-gandhi.png",
    lead: "I built Raystar Media to close the gap between trading businesses and generic marketing agencies.",
    story: [
      "I did not start from the outside looking in. I started inside the industry, working across customer operations and digital marketing at a forex broker. That experience gave me a practical view of how trader acquisition really works and where marketing budgets quietly leak.",
      "The pattern was consistent: agencies with polished decks but no understanding of trader psychology, platform compliance, or the messaging a first-time depositor actually responds to. Businesses were paying for activity, not outcomes.",
      "Raystar Media was built to fix that. We combine industry-native strategy, compliance-aware execution, and performance accountability so brokers, prop firms, academies, and signal businesses can scale with confidence.",
    ],
    cta: {
      label: "Book Strategy Call",
      href: "/strategy-call",
    },
  },
  vision: {
    label: "The Vision",
    content: [
      "Raystar Media is the first company under Raystar Group — our long-term ambition to build India's first globally recognised fintech brand. We are starting with marketing because it is where we have the deepest knowledge and the clearest advantage. But the vision is bigger than one company.",
      "We started with forex brokers because that's where our founder's direct industry experience lives — but the same principles apply across the wider trading ecosystem. Prop firms, trading academies, signal providers, and trading educators all face the same broker-shaped marketing gap, and Raystar Media is built to close it for all of them.",
    ],
    quote: "India has given the world some of the brightest financial minds. It has not yet given the world a globally trusted fintech brand. That is what we are building.",
  },
  mission: {
    label: "Mission",
    headline: "Close the marketing gap in trading",
    description:
      "To deliver marketing that understands trader psychology, respects financial compliance, and drives measurable acquisition — for every business in the trading ecosystem.",
  },
  timeline: [
    { year: "2020", title: "Inside the Industry", description: "Founder begins working directly inside a forex broker, running digital marketing operations." },
    { year: "2022", title: "The Gap Becomes Clear", description: "Witnesses firsthand how generic agencies fail brokers — compliance issues, wrong targeting, wasted budgets." },
    { year: "2024", title: "Raystar Media Founded", description: "Launched as the first company under Raystar Group, focused on fintech-native marketing." },
    { year: "2025", title: "Scaling the Ecosystem", description: "Expanding services across prop firms, academies, signal providers, and the wider trading industry." },
  ],
  raystarGroup: {
    label: "Raystar Group",
    headline: "Building India's first globally trusted fintech brand",
    description:
      "Raystar Media is the first company under Raystar Group — a long-term ambition to build India's first globally recognised fintech brand. Marketing is where we start, but the vision extends far beyond.",
  },
} as const;

export const caseStudiesPage = {
  label: "Case Studies",
  headline: "Real work. Real numbers.",
  description: "Trade log reports from campaigns we've run — not generic testimonial cards.",
  studies: [
    {
      id: "CS_01",
      instrument: "Offshore forex broker — UAE and Indian expat market",
      problem: "High cost per verified lead from Meta ads with low conversion to first deposit",
      approach: "Rebuilt audience targeting around trader behavior signals, redesigned creatives for compliance, added Telegram retargeting sequence",
      entry: "Cost per lead ₹1,400",
      exit: "Cost per lead ₹380",
      return: "-73% CPL reduction",
      duration: "6 weeks",
      status: "CLOSED — PROFITABLE",
      insight: "Most broker ad accounts fail because they target interest categories instead of behavioral signals. Traders don't always say they are traders — but their behavior online tells you exactly who they are.",
    },
  ],
} as const;

export const insightsPage = {
  label: "Insights",
  headline: "Insights from inside fintech marketing",
  description:
    "Written by people who have worked in the industry, not just studied it.",
  articles: [
    {
      slug: "forex-broker-ads-rejected-meta",
      title: "Why forex broker ads keep getting rejected on Meta — and what compliant creatives actually look like",
      excerpt: "Meta's financial ad policies are strict. Here's what actually gets approved and converts.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Paid Advertising",
    },
    {
      slug: "indian-traders-vs-middle-east-traders",
      title: "Marketing to Indian traders vs Middle East traders — the differences that change everything",
      excerpt: "Same product, different markets — the targeting and messaging shifts that matter.",
      date: "2025-01-10",
      readTime: "10 min read",
      category: "Strategy",
    },
    {
      slug: "prop-firms-reduce-paid-ad-dependency",
      title: "How prop trading firms can reduce paid ad dependency through organic content and Telegram",
      excerpt: "Building sustainable acquisition channels beyond Meta and Google.",
      date: "2025-01-05",
      readTime: "7 min read",
      category: "Organic Growth",
    },
    {
      slug: "broker-instagram-converts",
      title: "What makes a broker's Instagram page convert versus one that just gets likes",
      excerpt: "Engagement metrics lie. Here's what actually drives account signups.",
      date: "2024-12-28",
      readTime: "6 min read",
      category: "Social Media",
    },
    {
      slug: "hidden-cost-generic-agency",
      title: "The hidden cost of hiring a generic agency to market your forex broker",
      excerpt: "When cheap becomes expensive — compliance rejections, wrong targeting, and wasted deposits.",
      date: "2024-12-20",
      readTime: "9 min read",
      category: "Strategy",
    },
    {
      slug: "academies-market-like-brokers",
      title: "How trading academies and signal providers can market like regulated brokers — without the compliance team",
      excerpt: "Borrowing broker-grade marketing discipline for education and signal businesses.",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "Compliance",
    },
  ],
} as const;

export const contactPage = {
  label: "Contact",
  headline: "Tell us about your broker, firm, academy, or signal service.",
  subheadline: "We'll tell you exactly where your marketing is losing traders.",
  form: {
    fields: {
      fullName: { label: "Full Name", placeholder: "Your full name" },
      companyName: { label: "Company Name", placeholder: "Your company name" },
      companyType: {
        label: "Company Type",
        placeholder: "Select company type",
        options: [
          "Forex Broker",
          "Prop Trading Firm",
          "Trading Academy",
          "Signal Provider",
          "Trading Educator",
          "Fintech Company",
          "Financial Media",
          "Affiliate or IB",
          "Other",
        ],
      },
      message: { label: "What do you need help with?", placeholder: "Tell us about your marketing goals..." },
      budget: {
        label: "Monthly Marketing Budget",
        placeholder: "Select budget range",
        options: ["Under $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000 – $25,000", "$25,000+"],
      },
      contactMethod: {
        label: "Preferred Contact Method",
        placeholder: "Select contact method",
        options: ["Email", "WhatsApp", "LinkedIn", "Phone call"],
      },
    },
    submit: "Start the conversation →",
    success: "Message received. We'll be in touch within 24 hours.",
  },
  details: {
    title: "A faster way to get started",
    description:
      "If you already know what you need, use the form. If you want a lighter touch first, reach us through the channels below.",
  },
  alternatives: {
    label: "Other ways to reach us",
    items: [
      { type: "email", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { type: "whatsapp", label: "WhatsApp", value: siteConfig.whatsapp, href: siteConfig.whatsappLink },
      { type: "linkedin", label: "LinkedIn", value: "RayStar Media", href: siteConfig.linkedin },
      { type: "calendly", label: "Strategy Call", value: "Book a 30-min strategy call directly", href: siteConfig.calendly },
    ],
  },
} as const;

export const legalPages = {
  privacy: {
    label: "Privacy Policy",
    headline: "Privacy Policy",
    description:
      "RayStar Media respects your privacy. This page explains how we collect, use, and protect your information.",
    sections: [
      {
        title: "Information we collect",
        body: "When you contact us, book a call, or submit a form, we may collect your name, email, phone number, company details, and project requirements.",
      },
      {
        title: "How we use it",
        body: "We use this information to respond to enquiries, prepare proposals, schedule calls, and improve our services and website experience.",
      },
      {
        title: "How we protect it",
        body: "We keep your details secure and only share them when needed to deliver our services, comply with law, or support the operation of our website.",
      },
    ],
  },
  terms: {
    label: "Terms & Conditions",
    headline: "Terms & Conditions",
    description:
      "These terms explain how you may use the RayStar Media website and services.",
    sections: [
      {
        title: "Use of the website",
        body: "By using our website, you agree to use it lawfully and not attempt to disrupt, copy, or misuse its content or functionality.",
      },
      {
        title: "Service information",
        body: "Any information on our site is provided for general guidance. Engagement terms, scope, and deliverables are confirmed separately for each client.",
      },
      {
        title: "Changes",
        body: "We may update these terms and the website content from time to time. Continued use of the site means you accept those updates.",
      },
    ],
  },
} as const;

export const strategyCallPage = {
  headline: "30 minutes. We'll show you exactly where your marketing is costing you traders.",
  points: [
    "An honest audit of your current digital marketing — what is working and what is not",
    "The 2 or 3 specific things holding back your acquisition right now",
    "A clear recommendation on what to do next — whether that involves us or not",
  ],
  trustLine: "No pitch. No pressure. No obligation. Just 30 minutes of genuine fintech marketing expertise focused entirely on your growth.",
  calendlyEmbed: siteConfig.calendly,
  intro: "A focused call for founders who want direct answers, not vague advice.",
} as const;

export const footer = {
  description: "Premium digital marketing for forex brokers, prop firms, trading academies, and the wider trading ecosystem.",
  columns: [
    {
      title: "Services",
      links: services.slice(0, 5).map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Insights", href: "/insights" },
        { label: "Contact", href: "/contact" },
        { label: "Strategy Call", href: "/strategy-call" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Email", href: `mailto:${siteConfig.email}` },
        { label: "WhatsApp", href: siteConfig.whatsappLink },
        { label: "LinkedIn", href: siteConfig.linkedin },
      ],
    },
  ],
  statusBar: {
    left: `RAYSTAR MEDIA · ${siteConfig.location.toUpperCase()} · A ${siteConfig.parentCompany.toUpperCase()} COMPANY`,
    status: "ACCEPTING NEW CLIENTS",
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

export const seo = {
  default: {
    title: "RayStar Media | Premium Digital Marketing for the Trading Ecosystem",
    description:
      "We help forex brokers, prop trading firms, trading academies, and signal providers acquire more traders through marketing built by industry insiders.",
    keywords: [
      "forex broker marketing",
      "prop trading marketing",
      "trading academy marketing",
      "fintech digital agency",
      "trader acquisition",
      "financial marketing agency",
    ],
  },
  pages: {
    home: {
      title: "RayStar Media | Fintech Marketing Agency for Trading Businesses",
      description: "Most marketing agencies don't know what a pip is. We do. Premium digital marketing for forex brokers, prop firms, and trading academies.",
    },
    services: {
      title: "Services | RayStar Media",
      description: "Trader acquisition campaigns, SEO, social media, Telegram, WhatsApp, and consulting — built for the trading ecosystem.",
    },
    about: {
      title: "About | RayStar Media",
      description: "Founded by an industry insider who saw the gap between what brokers need and what generic agencies deliver.",
    },
    contact: {
      title: "Contact | RayStar Media",
      description: "Tell us about your broker, firm, academy, or signal service. We'll tell you exactly where your marketing is losing traders.",
    },
    caseStudies: {
      title: "Case Studies | RayStar Media",
      description: "Real work. Real numbers. Trade log reports from campaigns we've run.",
    },
    insights: {
      title: "Insights | RayStar Media",
      description: "Fintech marketing insights from people who have worked inside the industry.",
    },
    strategyCall: {
      title: "Free Strategy Call | RayStar Media",
      description: "30 minutes of genuine fintech marketing expertise focused entirely on your growth.",
    },
    privacy: {
      title: "Privacy Policy | RayStar Media",
      description: "How RayStar Media collects, uses, and protects your information.",
    },
    terms: {
      title: "Terms & Conditions | RayStar Media",
      description: "Terms governing use of the RayStar Media website and services.",
    },
  },
} as const;
