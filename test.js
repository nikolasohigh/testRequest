const xhr = new XMLHttpRequest();
const url = 'https://dev.rightech.io/api/v1/objects/mqtt-kolya_bondar_yt-3f68k5'; // Замените на ваш URL

xhr.open('GET', url);
xhr.setRequestHeader('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NTg1MzFlOTk2YmE1ZjY2ZTBhNDk0NTAiLCJzdWIiOiI2NTgwY2YzYmE2OWI2MTJmNmE1YjUzNGIiLCJncnAiOiI2NTgwY2YzYmE2OWI2MTJmNmE1YjUzNGEiLCJvcmciOiI2NTgwY2YzYmE2OWI2MTJmNmE1YjUzNGEiLCJsaWMiOiI1ZDNiNWZmMDBhMGE3ZjMwYjY5NWFmZTMiLCJ1c2ciOiJhcGkiLCJmdWxsIjpmYWxzZSwicmlnaHRzIjoxLjUsImlhdCI6MTcwMzIyNzg4MSwiZXhwIjoyMjEwNzEzMjAwfQ.TwTeKWAZtS9LEvo0N8ESuh6AXeoVayiWLG6QmGnXhVM');
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error('Ошибка:', xhr.status);
    }
  }
};

xhr.send();
