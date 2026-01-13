// Données pour les visualisations
window.chartsData = {
    // Répartition clients par magasin
    clients: {
        labels: ['Magasin 1', 'Magasin 2'],
        data: [326, 273],
        colors: ['#2563eb', '#7c3aed'],
        percentages: ['54.4%', '45.6%']
    },
    
    // Chiffre d'affaires par mois
    revenue: {
        labels: ['Mai 2005', 'Juin 2005', 'Juillet 2005', 'Août 2005', 'Février 2006'],
        data1: [2621.83, 4774.37, 13998.56, 11853.65, 234.09], // Magasin 1
        data2: [2201.61, 4855.52, 14370.35, 12216.49, 280.09]  // Magasin 2
    },
    
    // Top 10 villes
    cities: {
        labels: ['Cape Coral', 'Saint-Denis', 'Aurora', 'Molodetchno', 'Santa Bárbara'],
        data: [221.55, 216.54, 198.50, 195.58, 194.61]
    },
    
    // Top 5 pays
    countries: {
        labels: ['Inde', 'Chine', 'États-Unis', 'Japon', 'Mexique'],
        data: [6034.53, 5251.03, 3685.31, 3122.51, 2984.82]
    },
    
    // Catégories de films
    categories: {
        labels: ['Sports', 'Animation', 'Action', 'Sci-Fi', 'Family', 'Drama', 'Documentary'],
        data: [1179, 1166, 1112, 1101, 1096, 1060, 1050]
    },
    
    // Audience par rating
    ratings: {
        labels: ['PG-13', 'NC-17', 'PG', 'R', 'G'],
        data: [3585, 3293, 3212, 3181, 2773],
        colors: ['#2563eb', '#7c3aed', '#10b981', '#f59e0b', '#ef4444']
    },
    
    // Top clients
    topClients: {
        labels: ['E. HUNT', 'K. SEAL', 'C. SHAW', 'M. DEAN', 'T. SANDERS'],
        data: [46, 45, 42, 42, 41]
    },
    
    // Saisonnalité
    seasonality: {
        labels: ['Juin 2005', 'Juillet 2005', 'Août 2005', 'Février 2006'],
        data: [2311, 6709, 5686, 182]
    }
};
