# Gestação 3D Viewer

Aplicação React para visualizar imagens em 3D e animar um feto durante a gestação usando Three.js.

## 🚀 Instalação

1. Instale as dependências:
```bash
npm install
```

## 🎮 Como Usar

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Abra o navegador no endereço mostrado (geralmente `http://localhost:5173`)

3. Escolha uma das opções no menu:
   - **Visualizar Imagem 3D**: Visualiza a imagem pré-carregada em um plano 3D
   - **Visualizar Gestação 3D**: Visualiza um feto animado com controle de semanas de gestação

### Visualizar Imagem 3D

- Clique em "Visualizar Imagem 3D" para carregar a imagem de `assets/bebe.jpg`
- Use o mouse para rotacionar a imagem:
  - **Arrastar**: Rotacionar a imagem
  - **Scroll**: Zoom in/out
- Clique em "Voltar" para retornar ao menu

### Visualizar Gestação 3D

- Clique em "Visualizar Gestação 3D" no menu principal
- Use o controle deslizante ou os botões +/- para ajustar as semanas de gestação (8-40 semanas)
- O feto cresce e se move conforme as semanas aumentam
- Use o mouse para rotacionar o feto:
  - **Arrastar**: Rotacionar o feto
  - **Scroll**: Zoom in/out
- O feto tem animações suaves de movimento (flutuação)

## 📁 Estrutura do Projeto

```
three-js-3d/
├── src/
│   ├── page/
│   │   └── App.jsx          # Componente principal com menu e navegação
│   ├── components/
│   │   ├── Canvas3D.jsx     # Componente Three.js com o plano 3D para imagens
│   │   └── Fetus3D.jsx      # Componente Three.js com modelo 3D do feto (GLB)
│   ├── styles/
│   │   ├── App.css          # Estilos do App
│   │   └── index.css        # Estilos globais
│   ├── assets/
│   │   └── bebe.jpg         # Imagem pré-carregada para visualização 3D
│   └── main.jsx             # Ponto de entrada
├── public/
│   └── models/
│       └── 20-weeks.glb      # Modelo 3D do feto
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Tecnologias

- **React** - Biblioteca UI
- **Vite** - Build tool
- **Three.js** - Biblioteca 3D
- **@react-three/fiber** - React renderer para Three.js
- **@react-three/drei** - Utilitários para react-three-fiber (OrbitControls, useGLTF, etc)
- **lucide-react** - Ícones modernos

## 📝 Funcionalidades

### Visualizador de Imagem 3D

- ✅ Imagem pré-carregada de `assets/bebe.jpg`
- ✅ Textura aplicada em plano 3D
- ✅ Rotação com mouse (OrbitControls)
- ✅ Zoom com scroll
- ✅ Iluminação ambiente + direcional
- ✅ Proporções da imagem preservadas

### Visualizador de Feto 3D

- ✅ Modelo 3D realista do feto (arquivo GLB)
- ✅ Animação de crescimento baseada nas semanas de gestação
- ✅ Movimentos suaves e naturais (flutuação)
- ✅ Controle de semanas de gestação (8-40 semanas)
- ✅ Indicador de trimestre
- ✅ Ambiente visualizado (útero translúcido)
- ✅ Rotação e zoom com mouse
- ✅ Iluminação suave e realista
- ✅ Escala dinâmica: cresce de 0.5x (semana 8) até 1.5x (semana 40)

## 🎨 Características do Feto 3D

- **Modelo Realista**: Usa arquivo GLB 3D profissional
- **Tamanho Dinâmico**: O feto cresce proporcionalmente às semanas de gestação
  - Semana 8: escala 0.5x
  - Semana 20: escala 1.0x (tamanho original do modelo)
  - Semana 40: escala 1.5x
- **Animações Naturais**: 
  - Movimento flutuante suave
- **Controles Intuitivos**: Slider e botões para navegar entre as semanas
- **Visual Realista**: Iluminação adequada e ambiente translúcido

## 📦 Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## 💡 Dicas de Uso

- A imagem 3D carrega automaticamente de `assets/bebe.jpg`
- O modelo do feto está em `public/models/20-weeks.glb`
- Use o slider para navegar rapidamente entre diferentes estágios da gestação
- Os botões +/- permitem ajustes finos de 1 semana
- Todas as animações são suaves e contínuas para uma experiência agradável
