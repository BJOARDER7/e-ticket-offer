document.getElementById("btn-buyticket").addEventListener('click', function(){
    const foc = document.getElementById("functional-section").scrollIntoView();
    console.log(foc);
})


function setBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}

function next(){
    console.log('clicked')
}



