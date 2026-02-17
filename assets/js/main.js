document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');

  fetch('assets/db/letters.json')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(letter => letter.name !== "");
      
      const table = document.createElement('table');
      table.innerHTML = `
        <thead>
          <tr>
            <th><div class="letter letter-am">Буква</div></th>       
            <th><div class="letter letter-ru">Русское написание</div></th>
            <th><div class="letter letter-transcription">Транскрипция</div></th>
            <th><div class="letter letter-name">Название</div></th>
            <th><div class="letter-description">Описание</div></th>
          </tr>
        </thead>
        <tbody>
          ${filteredData.map(letter => `
            <tr>
              <td>
                <div class="letter letter-am">${letter.capital} ${letter.lowercase}</div>
              </td>
              <td>
                <div class="letter letter-ru">${letter.ru.capital.letter} ${letter.ru.lowercase.letter}</div>
              </td>
              <td>
                <div class="letter letter-transcription">${letter.ru.capital.transcription}</div>
              </td>
              <td>
                <div class="letter letter-name">${letter.name} / ${letter.ru.name}</div>
              </td>
              <td>
                <div class="letter-description">${letter.ru.description}</div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      `;
      
      contentDiv.innerHTML = '';
      contentDiv.appendChild(table);
    })
    .catch(error => {
      console.error('Error fetching letters:', error);
      contentDiv.innerHTML = '<p>Ошибка при загрузке данных.</p>';
    });
});
