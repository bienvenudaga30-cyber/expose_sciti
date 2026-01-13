// Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Navigation entre sections
    const navLinks = document.querySelectorAll('.nav-link');
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('.section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Initialiser les graphiques
    initCharts();

    // Gestion du menu mobile
    menuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Navigation par clic
    function setActiveSection(sectionId) {
        // Désactiver toutes les sections
        sections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));
        navDots.forEach(dot => dot.classList.remove('active'));

        // Activer la section cible
        document.getElementById(sectionId).classList.add('active');
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
        document.querySelector(`.nav-dot[href="#${sectionId}"]`).classList.add('active');
    }

    // Écouteurs pour les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            setActiveSection(sectionId);
            
            // Fermer le menu mobile si ouvert
            navMenu.classList.remove('active');
        });
    });

    // Écouteurs pour les points de navigation
    navDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = dot.getAttribute('href').substring(1);
            setActiveSection(sectionId);
        });
    });

    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        const currentIndex = Array.from(sections).findIndex(section => 
            section.classList.contains('active')
        );
        
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            e.preventDefault();
            setActiveSection(sections[currentIndex + 1].id);
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            setActiveSection(sections[currentIndex - 1].id);
        }
    });

    // Scroll smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Gestion du modal
    const infoBtns = document.querySelectorAll('.info-btn');
    const modal = document.getElementById('infoModal');
    const closeModal = document.querySelector('.close-modal');

    infoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const info = btn.getAttribute('data-info');
            document.getElementById('modalTitle').textContent = 'Informations détaillées';
            document.getElementById('modalContent').innerHTML = info.replace(/<br>/g, '<br>');
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Animation des cartes au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.dashboard-card, .conclusion-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Mise à jour en temps réel
    setInterval(() => {
        updateRealTimeData();
    }, 5000);
});

// Initialisation des graphiques
function initCharts() {
    // Données pour les graphiques
    const chartsData = window.chartsData || {
        clients: {
            labels: ['Magasin 1', 'Magasin 2'],
            data: [326, 273],
            colors: ['#2563eb', '#7c3aed']
        },
        revenue: {
            labels: ['Mai 2005', 'Juin 2005', 'Juillet 2005', 'Août 2005', 'Février 2006'],
            data1: [2621.83, 4774.37, 13998.56, 11853.65, 234.09],
            data2: [2201.61, 4855.52, 14370.35, 12216.49, 280.09]
        },
        categories: {
            labels: ['Sports', 'Animation', 'Action', 'Sci-Fi', 'Family'],
            data: [1179, 1166, 1112, 1101, 1096]
        }
    };

    // Graphique 1: Répartition clients
    const clientsCtx = document.getElementById('clientsChart').getContext('2d');
    new Chart(clientsCtx, {
        type: 'doughnut',
        data: {
            labels: chartsData.clients.labels,
            datasets: [{
                data: chartsData.clients.data,
                backgroundColor: chartsData.clients.colors,
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${context.label}: ${value} clients (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    // Graphique 2: CA par magasin
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: chartsData.revenue.labels,
            datasets: [
                {
                    label: 'Magasin 1',
                    data: chartsData.revenue.data1,
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Magasin 2',
                    data: chartsData.revenue.data2,
                    borderColor: '#7c3aed',
                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });

    // Graphique 3: Catégories
    const categoriesCtx = document.getElementById('categoriesChart').getContext('2d');
    new Chart(categoriesCtx, {
        type: 'bar',
        data: {
            labels: chartsData.categories.labels,
            datasets: [{
                data: chartsData.categories.data,
                backgroundColor: [
                    '#2563eb', '#7c3aed', '#10b981', '#f59e0b', '#ef4444'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Plus de graphiques seraient ajoutés ici...
}

// Mise à jour des données en temps réel
function updateRealTimeData() {
    // Simuler des mises à jour de données
    const infoCards = document.querySelectorAll('.info-card h3');
    if (infoCards.length > 0) {
        // Simuler une légère variation
        const variation = Math.random() > 0.5 ? 1 : -1;
        const change = Math.floor(Math.random() * 5);
        
        infoCards.forEach(card => {
            const current = parseInt(card.textContent.replace(/[^0-9]/g, ''));
            if (!isNaN(current)) {
                const newValue = Math.max(0, current + (variation * change));
                card.textContent = newValue.toLocaleString();
            }
        });
    }
}
