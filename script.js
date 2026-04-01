document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let code = document.getElementById("country-code").value;
  let phone = document.getElementById("phone").value;

  // Clean number
  phone = phone.replace(/\s+/g, '');

  if (phone.startsWith('0')) {
    phone = phone.substring(1);
  }

  let fullNumber = code + phone;

  const resultBox = document.getElementById("result");

  // Dummy logic (replace with ML later)
  let isSpam = Math.random() > 0.5;

  resultBox.innerHTML = `
    <div class="result ${isSpam ? 'spam':'safe'}">
      <strong>${fullNumber}</strong><br>
      ${isSpam ? 'Spam Number ❌' : 'Safe Number ✅'}
    </div>
  `;
});