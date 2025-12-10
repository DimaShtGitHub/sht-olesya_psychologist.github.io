document.addEventListener('DOMContentLoaded', function () {
  const URL = 'https://sheetdb.io/api/v1/5c5trat7uaako';
  const form = document.getElementById('feedback-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const comments = await fetch(URL)
      .then((res) => res.json());

    const lastId = await Number(comments[comments.length - 1].id);

    // Способ создать один комментарий
    fetch('https://sheetdb.io/api/v1/5c5trat7uaako', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          'id': lastId + 1,
          'name': formData.get('name'),
          'comment': formData.get('comment'),
        }
      })
    })
      .then((response) => {
        response.json()
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      })

  });
}); 