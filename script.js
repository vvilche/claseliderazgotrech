/* Data for Sessions based on Facilitator Script */
const sessions = [
    {
        num: 1,
        date: "Lunes 23 de Marzo",
        modality: "Teams",
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
        interactiveQuestion: {
            question: "Haz el vínculo: Escribe tu 'Elevator Pitch' estructurando: Dolor de tu cliente > Tu Solución > Impacto medible.",
            placeholder: "Ej: Mi cliente perdía visibilidad global. Instalamos el dashboard y en 2 semanas ahorraron 40 horas operativas."
        },
        resources: [
            { type: "video", text: "Start with Why - Simon Sinek", url: "https://www.youtube.com/watch?v=u4ZoJKF_VuA", question: "¿Cómo puedes empezar tu próxima reunión de ventas explicando el 'Por Qué' (tu impacto) antes de hablar de tu software (el 'Qué')?" },
            { type: "video", text: "How to Sound Smart - Will Stephen", url: "https://www.youtube.com/watch?v=8S0FDjFBj8o", question: "¿Qué gesto o muletilla (verbal o corporal) viste en el video que sueles hacer tú por nerviosismo y cómo lo evitarás?" }
        ],
        slides: [
            {
                title: "Claridad del Mensaje Comercial",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">De la Información a la Dirección</p>
                          <div style="text-align: center;">
                              <i data-lucide="target" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`,
                notes: "Dar la bienvenida con energía. Mencionar el formato: 'Será 100% interactivo. Hoy no venimos a escuchar teoría, venimos a reestructurar cómo vendemos'."
            },
            {
                title: "¿Qué vendemos realmente?",
                content: `<p style="font-size: 1.4rem; color: var(--accent-secondary); margin-bottom: 1.5rem; text-align: center;">Si a 10 vendedores de la misma empresa les preguntamos qué venden, obtenemos 10 respuestas distintas.</p>
                          <div style="background: rgba(0,0,0,0.3); padding: 2rem; border-radius: 12px; text-align: center; border: 1px dashed var(--border-glass);">
                              <i data-lucide="users" style="width: 64px; height: 64px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                              <p>Actividad: Pedir a 3 personas al azar que digan en <strong>una frase</strong> qué vende la empresa.</p>
                          </div>`,
                notes: "Acá es crítico no juzgar si alguien lo dice 'mal'. El objetivo es demostrar la falta de ALINEACIÓN."
            },
            {
                title: "El Mito vs. La Realidad",
                content: `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                            <div style="background: rgba(239, 68, 68, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3);">
                                <h3 style="color: #ef4444; margin-bottom: 1rem;"><i data-lucide="x-circle"></i> Mito: "Hablar Bonito"</h3>
                                <ul style="list-style-type: none; padding: 0;">
                                    <li style="margin-bottom: 0.8rem;"><i data-lucide="minus" style="width:16px; color:#ef4444;"></i> Entretener y caer bien</li>
                                    <li style="margin-bottom: 0.8rem;"><i data-lucide="minus" style="width:16px; color:#ef4444;"></i> Hablar sin pausas</li>
                                    <li style="margin-bottom: 0.8rem;"><i data-lucide="minus" style="width:16px; color:#ef4444;"></i> Recitar características técnicas</li>
                                </ul>
                            </div>
                            <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
                                <h3 style="color: #10b981; margin-bottom: 1rem;"><i data-lucide="check-circle"></i> Realidad: Dirección Comercial</h3>
                                <ul style="list-style-type: none; padding: 0;">
                                    <li style="margin-bottom: 0.8rem;"><i data-lucide="check" style="width:16px; color:#10b981;"></i> Diagnosticar el dolor real</li>
                                    <li style="margin-bottom: 0.8rem;"><i data-lucide="check" style="width:16px; color:#10b981;"></i> Liderar la estructura de la conversación</li>
                                    <li style="margin-bottom: 0.8rem;"><i data-lucide="check" style="width:16px; color:#10b981;"></i> Simplificar lo complejo para negocio</li>
                                </ul>
                            </div>
                          </div>`,
                notes: "El liderazgo comercial comienza con la claridad. Un líder confuso genera equipos inseguros. Tu lenguaje define la propuesta de valor del equipo."
            },
            {
                title: "La Secuencia de Impacto",
                content: `<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 3rem;">
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid #ef4444; color: #ef4444; font-weight: bold; font-size: 1.5rem;">DOLOR</div></div>
                            <i data-lucide="arrow-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid var(--accent-secondary); color: var(--accent-secondary); font-weight: bold; font-size: 1.5rem;">SOLUCIÓN</div></div>
                            <i data-lucide="arrow-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid #10b981; color: #10b981; font-weight: bold; font-size: 1.5rem;">IMPACTO</div></div>
                            <i data-lucide="arrow-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid var(--accent-primary); color: var(--accent-primary); font-weight: bold; font-size: 1.2rem;">DIFERENCIA</div></div>
                          </div>`,
                notes: "El Error Tech Común: Saltar directamente a la 'Solución' y 'Diferenciación' técnica (ej: 'nuestra arquitectura es serverless') antes de justificar el Dolor e Impacto en negocio."
            },
            {
                title: "El Test de los 5 Segundos",
                content: `<div style="text-align: center; padding: 3rem;">
                              <h2 style="font-size: 2.5rem; color: #fff; margin-bottom: 2rem;">¿Nuestros clientes entienden al instante nuestro valor?</h2>
                              <p style="font-size: 1.5rem; color: var(--text-muted);">Escala del 1 al 10: Sinceramente, ¿Qué tan fácil es para tu prospecto entenderte en la primera reunión?</p>
                          </div>`,
                notes: "Dinámica en Teams: Pedir que usen el chat para responder. Leer las respuestas más bajas. Problema revelado: Usualmente es culpa de usar jerga excesivamente técnica."
            },
            {
                title: "Construye tu Elevator Pitch",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="pen-tool" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Taller Express</h3>
                              <p style="font-size: 1.4rem; margin-bottom: 1rem;">Entra a la plataforma web > Sesión 1 > Zona de Reflexión</p>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">Redacta tu propio Elevator Pitch siguiendo estrictamente la Secuencia de Impacto.</p>
                          </div>`,
                notes: "Ejercicio Individual (5 min). Luego Hot Seat (10 min): Escoger a 2 'víctimas' que lean lo que escribieron. Feedback correctivo ultra-rápido para pulir la grasa del mensaje."
            }
        ]
    },
    {
        num: 2,
        date: "Miércoles 25 de Marzo",
        modality: "Presencial",
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
        interactiveQuestion: {
            question: "Autoevaluación: ¿En qué momentos de tu presentación comercial sueles perder seguridad visual/vocal y cómo puedes corregirlo?",
            placeholder: "Ej: Cuando me preguntan por el precio suelo hablar rápido y mirar abajo. Desde hoy haré silencio de 2 segundos."
        },
        resources: [
            { type: "video", text: "Your body language may shape who you are - Amy Cuddy", url: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc", question: "¿En qué momento de alto estrés presencial podrías aplicar una 'Power Pose' de 2 minutos antes de la reunión comercial?" },
            { type: "video", text: "Body Language for Video Calls", url: "https://www.youtube.com/watch?v=cFTiGecOoqM", question: "En tu próxima llamada por Teams, ¿qué ajuste harás en la cámara o postura para proyectar 100% de atención?" }
        ],
        slides: [
            {
                title: "Presencia y Lenguaje Ejecutivo",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">El Cuerpo Comunica Antes que la Voz</p>
                          <div style="text-align: center;">
                              <i data-lucide="user-check" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`
            },
            {
                title: "¿Cómo Proyectamos Seguridad?",
                content: `<p style="font-size: 1.4rem; color: var(--accent-secondary); margin-bottom: 1.5rem; text-align: center;">El 55% de la comunicación es lenguaje corporal.</p>
                          <div style="background: rgba(0,0,0,0.3); padding: 2rem; border-radius: 12px; text-align: center; border: 1px dashed var(--border-glass);">
                              <i data-lucide="video" style="width: 64px; height: 64px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                              <p style="font-size: 1.2rem;">Actividad: Evalúa tu propia postura en cámara. ¿Miras al lente o a la pantalla?</p>
                          </div>`
            },
            {
                title: "El Poder del Silencio",
                content: `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                            <div style="background: rgba(239, 68, 68, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3);">
                                <h3 style="color: #ef4444; margin-bottom: 1rem;"><i data-lucide="x-circle"></i> Error: Llenar el Vacío</h3>
                                <ul style="list-style-type: none; padding: 0;">
                                    <li style="margin-bottom: 0.8rem; font-size: 1.2rem;"><i data-lucide="minus" style="width:16px; color:#ef4444;"></i> Uso de muletillas ("ehhh", "mmm")</li>
                                    <li style="margin-bottom: 0.8rem; font-size: 1.2rem;"><i data-lucide="minus" style="width:16px; color:#ef4444;"></i> Hablar rápido por nerviosismo</li>
                                </ul>
                            </div>
                            <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
                                <h3 style="color: #10b981; margin-bottom: 1rem;"><i data-lucide="check-circle"></i> Acierto: Pausa Estratégica</h3>
                                <ul style="list-style-type: none; padding: 0;">
                                    <li style="margin-bottom: 0.8rem; font-size: 1.2rem;"><i data-lucide="check" style="width:16px; color:#10b981;"></i> Da peso a tu afirmación</li>
                                    <li style="margin-bottom: 0.8rem; font-size: 1.2rem;"><i data-lucide="check" style="width:16px; color:#10b981;"></i> Proyecta control y autoridad</li>
                                </ul>
                            </div>
                          </div>`
            },
            {
                title: "Práctica de Oratoria",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="mic" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Taller de Voz</h3>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">Lee el texto asignado aplicando pausas de 2 segundos después de cada punto.</p>
                          </div>`
            }
        ]
    },
    {
        num: 3,
        date: "Viernes 27 de Marzo",
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
        interactiveQuestion: {
            question: "Aterriza tu historia: Piensa en tu cliente más exitoso. Resume su caso en Contexto > Problema > Resultado.",
            placeholder: "Ej: Contexto: Empresa ABC. Problema: Migración de datos lenta. Resultado: Proyecto entregado 1 mes antes sin downtime."
        },
        resources: [
            { type: "video", text: "The magical science of storytelling - David JP Phillips", url: "https://www.youtube.com/watch?v=Nj-hdQMa3uA", question: "¿Qué neurotransmisor (Dopamina, Oxitocina, Endorfina) crees que tu actual presentación evoca en los clientes?" },
            { type: "video", text: "How to speak so that people want to listen - Julian Treasure", url: "https://www.youtube.com/watch?v=eIho2S0ZahI", question: "De los pecados al hablar, ¿crees que tú o tu equipo tienden a 'pontificar' sobre tecnología? ¿Cómo serás más breve?" }
        ],
        slides: [
            {
                title: "Storytelling Comercial",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">Estructurar Casos de Éxito</p>
                          <div style="text-align: center;">
                              <i data-lucide="book-open" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`
            },
            {
                title: "¿Por qué contamos historias?",
                content: `<p style="font-size: 1.4rem; color: var(--accent-secondary); margin-bottom: 1.5rem; text-align: center;">Los datos informan, pero las historias venden.</p>
                          <div style="background: rgba(0,0,0,0.3); padding: 2rem; border-radius: 12px; text-align: center; border: 1px dashed var(--border-glass);">
                              <i data-lucide="brain" style="width: 64px; height: 64px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                              <p style="font-size: 1.2rem;">El cerebro recuerda historias un 22x más que simples hechos técnicos.</p>
                          </div>`
            },
            {
                title: "Método CPIR",
                content: `<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 3rem;">
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid #ef4444; color: #ef4444; font-weight: bold; font-size: 1.2rem;">CONTEXTO</div></div>
                            <i data-lucide="arrow-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid var(--accent-secondary); color: var(--accent-secondary); font-weight: bold; font-size: 1.2rem;">PROBLEMA</div></div>
                            <i data-lucide="arrow-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid #10b981; color: #10b981; font-weight: bold; font-size: 1.1rem;">INTERVENCIÓN</div></div>
                            <i data-lucide="arrow-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid var(--accent-primary); color: var(--accent-primary); font-weight: bold; font-size: 1.2rem;">RESULTADO</div></div>
                          </div>`
            },
            {
                title: "Taller: Tu Caso de Éxito",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="award" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Redacción Narrativa</h3>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">Elige el mejor proyecto que hayas implementado y cuéntalo usando CPIR.</p>
                          </div>`
            }
        ]
    },
    {
        num: 4,
        date: "Lunes 30 de Marzo",
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
        interactiveQuestion: {
            question: "Simplifica tu producto: Si tuvieras que explicarle la solución más compleja que vendes a un gerente comercial, ¿qué le dirías en 1 frase?",
            placeholder: "Ej: En vez de vender 'VPN cifrada 256-bit', vendo 'Tus vendedores trabajarán desde casa sin riesgo a fugas de datos'."
        },
        resources: [
            { type: "video", text: "Talk nerdy to me - Melissa Marshall", url: "https://www.youtube.com/watch?v=yIEQAoXFAUQ", question: "¿Qué característica ultra-técnica de tu producto puedes traducir a una analogía simple y cotidiana como sugiere Melissa?" },
            { type: "video", text: "The Feynman Technique 2.0", url: "https://www.youtube.com/watch?v=tkm0JZcj0kM", question: "Si un cliente con 0% de base en tecnología te preguntara qué vendes, ¿cómo se lo explicarías usando esta técnica?" }
        ],
        slides: [
            {
                title: "Simplificación Técnica",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">Traducir Tecnología a Negocio</p>
                          <div style="text-align: center;">
                              <i data-lucide="layers" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`
            },
            {
                title: "Los 4 Pilares del Negocio",
                content: `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                            <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3); text-align: center;">
                                <i data-lucide="dollar-sign" style="width:48px; height:48px; color:#10b981; margin-bottom:1rem;"></i>
                                <h3 style="color: #10b981;">Dinero</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">Ahorro o Nueva Ganancia</p>
                            </div>
                            <div style="background: rgba(59, 130, 246, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.3); text-align: center;">
                                <i data-lucide="clock" style="width:48px; height:48px; color:#3b82f6; margin-bottom:1rem;"></i>
                                <h3 style="color: #3b82f6;">Tiempo</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">Velocidad de Operación</p>
                            </div>
                            <div style="background: rgba(239, 68, 68, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3); text-align: center;">
                                <i data-lucide="shield-alert" style="width:48px; height:48px; color:#ef4444; margin-bottom:1rem;"></i>
                                <h3 style="color: #ef4444;">Riesgo</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">Mitigación de Desastres</p>
                            </div>
                            <div style="background: rgba(168, 85, 247, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.3); text-align: center;">
                                <i data-lucide="image" style="width:48px; height:48px; color:#a855f7; margin-bottom:1rem;"></i>
                                <h3 style="color: #a855f7;">Imagen</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">Reputación Corporativa</p>
                            </div>
                          </div>`
            },
            {
                title: "Técnica Feynman",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="message-square" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Taller: Analogías</h3>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">Toma tu feature técnico más avanzado y explícalo como si fuese a un niño de 12 años usando una analogía cotidiana.</p>
                          </div>`
            }
        ]
    },
    {
        num: 5,
        date: "Miércoles 1 de Abril",
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
        interactiveQuestion: {
            question: "Escucha el dolor real: Escribe 2 preguntas de indagación estratégica que harás en tu próxima reunión con un nuevo prospecto.",
            placeholder: "Ej: 1. ¿Qué es lo que más te frustra de tu infraestructura actual? 2. ¿Qué pasará si no resuelves este desafío?"
        },
        resources: [
             { type: "video", text: "The power of listening - William Ury", url: "https://www.youtube.com/watch?v=saXfavo1OQo", question: "¿En tu próxima negociación, en qué punto exacto podrías usar la técnica de 'ir al balcón' para no reaccionar impulsivamente?" },
            { type: "video", text: "10 ways to have a better conversation - Celeste Headlee", url: "https://www.youtube.com/watch?v=R1vskiVDwl4", question: "De las 10 reglas, ¿qué comportamiento de mala escucha te comprometes a suprimir con tu próximo prospecto VIP?" }
        ],
        slides: [
            {
                title: "Escucha Activa",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">El Silencio como Herramienta Comercial</p>
                          <div style="text-align: center;">
                              <i data-lucide="ear" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`
            },
            {
                title: "Los 3 Niveles de Escucha",
                content: `<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                            <div style="background: rgba(239, 68, 68, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3); text-align: center;">
                                <h3 style="color: #ef4444;">1. Superficial</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">Escucho para responder. Pienso en mi producto.</p>
                            </div>
                            <div style="background: rgba(59, 130, 246, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.3); text-align: center;">
                                <h3 style="color: #3b82f6;">2. Interpretativa</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">Escucho los datos técnicos que avalan mi PPT.</p>
                            </div>
                            <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3); text-align: center;">
                                <h3 style="color: #10b981;">3. Estratégica</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">Leo el contexto, la frustración y la motivación subyacente.</p>
                            </div>
                          </div>`
            },
            {
                title: "Dinámica: Role-Play a Ciegas",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="mic-off" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Detección de Dolor</h3>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">El interlocutor no puede interrumpir por 2 minutos mientras el "cliente" explica un problema ambiguo. Tu primera respuesta debe ser una pregunta de alto impacto.</p>
                          </div>`
            }
        ]
    },
    {
        num: 6,
        date: "Viernes 3 de Abril",
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
        interactiveQuestion: {
            question: "Mapeo de tu ecosistema: ¿Qué perfiles decisores ves típicamente en tus reuniones y cómo adaptas tu lenguaje a cada uno?",
            placeholder: "Ej: Principalmente enfrento al CTO y al CFO. Al CTO enfatizo SLA; al CFO hablo de ROI a 12 meses."
        },
        resources: [
            { type: "video", text: "Presenting in a Hybrid World (HBR)", url: "https://www.youtube.com/watch?v=1XkG7LqXyCQ", question: "Al presentar a un comité híbrido, ¿cómo asegurarás que los CFOs conectados remotamente no pierdan el hilo financiero?" },
            { type: "video", text: "How to know your audience - Communication Skills", url: "https://www.youtube.com/watch?v=ZJcqoA_sZFA", question: "¿Qué micro-preguntas harás en los primeros 3 minutos para perfilar si tu prospecto es Político, Técnico o Numérico?" }
        ],
        slides: [
            {
                title: "Lectura del Ecosistema Decisor",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">Camaleonismo Comercial</p>
                          <div style="text-align: center;">
                              <i data-lucide="eye" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`
            },
            {
                title: "Perfiles Decisores",
                content: `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                            <div style="background: rgba(59, 130, 246, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.3);">
                                <h3 style="color: #3b82f6; margin-bottom: 1rem;"><i data-lucide="terminal"></i> El Técnico (CTO)</h3>
                                <ul style="list-style-type: none; padding: 0;">
                                    <li style="margin-bottom: 0.8rem; font-size: 1.2rem;"><i data-lucide="check" style="width:16px; color:#3b82f6;"></i> Quiere oír sobre SLA, integraciones, y autonomía de soporte.</li>
                                </ul>
                            </div>
                            <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
                                <h3 style="color: #10b981; margin-bottom: 1rem;"><i data-lucide="briefcase"></i> El Financiero (CFO)</h3>
                                <ul style="list-style-type: none; padding: 0;">
                                    <li style="margin-bottom: 0.8rem; font-size: 1.2rem;"><i data-lucide="check" style="width:16px; color:#10b981;"></i> Le interesa el ROI, flujo de caja, y TCO.</li>
                                </ul>
                            </div>
                          </div>`
            },
            {
                title: "Desafío en Vivo",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="refresh-cw" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Cambio de Pitch (On-the-fly)</h3>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">Exponer un pitch y, a la mitad, el facilitador cambia tu interlocutor de Técnico a Político. Adapta el lenguaje inmediatamente.</p>
                          </div>`
            }
        ]
    },
    {
        num: 7,
        date: "Lunes 6 de Abril",
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
        interactiveQuestion: {
            question: "Baja la guardia del cliente: ¿Cuál es la objeción más difícil que recibes hoy? Escribe cómo la Validarías.",
            placeholder: "Ej: Objeción: 'No tenemos presupuesto este año'. Validación: 'Te entiendo perfectamente, cuidar el flujo de caja es vital...' "
        },
        resources: [
            { type: "video", text: "Think Fast, Talk Smart - Matt Abrahams", url: "https://www.youtube.com/watch?v=HAnw168huqA", question: "¿Qué técnica de manejo de nerviosismo usarás cuando el cliente ataque tu solución integral y sientas presión extrema?" },
            { type: "video", text: "Handling Objections in Sales - Brian Tracy", url: "https://www.youtube.com/watch?v=N4T14I8B_4k", question: "Según Brian, el precio rara vez es la objeción real. ¿Cómo indagarás qué miedo profundo se esconde detrás del 'está muy caro'?" }
        ],
        slides: [
            {
                title: "Manejo Táctico de Objeciones",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">Validar Entendimiento antes de Defender</p>
                          <div style="text-align: center;">
                              <i data-lucide="shield" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`
            },
            {
                title: "La Metodología V-E-R",
                content: `<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 3rem;">
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid var(--accent-secondary); color: var(--accent-secondary); font-weight: bold; font-size: 1.2rem;">VALIDAR</div></div>
                            <i data-lucide="arrow-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid #ef4444; color: #ef4444; font-weight: bold; font-size: 1.2rem;">EXPLORAR</div></div>
                            <i data-lucide="arrow-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid #10b981; color: #10b981; font-weight: bold; font-size: 1.1rem;">RESPONDER</div></div>
                          </div>`
            },
            {
                title: "Role-Play Grupal",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="shield-alert" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Fuego Cruzado</h3>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">El cliente ataca con:"Estamos operando perfecto con su competidor". Apliquen el framework estructurado V-E-R.</p>
                          </div>`
            }
        ]
    },
    {
        num: 8,
        date: "Miércoles 8 de Abril",
        modality: "Presencial",
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
        interactiveQuestion: {
            question: "Acelera el cierre: Recuerda tu último negocio estancado. ¿Qué pregunta 'desbloqueadora' le harás al sponsor interno mañana?",
            placeholder: "Ej: ¿Qué tendría que suceder internamente para que la automatización de este proceso suba a prioridad 1?"
        },
        resources: [
            { type: "video", text: "The power of vulnerability - Brené Brown", url: "https://www.youtube.com/watch?v=iCvmsMzlF7o", question: "¿Cómo puedes admitir estratégicamente una limitación/debilidad de tu servicio para ganar credibilidad absoluta?" },
            { type: "video", text: "Imposter Syndrome in IT & Tech", url: "https://www.youtube.com/watch?v=ZkwqZfvbdFw", question: "¿Qué creencia limitante sueles sentir al venderle a un Director de multinacional, y cómo separarás esa ansiedad de tu valor real?" }
        ],
        slides: [
            {
                title: "Destrabar Objeciones Complejas",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">Sorteando Evasivas Corporativas</p>
                          <div style="text-align: center;">
                              <i data-lucide="unlock" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`
            },
            {
                title: "Bloqueadores Invisibles",
                content: `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                            <div style="background: rgba(239, 68, 68, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3);">
                                <h3 style="color: #ef4444; margin-bottom: 1rem;"><i data-lucide="alert-triangle"></i> Miedo al Costo Político</h3>
                                <p style="font-size: 1.2rem; color: var(--text-muted);">"Nadie despide a un gerente por contratar a IBM". La inacción es la decisión más segura para un prospecto asustado.</p>
                            </div>
                            <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
                                <h3 style="color: #10b981; margin-bottom: 1rem;"><i data-lucide="crosshair"></i> Falsa Prioridad</h3>
                                <p style="font-size: 1.2rem; color: var(--text-muted);">"Lo retomamos en Q4". Si el Dolor no está atado a un impacto inmediato, el proyecto queda congelado indefinidamente.</p>
                            </div>
                          </div>`
            },
            {
                title: "Preguntas Desbloqueadoras",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="key" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Silla Caliente</h3>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">El facilitador planteará una objeción de política interna. Tienes 60 segundos para responder con una Pregunta Desbloqueadora.</p>
                          </div>`
            }
        ]
    },
    {
        num: 9,
        date: "Viernes 10 de Abril",
        modality: "Teams",
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
        interactiveQuestion: {
            question: "El campo de batalla: Construye en tu mente un escenario extremadamente hostil. ¿Qué dirías en el primer minuto para ganar atención?",
            placeholder: "Ej: 'Sé que su tiempo es muy limitado y hay resistencia a la nube pública. Permítame mostrarle en 3 minutos cómo lo mitigamos.'"
        },
        resources: [
            { type: "video", text: "Best tech presentation patterns", url: "https://www.youtube.com/watch?v=Unzc731iCUY", question: "Identifica 1 patrón visual de esta charla que puedas incorporar para limpiar drásticamente tu propio PowerPoint." },
            { type: "video", text: "How to Pitch - Real World Examples", url: "https://www.youtube.com/watch?v=i6O98IG2anQ", question: "Analizando este pitch ganador, ¿qué elemento de 'tensión dramática' usarás para abrir o rematar tu próxima defensa técnica?" }
        ],
        slides: [
            {
                title: "Simulación de Alta Demanda",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">Práctica del Ciclo Completo</p>
                          <div style="text-align: center;">
                              <i data-lucide="swords" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`
            },
            {
                title: "Reglas de Involucramiento",
                content: `<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                            <div style="background: rgba(0, 240, 255, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(0, 240, 255, 0.3); text-align: center;">
                                <h3 style="color: var(--accent-primary);">10 Minutos</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">Pitch de apertura y descubrimiento simulado.</p>
                            </div>
                            <div style="background: rgba(239, 68, 68, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3); text-align: center;">
                                <h3 style="color: #ef4444;">Hostilidad</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">El "cliente" pondrá 2 objeciones duras.</p>
                            </div>
                            <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3); text-align: center;">
                                <h3 style="color: #10b981;">Cierre</h3>
                                <p style="font-size: 1.1rem; color: var(--text-muted);">Debes forzar al cliente a concretar los 'Next Steps'.</p>
                            </div>
                          </div>`
            },
            {
                title: "Feedback 360",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="activity" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Calibración de Equipo</h3>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">Crítica destructiva al comportamiento, constructiva a la persona. La honestidad radical eleva el estándar del equipo.</p>
                          </div>`
            }
        ]
    },
    {
        num: 10,
        date: "Lunes 13 de Abril",
        modality: "Teams",
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
        interactiveQuestion: {
            question: "Firma tu compromiso directo al negocio: ¿Cuáles son las 3 acciones comunicacionales que implementarás desde mañana?",
            placeholder: "Ej: 1. Hacer silencios de 3 seg tras el precio. 2. Responder con Empatía primero. 3. Transformar mis features en dolores."
        },
        resources: [
            { type: "video", text: "Habits of successful teams - Tedx", url: "https://www.youtube.com/watch?v=vVjE_K8xY0c", question: "¿Cuál de estos hábitos de equipo de alto rendimiento empezarás a liderar tú mismo en tu reunión de Pipeline semanal?" },
            { type: "video", text: "Discipline Equals Freedom - Jocko Willink", url: "https://www.youtube.com/watch?v=_tEawEGqP40", question: "Si la rutina da enfoque comercial: ¿Qué comportamiento estricto de agenda adoptarás al prospectar para evitar la procrastinación?" }
        ],
        slides: [
            {
                title: "Transferencia al Terreno",
                content: `<p style="color: var(--text-muted); font-size: 1.5rem; text-align: center; margin-bottom: 2rem;">Disciplina Mantiene el Ritmo Operativo</p>
                          <div style="text-align: center;">
                              <i data-lucide="flag" style="width: 120px; height: 120px; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                          </div>`
            },
            {
                title: "De la Teoría a la Calle",
                content: `<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 3rem;">
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid var(--accent-secondary); color: var(--accent-secondary); font-weight: bold; font-size: 1.2rem;">INSPIRE</div></div>
                            <i data-lucide="chevron-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid #3b82f6; color: #3b82f6; font-weight: bold; font-size: 1.2rem;">ALIGN</div></div>
                            <i data-lucide="chevron-right" style="color: var(--text-muted); width: 32px; height: 32px;"></i>
                            <div style="text-align: center; flex: 1;"><div style="background: var(--bg-dark); padding: 1.5rem; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid #10b981; color: #10b981; font-weight: bold; font-size: 1.1rem;">EXECUTE</div></div>
                          </div>`
            },
            {
                title: "Pacto Final",
                content: `<div style="background: rgba(0, 240, 255, 0.05); padding: 3rem; border-radius: 16px; border: 1px solid var(--accent-primary); text-align: center;">
                              <i data-lucide="users" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 1rem;"></i>
                              <h3 style="margin-bottom: 1.5rem; font-size: 2rem;">Compromiso Grupal</h3>
                              <p style="font-size: 1.4rem; color: var(--accent-secondary);">Firma pública de los 3 acuerdos comerciales de equipo a mantener por el próximo trimestre fiscal.</p>
                          </div>`
            }
        ]
    }
];

