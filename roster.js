document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  const render = list => {
    grid.innerHTML = '';

    list.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-6 col-lg-2';

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

  render(players);

  // modal start
  const detailModal = document.getElementById('detailModal');
  detailModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const playerId = button.getAttribute('data-playerid');

    const player = players.find(p => p.id === playerId);

    const modalTitle = detailModal.querySelector('.modal-title');
    const modalBody = detailModal.querySelector('#modalDetailText');

    if (player) {
      modalTitle.textContent = `${player.firstName} ${player.lastName}`;
      modalBody.textContent = player.hiddenDetail || 'No additional info available.';
    } else {
      modalTitle.textContent = 'Player Not Found';
      modalBody.textContent = '';
    }
  });
});
