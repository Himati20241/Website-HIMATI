// --- DATA ANGGOTA MOCKUP ---
const membersData = [
    { name: "Muhammad Isyfan Khoiri", role: "Ketua Himpunan", division: "Inti", class: "2024", img: "Photo/isyfankhoiri.jpg" },
    { name: "Resta Diva Anggraini", role: "Sekretaris", division: "Inti", class: "2024", img: "Photo/resta.jpg" },
    { name: "Nabila Rihhadatul Aisy Lasecaria", role: "Bendahara", division: "Inti", class: "2024", img: "Photo/Nabila.jpg" },
    { name: "M. Fathir Rahman", role: "Ketua Divisi", division: "Hubungan Masyarakat", class: "2024", img: "Photo/fatir.jpg" },
    { name: "M. Wildan Nasrudin", role: "Ketua Divisi", division: "Media Kreatif", class: "2024", img: "Photo/wildan.jpg" },
    { name: "Nurfaiza", role: "Ketua Divisi", division: "Minat & Bakat", class: "2024", img: "Photo/Nurfaiza.jpg" },
    { name: "Rasyid Sidiq", role: "Ketua Divisi", division: "Sosial & Budaya", class: "2024", img: "Photo/Rasyid.jpg" },
];

// --- RENDER DATA ANGGOTA ---
const memberGrid = document.getElementById('memberGrid');
const searchBar = document.getElementById('searchBar');

function displayMembers(members) {
    memberGrid.innerHTML = "";
    if(members.length === 0) {
        memberGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--gray-text);">Anggota tidak ditemukan.</p>`;
        return;
    }
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = "card member-card";
        card.innerHTML = `
            <img src="${member.img}" alt="${member.name}" class="member-img">
            <h3>${member.name}</h3>
            <div class="member-role">${member.role}</div>
            <div class="member-desc">Angkatan ${member.class} | Divisi ${member.division}</div>
        `;
        memberGrid.appendChild(card);
    });
}

// Fitur Pencarian Real-time
searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredMembers = membersData.filter(member => {
        return (
            member.name.toLowerCase().includes(searchString) ||
            member.division.toLowerCase().includes(searchString) ||
            member.class.includes(searchString)
        );
    });
    displayMembers(filteredMembers);
});

// --- MOBILE MENU DROPDOWN ---
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu jika link diklik (on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- INTERAKTIF MODAL REGISTER EVENT ---
const modal = document.getElementById('registerModal');
const modalTitle = document.getElementById('modalEventTitle');

function openRegister(eventName) {
    modalTitle.innerText = eventName;
    modal.style.display = "flex";
}

function closeRegister() {
    modal.style.display = "none";
}

// Tutup modal saat klik luar area konten
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeRegister();
    }
});

// Form submission handler mockup
document.getElementById('eventForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Anda berhasil mendaftar ke kegiatan ini. Link konfirmasi dikirim ke email kampus Anda.');
    closeRegister();
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesan/Aspirasi Anda berhasil terkirim ke sistem sekretariat HIMATI.');
    e.target.reset();
});

// Inisialisasi awal saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    displayMembers(membersData);
});