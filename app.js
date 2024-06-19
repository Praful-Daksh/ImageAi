var prompt = document.getElementById('prompt');
var generateBtn = document.getElementById('button');

var Image = document.getElementById('aiImage');
var imageCard = document.getElementById('image-card');
var description = document.getElementById('image-description');
generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (prompt.value != '') {
    console.log(prompt.value)
    description.textContent = prompt.value;
    showloader();
    query().then(result => {
      console.log(result)
      const objectUrl = URL.createObjectURL(result);
      Image.src = objectUrl;
      showimage();
      hideloader();
    });
  }
})



function showloader() {
  document.getElementById('loader').classList.add('d-block');
  document.getElementById('loader').classList.remove('d-none');
}

function hideloader() {
  document.getElementById('loader').classList.add('d-none');
  document.getElementById('loader').classList.remove('d-block');
}





async function query() {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(prompt.value),
    }
  );
  const result = await response.blob();
  return result;
}

function showimage() {
  
  imageCard.classList.remove('d-none');
}