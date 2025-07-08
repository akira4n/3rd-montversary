// 🎉 Animasi teks pembuka menggunakan Typed.js
const typed = new Typed("#typed", {
  strings: ["Haloo, Sayaangg!", "Happy 3rd Montversary, Sayaanggggg!!"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1000,
  startDelay: 500,
  smartBackspace: true,
  loop: false,
  showCursor: true,
  onComplete: () => {
    const btn = document.getElementById("nextBtn");
    const title = document.getElementById("typed");

    btn.classList.remove("opacity-0", "translate-y-5", "pointer-events-none");
    btn.classList.add("opacity-100", "translate-y-0");
    title.parentElement.classList.add("-translate-y-8");
  },
});

// 📦 Inisialisasi elemen
const btnFirst = document.getElementById("nextBtn");
const mainPage = document.getElementById("mainPage");
const calendarContainer = document.getElementById("calendarContainer");
const passwordPage = document.getElementById("passwordPage");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const passwordError = document.getElementById("passwordError");
const yeyPage = document.getElementById("yeyPage");
const scrollPage = document.getElementById("scrollPage");
const galleryPage = document.getElementById("galleryPage");

// ▶️ Tombol dari halaman awal ke animasi kalender
btnFirst.addEventListener("click", () => {
  mainPage.classList.add("opacity-0", "pointer-events-none");

  setTimeout(() => {
    mainPage.classList.add("hidden");
    calendarContainer.classList.remove("hidden");
    startCalendarAnimation();
  }, 800);
});

// ⌨️ Validasi password
submitPassword.addEventListener("click", () => {
  const value = passwordInput.value.trim();
  if (value === "842025") {
    passwordError.classList.add("hidden");
    passwordPage.classList.add("opacity-0");

    setTimeout(() => {
      passwordPage.classList.add("hidden");
      showYeyPage();
    }, 700);
  } else {
    passwordError.classList.remove("hidden");
  }
});

// 🗝️ Tampilkan halaman password
function showPasswordPage() {
  passwordPage.classList.remove("hidden");
  setTimeout(() => {
    passwordPage.classList.remove("opacity-0");
  }, 10);
}

// 🎊 Halaman "YEYYYY PASSWORD NYA BENAR"
function showYeyPage() {
  yeyPage.classList.remove("hidden");
  yeyPage.classList.add("opacity-100", "transition-opacity", "duration-700");

  new Typed("#typedYey", {
    strings: ["YEYYYY PASSWORD NYA BENAR, SAYAANGG!!", ""],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
    showCursor: true,
    onComplete: () => {
      setTimeout(() => {
        yeyPage.classList.add("opacity-0");
        setTimeout(() => {
          yeyPage.classList.add("hidden");
          showScrollPage();
        }, 700);
      }, 500);
    },
  });
}

// 📖 Halaman longteks scroll + transisi fade
function showScrollPage() {
  scrollPage.classList.remove("hidden");
  scrollPage.classList.add("opacity-0", "transition-opacity", "duration-700");

  // Buat tombol Next
  const btnNext = document.createElement("button");
  btnNext.innerText = "Next";
  btnNext.className =
    "block mx-auto mt-12 mb-6 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition";

  btnNext.addEventListener("click", () => {
    scrollPage.classList.add("opacity-0");
    setTimeout(() => {
      scrollPage.classList.add("hidden");
      showGalleryPage();
    }, 700);
  });

  scrollPage.appendChild(btnNext);

  // Aktifkan scroll
  document.body.classList.remove("items-center", "justify-center");
  document.body.classList.add("overflow-y-auto");

  setTimeout(() => {
    scrollPage.classList.remove("opacity-0");
    scrollPage.classList.add("opacity-100");
  }, 10);
}

// 📷 Halaman Gallery
function showGalleryPage() {
  galleryPage.classList.remove("hidden");
  galleryPage.classList.add("opacity-0", "transition-opacity", "duration-700");

  setTimeout(() => {
    galleryPage.classList.remove("opacity-0");
    galleryPage.classList.add("opacity-100");
  }, 10);
}

// 📅 Animasi kalender
function startCalendarAnimation() {
  const calendar = document.getElementById("calendar");
  const months = ["8 April 2025", "8 May 2025", "8 June 2025", "8 July 2025"];
  let currentIndex = 0;

  function showMonth(index) {
    calendar.innerText = months[index];
    calendar.classList.remove("opacity-0", "translate-y-20", "rotate-12");
    calendar.classList.add("opacity-100", "translate-y-0", "rotate-0");
  }

  function animateTearAndNext() {
    setTimeout(() => {
      const ghost = document.createElement("div");
      ghost.className =
        "absolute w-full h-full rounded-xl bg-pink-300 opacity-40 scale-100 -z-20 transition-all duration-[1800ms] ease-in-out translate-y-0 rotate-0 blur-sm shadow-md shadow-pink-200 pointer-events-none";
      calendarContainer.appendChild(ghost);

      setTimeout(() => {
        ghost.classList.remove("translate-y-0", "rotate-0", "opacity-40");
        ghost.classList.add("translate-y-24", "rotate-12", "opacity-0");
      }, 10);

      setTimeout(() => {
        ghost.remove();
      }, 1800);

      calendar.classList.remove("opacity-100", "translate-y-0", "rotate-0");
      calendar.classList.add("opacity-0", "translate-y-20", "rotate-12");

      setTimeout(() => {
        currentIndex++;

        if (currentIndex < months.length) {
          showMonth(currentIndex);

          if (months[currentIndex] === "8 July 2025") {
            calendar.classList.add(
              "border-4",
              "border-pink-400",
              "shadow-lg",
              "shadow-pink-300",
              "scale-110"
            );
          }

          animateTearAndNext();
        } else {
          setTimeout(() => {
            calendarContainer.classList.add("opacity-0", "pointer-events-none");
            setTimeout(() => {
              calendarContainer.classList.add("hidden");
              showPasswordPage();
            }, 700);
          }, 1000);
        }
      }, 700);
    }, 3000);
  }

  calendar.classList.add("opacity-0", "translate-y-20", "rotate-12");

  setTimeout(() => {
    showMonth(currentIndex);
    animateTearAndNext();
  }, 100);
}
