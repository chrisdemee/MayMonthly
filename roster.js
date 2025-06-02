document.addEventListener('DOMContentLoaded', () => {
  // container for the player cards
  const grid = document.getElementById('rosterGrid');
  // modal element for extra player info
  const detailModal = document.getElementById('detailModal');

   // function to render all player cards on the page
  const render = list => {
    grid.innerHTML = '';

    list.forEach(p => {
      // makes column for each player card
      const col = document.createElement('div');
      col.className = 'col-6 col-lg-2';
// puts in card HTML using player data
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
            <div class="badge badge-position badge-pos-${p.position}" style="color: black;">${p.position}</div>
            <p class="small text-muted mb-1">Age ${p.age}</p>
            ${p.hiddenDetail ? `
              <button class="btn btn-sm btn-primary mt-2" 
                      data-bs-toggle="modal" 
                      data-bs-target="#detailModal" 
                      data-playerid="${p.id}">
                More Info
              </button>
            ` : ''}
          </div>
        </div>
      `;

      grid.appendChild(col);
    });
  };

   // event listener to fill modal content when its triggered
  detailModal.addEventListener('show.bs.modal', function (event) {
     // button that triggered the modal
    const button = event.relatedTarget;
    // id of selected player
    const playerId = button.getAttribute('data-playerid');

    const player = players.find(p => p.id === playerId); // looks up player data
    const modalTitle = detailModal.querySelector('.modal-title');
    const modalBody = detailModal.querySelector('#modalDetailText');
// if else statement that sets modal content if player is found
    if (player) {
      modalTitle.textContent = `${player.firstName} ${player.lastName}`;
      modalBody.textContent = player.hiddenDetail || 'No additional info available.';
    } else {
      modalTitle.textContent = 'Player Not Found';
      modalBody.textContent = '';
    }
  });

   // checks if players array is available then it renders it
  if (typeof players !== 'undefined' && Array.isArray(players)) {
    render(players);
  } else {
    // incase of error
    grid.innerHTML = '<p class="text-danger">No player data available.</p>';
    console.error('players array not found or invalid');
  }
});
