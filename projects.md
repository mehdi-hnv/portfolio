---
layout: page
title: Projects
permalink: /projects/
eyebrow: Projects
lead: Case studies rooted in community impact.
description: "Project portfolio for Mehdi"
---
<section class="project-grid" aria-label="Project cards">
  <article class="project-card">
    <img src="{{ '/assets/images/project1.svg' | relative_url }}" alt="Visualization for Project 1" width="480" height="320">
    <div>
      <p class="eyebrow">Project 1</p>
      <h2>Campus Compass</h2>
      <p>Progressive web app that helps new students discover events, mentors, and study spaces via curated, location-aware recommendations.</p>
      <ul class="tag-list">
        <li>TypeScript</li>
        <li>PWA</li>
        <li>Accessibility</li>
      </ul>
      <div class="card-actions">
        <a class="btn primary" href="https://github.com/mehdicode/campus-compass" target="_blank" rel="noreferrer">View Code</a>
        <a class="btn ghost" href="https://campus-compass.example.com" target="_blank" rel="noreferrer">Live demo</a>
      </div>
    </div>
  </article>

  <article class="project-card">
    <img src="{{ '/assets/images/project2.svg' | relative_url }}" alt="Visualization for Hour of Code project" width="480" height="320">
    <div>
      <p class="eyebrow">Hour of Code</p>
      <h2>CodeQuest Workshops</h2>
      <p>Interactive Hour of Code curriculum mixing storytelling, drag-and-drop coding, and unplugged activities for middle school classrooms.</p>
      <ul class="tag-list">
        <li>Education</li>
        <li>Scratch</li>
        <li>Curriculum</li>
      </ul>
      <div class="card-actions">
        <a class="btn primary" href="https://github.com/mehdicode/codequest" target="_blank" rel="noreferrer">Curriculum repo</a>
        <a class="btn ghost" href="https://hourofcode.com" target="_blank" rel="noreferrer">Program info</a>
      </div>
    </div>
  </article>

  <article class="project-card">
    <img src="{{ '/assets/images/project3.svg' | relative_url }}" alt="Visualization for Design System" width="480" height="320">
    <div>
      <p class="eyebrow">Community</p>
      <h2>Commons Design System</h2>
      <p>Open-source design system for student clubs featuring accessible components, robust documentation, and zero-dependency tooling.</p>
      <ul class="tag-list">
        <li>Design Systems</li>
        <li>Sass</li>
        <li>Storybook</li>
      </ul>
      <div class="card-actions">
        <a class="btn primary" href="https://github.com/mehdicode/commons-design" target="_blank" rel="noreferrer">View Storybook</a>
        <a class="btn ghost" href="mailto:{{ site.author.email }}">Request access</a>
      </div>
    </div>
  </article>
</section>
