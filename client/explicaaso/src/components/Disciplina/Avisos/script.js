const fileInput = document.getElementById('pdfInput');
const fileList = document.getElementById('fileList');

async function uploadFile() {
  const file = fileInput.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('pdf', file);

  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    if (data.url) {
      addFileToList(data.url, file.name);
    }
  } catch (error) {
    console.error('Erro ao enviar o arquivo:', error);
  }
}

function addFileToList(url, fileName) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const deleteButton = document.createElement('button');

  link.href = url;
  link.textContent = fileName;
  link.target = '_blank';

  deleteButton.textContent = 'Deletar';
  deleteButton.addEventListener('click', async () => {
    try {
      const key = new URL(url).pathname.substring(1);
      const response = await fetch(`/delete/${key}`, { method: 'DELETE' });
      if (response.ok) {
        listItem.remove();
      } else {
        console.error('Erro ao deletar o arquivo.');
      }
    } catch (error) {
      console.error('Erro ao deletar o arquivo:', error);
    }
  });

  listItem.appendChild(link);
  listItem.appendChild(deleteButton);
  fileList.appendChild(listItem);
}