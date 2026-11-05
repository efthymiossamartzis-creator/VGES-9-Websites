# PROJECT-KNOWLEDGE.md — Master Technical & Design Architecture

## Overview of the 9 VgesOnline Demonstration Websites

| # | Project Name | Industry / Sector | Template Reference | Brand Identity & Tone | Accent Colors | Cloudflare Project |
|---|---|---|---|---|---|---|
| 01 | **Aurelio Barbershop** | Men's Grooming / Barber | Fade (uiCookies) | Heritage, premium craft, dark vintage | Gold/Amber `#c59d5f`, Dark Charcoal `#1b1b1b` | `vges-aurelio` |
| 02 | **Mason Elia** | Mediterranean Fine Dining | Gusto (uiCookies) | Warm, earthy, modern artisanal | Olive Green `#556b2f`, Terracotta `#b25d3b`, Cream `#faf8f5` | `vges-mason-elia` |
| 03 | **Fos Photography** | Editorial & Fine Art Photography | Aperture (uiCookies) | Minimalist, immersive, visual-first | Neutral Monochrome `#0f0f10`, Gallery White `#ffffff`, Cool Gray `#888888` | `vges-fos-photography` |
| 04 | **Nisa Beauty** | Luxury Spa & Skincare | Serene (uiCookies) | Gentle, luminous, wellness, tranquil | Rose Quartz `#d8a499`, Soft Sage `#8ea59d`, Warm Blush `#fdf8f5` | `vges-nisa-beauty` |
| 05 | **Areti Medical** | Specialty Medical Practice | Vitals (uiCookies) | Authoritative, clean, compassionate, clinical | Medical Blue `#0d5c91`, Mint Cyan `#2bbbad`, Neutral Ice `#f4f8fb` | `vges-areti-medical` |
| 06 | **Lumen Dental** | Advanced Dental Aesthetics | Pearl (uiCookies) | Modern, bright, clean, confidence-inspiring | Cerulean Dental `#0082c8`, Crisp White `#ffffff`, Silver Ash `#eef3f7` | `vges-lumen-dental` |
| 07 | **Themis Legal** | Boutique Commercial & Civil Law | Counsel (uiCookies) | Dignified, sober, rigorous, elite | Deep Navy `#0b1a30`, Classic Gold `#c29b38`, Muted Gray `#f6f7f9` | `vges-themis-legal` |
| 08 | **Axia Accounting** | Corporate Tax & Advisory | Summit (uiCookies) | Precise, trustworthy, analytical, direct | Slate Steel `#2b3e50`, Emerald Trust `#1f7a55`, Paper Ivory `#f9fafb` | `vges-axia-accounting` |
| 09 | **Pedia Learning Center**| Educational & Child Development | Enlight (uiCookies) | Playful yet scholarly, inspiring, warm | Royal Indigo `#2e3882`, Warm Amber `#f5a623`, Apple Green `#43a047` | `vges-pedia-learning` |

## Technical Baseline for Standalone Implementation
1. **Semantic HTML5:** Valid, modern structure with `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
2. **Responsive CSS:** Fluid grid/flexbox layouts designed desktop-first down to mobile 320px. Fast loading, no bloated third-party dependencies.
3. **SVG Icons & Graphics:** Lightweight vector icons inline or linked, custom sector-appropriate favicons (`favicon.svg`).
4. **Imagery & Typography:** Carefully matched high-resolution imagery and system font stacks (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` or bespoke serif/sans pairs).
5. **SEO & Privacy Meta:** `<meta name="robots" content="noindex, follow">` included on all demo sites to prevent accidental duplicate production indexing.
6. **Zero Runtime Server Requirement:** All sites are completely static, allowing instant edge deployment on Cloudflare Pages.
