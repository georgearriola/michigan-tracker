/**
 * Michigan Postseason Tracker 2026
 * Current Date: March 20, 2026
 */

const sportsData = {
  'men-bb': {
    title: "NCAA Men's Basketball - Midwest Region",
    seed: "No. 1 Seed",
    games: [
      { round: "Round of 64", opponent: "Howard", result: "W 101-80", date: "Mar 19, 2026", status: "Past" },
      { round: "Round of 32", opponent: "Saint Louis", result: "TBA", date: "Mar 21, 2026", status: "Upcoming" }
    ],
    scouting: "Saint Louis (No. 9) defeated Georgia 72-68 to advance. They rely on high-pressure defense and a veteran backcourt."
  },
  'women-bb': {
    title: "NCAA Women's Basketball - Fort Worth Region",
    seed: "No. 2 Seed",
    games: [
      { round: "Round of 64", opponent: "Holy Cross", result: "Starts at 5:30 PM", date: "Mar 20, 2026", status: "Upcoming" }
    ],
    scouting: "Holy Cross won the Patriot League. They play a slow-tempo game; Michigan will look to transition early and often."
  },
  'hockey': {
    title: "Big Ten Hockey / NCAA Tournament",
    seed: "No. 2 B1G Seed",
    games: [
      { round: "B1G Semifinals", opponent: "Penn State", result: "W 5-2", date: "Mar 14, 2026", status: "Past" },
      { round: "B1G Championship", opponent: "Ohio State", result: "8:00 PM", date: "Mar 21, 2026", status: "Upcoming" }
    ],
    scouting: "Ohio State upset No. 1 MSU to reach the final. Michigan won the regular season series 3-1, but the Buckeyes are on a 5-game win streak."
  }
};

/**
 * Main function to update the UI
 * @param {string} id - The key from sportsData
 * @param {Event} event - The click event (optional for initial load)
 */
function showSport(id, event) {
  const data = sportsData[id];
  const content = document.getElementById('content-area');
  
  // 1. Handle Button Highlighting
  // Remove 'active' class from all buttons
  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });

  // If triggered by a click, highlight the clicked button.
  // Otherwise (on load), highlight the first button.
  if (event) {
    event.currentTarget.classList.add('active');
  } else {
    document.querySelector('nav button').classList.add('active');
  }

  // 2. Build the HTML Output
  let html = `
    <h2>${data.title}</h2>
    <p style="color: #666; font-weight: bold; margin-top: -10px;">${data.seed}</p>
  `;
  
  data.games.forEach(game => {
    const statusClass = game.status === 'Past' ? 'status-win' : 'status-upcoming';
    html += `
      <div class="card">
        <div style="display: flex; justify-content: space-between;">
          <strong>${game.round}</strong>
          <span style="font-size: 0.85rem; color: #888;">${game.date}</span>
        </div>
        <div style="margin-top: 5px;">
          vs. ${game.opponent}
        </div>
        <div class="${statusClass}" style="margin-top: 5px;">
          ${game.result}
        </div>
      </div>
    `;
  });

  // 3. Add Scouting Section
  html += `
    <div class="opponent-preview">
      <strong>Scouting Report & Past Results:</strong><br>
      <p style="margin: 5px 0 0 0; line-height: 1.4;">${data.scouting}</p>
    </div>
  `;

  // 4. Inject into DOM
  content.innerHTML = html;
}

// Update the HTML buttons to pass the 'event'
// Note: In CodePen HTML, you should update the buttons to:
// <button onclick="showSport('men-bb', event)">...</button>

// Initialize the app on load
window.onload = () => {
  showSport('men-bb');
};
