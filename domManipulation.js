

const seats = document.getElementsByClassName('seat');
let count = 0;
    for(const seat of seats){
        seat.addEventListener('click', function(event){

            
    if(count > 3){
        return;
    }
    else {
            // bg-color change
        event.target.classList.add('bg-[#1DD100]');
    //   appent table tr td
    const seatSelection = event.target.innerText;
    
    const trContainer = document.getElementById('append-tr');
    const tr = document.createElement('tr');    
    tr.innerHTML = `<td class="ps-4">${seatSelection}</td>
                    <td>Economy</td>
                    <td class="ps-12">550</td> `;    
    trContainer.appendChild(tr);

        // seat count
        count++;
        if(count){
          const seatCount =  document.getElementById('seat-count');
          seatCount.innerText = count;
        }
            // seat left
    const seatLeft = document.getElementById('seat-left');
    const seatAvialabe = 40 - count;
    seatLeft.innerText = seatAvialabe;

        // total price
        const totalPrice = document.getElementById('total-price');
        const seatPrice = document.getElementById('seat-price');
        const price = parseInt(seatPrice.innerText);
        totalPrice.innerText = price * count;

                    // grand total

    const grandTotal = document.getElementById('grand-total');
    if(count === 4){
      const applyButton =  document.getElementById('apply-btn');
      applyButton.removeAttribute('disabled');
    }
    // cupon price need
    grandTotal.innerText = price * count;  
} 

        })
    }


// active next button
    document.getElementById('phone-input').addEventListener('keyup',function(event){
        const nextButton = document.getElementById('next-btn');
        const phoneNumber = event.target.value;
        console.log(phoneNumber);
        if(count && phoneNumber){
            nextButton.removeAttribute('disabled');
        }       
     
    })


   
    
    

    


//     // coupon input
// const coupon15 = document.getElementById('coupon-15').innerText.toLowerCase();
// const coupon20 = document.getElementById('coupon-20').innerText.toLowerCase();









