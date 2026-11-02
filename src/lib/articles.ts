// Educational articles for Insights & Updates. General educational content
// only — not individualized professional advice. Every article carries a
// disclaimer and encourages consultation before decisions.

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  category: string;
  relatedService: string; // service slug
  seo: { title: string; description: string };
  body: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
}

export const articles: Article[] = [
  {
    slug: "small-business-bookkeeping-foundation",
    title: "Five Bookkeeping Habits That Keep Small Businesses Out of Trouble",
    excerpt:
      "Simple, repeatable bookkeeping habits prevent most of the expensive cleanups we see. Here are the five that matter most.",
    date: "2026-10-05",
    readMinutes: 6,
    category: "Bookkeeping",
    relatedService: "business-accounting-bookkeeping",
    seo: {
      title: "5 Bookkeeping Habits for Small Businesses | NexGen Financial Experts",
      description:
        "Five practical bookkeeping habits that keep small business records clean, tax-ready, and decision-friendly — from the NexGen Financial Experts team.",
    },
    body: [
      {
        paragraphs: [
          "Most bookkeeping disasters we see are not caused by complicated accounting problems. They start small: a receipt that never got recorded, a business expense paid from a personal card, a bank feed that stopped syncing three months ago. Individually, each is trivial. Together, by year-end, they turn tax season into archaeology.",
          "The good news is that reliable books come from a handful of small habits repeated consistently — not from heroic year-end efforts. Here are the five we recommend to every small business owner.",
        ],
      },
      {
        heading: "1. Keep business and personal money separated",
        paragraphs: [
          "The single highest-leverage habit in small-business bookkeeping is also the simplest: use a dedicated business bank account and business credit card for everything business-related. Mixed transactions force you (or your accountant) to reconstruct intent months later, and they undermine the credibility of your financial statements with lenders and the IRS alike.",
        ],
      },
      {
        heading: "2. Record transactions weekly, not yearly",
        paragraphs: [
          "Books that are updated weekly take minutes; books updated annually take days and produce worse results. A short weekly session — categorizing transactions, matching receipts, flagging anything odd — keeps your records accurate while your memory is still fresh.",
        ],
      },
      {
        heading: "3. Reconcile every account, every month",
        paragraphs: [
          "Reconciliation means matching your bookkeeping records to your actual bank, credit card, and loan statements. It is how you catch duplicate charges, missed transactions, and fraud early. Monthly reconciliation is the standard for good reason: errors found within thirty days are almost always easy to fix.",
        ],
      },
      {
        heading: "4. Keep receipts attached to transactions",
        paragraphs: [
          "For tax purposes, a bank statement line is not the same as documentation. Attach the receipt or invoice to each transaction in your accounting system while it is easy — a phone photo at the time of purchase is enough. If your records are ever reviewed by the IRS or a lender, contemporaneous documentation is what protects deductions.",
        ],
      },
      {
        heading: "5. Review a one-page financial summary monthly",
        paragraphs: [
          "You do not need to love accounting to benefit from it. Once a month, look at three numbers: revenue, expenses, and cash balance — and compare them to the prior month. This five-minute review surfaces problems while they are still small and builds the financial awareness that lenders and investors expect to see.",
        ],
      },
      {
        heading: "When to bring in professional help",
        paragraphs: [
          "Consider professional support when your books are more than a month behind, when you are about to hire employees, when you are applying for financing, or when tax season keeps producing surprises. Catching up early is always cheaper than untangling later.",
          "If you would like help setting up or cleaning up your bookkeeping, the team at NexGen Financial Experts works with businesses at every stage. Contact us for a consultation.",
        ],
      },
    ],
  },
  {
    slug: "cash-flow-forecasting-basics",
    title: "Cash Flow Forecasting: The 13-Week Model Every Owner Should Know",
    excerpt:
      "Profitable businesses still fail when cash runs out. A simple 13-week cash flow forecast shows problems while there is still time to act.",
    date: "2026-09-12",
    readMinutes: 7,
    category: "Cash Flow",
    relatedService: "startup-fractional-cfo-services",
    seo: {
      title: "13-Week Cash Flow Forecasting for Businesses | NexGen Financial Experts",
      description:
        "How a simple 13-week cash flow forecast works, what to include, and how it helps business owners see cash problems early — NexGen Financial Experts.",
    },
    body: [
      {
        paragraphs: [
          "Ask failed business owners what went wrong and you will often hear a version of the same sentence: \"We were profitable, but we ran out of cash.\" Profit is an opinion measured over months; cash is a fact measured in days. The single most practical tool for managing it is the 13-week cash flow forecast — a rolling projection of the money coming in and going out over the next quarter.",
        ],
      },
      {
        heading: "Why thirteen weeks?",
        paragraphs: [
          "Thirteen weeks (one fiscal quarter) is long enough to reveal trends and short enough to stay accurate. Weekly granularity matters because most businesses have lumpy cash cycles: payroll lands on certain Fridays, rent on the first, customer payments whenever clients feel like it. A monthly view hides those collisions; a weekly view exposes them.",
        ],
      },
      {
        heading: "How to build one",
        paragraphs: [
          "A 13-week forecast does not need special software — a spreadsheet is fine to start. Build it in four steps:",
        ],
        bullets: [
          "Opening cash: last week's true ending bank balance, from the bank statement, not from memory.",
          "Cash in: expected receipts by week — customer payments based on actual payment behavior, not invoice dates.",
          "Cash out: every expected outflow by week — payroll, rent, taxes, loan payments, suppliers, subscriptions.",
          "Ending cash: opening balance plus in, minus out, rolled forward each week.",
        ],
      },
      {
        heading: "The rules that make it useful",
        paragraphs: [
          "Update it weekly, on the same day, with actuals replacing estimates for the week that just ended. Be deliberately conservative on receivables: if a customer typically pays in 45 days, forecast 45 days, not 30. And treat the bottom line seriously — if projected ending cash dips below your minimum operating cushion in any week, that is not a detail, that is an early warning.",
        ],
      },
      {
        heading: "What to do when the forecast shows a dip",
        paragraphs: [
          "The value of forecasting is the reaction time it buys. If the model shows a low week six weeks out, you have options: accelerate collections, delay discretionary spending, talk to your lender before — not after — you need the line of credit, or adjust payment timing with vendors. Every one of those conversations is easier with six weeks of runway than six days.",
          "If you would like help building or reviewing a cash flow forecast for your business, NexGen Financial Experts works with owners across Fort Lauderdale and beyond. Reach out through our contact page.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
