# Dr. Aman Kumar - Medical Specialist & Clinic Portfolio

A modern, responsive medical portfolio and appointment booking web application for Dr. Aman Kumar (MBBS, FCPS Internal Medicine).

## Deploying with Render Blueprint

This repository is pre-configured with a Render Blueprint specification (`render.yaml`) for automated Infrastructure-as-Code deployment on [Render.com](https://render.com).

### Quick Deployment Steps

1. Push this repository to GitHub or GitLab.
2. Log in to your [Render Dashboard](https://dashboard.render.com).
3. Click **New +** and select **Blueprint**.
4. Connect your repository. Render will automatically detect `render.yaml`.
5. Click **Apply**. Render will automatically build (`npm install && npm run build`) and deploy the static site with SPA routing and asset caching.

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
