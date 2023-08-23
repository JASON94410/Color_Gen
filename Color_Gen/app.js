
const successMessage = document.querySelector(".success");
const colorText = document.querySelector(".color");
const btnGenerate = document.querySelector(".btn");
const btnCopy = document.querySelector(".btn.copy");

// Fonction pour générer une couleur aléatoire en hexadécimal
function generateRandomColor() {
  const hexChars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Fonction pour mettre à jour l'arrière-plan avec la couleur générée
function updateBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
}

// Fonction pour copier la couleur dans le presse-papiers
function copyColorToClipboard(color) {
  const tempInput = document.createElement("input");
  tempInput.value = color;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);
}

// Événement du bouton "Clique ici"
btnGenerate.addEventListener("click", () => {
  const randomColor = generateRandomColor();
  updateBackgroundColor(randomColor);
});

// Événement du bouton "Copier"
btnCopy.addEventListener("click", () => {
  const colorToCopy = colorText.textContent;
  copyColorToClipboard(colorToCopy);
});
