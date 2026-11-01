'use client'

import { useState } from 'react'
import { ArrowUpRight, Brain, Compass, Mail, Menu, MessageCircle, Send, Sparkles, X } from 'lucide-react'

const ideas = [
  {
    number: '01',
    title: 'The user is not a funnel.',
    body: 'People bring context, contradiction, and a whole life to every product moment. Good product work makes room for that.',
    tag: 'Psychology',
  },
  {
    number: '02',
    title: 'Clarity is a team sport.',
    body: 'The best strategy is not the cleverest document. It is the shared picture that helps a room make a better decision together.',
    tag: 'Product craft',
  },
  {
    number: '03',
    title: 'The funnel is becoming a conversation.',
    body: "When AI can discover, compare, and buy on someone's behalf, distribution is no longer a sequence of clicks. It is a question of trust, context, and being worth recommending.",
    tag: 'AI & distribution',
  },
  {
    number: '04',
    title: 'Ship the question, too.',
    body: 'A launch is not the end of thinking. It is an invitation to learn in public, with enough humility to change direction.',
    tag: 'Philosophy',
  },
]

const work = [
  { type: '01 / PRODUCT STRATEGY', title: 'Finding the signal in a noisy roadmap', detail: 'A zero-to-one discovery sprint for a B2B platform.', accent: 'coral' },
  { type: '02 / TEAM PRACTICE', title: 'Making decisions people can believe in', detail: 'A lightweight operating system for a growing product team.', accent: 'blue' },
  { type: '03 / AI & BEYOND', title: 'Designing for the human in the loop', detail: 'Exploring useful, legible, and responsible AI products.', accent: 'lavender' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ideaIndex, setIdeaIndex] = useState(0)
  const [chatOpen, setChatOpen] = useState(false)
  const idea = ideas[ideaIndex]

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Manthan home">
          <span className="grid size-9 place-items-center rounded-full border border-foreground bg-foreground text-sm font-bold text-background transition-transform group-hover:rotate-12">M</span>
          <span className="font-mono text-xs uppercase tracking-[0.18em]">Manthan<span className="text-coral">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Primary navigation">
          <a className="transition-colors hover:text-foreground" href="#thinking">Thinking</a>
          <a className="transition-colors hover:text-foreground" href="#work">Selected work</a>
          <a className="transition-colors hover:text-foreground" href="#about">About</a>
          <a className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:bg-foreground hover:text-background" href="mailto:hello@manthan.work">Say hello <ArrowUpRight className="size-3.5" /></a>
        </nav>
        <button className="rounded-full border border-border p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}</button>
      </header>

      {menuOpen && <nav className="mx-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 md:hidden" aria-label="Mobile navigation"><a href="#thinking" onClick={() => setMenuOpen(false)}>Thinking</a><a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="mailto:hello@manthan.work">Say hello →</a></nav>}

      <section id="top" className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pb-36 lg:pt-28">
        <div className="max-w-3xl">
          <p className="mb-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="size-2 rounded-full bg-coral" /> Product person / pattern spotter</p>
          <h1 className="font-serif text-[clamp(3.6rem,8vw,8.5rem)] leading-[.88] tracking-[-0.07em]">I make sense of <em className="font-normal text-coral">messy</em> things.</h1>
          <p className="mt-9 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">I&apos;m Manthan — a product manager who uses strategy, psychology, and a little philosophy to build things people can actually live with.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#work" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">See how I think <ArrowUpRight className="size-4" /></a><a href="#about" className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">A little more about me</a></div>
        </div>
        <div className="relative flex min-h-[370px] items-center justify-center lg:min-h-0">
          <div className="absolute right-[13%] top-[10%] size-56 rounded-full border border-coral/40" /><div className="absolute bottom-[8%] left-[16%] size-28 rounded-full bg-lavender/70" />
          <div className="relative w-full max-w-sm rotate-2 rounded-[2rem] border border-foreground/10 bg-card p-6 shadow-[12px_14px_0_var(--shadow-color)]">
            <div className="mb-6 flex items-center gap-4">
              <div className="manthan-avatar" role="img" aria-label="An animated portrait of Manthan">
                <span className="avatar-hair" /><span className="avatar-eye avatar-eye-left" /><span className="avatar-eye avatar-eye-right" /><span className="avatar-mouth" />
              </div>
              <div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground">Meet the PM</p><p className="mt-1 font-serif text-2xl">Manthan, in motion.</p></div>
            </div>
            <div className="flex items-center justify-between border-b border-border pb-4"><span className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">A field note</span><Sparkles className="size-4 text-coral" /></div>
            <p className="py-8 font-serif text-3xl leading-tight">“The interesting bit is usually hiding between what people say and what they do.”</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground"><span>MN / 2026</span><span>keep looking →</span></div>
          </div>
        </div>
      </section>

      <section id="thinking" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[.8fr_1.2fr]">
          <div className="border-b border-border px-6 py-12 lg:border-b-0 lg:border-r lg:px-10 lg:py-20"><p className="font-mono text-xs uppercase tracking-[.2em] text-coral">Manthan & AI</p><h2 className="mt-5 max-w-sm font-serif text-5xl leading-[.95] tracking-[-.05em]">A space for <em className="font-normal">better questions.</em></h2><p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">A small lab for thinking about products, people, and the strange new edges between them.</p><div className="mt-12 flex gap-3"><span className="grid size-10 place-items-center rounded-full bg-lavender"><Brain className="size-4" /></span><span className="grid size-10 place-items-center rounded-full bg-mint"><Compass className="size-4" /></span></div></div>
          <div className="px-6 py-12 lg:px-16 lg:py-20"><div className="flex items-start justify-between"><span className="font-mono text-xs text-muted-foreground">{idea.number} / {String(ideas.length).padStart(2, '0')}</span><button onClick={() => setIdeaIndex((ideaIndex + 1) % ideas.length)} className="text-xs underline underline-offset-4 hover:text-coral">Next thought ↗</button></div><div className="mt-16 max-w-2xl"><span className="rounded-full bg-mint px-3 py-1 font-mono text-[10px] uppercase tracking-[.15em]">{idea.tag}</span><h3 className="mt-6 font-serif text-4xl leading-tight tracking-[-.04em] lg:text-6xl">{idea.title}</h3><p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{idea.body}</p></div><div className="mt-16 flex gap-1" aria-label="Thought navigation">{ideas.map((item, index) => <button key={item.number} onClick={() => setIdeaIndex(index)} aria-label={`Show thought ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === ideaIndex ? 'w-16 bg-coral' : 'w-6 bg-border'}`} />)}</div></div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-muted-foreground">Selected work</p><h2 className="mt-3 font-serif text-5xl tracking-[-.05em] lg:text-7xl">From ambiguity<br /><em className="font-normal text-coral">to momentum.</em></h2></div><p className="max-w-xs text-sm leading-relaxed text-muted-foreground">The shape of the work changes. The intent stays the same: make the next right thing easier to see.</p></div><div className="mt-10 grid gap-4">{work.map((item) => <article key={item.type} className={`group grid gap-5 rounded-3xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--shadow-color)] md:grid-cols-[.3fr_1fr_.7fr] md:items-center md:p-8 ${item.accent === 'coral' ? 'bg-coral/10' : item.accent === 'blue' ? 'bg-mint/60' : 'bg-lavender/60'}`}><span className="font-mono text-xs text-muted-foreground">{item.type}</span><h3 className="max-w-xl font-serif text-3xl tracking-[-.03em] md:text-4xl">{item.title}</h3><div className="flex items-end justify-between gap-5"><p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{item.detail}</p><ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></article>)}</div></section>

      <section id="about" className="border-t border-border bg-foreground text-background"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_.8fr] lg:px-10 lg:py-32"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-coral">A broad perspective</p><h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[.95] tracking-[-.05em] lg:text-7xl">Part PM, part <em className="font-normal text-coral">student of people.</em></h2></div><div className="lg:pt-12"><p className="text-lg leading-relaxed text-background/70">I like the space where disciplines overlap: where a customer insight meets a business constraint, where a team ritual changes a product, and where AI makes code, SEO, and execution cheaper than ever. The scarce thing now is judgment — questioning the idea, designing the loop, and finding the distribution before engineering.</p><a href="mailto:hello@manthan.work" className="mt-9 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5">Let&apos;s talk <Mail className="size-4" /></a></div></div></section>

      <div className="fixed bottom-5 right-5 z-20 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
        {chatOpen && <div className="w-[min(20rem,calc(100vw-2rem))] rounded-3xl border border-border bg-card p-5 shadow-[8px_8px_0_var(--shadow-color)]" role="dialog" aria-label="Chat with Manthan">
          <div className="flex items-start gap-3"><div className="grid size-9 shrink-0 place-items-center rounded-full bg-coral font-serif text-lg">M</div><div><p className="font-medium">Hi, I&apos;m Manthan.</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">Have a product question, a messy idea, or a useful disagreement?</p></div></div>
          <a href="mailto:hello@manthan.work?subject=Hello%20Manthan" className="mt-4 flex items-center justify-between rounded-2xl bg-foreground px-4 py-3 text-sm text-background">Start a conversation <Send className="size-4" /></a>
        </div>}
        <button onClick={() => setChatOpen(!chatOpen)} className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm text-background shadow-[4px_4px_0_var(--coral)] transition-transform hover:-translate-y-0.5" aria-expanded={chatOpen} aria-label={chatOpen ? 'Close chat' : 'Open chat'}><MessageCircle className="size-4 text-coral" />Say hi</button>
      </div>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2026 Manthan Tiwari</span><span>Made with curiosity / and too many notes</span><a href="#top" className="hover:text-foreground">Back to top ↑</a></footer>
    </main>
  )
}
