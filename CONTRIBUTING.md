# Guia de Contribuição

Obrigado por considerar contribuir com o Cardápio Digital!

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Git

### Setup do Projeto

1. Fork o repositório
2. Clone seu fork:
```bash
git clone https://github.com/seu-usuario/cardapio.git
cd cardapio
```

3. Instale as dependências:
```bash
npm install
```

4. Crie uma branch para sua feature:
```bash
git checkout -b feature/minha-feature
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 📝 Padrões de Código

### TypeScript

- Use TypeScript para todo código novo
- Defina tipos explícitos quando necessário
- Evite usar `any`

### React

- Use componentes funcionais com hooks
- Prefira `'use client'` quando necessário estado
- Mantenha componentes pequenos e focados

### Estilização

- Use Tailwind CSS para estilização
- Siga o padrão mobile-first
- Use as cores do tema definidas em `tailwind.config.ts`

### Nomenclatura

- Componentes: PascalCase (ex: `ProductCard`)
- Arquivos de componentes: PascalCase (ex: `ProductCard.tsx`)
- Funções: camelCase (ex: `addToCart`)
- Constantes: UPPER_SNAKE_CASE ou camelCase (ex: `restaurantConfig`)

## 🧪 Testes

Antes de enviar seu PR:

```bash
# Verifique linting
npm run lint

# Teste o build
npm run build

# Se houver testes
npm test
```

## 📦 Commits

Siga o padrão de commits semânticos:

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `test:` Adição de testes
- `chore:` Tarefas de manutenção

Exemplos:
```bash
git commit -m "feat: adicionar sistema de busca de produtos"
git commit -m "fix: corrigir cálculo de total no carrinho"
git commit -m "docs: atualizar README com novas instruções"
```

## 🔄 Pull Requests

1. Certifique-se de que o código está formatado corretamente
2. Atualize a documentação se necessário
3. Adicione descrição clara do que foi alterado
4. Referencie issues relacionadas

Template de PR:

```markdown
## Descrição
[Descreva suas mudanças]

## Tipo de mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Checklist
- [ ] Código segue os padrões do projeto
- [ ] Testei as mudanças localmente
- [ ] Atualizei a documentação
- [ ] Não há warnings de build
- [ ] Não há erros de lint
```

## 🐛 Reportando Bugs

Ao reportar um bug, inclua:

1. Descrição clara do problema
2. Passos para reproduzir
3. Comportamento esperado vs atual
4. Screenshots se aplicável
5. Versão do Node.js e navegador

## 💡 Sugestões de Features

Para sugerir novas funcionalidades:

1. Verifique se já não existe uma issue similar
2. Descreva claramente a funcionalidade
3. Explique o caso de uso
4. Adicione mockups se possível

## 📂 Estrutura de Arquivos

```
cardapio/
├── src/
│   ├── app/              # Páginas Next.js (App Router)
│   ├── components/       # Componentes React
│   ├── contexts/         # Context API
│   ├── data/            # Dados e configurações
│   └── types/           # Definições TypeScript
├── public/              # Arquivos estáticos
└── ...
```

## 🎨 Adicionando Novos Produtos

Edite `src/data/products.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Nome do Produto',
  description: 'Descrição',
  price: 0.00,
  image: 'https://url-da-imagem.jpg',
  category: 'categoria-id',
  available: true,
}
```

## 📦 Adicionando Novas Categorias

Edite `src/data/categories.ts`:

```typescript
{
  id: 'categoria-id',
  name: 'Nome da Categoria',
  icon: '🔥', // Emoji
}
```

## 🙏 Agradecimentos

Toda contribuição é muito apreciada!
