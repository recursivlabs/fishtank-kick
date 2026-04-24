// Raw CSS from the Fishtank x Kick Pitch design handoff.
export const pitchStyles = `
:root {
    --paper: #f1e9d6;
    --paper-2: #e7dcc2;
    --ink: #14110e;
    --ink-soft: #3a332a;
    --kick: #53fc18;
    --kick-dark: #0f1a0a;
    --blood: #7a1414;
    --stamp: #b93a2a;
    /* Fishtank logo palette — orange/green/blue stripes */
    --ft-orange: #e24e1b;
    --ft-green: #2aa84a;
    --ft-blue: #2d5fb0;
  }

  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; max-width: 100vw; }
  body {
    background: var(--paper);
    color: var(--ink);
    font-family: "DM Sans", system-ui, sans-serif;
    font-size: 17px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body::before {
    content: "";
    position: fixed; inset: 0;
    background-image:
      radial-gradient(rgba(20,17,14,0.08) 1px, transparent 1px),
      radial-gradient(rgba(20,17,14,0.05) 1px, transparent 1px);
    background-size: 3px 3px, 7px 7px;
    background-position: 0 0, 1px 2px;
    pointer-events: none;
    z-index: 1;
    mix-blend-mode: multiply;
    opacity: 0.35;
  }

  a { color: inherit; }

  /* === TICKER === */
  .ticker {
    position: sticky; top: 0; z-index: 50;
    background: #000;
    color: var(--kick);
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.08em;
    border-bottom: 2px solid var(--kick);
    overflow: hidden;
    height: 32px;
    display: flex;
    align-items: center;
  }
  .ticker-track {
    display: inline-flex;
    gap: 48px;
    white-space: nowrap;
    animation: ticker 80s linear infinite;
    padding-left: 100%;
  }
  .ticker-track span { display: inline-flex; align-items: center; gap: 10px; }
  .ticker-dot { width: 8px; height: 8px; background: var(--kick); border-radius: 50%; box-shadow: 0 0 8px var(--kick); animation: pulse 1.2s infinite; }
  @keyframes ticker {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

  /* === MASTHEAD === */
  .masthead {
    border-bottom: 4px double var(--ink);
    padding: 28px 48px 20px;
    position: relative;
    z-index: 2;
  }
  .masthead-top {
    display: flex; justify-content: space-between; align-items: flex-end;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--ink);
    margin-bottom: 14px;
  }
  .masthead-top .center { text-align: center; flex: 1; }
  .title-row {
    display: flex; align-items: center; justify-content: space-between;
    gap: 32px;
  }
  .title-row h1 {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: clamp(54px, 9vw, 132px);
    line-height: 0.88;
    margin: 0;
    letter-spacing: -0.02em;
  }
  .title-row h1 .amp {
    font-style: italic;
    font-weight: 400;
    color: var(--ink-soft);
    padding: 0 0.1em;
  }
  .title-row h1 .kick-word {
    position: relative;
    display: inline-block;
  }
  .title-row h1 .kick-word::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: 0.08em;
    height: 0.18em;
    background: var(--kick);
    z-index: -1;
  }
  .masthead-sub {
    margin-top: 22px;
    display: grid; grid-template-columns: 1fr auto 1fr;
    gap: 24px; align-items: center;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  .masthead-sub .hr { height: 1px; background: var(--ink); }

  /* Masthead logo lockup (on dark strip) */
  .brand-strip {
    background: #0a0a0a;
    margin: 18px -48px 0;
    padding: 48px 48px;
    display: flex; align-items: center; justify-content: center;
    gap: 48px;
    border-top: 2px solid var(--kick);
    border-bottom: 2px solid var(--kick);
  }
  .brand-strip .ft-logo { height: clamp(56px, 9vw, 110px); width: auto; display: block; }
  .brand-strip .kick-svg { height: clamp(56px, 9vw, 110px); width: auto; display: block; }
  .brand-strip .x {
    color: rgba(255,255,255,0.5);
    font-family: "Old Standard TT", serif;
    font-style: italic;
    font-size: clamp(40px, 6vw, 72px);
    line-height: 1;
  }

  /* === SECTIONS === */
  section { position: relative; z-index: 2; }
  .wrap { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
  .wrap-narrow { max-width: 960px; margin: 0 auto; padding: 0 48px; }

  .eyebrow {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink-soft);
    display: inline-flex; align-items: center; gap: 10px;
  }
  .eyebrow::before { content: "§"; font-size: 14px; }

  .section-head {
    border-top: 4px double var(--ink);
    border-bottom: 1px solid var(--ink);
    padding: 16px 48px;
    display: flex; justify-content: space-between; align-items: baseline;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .section-head .no { color: var(--ink-soft); }

  h2.display {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: clamp(40px, 6vw, 82px);
    line-height: 0.95;
    margin: 40px 0 16px;
    letter-spacing: -0.015em;
    text-wrap: balance;
  }
  h2.display em { font-style: italic; color: var(--blood); }

  h3.kicker {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: 28px;
    margin: 0 0 8px;
    line-height: 1.1;
  }

  p.lede {
    font-family: "Old Standard TT", serif;
    font-size: clamp(20px, 2.2vw, 28px);
    line-height: 1.4;
    max-width: 820px;
    margin: 0 0 32px;
    text-wrap: pretty;
  }
  p.lede::first-letter {
    font-size: 3.2em;
    float: left;
    line-height: 0.85;
    padding: 6px 12px 0 0;
    font-weight: 700;
  }

  p { text-wrap: pretty; }

  /* === HERO === */
  .hero {
    padding: 40px 48px 56px;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 48px;
  }
  .hero-lead h2 {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: clamp(36px, 4.4vw, 64px);
    line-height: 1.02;
    margin: 0 0 20px;
    letter-spacing: -0.01em;
  }
  .hero-lead h2 em { font-style: italic; }
  .hero-lead .twocol {
    font-size: 17px;
    column-count: 2;
    column-gap: 24px;
    column-rule: 1px solid var(--ink);
    margin: 0 0 20px;
  }
  .hero-lead .twocol::first-letter {
    font-family: "Old Standard TT", serif;
    font-size: 3.8em;
    float: left;
    line-height: 0.82;
    padding: 4px 10px 0 0;
    font-weight: 700;
  }

  .byline {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-soft);
    padding-top: 12px;
    border-top: 1px solid var(--ink);
  }

  .front-box {
    border: 1px solid var(--ink);
    background: var(--paper);
    position: relative;
  }
  .front-box-head {
    background: var(--ink);
    color: var(--paper);
    padding: 10px 14px;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    display: flex; justify-content: space-between;
  }
  .front-box-head .live {
    color: var(--kick);
    display: inline-flex; align-items: center; gap: 6px;
  }
  .front-box-head .live::before {
    content: ""; width: 7px; height: 7px; background: var(--kick);
    border-radius: 50%; animation: pulse 1.2s infinite;
  }
  .front-box-body { padding: 16px; }

  .yt-frame { aspect-ratio: 16/9; width: 100%; display: block; border: none; }

  /* === KICK INTERSTITIAL === */
  .kick-slab {
    background: #000;
    color: var(--paper);
    padding: 96px 48px;
    border-top: 4px solid var(--kick);
    border-bottom: 4px solid var(--kick);
    position: relative;
    overflow: hidden;
  }
  .kick-slab::before {
    content: "";
    position: absolute; inset: 0;
    background-image:
      linear-gradient(to right, rgba(83,252,24,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(83,252,24,0.08) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }
  .kick-slab .eyebrow { color: var(--kick); }
  .kick-slab h2.display { color: var(--paper); }
  .kick-slab h2.display em { color: var(--kick); font-style: italic; }
  .kick-slab p { color: rgba(255,255,255,0.75); font-size: 18px; max-width: 720px; }

  /* === STATS === */
  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border: 1px solid var(--ink);
    background: var(--paper);
    margin: 40px 0;
  }
  .stat {
    padding: 28px 24px;
    border-right: 1px solid var(--ink);
    position: relative;
  }
  .stat:last-child { border-right: none; }
  .stat .n {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .stat .n sup { font-size: 0.5em; vertical-align: super; font-weight: 400; }
  .stat .label {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-soft);
    margin-top: 8px;
  }
  .stat .note {
    font-size: 13px;
    margin-top: 6px;
    color: var(--ink-soft);
  }

  /* === COLUMNS === */
  .columns-3 {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    border-top: 1px solid var(--ink);
    padding-top: 32px;
  }
  .columns-3 > div { border-left: 1px solid var(--ink); padding-left: 24px; }
  .columns-3 > div:first-child { border-left: none; padding-left: 0; }
  .columns-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }

  /* === STAMP === */
  .stamp {
    display: inline-block;
    border: 3px solid var(--stamp);
    color: var(--stamp);
    padding: 6px 14px;
    font-family: "JetBrains Mono", monospace;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    transform: rotate(-4deg);
    opacity: 0.85;
  }
  .stamp.blood { border-color: var(--blood); color: var(--blood); }

  /* === CITY MAP (illustrated) === */
  .city-map {
    border: 1px solid var(--ink);
    background: var(--paper);
    padding: 28px;
    position: relative;
  }
  .city-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 140px);
    gap: 4px;
    background: var(--ink);
    border: 1px solid var(--ink);
    margin-top: 20px;
  }
  .lot {
    background: var(--paper-2);
    padding: 12px;
    display: flex; flex-direction: column; justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .lot .lot-no {
    font-family: "JetBrains Mono", monospace;
    font-size: 10px;
    color: var(--ink-soft);
    letter-spacing: 0.1em;
    position: relative; z-index: 2;
  }
  .lot .lot-name {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    position: relative; z-index: 2;
  }
  .lot .lot-ico {
    position: absolute;
    right: 8px; top: 30px;
    width: 56px; height: 56px;
    opacity: 0.85;
    z-index: 1;
  }
  .lot.kick {
    background: #000;
    border: 2px solid var(--kick);
    grid-column: span 2;
  }
  .lot.kick .lot-no, .lot.kick .lot-name { color: var(--kick); }
  .lot.kick .lot-ico { opacity: 1; }
  .lot.blood {
    background: var(--blood); color: var(--paper);
    grid-column: span 2;
  }
  .lot.blood .lot-no, .lot.blood .lot-name { color: var(--paper); }
  .lot.blood .lot-ico { filter: invert(1); }
  .lot .live-pin {
    position: absolute; top: 8px; right: 8px;
    background: var(--kick); color: #000;
    font-family: "JetBrains Mono", monospace; font-size: 8px;
    padding: 2px 5px; letter-spacing: 0.1em;
    animation: pulse 1.2s infinite;
    z-index: 3;
  }

  /* === TIER CARDS === */
  .tiers {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border: 1px solid var(--ink);
  }
  .tier {
    padding: 32px 28px;
    border-right: 1px solid var(--ink);
    display: flex; flex-direction: column;
    background: var(--paper);
  }
  .tier:last-child { border-right: none; }
  .tier.featured { background: var(--kick); color: var(--kick-dark); }
  .tier.featured .tier-label { color: var(--kick-dark); }
  .tier-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink-soft);
    margin-bottom: 12px;
  }
  .tier h3 {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: 34px;
    line-height: 1;
    margin: 0 0 16px;
  }
  .tier .amount {
    font-family: "Old Standard TT", serif;
    font-size: 20px;
    font-style: italic;
    color: var(--ink-soft);
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid currentColor;
  }
  .tier.featured .amount { color: var(--kick-dark); opacity: 0.7; }
  .tier ul {
    list-style: none; padding: 0; margin: 0 0 24px;
    font-size: 15px;
  }
  .tier ul li {
    padding: 8px 0;
    border-bottom: 1px dotted currentColor;
    display: flex; gap: 10px;
  }
  .tier ul li::before {
    content: "→"; font-family: "JetBrains Mono", monospace;
    flex-shrink: 0;
  }
  .tier .tier-cta {
    margin-top: auto;
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 12px 16px;
    border: 2px solid currentColor;
    text-align: center;
    text-decoration: none;
  }

  /* === ROADMAP === */
  .roadmap {
    border: 1px solid var(--ink);
    background: var(--paper);
  }
  .rm-row {
    display: grid;
    grid-template-columns: 160px 1fr 2fr;
    border-bottom: 1px solid var(--ink);
    align-items: stretch;
  }
  .rm-row:last-child { border-bottom: none; }
  .rm-row > div { padding: 20px 24px; border-right: 1px solid var(--ink); }
  .rm-row > div:last-child { border-right: none; }
  .rm-date {
    font-family: "JetBrains Mono", monospace;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: var(--ink);
    color: var(--paper);
    display: flex; align-items: center;
  }
  .rm-title {
    font-family: "Old Standard TT", serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.1;
    display: flex; align-items: center;
  }
  .rm-detail { font-size: 15px; color: var(--ink-soft); display: flex; align-items: center; }
  .rm-row.highlight .rm-date { background: var(--kick); color: var(--kick-dark); }

  /* === FOOTER === */
  footer.colophon {
    background: #0a0a0a;
    color: var(--paper);
    padding: 72px 48px 40px;
    border-top: 4px solid var(--kick);
    position: relative;
    z-index: 2;
  }
  footer.colophon .ft-logo-lg {
    width: 100%; max-width: 900px; height: auto;
    display: block; margin: 0 auto 56px;
    opacity: 0.95;
  }
  footer.colophon .big {
    font-family: "Old Standard TT", serif;
    font-size: clamp(40px, 6vw, 82px);
    line-height: 0.95;
    margin: 0 0 48px;
    max-width: 1000px;
    letter-spacing: -0.01em;
  }
  footer.colophon .big em { color: var(--kick); font-style: italic; }
  footer.colophon .cols {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding-top: 32px;
    border-top: 1px solid rgba(241,233,214,0.2);
  }
  footer.colophon .cols h4 { margin: 0 0 12px; color: var(--kick); font-size: 11px; letter-spacing: 0.15em; font-weight: 500; }
  footer.colophon .cols p, footer.colophon .cols a {
    margin: 4px 0;
    color: rgba(241,233,214,0.75);
    line-height: 1.6;
    text-decoration: none;
    display: block;
    transition: color .2s;
  }
  footer.colophon .cols a:hover { color: var(--kick); }
  footer.colophon .sig {
    text-align: center;
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1px solid rgba(241,233,214,0.2);
    font-family: "JetBrains Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    color: rgba(241,233,214,0.5);
  }

  /* === PULL QUOTE === */
  .pullquote {
    border-top: 4px double var(--ink);
    border-bottom: 4px double var(--ink);
    padding: 48px 0;
    margin: 48px 0;
    text-align: center;
  }
  .pullquote q {
    font-family: "Old Standard TT", serif;
    font-style: italic;
    font-size: clamp(28px, 4vw, 48px);
    line-height: 1.2;
    quotes: "“" "”";
    max-width: 900px;
    display: inline-block;
  }
  .pullquote .attr {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 20px;
    color: var(--ink-soft);
  }

  /* === REVENUE BARS === */
  .rev-list { display: flex; flex-direction: column; gap: 14px; margin-top: 24px; }
  .rev-row { display: grid; grid-template-columns: 200px 1fr 90px; align-items: center; gap: 16px; }
  .rev-row .rev-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .rev-row .rev-bar {
    height: 20px;
    background: var(--paper-2);
    border: 1px solid var(--ink);
    position: relative;
    overflow: hidden;
  }
  .rev-row .rev-bar-fill {
    position: absolute; left: 0; top: 0; bottom: 0;
    background: var(--ink);
    width: 0;
    animation: bar-grow 1.4s ease-out forwards;
  }
  .rev-row .rev-bar-fill.kick { background: var(--kick); }
  .rev-row .rev-bar-fill.orange { background: var(--ft-orange); }
  .rev-row .rev-bar-fill.blue { background: var(--ft-blue); }
  .rev-row .rev-amt {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: 18px;
    text-align: right;
  }
  @keyframes bar-grow { from { width: 0 !important; } }

  /* === IMPRESSIONS (billion) === */
  .impression-card {
    background: #000;
    color: var(--kick);
    border: 2px solid var(--kick);
    padding: 40px 32px;
    position: relative;
    overflow: hidden;
  }
  .impression-card::before {
    content: "";
    position: absolute; inset: 0;
    background:
      repeating-linear-gradient(
        90deg,
        transparent 0 28px,
        rgba(83,252,24,0.08) 28px 29px
      );
    pointer-events: none;
  }
  .impression-card .hash {
    font-family: "JetBrains Mono", monospace;
    font-size: 13px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .impression-card .big-number {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: clamp(72px, 12vw, 160px);
    line-height: 0.85;
    letter-spacing: -0.03em;
    color: var(--kick);
    text-shadow: 0 0 40px rgba(83,252,24,0.4);
    margin: 0;
    position: relative; z-index: 2;
  }
  .impression-card .sub {
    color: rgba(83,252,24,0.7);
    font-family: "JetBrains Mono", monospace;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 12px;
  }

  /* === GLOBAL MAP (24/7/365 ambition) === */
  .globe-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0;
    border: 1px solid var(--ink);
    background: var(--ink);
    margin-top: 32px;
  }
  .country-cell {
    background: var(--paper);
    padding: 20px 16px;
    border-right: 1px solid var(--ink);
    border-bottom: 1px solid var(--ink);
    min-height: 140px;
    display: flex; flex-direction: column; justify-content: space-between;
    position: relative;
  }
  .country-cell:nth-child(6n), .country-cell:last-child { border-right: none; }
  .country-cell .flag-strip {
    display: flex; gap: 2px; height: 8px; margin-bottom: 10px;
  }
  .country-cell .flag-strip > div { flex: 1; }
  .country-cell .cc {
    font-family: "JetBrains Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--ink-soft);
  }
  .country-cell .name {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    margin-top: 4px;
  }
  .country-cell .status {
    font-family: "JetBrains Mono", monospace;
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-soft);
    margin-top: 8px;
  }
  .country-cell.live {
    background: #000; color: var(--kick);
  }
  .country-cell.live .cc, .country-cell.live .name { color: var(--kick); }
  .country-cell.live .status { color: var(--kick); }
  .country-cell.live::after {
    content: "LIVE"; position: absolute; top: 8px; right: 8px;
    background: var(--kick); color: #000;
    font-family: "JetBrains Mono", monospace; font-size: 8px;
    padding: 2px 5px; letter-spacing: 0.1em;
    animation: pulse 1.2s infinite;
  }

  /* === VENN === */
  .venn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 32px;
  }
  .venn-card {
    border: 1px solid var(--ink);
    padding: 24px;
    background: var(--paper);
    color: var(--ink);
  }
  .venn-card h4, .venn-card .big-num { color: var(--ink); }
  .venn-card.kick { background: #000; color: var(--kick); border-color: var(--kick); }
  .venn-card h4 {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin: 0 0 12px;
  }
  .venn-card .big-num {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 1;
    margin-bottom: 8px;
  }

  /* === BLOODGAMES === */
  .blood-slab {
    background: #1a0808;
    color: #e8d5b7;
    padding: 96px 48px;
    border-top: 4px solid var(--blood);
    border-bottom: 4px solid var(--blood);
    position: relative;
    overflow: hidden;
  }
  .blood-slab::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(122,20,20,0.4) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(122,20,20,0.3) 0%, transparent 40%);
    pointer-events: none;
  }
  .blood-slab .eyebrow { color: var(--blood); }
  .blood-slab h2.display { color: #f4e4c1; }
  .blood-slab h2.display em { color: var(--blood); }
  .blood-slab p { color: rgba(232,213,183,0.8); max-width: 720px; font-size: 18px; }

  /* === TECH STACK BLOCKS === */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 32px;
  }
  .tech-card {
    border: 1px solid var(--ink);
    background: var(--paper);
    padding: 20px;
    position: relative;
  }
  .tech-card .tech-title {
    font-family: "Old Standard TT", serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    margin: 0 0 8px;
  }
  .tech-card .tech-desc { font-size: 13px; color: var(--ink-soft); }
  .tech-card .tech-tag {
    position: absolute; top: 14px; right: 14px;
    font-family: "JetBrains Mono", monospace;
    font-size: 9px;
    letter-spacing: 0.1em;
    background: var(--ink);
    color: var(--paper);
    padding: 2px 6px;
  }

  /* === SOCIAL GRID === */
  .socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border: 1px solid rgba(241,233,214,0.2);
    margin-bottom: 48px;
  }
  .socials a {
    padding: 24px 20px;
    border-right: 1px solid rgba(241,233,214,0.2);
    border-bottom: 1px solid rgba(241,233,214,0.2);
    display: flex; flex-direction: column; gap: 4px;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(241,233,214,0.75);
    text-decoration: none;
    transition: all .2s;
  }
  .socials a:hover { background: var(--kick); color: #000; }
  .socials a:nth-child(4n), .socials a:last-child { border-right: none; }
  .socials a .platform { color: var(--kick); font-size: 10px; letter-spacing: 0.15em; }
  .socials a:hover .platform { color: #000; }
  .socials a .handle { font-family: "Old Standard TT", serif; font-size: 18px; letter-spacing: 0; text-transform: none; line-height: 1.1; }

  /* Utility */
  .space-md { height: 72px; }
  .space-sm { height: 40px; }

  @media (max-width: 960px) {
    .hero { grid-template-columns: 1fr; padding: 32px 24px 40px; }
    .hero-lead .twocol { column-count: 1; }
    .stats { grid-template-columns: repeat(2, 1fr); }
    .stat:nth-child(2) { border-right: none; }
    .stat:nth-child(1), .stat:nth-child(2) { border-bottom: 1px solid var(--ink); }
    .columns-3, .columns-2 { grid-template-columns: 1fr; gap: 24px; }
    .columns-3 > div { border-left: none; padding-left: 0; border-top: 1px solid var(--ink); padding-top: 24px; }
    .columns-3 > div:first-child { border-top: none; padding-top: 0; }
    .tiers { grid-template-columns: 1fr; }
    .tier { border-right: none; border-bottom: 1px solid var(--ink); }
    .city-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
    .lot.kick, .lot.blood { grid-column: span 2; }
    .rm-row { grid-template-columns: 1fr; }
    .rm-row > div { border-right: none; border-bottom: 1px solid var(--ink); }
    .wrap, .wrap-narrow, .masthead, .section-head, .hero, .kick-slab, .blood-slab, footer.colophon { padding-left: 24px; padding-right: 24px; }
    .masthead { padding-top: 18px; padding-bottom: 16px; }
    .masthead-top {
      flex-direction: column;
      align-items: stretch;
      gap: 4px;
      font-size: 10px;
      letter-spacing: 0.06em;
      padding-bottom: 12px;
      margin-bottom: 12px;
    }
    .masthead-top > div,
    .masthead-top > div[style] {
      text-align: center !important;
      overflow-wrap: anywhere;
      word-break: break-word;
      max-width: 100%;
    }
    .masthead-top .center { flex: none; }
    .masthead-sub {
      margin-top: 16px;
      grid-template-columns: 1fr;
      gap: 10px;
      font-size: 10px;
      text-align: center;
      letter-spacing: 0.06em;
    }
    .masthead-sub > div { overflow-wrap: anywhere; word-break: break-word; }
    .masthead-sub .hr { display: none; }
    .brand-strip {
      margin: 14px -24px 0;
      padding: 18px 12px;
      gap: 12px;
      flex-wrap: nowrap;
    }
    .brand-strip > * { min-width: 0; flex-shrink: 1; }
    .brand-strip .ft-logo,
    .brand-strip .kick-svg {
      height: auto;
      width: auto;
      max-height: clamp(28px, 8vw, 54px);
      max-width: calc(42% - 18px);
      object-fit: contain;
      display: block;
    }
    .brand-strip .x {
      flex: 0 0 auto;
      font-size: clamp(22px, 6vw, 32px);
    }
    .ticker { font-size: 10px; height: 28px; }
    .ticker-track { gap: 28px; }
    .venn { grid-template-columns: 1fr; }
    footer.colophon { padding-top: 48px; padding-bottom: 32px; }
    footer.colophon .cols { grid-template-columns: 1fr 1fr; }
    .socials { grid-template-columns: 1fr 1fr; }
    .socials a:nth-child(2n) { border-right: none; }
    .globe-grid { grid-template-columns: repeat(3, 1fr); }
    .country-cell:nth-child(6n) { border-right: 1px solid var(--ink); }
    .country-cell:nth-child(3n) { border-right: none; }
    .tech-grid { grid-template-columns: 1fr 1fr; }
    .section-head { padding: 14px 24px; font-size: 10px; }
    .kick-slab, .blood-slab { padding-top: 64px; padding-bottom: 64px; }
  }

  @media (max-width: 480px) {
    .brand-strip { gap: 10px; padding: 14px 10px; }
    .brand-strip .ft-logo,
    .brand-strip .kick-svg {
      max-height: clamp(24px, 7vw, 44px);
      max-width: calc(42% - 14px);
    }
    .brand-strip .x { font-size: clamp(18px, 5vw, 26px); }
    .masthead-top { font-size: 9px; letter-spacing: 0.04em; }
    .masthead-sub { font-size: 9px; letter-spacing: 0.04em; }
    .stats { grid-template-columns: 1fr; }
    .stat { border-right: none; border-bottom: 1px solid var(--ink); }
    .stat:last-child { border-bottom: none; }
    .tech-grid { grid-template-columns: 1fr; }
    .globe-grid { grid-template-columns: repeat(2, 1fr); }
    .country-cell:nth-child(3n) { border-right: 1px solid var(--ink); }
    .country-cell:nth-child(2n) { border-right: none; }
  }`;
