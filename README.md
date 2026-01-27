# EduPro - Plataforma de Cursos Online

Uma plataforma moderna e completa de cursos online com landing page otimizada para conversão, sistema de autenticação e área de membros.

## 🚀 Características

### Landing Page de Alta Conversão
- 10 seções otimizadas seguindo princípios de marketing digital
- Gatilhos mentais estrategicamente posicionados
- Prova social com depoimentos
- Oferta com empilhamento de valor
- Modal com vídeo explicativo
- Animações suaves com WOW.js
- Design responsivo

### Sistema de Autenticação
- Login e registro de usuários
- Autenticação simulada com localStorage
- Opções de login social (Google, Facebook)
- Validação de formulários
- Design responsivo e moderno

### Dashboard de Cursos
- 5 cursos diferentes em categorias variadas
- Cards interativos com hover effects
- Barra de progresso para cada curso
- Estatísticas do usuário
- Seção de certificados

### Área de Cursos
- Player de vídeo integrado (YouTube)
- Vídeos diferentes para cada curso
- Sistema de progresso
- Botão de conclusão
- Geração de certificados
- Sidebar com conteúdo do curso

## 📚 Cursos Disponíveis

1. **Desenvolvimento Web Completo** - HTML, CSS e JavaScript
2. **Marketing Digital Profissional** - Estratégias de tráfego e vendas
3. **UX/UI Design Completo** - Criação de interfaces
4. **Python para Data Science** - Análise de dados e ML
5. **Excel Avançado** - Automação e fórmulas

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações
- **JavaScript** - Interatividade
- **Squeleton CSS Framework** - Sistema de grid e componentes
- **WOW.js** - Animações on scroll
- **a11y-dialog** - Modais acessíveis
- **LocalStorage** - Persistência de dados

## 📁 Estrutura de Arquivos

```
ideia/
├── index.html          # Landing page
├── login.html          # Página de login/registro
├── dashboard.html      # Dashboard com lista de cursos
├── curso.html          # Visualização de curso
├── styles.css          # Estilos personalizados
├── app.js             # JavaScript customizado
└── README.md          # Este arquivo
```

## 🎯 Como Usar

1. **Abra o projeto**
   - Abra o arquivo `index.html` no navegador
   - Ou use um servidor local (Live Server, etc.)

2. **Navegue pela landing page**
   - Explore as 10 seções otimizadas
   - Clique em "Ver Como Funciona" para abrir o modal
   - Clique em qualquer CTA para ir ao login

3. **Faça login ou crie uma conta**
   - Use qualquer email/senha (autenticação simulada)
   - Ou clique em "Criar Conta"

4. **Acesse o dashboard**
   - Veja os 5 cursos disponíveis
   - Clique em "Continuar Aprendendo" em qualquer curso

5. **Assista às aulas**
   - Cada curso tem um vídeo do YouTube diferente
   - Clique em "Marcar como Concluído" após assistir
   - Baixe seu certificado

## 🔐 Funcionalidades de Autenticação

### Login
- Email e senha (qualquer valor é aceito)
- Opção "Lembrar-me"
- Link "Esqueceu a senha?"
- Login social com Google e Facebook (simulado)

### Registro
- Nome completo
- Email
- Senha e confirmação
- Aceite de termos

### Sessão
- Dados salvos no localStorage
- Nome do usuário exibido no dashboard
- Botão de logout
- Redirecionamento automático

## 📊 Progresso e Certificados

### Sistema de Progresso
- Progresso salvo no localStorage
- Barra de progresso visual
- Contador de cursos concluídos
- Estatísticas no dashboard

### Certificados
- Gerados ao concluir 100% do curso
- Exibição do nome do aluno
- Data de conclusão
- Botão de download (simulado)

## 💎 Marketing Digital

A landing page foi construída seguindo as melhores práticas:

### Estrutura (10 Seções)
1. **Headline** - Promessa de valor clara
2. **Problema** - Agitação das dores
3. **Solução** - Apresentação da plataforma
4. **Como Funciona** - 3 passos simples
5. **Benefícios** - Transformações
6. **Prova Social** - 3 depoimentos
7. **Oferta** - Empilhamento de valor
8. **Urgência** - Contador regressivo
9. **Garantia** - Risco zero
10. **FAQ** - Quebra de objeções

### Gatilhos Mentais
- Prova social (10.000+ alunos)
- Escassez (23 vagas restantes)
- Urgência (contador regressivo)
- Autoridade (certificados reconhecidos)
- Garantia (30 dias)
- Reciprocidade (conteúdo grátis)

## 📱 Responsividade

O projeto é 100% responsivo com breakpoints:
- **XS**: ≤639px (Mobile)
- **SM**: ≥640px (Tablet)
- **MD**: ≥992px (Desktop)
- **LG**: ≥1200px (Large Desktop)

## 🎨 Personalização

### Cores (CSS Variables)
```css
--primary: #667eea
--secondary: #f093fb
--success: #10b981
--warning: #f59e0b
--danger: #ef4444
```

### Cursos
Para adicionar novos cursos, edite o objeto `courses` em `curso.html`:
```javascript
const courses = {
    '6': {
        title: 'Novo Curso',
        badge: 'Categoria',
        badgeColor: 'badge-primary',
        description: 'Descrição...',
        video: 'https://youtube.com/embed/...',
        lessonDescription: 'Conteúdo...'
    }
};
```

## 🚀 Melhorias Futuras

- Backend real com Node.js/PHP
- Banco de dados para usuários e progresso
- Sistema de pagamento
- Upload de vídeos próprios
- Chat de suporte
- Fórum da comunidade
- Geração real de certificados em PDF
- Sistema de avaliações
- Múltiplos módulos por curso
- Quiz e exercícios

## 🙏 Créditos

- **Framework**: Squeleton CSS
- **Animações**: WOW.js & Animate.css
- **Modais**: a11y-dialog
- **Imagens**: Unsplash & Pravatar
- **Vídeos**: YouTube (educacionais)
- **Marketing**: Baseado em frameworks do Empreendedor Mestre

## 📄 Licença

Este projeto é de código aberto e está disponível para uso educacional e comercial.

---

Desenvolvido com ❤️ usando Claude Code
