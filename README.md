📘 TinyLink Frontend (React + Plain CSS)

This is the frontend for TinyLink, a URL shortener application built with:

React (Create React App)

Plain CSS

React Router

Fetch API

Vercel deployment

This frontend communicates with the backend API deployed on Render and displays:

✔ Dashboard with all shortened URLs
✔ Add link form
✔ Stats page
✔ Search bar
✔ Responsive mobile view
✔ Copy-to-clipboard
✔ Delete functionality

🚀 Live Demo

Frontend:
👉 https://tinylink-frontend-sable.vercel.app/

Backend API:
👉 https://backend-dk98.onrender.com/api/links

📂 Project Structure
/src
   /components
      Header.js
      LinksTable.js
      AddLinkForm.js
      StatsCard.js
      SearchBar.js

   /pages
      Dashboard.js
      StatsPage.js

   /utils
      api.js

   /styles
      global.css

⚙️ Environment Variables

Create a .env file in the frontend folder:

REACT_APP_API_URL=https://backend-dk98.onrender.com


Restart the app after adding it.

▶️ Running the Frontend Locally
Install dependencies
npm install

Start development server
npm start


App will run at:

👉 http://localhost:3000

🌍 Deployment (Vercel)

This project is deployed on Vercel with CI/CD via GitHub.

Steps:

Connect your GitHub repo to Vercel

Add environment variable:

REACT_APP_API_URL=https://backend-dk98.onrender.com


Deploy automatically on every git push

📡 API Integration

All API calls handled inside:

src/utils/api.js


Example:

export async function fetchLinks() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/links`);
  return res.json();
}

🏁 Features Implemented
🔗 Link Shortening

Auto code generation

Custom code support

Real-time validation

📊 Dashboard

List all links

Sort by date

Search bar

Click analytics

📱 Responsive UI

Table collapses into cards

Mobile-friendly

🔁 Redirect Support

Redirect handled by backend.

🎯 Final Notes

React App uses fetch() for API calls

CORS is configured on backend

Fully compatible with Render + Vercel deployments

Clean, minimal UI using plain CSS
