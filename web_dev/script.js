/* ==========================================================================
   CV de Jonatan Aguilar - Script Principal de Interactividad
   ========================================================================== */

// --- Envolvemos todo en un listener que espera a que el DOM esté listo ---
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SELECCIONES GLOBALES DEL DOM (Declaradas una sola vez) ---
    // Seleccionamos todos los elementos de la página que vamos a manipular.
    const bodyElement = document.body;
    const profilePhoto = document.querySelector('.profile-photo');
    
    // Elementos del Saludo Dinámico
    const greetingElement = document.getElementById('greeting-text');
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');
    const greetingIcon = document.getElementById('greeting-icon');

    // Elementos para el PDF
    const downloadButton = document.getElementById('download-btn');

    // Elementos de los Botones de Acción
    const toggleExperienceBtn = document.getElementById('toggle-experience-btn');
    const experienceSection = document.getElementById('experiencia');
    const experienceIcon = toggleExperienceBtn.querySelector('i');
    
    const toggleContactBtn = document.getElementById('toggle-contact-btn');
    const headerText = document.querySelector('.header-text');
    const contactIcon = toggleContactBtn.querySelector('i');

    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    const themeIcon = toggleThemeBtn.querySelector('i');

    // Elementos del Buscador de Habilidades
    const searchInput = document.getElementById('skill-search-input');
    const allFilterableElements = document.querySelectorAll('.filterable-skill, .skill-container');

    // --- 2. VARIABLES DE ESTADO ---
    // Guardamos datos que pueden cambiar o que usamos a menudo.
    const originalPhotoSrc = 'cv foto.webp';
    const minimalPhotoSrc = 'profile_black.webp';

    // --- 3. DEFINICIÓN DE FUNCIONES ---
    // Aquí definimos toda la lógica que se ejecutará.

    /**
     * Actualiza el saludo, hora, fecha e icono dinámicos cada segundo.
     */
    function updateDynamicGreeting() {
        const now = new Date();
        const hours = now.getHours();
        let greeting, iconClass;

        if (hours < 12) {
            greeting = 'Buenos días';
            iconClass = 'bi bi-brightness-high-fill text-warning';
        } else if (hours < 19) {
            greeting = 'Buenas tardes';
            iconClass = 'bi bi-sunset-fill text-info';
        } else {
            greeting = 'Buenas noches';
            iconClass = 'bi bi-moon-stars-fill text-light';
        }

        const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('es-ES', dateOptions);

        greetingElement.textContent = greeting;
        timeElement.textContent = timeString;
        dateElement.textContent = dateString.charAt(0).toUpperCase() + dateString.slice(1);
        greetingIcon.className = iconClass;
    }

    /**
     * Genera un PDF optimizado de la página.
     */
    function generatePDF() {
        const currentPhotoSrc = profilePhoto.src;
        profilePhoto.src = minimalPhotoSrc;
        bodyElement.classList.add('pdf-view');

        const opt = {
            margin: 0.5, filename: 'CV-Jonatan-Aguilar.pdf', image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(bodyElement).save().then(() => {
            bodyElement.classList.remove('pdf-view');
            profilePhoto.src = currentPhotoSrc;
        });
    }

    /**
     * Muestra u oculta la sección de experiencia laboral.
     */
    function toggleExperience() {
        experienceSection.classList.toggle('section-hidden');
        experienceIcon.className = experienceSection.classList.contains('section-hidden')
            ? 'bi bi-patch-plus-fill me-2'
            : 'bi bi-patch-check-fill me-2';
    }

    /**
     * Alterna la vista de contacto entre detallada y minimalista.
     */
    function toggleContactView() {
        headerText.classList.toggle('minimal-view');
        if (headerText.classList.contains('minimal-view')) {
            profilePhoto.src = minimalPhotoSrc;
            contactIcon.className = 'bi bi-person-fill me-2';
            toggleContactBtn.childNodes[2].nodeValue = ' Contacto Básico';
        } else {
            profilePhoto.src = originalPhotoSrc;
            contactIcon.className = 'bi bi-person-lines-fill me-2';
            toggleContactBtn.childNodes[2].nodeValue = ' Contacto Detallado';
        }
    }

    /**
     * Alterna entre el tema oscuro y el claro.
     */
    function toggleTheme() {
        bodyElement.classList.toggle('light-mode');
        if (bodyElement.classList.contains('light-mode')) {
            profilePhoto.src = minimalPhotoSrc;
            themeIcon.className = 'bi bi-moon-stars-fill me-2';
            toggleThemeBtn.childNodes[2].nodeValue = ' Modo Oscuro';
        } else {
            profilePhoto.src = originalPhotoSrc;
            themeIcon.className = 'bi bi-sun-fill me-2';
            toggleThemeBtn.childNodes[2].nodeValue = ' Modo Claro';
        }
    }

    /**
     * Filtra las habilidades visibles según el término de búsqueda.
     */
    function filterSkills() {
        const searchTerm = searchInput.value.toLowerCase();
        allFilterableElements.forEach(element => {
            if (element.classList.contains('skill-container')) {
                const items = element.querySelectorAll('.filterable-item');
                let hasVisibleItem = false;
                items.forEach(item => {
                    if (item.textContent.toLowerCase().includes(searchTerm)) {
                        item.classList.remove('hidden-skill');
                        hasVisibleItem = true;
                    } else {
                        item.classList.add('hidden-skill');
                    }
                });
                element.classList.toggle('hidden-skill', !hasVisibleItem);
            } else {
                element.classList.toggle('hidden-skill', !element.textContent.toLowerCase().includes(searchTerm));
            }
        });
    }

    // --- 4. INICIALIZACIÓN Y EVENT LISTENERS ---
    // Aquí es donde conectamos las funciones a los eventos del usuario.
    
    // Iniciar el reloj
    setInterval(updateDynamicGreeting, 1000);
    updateDynamicGreeting();

    // Conectar botones a sus funciones
    downloadButton.addEventListener('click', generatePDF);
    toggleExperienceBtn.addEventListener('click', toggleExperience);
    toggleContactBtn.addEventListener('click', toggleContactView);
    toggleThemeBtn.addEventListener('click', toggleTheme);

    // Conectar el buscador
    searchInput.addEventListener('input', filterSkills);
});