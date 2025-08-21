
const picData = [
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anika",
    description: "Dreamer ✨"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1734498806753-1b67ecb15393?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sanya",
    description: "Pure vibes 🌸"
  },
  {
    img: "https://images.unsplash.com/photo-1679592507116-2ed856359fb0?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kavya",
    description: "Keep it real 💫"
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ritika",
    description: "Golden soul 🌟"
  },
  {
    img: "https://images.unsplash.com/photo-1724715616541-0261119b9e5b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Aarohi",
    description: "Chasing light ☀️"
  },
  {
    
    img : "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Isha",
    description: "Calm & classy 🌿"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1708110770108-6690fcadfe88?q=80&w=730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Meera",
    description: "Wild heart 🦋"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1741963211901-5c8018a5f405?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kavini",
    description: "Lost in thoughts 🌙"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663089871353-c36bd9f42709?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ishita",
    description: "Smile & shine 🌼"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1690422280031-3270734a4f07?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Riya",
    description: "Simply me ❤️"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1732098508796-3a92d57e0b60?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Nikita",
    description: "gentle thoughts 🌙"
  },
  {
    img : "https://plus.unsplash.com/premium_photo-1667520524170-f7f44b5b0376?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Yuki",
    description: "Soft vibes 🌸"
  }
];


const gallery = document.querySelector('.gallery');
const img = document.querySelector('img');
const overlay = document.querySelector('.overlay');
const zoom = document.querySelector('#zoom');
let input = document.querySelector('#input');
let text = document.querySelector('#text');
const elements = document.querySelectorAll('#text h4, #text p');


let icon = document.querySelector('#icon');
let options = document.querySelector('.option');
let details = document.querySelector('#details');
let layout = document.querySelector('#layout');


let detailsVisible = true; // global state

// Apply details visibility based on global state
function applyDetailsVisibility(scope = document) {
  scope.querySelectorAll('.text h4, .text p').forEach(el => {
    el.style.display = detailsVisible ? 'block' : 'none';
  });
  details.style.backgroundColor = detailsVisible ? 'rgba(255,255,255,0.25)' : 'transparent';
}







//Mouse tilt effect
function attachTilt(card) {
  card.addEventListener("mousemove", (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = card;
    const x = offsetX / offsetWidth - 0.5;
    const y = offsetY / offsetHeight - 0.5;
    card.style.transform = `
      perspective(800px)
      rotateX(${-y * 25}deg)
      rotateY(${x * 25}deg)
      scale(1.05)
    `;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transition = "transform 0.3s ease";
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
  });
}

function connect(info) {
  const one = document.createElement("div");
  one.className = "one";

  const picture = document.createElement("img");
  picture.src = info.img;

  const text = document.createElement("div");
  text.className = "text";

  const h4 = document.createElement("h4");
  h4.textContent = info.name;

  const p = document.createElement("p");
  p.textContent = info.description;

  text.append(h4, p);
  one.append(picture, text);
  gallery.appendChild(one);

  // apply current visibility to this new card
  applyDetailsVisibility(one);

  // overlay (dblclick on card)
  one.addEventListener("dblclick", () => {
    gallery.style.display = "none";
    overlay.style.display = "block";
    overlay.innerHTML = `
      <i class="ri-fullscreen-exit-line" id="zoom"></i>
      <img src="${picture.src}">
    `;
    document.getElementById("zoom").addEventListener("click", () => {
      overlay.style.display = "none";
      gallery.style.display = "flex";
    });
  });

  // tilt for this card
  attachTilt(one);
}

// initial render
picData.forEach(connect);

// options/icon toggle (as is)
icon.addEventListener('click', () => {
  const current = getComputedStyle(options).display;
  options.style.display = current === 'none' ? 'block' : 'none';
  console.log("icon click");
});

// details button toggles global state, then applies to all
details.addEventListener('click', (e) => {
  e.stopPropagation();
  detailsVisible = !detailsVisible;
  applyDetailsVisibility();
  console.log('Details clicked');
});

// layout.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('Layout clicked');
// });



layout.addEventListener('click', (e) => {
  e.stopPropagation();

  // Toast div create
  const toast = document.createElement('div');
  toast.innerText = "⚡ Layout feature coming soon!";
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.background = "#333";
  toast.style.color = "#fff";
  toast.style.padding = "10px 15px";
  toast.style.borderRadius = "8px";
  toast.style.zIndex = "1000";
  toast.style.fontSize = "14px";

  document.body.appendChild(toast);

  // 3 sec baad remove
  setTimeout(() => {
    toast.remove();
  }, 3000);

  console.log('Layout clicked - feature not implemented yet');
});


// search (rebuild gallery but keep detailsVisible respected)
input.addEventListener("input", function () {
  const searchValue = input.value.toLowerCase();
  gallery.innerHTML = ""; // clear

  const results = picData.filter(item =>
    item.name.toLowerCase().includes(searchValue) ||
    item.description.toLowerCase().includes(searchValue)
  );

  if (results.length === 0) {
    gallery.innerHTML = ` 
        <div class="not-found">
          <i class="ri-search-eye-line"></i>
          <p>Data not found</p>
        </div>`;
    return;
  }

  results.forEach(connect); 
});





