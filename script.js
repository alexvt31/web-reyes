document.addEventListener('DOMContentLoaded', () => {

    // --- Chart 1: Bajada de Basura (Barra) ---
    const ctxBasura = document.getElementById('chartBasura');
    if (ctxBasura) {
        new Chart(ctxBasura, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Veces que bajé la basura',
                    data: [12, 19, 3, 5, 2, 3, 10, 15, 8, 10, 13, 14], // Spike in Dec for good behavior
                    backgroundColor: 'rgba(52, 152, 219, 0.6)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    // --- Chart 2: Gestión de Bombonas (Doughnut) ---
    const ctxBombona = document.getElementById('chartBombona');
    if (ctxBombona) {
        new Chart(ctxBombona, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Veces que fui a por la bombona',
                    data: [2, 1, 3, 2, 1, 3, 1, 2, 3, 2, 1, 2],
                    backgroundColor: ['rgba(46, 204, 113, 0.7)'],
                    borderWidth: 1
                }]
            },
            options: { 
                responsive: true,
                scales: { y: { beginAtZero: true } } 
            }
        });
    }

     // --- Chart 3: Compras (Doughnut) ---
    const ctxCompras = document.getElementById('chartCompras');
    if (ctxCompras) {
        new Chart(ctxCompras, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Veces que fui a hacer la compra',
                    data: [1, 2, 0, 1, 3, 2, 4, 2, 0, 3, 4, 2],
                    backgroundColor: ['rgba(111, 88, 216, 0.7)'],
                    borderWidth: 1
                }]
            },
            options: { 
                responsive: true,
                scales: { y: { beginAtZero: true } } 
            }
        });
    }

    // --- Chart 4: Incidentes en carretera (Doughnut) ---
    const ctxIncidentes = document.getElementById('chartIncidentes');
    if (ctxIncidentes) {
        new Chart(ctxIncidentes, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Numero de incidentes con un coche familiar',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: ['rgba(233, 25, 25, 0.7)'],
                    borderWidth: 1
                }]
            },
            options: { 
                responsive: true,
                scales: { y: { beginAtZero: true } } 
            }
        });
    }

    // --- Chart 4: Incidentes en carretera (Doughnut) ---
    const ctxRespuestas = document.getElementById('chartRespuestas');
    if (ctxRespuestas) {
        new Chart(ctxRespuestas, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Tiempo de respuestas tras la peticion de un superior',
                    data: [60, 120, 79, 45, 67, 80, 12, 54, 124, 360, 20, 80],
                    backgroundColor: ['rgba(233, 25, 25, 0.7)'],
                    borderWidth: 1
                }]
            },
            options: { 
                responsive: true,
                scales: { y: { beginAtZero: true } } 
            }
        });
    }

    // --- Chart 4: Gestion de dinero (Doughnut) ---
    const ctxGestionDinero = document.getElementById('chartGestionDinero');
    if (ctxGestionDinero) {
        new Chart(ctxGestionDinero, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Dinero ingresado por la unidad familiar',
                    data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
                    backgroundColor: ['rgba(46, 204, 113, 0.7)'],
                    borderWidth: 1
                }]
            },
            options: { 
                responsive: true,
                scales: { y: { beginAtZero: true } } 
            }
        });
    }

    const ctxVecesQueLlegueTarde = document.getElementById('chartVecesQueLlegueTarde');
    if (ctxVecesQueLlegueTarde) {
        new Chart(ctxVecesQueLlegueTarde, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Veces que llegue tarde',
                    data: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    backgroundColor: ['rgba(46, 204, 113, 0.7)'],
                    borderWidth: 1
                }]
            },
            options: { 
                responsive: true,
                scales: { y: { beginAtZero: true } } 
            }
        });
    }

    // --- Chart 4: Orden en Habitación (Line) ---
    const ctxOrden = document.getElementById('chartOrden');
    if (ctxOrden) {
        new Chart(ctxOrden, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Nivel de Orden (Escala Richter)',
                    data: [7, 8, 2, 4, 6, 2, 5, 6, 7, 2, 1, 9],
                    fill: true,
                    backgroundColor: 'rgba(155, 89, 182, 0.2)',
                    borderColor: 'rgba(155, 89, 182, 1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, max: 10 }
                }
            }
        });
    }

    // --- Logic for Gift Page ---
    // (Optional nice-to-have cleanups or interactions)
    const btnComprar = document.querySelectorAll('.btn-comprar');
    btnComprar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!btn.href && !btn.disabled) {
                // If it's a button without href (none now, but future proof)
            }
        });
    });

});
