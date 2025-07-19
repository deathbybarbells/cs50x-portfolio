BEGIN README (NO FENCES)
# Fitness 4:13 – Online Training Platform

> *“I can do all things…”* – A faith‑inspired, level‑based fitness web application delivering structured workout programs (Beginner → Elite) with video guidance and secure, session‑restricted access.

**Demo Video:** https://www.youtube.com/watch?v=vIWnraP4Tso

## 1. Overview

**Fitness 4:13** is a self‑built online training platform that blends faith and fitness, providing tiered workout programs and instructional media. Registered users gain access to gated program pages (Beginner, Intermediate, Advanced, Elite). Sessions secure premium content while keeping the user experience lightweight and fast.

## 2. Key Features

| Feature | Description | Tech / Concept |
|---------|-------------|----------------|
| User Registration | Simple signup (name, email, password) | PHP sessions (hash later) |
| Session Auth | Restricts program pages | `$_SESSION` gate + redirect |
| Tiered Programs | Beginner → Elite levels | Progressive overload |
| Instructional Media | Embedded videos + descriptions | Organized media assets |
| Smooth Navigation | Smooth scrolling, shared navbar | Vanilla JS |
| Responsive Design | Mobile & tablet friendly | CSS flex / breakpoints |
| Secure Logout | Session destroy & redirect | `session_unset()`, `session_destroy()` |

## 3. Architecture & Flow

    Client (Browser)
       |
       | 1. GET / (index.html)
       | 2. POST /process_signup.php (creates session)
       | 3. GET /beginner.html (guarded)
       v
    PHP Pages (index / signup / process_signup / program pages)
       |
       |  Session state (user_id, level, etc.)
       v
    PHP Session Store (server memory)
       |
       v
    Restricted Program Pages + Media Assets

**Request Lifecycle:**
1. Visitor lands on `index.html` or `signup.html`.
2. Signup POST → `process_signup.php` sets `$_SESSION['user_id']`.
3. User requests a program page → guard script runs.
4. Valid session serves content; otherwise redirects to signup.
5. Logout destroys session.

**Scalability Path:** DB + hashed passwords, Redis sessions if scaling, CDN for media, REST API for future mobile.

## 4. Authentication

    <?php
    session_start();
    if (!isset($_SESSION["user_id"])) {
        header("Location: signup.html");
        exit;
    }
    ?>

**Planned Upgrades:** Password hashing (`password_hash`), persistent users table, CSRF tokens, HTTPS enforcement, login rate limiting.

## 5. JavaScript Highlights

**Form Handling**

    document.addEventListener("DOMContentLoaded", () => {
      const form = document.querySelector('#online-training-form');
      if (!form) return;
      form.addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        console.log('Form submitted:', data);
        alert('Thank you for signing up! We will contact you shortly.');
      });
    });

**Smooth Scroll**

    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    });

**Dynamic Marquee Speed**

    const scrollText = document.querySelector('.scroll-text');
    if (scrollText) {
      scrollText.style.animationDuration = `${scrollText.offsetWidth / 100}s`;
    }

## 6. Design Choices

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| Sessions before payments | Ship gating first | Avoid premature complexity |
| Four program levels | Clear progression | Motivation & structure |
| Local media | Direct control | CDN later for scale |
| Minimal dependencies | Vanilla JS + PHP | Simple deployment |
| Progressive enhancement | JS optional | Accessibility & resilience |

## 7. Challenges & Resolutions

| Challenge | Resolution | Future Improvement |
|-----------|------------|--------------------|
| Simplicity vs security | Basic sessions only | Add DB + hashing |
| Layout consistency | Shared nav & styling | Template engine/includes |
| Media size potential | Structured `/media` dirs | Lazy loading / CDN |
| Reliable gating | Session guard snippet | Middleware abstraction |

## 8. Roadmap

| Priority | Feature | Description |
|----------|---------|-------------|
| High | DB + password hashing | Persist accounts securely |
| High | Payment integration | Stripe / PayPal for premium tiers |
| Medium | User dashboard | Progress tracking & favorites |
| Medium | Community features | Forums / chat / social |
| Medium | Expanded content | Nutrition & recovery modules |
| Low | Analytics | Engagement metrics |
| Low | API layer | REST/JSON for mobile or SPA |

## 9. Local Development

    php -S localhost:4130
    # Visit http://localhost:4130/

Rename any `.html` files executing PHP logic to `.php` and include the session guard.

## 10. Security (Planned)

| Area | Current | Planned |
|------|---------|---------|
| Password storage | Not persisted | Hashed + DB |
| Transport | HTTP (dev) | HTTPS (prod) |
| CSRF | None | Tokens / SameSite cookies |
| Validation | Basic HTML required | Server-side sanitation |
| Rate limiting | None | Throttle login attempts |

## 11. Scalability

- DB migration (SQLite/MySQL/Postgres)
- External session store (Redis) for multi‑instance scaling
- Media offload (S3 + CDN)
- API layer + potential SPA or mobile client

## 12. Quick Wins

| Win | Benefit |
|-----|---------|
| Hash passwords | Immediate security upgrade |
| Input validation | Data integrity & safety |
| Lazy-load videos | Faster initial render |
| Central nav include | DRY, easier updates |
| Basic tests | Prevent regressions |

## 13. Academic Integrity / License

Provided for professional review only. Not for academic submission or resale.

## 14. Contact

Author: Kevin (“deathbybarbells”) – open to feedback & discussion.

## 15. TL;DR

| Stack | Auth | Run | Growth Path |
|-------|------|-----|------------|
| HTML/CSS/PHP/JS | Sessions | `php -S localhost:4130` | DB → Payments → Community |
END README
