# NexGen Compliance Fix - removes CPA and Audit references
# Usage: powershell -ExecutionPolicy Bypass -File apply-edits.ps1

 $ErrorActionPreference = "Stop"
Set-Location "C:\Users\T\nexgenfinancialexperts"
 $em = [char]0x2014  # em-dash character
Write-Host "Applying compliance edits..." -ForegroundColor Cyan

function Edit-File($path, $edits) {
    $c = Get-Content $path -Raw -Encoding UTF8
    foreach ($e in $edits) {
        $oldVal = $e.Old -replace '\u2014', $em
        if ($c -notlike "*$oldVal*") { Write-Host "  SKIP (not found)" -ForegroundColor Yellow; continue }
        $c = $c.Replace($oldVal, $e.New)
        Write-Host "  OK" -ForegroundColor Green
    }
    [System.IO.File]::WriteAllText((Resolve-Path $path).Path, $c)
}

Write-Host "`n[1/12] src\lib\site.ts" -ForegroundColor White
Edit-File "src\lib\site.ts" @(
    @{ Old = "accounting, tax, audit, and business advisory"; New = "accounting, tax, and business advisory" }
)

Write-Host "`n[2/12] src\app\layout.tsx" -ForegroundColor White
Edit-File "src\app\layout.tsx" @(
    @{ Old = '"audit services Fort Lauderdale"'; New = '"payroll services Fort Lauderdale"' }
)

Write-Host "`n[3/12] src\components\site\footer.tsx" -ForegroundColor White
Edit-File "src\components\site\footer.tsx" @(
    @{ Old = "Practical accounting, tax, audit, and advisory support"; New = "Practical accounting, tax, and advisory support" }
)

Write-Host "`n[4/12] src\app\privacy-policy\page.tsx" -ForegroundColor White
Edit-File "src\app\privacy-policy\page.tsx" @(
    @{ Old = "accounting, tax, audit, and business advisory services"; New = "accounting, tax, and business advisory services" }
)

Write-Host "`n[5/12] src\app\insights\page.tsx" -ForegroundColor White
Edit-File "src\app\insights\page.tsx" @(
    @{ Old = "cash flow forecasting, audit preparation, and business tax topics"; New = "cash flow forecasting, and business tax topics" },
    @{ Old = "Educational articles on bookkeeping, cash flow, and audit readiness"; New = "Educational articles on bookkeeping, cash flow, and compliance readiness" }
)

Write-Host "`n[6/12] src\app\about\page.tsx" -ForegroundColor White
Edit-File "src\app\about\page.tsx" @(
    @{ Old = "tailored audit, tax advisory, and business consulting services"; New = "tailored tax advisory, accounting, and business consulting services" },
    @{ Old = "delivering audit, tax advisory, and business consulting"; New = "delivering tax advisory, accounting, and business consulting" },
    @{ Old = "from audits and tax planning to consulting and compliance"; New = "from accounting and tax planning to consulting and compliance" },
    @{ Old = "tailored Audit, Tax Advisory, and Business Consulting"; New = "tailored Tax Advisory, Accounting, and Business Consulting" }
)

Write-Host "`n[7/12] src\app\services\page.tsx" -ForegroundColor White
 $sp = Get-Content "src\app\services\page.tsx" -Raw -Encoding UTF8
 $sp = $sp -replace 'Services\s+\u2014\s+Accounting, Tax, Audit & Advisory', "Services $em Accounting, Tax & Advisory"
 $sp = $sp.Replace("services: CPA services, bookkeeping, tax advisory", "services: bookkeeping, tax advisory")
 $sp = $sp.Replace("fractional CFO, audit, and payroll", "fractional CFO, and payroll")
[System.IO.File]::WriteAllText((Resolve-Path "src\app\services\page.tsx").Path, $sp)
Write-Host "  OK" -ForegroundColor Green

Write-Host "`n[8/12] src\app\page.tsx (home)" -ForegroundColor White
 $hp = Get-Content "src\app\page.tsx" -Raw -Encoding UTF8
 $hp = $hp.Replace("tax, audit, and", "tax, and")
 $hp = $hp.Replace("tax, and audit engagements", "tax, and advisory engagements")
 $hp = $hp.Replace('"audit-services", "tax-advisory-planning-services"', '"business-accounting-bookkeeping", "tax-advisory-planning-services"')
 $hp = $hp.Replace('href: "/services/cpa-services"', 'href: "/services/business-accounting-bookkeeping"')
 $hp = $hp.Replace("including internal and external audit solutions for healthcare organizations.", "for healthcare organizations.")
 $hp = $hp.Replace("from audits and tax planning to consulting and compliance", "from accounting and tax planning to consulting and compliance")
 $hp = $hp.Replace("cash flow, and audit readiness", "cash flow, and compliance readiness")
 $hp = $hp -replace 'customized\s+audit,\s+tax,\s+and\s+advisory\s+solutions', "customized tax, accounting, and advisory solutions"
 $hp = [regex]::Replace($hp, '(?s)\s*\{\s*icon: SearchCheck,\s*title: "Audit",.*?href: "/services/audit-services",\s*\},', "")
