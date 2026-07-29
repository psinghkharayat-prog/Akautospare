function selectPart(part){
  document.getElementById("details").value = "I would like the price/availability of: " + part;
  document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}
function submitBooking(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const model=document.getElementById("model").value.trim();
  const need=document.getElementById("need").value;
  const details=document.getElementById("details").value.trim();
  const msg=`Hello BikePro, I want to book a repair.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ABike: ${encodeURIComponent(model)}%0AService: ${encodeURIComponent(need)}%0ADetails: ${encodeURIComponent(details)}`;
  document.getElementById("formMsg").textContent="Opening WhatsApp with your booking details…";
  window.open("https://wa.me/919999999999?text="+msg,"_blank");
}
