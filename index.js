<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OG x Isai — Mobile Amplifier</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

  :root{
    --bg: #060309;
    --bg-2: #0b0714;
    --panel: #0e0a1a;
    --purple: #8b5cf6;
    --purple-bright: #b794f6;
    --purple-deep: #5b21b6;
    --silver: #e8e6ef;
    --silver-dim: #9d98ab;
    --edge: rgba(139, 92, 246, 0.35);
    --edge-bright: rgba(183, 148, 246, 0.7);
  }

  *{ margin:0; padding:0; box-sizing:border-box; }

  html{ scroll-behavior:smooth; }

  body{
    background: var(--bg);
    color: var(--silver);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    position: relative;
  }

  /* ambient background */
  body::before{
    content:'';
    position: fixed;
    inset: 0;
    background:
      radial-gradient(ellipse 900px 500px at 15% 10%, rgba(139,92,246,0.18), transparent 60%),
      radial-gradient(ellipse 700px 600px at 90% 30%, rgba(91,33,182,0.16), transparent 60%),
      radial-gradient(ellipse 800px 500px at 50% 90%, rgba(139,92,246,0.10), transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  /* ---- background video ---- */
  .bg-video-wrap{
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
  }
  .bg-video-wrap video{
    position:absolute;
    top:50%; left:50%;
    min-width:100%; min-height:100%;
    width:auto; height:auto;
    transform: translate(-50%,-50%);
    object-fit: cover;
    opacity: 0.35;
    filter: saturate(1.15) contrast(1.05);
  }
  .bg-video-wrap::after{
    content:'';
    position:absolute; inset:0;
    background:
      radial-gradient(ellipse 900px 500px at 15% 10%, rgba(139,92,246,0.15), transparent 60%),
      radial-gradient(ellipse 700px 600px at 90% 30%, rgba(91,33,182,0.14), transparent 60%),
      linear-gradient(180deg, rgba(6,3,9,0.75), rgba(6,3,9,0.55) 30%, rgba(6,3,9,0.85) 100%);
  }

  .crack-line{
    position: fixed;
    pointer-events: none;
    z-index: 0;
    opacity: 0.5;
  }

  h1,h2,h3,.display{
    font-family: 'Rajdhani', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  a{ color: inherit; text-decoration: none; }

  .wrap{
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    z-index: 1;
  }

  /* ---- nav ---- */
  nav{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 26px 0;
  }

  .logo{
    font-family:'Rajdhani', sans-serif;
    font-weight:700;
    font-size: 26px;
    letter-spacing: 0.03em;
  }
  .logo span.og{ color: var(--silver); text-shadow: 0 0 18px rgba(255,255,255,0.35); }
  .logo span.x{ color: var(--silver-dim); font-weight: 500; margin: 0 6px; }
  .logo span.isai{ color: var(--purple-bright); font-style: italic; text-shadow: 0 0 20px rgba(183,148,246,0.6); }

  .nav-links{
    display:flex;
    gap: 40px;
    list-style:none;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--silver-dim);
  }
  .nav-links a{ position:relative; padding-bottom: 6px; transition: color .25s; }
  .nav-links a:hover{ color: var(--silver); }
  .nav-links a.active{ color: var(--silver); }
  .nav-links a.active::after{
    content:'';
    position:absolute; left:0; right:0; bottom:-2px;
    height:2px; background: var(--purple-bright);
    box-shadow: 0 0 8px var(--purple-bright);
  }

  .pill-btn{
    display:inline-flex;
    align-items:center;
    gap: 10px;
    padding: 11px 22px;
    border: 1px solid var(--edge);
    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    background: rgba(139,92,246,0.06);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--purple-bright);
    transition: all .25s ease;
    white-space: nowrap;
  }
  .pill-btn:hover{
    background: rgba(139,92,246,0.16);
    box-shadow: 0 0 22px rgba(139,92,246,0.35);
  }

  /* ---- hero ---- */
  .hero{
    text-align:center;
    padding: 70px 0 40px;
  }

  .hero .pill-btn{ margin-bottom: 46px; }

  .hero-title{
    font-size: clamp(64px, 13vw, 148px);
    font-weight: 700;
    line-height: 0.9;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 0.15em;
    flex-wrap: wrap;
    position: relative;
  }
  .hero-title .og{
    position: relative;
    color: #eceaf3;
    background: linear-gradient(180deg, #ffffff 0%, #d6d1e6 30%, #918aa8 55%, #47415c 78%, #201d2c 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 30px rgba(255,255,255,0.3)) drop-shadow(0 2px 0 rgba(0,0,0,0.6)) drop-shadow(0 6px 14px rgba(0,0,0,0.7));
    -webkit-text-stroke: 1.5px rgba(0,0,0,0.5);
  }
  .hero-title .og::after{
    content: 'OG';
    position:absolute; inset:0;
    background: repeating-linear-gradient(115deg, transparent 0 8px, rgba(0,0,0,0.35) 8.5px 9px, transparent 9.5px 22px, rgba(0,0,0,0.28) 22.5px 23px);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    mix-blend-mode: multiply;
    pointer-events: none;
  }
  .hero-title .cross{
    font-size: 0.45em;
    color: var(--silver-dim);
    font-weight: 500;
  }
  .hero-title .isai{
    position: relative;
    font-style: italic;
    background: linear-gradient(160deg, #ffffff 0%, #e3d3ff 22%, #c9a9f9 42%, #8b5cf6 68%, #4c1d95 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 36px rgba(139,92,246,0.65)) drop-shadow(0 0 70px rgba(139,92,246,0.35)) drop-shadow(0 3px 0 rgba(20,8,40,0.7));
    transform: skewX(-6deg);
    -webkit-text-stroke: 1px rgba(76,29,149,0.4);
  }

  .hero-sparks{
    position:absolute;
    inset: -60px -40px;
    pointer-events:none;
    z-index: -1;
    opacity: 0.9;
  }

  .tagline{
    margin-top: 28px;
    font-size: 17px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--silver-dim);
    font-weight: 500;
  }
  .tagline b{ color: var(--purple-bright); font-weight: 700; }

  .crafted-by{
    margin-top: 18px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 14px;
    font-size: 13px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--silver-dim);
  }
  .crafted-by .divider{
    width: 46px; height:1px;
    background: linear-gradient(90deg, transparent, var(--edge-bright), transparent);
  }
  .crafted-by b{ color: var(--silver); }

  .hero-ctas{
    margin-top: 46px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 18px;
  }

  .cta-main{
    display:flex;
    align-items:center;
    gap: 22px;
    padding: 22px 44px;
    font-family:'Rajdhani', sans-serif;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #fff;
    border: 1.5px solid var(--edge-bright);
    background: linear-gradient(180deg, rgba(139,92,246,0.14), rgba(91,33,182,0.08));
    clip-path: polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px);
    box-shadow: 0 0 40px rgba(139,92,246,0.25), inset 0 0 30px rgba(139,92,246,0.06);
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .cta-main:hover{
    transform: translateY(-2px);
    box-shadow: 0 0 55px rgba(139,92,246,0.45), inset 0 0 30px rgba(139,92,246,0.1);
  }
  .cta-main svg{ width:22px; height:22px; }

  .cta-secondary{
    padding: 13px 30px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--silver-dim);
    border: 1px solid rgba(157,152,171,0.3);
    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    display:flex; align-items:center; gap:8px;
    transition: color .25s, border-color .25s;
  }
  .cta-secondary:hover{ color: var(--silver); border-color: var(--edge-bright); }

  /* ---- feature cards ---- */
  .features{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    margin-top: 90px;
  }

  .feature-card{
    padding: 34px 28px;
    text-align:center;
    border: 1px solid var(--edge);
    background: linear-gradient(180deg, rgba(139,92,246,0.05), rgba(14,10,26,0.4));
    clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px);
    transition: border-color .3s, transform .3s;
  }
  .feature-card:hover{
    border-color: var(--edge-bright);
    transform: translateY(-4px);
  }

  .feature-icon{
    width: 46px; height:46px;
    margin: 0 auto 20px;
    display:flex; align-items:center; justify-content:center;
    color: var(--purple-bright);
    filter: drop-shadow(0 0 12px rgba(139,92,246,0.6));
  }
  .feature-icon svg{ width:100%; height:100%; }

  .feature-card h3{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: 0.04em;
  }
  .feature-card p{
    font-size: 14px;
    color: var(--silver-dim);
    line-height: 1.5;
  }

  /* ---- dashboard ---- */
  .dashboard-section{ margin: 90px 0 100px; }

  .dash-header{
    display:flex;
    align-items:center;
    gap: 16px;
    margin-bottom: 26px;
  }
  .dash-dots{ display:flex; gap:8px; }
  .dash-dots span{ width:9px; height:9px; border-radius:50%; background: rgba(157,152,171,0.35); }
  .dash-dots span:first-child{ background: var(--purple-bright); box-shadow: 0 0 10px var(--purple-bright); }

  .dash-header h2{
    font-size: 24px;
    font-weight: 700;
  }
  .dash-header h2 span{ color: var(--purple-bright); }

  .dash-header .rule{
    flex:1;
    height: 100%;
    background: repeating-linear-gradient(-45deg, var(--edge) 0 6px, transparent 6px 12px);
    height: 14px;
    opacity: 0.5;
  }

  .dashboard{
    display:grid;
    grid-template-columns: 220px 1fr 260px;
    gap: 0;
    border: 1px solid var(--edge);
    background: linear-gradient(180deg, rgba(139,92,246,0.04), rgba(6,3,9,0.6));
    clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
  }

  .dash-sidebar{
    padding: 32px 24px;
    border-right: 1px solid rgba(139,92,246,0.15);
    display:flex;
    flex-direction:column;
    gap: 8px;
  }
  .dash-item{
    display:flex;
    align-items:center;
    gap: 12px;
    padding: 12px 14px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--silver-dim);
    border-radius: 4px;
    cursor: pointer;
    transition: background .2s, color .2s;
  }
  .dash-item svg{ width:16px; height:16px; flex-shrink:0; }
  .dash-item:hover{ color: var(--silver); }
  .dash-item.active{
    color: var(--silver);
    background: rgba(139,92,246,0.14);
    box-shadow: inset 2px 0 0 var(--purple-bright);
  }

  .dash-center{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 40px;
    border-right: 1px solid rgba(139,92,246,0.15);
  }

  .dial{
    position:relative;
    width: 190px; height: 190px;
    border-radius:50%;
    display:flex; align-items:center; justify-content:center;
  }
  .dial svg{ position:absolute; inset:0; width:100%; height:100%; transform: rotate(-90deg); }
  .dial-inner{
    width: 130px; height:130px;
    border-radius:50%;
    background: radial-gradient(circle at 50% 40%, rgba(139,92,246,0.18), rgba(6,3,9,0.9));
    display:flex; align-items:center; justify-content:center;
    box-shadow: inset 0 0 30px rgba(139,92,246,0.3);
  }
  .dial-bars{ display:flex; align-items:center; gap:3px; height: 40px; }
  .dial-bars .bar{
    width:3px;
    background: var(--purple-bright);
    border-radius: 2px;
    box-shadow: 0 0 6px var(--purple-bright);
    animation: bounce 1.4s ease-in-out infinite;
  }
  @keyframes bounce{
    0%,100%{ transform: scaleY(0.4); }
    50%{ transform: scaleY(1); }
  }

  .dial-label{
    margin-top: 22px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: var(--silver-dim);
  }

  .dash-stats{
    padding: 32px 30px;
    display:flex;
    flex-direction:column;
    gap: 24px;
    justify-content:center;
  }
  .stat-row .stat-top{
    display:flex;
    justify-content:space-between;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--silver-dim);
    margin-bottom: 8px;
  }
  .stat-row .stat-top .val{ color: var(--purple-bright); font-weight: 700; }
  .stat-bar{
    height: 6px;
    background: rgba(157,152,171,0.15);
    border-radius: 3px;
    overflow:hidden;
  }
  .stat-bar .fill{
    height:100%;
    background: linear-gradient(90deg, var(--purple-deep), var(--purple-bright));
    box-shadow: 0 0 10px rgba(139,92,246,0.6);
    border-radius: 3px;
  }

  /* ---- install steps ---- */
  .install-section{ margin: 0 0 100px; scroll-margin-top: 40px; }

  .install-steps{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    margin-top: 26px;
  }

  .install-step{
    padding: 30px 26px;
    border: 1px solid var(--edge);
    background: linear-gradient(180deg, rgba(139,92,246,0.05), rgba(14,10,26,0.4));
    clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px);
  }
  .install-step .num{
    font-family:'Rajdhani', sans-serif;
    font-size: 34px;
    font-weight: 700;
    color: var(--purple-bright);
    filter: drop-shadow(0 0 10px rgba(139,92,246,0.5));
    margin-bottom: 14px;
  }
  .install-step h3{
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: 0.03em;
  }
  .install-step p{
    font-size: 14px;
    color: var(--silver-dim);
    line-height: 1.55;
  }

  @media (max-width: 900px){
    .install-steps{ grid-template-columns: 1fr; }
  }

  /* ---- footer ---- */
  footer{
    border-top: 1px solid rgba(139,92,246,0.15);
    padding: 30px 0 50px;
    text-align:center;
    font-size: 12px;
    color: var(--silver-dim);
    letter-spacing: 0.08em;
  }

  @media (max-width: 900px){
    .nav-links{ display:none; }
    .features{ grid-template-columns: 1fr; }
    .dashboard{ grid-template-columns: 1fr; }
    .dash-sidebar{ border-right:none; border-bottom: 1px solid rgba(139,92,246,0.15); flex-direction:row; flex-wrap:wrap; }
    .dash-center{ border-right:none; border-bottom: 1px solid rgba(139,92,246,0.15); }
    .hero-title{ gap: 0.08em; }
  }

  @media (prefers-reduced-motion: reduce){
    .dial-bars .bar{ animation: none; transform: scaleY(0.8); }
  }
