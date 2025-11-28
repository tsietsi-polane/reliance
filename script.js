// Initialize Email  emailjs.init("JS
(function () {
XjrigZwR6DROGu62D"); // Replace with your EmailJS Public Key
})();

const canvasById("cardCanvas = document.getElement");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "invitation.jpeg"; // Your designed card

img.onload = function () {
  drawCardWithName("Your Name");
};

function drawCardWithName(nameText) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.font = "bold 48px Georgia";
  ctx.fillStyle = "#002B5B";
  ctx.textAlign = "center";
  ctx.fillText(nameText, canvas.width / 2, 100); // Adjust Y position if needed document.getElement
}

const form =ById("rsvp-form");
const statusEl = document.getElementconst submitBtn =ById("status");
 document.getElementById("submit-btn");
const downloadLink = document.getElementById("downloadLink");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const contact = form.contact.valuename || !email ||.trim();

  if (! !contact) {
    statusEl.textContent = "Please complete all fields.";
    return;
  }

  drawCardWithName(name);

  const dataUrl = canvas.toDataURL("image/jpeg");
  downloadLink.href = dataUrl;
  downloadLink.style.display = "inline-block";

  const SERVICE_ID = "service_4zybuwp";
  const TEMPLATE_GUEST = "template_7iy5yma";
  const TEMPLATE_HOST = "template_hg2ifmk";

  const templateParams = {
    guest_name: name,
    guest_email: email,
    guest_contact: contact
  };

  submitBtn.disabled = true;
  statusEl.textContent = "Submitting RSVP...";

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_GUEST, templateParams);
    await emailjs.send(SERVICE_ID, TEMPLATE_HOST, templateParams);
    statusEl.textContent = "RSVP submitted! Confirmation email sent. Download your invitation below.";
  } catch (err) {
    console.error(err);
    statusEl.textContent =. Your card is ready "Error sending emails to download.";
 submitBtn.disabled  } finally {
    = false;
  }
});