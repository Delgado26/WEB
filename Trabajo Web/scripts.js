// Manejo de datos con JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Verificar credenciales al enviar el formulario
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('username', username);
            document.getElementById('loginForm').reset();
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('game').style.display = 'block';
            initGame();
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });

    // Función para inicializar el juego
    function initGame() {
        var cards = localStorage.getItem('cards');
        if (!cards) {
            // Carga de datos desde archivo JSON
            fetch('datos.json')
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('cards', JSON.stringify(data));
                    renderCards(data);
                });
        } else {
            renderCards(JSON.parse(cards));
        }
    }

    // Función para renderizar las cartas
    function renderCards(cards) {
        var cardImagesDiv = document.getElementById('cardImages');
        cardImagesDiv.innerHTML = '';
        for (var i = 1; i <= 13; i++) {
            var img = document.createElement('img');
            img.src = `img/${i}.png`;
            img.alt = `Carta ${i}`;
            img.addEventListener('click', function() {
                incrementCard(this.alt);
            });
            cardImagesDiv.appendChild(img);
        }

        updateCardTable(cards);
    }

    // Función para incrementar la cantidad de una carta
    function incrementCard(cardName) {
        var cards = JSON.parse(localStorage.getItem('cards'));
        var card = cards.find(c => c.carta === cardName);
        card.cantidad++;
        localStorage.setItem('cards', JSON.stringify(cards));
        updateCardTable(cards);
    }

    // Función para actualizar la tabla de cartas
    function updateCardTable(cards) {
        var tableBody = document.querySelector('#cardTable tbody');
        tableBody.innerHTML = '';
        cards.sort((a, b) => a.numero - b.numero); // Ordenar por número de carta
        cards.forEach(function(card) {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${card.numero}</td>
                <td>${card.carta}</td>
                <td>${card.cantidad}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Manejar el formulario para agregar nuevas cartas
    document.getElementById('addCardForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var numero = document.getElementById('numero').value;
        var carta = document.getElementById('carta').value;
        var cards = JSON.parse(localStorage.getItem('cards'));
        var existingCard = cards.find(c => c.carta === carta);
        if (existingCard) {
            existingCard.cantidad += parseInt(numero);
        } else {
            cards.push({ numero: parseInt(numero), carta: carta, cantidad: parseInt(numero) });
        }
        localStorage.setItem('cards', JSON.stringify(cards));
        updateCardTable(cards);
        document.getElementById('addCardForm').reset();
    });// Función para actualizar la tabla de cartas
    function updateCardTable(cards) {
        var tableBody = document.querySelector('#cardTable tbody');
        tableBody.innerHTML = '';
        cards = cards.filter(card => card.numero !== undefined && card.carta !== undefined && card.cantidad !== undefined);
        cards.sort((a, b) => a.numero - b.numero); // Ordenar por número de carta
        cards.forEach(function(card) {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${card.numero}</td>
                <td>${card.carta}</td>
                <td>${card.cantidad}</td>
            `;
            tableBody.appendChild(row);
        });
    }
    
});