[System.IO.File]::WriteAllText((Resolve-Path "src\app\page.tsx").Path, $hp)
Write-Host "  OK" -ForegroundColor Green

Write-Host "`n[9/12] src\lib\services.ts" -ForegroundColor White
 $sv = Get-Content "src\lib\services.ts" -Raw -Encoding UTF8
 $sv = [regex]::Replace($sv, '(?s)  \{\s*slug: "cpa-services",.*?\n  \},\s*\n', "")
 $sv = [regex]::Replace($sv, '(?s)  \{\s*slug: "audit-services",.*?\n  \},\s*\n', "")
 $sv = $sv.Replace("stay audit-ready at all times", "stay compliant and review-ready at all times")
[System.IO.File]::WriteAllText((Resolve-Path "src\lib\services.ts").Path, $sv)
Write-Host "  OK" -ForegroundColor Green

Write-Host "`n[10/12] src\lib\articles.ts" -ForegroundColor White
 $ar = Get-Content "src\lib\articles.ts" -Raw -Encoding UTF8
 $ar = [regex]::Replace($ar, '(?s)  \{\s*slug: "preparing-for-a-business-audit",.*?\n  \},\s*\n', "")
 $ar = $ar.Replace("If you ever face an audit, contemporaneous documentation is what protects deductions.", "If your records are ever reviewed by the IRS or a lender, contemporaneous documentation is what protects deductions.")
[System.IO.File]::WriteAllText((Resolve-Path "src\lib\articles.ts").Path, $ar)
Write-Host "  OK" -ForegroundColor Green

Write-Host "`n[11/12] next.config.ts" -ForegroundColor White
 $nc = Get-Content "next.config.ts" -Raw -Encoding UTF8
 $old = '  { source: "/sample-page", destination: "/", permanent: true },' + "`n];"
 $new = '  { source: "/sample-page", destination: "/", permanent: true },
  { source: "/services/cpa-services", destination: "/services/business-accounting-bookkeeping", permanent: true },
  { source: "/services/audit-services", destination: "/services/business-accounting-bookkeeping", permanent: true },
  { source: "/insights/preparing-for-a-business-audit", destination: "/insights", permanent: true },
];'
 $nc = $nc.Replace($old, $new)
[System.IO.File]::WriteAllText((Resolve-Path "next.config.ts").Path, $nc)
Write-Host "  OK" -ForegroundColor Green

Write-Host "`n[12/12] deploy\.htaccess" -ForegroundColor White
 $ht = Get-Content "deploy\.htaccess" -Raw -Encoding UTF8
 $ht = $ht.Replace(
    'RewriteRule ^sample-page/?$ /         [R=301,L]',
    'RewriteRule ^sample-page/?$ /         [R=301,L]

# Removed service pages (CPA / Audit) - redirect to closest relevant page
RewriteRule ^services/cpa-services/?$        /services/business-accounting-bookkeeping/ [R=301,L]
RewriteRule ^services/audit-services/?$      /services/business-accounting-bookkeeping/ [R=301,L]

# Removed insights article on audit preparation
RewriteRule ^insights/preparing-for-a-business-audit/?$  /insights/ [R=301,L]'
)
[System.IO.File]::WriteAllText((Resolve-Path "deploy\.htaccess").Path, $ht)
Write-Host "  OK" -ForegroundColor Green

Write-Host "`nUpdating .gitignore..." -ForegroundColor White
 $gi = Get-Content ".gitignore" -Raw -ErrorAction SilentlyContinue
if ($gi -notmatch "package-lock.json") {
    Add-Content ".gitignore" "`npackage-lock.json"
    Add-Content ".gitignore" "prisma/*.db"
    Add-Content ".gitignore" "prisma/*.db-journal"
    Write-Host "  OK" -ForegroundColor Green
}
git rm --cached package-lock.json 2>$null
git rm --cached prisma/dev.db 2>$null

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "ALL EDITS APPLIED" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "`nNow run:" -ForegroundColor Yellow
Write-Host "  git add -A" -ForegroundColor White
Write-Host "  git commit -m 'compliance: remove CPA and Audit references'" -ForegroundColor White
Write-Host "  git pull --rebase" -ForegroundColor White
Write-Host "  git push" -ForegroundColor White