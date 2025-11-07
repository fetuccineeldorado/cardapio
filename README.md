# 🍽️ Cardápio Digital com WhatsApp

Sistema completo de cardápio digital com integração WhatsApp para receber pedidos automaticamente.

## ✨ Funcionalidades

- 📱 **Design Responsivo** - Funciona perfeitamente em celulares, tablets e desktops
- 🛒 **Carrinho de Compras** - Sistema completo com adição, remoção e atualização de quantidades
- 📝 **Observações em Pedidos** - Cliente pode adicionar observações em cada item
- 🔄 **Filtro por Categorias** - Navegação fácil entre categorias de produtos
- 💾 **Persistência de Dados** - Carrinho salvo no localStorage (não perde ao recarregar página)
- 📲 **Integração WhatsApp** - Envio automático do pedido formatado para WhatsApp
- 🎨 **Interface Moderna** - Design limpo e profissional com Tailwind CSS
- ⚡ **Performance Otimizada** - Uso de Next.js 14 com App Router

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna e responsiva
- **React Icons** - Ícones bonitos e consistentes
- **Context API** - Gerenciamento de estado do carrinho

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd cardapio
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o WhatsApp (veja seção Configuração)

4. Execute o projeto:
```bash
npm run dev
```

5. Acesse no navegador:
```
http://localhost:3000
```

## ⚙️ Configuração

### Configurar WhatsApp e Dados do Restaurante

Edite o arquivo `src/data/config.ts`:

```typescript
export const restaurantConfig: RestaurantConfig = {
  name: 'Nome do Seu Restaurante',
  whatsappNumber: '5511999999999', // Formato: código do país + DDD + número
  logo: '/logo.png',
  primaryColor: '#ef4444',
  welcomeMessage: 'Bem-vindo! Faça seu pedido.',
  deliveryFee: 5.00,
  minimumOrder: 20.00,
};
```

**Importante:** O número do WhatsApp deve estar no formato internacional:
- Brasil: `55` + DDD + número
- Exemplo: `5511987654321` (São Paulo)

### Adicionar/Editar Produtos

Edite o arquivo `src/data/products.ts`:

```typescript
{
  id: 'produto-1',
  name: 'Nome do Produto',
  description: 'Descrição detalhada',
  price: 25.90,
  image: 'https://url-da-imagem.jpg',
  category: 'categoria-id',
  available: true,
}
```

### Adicionar/Editar Categorias

Edite o arquivo `src/data/categories.ts`:

```typescript
{
  id: 'categoria-id',
  name: 'Nome da Categoria',
  icon: '🍔', // Emoji da categoria
}
```

## 📱 Como Funciona

1. **Cliente navega** pelo cardápio e filtra por categorias
2. **Adiciona produtos** ao carrinho com observações opcionais
3. **Revisa o pedido** no carrinho flutuante
4. **Preenche dados** de entrega (nome, endereço, pagamento)
5. **Envia pelo WhatsApp** - Mensagem formatada é enviada automaticamente
6. **Restaurante recebe** o pedido completo no WhatsApp

## 🎨 Personalização de Cores

Edite o arquivo `tailwind.config.ts` para alterar o tema de cores:

```typescript
colors: {
  primary: {
    500: '#ef4444', // Cor principal
    600: '#dc2626',
    700: '#b91c1c',
  },
}
```

## 📂 Estrutura do Projeto

```
cardapio/
├── src/
│   ├── app/              # Páginas Next.js (App Router)
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página inicial
│   │   └── globals.css   # Estilos globais
│   ├── components/       # Componentes React
│   │   ├── Header.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── ProductCard.tsx
│   │   └── Cart.tsx
│   ├── contexts/         # Context API
│   │   └── CartContext.tsx
│   ├── data/            # Dados da aplicação
│   │   ├── config.ts    # Configurações
│   │   ├── categories.ts
│   │   └── products.ts
│   └── types/           # TypeScript types
│       └── index.ts
├── public/              # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Crie conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático a cada push

### Outras Plataformas

- **Netlify** - Deploy similar à Vercel
- **AWS Amplify** - Hospedagem na AWS
- **Railway** - Hospedagem simples e rápida

## 📝 Formato da Mensagem WhatsApp

Exemplo de mensagem enviada:

```
🍽️ *NOVO PEDIDO* 🍽️

👤 *Cliente:* João Silva
📍 *Endereço:* Rua ABC, 123 - Bairro XYZ
💳 *Pagamento:* PIX

*--- ITENS ---*

▪️ *2x X-Burger Clássico*
   R$ 25.90 cada
   📝 Obs: Sem cebola
   Subtotal: R$ 51.80

▪️ *1x Coca-Cola Lata*
   R$ 5.00 cada
   Subtotal: R$ 5.00

*--- RESUMO ---*
Subtotal: R$ 56.80
Taxa de entrega: R$ 5.00
*TOTAL: R$ 61.80*

Obrigado pela preferência! 🙏
```

## 🔒 Segurança

- Dados do carrinho armazenados apenas no navegador (localStorage)
- Nenhuma informação enviada para servidores externos
- Comunicação direta com WhatsApp via URL scheme

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

MIT License - Use como quiser!

## 💡 Dicas e Melhorias Futuras

- [ ] Adicionar sistema de busca de produtos
- [ ] Implementar sistema de cupons de desconto
- [ ] Adicionar opção de retirada no local
- [ ] Criar painel administrativo
- [ ] Integrar com banco de dados (Firebase, Supabase)
- [ ] Adicionar autenticação de usuários
- [ ] Sistema de avaliações de produtos
- [ ] Múltiplos endereços de entrega

## 📞 Suporte

Em caso de dúvidas ou problemas, abra uma issue no GitHub.

---

Feito com ❤️ para facilitar pedidos online de restaurantes
