# MASTER-PROJECTS.md — Status Matrix of VGES-9-Websites

| # | Project Directory | Sector | Local Implementation | QA Smoke Test | Git Status | Cloudflare Project | Public URL | Status |
|---|---|---|---|---|---|---|---|---|
| 01 | `01-Aurelio-Barbershop` | Barber / Men's Grooming | Complete (`site/`) | PASSED (80/80 assets) | Pushed to main | `vges-aurelio` | `https://vges-aurelio.pages.dev` | Ready to deploy |
| 02 | `02-Mason-Elia` | Restaurant / Fine Dining | Complete (`site/`) | PASSED (19/19 assets) | Pushed to main | `vges-mason-elia` | `https://vges-mason-elia.pages.dev` | Ready to deploy |
| 03 | `03-Fos-Photography` | Photography & Editorial | In Progress | Pending | Pending | `vges-fos-photography` | `https://vges-fos-photography.pages.dev` | Queued |
| 04 | `04-Nisa-Beauty` | Beauty Salon & Spa | In Progress | Pending | Pending | `vges-nisa-beauty` | `https://vges-nisa-beauty.pages.dev` | Queued |
| 05 | `05-Areti-Medical` | Medical Practice | In Progress | Pending | Pending | `vges-areti-medical` | `https://vges-areti-medical.pages.dev` | Queued |
| 06 | `06-Lumen-Dental` | Dental Clinic | In Progress | Pending | Pending | `vges-lumen-dental` | `https://vges-lumen-dental.pages.dev` | Queued |
| 07 | `07-Themis-Legal` | Law Firm | In Progress | Pending | Pending | `vges-themis-legal` | `https://vges-themis-legal.pages.dev` | Queued |
| 08 | `08-Axia-Accounting` | Financial & Tax Services | In Progress | Pending | Pending | `vges-axia-accounting` | `https://vges-axia-accounting.pages.dev` | Queued |
| 09 | `09-Pedia-Learning-Center`| Child Education / Learning | In Progress | Pending | Pending | `vges-pedia-learning` | `https://vges-pedia-learning.pages.dev` | Queued |

## Deployment Infrastructure
- **Workflow:** `.github/workflows/deploy-pages.yml` (Monorepo-aware git diff push-to-deploy)
- **Secrets Required:** `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
