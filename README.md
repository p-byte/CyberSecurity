# Cyber security Academy

Production-ready cybersecurity course platform built with Next.js, React, Tailwind CSS, Framer Motion, Docker, Docker Compose, and Nginx.

## Features

- Modern dark neon cybersecurity UI
- Responsive pages for Home, About, Curriculum, Pricing, Testimonials, Contact, Blog, Privacy Policy, and Terms
- Modular content in `src/content/site.ts` for easy editing
- Contact API with input validation, CSRF token check, honeypot spam trap, and in-memory rate limiting
- Security headers in Next.js and Nginx, including CSP, frame protection, MIME sniffing protection, and permissions policy
- SEO metadata, OpenGraph metadata, structured data, `robots.txt`, and `sitemap.xml`
- Multi-stage Docker build with non-root runtime user and healthchecks
- Nginx reverse proxy on external port 80 to internal app port 3000
- GitHub Actions CI for linting, typechecking, Next.js build, and Docker image build

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Run Locally With Docker

```bash
copy .env.example .env
docker compose up --build
```

Open `http://localhost`.

Stop containers:

```bash
docker compose down
```

## Useful Commands

```bash
npm run lint
npm run typecheck
npm run build
docker build -t pruthvi-cyber-academy .
docker compose ps
docker compose logs -f
```

## Content Editing

Most site content is in:

```text
src/content/site.ts
```

Update course modules, pricing, testimonials, blog summaries, contact links, and navigation there.

## Environment Variables

Create `.env` from `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=https://pruthvicyberacademy.com
NEXT_PUBLIC_CONTACT_EMAIL=training@pruthvicyberacademy.com
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/919740781976
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/pruthvicyberacademy
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/1FAIpQLScoXyN2EDoq-9c9pn1SLag7vMq8BEqn0ugBwJACrf57CDTQMg/viewform
GOOGLE_SHEETS_WEBHOOK_URL=
GOOGLE_SHEETS_WEBHOOK_SECRET=change-this-long-random-secret
```

Use server-only variables without `NEXT_PUBLIC_` for future private secrets such as SMTP, CRM, or database credentials.

## Save Contact Form Leads To Google Sheets

The public Google Form can save responses to Sheets automatically from Google Forms. Open the form, go to **Responses**, and choose a spreadsheet destination.

For the custom website contact form, use the included Apps Script webhook:

1. Create a new Google Sheet.
2. Open **Extensions > Apps Script**.
3. Paste the code from:

```text
scripts/google-sheets-webhook.gs
```

4. In Apps Script, open **Project Settings > Script properties**.
5. Add:

```text
WEBHOOK_SECRET=change-this-long-random-secret
```

Use the same value as `GOOGLE_SHEETS_WEBHOOK_SECRET` in `.env`.

6. Click **Deploy > New deployment**.
7. Select **Web app**.
8. Set **Execute as** to your account.
9. Set **Who has access** to anyone with the link.
10. Copy the `/exec` Web app URL.
11. Add it to `.env`:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=change-this-long-random-secret
```

12. Rebuild Docker:

```bash
docker compose up -d --build
```

After that, every valid website contact form submission will append a row to the Google Sheet.

## Ubuntu VPS Deployment

1. Install Docker:

```bash
sudo apt update
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /etc/apt/keyrings/docker.asc >/dev/null
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
```

2. Upload or clone the project:

```bash
git clone https://github.com/YOUR_ORG/pruthvi-cyber-academy.git
cd pruthvi-cyber-academy
cp .env.example .env
```

3. Edit `.env`:

```bash
nano .env
```

4. Start production:

```bash
docker compose up -d --build
docker compose ps
```

5. Allow HTTP/HTTPS firewall traffic:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## Custom Domain

1. Point your domain DNS `A` record to the VPS public IP.
2. Set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` in `.env`.
3. Rebuild:

```bash
docker compose up -d --build
```

## SSL With Cloudflare

1. Add the domain to Cloudflare.
2. Change nameservers at your registrar to Cloudflare nameservers.
3. Create an `A` record for `@` and optionally `www`, pointing to your VPS IP.
4. Enable proxy status for the records.
5. In Cloudflare SSL/TLS, use **Full (strict)** when you install an origin certificate on the VPS. Use **Full** only as a temporary step.
6. Enable **Always Use HTTPS**, **Automatic HTTPS Rewrites**, Brotli, and HTTP/3.
7. For origin certificates, add an HTTPS server block or use a host-level TLS reverse proxy such as Caddy, Traefik, or Certbot-managed Nginx.

## Cloudflare Compatibility

The app works behind Cloudflare proxy. The Nginx config forwards `X-Forwarded-For` and `X-Forwarded-Proto`; application rate limiting reads the forwarded client IP.

For stronger production rate limiting, configure Cloudflare WAF rules for `/api/contact` and add Turnstile to the contact form.

## Security Notes

- Docker runtime uses a non-root user.
- Container filesystem is read-only in Compose.
- Nginx and Next.js both send defense-in-depth security headers.
- Contact API validates payloads with Zod.
- Secrets should be stored in environment variables or your deployment secret manager.
- CSP currently allows inline/eval script styles required by the Next.js runtime and development ergonomics. Tighten this further with nonce-based CSP if you add a custom server.
