import logo from "../assets/Netflix_Logo_PMS.png";

export const assetsList = {
  netflix_logo: logo,
  netflix_header_bg:
    "https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/GB-en-20250407-TRIFECTA-perspective_e5f68fcf-3900-40b2-9dee-47db6d36ff51_large.jpg",
};

export const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWU1YThlMjlhYzIwMmY1M2I2OWYzYzhiZjViYmZjNiIsIm5iZiI6MTc0NTA4NjY4OS40OTUwMDAxLCJzdWIiOiI2ODAzZThlMWU1MDZhOGUzYTBhZDhhMTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7iG9Uvh8zSZEdKjXN0IAxINas4olUsARwcjvEBwrYR0",
  },
};

export const baseImgUrl = "https://image.tmdb.org/t/p/w500";
