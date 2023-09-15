function openWhatsAppChat() {
  var phoneNumber = "01114536871";

  // Create the WhatsApp URL with the phone number
  var url = "https://wa.me/" + phoneNumber;

  // Open the WhatsApp chat in a new tab or window
  window.open(url);
}
