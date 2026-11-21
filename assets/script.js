function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img do perfil
  const img = document.querySelector("#profile img");

  console.log("Tem classe light?", html.classList.contains("light"));
  console.log("Elemento img encontrado:", img);

  // substituir a imagem conforme o modo atual
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Foto de perfil no modo light");
  } else {
    // se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Foto de perfil");
  }
}