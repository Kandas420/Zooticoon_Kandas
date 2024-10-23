document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // Fonction pour afficher un onglet
    function showTab(tabName) {
        contents.forEach(content => {
            if (content.getAttribute('data-tab') === tabName) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }

    // Ajouter des écouteurs d'événements aux onglets
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
            
            // Mettre à jour la classe active
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Afficher l'onglet "Accueil" par défaut
    showTab('home');
    tabs[0].classList.add('active');
    

});