function renderSessions() {
    const timeline = document.querySelector('.timeline');
    
    sessions.forEach((session, index) => {
        let modalityClass = session.modality.toLowerCase() === 'presencial' ? 'presencial' : 'teams';
        let modalityIcon = modalityClass === 'presencial' ? 'users' : 'monitor';
        const cardClass = session.modality === 'Presencial' ? 'session-item presencial' : 'session-item';

        let resourcesHTML = session.resources.map((res, resIndex) => `
            <div class="resource-interactive-card" style="margin-bottom: 1.5rem; background: var(--bg-glass); border: 1px solid var(--border-glass); border-radius: 8px; overflow: hidden;">
                <a href="${res.url}" class="resource-link" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; padding: 1rem; border-bottom: 1px solid var(--border-glass); background: rgba(255,255,255,0.02); text-decoration: none;">
                    <i data-lucide="${res.type}" style="margin-right: 10px; color: var(--accent-primary);"></i>
                    <span style="color: var(--text-light); font-weight: 500;">${res.text}</span>
                    <i data-lucide="external-link" style="margin-left: auto; width: 14px; height: 14px; color: var(--text-muted);"></i>
                </a>
                <div class="resource-reflection" style="padding: 1rem;">
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.8rem;"><i data-lucide="edit-3" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px; color: var(--accent-secondary);"></i> <strong>Reflexión:</strong> ${res.question}</p>
                    <textarea id="ref-${session.num}-${resIndex}" placeholder="Escribe tu reflexión sobre este contenido..." rows="2" style="width: 100%; height: 60px; background: rgba(0,0,0,0.2); color: var(--text-light); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 0.8rem; font-family: inherit; font-size: 0.85rem; resize: vertical; margin-bottom: 0.8rem; outline: none; transition: border-color 0.3s ease;" onfocus="this.style.borderColor='var(--accent-primary)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'"></textarea>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span class="save-status" id="status-ref-${session.num}-${resIndex}" style="font-size: 0.8rem; font-weight: 500;"></span>
                        <button onclick="saveResourceReflection(${session.num}, ${resIndex}, this)" style="background: transparent; border: 1px solid var(--accent-primary); color: var(--accent-primary); padding: 0.4rem 0.8rem; border-radius: 4px; font-size: 0.8rem; cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 4px;" onmouseover="this.style.background='rgba(0, 240, 255, 0.1)'" onmouseout="this.style.background='transparent'">Guardar Apunte</button>
                    </div>
                </div>
            </div>
        `).join('');

        let slidesHTML = '';
        if (session.pptOutline) {
            slidesHTML = session.pptOutline.map(slide => {
                const match = slide.match(/^(\d+)\.\s+([^(]+)\s+\((\d+\s+min)\):\s+(.*)$/);
                if (match) {
                    return `
                        <div class="ppt-step-card">
                            <div class="step-badge">${match[1]}</div>
                            <div class="step-header">
                                <span class="step-title">${match[2].trim()}</span>
                                <span class="step-time"><i data-lucide="clock" style="width: 12px; height: 12px;"></i> ${match[3]}</span>
                            </div>
                            <p class="step-desc">${match[4]}</p>
                        </div>
                    `;
                }
                return `<li>${slide}</li>`;
            }).join('');
        }

        let presentationBlockHTML = `
            <div class="ppt-list">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">
                    <h4 style="margin: 0;"><i data-lucide="presentation" class="icon-lucide"></i> Contenido Presentación (PPT Expandida)</h4>
                    ${session.slides ? `<button onclick="openPresentation(${session.num})" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;"><i data-lucide="play" style="width: 16px; height: 16px;"></i> Iniciar Clase</button>` : ''}
                </div>
                <div class="ppt-flow-container">
                    ${slidesHTML}
                </div>
            </div>
        `;

        const element = document.createElement('div');
        element.className = `${cardClass} reveal`;
        element.style.transitionDelay = `${(index % 5) * 0.1}s`;

        element.innerHTML = `
            <div class="session-number">${session.num}</div>
            <div class="session-content">
                <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 1rem; flex-wrap: wrap;">
                    <div class="modality-badge ${modalityClass}">
                        <i data-lucide="${modalityIcon}" style="width: 14px; height: 14px;"></i>
                        ${session.modality}
                    </div>
                    ${session.date ? `
                    <div class="modality-badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-light); border: 1px solid rgba(255,255,255,0.1);">
                        <i data-lucide="calendar" style="width: 14px; height: 14px;"></i>
                        ${session.date}
                    </div>` : ''}
                </div>
                <h3 style="margin-top: 0;">${session.title}</h3>
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
                
                ${presentationBlockHTML}

                <div class="resources-box">
                    <h4><i data-lucide="folder-open" class="icon-lucide"></i> Herramientas de Reflexión y Material</h4>
                    ${resourcesHTML}
                </div>
            </div>
        `;
        
        timeline.appendChild(element);
    });
}

// Global Chart Instances
let lChart, pChart;

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
        
        // Save to localStorage
        let data = JSON.parse(localStorage.getItem('clasesLiderazgoData')) || [];
        data.push({ nombre, cargo, vende, liderazgo });
        localStorage.setItem('clasesLiderazgoData', JSON.stringify(data));
        
        // Display result
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
        
        // Update charts if dashboard is open
        if (document.getElementById('instructor-dashboard').style.display === 'block') {
            renderDashboard();
        }
    });
}

function toggleDashboard() {
    const dash = document.getElementById('instructor-dashboard');
    if (dash.style.display === 'none') {
        dash.style.display = 'block';
        renderDashboard();
        setTimeout(() => dash.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
        dash.style.display = 'none';
    }
}

// Funciones para Reflexiones Interactivas de Sesión
function loadReflections() {
    sessions.forEach(session => {
        session.resources.forEach((res, resIndex) => {
            let savedText = localStorage.getItem(`ref_${session.num}_${resIndex}`);
            if(savedText) {
                let textarea = document.getElementById(`ref-${session.num}-${resIndex}`);
                if(textarea) {
                    textarea.value = savedText;
                }
            }
        });
    });
}

window.saveResourceReflection = function(sessionNum, resIndex, btnElement) {
    const textarea = document.getElementById(`ref-${sessionNum}-${resIndex}`);
    const statusSpan = document.getElementById(`status-ref-${sessionNum}-${resIndex}`);
    
    if(textarea && textarea.value.trim() !== "") {
        localStorage.setItem(`ref_${sessionNum}_${resIndex}`, textarea.value);
        statusSpan.innerText = "¡Apunte Guardado!";
        statusSpan.style.color = "var(--success-color, #4ade80)";
        
        let originalText = btnElement.innerText;
        btnElement.innerHTML = `<i data-lucide="check" style="width: 12px; height: 12px;"></i> Listo`;
        btnElement.style.borderColor = "var(--success-color, #4ade80)";
        btnElement.style.color = "var(--success-color, #4ade80)";
        lucide.createIcons(); // render the check icon
        
        setTimeout(() => {
            statusSpan.innerText = "";
            btnElement.innerText = originalText;
            btnElement.style.borderColor = "var(--accent-primary)";
            btnElement.style.color = "var(--accent-primary)";
        }, 3000);
    } else {
        alert("¡No puedes guardar un apunte vacío!");
    }
};

function clearData() {
    if(confirm('¿Estás seguro de borrar todos los datos del equipo?')) {
        localStorage.removeItem('clasesLiderazgoData');
        renderDashboard();
        alert('Datos borrados.');
    }
}

function cargarSimulacion() {
    const simulacionB2B = [
        {nombre: "Juan M.", cargo: "Ejecutivo Comercial", vende: "Licencias, integraciones y horas de consultoría de implantación", liderazgo: "6"},
        {nombre: "Andrea S.", cargo: "Arquitecta de Soluciones", vende: "Arquitectura híbrida escalable, APIs seguras y reducción de latencia", liderazgo: "3"},
        {nombre: "Felipe T.", cargo: "KAM Senior", vende: "Acompañamiento estratégico, ahorro operativo y confianza a largo plazo", liderazgo: "8"},
        {nombre: "Camila R.", cargo: "Gerente de Proyectos", vende: "Entregas a tiempo, control de presupuesto y cero estrés operativo", liderazgo: "7"},
        {nombre: "Roberto C.", cargo: "Soporte Técnico", vende: "Software estable, SLAs garantizados y soporte técnico 24/7", liderazgo: "4"},
        {nombre: "Lorena P.", cargo: "Sales Manager", vende: "Tranquilidad financiera, innovación constante y retorno de inversión brutal", liderazgo: "9"},
        {nombre: "Daniel F.", cargo: "Consultor Preventa", vende: "Migraciones seguras, ciberseguridad, integraciones y arquitectura redundante", liderazgo: "5"}
    ];
    localStorage.setItem('clasesLiderazgoData', JSON.stringify(simulacionB2B));
    
    const dash = document.getElementById('instructor-dashboard');
    dash.style.display = 'block';
    renderDashboard();
    
    setTimeout(() => {
        dash.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function renderDashboard() {
    const data = JSON.parse(localStorage.getItem('clasesLiderazgoData')) || [];
    const listContainer = document.getElementById('lista-vendedores');
    
    // Render List
    if (data.length === 0) {
        listContainer.innerHTML = '<p style="color: var(--text-muted); font-style: italic;">No hay datos aún.</p>';
        updateCharts([], []);
        return;
    }
    
    listContainer.innerHTML = data.map(d => `
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); padding: 1rem; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <strong style="color: #fff;">${d.nombre}</strong>
                <span class="badge" style="margin: 0; padding: 0.2rem 0.8rem; font-size: 0.7rem;">Liderazgo: ${d.liderazgo}/10</span>
            </div>
            <p style="font-size: 0.8rem; color: var(--accent-secondary); margin-bottom: 0.3rem;">${d.cargo}</p>
            <p style="font-size: 0.95rem; color: #cbd5e1; font-style: italic;">"${d.vende}"</p>
        </div>
    `).reverse().join('');
    
    // Calculate Liderazgo Distribution
    let scores = [0,0,0,0,0,0,0,0,0,0];
    data.forEach(d => {
        let val = parseInt(d.liderazgo);
        if(!isNaN(val) && val >=1 && val <=10) {
            scores[val-1]++;
        }
    });
    
    // Calculate Word Frequencies
    const stopWords = new Set(['el','la','lo','los','las','un','una','unos','unas','de','del','a','al','en','para','por','con','sin','y','o','que','qué','es','no','si','se','su','mis','tu','te','me','como','más','muy','este','esta','esto','las', 'los']);
    let wordsCount = {};
    data.forEach(item => {
        let text = item.vende.toLowerCase().replace(/[.,!?;:()]/g, '');
        let tokens = text.split(/\s+/);
        tokens.forEach(w => {
            if (w.length > 3 && !stopWords.has(w)) {
                wordsCount[w] = (wordsCount[w] || 0) + 1;
            }
        });
    });
    
    let sortedWords = Object.entries(wordsCount).sort((a,b) => b[1] - a[1]).slice(0, 5);
    
    updateCharts(scores, sortedWords);
}

function updateCharts(scores, topWords) {
    Chart.defaults.color = '#9ca3af';
    Chart.defaults.font.family = "'Inter', sans-serif";
    
    // Liderazgo Chart
    if (lChart) lChart.destroy();
    const ctxL = document.getElementById('liderazgoChart').getContext('2d');
    lChart = new Chart(ctxL, {
        type: 'bar',
        data: {
            labels: ['1','2','3','4','5','6','7','8','9','10'],
            datasets: [{
                label: 'Cantidad de Personas',
                data: scores,
                backgroundColor: 'rgba(0, 240, 255, 0.7)',
                borderColor: '#00f0ff',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
            plugins: { legend: { display: false } }
        }
    });
    
    // Words Chart
    if (pChart) pChart.destroy();
    const ctxP = document.getElementById('palabrasChart').getContext('2d');
    
    let wLabels = topWords.map(tw => tw[0]);
    let wData = topWords.map(tw => tw[1]);
    
    pChart = new Chart(ctxP, {
        type: 'doughnut',
        data: {
            labels: wLabels,
            datasets: [{
                data: wData,
                backgroundColor: [
                    '#7000ff',
                    '#00f0ff',
                    '#ff0055',
                    '#4ade80',
                    '#facc15'
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { position: 'right', labels: { color: '#fff', font: {size: 10} } } 
            }
        }
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
    lucide.createIcons();
    renderSessions();
    loadReflections(); // Cargar datos guardados
    revealOnScroll();
    initDiagnosticoForm();
});

window.addEventListener("scroll", () => {
    revealOnScroll();
    handleNavbar();
});

// ==========================================
// FULLSCREEN PRESENTATION ENGINE
// ==========================================
let currentPresentationSlides = [];
let currentSlideIndex = 0;

function openPresentation(sessionNum) {
    const session = sessions.find(s => s.num === sessionNum);
    if (!session || !session.slides || session.slides.length === 0) {
        alert("Las diapositivas interactivas para esta sesión aún están en desarrollo.");
        return;
    }
    
    currentPresentationSlides = session.slides;
    currentSlideIndex = 0;
    
    document.getElementById('presentation-modal').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('presentation-modal').classList.add('active');
        renderSlide();
    }, 10);
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

function closePresentation() {
    const modal = document.getElementById('presentation-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        currentPresentationSlides = [];
        // Restore scrolling
        document.body.style.overflow = 'auto';
    }, 400);
}

function renderSlide() {
    const slide = currentPresentationSlides[currentSlideIndex];
    if (!slide) return;
    
    const contentHtml = `
        <h2 class="slide-title">${slide.title}</h2>
        <div class="slide-body">
            ${slide.content}
        </div>
    `;
    
    document.getElementById('slide-content').innerHTML = contentHtml;
    document.getElementById('slide-indicator').innerText = `${currentSlideIndex + 1} / ${currentPresentationSlides.length}`;
    
    // Refresh Icons inside slide
    lucide.createIcons();
    
    // Update button states
    document.getElementById('btn-prev-slide').disabled = currentSlideIndex === 0;
    document.getElementById('btn-next-slide').disabled = currentSlideIndex === currentPresentationSlides.length - 1;
}

function nextSlide() {
    if (currentSlideIndex < currentPresentationSlides.length - 1) {
        currentSlideIndex++;
        renderSlide();
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide();
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('presentation-modal');
    if (modal.style.display === 'flex' || modal.classList.contains('active')) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'Escape') {
            closePresentation();
        }
    }
});
