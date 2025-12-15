# Dashboard de Controle Web

Um dashboard moderno e responsivo para controle e monitoramento de dados em tempo real.

## 🎯 Características

- ✨ Interface moderna e intuitiva
- 📊 Gráficos interativos com Chart.js
- 📱 Design responsivo (mobile, tablet, desktop)
- 🎨 Tema visual atraente com gradientes
- ⚡ Navegação suave entre páginas
- 🔔 Sistema de notificações
- 📈 Métricas de vendas e desempenho

## 📁 Estrutura do Projeto

```
Dashboard de Controle Web/
├── index.html          # Página principal
├── src/
│   ├── styles.css      # Estilos CSS
│   └── script.js       # Lógica JavaScript
├── assets/             # Recursos (imagens, ícones, etc)
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Abrir o projeto:**
   - Abra o arquivo `index.html` em um navegador web

2. **Navegar pelo dashboard:**
   - Use o menu lateral para alternar entre páginas
   - Dashboard: Visualize métricas e gráficos
   - Relatórios: Acesse relatórios (em desenvolvimento)
   - Usuários: Gerencie usuários (em desenvolvimento)
   - Configurações: Ajustes do sistema (em desenvolvimento)

## 📊 Seções Principais

### Dashboard
- **Cards de Estatísticas**: Total de vendas, novos clientes, pedidos processados, taxa de satisfação
- **Gráficos Interativos**:
  - Vendas mensais (gráfico de linha)
  - Distribuição de clientes (gráfico de pizza)
- **Atividades Recentes**: Registro de ações recentes no sistema

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos responsivos e modernos
- **JavaScript (Vanilla)**: Interatividade
- **Chart.js**: Biblioteca para gráficos

## 📦 Dependências

- Chart.js (CDN): Para renderização de gráficos

## 💡 Personalizações

### Cores do Tema
Edite as variáveis CSS em `src/styles.css`:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    /* ... outras cores */
}
```

### Dados dos Gráficos
Modifique os dados em `src/script.js` na função `initializeCharts()`:

```javascript
data: [12000, 19000, 15000, ...] // Substitua pelos seus dados
```

## 📱 Responsividade

O dashboard é totalmente responsivo:
- **Desktop**: Layout completo com 4 colunas de cards
- **Tablet**: Layout adaptado com 2 colunas
- **Mobile**: Layout em coluna única

## 🔄 Próximos Passos

- [ ] Integrar com API backend
- [ ] Implementar autenticação de usuários
- [ ] Adicionar funcionalidade de relatórios
- [ ] Implementar sistema de notificações em tempo real
- [ ] Adicionar mais tipos de gráficos
- [ ] Criar sistema de permissões de usuário

## 📝 Licença

Projeto de código aberto - sinta-se livre para usar e modificar!

## 👨‍💻 Desenvolvimento

Para adicionar novas funcionalidades:

1. Adicione novos elementos HTML em `index.html`
2. Estilize usando `src/styles.css`
3. Implemente a lógica em `src/script.js`

---

Desenvolvido com ❤️ para Dashboard Web