</style>
</head>
<body>

<div class="bg-video-wrap">
  <video autoplay muted loop playsinline>
    <source src="assets/bg-slow.mp4" type="video/mp4">
  </video>
</div>

<div class="wrap">
  <nav>
    <div class="logo"><span class="og">OG</span><span class="x">x</span><span class="isai">Isai</span></div>
    <ul class="nav-links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#support">Support</a></li>
    </ul>
    <a href="#" class="pill-btn">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z"/></svg>
      Exclusive Access
    </a>
  </nav>

  <section class="hero">
    <a href="#" class="pill-btn">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z"/></svg>
      Exclusive Access
    </a>

    <h1 class="hero-title">
      <svg class="hero-sparks" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#b794f6" stroke-width="1.4" fill="none" opacity="0.75">
          <path d="M40 60 L70 90 M55 60 L55 90 M40 75 L70 75"/>
          <path d="M930 40 L965 75 M947 38 L947 78 M928 58 L966 58"/>
          <path d="M60 380 L95 415 M77 378 L77 418 M58 398 L97 398"/>
          <path d="M900 400 L925 425 M912 398 L912 428"/>
        </g>
        <g fill="#e9d8ff" opacity="0.85">
          <path d="M20 220 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z"/>
          <path d="M960 180 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z"/>
          <path d="M120 30 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 z"/>
          <path d="M880 300 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z"/>
        </g>
        <g stroke="#8b5cf6" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round">
          <path d="M0 150 L18 165 L8 178 L30 200"/>
          <path d="M1000 320 L982 335 L992 350 L970 368"/>
        </g>
      </svg>
      <span class="og">OG</span><span class="cross">x</span><span class="isai">Isai</span>
    </h1>

    <p class="tagline">The <b>loudest</b> undefeated mobile amplifier</p>

    <div class="crafted-by">
      <span class="divider"></span>
      Hand crafted by <b>OG x Isai</b>
      <span class="divider"></span>
    </div>

    <div class="hero-ctas">
      <a href="#install" class="cta-main">
        Get Your Mic
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v13m0 0l-5-5m5 5l5-5M4 21h16"/></svg>
      </a>
      <a href="#install" class="cta-secondary">How to install
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </a>
    </div>

    <div class="features" id="features">
      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h8l-1 8 11-14h-8l1-6z"/></svg>
        </div>
        <h3>Max Loudness</h3>
        <p>Extreme volume boost beyond limits</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h2l2-7 3 14 3-10 2 5h6"/></svg>
        </div>
        <h3>Undefeated</h3>
        <p>Built to dominate every sound</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
        </div>
        <h3>Mobile Amplifier</h3>
        <p>Made for mobile, perfectly</p>
      </div>
    </div>
  </section>

  <section class="dashboard-section" id="about">
    <div class="dash-header">
      <div class="dash-dots"><span></span><span></span><span></span></div>
      <h2>Extension <span>Dashboard</span></h2>
      <div class="rule"></div>
    </div>

    <div class="dashboard">
      <div class="dash-sidebar">
        <div class="dash-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6v12M9 3v18M14 8v8M19 5v14"/></svg>
          Sound Board
        </div>
        <div class="dash-item active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0014 0v-2M12 19v3"/></svg>
          Mic Amplifier
        </div>
        <div class="dash-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="5"/><circle cx="8" cy="12" r="1.5"/><circle cx="16" cy="12" r="1.5"/></svg>
          Controller
        </div>
        <div class="dash-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
          Settings
        </div>
      </div>

      <div class="dash-center">
        <div class="dial">
          <svg viewBox="0 0 190 190">
            <circle cx="95" cy="95" r="82" fill="none" stroke="rgba(139,92,246,0.15)" stroke-width="8"/>
            <circle cx="95" cy="95" r="82" fill="none" stroke="url(#grad)" stroke-width="8" stroke-linecap="round" stroke-dasharray="515" stroke-dashoffset="20"/>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#5b21b6"/>
                <stop offset="100%" stop-color="#b794f6"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="dial-inner">
            <div class="dial-bars">
              <div class="bar" style="height:14px; animation-delay:0s"></div>
              <div class="bar" style="height:26px; animation-delay:.1s"></div>
              <div class="bar" style="height:38px; animation-delay:.2s"></div>
              <div class="bar" style="height:22px; animation-delay:.3s"></div>
              <div class="bar" style="height:32px; animation-delay:.15s"></div>
              <div class="bar" style="height:18px; animation-delay:.25s"></div>
              <div class="bar" style="height:28px; animation-delay:.05s"></div>
            </div>
          </div>
        </div>
        <div class="dial-label">Max Power</div>
      </div>

      <div class="dash-stats">
        <div class="stat-row">
          <div class="stat-top"><span>Amplifier Level</span><span class="val">100%</span></div>
          <div class="stat-bar"><div class="fill" style="width:100%"></div></div>
        </div>
        <div class="stat-row">
          <div class="stat-top"><span>Mic Boost</span><span class="val">100%</span></div>
          <div class="stat-bar"><div class="fill" style="width:100%"></div></div>
        </div>
        <div class="stat-row">
          <div class="stat-top"><span>Background Boost</span><span class="val">100%</span></div>
          <div class="stat-bar"><div class="fill" style="width:100%"></div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="install-section" id="install">
    <div class="dash-header">
      <div class="dash-dots"><span></span><span></span><span></span></div>
      <h2>How to <span>Install</span></h2>
      <div class="rule"></div>
    </div>

    <div class="install-steps">
      <div class="install-step">
        <div class="num">01</div>
        <h3>Download the package</h3>
        <p>Grab the latest release file for your device from the link your team provides.</p>
      </div>
      <div class="install-step">
        <div class="num">02</div>
        <h3>Enable the extension</h3>
        <p>Open your browser or device settings, then turn on OG x Isai from the extensions or apps list.</p>
      </div>
      <div class="install-step">
        <div class="num">03</div>
        <h3>Open the dashboard</h3>
        <p>Launch OG x Isai and adjust Amplifier Level, Mic Boost, and Background Boost to your liking.</p>
      </div>
    </div>
  </section>

  <footer id="support">
    OG x Isai — Dark Origin &nbsp;·&nbsp; © 2026
  </footer>
</div>

</body>
</html>
