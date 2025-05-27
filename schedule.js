const schedule = [
  { week: 1, opponent: "Baltimore Ravens", date: "09-07-2025", location: "Home" },
  { week: 2, opponent: "New York Jets", date: "09-14-2025", location: "Away" },
  { week: 3, opponent: "Miami Dolphins", date: "09-18-2025", location: "Home" },
  { week: 4, opponent: "New Orleans Saints", date: "09-28-2025", location: "Home" },
  { week: 5, opponent: "New England Patriots", date: "10-05-2025", location: "Home" },
  { week: 6, opponent: "Atlanta Falcons", date: "10-13-2025", location: "Away" },
  { week: 7, opponent: "BYE" },
  { week: 8, opponent: "Carolina Panthers", date: "10-26-2025", location: "Away" },
  { week: 9, opponent: "Kansas City Chiefs", date: "11-02-2025", location: "Home" },
  { week: 10, opponent: "Miami Dolphins", date: "11-09-2025", location: "Away" },
  { week: 11, opponent: "Tampa Bay Buccaneers", date: "11-16-2025", location: "Home" },
  { week: 12, opponent: "Houston Texans", date: "11-20-2025", location: "Away" },
  { week: 13, opponent: "Pittsburgh Steelers", date: "11-30-2025", location: "Away" },
  { week: 14, opponent: "Cincinnati Bengals", date: "12-07-2025", location: "Home" },
  { week: 15, opponent: "New England Patriots", date: "12-14-2025", location: "Away" },
  { week: 16, opponent: "Cleveland Browns", date: "12-21-2025", location: "Away" },
  { week: 17, opponent: "Philadelphia Eagles", date: "12-28-2025", location: "Home" },
  { week: 18, opponent: "New York Jets", date: "TBD", location: "Home" },
];

function renderSchedule() {
  const tableBody = document.getElementById("schedule-body");
  tableBody.innerHTML = "";

  schedule.forEach((game, index) => {
    const tr = document.createElement("tr");

    // Alternate row color: even = red, odd = blue
   const rowClass = index % 2 === 0 ? "red-row" : "blue-row";

    tr.className = rowClass;

    tr.innerHTML = `
      <td>Week ${game.week}</td>
      <td>${game.opponent}</td>
      <td>${game.date ? new Date(game.date).toLocaleDateString() : "TBD"}</td>
      <td>${game.location || "TBD"}</td>
    `;

    tableBody.appendChild(tr);
  });
}


document.addEventListener("DOMContentLoaded", renderSchedule);
