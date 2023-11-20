// Validasi input
function validateInput() {
    const nama = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
  
    if (nama === '') {
      alert('Nama harus diisi.');
      return false;
    }
  
    if (email === '') {
      alert('Email harus diisi.');
      return false;
    }
  
    return true;
  }
  
  // Animasi
  const submitButton = document.querySelector('.submit-botton');
  
  submitButton.addEventListener('click', () => {
    submitButton.classList.add('animate');
  
    setTimeout(() => {
      submitButton.classList.remove('animate');
    }, 1000);
  });
  
  // Fitur tambahan
  function saveContactToDatabase() {
    const nama = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
  
    // Kirim data ke server
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/contact');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      nama: nama,
      email: email
    }));
  
    // Tambahkan pesan konfirmasi
    const alertMessage = document.createElement('div');
    alertMessage.classList.add('alert');
    alertMessage.textContent = `Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda.`;
    document.body.appendChild(alertMessage);
  }
  
  submitButton.addEventListener('submit', () => {
    if (validateInput()) {
      saveContactToDatabase();
    }
  });
  