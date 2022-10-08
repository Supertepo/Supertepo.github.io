const yesBtn = document.querySelector('#yes');

      
        yesBtn.addEventListener("click", myFunction);
        yesBtn.addEventListener("click", someOtherFunction);
        yesBtn.addEventListener("click", ventanaSecundaria);
function myFunction() {
    alert('Hola amorcito <3');
}
function ventanaSecundaria (URL){ 
    window.open("https://youtu.be/g6r5wAxi470","ventana1","width=640,height=480,scrollbars=NO") 
 } 

function someOtherFunction() {
    alert('Vez que si querias')
}
        
        const noBtn = document.querySelector('#no');
        
        noBtn.addEventListener('mouseover', function () {
            const randomX = parseInt(Math.random()*100);
            const randomY = parseInt(Math.random()*100);
            noBtn.style.setProperty('top',randomY+'%');
            noBtn.style.setProperty('left',randomX+'%');
            noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
        })