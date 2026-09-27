# CyberVSI

Cyber Vision Software Institute

Production-ready cybersecurity course platform built with Next.js, React, Tailwind CSS, Framer Motion, Docker, Docker Compose, and Nginx.

## Features

- Modern dark neon cybersecurity UI
- Responsive pages for Home, About, Curriculum, Pricing, Testimonials, Contact, Blog, Privacy Policy, and Terms
- Modular content in `src/content/site.ts` for easy editing
- First-party enrollment flow plus syllabus lead capture for collecting student details into Google Sheets
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
NEXT_PUBLIC_CONTACT_EMAIL=nemanipruthvi.krishna@gmail.com
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/919740781976
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/pruthvicyberacademy
SYLLABUS_LEAD_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
NEXT_PUBLIC_CYBER_SYLLABUS_URL=https://docs.google.com/document/d/1t9li8CfrEAX7RhJNDGDf3mhBGNDOs3KGTqLoUsmAb5c/edit?usp=sharing
NEXT_PUBLIC_FULL_STACK_SYLLABUS_URL=https://docs.google.com/document/d/1EmnQr6KptUdBWv5bYf4q3xzsWHB8a676SQ6sFzAFloI/edit?usp=sharing
NEXT_PUBLIC_D365_SYLLABUS_URL=https://docs.google.com/document/d/1cdUFYG8imSe5brwrLTt-f0-ZqZ-496AcB0MX770L6-4/edit?usp=sharing
NEXT_PUBLIC_CLOUD_DEVSECOPS_SYLLABUS_URL=https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```

Use server-only variables without `NEXT_PUBLIC_` for future private secrets such as SMTP, CRM, or database credentials.

## Save Enrollment Responses To Google Sheets

The custom `/enroll` page sends validated enrollment details to the Apps Script web app configured in `SYLLABUS_LEAD_ENDPOINT`. The same endpoint can receive syllabus and enrollment leads.

1. Open the `CyberVSI Leads` spreadsheet and select **Extensions > Apps Script**.
2. Replace the editor contents with `google-apps-script/syllabus-leads.gs` from this repository.
3. In the sheet, keep a tab named `Syllabus Leads`. The script creates it when missing.
4. Deploy as **Web app**, execute as **Me**, and set access to **Anyone**.
5. Copy the deployment `/exec` URL into `SYLLABUS_LEAD_ENDPOINT` in `.env`.
6. Restart Docker with `docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build`.
7. Submit the `/enroll` form and confirm a new row appears in the sheet.

The sheet columns are: `Timestamp`, `Name`, `Email`, `Phone`, `Course`, `Message`, `Source`, and `Submitted At`.

## Save Syllabus Leads To Google Sheets And Excel

The syllabus modal sends `name`, `email`, `phone`, `course`, `source`, and `submittedAt` to `SYLLABUS_LEAD_ENDPOINT`. The enrollment form also sends `message`.

1. Create or open the Google Sheet that should receive syllabus leads.
2. Open **Extensions > Apps Script**.
3. Add a `doPost` handler that parses `e.postData.contents` and appends the values to the active sheet.
4. Deploy it as **Web app**, execute as **Me**, and allow access to **Anyone**.
5. Copy the `/exec` URL into `SYLLABUS_LEAD_ENDPOINT` in `.env`.
6. Restart Docker with `docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build`.
7. Test **Download Syllabus** on each course page. A new row should appear in the sheet before the Drive syllabus opens.

To use the data in Microsoft Excel, open Google Sheets and choose **File > Download > Microsoft Excel (.xlsx)**. Keep a separate Drive file and `NEXT_PUBLIC_*_SYLLABUS_URL` variable for each course. Set each Drive file to **Anyone with the link: Viewer** before testing.

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

The app works behind Cloudflare proxy. The Nginx config forwards `X-Forwarded-For` and `X-Forwarded-Proto` for production compatibility.

For stronger production protection, configure Cloudflare WAF rules and bot protection for public pages and outbound form links.

## Security Notes

- Docker runtime uses a non-root user.
- Container filesystem is read-only in Compose.
- Nginx and Next.js both send defense-in-depth security headers.
- Enrollment submissions are validated by the custom contact API before they are forwarded to Apps Script.
- Secrets should be stored in environment variables or your deployment secret manager.
- CSP currently allows inline/eval script styles required by the Next.js runtime and development ergonomics. Tighten this further with nonce-based CSP if you add a custom server.
