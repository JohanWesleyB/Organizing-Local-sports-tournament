// Simple data store for demo (in real app use a database)
let tournaments = [
  { name: "City Football Cup", sport: "Football" },
  { name: "Community Basketball League", sport: "Basketball" }
];

const tournamentList = document.getElementById("tournament-list");
const tournamentForm = document.getElementById("tournament-form");

function renderTournaments() {
  tournamentList.innerHTML = "";
  tournaments.forEach((t, index) => {
    const li = document.createElement("li");
    li.textContent = `${t.name} — ${t.sport}`;
    tournamentList.appendChild(li);
  });
}

tournamentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("tournament-name");
  const sportInput = document.getElementById("sport-type");

  const newTournament = {
    name: nameInput.value.trim(),
    sport: sportInput.value.trim()
  };

  if(newTournament.name && newTournament.sport) {
    tournaments.push(newTournament);
    renderTournaments();
    tournamentForm.reset();
  }
});

renderTournaments();
