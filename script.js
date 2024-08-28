function toggleMode() {
  const body = document.body
  body.classList.toggle("light") //jeito simplificado

  // if(body.classList.contains('light')) {
  // body.classList.remove('light')
  // } else {
  // body.classList.add('light')
  // }

  const img = document.querySelector("#profile img")

  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

  const alt = document.querySelector("#profile img")

  if (body.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Foto de mayk brito sorrindo, usando oculos escuros cabelo com topete, usando blusa preta sem barba e com fundo azul e roxo"
    )
  } else {
    alt.setAttribute(
      "alt",
      "Foto de mayk brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo"
    )
  }
}
