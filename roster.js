


document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''

        list.forEach(p => {



            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'




            

col.innerHTML = `
  <div class="card h-100 shadow-sm">
    <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
    <div class="card-body text-center">
      <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
      <div class="badge badge-position badge-pos-${p.position}" style="color: black;">${p.position}</div>
      <p class="small text-muted mb-1">Age ${p.age}</p>
      ${p.hiddenDetail ? `
        <button class="btn btn-sm btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#detailModal" data-player="${p.firstName} ${p.lastName}" data-detail="${p.hiddenDetail}">
          More Info
        </button>
      ` : ''}
    </div>
  </div>
`;




        grid.appendChild(col)
            

        })


    }


render(players)
})




$(function(){
    var str = '#len'; //increment by 1 up to 1-nelemnts
    $(document).ready(function(){
      var i, stop;
      i = 1;
      stop = 4; //num elements
      setInterval(function(){
        if (i > stop){
          return;
        }
        $('#len'+(i++)).toggleClass('bounce');
      }, 500)
    });
  });


  // Handle modal population
const detailModal = document.getElementById('detailModal');
detailModal.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const playerName = button.getAttribute('data-player');
  const detail = button.getAttribute('data-detail');
  
  const modalTitle = detailModal.querySelector('.modal-title');
  const modalBody = detailModal.querySelector('#modalDetailText');

  modalTitle.textContent = playerName;
  modalBody.textContent = detail;
});
