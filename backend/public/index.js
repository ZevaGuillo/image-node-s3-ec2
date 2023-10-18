const imgForm = document.querySelector("#img-form");
const imgInput = document.querySelector("#img-input");
const uploadBy = document.querySelector("#upload-by");

imgForm.addEventListener("submit", e => {
  if (uploadBy.value === "backend") handleImgSubmitByBackend(e);
  else handleImgSubmitByFront(e);
});

const handleImgSubmitByFront = async e => {
  e.preventDefault();

  const file = imgInput.files[0];

  // get url
  const { url } = await fetch("/api/upload/frontend").then(res => res.json());
  console.log(url);

  // enviar la imagen directamente al bucket de S3
  await fetch(url, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const imageURL = url.split("?")[0];
  console.log(imageURL, "nuevo url");
};

const handleImgSubmitByBackend = async e => {
  e.preventDefault();
  console.log("backend");

  const formData = new FormData();
  formData.append("image", imgInput.files[0]);

  try {
    const result = await fetch("/api/upload/backend", {
      method: "POST",
      body: formData,
    }).then(res => res.json());
    console.log(result);
  } catch (error) {
    console.log("Error al analizar la respuesta como JSON:", error);
  }
};
