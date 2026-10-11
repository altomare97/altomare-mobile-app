// --- DATI DEL TUO CV E PORTFOLIO ---
const portfolioData = {
    nome: "Antonio Altomare",
    ruolo: "Software Developer & Plc, Robot Automation Developer",
    citta: "Molfetta, Italia",
    bio: "Professionista appassionato di tecnologia, sviluppo web e automazione industriale.",
    
    // Contatti
    email: "altomare1997@gmail.com,    
    linkedin: "www.linkedin.com/in/antonio-altomare-531095242",

    // Skill
    skills: [
        { nome: "HTML5 & CSS3", livello: "Avanzato" },
        { nome: "JavaScript / PWA", livello: "Intermedio" },
        { nome: "GitHub & Render", livello: "Avanzato" },
        { nome: "UI/UX Mobile Design", livello: "Intermedio" }
    ],

    // Attestati / Certificazioni
    attestati: [
        { titolo: "Certificazione Web Developer", ente: "Accademia Tech", anno: "2024" },
        { titolo: "Corso Avanzato di Mobile PWA", ente: "Google Developer", anno: "2023" }
    ],

    // Articoli del Blog (Il più recente apparirà in primo piano, gli altri nell'albero storico)
    articoli: [
        {
            id: 1,
            titolo: "Come trasformare una pagina web in un'app per telefono gratis",
            data: "11 Ottobre 2026",
            testo: "Oggi scopriremo quanto sia semplice sfruttare GitHub e Render per pubblicare una Progressive Web App installabile direttamente sulla home del telefono senza spendere un euro."
        },
        {
            id: 2,
            titolo: "I vantaggi di una One-Page Mobile First",
            data: "01 Settembre 2026",
            testo: "Un design pulito, sezioni immediate e zero tempi di caricamento rendono l'esperienza utente impeccabile su smartphone."
        }
    ]
};

// --- LOGICA DI NAVIGAZIONE E RENDER DINAMICO ---
document.addEventListener("DOMContentLoaded", () => {
    // Inserisci i dati fissi
    document.getElementById("profile-name").innerText = portfolioData.nome;
    document.getElementById("profile-role").innerText = portfolioData.ruolo;
    document.getElementById("profile-city").innerHTML = `<i class="fa-solid fa-location-dot mr-1"></i>${portfolioData.citta}`;
    document.getElementById("profile-bio").innerText = portfolioData.bio;

    // Pulsanti azione rapida
    document.getElementById("btn-call").href = `tel:${portfolioData.telefono}`;
    document.getElementById("btn-email").href = `mailto:${portfolioData.email}`;
    document.getElementById("btn-whatsapp").href = `https://wa.me/${portfolioData.whatsapp}`;
    document.getElementById("btn-linkedin").href = portfolioData.linkedin;

    // Popola Skill
    const skillsContainer = document.getElementById("skills-list");
    portfolioData.skills.forEach(s => {
        skillsContainer.innerHTML += `<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-xl">${s.nome} (${s.livello})</span>`;
    });

    // Popola Attestati
    const attestatiContainer = document.getElementById("attestati-list");
    portfolioData.attestati.forEach(a => {
        attestatiContainer.innerHTML += `
            <div class="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <span class="text-[10px] text-blue-600 font-bold">${a.anno} - ${a.ente}</span>
                <h3 class="text-xs font-bold text-gray-800 mt-0.5">${a.titolo}</h3>
            </div>`;
    });

    // Popola Blog (Ultimo pubblicato + Storico ad Albero)
    if(portfolioData.articoli.length > 0) {
        const ultimo = portfolioData.articoli[0];
        document.getElementById("latest-blog-title").innerText = ultimo.titolo;
        document.getElementById("latest-blog-date").innerText = ultimo.data;
        document.getElementById("latest-blog-text").innerText = ultimo.testo;

        const historyContainer = document.getElementById("blog-history");
        // Mostra dal secondo in poi nello storico
        for(let i = 1; i < portfolioData.articoli.length; i++) {
            let art = portfolioData.articoli[i];
            historyContainer.innerHTML += `
                <div class="border-l-2 border-gray-200 pl-3 py-1">
                    <span class="text-[10px] text-gray-400">${art.data}</span>
                    <h4 class="text-xs font-bold text-gray-700">${art.titolo}</h4>
                    <p class="text-[11px] text-gray-500 mt-0.5">${art.testo}</p>
                </div>`;
        }
    }
});

// Funzione per cambiare sezione (Tab switching)
function switchTab(tabId) {
    const tabs = ['home', 'skills', 'attestati', 'blog'];
    tabs.forEach(t => {
        document.getElementById(`section-${t}`).classList.add('hidden');
        document.getElementById(`nav-${t}`).classList.remove('text-blue-600');
        document.getElementById(`nav-${t}`).classList.add('text-gray-400');
    });

    document.getElementById(`section-${tabId}`).classList.remove('hidden');
    document.getElementById(`nav-${tabId}`).classList.remove('text-gray-400');
    document.getElementById(`nav-${tabId}`).classList.add('text-blue-600');
    window.scrollTo(0, 0);
}
