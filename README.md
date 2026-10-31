# Sperious (Next.js)

This folder is the Next.js version of the PHP website in `sperious.php`. The UI, pages, and contact / hire-developer flows match the original site.

## Run locally

```bash
cd sperious.next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` Home
- `/service` Services
- `/aboutUs` About Us
- `/contactUs` Contact Us
- `/ai-machine-learning`, `/web-development`, `/mobile-app-development`, `/data-analytics`, `/cybersecurity`, `/cloud-solutions`

Old PHP URLs such as `/index.php` and `/contactUs.php` redirect to the new routes.

## Forms

Contact and Hire Developer submissions are saved in `data/inquiries.json`.
