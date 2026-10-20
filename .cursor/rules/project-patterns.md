# Padrões e Diretrizes do Projeto

1. Contexto do projeto

Este repositório contém um portfólio pessoal desenvolvido com Astro, utilizando React para a criação de componentes reutilizáveis e interativos.

O objetivo é manter uma aplicação moderna, performática, responsiva, acessível e de fácil manutenção, seguindo boas práticas de desenvolvimento frontend.

Antes de implementar qualquer alteração, analise a estrutura existente do projeto e reutilize os padrões já estabelecidos.

2. Stack tecnológica

- Framework principal: Astro 5.

- Biblioteca de interface: React 19.

- Linguagem: TypeScript 5.

- Estilização: Tailwind CSS 4.

- Ícones: Lucide React, Iconify e Astro Icon, conforme os padrões já utilizados no projeto.

- Componentes e composição: Radix UI Slot.

- Gerenciamento de classes: clsx, tailwind-merge e class-variance-authority.

- Carrosséis e sliders: Swiper.

- Integração React/Astro: @astrojs/react.

Não introduza novas dependências sem verificar primeiro se a funcionalidade pode ser implementada com as ferramentas já disponíveis.

3. Diretrizes de arquitetura

- Astro como estrutura principal

- Utilize arquivos .astro para estruturar páginas, layouts e conteúdo que não precise de interatividade no navegador.

- Aproveite a renderização estática do Astro sempre que possível.

- Utilize layouts compartilhados para evitar duplicação de estrutura entre páginas.

- Mantenha a lógica de apresentação próxima ao componente responsável por ela.

- Evite transformar toda a aplicação em uma SPA sem uma necessidade concreta.

- React para componentes interativos

- Utilize componentes .tsx quando houver necessidade de:

- Estado e interações complexas.

- Eventos e manipulação de interface.

- Componentes reutilizáveis com comportamento dinâmico.

- Bibliotecas que dependam do React, como Swiper React.

- Prefira componentes pequenos, coesos e com responsabilidades bem definidas.

- Não utilize React para elementos estáticos simples que possam ser implementados diretamente em Astro.

4 - Organização e estrutura de arquivos
Antes de criar, mover ou renomear arquivos, inspecione a estrutura atual do repositório.

Como referência, utilize uma organização semelhante à seguinte, adaptando-a ao padrão já existente:

```
public/
|-- docs # Documetos anexados nos botões (currículo em pdf)
|-- icons # Ícones que não tinha nas bibliotecas durante o desenvolvimento da v1
|-- projects # Imagens das telas ou protótipos dos projetos

src/
|-- assets # Assets iniciais do projeto astro
|-- components # Componentes reutilizáveis Astro e React
|-- layouts # Layouts compartilhados
|-- pages # Rotas e páginas Astro
|-- lib 
|-- styles # Estilos globais e configurações de CSS
