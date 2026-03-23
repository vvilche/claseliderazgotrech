/* Data for Sessions based on Facilitator Script */
const sessions = [
    {
        num: 1,
        modality: "Presencial",
        title: "Claridad del Mensaje Comercial",
        desc: "Estructurar un mensaje de ventas corto, claro y centrado en el cliente. Pasar de la información a la dirección.",
        objective: "Lograr estructurar un mensaje de ventas corto, claro y contundente sobre lo que cada uno vende.",
        ejemplo: 'Dolor: "Empresas pierden control" -> Solución: "Software centraliza" -> Impacto: "Ahorra horas" -> Diferenciación: "Implementa en semanas".',
        leadershipCapsule: "El liderazgo comercial comienza con la claridad. Un líder confuso genera equipos inseguros. Tu lenguaje define la propuesta de valor del equipo.",
        pptOutline: [
            "1. Rompe-hielo (15 min): Presentación grupal. ¿Qué vendes realmente? (Revisión del Autodiagnóstico).",
            "2. Conversación (10 min): El mito de hablar bonito vs dirección comercial.",
            "3. Teoría (15 min): La Secuencia: Dolor > Solución > Impacto > Diferenciación.",
            "4. Debate de Equipo (10 min): ¿Nuestros clientes entienden al instante nuestro valor?",
            "5. Actividad de Cierre (10 min): Construcción y revisión del Elevator Pitch."
        ],
        deliverable: "Elevator Pitch (60 seg): Construir pitch con estructura Dolor → Solución → Impacto → Diferenciación con impacto medible.",
        resources: [
            { type: "video", text: "Start with Why - Simon Sinek", url: "https://www.youtube.com/watch?v=u4ZoJKF_VuA" },
            { type: "video", text: "How to Sound Smart - Will Stephen", url: "https://www.youtube.com/watch?v=8S0FDjFBj8o" }
        ]
    },
    {
        num: 2,
        modality: "Teams",
        title: "Presencia y Lenguaje Ejecutivo",
        desc: "Dominio de la postura (espalda recta), voz (ritmo medio) y el silencio estratégico para proyectar seguridad.",
        objective: "Aprender a utilizar la postura, la voz y el silencio para proyectar autoridad y seguridad frente al cliente.",
        ejemplo: 'Cliente: "No tengo mucho tiempo." Respuesta (con pausa y contacto visual): "Perfecto. Voy directo a lo relevante."',
        leadershipCapsule: "El cuerpo comunica antes que la voz. El líder ejecutivo domina su espacio, sea físico o virtual, unificando al equipo.",
        pptOutline: [
            "1. Check-in (10 min): ¿Cómo proyectamos seguridad en virtualidad?",
            "2. Teoría (15 min): Postura, modulación y el silencio como ancla de autoridad.",
            "3. Conversación (15 min): Errores comunes del equipo en videollamadas con clientes.",
            "4. Práctica (10 min): Dinámica grupal leyendo un párrafo monótono vs persuasivo.",
            "5. Cierre (10 min): Tareas de cámara y feedback mutuo."
        ],
        deliverable: "Role-play rápido aplicando postura firme, voz pausada y uso de silencios para ordenar información.",
        resources: [
            { type: "video", text: "Your body language may shape who you are - Amy Cuddy", url: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc" },
            { type: "video", text: "Body Language for Video Calls", url: "https://www.youtube.com/watch?v=cFTiGecOoqM" }
        ]
    },
    {
        num: 3,
        modality: "Teams",
        title: "Storytelling Comercial",
        desc: "Estructurar casos de éxito comerciales utilizando la narrativa: Contexto -> Problema -> Intervención -> Resultado.",
        objective: "Conectar con el cliente y demostrar valor a través de historias de negocio estructuradas.",
        ejemplo: '"Cliente retail con caos en bodega → implementación de nuestro sistema → reducción de pérdidas en un 30%."',
        leadershipCapsule: "Los datos convencen, pero las historias mueven a la acción. El líder inspira narrando la visión compartida de la empresa.",
        pptOutline: [
            "1. Apertura (10 min): Intercambio de las peores anécdotas con clientes.",
            "2. Teoría Narrativa (15 min): Contexto > Problema > Intervención > Resultado.",
            "3. Conversación (15 min): Adaptando nuestros casos de éxito a este framework mental.",
            "4. Taller Express (10 min): Armar un caso de 2 minutos sobre un cliente actual.",
            "5. Feedback (10 min): Revisión de 3 historias al azar."
        ],
        deliverable: "Redactar y presentar un caso de éxito real de la empresa siguiendo los 4 pasos de la estructura narrativa.",
        resources: [
            { type: "video", text: "The magical science of storytelling - David JP Phillips", url: "https://www.youtube.com/watch?v=Nj-hdQMa3uA" },
            { type: "video", text: "How to speak so that people want to listen - Julian Treasure", url: "https://www.youtube.com/watch?v=eIho2S0ZahI" }
        ]
    },
    {
        num: 4,
        modality: "Teams",
        title: "Simplificación Técnica",
        desc: "Técnicas para traducir el lenguaje técnico a variables de negocio directo (dinero, tiempo, riesgo, imagen).",
        objective: "Entender que el cliente compra resultados, no tecnología, y adaptar el mensaje a tomadores de decisión no técnicos.",
        ejemplo: 'Mal: "Arquitectura híbrida con microservicios". Bien: "No requiere cambios en su operación actual".',
        leadershipCapsule: "La empatía del experto: Liderar es hacer que lo sumamente complejo sea accesible para todo cliente y colega.",
        pptOutline: [
            "1. Discusión (10 min): ¿Cuándo hemos espantado a un gerente por sonar muy técnicos?",
            "2. Teoría (15 min): Técnica Feynman y los 4 pilares (Dinero, Tiempo, Riesgo, Imagen).",
            "3. Taller (20 min): Traducción de features de nuestro producto a valor de negocio.",
            "4. Role-Play (10 min): Explicar la solución a un 'niño de 12 años'.",
            "5. Tareas (5 min): Compromiso de simplicidad."
        ],
        deliverable: "Técnica de traducción: Explicar su solución tecnológica más compleja en simples términos de impacto de negocio.",
        resources: [
            { type: "video", text: "Talk nerdy to me - Melissa Marshall", url: "https://www.youtube.com/watch?v=yIEQAoXFAUQ" },
            { type: "video", text: "The Feynman Technique 2.0", url: "https://www.youtube.com/watch?v=tkm0JZcj0kM" }
        ]
    },
    {
        num: 5,
        modality: "Presencial",
        title: "Escucha Activa",
        desc: "Los tres niveles de escucha (Superficial, Interpretativa, Estratégica) y el arte de formular preguntas de alto impacto.",
        objective: "Escuchar estratégicamente para descubrir la verdadera preocupación del cliente.",
        ejemplo: 'Pregunta Mala: "¿Le interesa?". Pregunta Buena: "¿Qué le preocupa hoy sobre sus proveedores actuales?".',
        leadershipCapsule: "El mayor problema de la comunicación es que escuchamos para responder. El líder genuino escucha para entender y unificar.",
        pptOutline: [
            "1. Rompe-hielo (10 min): Ejercicio presencial de 'escucha a ciegas'.",
            "2. Teoría (15 min): Niveles de escucha y evitar el instinto de saltar a la 'venta precoz'.",
            "3. Debate (10 min): Las 5 preguntas más poderosas que podemos hacerle a nuestros clientes.",
            "4. Práctica de Indagación (20 min): Role-play 1-a-1 de descubrimiento puro.",
            "5. Reflexión Final (5 min): El silencio como herramienta."
        ],
        deliverable: "Taller de sondeo: Transformar 5 afirmaciones consultivas en 5 preguntas estratégicas de indagación.",
        resources: [
             { type: "video", text: "The power of listening - William Ury", url: "https://www.youtube.com/watch?v=saXfavo1OQo" },
            { type: "video", text: "10 ways to have a better conversation - Celeste Headlee", url: "https://www.youtube.com/watch?v=R1vskiVDwl4" }
        ]
    },
    {
        num: 6,
        modality: "Teams",
        title: "Lectura del Cliente",
        desc: "Identificación de perfiles de clientes (Técnico, Financiero, Político) y adaptación dinámica del mensaje comercial.",
        objective: "Aprender a calibrar el discurso en vivo según la personalidad y KPI's del interlocutor.",
        ejemplo: "Al Técnico: Arquitectura; al Financiero: ROI; al Político: Imagen corporativa y riesgos controlados.",
        leadershipCapsule: "Liderar la venta es adaptar tu lenguaje al ecosistema emocional y racional del decisor que tienes enfrente.",
        pptOutline: [
            "1. Apertura (10 min): Discutir los perfiles más difíciles que el equipo enfrenta mensualmente.",
            "2. Teoría (15 min): Radiografía del CFO, el CTO y el Sponsor Ejecutivo.",
            "3. Taller Colaborativo (20 min): Construir la 'Matriz de Adaptación' de la empresa.",
            "4. Desafío en vivo (10 min): Cambiar el pitch on-the-fly según indicaciones del profesor.",
            "5. Cierre (5 min): Anclajes de empatía."
        ],
        deliverable: "Matriz de Adaptación: Tomar el pitch de la Sesión 1 y presentarlo de 3 formas distintas según el tipo de cliente.",
        resources: [
            { type: "video", text: "Presenting in a Hybrid World (HBR Channel)", url: "https://www.youtube.com/watch?v=1XkG7LqXyCQ" },
            { type: "video", text: "How to know your audience - Communication Skills", url: "https://www.youtube.com/watch?v=ZJcqoA_sZFA" }
        ]
    },
    {
        num: 7,
        modality: "Teams",
        title: "Manejo de Objeciones",
        desc: "Entender que una objeción es interés con dudas. Aplicación estricta del método: Validar -> Explorar -> Responder.",
        objective: "Cambiar la perspectiva sobre el rechazo y aplicar una metodología táctica para destrabar negociaciones.",
        ejemplo: 'Cliente: "Está muy caro." -> Validar presupuesto, Explorar metas de ahorro, Responder con cálculo de impacto.',
        leadershipCapsule: "Una objeción no es un ataque personal, es una petición de ayuda. El líder recibe el 'No' con curiosidad estratégica.",
        pptOutline: [
            "1. Descarga del equipo (10 min): ¿Cuáles son las 3 objeciones que más nos paralizan?",
            "2. Teoría (15 min): La metodología V-E-R (Validar, Explorar, Responder).",
            "3. Debate Estratégico (15 min): Estandarización de las respuestas del equipo a objeciones comunes.",
            "4. Role-Play Intensivo (15 min): Simulaciones aleatorias por turnos.",
            "5. Recap (5 min): Transformando rechazo en oportunidad."
        ],
        deliverable: "Role-play en tríos: Aplicar la técnica Validar-Explorar-Responder ante la objeción de 'estamos operando bien con el actual'.",
        resources: [
            { type: "video", text: "Think Fast, Talk Smart - Matt Abrahams", url: "https://www.youtube.com/watch?v=HAnw168huqA" },
            { type: "video", text: "Handling Objections in Sales - Brian Tracy", url: "https://www.youtube.com/watch?v=N4T14I8B_4k" }
        ]
    },
    {
        num: 8,
        modality: "Teams",
        title: "Objeciones Complejas",
        desc: "Sorteando bloqueadores estratégicos invisibles: Riesgo percibido, Política interna y Prioridad de la solución.",
        objective: "Desarrollar herramientas para manejar evasivas corporativas complejas donde el precio no es el verdadero freno.",
        ejemplo: 'Cliente: "No es prioridad hoy." -> Pregunta Táctica: "¿Qué tendría que pasar operativamente para que lo fuera?".',
        leadershipCapsule: "El líder navega las aguas lodosas de la inacción y la política interna sin perder jamás el enfoque en la solución real.",
        pptOutline: [
            "1. Check-in (10 min): Análisis de negocios caídos o congelados recientemente.",
            "2. Análisis Psicológico (15 min): El miedo al fracaso, al costo político y a la disrupción.",
            "3. Técnicas Avanzadas (15 min): Costo de Inacción (COI) y Preguntas Desbloqueadoras.",
            "4. Práctica (15 min): 'La Silla Caliente' con el facilitador (alta presión).",
            "5. Cierre (5 min): Autorescate en reuniones lentas."
        ],
        deliverable: "La Silla Caliente: Responder en menos de 60 segundos a evasivas de prioridad o política interna formuladas por el facilitador.",
        resources: [
            { type: "video", text: "The power of vulnerability - Brené Brown", url: "https://www.youtube.com/watch?v=iCvmsMzlF7o" },
            { type: "video", text: "Imposter Syndrome in IT & Tech", url: "https://www.youtube.com/watch?v=ZkwqZfvbdFw" }
        ]
    },
    {
        num: 9,
        modality: "Presencial",
        title: "Simulación Integral",
        desc: "Práctica del ciclo comercial completo: Apertura, Diagnóstico, Presentación, Manejo de Objeciones y Cierre.",
        objective: "Demostrar fluidez, estructura y seguridad integrando todas las habilidades desarrolladas en un entorno de alta presión.",
        ejemplo: 'Role-play simulando una reunión cumbre donde el cliente se muestra duro: "Tengo 10 minutos exactos, dime qué tienes".',
        leadershipCapsule: "Bajo presión extrema no nos elevamos a nuestras expectativas, caemos inexorablemente al nivel de nuestro entrenamiento técnico.",
        pptOutline: [
            "1. Organización (10 min): Definición de roles (Cliente Hostil, Consultor, Observadores).",
            "2. Preparación de Casos (10 min): Planteamiento del escenario Real World.",
            "3. Rondas de Simulación Ciega (30 min): 3 simulaciones de 10 minutos sin interrupción.",
            "4. Reflexión y Calibración (10 min): Feedback 360°, honesto y técnico."
        ],
        deliverable: "Pitch Final: Aportar un escenario real y ejecutar una simulación de venta de 10 minutos con retroalimentación 360° del grupo.",
        resources: [
            { type: "video", text: "Best tech presentation patterns", url: "https://www.youtube.com/watch?v=Unzc731iCUY" },
            { type: "video", text: "How to Pitch - Real World Examples", url: "https://www.youtube.com/watch?v=i6O98IG2anQ" }
        ]
    },
    {
        num: 10,
        modality: "Presencial",
        title: "Transferencia al Terreno",
        desc: "Construcción de compromisos tangibles para el equipo y el día a día. ¿Qué cambiar? ¿Cómo medir? ¿Cuándo aplicar?",
        objective: "Asegurar que el nuevo lenguaje unificado y la oratoria comercial se consoliden como disciplina de equipo inquebrantable.",
        ejemplo: 'Facilitador: "La oratoria comercial es entrenamiento brutal y disciplina. No es hablar bonito, es hablar claro. Salgan y vendan más."',
        leadershipCapsule: "El conocimiento sin acción es soberbia. El verdadero liderazgo comercial se vive en la calle, con el siguiente cliente que nos desafía.",
        pptOutline: [
            "1. Memoria Activa (10 min): ¿Cuáles fueron los 3 hits de insight del programa?",
            "2. Taller de Alineación (20 min): ¿Qué procesos vamos a estandarizar desde hoy?",
            "3. Trabajo Individual (10 min): Formulario de acción 'Mi compromiso comercial'.",
            "4. Ceremonia de Cierre (15 min): Firma del compromiso grupal.",
            "5. Palabras finales del Facilitador (5 min)."
        ],
        deliverable: "Entregar Plan Personal firmando un compromiso de 3 acciones comunicacionales a cambiar en las próximas 2 semanas.",
        resources: [
            { type: "video", text: "Habits of successful teams - Tedx", url: "https://www.youtube.com/watch?v=vVjE_K8xY0c" },
            { type: "video", text: "Discipline Equals Freedom - Jocko Willink", url: "https://www.youtube.com/watch?v=_tEawEGqP40" }
        ]
    }
];

function renderSessions() {
    const timeline = document.querySelector('.timeline');
    
    sessions.forEach((session, index) => {
        let resourcesHTML = session.resources.map(res => `
            <a href="${res.url}" class="resource-link" target="_blank" rel="noopener noreferrer">
                <i data-lucide="${res.type}"></i>
                <span>${res.text}</span>
            </a>
        `).join('');

        let slidesHTML = session.pptOutline.map(slide => `
            <li>${slide}</li>
        `).join('');

        const element = document.createElement('div');
        element.className = 'session-item reveal';
        element.style.transitionDelay = `${(index % 5) * 0.1}s`;
        
        let modalityClass = session.modality.toLowerCase() === 'presencial' ? 'presencial' : 'teams';
        let modalityIcon = modalityClass === 'presencial' ? 'users' : 'monitor';

        element.innerHTML = `
            <div class="session-number">${session.num}</div>
            <div class="session-content">
                <div class="modality-badge ${modalityClass}">
                    <i data-lucide="${modalityIcon}" style="width: 14px; height: 14px;"></i>
                    ${session.modality}
                </div>
                <h3>${session.title}</h3>
                <p>${session.desc}</p>
                
                <div class="leadership-capsule">
                    <i data-lucide="award" class="icon-lucide"></i>
                    <div class="leadership-capsule-text">
                        <strong>Cápsula de Liderazgo Módulo ${session.num}</strong>
                        <p>"${session.leadershipCapsule}"</p>
                    </div>
                </div>

                <div class="session-metadata">
                    <div class="meta-item">
                        <strong>Objetivo:</strong> ${session.objective}
                    </div>
                    <div class="meta-item ejemplo-practico">
                        <i data-lucide="lightbulb" class="icon-lucide text-neon" style="color: var(--accent-primary);"></i>
                        <span><strong>Ejemplo Práctico:</strong> ${session.ejemplo}</span>
                    </div>
                    <div class="meta-item deliverable">
                        <i data-lucide="crosshair" class="icon-lucide text-neon"></i>
                        <span><strong>Entregable:</strong> ${session.deliverable}</span>
                    </div>
                </div>
                
                <div class="ppt-list">
                    <h4><i data-lucide="presentation" class="icon-lucide"></i> Contenido Presentación (PPT Expandida)</h4>
                    <ul>
                        ${slidesHTML}
                    </ul>
                </div>

                <div class="resources-box">
                    <h4><i data-lucide="folder-open" class="icon-lucide"></i> Documentos y Material Verificado</h4>
                    ${resourcesHTML}
                </div>
            </div>
        `;
        
        timeline.appendChild(element);
    });
}

// Interactive Diagnostic Tool Logic
function initDiagnosticoForm() {
    const form = document.getElementById('diagnostico-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const cargo = document.getElementById('cargo').value;
        const vende = document.getElementById('que-vendes').value;
        const liderazgo = document.getElementById('liderazgo').value;
        
        document.getElementById('res-nombre').innerText = nombre;
        document.getElementById('res-cargo').innerText = cargo;
        document.getElementById('res-vende').innerText = '"' + vende + '"';
        document.getElementById('res-num').innerText = liderazgo + '/10';
        
        setTimeout(() => {
            const w = (parseInt(liderazgo) / 10) * 100;
            document.getElementById('res-bar').style.width = w + '%';
        }, 100);
        
        form.style.display = 'none';
        document.getElementById('perfil-resultado').style.display = 'block';
    });
}

// Scroll Reveal Animation
function revealOnScroll() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Navbar Scroll Effect
function handleNavbar() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 14, 23, 0.9)';
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'var(--bg-glass)';
        nav.style.boxShadow = 'none';
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initDiagnosticoForm();
    renderSessions();
    // Re-initialize Lucide icons for the newly injected elements
    lucide.createIcons();

    // Initial check for reveals
    revealOnScroll();
    handleNavbar();
});

window.addEventListener("scroll", () => {
    revealOnScroll();
    handleNavbar();
});
