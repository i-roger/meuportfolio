export default function animation(){
    let li = document.getElementById('menuchild')

    li.animate([
        {transform: 'scale(100%)', transform: 'scale(105%)'},
        {transform: 'scale(100%)'}
    ], {
        duration: 600,
    });
}