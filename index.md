---
layout: default
title: Home
description: "Home of Mehdi's portfolio website"
page_id: home
permalink: /
---
<section class="hero">
  <div class="hero__content">
    <p class="eyebrow">Hi, I am</p>
    <h1>{{ site.author.name }}</h1>
    <p class="lead">I build human-centered digital experiences that blend engineering rigor with playful experimentation. I love turning complex problems into simple, elegant interfaces.</p>
    <div class="hero__actions">
      <a class="btn primary" href="{{ '/projects/' | relative_url }}">Explore Projects</a>
      <a class="btn ghost" href="{{ site.github_repo }}" target="_blank" rel="noreferrer">View Repo</a>
    </div>
  </div>
  <div class="hero__media">
    <img src="{{ '/assets/images/profile.svg' | relative_url }}" alt="Illustrated profile of Mehdi" width="360" height="360">
  </div>
</section>

<section class="highlights" aria-label="Highlights">
  <article>
    <h2>What I Do</h2>
    <p>I design and develop accessible web apps, run creative coding workshops, and document everything so others can re-create the experience.</p>
  </article>
  <article>
    <h2>Currently</h2>
    <p>Leading a student developer community, mentoring peers on Codecademy, and experimenting with AI-assisted design systems.</p>
  </article>
  <article>
    <h2>Next</h2>
    <p>Looking for collaborative teams that value curiosity, community, and clean code.</p>
  </article>
</section>

<section class="social-proof" aria-label="Profile Links">
  <h2>Find me online</h2>
  <div class="icon-row">
    <a class="icon-link" href="https://github.com/mehdicode" target="_blank" rel="noreferrer">
      <span class="sr-only">GitHub</span>
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.11-.76.08-.75.08-.75 1.23.09 1.88 1.26 1.88 1.26 1.09 1.86 2.86 1.33 3.56 1.02.11-.8.43-1.33.78-1.63-2.67-.31-5.48-1.34-5.48-5.95 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.63-5.49 5.94.44.39.83 1.15.83 2.32v3.44c0 .32.22.7.82.58A12 12 0 0 0 12 .5"/></svg>
    </a>
    <a class="icon-link" href="https://www.codecademy.com/profiles/mehdi" target="_blank" rel="noreferrer">
      <span class="sr-only">Codecademy</span>
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M4 5h16v14H4z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M7.5 9.5h4v-2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4v-2h-4v-5zm5.5 0v2h3v1.9h-3V16h5.5v-2H17V9.5z"/></svg>
    </a>
    <a class="icon-link" href="mailto:{{ site.author.email }}">
      <span class="sr-only">Email</span>
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M3.5 6h17a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 16.5v-9A1.5 1.5 0 0 1 3.5 6zm.75 1.5 6.83 5.17a2 2 0 0 0 2.34 0L20 7.5H4.25zm16.25 1.4-5.9 4.39a4 4 0 0 1-4.7 0L4 8.9v7.6h16.5z"/></svg>
    </a>
  </div>
</section>
