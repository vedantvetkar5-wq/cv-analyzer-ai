# CV Analyzer AI

A modern, AI-powered CV analysis tool built with Next.js 14 (App Router), Tailwind CSS, and Lucide React.

## Project Structure

```
cv-analyzer/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts          ← POST endpoint (mock → replace with Claude API)
│   ├── components/
│   │   ├── UploadForm.tsx        ← File upload + industry/company inputs
│   │   ├── LoadingState.tsx      ← Animated skeleton + progress bar
│   │   ├── ScoreRing.tsx         ← Animated circular score indicator
│   │   └── ResultsDashboard.tsx  ← Tabbed results layout
│   ├── lib/
│   │   ├── types.ts              ← Shared TypeScript interfaces
│   │   └── mock.ts               ← Mock AI response generator
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  ← Main page + state machine (idle/loading/results)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

## Integrating the Real Claude API

1. **Install parsing libraries:**
   ```bash
   npm install @anthropic-ai/sdk pdf-parse mammoth
   npm install -D @types/pdf-parse
   ```

2. **Add your API key** to `.env.local`:
   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. **Replace the mock block** in `app/api/analyze/route.ts` with the commented-out Claude integration code at the bottom of that file.

4. **Suggested Claude prompt structure:**
   ```
   Analyze this CV for a {industry} role at {company}.
   Return ONLY a valid JSON object matching this TypeScript interface:
   { score: number, grade: string, dimensions: [...], layout: [...],
     typography: [...], keep: [...], remove: [...], tailoring: [...] }
   
   CV TEXT:
   {extractedText}
   ```

## Color Palette

| Usage | Color |
|---|---|
| Primary accent | Blue 600 (`#2563eb`) |
| Success / Keep | Emerald 500 (`#10b981`) |
| Warning / Improve | Amber 500 (`#f59e0b`) |
| Danger / Remove | Red 500 (`#ef4444`) |
| Surfaces | Slate 50–200 |
| Text primary | Slate 800–900 |

## SEBI Compliance Note

This tool is for CV optimization only and does not constitute financial advice.
No CV data is stored beyond the duration of the API request.
