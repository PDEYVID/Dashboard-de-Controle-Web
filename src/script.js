// Menu Navigation
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all menu items
        document.querySelectorAll('.menu-item').forEach(mi => mi.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Get page ID from data-page attribute
        const pageId = item.getAttribute('data-page');
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        
        // Show selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.add('active');
        }
    });
});

// Initialize Charts
function initializeCharts() {
    // Vendas Mensais Chart
    const vendasCtx = document.getElementById('vendas-chart');
    if (vendasCtx) {
        new Chart(vendasCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: 'Vendas (R$)',
                    data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 38000, 42000, 45230],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'R$ ' + value.toLocaleString('pt-BR');
                            }
                        }
                    }
                }
            }
        });
    }

    // Distribuição de Clientes Chart
    const clientesCtx = document.getElementById('clientes-chart');
    if (clientesCtx) {
        new Chart(clientesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Premium', 'Standard', 'Básico', 'Trial'],
                datasets: [{
                    data: [35, 30, 25, 10],
                    backgroundColor: [
                        '#667eea',
                        '#764ba2',
                        '#f093fb',
                        '#4facfe'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
}

// Update stats with animation
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        const text = stat.textContent;
        const isNumeric = /[\d,.]/.test(text);
        
        if (isNumeric) {
            stat.style.animation = 'fadeIn 0.6s ease-in';
        }
    });
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    animateStats();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Search functionality (placeholder)
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Pesquisando por:', searchTerm);
        // Implementar lógica de busca aqui
    });
}

// Notification button
const notificationBtn = document.querySelector('.btn-notification');
if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        alert('Você tem 0 notificações novas!');
    });
}
