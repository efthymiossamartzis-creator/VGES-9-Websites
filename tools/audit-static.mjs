#!/usr/bin/env node
// Standalone, dependency-free static-site structural smoke check.
// Usage: node tools/audit-static.mjs /absolute/path/to/site
// This is not a substitute for real browser/accessibility/performance QA.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, join, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(process.argv[2] ?? 'site');
const page = join(root, 'index.html');
const failures=[]; const warnings=[]; let checked=0;
const assert=(ok,label,warning=false)=>{checked++;if(!ok)(warning?warnings:failures).push(label);};
if(!existsSync(page)) { console.error('BLOCKED: Missing '+page);process.exit(2); }
const html=readFileSync(page,'utf8');
const val=(name)=>new RegExp('\\b'+name+'\\s*=\\s*["\\\']([^"\\\']+)["\\\']','gi');
assert(/<html\s[^>]*lang\s*=\s*["']el["']/i.test(html),'html lang="el"');
assert(/<meta[^>]*name\s*=\s*["']robots["'][^>]*noindex/i.test(html)||/<meta[^>]*content\s*=\s*["'][^"']*noindex[^"']*["'][^>]*name\s*=\s*["']robots["']/i.test(html),'meta robots noindex');
assert((html.match(/<h1(?:\s|>)/gi)||[]).length===1,'Exactly one <h1>');
assert(/<title>[^<]+<\/title>/i.test(html),'Nonempty document title');
assert(/<main(?:\s|>)/i.test(html),'Main landmark');
const ids=new Set([...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)].map(m=>m[1]));
const anchors=[...html.matchAll(/\bhref\s*=\s*["']#([^"']*)["']/gi)];
for(const [,id] of anchors) assert(id!==''&&ids.has(id),'Broken/empty internal anchor #'+id);

// Check standard demo anchors if present in page or specific project
const srcs=[...html.matchAll(/\b(?:src|href|poster|data-full)\s*=\s*["']([^"']+)["']/gi)].map(m=>m[1]);
let localCount=0;
for(const s of srcs){
 if(!s || /^(?:#|data:|mailto:|tel:|https?:|javascript:)/i.test(s))continue;
 if(s.startsWith('//')) { warnings.push('Protocol-relative external URL: '+s); continue; }
 const clean=decodeURIComponent(s.split(/[?#]/)[0]);
 if(!clean||clean.startsWith('/')) {warnings.push('Absolute site path (ensure hosting): '+s);continue;}
 const target=resolve(root,clean);
 const prefix = root.endsWith(sep) ? root : root + sep;
 assert(target.startsWith(prefix)||target===root,'Path escapes site root: '+s);
 if(target.startsWith(prefix)) {assert(existsSync(target),'Missing local asset: '+s);localCount++;}
}
assert(!/href\s*=\s*["']javascript:/i.test(html),'javascript: URL placeholder');
assert(!/href\s*=\s*["']#["']/i.test(html),'href="#" placeholder');
assert(/Σχεδιαστικό demo|σχεδιαστικό demo|Demo φόρμα|demo/i.test(html),'Visible demo indicator');
console.log(`Site: ${root}\nChecks: ${checked}; local references checked: ${localCount}; FAIL: ${failures.length}; WARN: ${warnings.length}`);
for(const e of failures)console.error('FAIL '+e);
for(const e of warnings)console.warn('WARN '+e);
console.log('NOTE: No browser, JS interaction, image rendering, mobile or performance tests performed by this script.');
process.exit(failures.length?1:0);
