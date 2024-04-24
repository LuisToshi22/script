document.addEventListener('DOMContentLoaded', function() {
    fetchData();
    setInterval(fetchData, 60000); // Обновление данных каждую минуту
});

function fetchData() {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Очистка контейнера перед добавлением новых данных

    fetch('https://fxmonitor.online/___api___/v1.1/getAccs?apikey=Hrp4uiw3iUqvJrzcZbY4')
        .then(response => response.json())
        .then(data => {
            data.forEach(acc => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h2>${acc.name}</h2>
                    <p>Номер счета: ${acc.accNumber}</p>
                    <p>Баланс: ${acc.balance.toFixed(2)} USD</p>
                    <p>Эквити: ${acc.equity.toFixed(2)} USD</p>
                    <p>Текущий доход: ${acc.profit_d.toFixed(2)} USD</p>
                    <p>Пинг: ${acc.ping} мс</p>
                    <p>Автоторговля: ${acc.autotrading ? 'Включена' : 'Выключена'}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
}
