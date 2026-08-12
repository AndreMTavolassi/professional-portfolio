// =========================================================================
// REPOSITÓRIO DE CERTIFICADOS — ANDRE MIGUEL TAVOLASSI (tavolassi.dev.br)
// =========================================================================

const certificates = [
  {
    id: 1,
    title: 'Análise de Ataques em Redes',
    issuer: 'Redes & Cibersegurança',
    category: 'Redes',
    date: '2026',
    code: 'TAV-NET-01',
    image: 'certificados/certificado1.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Análise De Ataques em Redes.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Análise detalhada de vetores de ataque em tráfego de rede, vetores de ameaças e estratégias de mitigação.'
  },
  {
    id: 2,
    title: 'Carreira Cloud Security: Boas-vindas e Primeiros Passos',
    issuer: 'Alura',
    category: 'Sistemas',
    date: '2026',
    code: 'TAV-CLD-02',
    image: 'certificados/certificado2.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Carreira Cloud Security_ Boas-vindas e primeiros passos - Alura.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Fundamentos de segurança em ambientes de computação em nuvem, arquitetura segura e boas práticas.'
  },
  {
    id: 3,
    title: 'Cibersegurança: Fundamentos e Práticas Integradas',
    issuer: 'Alura',
    category: 'Segurança',
    date: '2026',
    code: 'TAV-SEC-03',
    image: 'certificados/certificado3.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Cibersegurança_ Fundamentos e práticas integradas - Alura.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Visão integrada de princípios de cibersegurança, controles de proteção, confidencialidade e gestão de riscos.'
  },
  {
    id: 4,
    title: 'Detecção e Resposta a Incidentes',
    issuer: 'SOC / CyberSec',
    category: 'Segurança',
    date: '2026',
    code: 'TAV-SOC-04',
    image: 'certificados/certificado4.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Deteção e Resposta a Incidente.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Processos operacionais de identificação de anomalias, triagem e contenção imediata de incidentes de segurança.'
  },
  {
    id: 5,
    title: 'Fortalecimento da Segurança (Hardening)',
    issuer: 'CyberSec Specialist',
    category: 'Segurança',
    date: '2026',
    code: 'TAV-SEC-05',
    image: 'certificados/certificado5.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Fortalecimento da Segurança.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Técnicas avançadas de hardening em sistemas e serviços para redução da superfície de ataque.'
  },
  {
    id: 6,
    title: 'Google Segurança em Redes',
    issuer: 'Google',
    category: 'Redes',
    date: '2026',
    code: 'TAV-GGL-06',
    image: 'certificados/certificado6.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Google Segurança em Redes.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Arquitetura segura de redes, protocolos de proteção, criptografia e infraestrutura de comunicação.'
  },
  {
    id: 7,
    title: 'Linux: Gerenciando Diretórios, Arquivos e Processos',
    issuer: 'Alura',
    category: 'Sistemas',
    date: '2025',
    code: 'TAV-LNX-07',
    image: 'certificados/certificado7.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Linux_ gerenciando diretórios, arquivos, permissões e processos - Alura.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Administração de sistemas operacionais Linux, controle de permissões de acesso e gerenciamento de processos.'
  },
  {
    id: 8,
    title: 'Lógica de Programação com JavaScript',
    issuer: 'Alura',
    category: 'Dev',
    date: '2025',
    code: 'TAV-DEV-08',
    image: 'certificados/certificado8.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Lógica de programação_ mergulhe em programação com JavaScript - Alura.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Desenvolvimento de algoritmos, estruturas condicionais/de repetição e lógica de aplicação em JavaScript.'
  },
  {
    id: 9,
    title: 'Monitoramento e Análise de Redes',
    issuer: 'Redes & Infraestrutura',
    category: 'Redes',
    date: '2025',
    code: 'TAV-NET-09',
    image: 'certificados/certificado9.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Monitoramento e Analise de Redes.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Acompanhamento de fluxo de dados, captura de pacotes de rede e diagnóstico de performance/saúde de infraestrutura.'
  },
  {
    id: 10,
    title: 'Operações de Rede',
    issuer: 'Infraestrutura',
    category: 'Redes',
    date: '2025',
    code: 'TAV-OPS-10',
    image: 'certificados/certificado10.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Operações de Rede.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Gestão de rotinas operacionais, manutenção de topologias e garantia de disponibilidade e estabilidade de conexões.'
  },
  {
    id: 11,
    title: 'Tráfego de Redes e Logs Usando IDS e SIEM',
    issuer: 'SOC / SIEM Specialist',
    category: 'Segurança',
    date: '2026',
    code: 'TAV-SIEM-11',
    image: 'certificados/certificado11.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - Curso Trafego de Redes e Logs Usando IDS e SIEM.pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Análise de eventos de segurança, criação e ajuste de regras em sistemas IDS e correlação centralizada em SIEM.'
  },
  {
    id: 12,
    title: 'Profissional de Cibersegurança',
    issuer: 'FIAP',
    category: 'Segurança',
    date: '2026',
    code: 'TAV-FIAP-12',
    image: 'certificados/certificado12.webp',
    pdf: 'certificados/pdf/ANDRE MIGUEL TAVOLASSI - FIAP(profissional de cibersegurança).pdf',
    verify: 'https://tavolassi.dev.br',
    description: 'Formação acadêmica técnica em defesa cibernética, resposta a incidentes e proteção de ativos da FIAP.'
  }
];

// Imagem padrão caso a imagem .webp ainda não esteja salva na pasta
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop';

// Elementos da DOM
const grid = document.getElementById('certificates-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Elementos do Modal QuickLook
const modalOverlay = document.getElementById('modal-overlay');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const modalFileName = document.getElementById('modal-file-name');
const modalDownload = document.getElementById('modal-download');
const modalVerify = document.getElementById('modal-verify');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCloseX = document.getElementById('modal-close-x');

// Renderiza a Bento Grid de Certificados
function renderCertificates(filterCategory = 'Todos') {
  grid.innerHTML = '';
  
  const filtered = filterCategory === 'Todos'
    ? certificates
    : certificates.filter(c => c.category === filterCategory);

  filtered.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openModal(cert);

    card.innerHTML = `
      <div>
        <div class="card-preview">
          <img src="${cert.image}" alt="${cert.title}" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';">
          <span class="card-badge">${cert.issuer}</span>
        </div>
        <div class="card-content">
          <div class="card-meta">
            <span class="category">${cert.category}</span>
            <span class="date">${cert.date}</span>
          </div>
          <h3 class="card-title">${cert.title}</h3>
          <p class="card-desc">${cert.description}</p>
        </div>
      </div>
      <div class="card-footer">
        <span>ID: ${cert.code}</span>
        <span class="card-action">Inspecionar &rarr;</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Lógica de Filtros por Categoria
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCertificates(btn.dataset.category);
  });
});

// Abertura e Fechamento do Modal
function openModal(cert) {
  modalImg.src = cert.image;
  modalImg.onerror = () => modalImg.src = FALLBACK_IMAGE;
  modalTitle.textContent = cert.title;
  modalMeta.textContent = `Emitido para Andre Miguel Tavolassi por ${cert.issuer} (${cert.date})`;
  modalFileName.textContent = `certificado${cert.id}.webp`;
  modalDownload.href = cert.pdf;
  modalVerify.href = cert.verify;

  modalOverlay.classList.remove('hidden');
}

function closeModal() {
  modalOverlay.classList.add('hidden');
}

modalCloseBtn.addEventListener('click', closeModal);
modalCloseX.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Inicialização
renderCertificates();