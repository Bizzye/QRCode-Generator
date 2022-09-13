const container = document.querySelector("section"),
qrInput = container.querySelector("main input"),
generateBtn = container.querySelector("main button"),
qrImg = container.querySelector("footer img");
// const qrInput = container.querySelector("main input");
// const generateBtn = container.querySelector("main button");
// const qrImg = container.querySelector("footer img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;

  if(!qrValue) { return alert("Insira uma URL ou texto para gerar um QR Code"); }

  generateBtn.innerText = "Gerando um QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    generateBtn.innerText = "Gerar QR Code";
    container.classList.add("active");
  });
});

qrInput.addEventListener("keyup", () => {
  if(!qrInput.value) { return container.classList.remove("active"); }
});