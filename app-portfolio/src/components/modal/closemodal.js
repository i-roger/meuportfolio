export default function CloseModal(){
    let modal = document.getElementById('modal');
    let container = document.getElementById('container');

    container.animate([
      {transform:'translateX(0)', opacity:'1'},
      {transform:'translateX(-10px)', opacity:'0'}
    ], {
      duration: 600,
    });

    setTimeout(function(){
      modal.style.display = 'none';
      modal.style.visibility = 'invisible';
    },600);
  }