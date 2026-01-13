// Configuration des thèmes et options
window.chartConfig = {
    // Configuration globale des graphiques
    global: {
        fontFamily: "'Inter', sans-serif",
        responsive: true,
        maintainAspectRatio: false
    },
    
    // Couleurs du thème
    colors: {
        primary: '#2563eb',
        secondary: '#7c3aed',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6'
    },
    
    // Options d'animation
    animations: {
        duration: 1000,
        easing: 'easeOutQuart'
    }
};

// Configuration des recommandations
window.recommendations = [
    {
        id: 1,
        title: "Optimisation des prix",
        description: "Augmenter le prix des nouveautés et titres PG-13",
        priority: "high",
        impact: "rentabilité"
    },
    {
        id: 2,
        title: "Durées courtes",
        description: "Généraliser les locations de 3 jours",
        priority: "medium",
        impact: "rotation"
    },
    {
        id: 3,
        title: "Fidélisation VIP",
        description: "Programme pour les 50 meilleurs clients",
        priority: "high",
        impact: "rétention"
    },
    {
        id: 4,
        title: "Adaptation saisonnière",
        description: "Renforcer stocks été, promotions hiver",
        priority: "medium",
        impact: "ventes"
    }
];
