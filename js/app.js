console.log("App carregado!");

const toggle = document.getElementById("toggle-theme");
const html = document.documentElement;
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
  html.classList.add("dark");
  toggle.textContent = "☀️";
} else {
  toggle.textContent = "🌙";
}

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  const temaAtual = html.classList.contains("dark");
  localStorage.setItem("tema", temaAtual ? "escuro" : "claro");
  toggle.textContent = temaAtual ? "☀️" : "🌙";
});
