# 🌱 Raudinei Afonso - Portfolio HTML

Portfolio profissional em HTML puro - funciona direto no GitHub Pages!

## 📁 Estrutura Simples

```
raudinei-portfolio/
├── index.html          ← Arquivo principal
├── logo.png
└── imagens/
    ├── whatsapp.png
    ├── email.png
    ├── linkedin.png
    ├── perfil.png
    ├── instagram.png
    ├── estadios-soja.png
    ├── pragas-soja.png
    ├── nutrientes-soja.png
    ├── doencas-soja.png
    ├── hormonios-soja.png
    ├── soja.png
    ├── estadios-milho.png
    ├── pragas-milho.png
    ├── nutrientes-milho.png
    ├── doencas-milho.png
    ├── hormonios-milho.png
    ├── milho.png
    ├── soloforte1.png
    ├── soloforte2.png
    ├── soloforte3.png
    ├── soloforte5.png
    ├── soloforte6.png
    └── soloforte.png
```

## 🚀 Como Usar

### 1. Adicionar Imagens

Crie a pasta `imagens/` e adicione todas as imagens PNG listadas acima.

### 2. Testar Localmente

Basta abrir o `index.html` no navegador!

### 3. Subir para GitHub

```bash
# Criar repositório
git init
git add .
git commit -m "Portfolio Raudinei Afonso"

# Conectar com GitHub
git remote add origin https://github.com/afonsoraudinei/afonsoraudinei.github.io.git
git branch -M main
git push -u origin main
```

### 4. Ativar GitHub Pages

1. Vá em **Settings** > **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Save

✅ Site disponível em: `https://afonsoraudinei.github.io`

## 🔗 Adicionar Links

Para adicionar os links do MILHO e SOLOFORTE, edite o `index.html`:

Procure por:
```html
<a href="#" class="carousel-card">
```

E troque `#` pelo seu link:
```html
<a href="https://seu-link.com" class="carousel-card">
```

## ✨ Features

- ✅ HTML/CSS/JS puro
- ✅ Sem build necessário
- ✅ 3 carrosséis interativos
- ✅ 100% responsivo
- ✅ Drag & touch support
- ✅ Navegação por teclado
- ✅ Animações suaves

## 📱 Responsivo

Funciona perfeitamente em:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

## 🎨 Personalizar

### Cores
Procure por `:root` no CSS e altere:
```css
:root {
    --samsung-blue: #0066FF;
    --verde-positivo: #10b981;
    --petroleo: #1f3c45;
}
```

### Textos
Edite diretamente no HTML:
```html
<h1>Seu Nome</h1>
<h2>Sua Profissão</h2>
```

## 📄 Licença

© 2024 Raudinei Afonso. Todos os direitos reservados.
