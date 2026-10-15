# 🚚 LiluTrans - Landing Page & PWA

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![Versão](https://img.shields.io/badge/Vers%C3%A3o-1.0.0-blue)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-yellow)
![PWA](https://img.shields.io/badge/PWA-Ready-purple)

Landing page moderna, responsiva e otimizada para conversão da **LiluTrans**, uma empresa de transporte de carga e mercadorias sediada em Luanda, Angola. O projeto foi transformado numa **Progressive Web App (PWA)**, permitindo que os clientes a instalem no telemóvel e a utilizem como uma aplicação nativa, mesmo offline.

---

## 📸 Demonstração

> **Nota:** Substitua este link pela URL do seu GitHub Pages após o deploy.
> 🔗 [Ver Site ao Vivo](https://seu-usuario.github.io/lilutrans/)

| Secção | Descrição |
| :--- | :--- |
| **Hero** | Apresentação principal com CTAs para WhatsApp e Telefone. |
| **Serviços** | Detalhes sobre os tipos de carga e atendimento. |
| **Como Funciona** | Explicação transparente do cálculo de frete. |
| **Calculadora de Frete** | Ferramenta interativa para estimativa instantânea de preços. |
| **Diferenciais** | Pontos fortes da empresa (Segurança, Pontualidade, etc.). |
| **FAQ** | Perguntas frequentes com acordeão interativo. |
| **Contactos** | Formulário de orçamento e informações diretas. |
| **PWA** | Instalável no telemóvel com funcionamento offline. |

---

## ✨ Funcionalidades Principais

-   **📱 PWA (Progressive Web App):** Instalável no ecrã inicial do telemóvel (iOS e Android), com funcionamento offline através de Service Worker.
-   **🧮 Calculadora de Frete:** O cliente insere a distância, peso e tipo de carga, e recebe uma estimativa instantânea em Kwanzas (Kz). O valor é enviado diretamente para o WhatsApp.
-   **💬 Integração com WhatsApp:** Todos os CTAs (botões de ação) e o formulário de contacto redirecionam o cliente para o WhatsApp com uma mensagem pré-preenchida.
-   **📊 Barra de Progresso de Leitura:** Indicador visual dourado no topo da página.
-   **🎨 Animações Modernas:** Efeitos de *Scroll Reveal* (elementos aparecem suavemente ao descer) e micro-interações em botões e cartões.
-   **❓ FAQ Interativo:** Secção de Perguntas Frequentes com acordeão suave.
-   **📱 Design 100% Responsivo:** Adapta-se perfeitamente a telemóveis, tablets e computadores.

---

## 🛠️ Tecnologias Utilizadas

-   **HTML5:** Estrutura semântica e acessível.
-   **Tailwind CSS (via CDN):** Estilização moderna, responsiva e utilitária.
-   **JavaScript (Vanilla):** Lógica da calculadora, menu mobile, animações e registo do PWA.
-   **FontAwesome:** Ícones vetoriais.
-   **Google Fonts (Inter):** Tipografia moderna e legível.
-   **Service Worker:** Para o funcionamento offline do PWA.

---

## 📂 Estrutura de Ficheiros

```text
/lilutrans
├── index.html          # Página principal (HTML + CSS + JS)
├── manifest.json       # Configuração do PWA (nome, cores, ícones)
├── sw.js               # Service Worker (cache e modo offline)
├── README.md           # Documentação do projeto
└── /icons              # Ícones da aplicação
    ├── icon-192x192.png
    └── icon-512x512.png
