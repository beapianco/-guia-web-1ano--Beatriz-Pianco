// Dados das tecnologias
const techInfo = {
  html: {
    titulo: 'HTML5',
    descricao: `
      <p>HTML (HyperText Markup Language) é a linguagem padrão para criar páginas web.</p>
      <h3>Principais características:</h3>
      <ul>
        <li>Estruturação semântica do conteúdo</li>
        <li>Suporte a mídia (áudio, vídeo)</li>
        <li>Formulários avançados</li>
        <li>APIs modernas do navegador</li>
      </ul>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Minha página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Olá mundo!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
    `
  },
  css: {
    titulo: 'CSS3',
    descricao: `
      <p>CSS (Cascading Style Sheets) é usado para estilizar páginas web.</p>
      <h3>Recursos modernos:</h3>
      <ul>
        <li>Flexbox e Grid</li>
        <li>Animações e transições</li>
        <li>Variáveis CSS</li>
        <li>Media Queries</li>
      </ul>
      <pre><code>.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #2563EB, #10B981);
}</code></pre>
    `
  },
  js: {
    titulo: 'JavaScript',
    descricao: `
      <p>JavaScript é a linguagem de programação da web.</p>
      <h3>Funcionalidades:</h3>
      <ul>
        <li>Manipulação do DOM</li>
        <li>Requisições assíncronas</li>
        <li>Eventos e interatividade</li>
        <li>ES6+ features</li>
      </ul>
      <pre><code>const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
  const data = await fetch('/api/data');
  const json = await data.json();
  console.log(json);
});</code></pre>
    `
  }
};

// Elementos DOM
const filtros = document.querySelectorAll('.filtro-btn');
const cards = document.querySelectorAll('.tech-card');
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescricao = document.getElementById('modal-descricao');
const fecharModal = document.querySelector('.fechar');

// Filtrar cards
filtros.forEach(filtro => {
  filtro.addEventListener('click', () => {
    // Remove classe ativo de todos os filtros
    filtros.forEach(f => f.classList.remove('ativo'));
    // Adiciona classe ativo ao filtro clicado
    filtro.classList.add('ativo');
    
    const categoria = filtro.dataset.filtro;
    
    cards.forEach(card => {
      if (categoria === 'todos' || card.dataset.categoria === categoria) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Modal
document.querySelectorAll('.btn-info').forEach(btn => {
  btn.addEventListener('click', () => {
    const tech = btn.dataset.tech;
    const info = techInfo[tech];
    
    if (info) {
      modalTitulo.textContent = info.titulo;
      modalDescricao.innerHTML = info.descricao;
      modal.style.display = 'block';
    }
  });
});

// Fechar modal
fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
