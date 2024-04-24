const seats = document.getElementsByClassName("seat");
let count = 0;
for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    if (count < 4) {
      const isSelected = event.target.classList.contains("bg-[#1DD100]");
      if (isSelected) {
        return;
      } else {
        // bg-color change
        event.target.classList.add("bg-[#1DD100]");
        //   appent table tr td
        const seatSelection = event.target.innerText;

        const trContainer = document.getElementById("append-tr");
        const tr = document.createElement("tr");
        tr.innerHTML = `<td class="ps-4">${seatSelection}</td>
                      <td>Economy</td>
                      <td class="ps-12">550</td> `;
        trContainer.appendChild(tr);

        // seat count
        count++;
        if (count) {
          const seatCount = document.getElementById("seat-count");
          seatCount.innerText = count;
        }
        // seat left
        const seatLeft = document.getElementById("seat-left");
        const seatAvialabe = 40 - count;
        seatLeft.innerText = seatAvialabe;

        // total price
        const totalPriceField = document.getElementById("total-price");
        const seatPrice = document.getElementById("seat-price");
        let price = parseInt(seatPrice.innerText);
        let totalPrice = price * count;
        totalPriceField.innerText = totalPrice;

        // grand total

        const grandTotalField = document.getElementById("grand-total");
        if (count === 4) {
          const applyButton = document.getElementById("apply-btn");
          applyButton.removeAttribute("disabled");
        }
        const coupon15 = document
          .getElementById("coupon-15")
          .innerText.toLowerCase();
        const coupon20 = document
          .getElementById("coupon-20")
          .innerText.toLowerCase();
        const couponText = document.getElementById("coupon-input").value;

        let grandTotalText = grandTotalField.innerText;
        let grandTotal = parseFloat(grandTotalText);

        const discount15 = (totalPrice * 15) / 100;
        const discount20 = (totalPrice * 20) / 100;

        if (!couponText) {
          grandTotalField.innerText = totalPrice;
        }

        document
          .getElementById("apply-btn")
          .addEventListener("click", function () {
            const coupon = document
              .getElementById("coupon-input")
              .value.toLowerCase();
              const couponField = document.getElementById('coupon-field');
              const couponPrice = document.getElementById('coupon-price');
              const showCouponField = document.getElementById('show-coupon-price');
            if (coupon) {
              if (coupon == coupon15) {
                grandTotal = totalPrice - discount15;
                couponField.classList.add('hidden');
                couponPrice.innerText = discount15;
                showCouponField.classList.remove('hidden');
              } else if (coupon == coupon20) {
                grandTotal = totalPrice - discount20;
                couponField.classList.add('hidden');
                couponPrice.innerText = discount20;
                showCouponField.classList.remove('hidden');
              } else {
                alert("Cautious, this is not a valid coupon code, please provide correct code.");
              }
            }

            grandTotalField.innerText = grandTotal;
            
          });
      }
    } else {
      return;
    }
  });
}

// active next button
document
  .getElementById("phone-input")
  .addEventListener("keyup", function (event) {
    const nextButton = document.getElementById("next-btn");
    const phoneNumber = event.target.value;
    console.log(phoneNumber);
    if (count && phoneNumber) {
      nextButton.removeAttribute("disabled");
    }
  });
