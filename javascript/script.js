const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("active");
    menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
`;
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("active");
    menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all the tracks we want to animate
  const tracks = document.querySelectorAll(".track");

  tracks.forEach((track) => {
    // Clone the content inside the track
    const originalContent = track.innerHTML;
    // Append the cloned content to the track
    // This creates the seamless loop effect
    track.innerHTML += originalContent;
  });
});
