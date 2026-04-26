export interface BriefingItem {
  number: number
  headline: string
  body: string
  takeaway: string
}

export interface Briefing {
  slug: string
  date: string
  displayDate: string
  title: string
  teaser: string
  items: BriefingItem[]
  tags: string[]
  linkedinUrl: string
}

export const briefings: Briefing[] = [
  {
    slug: 'april-26-2026',
    date: '2026-04-26',
    displayDate: 'Sunday, April 26, 2026',
    title: 'Sunday Morning AI Briefing — April 26, 2026',
    teaser: 'Visa CMO Frank Cooper III declared the B2AI era. Visible AI in marketing is 4x more likely to cost you trust. Meta\'s AI Ads Assistant went global. WPP plugged Google Earth AI into its platform. Microsoft Copilot Checkout hit 500,000 merchants.',
    linkedinUrl: '',
    tags: ['Visa', 'Marketing AI', 'Meta', 'WPP', 'Microsoft'],
    items: [
      {
        number: 1,
        headline: 'VISA\'S CMO RENAMED COMMERCE: B2AI. YOUR NEW CUSTOMER IS A BOT.',
        body: 'Visa CMO Frank Cooper III declared the B2AI era. New Visa research shows 71% of businesses are willing to optimize products for AI agents, and more than half would let agents negotiate prices with other AI systems.',
        takeaway: 'Your goal is one structured bullet sheet a shopping agent can quote back word for word. If your brand reads as a paragraph, agents skip you.'
      },
      {
        number: 2,
        headline: 'EMARKETER: VISIBLE AI IN MARKETING IS 4X MORE LIKELY TO COST YOU TRUST THAN BUILD IT.',
        body: 'When consumers spot AI in brand content, 31% trust the brand less and only 7% trust it more, per a Klaviyo and Datalily study. Disclosure does not save you. Visible AI is the issue.',
        takeaway: 'Audit your last 10 brand posts. If more than two obviously look AI made, rewrite them with a real face, name, and story this week.'
      },
      {
        number: 3,
        headline: 'META\'S AI ADS ASSISTANT WENT GLOBAL. EARLY USERS CUT COST PER RESULT 12%.',
        body: 'Meta opened its AI Business Assistant to every advertiser on April 24 across U.S., EMEA, APAC, and LATAM. Beta users following its opportunity score recommendations cut cost per result 12% and resolved account issues 20% more often.',
        takeaway: 'Open the assistant inside Ads Manager on your top-spend account today. Apply the first opportunity score and run it for 14 days.'
      },
      {
        number: 4,
        headline: 'WPP PLUGGED GOOGLE EARTH AI INTO ITS PLATFORM. ONE CLIENT GOT 77% MORE PERFORMANCE.',
        body: 'WPP integrated Google Earth AI into WPP Open last week. Campaigns now factor in real-world signals like traffic, weather, and population movement. One automotive client built an EV Readiness Index that drove 77% higher performance and 15% lower cost to conversion.',
        takeaway: 'Brief your media team to layer one offline signal, foot traffic or weather, into your top three regions next month.'
      },
      {
        number: 5,
        headline: 'MICROSOFT COPILOT CHECKOUT HIT 500,000 MERCHANTS. AGENTS ARE BUYING NOW.',
        body: 'Microsoft expanded Copilot Checkout to over half a million merchants and pushed it into the mobile app. Ask Copilot to redo your living room and it researches, picks pieces, and pays without leaving the chat. Urban Outfitters and Etsy are live.',
        takeaway: 'Run a Copilot or ChatGPT shopping query for your top SKU today. If your product or a competitor is missing, your feed is the gap.'
      }
    ]
  },
  {
    slug: 'saturday-april-25-2026',
    date: '2026-04-25',
    displayDate: 'Saturday, April 25, 2026',
    title: 'Saturday Morning AI Briefing — April 25, 2026',
    teaser: 'Google commits $10B to Anthropic, GPT-5.5 is here, Conductor reports AI visitors convert 2x better, Walmart adds AI certification, and what AI will change in comms.',
    linkedinUrl: 'https://www.linkedin.com/posts/prsarahevans_ai-brief-april-25-activity-7453817775518797824-wM-u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAE2DR0BeElXX5oZkd6gOrjZi5Fy8cp8jbo',
    tags: ['Google', 'Anthropic', 'GPT-5.5', 'AI SEO', 'Walmart', 'Comms'],
    items: [
      {
        number: 1,
        headline: 'GOOGLE IS INVESTING $40 BILLION IN THE COMPANY TRYING TO REPLACE GOOGLE.',
        body: 'Google committed $10B to Anthropic at a $350B valuation. Google Cloud powers Anthropic\'s compute. Claude growing = Google Cloud revenue.',
        takeaway: 'This isn\'t going away any time soon.'
      },
      {
        number: 2,
        headline: 'GPT-5.5 DROPPED YESTERDAY. IT\'S A GREAT DEFAULT FOR MULTI-STEP AGENT WORKFLOWS.',
        body: 'OpenAI released GPT-5.5 to Plus, Pro, Business, and Enterprise. Built for complex multi-step tasks: data analysis, operating software, autonomous research, document creation. OpenAI calls it a faster, sharper thinker for fewer tokens.',
        takeaway: 'Your goal is to test one multi-step workflow in ChatGPT this weekend. GPT-5.5 handles step handoffs without babysitting.'
      },
      {
        number: 3,
        headline: 'CONDUCTOR STUDIED 3.3 BILLION SESSIONS: AI VISITORS CONVERT 2X BETTER THAN ORGANIC.',
        body: 'AI Overviews now appear in 25% of Google searches, up from 13% a year ago. Conductor\'s 3.3 billion session study across 13,770 enterprise domains found LLM visitors convert at twice the organic rate.',
        takeaway: 'Pull AI referral traffic in GA4 this week. If it\'s under 1%, your content isn\'t getting cited.'
      },
      {
        number: 4,
        headline: 'WALMART\'S NEW CEO PUT "AI CERTIFICATION" IN HIS FIRST SHAREHOLDER LETTER.',
        body: 'John Furner\'s first annual report frames Walmart\'s 2.1 million employees around people-led, tech-powered. They\'re certifying associates as AI-proficient through OpenAI training. When the world\'s largest retailer leads with AI in a shareholder letter, the wait-and-see era is over.',
        takeaway: 'If Walmart can put AI certification in a shareholder letter, it belongs in your next leadership update.'
      },
      {
        number: 5,
        headline: 'O\'DWYER\'S PUBLIC RELATIONS NEWS: WHAT AI WILL AND WON\'T CHANGE IN COMMS.',
        body: 'RJ Bardsley, Co-CEO of Wireside Communications, says comms changes differently than other industries. AI accelerates research and synthesis. GEO strategy, media relationships, and earned trust follow a different clock.',
        takeaway: 'Your goal is to at least learn the basics. I have a full AI Glossary right here: https://lnkd.in/gHjzNtTy'
      }
    ]
  },
  {
    slug: 'april-25-2026',
    date: '2026-04-25',
    displayDate: 'Friday, April 25, 2026',
    title: 'Morning AI Briefing — April 25, 2026',
    teaser: 'Human content is 8x more likely to rank #1, Google open-sourced DESIGN.md for AI brand consistency, and consumer preference for AI creator content collapsed from 60% to 26%.',
    linkedinUrl: 'https://www.linkedin.com/posts/prsarahevans_morning-ai-briefing-ugcPost-7453433554165764097-DExI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAE2DR0BeElXX5oZkd6gOrjZi5Fy8cp8jbo',
    tags: ['SEO', 'Content', 'Google', 'Brand Voice', 'Creator Economy', 'AI Content', 'Semrush', 'Digiday', 'MarTech'],
    items: [
      {
        number: 1,
        headline: 'SEMRUSH STUDIED 42,000 BLOG POSTS: HUMAN CONTENT IS 8 TIMES MORE LIKELY TO RANK NUMBER ONE',
        body: 'Semrush analyzed 42,000 blog posts. Human-written content holds 80% of Google\'s Position 1 results. AI content lands there just 9% of the time. The advantage is widest where clicks concentrate most.',
        takeaway: 'Use your actual human "AI slop" detector when editing content for a brand or client — or it is 100% guaranteed you\'ll be penalized now or in the immediate future.'
      },
      {
        number: 2,
        headline: 'GOOGLE OPEN-SOURCED DESIGN.MD: ONE FILE THAT TELLS EVERY AI TOOL EXACTLY HOW YOUR BRAND LOOKS',
        body: 'Google Labs pushed DESIGN.md to GitHub on April 21 under Apache 2.0. One markdown file encodes your color palettes, typography, and component rules so AI agents apply your brand automatically. Drop it into Claude, Cursor, or any coding tool, and the brand system travels with every output.',
        takeaway: 'Build a DESIGN.md for your brand this week. Visit stitch.withgoogle.com to generate one and drop it into your Claude Project.'
      },
      {
        number: 3,
        headline: 'DIGIDAY: CONSUMERS WHO PREFER AI CREATOR CONTENT DROPPED FROM 60% TO 26% IN THREE YEARS',
        body: 'AI content is backfiring. Digiday reports consumer preference for AI-generated creator content collapsed from 60% in 2023 to 26% today. Brands winning in 2026 lean into unscripted moments, real voices, and imperfect delivery.',
        takeaway: 'Find your last 10 brand posts, count how many feature a real face or voice, and if fewer than 3, rebalance your content mix this quarter. Including an expert voice or SME in content is a MUST-HAVE for GEO resonance.'
      },
      {
        number: 4,
        headline: 'MARTECH: AI SOUNDS GENERIC BECAUSE YOUR BRAND VOICE GUIDE WAS BUILT FOR HUMANS',
        body: 'Brand voice guides full of adjectives like "approachable" don\'t translate to AI tools. MarTech reports AI needs banned phrases, structure rules, and three on-brand examples to produce consistent content. Claude Projects and Gemini Gems can hold these guidelines across every campaign.',
        takeaway: 'Open a Claude Project this week: load your brand voice guide, three on-brand examples, and your CTA list.'
      }
    ]
  },
  {
    slug: 'april-15-2026',
    date: '2026-04-15',
    displayDate: 'Tuesday, April 15, 2026',
    title: 'AI Brief — April 15, 2026',
    teaser: 'LinkedIn will pay you $150/hr to train AI, Uber burned its full-year AI budget in 4 months, and Meta is about to dethrone Google in ad revenue.',
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7450174249169838080/',
    tags: ['LinkedIn', 'Uber', 'Claude', 'Meta', 'Anthropic', 'Prompting'],
    items: [
      {
        number: 1,
        headline: 'LINKEDIN WILL NOW PAY YOU $150 AN HOUR TO TRAIN AI',
        body: 'LinkedIn launched an AI Labor Marketplace. Senior engineers: $150/hr. Nurses, linguists, finance experts: up to $100/hr. It\'s leveraging its 1B verified professionals to compete with Mercor and Scale AI. Your domain expertise is now a product.',
        takeaway: 'Post this week: "LinkedIn will pay $150/hr to train AI on [your specialty]."'
      },
      {
        number: 2,
        headline: 'AI VIDEO SLOP IS MAKING IT INTO THE NEWS AND NO ONE IS STOPPING IT',
        body: 'AI-generated video is slipping into mainstream news coverage with zero gatekeeping. Your brand can get quoted in a fabricated clip and scraped into an AI citation 48 hours later.',
        takeaway: 'Draft a 24-hour correction protocol this week. A retraction fight is 10x harder after the clip hits YouTube.'
      },
      {
        number: 3,
        headline: 'UBER BURNED ITS ENTIRE 2026 AI BUDGET IN FOUR MONTHS',
        body: 'Uber CTO Praveen Neppalli Naga gave 5,000 engineers Claude Code in December. By February, 63% used it daily. By April, the full-year budget was gone. 72% of code in Uber\'s IDEs is now AI-generated.',
        takeaway: 'Pull your team\'s AI usage report tomorrow. If per-seat spend is up more than 3x from Q1, tell your CFO before the invoice does.'
      },
      {
        number: 4,
        headline: 'ANTHROPIC RIPPED UP ITS ENTERPRISE PRICING',
        body: 'The flat seat fee is dead. Every Claude, Claude Code, and Cowork action now gets billed by what your team actually uses. The trigger is a compute crunch Anthropic can\'t out-build fast enough.',
        takeaway: 'Count daily-active Claude seats vs total seats. If less than half your people use it daily, Team tier beats Enterprise on the new math.'
      },
      {
        number: 5,
        headline: 'META IS ABOUT TO DETHRONE GOOGLE IN AD REVENUE FOR THE FIRST TIME EVER',
        body: 'eMarketer: Meta hits $243.46B in 2026 net ad revenue, edging Google\'s $239.54B. Meta growth 24.1%. Google 11.9%. Meta\'s AI targeting on Reels and Instagram is doing the lift.',
        takeaway: 'Shift 20% of next month\'s Google search test budget to Meta Reels AI creative. Track CAC and creative refresh for 30 days.'
      },
      {
        number: 6,
        headline: 'STOP WRITING ONE-OFF PROMPTS. BUILD A PROMPT SYSTEM THIS WEEK.',
        body: 'The Context Tuning Playbook says the quiet part loud: single prompts don\'t scale. Teams getting real ROI are turning prompts into reusable templates the whole team runs.',
        takeaway: 'Your 3 most-repeated prompts this week become a team template — or better yet, a GPT, skill, or project.'
      }
    ]
  },
  {
    slug: 'april-14-2026',
    date: '2026-04-14',
    displayDate: 'Monday, April 14, 2026',
    title: 'AI Brief — April 14, 2026',
    teaser: 'GitHub lets you steer an AI coding agent from your phone, The Information says AI is upskilling human expertise, and OpenAI just said you\'re no longer locked in to one AI vendor.',
    linkedinUrl: 'https://www.linkedin.com/posts/prsarahevans_ai-brief-april-14-activity-7449819977961934848-gWeP',
    tags: ['GitHub', 'Copilot', 'OpenAI', 'Anthropic', 'Handshake', 'MIT', 'Moonshot AI'],
    items: [
      {
        number: 1,
        headline: 'GITHUB DROPPED A TOOL THAT LETS YOU STEER AN AI CODING AGENT FROM YOUR PHONE. HERE IS HOW NON-TECHNICAL EXECS USE IT TO SHIP FASTER.',
        body: 'GitHub released remote sessions for Copilot CLI yesterday. You scan a QR code on your laptop and control a running AI agent from your phone on the train, between meetings, from a beach chair.\n\nThree ways to use it without writing a line of code: 1) delegate a research task to the agent before your 8am, then approve the first draft from the carpool line, 2) pause a stalled project mid-run and redirect it toward a faster version of the same output, 3) run it on the weekend so Monday starts with work already done.',
        takeaway: 'Send this to one person on your team who keeps saying "AI needs a programmer to use." This one does not.'
      },
      {
        number: 2,
        headline: 'THE INFORMATION SAID AI IS UPSKILLING HUMAN EXPERTISE INSTEAD OF REPLACING IT. MEET HANDSHAKE.',
        body: 'The Information reported yesterday that Handshake, the 12-year-old college job board, spun up an AI data arm eight months ago and went from $0 to $100M in annualized revenue. Mercor, which pipes lawyers, PhDs, and doctors to grade AI output, hit $500M ARR at a $10B valuation. Their customers are OpenAI, Anthropic, Google, and Meta.',
        takeaway: 'This week: Think about what you do that is both repeatable and has value.'
      },
      {
        number: 3,
        headline: 'MIT TECH REVIEW SHARED 12 CHARTS THAT EXPLAIN THE ENTIRE AI ECONOMY IN UNDER 10 MINUTES.',
        body: 'MIT Technology Review published a chart-first explainer yesterday off the Stanford AI Index release. The three that matter to a CMO or CEO: 1) Generative AI hit 53% of the US population in 3 years, faster than the internet or the PC. 2) The median dollar value per AI user TRIPLED between 2025 and 2026. 3) The top 4 AI models are now separated by less than 3% on benchmarks.',
        takeaway: '"AI adoption is faster than the internet, the per-user value is tripling, and the vendors are now competing on our terms."'
      },
      {
        number: 4,
        headline: 'A CHINESE CODING AGENT IS 5X CHEAPER THAN CLAUDE ON THE SAME WORK.',
        body: 'Moonshot AI rolled Kimi K2.6 to all subscribers yesterday. On raw coding benchmarks it is competitive with Claude Sonnet 4.6. Where Claude still wins: reliability on multi-step agent loops and complex English instruction following.',
        takeaway: 'If security and compliance are top of mind at your org, stick with Claude (or Copilot).'
      },
      {
        number: 5,
        headline: 'OPENAI JUST SAID THE QUIET PART OUT LOUD: YOU ARE NOT LOCKED IN TO ONE AI VENDOR ANYMORE.',
        body: 'OpenAI sent an internal memo this weekend (obtained by CNBC) telling staff they want customers running OpenAI models on Microsoft Azure, Amazon Bedrock, AND Google Cloud interchangeably. Translation: the AI companies are fighting for your business so hard, they will now run their model on whatever cloud YOU already use.',
        takeaway: 'If your vendor told you last year "we only work with X cloud," call them this week.'
      }
    ]
  },
  {
    slug: 'april-11-2026',
    date: '2026-04-11',
    displayDate: 'Saturday, April 11, 2026',
    title: 'AI Brief — April 11, 2026',
    teaser: 'Anthropic built a model so powerful the US government called an emergency meeting, Amazon\'s AWS AI is at $15B ARR, and your leadership team is judging AI by the worst version of it.',
    linkedinUrl: 'https://www.linkedin.com/posts/prsarahevans_ai-brief-april-11-activity-7448745430789562368-IT9G',
    tags: ['Anthropic', 'Amazon', 'AWS', 'Google', 'Claude', 'Leadership'],
    items: [
      {
        number: 1,
        headline: 'ANTHROPIC BUILT A MODEL SO POWERFUL THE US GOVERNMENT CALLED AN EMERGENCY MEETING',
        body: 'Treasury Secretary Bessent and Fed Chair Powell pulled Wall Street\'s biggest bank CEOs into an emergency session yesterday. The topic: one AI model. Anthropic\'s Mythos can find and exploit vulnerabilities in any software stack without a human in the loop. No meeting like this has ever been called over a single AI model in history. It\'s currently deployed at 12 organizations.',
        takeaway: 'The government\'s threat assessment is a "need to know."'
      },
      {
        number: 2,
        headline: 'AMAZON IS MAKING $15 BILLION A YEAR FROM AI AND THE CEO SAYS DEMAND IS OUTPACING SUPPLY',
        body: 'Andy Jassy\'s annual shareholder letter dropped yesterday. AWS AI: $15 billion annual run rate. His own benchmark: at this exact stage in AWS cloud\'s history, the run rate was $58 million. AI is 260x ahead of that pace.',
        takeaway: 'If your company is still in pilot mode, time to move.'
      },
      {
        number: 3,
        headline: 'ANTHROPIC IS ABOUT TO OVERTAKE OPENAI IN REVENUE — WHY AREN\'T YOU USING IT FOR YOUR TEAM',
        body: 'Anthropic is on pace to pass OpenAI in enterprise revenue for the first time. Claude is already running inside Carta, Zoom, and hundreds of enterprise stacks. Vinod Khosla called large enterprise adoption "very early days" at HumanX yesterday. The people closest to the models think the adoption curve is just beginning.',
        takeaway: 'At the very least, your team should have Claude Team accounts.'
      },
      {
        number: 4,
        headline: 'GOOGLE JUST SOLVED THE "WE CAN\'T SEND CLIENT DATA TO AI" PROBLEM',
        body: 'Google dropped Gemma 4 yesterday. Apache 2.0 license, free, zero usage restrictions, runs fully on-device. 256K context window. Native vision and audio. Works on a smartphone.',
        takeaway: 'Every marketing and PR team sitting on sensitive client data now has a path to run AI locally without sending anything anywhere.'
      },
      {
        number: 5,
        headline: 'YOUR LEADERSHIP TEAM IS JUDGING AI BY THE WORST VERSION OF IT',
        body: 'The free tier is so far behind paid tiers of LLMs that they are effectively different products. Most executive teams are building AI strategy around the version that costs nothing and performs accordingly. And they don\'t know what they\'re missing yet.',
        takeaway: 'Run the same prompt in free ChatGPT, then in Claude Pro. Screenshot both. Show your leadership team side by side.'
      }
    ]
  },
  {
    slug: 'april-10-2026',
    date: '2026-04-10',
    displayDate: 'Thursday, April 10, 2026',
    title: 'AI Briefing — April 10, 2026',
    teaser: 'OpenAI launches a $100/month ChatGPT Pro tier, Meta debuts Muse Spark and abandons open source, and Anthropic\'s revenue triples to a $30B run rate.',
    linkedinUrl: 'https://www.linkedin.com/posts/prsarahevans_ai-briefing-april-10-activity-7448361873860866048-TEIF',
    tags: ['OpenAI', 'Meta', 'Anthropic', 'Claude', 'Enterprise', 'Advertising'],
    items: [
      {
        number: 1,
        headline: 'OPENAI LAUNCHES $100/MONTH CHATGPT PRO TIER',
        body: 'OpenAI rolled out a new $100/month ChatGPT Pro plan yesterday, filling the gap between the $20 Plus and $200 Pro tiers. Pro subscribers get 5x more Codex usage than Plus, with a limited-time bump to 10x through May 31. Sam Altman confirmed Codex now has three million weekly users.',
        takeaway: 'If your team is using ChatGPT Plus and hitting limits, evaluate the new Pro tier against Claude Max before the promo ends May 31.'
      },
      {
        number: 2,
        headline: 'META DEBUTS MUSE SPARK, ABANDONS OPEN SOURCE',
        body: 'Meta released Muse Spark, the first AI model from its new Superintelligence Labs team led by Chief AI Officer Alexandr Wang. This model is closed-source, a hard break from Meta\'s open-weight Llama strategy. It will roll out across WhatsApp, Instagram, Facebook, Messenger, and Meta AI glasses in the coming weeks.',
        takeaway: 'If your marketing runs on Meta platforms, the tools are about to change. Start testing Meta AI ad features now.'
      },
      {
        number: 3,
        headline: 'OPENAI CLAIMS COMPUTE EDGE OVER ANTHROPIC IN INVESTOR MEMO',
        body: 'Bloomberg and CNBC report that OpenAI sent a memo to investors calling Anthropic "meaningfully smaller curve" on compute. OpenAI says it plans to have 30 gigawatts of compute capacity by 2030 and expects Anthropic to reach roughly 7 to 8 gigawatts by end of 2027.',
        takeaway: 'If you are evaluating enterprise AI vendors, compute capacity matters for reliability and scale. Ask both OpenAI and Anthropic directly about uptime guarantees and capacity commitments before you sign annual contracts.'
      },
      {
        number: 4,
        headline: 'ANTHROPIC REVENUE TRIPLES TO $30B RUN RATE',
        body: 'Anthropic\'s annual revenue run rate hit $30 billion, up from $9 billion at end of 2025. The company now has more than 1,000 enterprise customers spending over $1 million annually.',
        takeaway: 'If Claude is not on your enterprise AI shortlist, you are leaving optionality on the table.'
      },
      {
        number: 5,
        headline: 'CLAUDE MYTHOS FINDS ZERO-DAYS IN EVERY MAJOR OS AND BROWSER',
        body: 'Anthropic\'s Claude Mythos Preview, released through Project Glasswing, has already discovered thousands of zero-day vulnerabilities in every major operating system and web browser.',
        takeaway: 'If your company handles sensitive data, ask your CISO what AI-powered vulnerability scanning looks like in your stack today.'
      },
      {
        number: 6,
        headline: 'OPENAI RAISING AD REVENUE EXPECTATIONS THROUGH 2030',
        body: 'The Information reports that OpenAI is raising its internal expectations for advertising revenue through 2030. Tubi became the latest company to bring streaming directly into ChatGPT. OpenAI has surpassed $25 billion in annualized revenue and is taking early steps toward a public listing, potentially as soon as late 2026.',
        takeaway: 'If you run brand campaigns, start thinking about ChatGPT as an ad platform.'
      }
    ]
  }
]

export function getBriefingBySlug(slug: string): Briefing | undefined {
  return briefings.find(b => b.slug === slug)
}

export function getAllSlugs(): string[] {
  return briefings.map(b => b.slug)
}
