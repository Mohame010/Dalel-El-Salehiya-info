// تشغيل مكتبة الأنيميشن
AOS.init({ duration: 1000, once: true });

// عدادات الأرقام والدوائر
const statsSection = document.getElementById('stats');
const counts = document.querySelectorAll('.count');
let started = false;

window.addEventListener('scroll', () => {
    if (window.scrollY >= statsSection.offsetTop - 600 && !started) {
        counts.forEach(num => {
            let target = +num.dataset.target;
            let current = 0;
            let increment = target / 60;
            let timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    num.innerText = target;
                    clearInterval(timer);
                } else {
                    num.innerText = Math.ceil(current);
                }
            }, 30);
        });

        // تحريك الدوائر (كما هي)
        document.getElementById('p1').style.strokeDashoffset = "75"; // 80%
        document.getElementById('p2').style.strokeDashoffset = "113"; // 70%
        started = true;
    }
});

// إرسال واتساب برابط احترافي (كما هي)
function sendToWhatsapp() {
    const name = document.getElementById('username').value;
    const phone = document.getElementById('userphone').value;
    const msg = document.getElementById('usermsg').value;

    if (name && phone && msg) {
        const text = `*طلب انضمام جديد* 🚀%0A%0A*الاسم:* ${name}%0A*الموبايل:* ${phone}%0A*الرسالة:* ${msg}`;
        window.open(`https://wa.me/+201093979250?text=${text}`, '_blank');
    } else {
        alert("يا بطل، لازم تملى كل الخانات عشان نتواصل معاك!");
    }
}

// وظيفة زر الواتساب العائم
function directWA() {
    const defaultMsg = "هل يمكنني التواصل مع أحد؟";
    // استبدل الرقم التالي برقمك الحقيقي بالكود الدولي (مثل 2010...)
    const myNumber = "201553782250"; 
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(defaultMsg)}`, '_blank');
}

window.addEventListener('load', () => {
    const track = document.getElementById('logosTrack');
    const content = track.innerHTML;
    
    // بنكرر المحتوى مرتين عشان نسد أي فراغ ونعمل حلقة دائرية
    track.innerHTML = content + content;

    let scrollAmount = 0;
    const speed = 1; // تحكم في السرعة من هنا (1 ناعم جداً)

    function step() {
        scrollAmount -= speed;
        
        // لو وصلنا لنص المسافة (نهاية الـ 14 صورة الأولى) بنصفر العداد فوراً
        // ده اللي بيخليها تلف في حلقة دائرية "ساقية" بدون توقف
        if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
            scrollAmount = 0;
        }
        
        track.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(step);
    }

    step();
});