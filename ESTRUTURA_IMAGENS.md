# ESTRUTURA DE PASTAS E IMAGENS
## Passo a Passo para Organizar o Repositório

### Status Atual: ✅ CORRETO

Este arquivo documenta a estrutura correta de pastas e nomes de arquivos de imagens para o repositório.

---

## Estrutura Correta do Repositório

```
/
├── index.html (MANTER NA RAIZ)
├── logo.png (MANTER NA RAIZ)
├── ESTRUTURA_IMAGENS.md (este arquivo)
└── imagens/
    ├── doencas.png
    ├── email.png
    ├── estadios.png
    ├── hormonios.png
    ├── instagram.png
    ├── linkedin.png
    ├── flutuadores.png
    ├── perfil.png
    ├── pragas.png
    ├── whatsapp.png
    ├── estadios-soja.png
    ├── pragas-soja.png
    ├── nutrientes-soja.png
    ├── doencas-soja.png
    ├── hormonios-soja.png
    ├── manejo-soja.png
    ├── nutriente-nitrogenio.png
    ├── nutriente-fosforo.png
    ├── nutriente-potassio.png
    ├── nutriente-calcio.png
    ├── nutriente-magnesio.png
    ├── nutriente-enxofre.png
    ├── nutriente-boro.png
    ├── nutriente-cobre.png
    ├── nutriente-ferro.png
    ├── nutriente-manganes.png
    ├── nutriente-molibdenio.png
    ├── nutriente-zinco.png
    ├── nutriente-niquel.png
    ├── nutriente-silicio.png
    ├── nutriente-cobalto.png
    ├── nutriente-sodio.png
    ├── estadios-milho.png
    ├── pragas-milho.png
    ├── nutrientes-milho.png
    ├── doencas-milho.png
    ├── hormonios-milho.png
    └── manejo-milho.png
```

---

## Passos para Completar a Organização

### 1. Mover arquivos para pasta `imagens/`

Use o comando Git para mover os arquivos:

```bash
git mv doencas.png imagens/
git mv email.png imagens/
git mv estadios.png imagens/
git mv hormonios.png imagens/
git mv instagram.png imagens/
git mv linkedin.png imagens/
git mv flutuadores.png imagens/
git mv perfil.png imagens/
git mv pragas.png imagens/
git mv whatsapp.png imagens/
```

### 2. Atualizar caminhos no `index.html`

Todos os `src` de imagens devem ser atualizados de:

```html
<!-- ANTES -->
<img src="doencas.png" alt="...">
```

Para:

```html
<!-- DEPOIS -->
<img src="imagens/doencas.png" alt="...">
```

### 3. Fazer commit das mudanças

```bash
git add .
git commit -m "Organizar imagens em pasta imagens/ e atualizar caminhos"
git push origin main
```

---

## Verificação Final

- [x] Pasta `imagens/` criada
- [ ] Todos os arquivos `.png` movidos para `imagens/` (EXCETO logo.png)
- [ ] `index.html` atualizado com novos caminhos
- [ ] `logo.png` permanece na raiz
- [ ] Commit realizado e push feito

---

## Nomes de Arquivos - Verificação

Todos os nomes devem estar em **minúsculas** com **hífens** separando palavras:

✅ **Correto:**
- `doencas.png`
- `estadios-soja.png`
- `nutriente-nitrogenio.png`
- `pragas-milho.png`

❌ **Incorreto:**
- `Doencas.png` (maiúsculas)
- `doencas Soja.png` (espaços)
- `nutrientes_soja.png` (underscore ao invés de hífen)

---

## Lista Completa de Arquivos para `imagens/`

### Gerais
1. doencas.png
2. email.png
3. estadios.png
4. hormonios.png
5. instagram.png
6. linkedin.png
7. flutuadores.png
8. perfil.png
9. pragas.png
10. whatsapp.png

### Soja
11. estadios-soja.png
12. pragas-soja.png
13. nutrientes-soja.png
14. doencas-soja.png
15. hormonios-soja.png
16. manejo-soja.png

### Nutrientes
17. nutriente-nitrogenio.png
18. nutriente-fosforo.png
19. nutriente-potassio.png
20. nutriente-calcio.png
21. nutriente-magnesio.png
22. nutriente-enxofre.png
23. nutriente-boro.png
24. nutriente-cobre.png
25. nutriente-ferro.png
26. nutriente-manganes.png
27. nutriente-molibdenio.png
28. nutriente-zinco.png
29. nutriente-niquel.png
30. nutriente-silicio.png
31. nutriente-cobalto.png
32. nutriente-sodio.png

### Milho
33. estadios-milho.png
34. pragas-milho.png
35. nutrientes-milho.png
36. doencas-milho.png
37. hormonios-milho.png
38. manejo-milho.png

---

**Total: 38 arquivos na pasta `imagens/`**

---

## Nota Importante

Este arquivo serve como referência e documentação para manter a estrutura organizada e facilitar futuras manutenções do repositório.
