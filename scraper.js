require("dotenv").config();
const puppeteer = require("puppeteer");
const fs = require("fs");

const chromiumPath =
  process.env.NODE_ENV === 'production'
    ? '/usr/bin/chromium' // Path for Render or production server
    : 'C:/Program Files/Google/Chrome/Application/chrome.exe'; // Local path
const puppeteerCacheDir =
  process.env.PUPPETEER_CACHE_DIR || "/tmp/puppeteer_cache";

if (!fs.existsSync(puppeteerCacheDir)) {
  fs.mkdirSync(puppeteerCacheDir, { recursive: true });
}

async function scrapeTeams(url, gender, scoringSystem) {
  const browser = await puppeteer.launch({
    headless: true, // Ensure headless mode
    // executablePath: chromiumPath,
    userDataDir: puppeteerCacheDir,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
      "--no-first-run",
      "--no-zygote",
      "--single-process", // <- Important for Heroku
      "--disable-extensions",
    ],
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  let teamNameandScores = [];
  let teams = [];
  let teamScores = [];
  let addtoscore = 10;
  const genderSelector = gender === "women" ? "f" : "m";
  for (let j = 0; j <= 81; j++) {
    if (
      (await page.$(
        `#list_data > div.panel-body.frame-loading-hide > div.row.gender_${genderSelector}.standard_event_hnd_${j}`
      )) !== null
    ) {
      const rows = await page.$$(
        `#list_data > div.panel-body.frame-loading-hide > div.row.gender_${genderSelector}.standard_event_hnd_${j} tbody tr`
      );

      const rowNum = scoringSystem === 'six' ? 6 : 8;
      const numrows = Math.min(rows.length, rowNum);

      for (let i = 0; i < numrows; i++) {
        const row = rows[i];
        const headerName = await page.$eval(
          `#list_data > div.panel-body.frame-loading-hide > div.row.gender_${genderSelector}.standard_event_hnd_${j} > div > div.custom-table-title`,
          (element) => element.textContent
        );

        let teamName;
        if (headerName.includes("Relay")) {
          teamName = await row.$eval(
            "td:nth-of-type(2)",
            (element) => element.textContent
          );
        } else {
          teamName = await row.$eval(
            "td:nth-of-type(4)",
            (element) => element.textContent
          );
        }

        const index = teams.indexOf(teamName);
        if (index === -1) {
          teams.push(teamName);
          teamScores.push(addtoscore);
        } else {
          teamScores[index] += addtoscore;
        }
        // calculate points for next place based on scoring system
        if (scoringSystem === "six"){
          //score top six
          addtoscore = addtoscore === 2 ? 1 : addtoscore - 2;
        }
        else if (scoringSystem === "eight"){
          //score top eight
          if (addtoscore > 6){
            addtoscore = addtoscore - 2
          }
          else{
            addtoscore = addtoscore -1
          }
        }
      }
      addtoscore = 10;
    }
  }

  for (let i = 0; i < teams.length; i++) {
    teamNameandScores.push({ name: teams[i], score: teamScores[i] });
  }

  teamNameandScores.sort((a, b) => b.score - a.score);
  await browser.close();

  return teamNameandScores;
}

module.exports = { scrapeTeams };
