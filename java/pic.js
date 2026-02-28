let slideIndex = 1;
showSlides(slideIndex);

// ฟังก์ชันเลื่อนไปข้างหน้า/ถอยหลัง
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    
    // ถ้าเกินจำนวนรูป ให้กลับไปรูปแรก
    if (n > slides.length) { slideIndex = 1 }    
    // ถ้าต่ำกว่า 1 ให้ไปรูปสุดท้าย
    if (n < 1) { slideIndex = slides.length }
    
    // ซ่อนทุกรูปก่อน
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // แสดงรูปที่เลือก
    slides[slideIndex - 1].style.display = "block";  
}