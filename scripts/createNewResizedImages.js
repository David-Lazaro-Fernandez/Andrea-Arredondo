const fs = require("fs");
const sharp = require("sharp");

// Leer el contenido del archivo .mdx
const postFiles = fs.readdirSync("../posts");
const extraPostsFiles = fs.readdirSync("../extracurricular_posts");

postFiles.forEach((postFile) => {
  const content = fs.readFileSync(`../posts/${postFile}`, "utf-8");

  // Extraer las referencias a las imágenes
  const images = (
    content.match(/    - [^\n]+\.(png|jpeg|jpg|webp)/g) || []
  ).map((line) => line.trim().slice(2).trim());

  // Redimensionar cada imagen, guardarla en un nuevo archivo y actualizar el contenido
  let newImagesSection = "blured_images:\n";
  console.log(images);

  images.forEach((image) => {
    const inputPath = `../public/${image}`;
    const outputPath = `../public/blured-${image}`;
    sharp(inputPath)
      .resize(10) // Cambia este valor según el tamaño deseado
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error("Error resizing image:", err);
        } else {
          console.log("Image resized:", info);
        }
      });
    // Añadir la nueva imagen al nuevo apartado de imágenes
    newImagesSection += `    - blured-${image}\n`;
  });

  // Añadir el nuevo apartado de imágenes al contenido
  const newContent = content.replace("---\n", `---\n${newImagesSection}`);
});

extraPostsFiles.forEach((postFile) => {
  const content = fs.readFileSync(`../extracurricular_posts/${postFile}`, "utf-8");

  // Extraer las referencias a las imágenes
  const images = (
    content.match(/    - [^\n]+\.(png|jpeg|jpg|webp)/g) || []
  ).map((line) => line.trim().slice(2).trim());

  // Redimensionar cada imagen, guardarla en un nuevo archivo y actualizar el contenido
  let newImagesSection = "blured_images:\n";
  console.log(images);

  images.forEach((image) => {
    const inputPath = `../public/${image}`;
    const outputPath = `../public/blured-${image}`;
    sharp(inputPath)
      .resize(10) // Cambia este valor según el tamaño deseado
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error("Error resizing image:", err);
        } else {
          console.log("Image resized:", info);
        }
      });
    // Añadir la nueva imagen al nuevo apartado de imágenes
    newImagesSection += `    - blured-${image}\n`;
  });

  // Añadir el nuevo apartado de imágenes al contenido
  const newContent = content.replace("---\n", `---\n${newImagesSection}`);
});

console.log("File updated");
