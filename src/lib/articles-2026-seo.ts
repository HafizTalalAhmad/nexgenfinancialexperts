// 8 long-form blog posts targeting high-value Florida accounting SEO keywords.
// Mirrors the `Article` interface in src/lib/articles.ts so the existing
// Insights & Updates page templates render these without changes.
//
// Sources (cited inline where used):
//  - Florida Dept. of Revenue, Discretionary Sales Surtax (Form DR-15DSS, 2026 ed.)
//  - Florida Dept. of Revenue, Tax and Interest Rates page (corporate income tax 5.5%)
//  - IRS Publication 334 (Tax Guide for Small Business)
//  - IRC §168(k), §179, §199A
//  - 26 USC §1446, §1445 (withholding on foreign partners / FIRPTA)
//
// Educational content only — not individualized professional advice. Every
// article carries a disclaimer and encourages consultation before decisions.

export interface Article2026 {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  category: string;
  relatedService: string; // service slug from src/lib/services.ts (matches /services/<slug>/ route)
  seo: { title: string; description: string };
  body: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
}

export const articles2026: Article2026[] = [
  // 1. Florida sales tax guide
  {
    slug: "florida-sales-tax-guide-2026",
    title: "Florida Sales Tax Guide 2026: Rates, Surtax Caps, and Filing Deadlines for Small Businesses",
    excerpt:
      "A complete guide to Florida's 2026 sales tax system — the 6% state rate, county discretionary surtax (0.5% to 2.5%), the $5,000 surtax cap, and DR-15 filing deadlines every business owner needs to know.",
    date: "2026-11-04",
    readMinutes: 9,
    category: "Sales Tax",
    relatedService: "tax-advisory-planning-services",
    seo: {
      title: "Florida Sales Tax Guide 2026: Rates, Surtax Caps & Filing | NexGen",
      description:
        "Florida's 2026 sales tax system explained — 6% state rate, county surtax from 0.5% to 2.5%, the $5,000 surtax cap, and DR-15 filing deadlines for small businesses.",
    },
    body: [
      {
        paragraphs: [
          "Florida sales tax is the single most common compliance failure we see in our practice. Not because the rules are complicated — they are not — but because they vary by county, cap out at different thresholds, and apply to transactions most bookkeepers do not realize are taxable. A restaurant owner in Tampa collects at 8.5%. A marine dealer in Fort Lauderdale caps surtax at $50 per item. A short-term-rental host in Orlando files two separate returns at two separate rates. Get any of this wrong for a year and the back-tax bill plus 10% annual penalty can wipe out a quarter's profit.",
          "This guide covers everything a Florida small-business owner needs to know about sales tax in 2026: the statewide rate, the county surtax system, the $5,000 surtax cap (and where it applies), the items that are exempt, how to register, when to file, and how to fix it when the books are already wrong.",
        ],
      },
      {
        heading: "Florida's 6% statewide sales tax rate",
        paragraphs: [
          "Florida imposes a 6% sales and use tax on the sale, rental, lease, or license to use tangible personal property, certain services, and certain digital goods (Source: Florida Department of Revenue, Tax and Interest Rates). The 6% applies identically in all 67 counties — there is no part of Florida where the state portion is higher or lower.",
          "Tangible personal property includes furniture, electronics, equipment, supplies, books, and clothing. It does not include real property (land and buildings) or intangible property (stocks, bonds, IP). It also includes certain services: repairs, alterations, and installation of tangible property; commercial pest control; and certain digital products.",
        ],
      },
      {
        heading: "County discretionary sales surtax (0.5% to 2.5%)",
        paragraphs: [
          "On top of the 6% state rate, every Florida county is authorized to levy a discretionary sales surtax ranging from 0% to 2.5% (Source: Florida Department of Revenue, Discretionary Sales Surtax Information, Form DR-15DSS, 2026 edition). The surtax rate varies by county and changes over time as voters approve or repeal local levies. For 2026, most counties levy between 0.5% and 1.5%; the maximum 2.5% applies only in Hillsborough County.",
          "Combined sales tax rates for major Florida cities in 2026:",
        ],
        bullets: [
          "Tampa (Hillsborough): 8.5% — highest in the state, surtax 2.5%",
          "Jacksonville (Duval): 7.5%, surtax 1.5%",
          "Tallahassee (Leon): 7.5%, surtax 1.5%",
          "Fort Lauderdale (Broward): 7.0%, surtax 1.0%",
          "Miami (Miami-Dade): 7.0%, surtax 1.0%",
          "St. Petersburg (Pinellas): 7.0%, surtax 1.0%",
          "Hialeah (Miami-Dade): 7.0%, surtax 1.0%",
          "Port St. Lucie (St. Lucie): 7.0%, surtax 1.0%",
          "Orlando (Orange): 6.5%, surtax 0.5%",
          "Cape Coral (Lee): 6.5%, surtax 0.5%",
        ],
      },
      {
        heading: "The $5,000 surtax cap — and how it works",
        paragraphs: [
          "Florida's county surtax has a ceiling: the surtax applies only to the first $5,000 of any single item's sales price. The remaining balance is taxed at the 6% state rate only. So a $30,000 boat sold in Tampa (where surtax is 2.5%) collects $125 in surtax (2.5% of the first $5,000) plus $1,800 in state tax (6% of the full $30,000), for a total of $1,925 — not the $2,550 you would get by naively multiplying 8.5% by $30,000.",
          "This cap matters most for businesses selling high-ticket items: marine and yacht dealers, B2B equipment sellers, construction materials, medical devices, and commercial vehicles. Most off-the-shelf point-of-sale systems do not apply the cap automatically — they tax the full amount at the combined rate, over-collecting surtax and refunding the difference when the customer complains or the audit arrives. We have recovered tens of thousands of dollars in over-collected surtax for clients who never realized their POS was wrong.",
        ],
      },
      {
        heading: "What is exempt from Florida sales tax",
        paragraphs: [
          "A long list of items and transactions are exempt from Florida sales tax — and missing an exemption means leaving money on the table or over-charging customers. The most common exemptions businesses miss:",
        ],
        bullets: [
          "Groceries for home consumption (most food staples; prepared food is taxable).",
          "Prescription drugs and most over-the-counter medicines.",
          "Most medical prosthetics and certain medical devices.",
          "Resale — items purchased for resale require a Florida Annual Resale Certificate for Sales Tax (Form DR-13).",
          "Industrial machinery and equipment used directly in production — major exemption for Florida manufacturers.",
          "Sales to the U.S. government and the State of Florida (with valid exemption certificates).",
          "Items sold to qualified charities and religious organizations (with exemption certificates).",
          "Commercial fishing vessels and most agricultural-production equipment.",
          "Fuel for off-highway business use (with refund claim).",
        ],
      },
      {
        heading: "How to register for a Florida sales tax permit",
        paragraphs: [
          "Before collecting sales tax, your business must register with the Florida Department of Revenue. There is no fee. Registration is online via the DOR's GTAX portal, takes about 20 minutes, and produces your Sales and Use Tax Certificate of Registration — which must be displayed at your business location.",
          "You will need your federal EIN, business legal name, physical and mailing addresses, NAICS codes, expected monthly sales-tax collections, and the responsible-party Social Security Numbers. We help new Florida businesses register at no charge as part of onboarding — it takes us about 30 minutes.",
        ],
      },
      {
        heading: "When to file DR-15 (sales tax returns)",
        paragraphs: [
          "The Florida DR-15 sales and use tax return is filed monthly, quarterly, or annually depending on your collection volume — not your preference. The DOR assigns your filing frequency when you register, and reassigns it annually based on the prior year's collections.",
          "Filing frequency thresholds:",
        ],
        bullets: [
          "Monthly: collection average over $200 per month — most active businesses.",
          "Quarterly (Form DR-15): collection average $50 to $200 per month.",
          "Quarterly (Form DR-15EZZ): collection average $1 to $50 per month — filers with very low volume.",
          "Annually (Form DR-15EZ): collection average under $1 per month — rare.",
          "Pre-payment required: collection average over $30,000 per month — file early and pay in advance for some months.",
        ],
      },
      {
        heading: "DR-15 filing deadlines",
        paragraphs: [
          "Florida DR-15 returns are due on the 1st day of the month following the reporting period, and become delinquent on the 21st. So a monthly filer collecting in January files by February 1 and is delinquent after February 20. The return and payment must both be made by the 20th to avoid penalty.",
          "Late penalty: 10% of the tax due for each 30-day period delinquent, capped at 50% of the tax due. Plus interest at the floating rate (currently around 8% annualized). Plus a $50 minimum delinquent fee. For a small business collecting $1,000/month, a 30-day delay can cost $150 in penalty plus interest — and the DOR is relentless about collection.",
        ],
      },
      {
        heading: "Short-term rentals — two returns at two rates",
        paragraphs: [
          "Florida short-term-rental operators (Airbnb, VRBO, direct bookings) file two separate returns: the DR-15 sales and use tax return at the combined local rate (6.5% to 8.5%), plus the county tourist-development tax return at 5% or 6%. These are filed with different agencies: the DR-15 goes to the Florida DOR, the tourist-development tax goes to the county tax collector.",
          "The Airbnb and VRBO platforms collect and remit both taxes for bookings made through their systems — but you must still file the returns yourself for direct bookings (repeat guests, off-platform referrals, your own website). Many hosts are shocked to discover they owe $3,000 to $10,000 in unfiled taxes from their direct bookings during peak season.",
        ],
      },
      {
        heading: "How to fix a sales tax problem you already have",
        paragraphs: [
          "If your books are already wrong — sales tax not collected, collected but not remitted, remitted late, or filed at the wrong rate — the worst thing you can do is ignore it. The Florida DOR has six years to assess unpaid sales tax (and longer in fraud cases), and interest compounds daily. The best thing you can do is come forward, quantify the problem, and resolve it before the DOR finds you.",
          "Florida's Voluntary Disclosure Program allows a business that has not registered or that has under-reported to come forward, pay the back tax plus interest, and receive a waiver of most penalties. The look-back period is capped at three years instead of six. We have helped clients use this program to resolve $20,000-$100,000 exposures for a fraction of the cost. The earlier you come forward, the better the terms.",
        ],
      },
      {
        heading: "How NexGen can help",
        paragraphs: [
          "We handle sales tax registration, monthly accrual, DR-15 filing (monthly, quarterly, or annually based on your volume), exemption-certificate tracking, the $5,000 surtax cap calculation, and county tourist-development tax returns for short-term-rental clients. Our standard monthly engagement includes sales tax as a core line item, not an add-on. If you have a back-tax exposure, schedule a free consultation — we will quantify the problem and walk you through Voluntary Disclosure before any work starts.",
        ],
      },
    ],
  },
  // 2. How to choose a Fort Lauderdale CPA firm
  {
    slug: "how-to-choose-fort-lauderdale-cpa-firm",
    title: "How to Choose a Fort Lauderdale CPA Firm: 12 Questions to Ask Before You Sign",
    excerpt:
      "Fort Lauderdale has hundreds of CPA firms. Most will file your taxes. Very few will help you grow. Here are the 12 questions to ask before hiring a Fort Lauderdale accountant — and the answers that should worry you.",
    date: "2026-10-28",
    readMinutes: 8,
    category: "Choosing an Accountant",
    relatedService: "business-accounting-bookkeeping",
    seo: {
      title: "How to Choose a Fort Lauderdale CPA Firm | NexGen Financial Experts",
      description:
        "12 questions to ask before hiring a Fort Lauderdale CPA — what separates a tax preparer from a strategic advisor, and the red flags that should worry you.",
    },
    body: [
      {
        paragraphs: [
          "Fort Lauderdale has more licensed CPAs per capita than most Florida cities. Open Google Maps and search \"Fort Lauderdale accountant\" and you will see dozens of firms within five miles of our office on Sunrise Boulevard. Most of them will file your tax return correctly. A handful will actually help you grow your business.",
          "The difference matters more than most owners realize. A tax preparer inputs last year's numbers, files this year's return, and bills you. A strategic advisor reviews your books quarterly, flags problems before they become audits, identifies credits you are missing, and structures your business to minimize tax next year — not just this one. Over ten years, the strategic advisor saves a typical Fort Lauderdale business owner $40,000 to $200,000 in taxes, fees, and missed opportunities that a tax preparer would never catch.",
          "Here are the 12 questions to ask before signing with a Fort Lauderdale CPA firm. Skip any of them and you are gambling on the largest recurring financial relationship of your business life.",
        ],
      },
      {
        heading: "1. Do you work with businesses my size?",
        paragraphs: [
          "Many Fort Lauderdale CPA firms are optimized for one of three sizes: solo freelancers, mid-market companies ($5M-$50M revenue), or enterprise clients. The right fit for your business is the firm whose typical client is just slightly larger than you — they have seen your problems a hundred times and have systems in place to handle them efficiently, but you are not so small that you get the junior staff.",
          "Ask for two or three current-client references in your revenue range. If the firm cannot produce them, walk away — you are an experiment for them, not a known problem set.",
        ],
      },
      {
        heading: "2. What is your response-time commitment?",
        paragraphs: [
          "Most CPA firms have no written response-time commitment. They answer when they answer. During tax season (January-April), the median response time from Fort Lauderdale firms stretches to 7-14 days for non-urgent client questions — unacceptable when you are trying to close a deal that requires financial statements or a verification letter.",
          "A firm worth hiring commits in writing: same-day response for urgent items, 48 hours for standard questions, one week for non-urgent work. We commit to these in our engagement letters. If your prospective CPA cannot put a number on it, they cannot commit to it.",
        ],
      },
      {
        heading: "3. Will I have a dedicated accountant or a rotation?",
        paragraphs: [
          "Many CPA firms rotate staff on your account. You meet Sarah in January, get transferred to Mark in March, and never see either again. Each transition loses institutional knowledge about your business — your history, your preferences, your unusual transactions — and you re-explain yourself from scratch.",
          "A firm worth hiring assigns a primary accountant to your account who stays with you for at least three years. The primary should be a senior staff member, not an intern. They should know your business well enough to email you about a transaction without re-reading your file. Ours do.",
        ],
      },
      {
        heading: "4. Do you do monthly bookkeeping, or only year-end tax?",
        paragraphs: [
          "Many Fort Lauderdale CPA firms describe themselves as full-service but in practice do year-end tax only. They take your QuickBooks file in March, file your return in April, and disappear until next March. The books are never reviewed monthly, problems compound for twelve months, and the year-end cleanup bill runs $3,000-$8,000 for what should have been a $200/month monthly bookkeeping service.",
          "Ask specifically: do you reconcile my books monthly, quarterly, or only at year-end? If only year-end, find another firm. The savings on year-end cleanup pay for the monthly service, and you get real-time financial visibility all year instead of an annual surprise.",
        ],
      },
      {
        heading: "5. What software do you support?",
        paragraphs: [
          "A modern Fort Lauderdale CPA should be fluent in QuickBooks Online, Xero, and at least one industry-specific package (Sage for construction, NetSuite for inventory-heavy businesses, or a healthcare-specific package). They should also support a paperless workflow — secure upload, e-signature, and a client portal — not require you to drop off physical envelopes at their office.",
          "If a firm insists on a single software platform you do not use, or refuses a paperless workflow, you are dealing with a firm optimized for the partner's convenience, not yours.",
        ],
      },
      {
        heading: "6. Do you offer fixed-fee pricing?",
        paragraphs: [
          "Hourly billing in CPA firms creates a structural conflict of interest: every minute they spend on your account is revenue, and there is no incentive to be efficient or to empower your team to do routine work themselves. Fixed-fee pricing aligns incentives — the firm is paid for the outcome (clean books, filed returns, no surprises), not for the time it took to produce them.",
          "Ask for a fixed-fee quote covering monthly bookkeeping, quarterly review, year-end financial statements, and annual tax return. The total should be a number you can budget. If the firm will not commit to a number, they are not committed to your cost discipline.",
        ],
      },
      {
        heading: "7. Do you file Florida sales tax returns?",
        paragraphs: [
          "Florida sales tax is the most common compliance failure we see, and many Fort Lauderdale CPA firms do not handle it. They file your federal and Florida corporate income tax return, but the DR-15 sales tax return — due monthly or quarterly depending on your collection volume — sits in your inbox. Six months in, the back-tax bill plus 10% penalty plus interest is $5,000-$30,000, depending on your collection volume.",
          "Ask specifically: do you file DR-15, what about county tourist-development tax, and do you handle the $5,000 surtax cap calculation? If the answers are vague, the firm is not deep in Florida sales tax.",
        ],
      },
      {
        heading: "8. Have you handled clients in my industry?",
        paragraphs: [
          "Industry specialization matters in accounting. A Fort Lauderdale CPA who has worked with five marine-services firms knows the $5,000 surtax cap on boat sales, the Broward Tourist Development Tax on charters, and the commercial-fishing vessel exemption. A generalist has never heard of any of these and will learn them on your dime.",
          "Ask how many clients in your industry the firm serves, and ask for a specific example of an industry-specific tax question they have handled in the last twelve months. If they cannot answer immediately, you are paying for their education.",
        ],
      },
      {
        heading: "9. What is your audit track record?",
        paragraphs: [
          "Most Fort Lauderdale CPA firms have clients get audited occasionally — the IRS audits about 0.4% of small business returns, and the Florida DOR audits sales tax filers more aggressively. The question is not whether the firm has had clients audited; it is how they handled it.",
          "Ask: in the last two years, how many of your clients have been audited? What was the outcome (no change, adjustment owed, adjustment refunded)? What did you charge for audit representation? A good firm has handled 20+ audits in the last two years, has a low average adjustment, and includes basic audit response in the engagement.",
        ],
      },
      {
        heading: "10. Who actually does the work?",
        paragraphs: [
          "In many Fort Lauderdale CPA firms, you meet the partner during the sales process, sign the engagement letter, and never see the partner again. The work is done by junior staff who may be one or two years out of college and earning $25-$35/hour. The partner reviews the work product — usually — but the judgment calls are made by people who have not seen enough businesses to make them well.",
          "Ask: who will be the day-to-day accountant on my account, what is their experience, and how often will I hear from the partner directly? If the partner will not commit to quarterly check-ins, the relationship is transactional, not advisory.",
        ],
      },
      {
        heading: "11. Do you offer tax planning, or only tax preparation?",
        paragraphs: [
          "Tax preparation is reactive — it reports what already happened. Tax planning is proactive — it changes what happens. The single largest tax savings most business owners never receive come from structuring decisions made in November and December (entity conversion, retirement plan funding, equipment purchases, bonus timing) before the year closes.",
          "Ask: do you meet with me in October-November for year-end planning, and is that included in the fee? If the firm only calls you in February to gather documents, you are a preparation client, not a planning client, and you are overpaying for tax.",
        ],
      },
      {
        heading: "12. What happens if I am unhappy?",
        paragraphs: [
          "Every CPA engagement letter includes a termination clause. Most are silent on refunds. If you are unhappy with the firm in May, three months into a twelve-month engagement, do you owe the rest of the year's fees? Can you leave with your books intact?",
          "Ask specifically: what is your termination policy? Are fees refundable for unperformed services? Will you provide my books in a clean QuickBooks file if I leave? A firm worth hiring has a clean answer — usually: 30 days' notice, pro-rated refund, full books export. A firm that hedges here has had unhappy clients before and is protecting itself.",
        ],
      },
      {
        heading: "The red flags that should worry you",
        paragraphs: [
          "Above and beyond the twelve questions, watch for these red flags:",
        ],
        bullets: [
          "No written response-time commitment — they answer when they answer.",
          "Hourly billing only — no incentive to be efficient.",
          "Junior staff assigned to your account with no partner oversight promised.",
          "Year-end only, no monthly bookkeeping option — you are a tax return, not a business.",
          "Cannot produce three client references in your industry and size range.",
          "Insists on physical envelope drop-off — not paperless, not modern.",
          "Vague answers about Florida sales tax, county tourist-development tax, or surtax cap.",
          "No year-end tax planning meeting — they file what you give them.",
          "Engagement letter silent on termination and refund policy.",
        ],
      },
      {
        heading: "How NexGen answers the 12 questions",
        paragraphs: [
          "We are biased, but we will answer the twelve questions for ourselves honestly. We work with Florida businesses in the $500K-$15M revenue range (size fit). We commit to same-day response for urgent items, 48 hours for standard questions (response time). You get a dedicated accountant for at least three years (no rotation). Monthly bookkeeping is core, not optional (real-time books). We support QuickBooks Online, Xero, and Sage (modern software). Fixed-fee pricing for monthly engagements (no hourly surprise bills). DR-15, county tourist-development tax, and the $5,000 surtax cap are all included (Florida sales tax deep). We specialize in marine, real estate, hospitality, healthcare, defense, and tech (industry fit).",
          "Audit representation is included in the engagement for routine correspondence audits (audit track record). Senior accountants do the day-to-day work, partners review and meet with you quarterly (who does the work). Year-end tax planning is mandatory, not optional (planning not preparation). 30-day termination, pro-rated refund, full QuickBooks export on request (termination policy). If you want to see what those answers look like in practice, schedule a free consultation and ask us the same twelve questions.",
        ],
      },
    ],
  },
  // 3. Multi-state tax for Florida businesses
  {
    slug: "multi-state-tax-guide-florida-businesses",
    title: "Multi-State Tax Guide for Florida Businesses: Nexus, Apportionment, and the SALT Cap",
    excerpt:
      "A Florida business selling to customers in Georgia, New York, or California can owe tax in three states. This guide explains nexus thresholds, apportionment formulas, the SALT cap workaround, and how to keep your Florida home base advantaged.",
    date: "2026-10-22",
    readMinutes: 9,
    category: "Multi-State Tax",
    relatedService: "tax-advisory-planning-services",
    seo: {
      title: "Multi-State Tax Guide for Florida Businesses | NexGen",
      description:
        "Florida businesses selling across state lines — nexus thresholds, apportionment formulas, the SALT cap workaround (PTET), and how to keep Florida your home base.",
    },
    body: [
      {
        paragraphs: [
          "Florida is one of the most tax-friendly states in the country for a business to call home: no personal income tax, a 5.5% corporate income tax with a $50,000 exemption, and no franchise tax for LLCs. But the moment your Florida business sells to customers in other states — a Tampa manufacturer shipping to Georgia, a Miami consultant with a New York client, a Fort Lauderdale software firm with California subscribers — you can owe tax in three or four states at once.",
          "Multi-state tax is the most common large-dollar compliance failure we see. Most Florida business owners assume that because they pay no Florida personal income tax, they also owe nothing out-of-state. They are wrong. The state where your customer sits generally has first claim on the income from that transaction, and Florida's tax-friendly rules do not protect you from out-of-state exposure.",
          "This guide covers the four concepts every multi-state Florida business owner needs to understand: nexus (when you owe tax in another state), apportionment (how much of your income is taxed there), the SALT cap workaround (Pass-Through Entity Tax), and the strategies that keep Florida your home base while keeping out-of-state exposure minimal.",
        ],
      },
      {
        heading: "Nexus — when you owe tax in another state",
        paragraphs: [
          "Nexus is the legal connection between your business and a state that gives that state the right to tax you. Historically, nexus required physical presence — an office, a warehouse, an employee in the state. After the Supreme Court's 2018 South Dakota v. Wayfair decision, most states adopted economic nexus: a threshold of sales into the state above which you owe sales tax even without physical presence.",
          "Economic nexus thresholds vary by state but typically fall between $100,000 of sales or 200 separate transactions into the state in a calendar year. California, New York, Texas, and most large states use the $100,000 threshold. A few states (notably Texas) use a higher threshold ($500,000) for franchise tax but a lower one for sales tax.",
          "For Florida-based businesses, the states where you most commonly trigger economic nexus (and owe tax) are: New York, California, Texas, Georgia, Illinois, Massachusetts, Pennsylvania, and New Jersey. These are large markets with aggressive revenue departments and active enforcement.",
        ],
      },
      {
        heading: "Income tax nexus vs. sales tax nexus",
        paragraphs: [
          "Nexus for income tax and nexus for sales tax are two separate tests. A Florida business can have sales tax nexus in a state without having income tax nexus there, and vice versa.",
          "Income tax nexus typically requires more — physical presence, payroll, or substantial sales (often $500,000+). Sales tax nexus typically requires less — most states use the Wayfair $100,000/200-transaction threshold. So a Florida software firm with $150,000 of subscribers in California probably owes California sales tax but might not owe California income tax. A Florida manufacturer with $2M of shipments to a California distributor probably owes both.",
        ],
      },
      {
        heading: "Apportionment — how much income is taxed in each state",
        paragraphs: [
          "When your business owes income tax in multiple states, you apportion your total income among them using a formula. Each state publishes its own formula — most states use a three-factor formula (property, payroll, sales) or a single-sales-factor formula (sales only). Florida uses a single-sales-factor formula for most C-corps, meaning only Florida-sourced sales count toward your Florida apportionment factor.",
          "The practical effect: when your Florida business sells across state lines, Florida gets a smaller share of your taxable income (good for your Florida tax bill), and other states claim a larger share (potentially bad if those states have higher rates than Florida's 5.5%). A Florida business with $1M of total income, $200,000 of which is sourced to California, will pay California at its 8.84% rate on the California-sourced portion and Florida at 5.5% on the Florida-sourced portion — with credits available to prevent double taxation, but only for C-corps.",
        ],
      },
      {
        heading: "The SALT cap workaround — Pass-Through Entity Tax (PTET)",
        paragraphs: [
          "The 2017 federal tax law (TCJA) capped the federal deduction for state and local taxes (SALT) at $10,000 per individual per year. For a high-income pass-through business owner in a high-tax state, this cap cost $20,000-$50,000 a year in additional federal tax. The Pass-Through Entity Tax (PTET) is a workaround: the entity (LLC, S-corp, partnership) elects to pay state tax at the entity level, which is deductible in full on the entity's federal return, bypassing the $10,000 individual cap.",
          "More than 30 states have adopted a PTET election, including California, New York, New Jersey, Connecticut, and Illinois. Florida has not adopted one — but Florida has no personal income tax, so the SALT cap does not bite Florida business owners on Florida income. The PTET matters for Florida business owners with out-of-state income sourced to high-tax states: a Florida LLC with $500K of New York-sourced income can elect NY PTET, pay the 6.85% NY entity tax, and deduct the full $34,000 on the federal return — instead of being capped at $10,000.",
          "We help multi-state Florida business owners evaluate the PTET election each year. The math depends on your individual federal bracket, your entity's income sourced to PTET states, and whether your state allows the credit to flow through to your individual return. Done right, the election saves $5,000-$40,000 per year for affected owners.",
        ],
      },
      {
        heading: "Section 199A QBI deduction — and how multi-state income affects it",
        paragraphs: [
          "Section 199A allows a 20% deduction on qualified business income (QBI) from pass-through entities (S-corps, partnerships, LLCs). For a Florida business owner with $300,000 of pass-through income, the 199A deduction can save $15,000-$60,000 in federal tax — but the deduction phases out above income thresholds that depend on filing status and whether you have W-2 employees.",
          "Multi-state income does not kill the 199A deduction, but it complicates the calculation. QBI is computed at the entity level, but the deduction is taken at the individual level, and the income that flows through is the income sourced to your resident state. If you are a Florida resident with $400,000 of pass-through income, $100,000 sourced to California, the California-sourced income still counts toward your QBI, but you may owe California tax on it without the 199A benefit at the California level (California conforms to federal 199A for state purposes, but the deduction applies against federal taxable income, not state).",
          "We compute the 199A deduction correctly for multi-state owners, including the W-2 wage limitation, the UBIA of property limitation, and the SSTB (specified service trade or business) exclusion. For SSTB owners — doctors, lawyers, consultants, financial advisors — the phaseout thresholds are different and the deduction disappears above a certain income level.",
        ],
      },
      {
        heading: "Foreign income — when Florida business meets the world",
        paragraphs: [
          "Florida's international business base — particularly in Miami-Dade — frequently involves foreign subsidiaries, foreign owners, or foreign customers. The compliance load grows substantially:",
        ],
        bullets: [
          "Foreign ownership of a U.S. LLC triggers Form 5472 reporting (failure penalty: $25,000 per year).",
          "U.S. persons with foreign accounts over $10,000 must file FBAR (FinCEN 114) — failure penalty: $10,000 per year, up to 50% of account balance for willful violations.",
          "U.S. persons with ownership in foreign corporations file Form 5471 — failure penalty: $10,000 per year.",
          "Foreign partners in U.S. partnerships trigger IRC §1446 withholding — the partnership must withhold on the foreign partner's share of effectively connected income.",
          "Foreign sellers of U.S. real property trigger FIRPTA withholding under IRC §1445 — typically 15% of the sales price.",
        ],
      },
      {
        heading: "Strategies to minimize out-of-state exposure",
        paragraphs: [
          "There is no legal way to avoid all out-of-state tax if you do business in a state — but several strategies minimize exposure while remaining compliant:",
        ],
        bullets: [
          "Structure sales through a single-state entity (Florida LLC) and pay other states only on the income sourced there, rather than triggering broader nexus through a physical presence.",
          "Use independent contractors rather than employees in other states — many states do not treat a single contractor as creating income tax nexus.",
          "Track sales into each state monthly so you know when you cross an economic-nexus threshold and need to register before the year ends.",
          "Make the PTET election in high-tax states where you have substantial sourced income — the federal deduction usually outweighs the state cost.",
          "For inventory held in other states (Amazon FBA, distribution centers), check whether the inventory alone creates income tax nexus — historically it did, and many states still follow this rule.",
          "Where possible, contractually source sales to the customer's state and let them be responsible for use-tax reporting — only works for B2B wholesale and exemption-certificate transactions.",
        ],
      },
      {
        heading: "How NexGen handles multi-state Florida businesses",
        paragraphs: [
          "We file federal and Florida returns for our Florida clients, plus state returns in Georgia, New York, California, Texas, New Jersey, Illinois, Massachusetts, and most other states where Florida businesses commonly trigger nexus. We track sales-into-state monthly so we can flag a registration requirement before the threshold is crossed. We compute the PTET election and 199A deduction correctly for multi-state owners. We handle the foreign-ownership reporting (Form 5472, FBAR, Form 5471) for our international Florida business clients, particularly in Miami-Dade.",
          "If your Florida business sells across state lines and you are not certain whether you owe tax elsewhere, schedule a free consultation. We will look at your last twelve months of sales by state and tell you exactly where you have nexus, where you should register, and what the next year's compliance load will look like — at no cost.",
        ],
      },
    ],
  },
  // 4. Florida startup entity selection
  {
    slug: "florida-startup-entity-selection-guide",
    title: "Florida Startup Entity Selection Guide: LLC, S-Corp, C-Corp, and When Each Pays Off",
    excerpt:
      "Choosing the wrong entity structure costs a Florida startup $10,000-$40,000 in its first three years. This guide walks through LLC, S-corp, C-corp, and partnership trade-offs — with the breakeven numbers for each.",
    date: "2026-10-15",
    readMinutes: 9,
    category: "Startups & Entity Structuring",
    relatedService: "financial-advisory-for-startups",
    seo: {
      title: "Florida Startup Entity Selection Guide | NexGen Financial Experts",
      description:
        "LLC vs S-corp vs C-corp for Florida startups — self-employment tax savings, 199A QBI deductions, C-corp flat rate, investor preferences, and the breakeven numbers.",
    },
    body: [
      {
        paragraphs: [
          "The single most expensive decision a Florida startup makes in its first year is the choice of entity structure. Get it right and you save $10,000-$40,000 in the first three years through self-employment tax savings, qualified business income deductions, and avoided compliance costs. Get it wrong and you pay for it every year until you restructure — at which point you pay again to convert.",
          "Florida is an unusually clean laboratory for entity analysis because the state has no personal income tax. That means the federal tax treatment dominates the state-level picture, and your decision comes down to federal self-employment tax, federal income tax, the Section 199A QBI deduction, investor expectations, and exit plans. This guide walks through the four realistic choices — LLC (taxed as sole prop or partnership), S-corp, C-corp, and partnership — with the breakeven numbers for each.",
        ],
      },
      {
        heading: "The four entity structures and their federal tax treatment",
        paragraphs: [
          "Every Florida startup chooses one of four federal tax structures, even if the legal form is the same. An LLC can be taxed as a sole proprietorship, partnership, S-corp, or C-corp — the legal form is a state-law question, the tax classification is a federal election. Here are the four most common combinations and how the federal tax breaks down:",
        ],
        bullets: [
          "Single-member LLC taxed as sole proprietorship — default; profits flow to the owner's Schedule C; owner pays self-employment tax (15.3%) on all profit plus income tax.",
          "Multi-member LLC taxed as partnership — default; profits flow to the partners' personal returns; partners pay self-employment tax on their share.",
          "LLC or corporation taxed as S-corp — election required (Form 2553); profits flow to the owner's personal return; owner pays themselves a reasonable salary (subject to FICA) and takes the rest as distributions (not subject to FICA).",
          "Corporation taxed as C-corp — default for corporations; the corporation pays 21% federal tax on its own profit, then shareholders pay tax on dividends.",
        ],
      },
      {
        heading: "Self-employment tax — the S-corp's biggest advantage",
        paragraphs: [
          "The single largest tax saving most small-business owners never collect is the self-employment tax reduction from electing S-corp status. As a sole proprietor, you pay 15.3% self-employment tax on all net profit (up to the Social Security wage base, plus 2.9% Medicare above). As an S-corp owner, you pay FICA only on your W-2 wage — the rest of the profit passes through as distributions, free of FICA.",
          "The breakeven is roughly $80,000 of net profit. Below that, the cost of running a separate payroll (and the reasonable-compensation analysis the IRS requires) eats most of the savings. Above $80,000, the S-corp saves roughly 15.3% of every dollar above your reasonable salary — typically $5,000-$15,000 per year for a $150,000-profit owner, $15,000-$40,000 per year for a $400,000-profit owner.",
          "The trap: the IRS requires S-corp owners to take a \"reasonable compensation\" salary before any distribution. Set the salary too low (a common abuse — $1 salary plus $200,000 distributions) and the IRS recharacterizes distributions as wages, with back taxes, penalties, and interest. We help S-corp owners set a defensible reasonable salary using industry benchmarks and role-based compensation data.",
        ],
      },
      {
        heading: "Section 199A QBI deduction — another pass-through advantage",
        paragraphs: [
          "Section 199A gives pass-through owners (sole props, partnerships, S-corps) a 20% deduction on qualified business income (QBI). The deduction is taken at the individual level, reducing taxable income directly. For a Florida business owner with $200,000 of QBI in the 24% federal bracket, the 199A deduction saves roughly $9,600 per year.",
          "The deduction phases out above income thresholds — for 2026, the phaseout begins around $383,900 of total taxable income for married filers and $191,950 for single filers. Above those thresholds, two limitations apply: (1) the W-2 wage limitation (QBI deduction capped at 50% of W-2 wages or 25% of wages plus 2.5% of property), and (2) the SSTB exclusion (specified service trades or businesses — doctors, lawyers, consultants, financial advisors — lose the deduction entirely above the upper threshold).",
          "C-corps do not get the 199A deduction. The 21% flat C-corp rate is set in stone; the pass-through deduction is layered on top of the individual brackets. For a profitable business where the owner takes most of the profit out, the pass-through structure usually wins on federal tax alone — even before considering the S-corp self-employment savings.",
        ],
      },
      {
        heading: "When a C-corp still makes sense",
        paragraphs: [
          "Despite the double-tax reputation, C-corps make sense for a small set of situations:",
        ],
        bullets: [
          "You are raising institutional venture capital — VCs require a C-corp; pass-throughs create tax headaches for tax-exempt LPs and foreign investors.",
          "You plan to sell the company within five years and qualify for Section 1202 QSBS — the first $10M of gain on qualified small business stock is federal-tax-free if held for 5+ years.",
          "You are reinvesting all profits back into the business — the 21% C-corp rate beats the top individual 37% rate when no profit is taken out, until you eventually sell or distribute.",
          "You need multiple classes of stock with different economic rights — preferred, common, options — C-corps handle this cleanly; S-corps cannot have more than one class.",
        ],
      },
      {
        heading: "Partnerships — when more than one owner is involved",
        paragraphs: [
          "Multi-member LLCs default to partnership tax treatment. Partnerships offer flexibility: partners can split profits in any agreed ratio, contribute appreciated property tax-free, and receive special allocations of income, gain, loss, or deduction. The downside is compliance complexity — a partnership return (Form 1065) is more involved than a corporate return, K-1s flow to each partner, and partnership audit rules under the BBA (Bipartisan Budget Act of 2015) can leave the partnership on the hook for audit adjustments at the entity level.",
          "For two-or-three-owner professional firms (law firms, medical practices, consulting shops), partnership taxation with a strong operating agreement is usually the right structure. For two-or-three-owner startups planning to raise outside capital, an LLC taxed as a C-corp (or converting to C-corp) is usually the right structure. We help founders choose, draft the operating agreement, and handle the IRS election.",
        ],
      },
      {
        heading: "Florida-specific entity considerations",
        paragraphs: [
          "Florida's state tax rules layer on top of the federal picture, and most of them favor pass-throughs:",
        ],
        bullets: [
          "Florida has no personal income tax — pass-through income from an LLC or S-corp flows to the owner's Florida return with zero state tax.",
          "Florida's corporate income tax is 5.5% for tax years beginning on or after January 1, 2022 (Source: Florida Department of Revenue, Tax and Interest Rates) — but with a $50,000 exemption that effectively shelters the first ~$45,000 of C-corp net income.",
          "Florida has no franchise tax on LLCs (unlike California, Delaware, Texas, and several others) — the annual report fee for an LLC is $138.75, and the corporate filing fee is $150.",
          "Florida does not charge a documentary stamp tax on the issuance of ownership interests in an LLC (unlike New York, Illinois, and Pennsylvania).",
          "Foreign (out-of-state) LLCs operating in Florida must file a Foreign LLC Authorization ($50 fee) plus an annual report — the same fee structure as a domestic LLC.",
        ],
      },
      {
        heading: "The breakeven numbers, by owner profit",
        paragraphs: [
          "We have built a calculator that maps entity choice against owner profit, factoring in self-employment tax, the 199A deduction, and Florida state tax. Here are the rough breakevens:",
        ],
        bullets: [
          "Profit under $60K — Sole prop LLC. No payroll cost, full 199A deduction, simple Schedule C. Total tax: $9,180 SE + ~$5,500 income = ~$14,700.",
          "Profit $60K-$80K — Convert to S-corp if you can sustain payroll cost of $1,500/year. The savings start at about $80K but are small below that.",
          "Profit $80K-$200K — S-corp with reasonable salary ~$50K. Savings: $5K-$25K/year vs sole prop.",
          "Profit $200K-$383K (married) — S-corp still wins, but the 199A deduction starts to phase out. Watch for the W-2 wage limitation.",
          "Profit $383K+ (married) — Consider C-corp if you reinvest profits; otherwise S-corp with aggressive reasonable-comp analysis.",
          "Profit $500K+ and seeking VC funding — Convert to C-corp before the round, typically as a Delaware C-corp by convention.",
        ],
      },
      {
        heading: "How NexGen helps Florida founders choose",
        paragraphs: [
          "We sit down with every new Florida founder for a free 30-minute consultation, walk through their business plan, and recommend an entity structure with the federal and Florida tax math laid out. We register the entity with the Florida Division of Corporations (Sunbiz), obtain the EIN, draft the operating agreement, and file the IRS classification election. Total onboarding cost: $1,500 for a standard LLC, $2,500 for an S-corp election or partnership, $3,500 for a C-corp.",
          "If you are already in business and wondering whether to convert, we run the same analysis at no charge — most conversions save $5,000-$15,000 in the first year and pay for themselves within 12-18 months. Schedule a free consultation and we will run the numbers on your actual profit.",
        ],
      },
    ],
  },
  // 5. Fractional CFO for Florida small businesses
  {
    slug: "fractional-cfo-florida-small-business-guide",
    title: "Fractional CFO for Florida Small Businesses: What You Get, What It Costs, When You Need One",
    excerpt:
      "A full-time CFO costs $250K-$400K plus benefits. A fractional CFO costs $3K-$8K per month and gives a $2M-$15M Florida business the same strategic financial leadership — but on a part-time basis. When is the right time?",
    date: "2026-10-08",
    readMinutes: 8,
    category: "Fractional CFO & Advisory",
    relatedService: "startup-fractional-cfo-services",
    seo: {
      title: "Fractional CFO for Florida Small Businesses | NexGen",
      description:
        "What a fractional CFO does for a $2M-$15M Florida business, what it costs ($3K-$8K/month), and the four signs you need one — with a real client example.",
    },
    body: [
      {
        paragraphs: [
          "Most Florida business owners know they need a CPA to file taxes and an accountant to keep the books. Far fewer know when they need a CFO — the strategic financial leader who forecasts cash, raises capital, manages banking relationships, and tells the owner the truth about whether the business can afford its plans.",
          "A full-time CFO in Florida costs $250,000-$400,000 a year plus benefits. For a $10M-revenue business, that is 3-4% of revenue — more than most owners can justify. A fractional CFO costs $3,000-$8,000 a month, gives the business 20-50% of a CFO's time, and delivers the same strategic financial leadership at 15-30% of the cost. For a Florida business with $2M-$15M in revenue, a fractional CFO is usually the right-sized answer.",
          "This guide explains what a fractional CFO actually does, the four signs you need one, what to expect to pay, and a real example of a Florida client we serve in this model.",
        ],
      },
      {
        heading: "What a fractional CFO actually does",
        paragraphs: [
          "A fractional CFO does the work most owners do not have time to do, and most bookkeepers do not have the experience to do. The five core deliverables of a fractional CFO engagement:",
        ],
        bullets: [
          "13-week rolling cash flow forecast — updated weekly, showing every cash inflow and outflow expected over the next quarter. The single most valuable artifact a CFO produces; without it, the owner is flying blind.",
          "Monthly financial statement review with the owner — interpret the numbers, explain the variances, surface the issues, recommend the next moves.",
          "Annual budget and quarterly reforecast — what the next twelve months look like, what the next quarter looks like, and where the actuals deviate from plan.",
          "Banking relationship management — the covenant reporting, the credit line draws, the renewal negotiations, the new-debt modeling. Most owners hate this work; CFOs do it well.",
          "Capital-raise and exit planning — when the business needs debt, equity, or a sale, the CFO prepares the financials, models the deal, and runs diligence with the buyer or lender.",
        ],
      },
      {
        heading: "Four signs you need a fractional CFO",
        paragraphs: [
          "Most Florida business owners wait too long to bring in a CFO. The four signs we look for in prospective clients:",
        ],
        bullets: [
          "Revenue has grown 30%+ in the last year and the owner is no longer confident about cash. Growth eats cash, and growth that exceeds the owner's intuition about cash is the #1 reason mid-market businesses fail despite being profitable on paper.",
          "The owner is personally doing the monthly financial review, the banking calls, and the cash management — and doing it badly because they have 30 other things to do. The CFO's first job is to take this off the owner's plate.",
          "You are about to make a significant financial decision — a bank loan, an equipment lease, a partnership buyout, an acquisition. The cost of a fractional CFO for the three months around the deal is far less than the cost of a bad deal.",
          "Your current CPA or bookkeeper gives you the numbers but does not interpret them. A bookkeeper tells you the revenue was $400,000 last month. A CFO tells you the gross margin dropped 4 points because the new contract pricing was mis-set, and that you need to renegotiate before Q1 closes.",
        ],
      },
      {
        heading: "What a fractional CFO costs in Florida",
        paragraphs: [
          "Fractional CFO pricing in Florida varies by the depth of engagement and the experience of the CFO. The three common models:",
        ],
        bullets: [
          "Light model — $3,000-$5,000/month, 10-15 hours/week. Monthly financial review, weekly cash forecast, banking calls as needed. Good for $2M-$5M businesses with stable operations.",
          "Standard model — $5,000-$8,000/month, 20-30 hours/week. All of the above plus annual budget, quarterly reforecast, board-pack preparation, light deal support. Good for $5M-$15M businesses with growth plans.",
          "Heavy model — $8,000-$15,000/month, 30-40 hours/week. All of the above plus active deal support, capital-raise management, M&A diligence, system implementations. Good for $10M-$30M businesses in transaction mode.",
        ],
      },
      {
        heading: "Fractional CFO vs. controller vs. bookkeeper",
        paragraphs: [
          "Owners often confuse these three roles, but they are fundamentally different in what they deliver and what they cost:",
        ],
        bullets: [
          "Bookkeeper ($200-$600/month) — records transactions, reconciles accounts, produces the raw numbers. Backward-looking, transactional, low-strategic.",
          "Controller ($1,500-$4,000/month) — oversees the bookkeeping, produces monthly financial statements, manages payroll, handles sales tax. Backward-looking but with structure and accuracy.",
          "Fractional CFO ($3,000-$8,000/month) — interprets the numbers, forecasts cash, models decisions, manages banking relationships, plans capital. Forward-looking and strategic.",
          "Full-time CFO ($250,000-$400,000/year) — all of the above plus in-person leadership, daily decision authority, M&A execution, board representation. For businesses over $30M in revenue.",
        ],
      },
      {
        heading: "A real Florida client example",
        paragraphs: [
          "A Fort Lauderdale marine-services firm came to us in early 2026 with $4.2M revenue and a chronic cash problem — profitable on paper, but the owner had personally guaranteed $800K of credit-line draws and was unsure whether to renew or restructure. Their bookkeeper produced monthly statements but could not answer the question \"can we afford to add a third vessel?\"",
          "We took on a standard fractional CFO engagement at $6,500/month. In the first 60 days, we: (1) built a 13-week rolling cash forecast that showed the credit-line draws were unsustainable past September, (2) renegotiated the line with their bank from prime + 2.5% to prime + 1.5%, saving $34,000 in annual interest, (3) modeled the third-vessel decision against three financing scenarios, recommending a $250K equipment lease that freed $80K of working capital, and (4) prepared a Q1 board pack the owner actually understood.",
          "Total annualized cost: $78,000. Total documented savings and avoided cost: $115,000 in interest, lease structure, and credit-line renegotiation. Net positive ROI within the first year, plus the owner got their evenings and weekends back.",
        ],
      },
      {
        heading: "How to evaluate a fractional CFO candidate",
        paragraphs: [
          "If you are hiring a fractional CFO (from NexGen or anyone else), ask these four questions:",
        ],
        bullets: [
          "How many of your current clients are in my revenue range and industry? — a CFO who has done $5M marine-services is worth 5x a CFO who has done $50M SaaS.",
          "Show me a sample 13-week cash forecast from a current client (with names redacted). — if they cannot produce this, they are not a CFO, they are a controller.",
          "What is your response-time commitment, and how do you handle urgent requests? — same-day for cash-related items, 48 hours for standard. Anything less is unacceptable.",
          "What is the exit ramp if we outgrow you or decide to hire full-time? — a good fractional CFO has a clean handoff plan and helps you hire their full-time replacement.",
        ],
      },
      {
        heading: "How to start with a fractional CFO at NexGen",
        paragraphs: [
          "Every fractional CFO engagement begins with a free 30-minute consultation. We walk through your last twelve months of financials, identify the top three issues a CFO would address, and propose the right service level (light, standard, or heavy). If you do not need a CFO yet — and some businesses genuinely do not — we tell you that and recommend a controller or bookkeeper instead.",
          "If we do move forward, the first 90 days are the highest-impact period. You will get the 13-week cash forecast in week two, the first monthly review with variance analysis in week four, the annual budget in week eight, and the banking relationship review in week twelve. By the end of the first quarter, you will have the financial visibility most owners only get after three years of trying to do it themselves. Schedule a free consultation to start.",
        ],
      },
    ],
  },
  // 6. Florida small business bookkeeping essentials
  {
    slug: "florida-small-business-bookkeeping-essentials",
    title: "Florida Small Business Bookkeeping Essentials: Chart of Accounts, Sales Tax Tracking, and Monthly Close",
    excerpt:
      "A practical guide to setting up bookkeeping for a Florida small business — chart of accounts, sales tax tracking by county, monthly close checklist, and the three reports you should look at every single month.",
    date: "2026-10-01",
    readMinutes: 8,
    category: "Bookkeeping",
    relatedService: "business-accounting-bookkeeping",
    seo: {
      title: "Florida Small Business Bookkeeping Essentials | NexGen",
      description:
        "Chart of accounts setup, sales tax tracking by county (Broward 1% vs Hillsborough 2.5%), monthly close checklist, and the three reports every Florida owner should look at monthly.",
    },
    body: [
      {
        paragraphs: [
          "Bookkeeping is not glamorous, but it is the foundation of every financial decision a Florida business owner makes. Clean monthly books produce accurate tax returns, defendable financial statements for a bank, and real-time visibility into whether the business is making or losing money. Dirty books produce back-tax bills, blown bank covenants, and surprises in March that should have been visible in October.",
          "This guide walks through the three things every Florida small business needs to get right in its bookkeeping: a chart of accounts designed for the business (not a generic template), sales tax tracking by county (because Florida's surtax rates vary by jurisdiction), and a monthly close checklist that catches errors before they compound.",
        ],
      },
      {
        heading: "Chart of accounts — design for your business, not a template",
        paragraphs: [
          "A chart of accounts (COA) is the list of accounts in your general ledger — revenue accounts, expense accounts, asset accounts, liability accounts, equity accounts. Most new Florida businesses start with whatever QuickBooks or Xero gives them by default — usually 30-40 accounts — and never customize it. The result is a COA designed for a generic service business that hides the specific economics of your business.",
          "A marine-services firm needs separate revenue accounts for vessel sales (subject to the $5,000 surtax cap), vessel service (not subject to the cap), and charter revenue (subject to tourist development tax). A restaurant needs separate revenue accounts for dine-in food, takeout food, alcohol, and merchandise — because each has a different sales tax treatment in some counties. A real estate developer needs separate revenue accounts for land sales, finished-unit sales, and rental income — because each has a different documentary stamp tax treatment.",
          "We design a custom COA for every new client based on their industry, business model, and Florida-specific tax treatments. The cost is included in the onboarding; the value shows up in every monthly close for the rest of the engagement.",
        ],
      },
      {
        heading: "Florida sales tax tracking — by county, not by rate",
        paragraphs: [
          "Florida's combined sales tax rate varies by county — from 6.5% in Citrus and Collier to 8.5% in Hillsborough. If your business sells to customers in multiple counties (which most Florida businesses do), you must track sales by county, not by rate. A single rate bucket will fail when a county changes its surtax rate.",
          "The practical implementation: in QuickBooks Online, set up sales tax items for each county where you sell. When you record an invoice, select the county-specific tax item. At the end of the month, your sales tax liability report breaks down by county, and the DR-15 return pulls directly from that breakdown.",
          "For high-volume businesses (retail, hospitality), the county-level tracking can be automated by integrating your point-of-sale system with QuickBooks and configuring the county in the customer record. We help clients set up this integration; it saves 10-20 hours per month of manual sales tax work and eliminates the most common filing error — reporting all sales at the business's local rate when customers are actually in other counties.",
        ],
      },
      {
        heading: "The $5,000 surtax cap — track it separately",
        paragraphs: [
          "Florida's county surtax caps at the first $5,000 of any single item. The remaining balance is taxed at the 6% state rate only. Most accounting systems handle this badly — they apply the combined rate to the full invoice, over-collecting surtax by up to $125 per item in Tampa (where surtax is 2.5%).",
          "If your business routinely sells items above $5,000 (marine, construction, B2B equipment), you need a separate sales tax item for the \"surtax-capped portion\" and the \"state-rate-only portion.\" We configure this for clients by setting up two tax items per county: one for the first $5,000 (state + surtax), one for the balance (state only). The invoice then splits the line item into two taxable lines, and the surtax is correctly capped.",
          "For businesses with thousands of monthly transactions above $5,000, we recommend a third-party sales tax engine (Avalara, TaxJar, or the QuickBooks sales tax add-on) that handles the cap automatically. The annual subscription ($300-$1,500) pays for itself in the first quarter by preventing over-collections.",
        ],
      },
      {
        heading: "The monthly close — a checklist that catches errors",
        paragraphs: [
          "Monthly close is the process of finalizing the books for the month — reconciling accounts, posting adjustments, and producing financial statements. Most Florida small businesses either skip it entirely (the books are \"always open\" and never reconciled) or do it badly (one account reconciled, the others left dirty).",
          "A proper monthly close follows a checklist. We use the same checklist for every client, every month:",
        ],
        bullets: [
          "Reconcile every bank and credit card account — every account, every month, no exceptions. Unreconciled accounts are the #1 source of bookkeeping errors.",
          "Reconcile every loan account against the lender's statement — split the payment between interest and principal correctly. Most businesses leave the full payment as a generic \"loan payment\" expense, distorting both interest expense and the loan balance.",
          "Review the Accounts Receivable aging — flag anything over 90 days. Most uncollectible AR is identifiable at 90 days; waiting until 180 days means writing off twice as much.",
          "Review the Accounts Payable aging — flag anything over 60 days. Late-payment penalties and lost early-payment discounts cost a typical business 0.5-1% of AP spend annually.",
          "Review the inventory valuation — confirm the count matches the physical inventory (or schedule a count if it doesn't). Inventory shrinkage is the #2 source of bookkeeping errors after unreconciled accounts.",
          "Post adjusting journal entries for accruals, depreciation, and prepaid expenses — these are required for accrual-basis books; cash-basis books skip them but lose accuracy on profitability.",
          "Produce the three reports: Profit & Loss, Balance Sheet, Statement of Cash Flows. Every owner should review these three every month — not just at year-end.",
          "Lock the period in QuickBooks — once closed, the period cannot be edited. This prevents accidental back-dated entries that destroy the audit trail.",
        ],
      },
      {
        heading: "The three reports every owner should look at monthly",
        paragraphs: [
          "Most Florida business owners glance at their P&L once a year and call it financial management. That is like driving with the windshield blacked out and only looking in the rearview mirror at the end of the trip. Three reports, every month, change the game:",
        ],
        bullets: [
          "Profit & Loss (P&L) — revenue, cost of goods sold, gross profit, operating expenses, net income. Compare to the same month last year and to your budget. Watch for the gross margin percentage — the single most important number on a P&L.",
          "Balance Sheet — assets, liabilities, equity. The balance sheet tells you whether the business is solvent; the P&L tells you whether it is profitable. Both matter; many profitable businesses go bankrupt because the balance sheet was a disaster the owner never looked at.",
          "Statement of Cash Flows — operating, investing, financing cash. Cash is not profit. A profitable business can run out of cash; an unprofitable business can have plenty. The cash flow statement reconciles the two and is the report most owners understand least.",
        ],
      },
      {
        heading: "Software choices for Florida small businesses",
        paragraphs: [
          "Three software packages cover 90% of Florida small businesses:",
        ],
        bullets: [
          "QuickBooks Online — the dominant choice for $500K-$15M service and retail businesses. $30-$200/month depending on tier. Good sales tax tracking, good Florida bank integration, broad accountant ecosystem.",
          "Xero — the strongest alternative to QuickBooks Online, particularly for businesses with international operations or e-commerce. $20-$80/month. Clean UI, strong multi-currency, growing Florida accountant support.",
          "Sage 50 / Sage Intacct — for construction, manufacturing, and not-for-profits. $400-$5,000/year. Better inventory and job-costing than QuickBooks; steeper learning curve.",
        ],
      },
      {
        heading: "How NexGen sets up bookkeeping for a new client",
        paragraphs: [
          "Every new bookkeeping engagement at NexGen starts with the same onboarding process: (1) review the existing books and identify the top three issues, (2) design a custom chart of accounts for the industry and Florida-specific tax treatments, (3) set up sales tax tracking by county with the $5,000 surtax cap where relevant, (4) connect all bank and credit card accounts for automated feeds, (5) run the first monthly close and produce the three reports, (6) walk the owner through the numbers in a 60-minute call. Total onboarding: 2-3 weeks at a fixed fee of $1,500-$3,000 depending on the state of the books.",
          "If your books are already a mess and you are not sure where to start, schedule a free consultation. We will look at your current QuickBooks or Xero file, tell you what is wrong, give you a fixed-fee quote to fix it, and start clean. The cost of fixing messy books is always less than the cost of leaving them messy — and the sooner you fix them, the cheaper the fix.",
        ],
      },
    ],
  },
  // 7. Florida R&D tax credit
  {
    slug: "florida-rd-tax-credit-guide",
    title: "Florida R&D Tax Credit Guide: How Manufacturers and Tech Firms Claim the Credit",
    excerpt:
      "The Florida R&D tax credit is 10% of qualified research expenses above a base amount, up to $250,000 per year. Most eligible Florida manufacturers and tech firms never claim it. Here is who qualifies, how it works, and what to document.",
    date: "2026-09-24",
    readMinutes: 8,
    category: "Tax Credits & Incentives",
    relatedService: "business-tax-filing-preparation",
    seo: {
      title: "Florida R&D Tax Credit Guide | NexGen Financial Experts",
      description:
        "The Florida R&D tax credit is 10% of qualified research expenses, up to $250K/year. Eligibility, qualified expenses, base amount calculation, and how to document the credit properly.",
    },
    body: [
      {
        paragraphs: [
          "The Florida Research and Development Tax Credit is one of the most under-claimed tax incentives in the state. Modeled on the federal IRC §41 credit, it gives eligible Florida C-corps a 10% credit on qualified research expenses above a base amount, with a maximum annual credit of $250,000 per taxpayer. We have identified $30,000-$80,000 per year in unclaimed credit for manufacturing, biotech, software, and aerospace clients who had no idea they qualified.",
          "The reason most eligible Florida businesses miss the credit is simple: it is not advertised, it is not on the standard Florida corporate income tax return, and most general tax preparers do not know the rules. This guide walks through who qualifies, what counts as qualified research, how the base amount is computed, and how to document the credit to survive an audit.",
        ],
      },
      {
        heading: "Who is eligible for the Florida R&D credit",
        paragraphs: [
          "Eligibility for the Florida R&D credit has three components:",
        ],
        bullets: [
          "Entity type — only Florida C-corporations qualify. S-corps, partnerships, LLCs (unless taxed as C-corps), and sole proprietorships do not qualify at the state level — they may still claim the federal §41 credit, which then flows through to the owners.",
          "Industry — the credit applies broadly to any C-corp conducting qualified research in Florida. Manufacturing, biotech, software, aerospace, marine engineering, and food-science firms are the most common qualifiers.",
          "Activity — the activity must meet the four-part test (described below) for qualified research. Not every R&D-looking activity qualifies — most routine product development does not.",
        ],
      },
      {
        heading: "The four-part test for qualified research",
        paragraphs: [
          "Both the federal §41 credit and the Florida R&D credit use the same four-part test to determine whether an activity qualifies as research. All four parts must be met:",
        ],
        bullets: [
          "Permitted purpose — the activity is intended to create a new or improved business component (product, process, software, formula, technique) for the taxpayer's own use or for sale.",
          "Technological in nature — the activity relies on principles of the hard sciences (physics, chemistry, biology, engineering, computer science). Marketing, management, and legal activities are excluded.",
          "Process of experimentation — the activity involves a process of evaluating alternatives through modeling, simulation, or systematic trial and error. \"We tried it and it worked\" does not qualify; \"we tested three approaches, measured the results, and chose the best\" does.",
          "Substantial uncertainty — at the outset, there is substantial uncertainty about the capability or method for developing the business component. If you know how to build it before you start, it is not research.",
        ],
      },
      {
        heading: "What counts as a qualified research expense",
        paragraphs: [
          "Qualified research expenses (QREs) fall into three categories:",
        ],
        bullets: [
          "In-house wages — wages paid to employees directly performing, supporting, or supervising qualified research. Time-tracking by project is required; a flat 100% allocation is not defensible.",
          "In-house supplies — materials and supplies consumed in the conduct of qualified research. Includes lab supplies, prototype materials, and consumable tooling. Excludes capital equipment, which is depreciated separately.",
          "Contract research — payments to third parties for qualified research performed on the taxpayer's behalf. Capped at 65% of the contract value (i.e., only 65% of contract research costs count toward QREs).",
        ],
      },
      {
        heading: "The base amount — and how the credit is computed",
        paragraphs: [
          "The Florida R&D credit is 10% of the current-year QREs that exceed a base amount. The base amount is the greater of (a) 50% of the current-year QREs, or (b) a fixed-base percentage applied to the taxpayer's average annual gross receipts for the prior four years.",
          "For most new C-corps without historical R&D activity, the fixed-base percentage is 3% (the statutory minimum for startups). The base amount is 3% of the prior-four-year average gross receipts. The credit equals 10% of current QREs above that base.",
          "Example: a 5-year-old Florida C-corp with $4M in average gross receipts over the prior four years and $300,000 of current-year QREs. The base amount = max(50% × $300K, 3% × $4M) = max($150K, $120K) = $150K. The credit = 10% × ($300K - $150K) = $15,000. For a 3-year-old C-corp with $2M average gross receipts and $200K of QREs, the credit = 10% × ($200K - $100K) = $10,000.",
        ],
      },
      {
        heading: "The $250,000 annual cap — and the carryforward",
        paragraphs: [
          "The Florida R&D credit is capped at $250,000 per taxpayer per year. Unused credit can be carried forward up to 20 years but cannot be carried back. The credit offsets Florida corporate income tax only — it does not offset Florida sales tax, reemployment tax, or any federal tax.",
          "For C-corps with federal R&D credits exceeding $250,000/year, the Florida credit is still worth claiming up to the cap. The federal §41 credit is 20% of QREs above the base (regular method) or up to 14% of the first $6M of QREs (alternative simplified method) — much larger than the Florida 10%, but a separate filing.",
        ],
      },
      {
        heading: "Industries where the Florida R&D credit is most commonly missed",
        paragraphs: [
          "We have identified the credit in five Florida industries where it is routinely missed:",
        ],
        bullets: [
          "Manufacturing — particularly plastic injection molding in Hialeah, food processing in Tampa, and packaging equipment in Jacksonville. Process improvements often qualify (testing new tooling, materials, cycle times); most manufacturers assume only product development counts.",
          "Biotech and medical devices — Torrey Pines cluster in Port St. Lucie, Lake Nona in Orlando, research parks around Gainesville. Preclinical research, lab-development work, and clinical-trial protocol design often qualify.",
          "Software — fintech in Miami, edtech in Orlando, govtech in Tallahassee. New architecture, new algorithms, new security models all qualify; routine bug fixes do not.",
          "Aerospace — Space Coast primes and sub-primes around Melbourne and the Cape. Component development, simulation modeling, and ground-system engineering frequently qualify.",
          "Marine engineering — yacht and vessel design in Fort Lauderdale, naval architecture firms. Hull-design research, propulsion-system testing, and stability modeling often qualify.",
        ],
      },
      {
        heading: "Documentation that survives an audit",
        paragraphs: [
          "Florida R&D credits are auditable — the Florida DOR has increased audit activity on R&D credits by roughly 3x in the last five years. The documentation that survives an audit:",
        ],
        bullets: [
          "Contemporaneous project documentation — meeting notes, design reviews, technical memoranda, project plans written during the project (not reconstructed afterward).",
          "Time tracking by project and employee — the IRS and Florida DOR both require time tracking; a flat percentage allocation is not defensible.",
          "Payroll records supporting the wage allocation — tie every wage dollar in the QRE calculation to a payroll report.",
          "Supply invoices and consumption records — for materials, a purchase invoice is not enough; you need to show the material was consumed in research.",
          "Contracts for any contract research — explicit scope, deliverables, and an R&D-purpose statement in the contract itself.",
        ],
      },
      {
        heading: "How to claim the credit retroactively",
        paragraphs: [
          "If you have been conducting qualified research for the last three years and have never claimed the credit, you can claim it retroactively by amending your Florida corporate income tax returns. The Florida statute of limitations for refund claims is generally three years from the filing date or one year from the payment date, whichever is later.",
          "We have recovered $40,000-$250,000 in retroactive credit for clients in the manufacturing and biotech sectors by amending the prior three years of returns. The cost of the amended returns and credit study is typically $8,000-$15,000 — usually paid from the credit recovery, with the remainder flowing to the client. Schedule a free consultation if you think you might qualify; we will give you a no-cost eligibility assessment based on your last three years of activity.",
        ],
      },
    ],
  },
  // 8. Florida year-end tax planning checklist
  {
    slug: "florida-year-end-tax-planning-checklist-2026",
    title: "Florida Year-End Tax Planning Checklist 2026: 14 Moves to Make Before December 31",
    excerpt:
      "Year-end tax planning saves a typical Florida business $8,000-$30,000 if executed before December 31. Here is the 14-item checklist we walk every client through in November — covering equipment, retirement, S-corp salary, and entity timing.",
    date: "2026-11-12",
    readMinutes: 9,
    category: "Tax Planning",
    relatedService: "tax-advisory-planning-services",
    seo: {
      title: "Florida Year-End Tax Planning Checklist 2026 | NexGen",
      description:
        "14 year-end tax planning moves for Florida businesses — Section 179, SEP-IRA, S-corp salary timing, entity conversions, multi-state sourcing, and QBI optimization before December 31.",
    },
    body: [
      {
        paragraphs: [
          "Year-end tax planning is the single highest-leverage hour a Florida business owner spends each year. The decisions made in November and December — to buy or delay equipment, to fund a retirement plan, to convert an entity, to time a salary or distribution — change the tax bill on the prior year's income. The decisions made in January and February only report what already happened.",
          "We walk every NexGen client through the same 14-item checklist in November. For a typical $500K-$2M Florida business, the planning saves $8,000-$30,000 in current-year tax and avoids $5,000-$20,000 of future-year surprises. The math is simple: an hour of focused planning with a real CPA is worth more than ten hours of bookkeeping cleanup in March. Here is the checklist, in priority order, with the math behind each move.",
        ],
      },
      {
        heading: "1. Project your 2026 taxable income — before you make any moves",
        paragraphs: [
          "Everything else on this checklist depends on knowing whether your 2026 taxable income will be in the 24% bracket or the 35% bracket. Most business owners guess — and miss by $50,000-$200,000. The projection needs the most recent three months of actual numbers, an estimate of the next two months, and any known year-end transactions (a bonus, a distribution, an asset sale). We run a projection for every client in mid-November as the foundation of the planning session.",
          "If the projection shows you in a lower bracket than expected, accelerate income (recognize December revenue early, sell appreciated assets, convert traditional IRA to Roth). If the projection shows you in a higher bracket, defer income and accelerate expenses (delay December invoicing, prepay January expenses, time asset purchases for 2026 vs. 2027).",
        ],
      },
      {
        heading: "2. Section 179 vs. bonus depreciation for equipment",
        paragraphs: [
          "Two federal tax breaks apply to equipment purchased and placed in service before December 31:",
        ],
        bullets: [
          "Section 179 — immediate expensing of up to $1.22M of equipment purchases in 2026, phasing out dollar-for-dollar above $3.05M of total purchases. Available for tangible personal property and off-the-shelf software.",
          "Bonus depreciation — 50% immediate write-off for 2026 (the rate steps down each year under TCJA from 100% in 2022 to 20% in 2026). No dollar cap; applies to most depreciable property.",
          "Florida does not conform to either provision for state corporate income tax — Florida requires multi-year depreciation. So the federal deduction does not flow through to the Florida C-corp return.",
        ],
      },
      {
        heading: "3. Retirement plan funding — the SEP-IRA deadline",
        paragraphs: [
          "A SEP-IRA allows a business owner to deduct up to 25% of compensation (or 20% of net self-employment income) up to a $335,000 cap for 2026. The contribution deadline is the tax return filing deadline plus extensions — so a sole proprietor can fund a SEP-IRA as late as October 15, 2027 and still deduct it on the 2026 return.",
          "A 401(k) plan (or solo 401(k) for one-person businesses) allows up to $23,000 of employee contributions plus $69,000 total (employee + employer) for 2026. The 401(k) salary deferral must be funded by December 31; the profit-sharing portion can be funded by the return filing deadline plus extensions.",
          "For an owner in the 32% federal bracket, maxing a SEP-IRA at $50,000 saves $16,000 in current-year federal tax. For an S-corp owner, the calculation is more complex because the SEP contribution flows through the W-2 wage — we model the right amount.",
        ],
      },
      {
        heading: "4. S-corp reasonable-compensation review",
        paragraphs: [
          "If you are an S-corp owner, the IRS requires you to take a \"reasonable compensation\" salary before any distributions. The reasonable-compensation analysis should be redone every November — your role may have changed, the market data may have moved, or the prior year's salary may no longer reflect what comparable executives earn.",
          "Three rules of thumb: (1) the salary should reflect what you would pay an outside CEO to do your job, (2) distributions can be taken only above the reasonable salary, (3) for service businesses, the salary should typically be 60-80% of total owner compensation (because most of the value comes from the owner's personal labor). For a $300,000-profit S-corp, setting the salary at $200,000 instead of $80,000 saves roughly $18,000 in SE tax on the difference — but raises the QBI limitation, which can hurt. We model both directions and pick the better outcome.",
        ],
      },
      {
        heading: "5. S-corp salary bonus timing — before or after December 31?",
        paragraphs: [
          "If you take a year-end bonus from your S-corp, the timing matters for both FICA and federal withholding. A bonus paid in December moves the income into 2026 (good if you expect 2027 to be a higher-bracket year); a bonus paid in January moves it into 2027 (good if 2027 will be lower). For high-income owners hitting the Social Security wage base ($176,100 in 2026), most bonuses pay 1.45% Medicare only — but the timing still affects federal and estimated tax payments.",
          "Florida has no state income tax, so salary timing does not affect Florida tax. The federal effect alone can swing $5,000-$15,000 in cash flow timing.",
        ],
      },
      {
        heading: "6. Entity conversion timing — S-corp to C-corp or back",
        paragraphs: [
          "Converting entity tax classification requires IRS filings and state filings. If you are planning a 2027 conversion (e.g., to a C-corp to raise VC funding, or back to an S-corp after exiting a C-corp structure), the effective date can be backdated up to 2.5 months — a conversion filed in February 2027 can be effective January 1, 2027 if structured correctly.",
          "If you are converting S-corp to C-corp, the corporation's accumulated adjustments account (AAA) and accumulated earnings and profits (AE&P) need careful handling to avoid unexpected tax to shareholders. We model the conversion before recommending it; the savings can be substantial but the complexity is real.",
        ],
      },
      {
        heading: "7. Multi-state income sourcing — accelerate or defer",
        paragraphs: [
          "If your Florida business has sales in multiple states (see our Multi-State Tax Guide), the timing of those sales affects which state collects the tax. Selling $50K into New York in December pushes the income into 2026's NY apportionment; deferring the sale to January pushes it into 2027. For businesses near a state's economic-nexus threshold, this can be the difference between triggering nexus this year or next.",
          "We track sales-into-state monthly for our multi-state clients and flag year-end timing opportunities. The savings can be substantial — a $100K sale deferred from December to January can shift $7,000-$10,000 of tax from one state's jurisdiction to another's, depending on rates and apportionment.",
        ],
      },
      {
        heading: "8. Section 199A QBI deduction — push or pull income",
        paragraphs: [
          "The Section 199A QBI deduction phases out above income thresholds (around $383,900 married, $191,950 single for 2026). If your 2026 income projects above the phaseout, deferring income into 2027 (delaying December invoicing, accelerating expenses) can drop you back below the threshold and restore the full 20% deduction.",
          "For SSTB owners (doctors, lawyers, consultants, financial advisors), the deduction disappears entirely above the upper threshold (~$483,900 married, ~$241,950 single for 2026). For SSTBs, the year-end push is even more important — the difference between $480,000 and $490,000 of taxable income can be a $20,000 swing in 199A deduction.",
        ],
      },
      {
        heading: "9. Florida sales tax — the December DR-15 push",
        paragraphs: [
          "Florida's December DR-15 sales tax return is due January 1 and delinquent after January 20. December collections belong to 2026; January collections belong to 2027. If you operate an accrual-basis business and have flexibility in when you recognize December sales, recognize them in the month they were collected — Florida audits on the December/January boundary are common.",
          "We file the December DR-15 for every monthly-filing client in the first week of January, well before the delinquency date. The penalty for late filing is 10% of the tax due for each 30-day period, capped at 50% — plus interest at the floating rate (currently ~8% annualized).",
        ],
      },
      {
        heading: "10. Charitable contributions — Florida C-corps and individuals",
        paragraphs: [
          "Charitable contributions by a C-corp are deductible up to 25% of taxable income (with a 5-year carryforward for excess). Contributions by an S-corp, partnership, or LLC pass through to the owner's individual return, where they are deductible up to 60% of AGI (cash) or 30% (appreciated property).",
          "For Florida business owners in the 32%+ bracket, a $20,000 year-end contribution to a qualifying charity saves roughly $6,400-$7,400 in federal tax. The contribution must be made (and the check cleared) by December 31 to count for 2026. We help clients time contributions, document them properly, and verify the recipient's 501(c)(3) status before the deduction is taken.",
        ],
      },
      {
        heading: "11. Bad-debt write-offs — clean the AR before year-end",
        paragraphs: [
          "Accounts receivable that have gone uncollected for 180+ days should be reviewed for partial or full write-off before December 31. A bad-debt write-off creates an immediate deduction for accrual-basis taxpayers; for cash-basis taxpayers, uncollected invoices were never income in the first place, so no write-off is needed.",
          "The documentation that supports a bad-debt write-off: aging report, collection attempts (emails, calls, demand letters), and a written determination that the receivable is uncollectible. We review every client's AR aging in November and recommend specific accounts for write-off — the typical recovery is $5,000-$20,000 in current-year tax savings.",
        ],
      },
      {
        heading: "12. Vehicle and mileage documentation",
        paragraphs: [
          "If you use a personal vehicle for business, the deduction is the business mileage rate (67 cents/mile for 2026) or actual expenses (with depreciation). The IRS requires a contemporaneous mileage log; a year-end reconstruction is not defensible in audit. November is the time to start (or restart) the log if you have not been keeping one.",
          "For business-owned vehicles, the Section 179 and bonus depreciation rules apply (with annual dollar caps that vary by vehicle weight class). Heavy SUVs and trucks over 6,000 lbs GVWR get a $30,500 first-year deduction cap for 2026; passenger cars are capped at $12,520. We help clients evaluate vehicle purchases before December 31 to maximize the available deduction.",
        ],
      },
      {
        heading: "13. Estimated tax payments — verify Q4 is right",
        paragraphs: [
          "Your Q4 2026 federal estimated tax payment is due January 15, 2027. The amount should match your projected 2026 tax liability minus withholding and prior estimated payments. Underpaying triggers an 8% underpayment penalty (currently); overpaying ties up cash until April.",
          "We recompute Q4 estimated tax for every client in mid-December based on the year-end projection. Florida has no state estimated tax for individuals (no personal income tax), but Florida C-corps owe estimated corporate income tax quarterly if their liability exceeds the $50,000 exemption.",
        ],
      },
      {
        heading: "14. Document retention — close the year clean",
        paragraphs: [
          "Before December 31, gather and store: (1) all W-9s from contractors paid during 2026 (you will need them for 1099-NEC filing by January 31, 2027), (2) all Florida sales tax exemption certificates from customers, (3) all asset purchase documentation for any equipment you bought during the year, (4) all loan statements and amortization schedules, (5) all foreign-account documentation if applicable (FBAR, Form 5471, Form 5472).",
          "Missing documentation in March costs 5-10 hours of reconstruction work and frequently misses deductions the owner cannot recreate. We collect this documentation from clients during the November planning session so it is in hand before year-end, not lost in a paper pile in April.",
        ],
      },
      {
        heading: "How to actually do this — for free",
        paragraphs: [
          "We run a free year-end planning session for every current NexGen client during November and December — and we offer the same session at no cost to any Florida business owner who wants a second opinion before December 31. The session covers your 2026 projected tax, the 14-item checklist applied to your facts, and a written summary of recommended moves with the dollar impact of each. Schedule a free consultation; the session typically takes 45 minutes and the takeaways are actionable immediately.",
        ],
      },
    ],
  },
];
