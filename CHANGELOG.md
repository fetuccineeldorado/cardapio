# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [1.0.1] - 2025-11-07

### Fixed
- Corrigido erro de build relacionado ao Google Fonts (Inter)
- Atualizada configuração do Next.js para usar `remotePatterns` em vez de `domains` (deprecado)
- Removido ícone dinâmico que causava erro de fetch durante build
- Adicionado ESLint e configuração apropriada

### Changed
- Fontes do sistema substituindo Google Fonts para melhor performance e builds offline
- Melhorada configuração do Tailwind CSS com @layer base
- Atualizado globals.css com melhor organização

### Added
- Arquivo `.eslintrc.json` para configuração do linter
- Arquivo `next-env.d.ts` para TypeScript
- Seção de Troubleshooting no README.md
- Package-lock.json para versões exatas das dependências

## [1.0.0] - 2025-11-07

### Added
- Projeto inicial do Cardápio Digital
- Sistema completo de carrinho de compras
- Integração com WhatsApp para envio de pedidos
- Interface responsiva com Tailwind CSS
- Filtro por categorias de produtos
- Sistema de observações em produtos
- Persistência de carrinho com localStorage
- 5 categorias de produtos (Hambúrgueres, Pizzas, Bebidas, Sobremesas, Saladas)
- 13 produtos pré-cadastrados
- Context API para gerenciamento de estado
- Validação de pedido mínimo
- Cálculo automático de taxa de entrega
- Documentação completa no README.md

### Technologies
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- React Icons
