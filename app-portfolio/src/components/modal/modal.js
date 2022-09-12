export default function Modal(){
  
    var modal = document.getElementById('modal');
    var container = document.getElementById('container');

    modal.addEventListener("click", container);

    modal.style.display = 'inline';
    modal.style.visibility = 'visible';

    container.style.width = '100vw';
    container.style.height = '100vh';


{/* para criar animações no javascript */}
    container.animate([
      {transform:'translateX(-10px)', opacity:'0', backdropFilter: 'blur(0px)'},
      {transform:'translateX(0)', opacity:'1', backdropFilter: 'blur(8px)'}
    ], {
      duration: 600,
    });
{/* para criar animações no javascript */}
}