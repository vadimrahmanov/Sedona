var buttonForm=document.querySelector(".search-hotel-btn"),bookingForm=document.querySelector(".booking-form"),checkIn=bookingForm.querySelector("[id=checkin-date]"),checkOut=bookingForm.querySelector("[id=checkout-date]"),adults=bookingForm.querySelector("[id=adults]"),children=bookingForm.querySelector("[id=children]");bookingForm.classList.add("booking-form-hidden"),buttonForm.addEventListener("click",function(){bookingForm.classList.remove("booking-form-error"),bookingForm.classList.toggle("booking-form-hidden")}),bookingForm.addEventListener("submit",function(o){checkIn.value&&checkOut.value&&adults.value&&children.value?localStorage.setItem("adults",adults.value):(o.preventDefault(),bookingForm.classList.remove("booking-form-error"),bookingForm.offsetWidth=bookingForm.offsetWidth,bookingForm.classList.add("booking-form-error")),localStorage.setItem("adults",children.value)});
