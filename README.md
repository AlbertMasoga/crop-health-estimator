# Crop Health Estimator

A web-based tool to estimate the health of grape plants from uploaded images and predict harvest dates.

## Features

- User authentication with login page
- Image upload for grape plant photos
- Plant health analysis (mock implementation)
- Harvest date projection based on health score

## Setup

git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main

1. Install Node.js (version 18 or higher)
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open http://localhost:3000 in your browser

## Deployment to GitHub Pages

The app is configured for static export and automatic deployment to GitHub Pages.

### To Enable GitHub Pages:

1. Go to your repository settings on GitHub
2. Scroll to "Pages" section
3. Set source to "GitHub Actions"
4. Push the code to the main branch - the workflow will build and deploy automatically

The live site will be available at: https://albertmasoga.github.io/crop-health-estimator/

## Usage

1. Login with username: `user`, password: `pass`
2. Upload an image of a grape plant
3. View the health percentage and estimated harvest date

## Technologies

- Next.js 14
- React 18
- JavaScript

## Future Improvements

- Integrate real AI/ML model for accurate health analysis
- Add database for user management
- Improve UI/UX with styling framework
