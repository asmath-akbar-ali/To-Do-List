const form = document.getElementById("user-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = form.Name.value.trim();
    const email = form.Email.value.trim();
    const username = form.Username.value.trim();
    const phone = form.Phone.value.trim();
    const gender = form.gender.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) return alert("Please enter your name.");
    if (!email || !emailRegex.test(email)) return alert("Please enter a valid email.");
    if (!username) return alert("Please enter your username.");
    if (!phone || !/^\d{10}$/.test(phone)) return alert("Enter a valid 10-digit phone number.");
    if (!gender) return alert("Please select your gender.");

    window.location.href = "to_do_list.html";
  });
}