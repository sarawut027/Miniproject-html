let slideIndex = 1;
showSlides(slideIndex);

// ฟังก์ชันเลื่อนไปข้างหน้า/ถอยหลัง
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex - 1].style.display = "block";  
}

setInterval(function() {
  plusSlides(1);
}, 3000);



/* ============================= */
/* 🔎 GAME SEARCH SYSTEM */
/* ============================= */

function handleSearch(event) {
  event.preventDefault();

  const input = document.getElementById("searchInput");
  if (!input) return;

  const query = input.value.toLowerCase().trim();

  // รายชื่อเกมทั้งหมด
  const games = {
    "grand theft auto v": "gtav.html",
    "gta": "gtav.html",
    "rust": "Rust.html",
    "black myth wukong": "Wukong.html",
    "wukong": "Wukong.html",
    "dead by daylight": "Deadby.html",
    "deadby": "Deadby.html",
    "red dead redemption 2": "RedDead.html",
    "red dead": "RedDead.html",
    "rdr2": "RedDead.html",
    "pubg": "Pubg.html",
    "pubg battlegrounds": "Pubg.html",
    "rainbow six": "Tomsix.html",
    "rainbow six siege": "Tomsix.html",
    "siege x": "Tomsix.html"
  };

  for (let game in games) {
    if (query.includes(game)) {
      window.location.href = games[game];
      return;
    }
  }

  alert("Game not found");
}