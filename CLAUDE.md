# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working with the Cardápio Digital codebase.

## Project Overview

**Cardápio Digital** is a modern digital menu system with WhatsApp integration for restaurants. It's a full-stack web application built with Next.js 14, TypeScript, and Tailwind CSS that allows customers to browse products, add items to cart, and send orders directly via WhatsApp.

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS 3.4+
- **State Management**: React Context API
- **Icons**: React Icons 5.0
- **Node Version**: 20 (see `.nvmrc`)

## Codebase Structure

```
cardapio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with metadata and providers
│   │   ├── page.tsx            # Home page with product grid
│   │   └── globals.css         # Global styles and Tailwind directives
│   │
│   ├── components/             # React components (all client-side)
│   │   ├── Header.tsx          # Top navigation with restaurant name
│   │   ├── CategoryFilter.tsx  # Category pills for filtering
│   │   ├── ProductCard.tsx     # Individual product display
│   │   └── Cart.tsx            # Floating cart with checkout
│   │
│   ├── contexts/               # React Context providers
│   │   └── CartContext.tsx     # Cart state management + localStorage
│   │
│   ├── data/                   # Configuration and static data
│   │   ├── config.ts           # Restaurant settings (WhatsApp, fees, etc.)
│   │   ├── categories.ts       # Product categories array
│   │   └── products.ts         # Product catalog array
│   │
│   └── types/                  # TypeScript type definitions
│       └── index.ts            # All interfaces (Product, CartItem, etc.)
│
├── public/                     # Static assets
│   └── logo.png               # Restaurant logo
│
├── .nvmrc                     # Node.js version (20)
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind theme customization
├── tsconfig.json              # TypeScript configuration
├── .eslintrc.json             # ESLint configuration
├── package.json               # Dependencies and scripts
├── README.md                  # User-facing documentation
├── CONTRIBUTING.md            # Contribution guidelines
└── CHANGELOG.md               # Version history
```

## Architecture Patterns

### 1. Client-Side Components
All components use `'use client'` directive as they involve interactivity (state, effects, events).

### 2. State Management
- **Cart State**: Managed via Context API (`CartContext`)
- **Local State**: Component-level with `useState` for UI state
- **Persistence**: Cart data saved to localStorage automatically
- **Memoization**: `useMemo` for expensive computations (filtering)

### 3. Data Flow
```
Static Data (data/*.ts)
    ↓
Components consume via imports
    ↓
User interactions → CartContext
    ↓
CartContext updates → localStorage
    ↓
WhatsApp integration (URL scheme)
```

### 4. Type Safety
- All data structures defined in `src/types/index.ts`
- Strict TypeScript mode enabled
- No `any` types used in codebase
- Type imports use `@/` path alias

### 5. Styling Approach
- **Utility-first**: Tailwind CSS classes directly in JSX
- **Mobile-first**: Responsive design with sm:, md:, lg:, xl: breakpoints
- **Color system**: Custom primary color palette (red theme)
- **No CSS modules**: All styling via Tailwind utilities

## Key Files and Their Purpose

### Configuration Files

#### `src/data/config.ts`
Restaurant configuration - **ALWAYS CHECK THIS FIRST** when working with business logic:
```typescript
- name: Restaurant name displayed in header
- whatsappNumber: Format MUST be '5511999999999' (country+area+number)
- logo: Path to logo in /public
- primaryColor: Main brand color (hex)
- welcomeMessage: Greeting text
- deliveryFee: Delivery charge (number)
- minimumOrder: Minimum order value (number)
```

#### `src/data/products.ts`
Product catalog - array of Product objects:
```typescript
- id: Unique string identifier
- name: Product name
- description: Product description
- price: Number (not string)
- image: Full URL to image (must be whitelisted in next.config.js)
- category: Must match a category.id from categories.ts
- available: Boolean for stock status
```

#### `src/data/categories.ts`
Categories array - used for filtering:
```typescript
- id: Unique string identifier (matches product.category)
- name: Display name
- icon: Emoji string (🍔, 🍕, etc.)
```

### Component Files

#### `src/contexts/CartContext.tsx`
**Critical component** - manages all cart operations:
- Provides: `cart`, `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, `totalItems`, `totalPrice`
- Automatically syncs with localStorage
- Must wrap entire app in layout.tsx

#### `src/app/layout.tsx`
Root layout:
- Wraps children with CartProvider
- Sets up HTML metadata
- Defines font family (system fonts)

#### `src/app/page.tsx`
Main page:
- Manages category filtering state
- Renders Header, CategoryFilter, ProductCard grid, and Cart
- Uses useMemo for performance optimization

### Type Definitions

#### `src/types/index.ts`
All TypeScript interfaces:
- `Product`: Base product structure
- `Category`: Category structure
- `CartItem`: Product + quantity + observations
- `RestaurantConfig`: Configuration structure

## Development Workflows

### Adding a New Product

1. Open `src/data/products.ts`
2. Add new object to products array:
   ```typescript
   {
     id: 'unique-slug',
     name: 'Product Name',
     description: 'Detailed description',
     price: 29.90,
     image: 'https://images.unsplash.com/...',
     category: 'existing-category-id',
     available: true,
   }
   ```
3. Ensure category exists in `src/data/categories.ts`
4. If using new image domain, add to `next.config.js` remotePatterns

### Adding a New Category

1. Open `src/data/categories.ts`
2. Add to categories array:
   ```typescript
   {
     id: 'category-slug',
     name: 'Category Name',
     icon: '🎨', // Choose appropriate emoji
   }
   ```
3. Update products in `src/data/products.ts` to use new category

### Creating a New Component

1. Create file in `src/components/ComponentName.tsx`
2. Start with `'use client'` if using state/effects/events
3. Import types from `@/types`
4. Use TypeScript for all props
5. Style with Tailwind classes (mobile-first)
6. Follow existing naming conventions (PascalCase)

### Modifying Business Logic

1. **Configuration changes**: Edit `src/data/config.ts`
2. **Cart logic**: Modify `src/contexts/CartContext.tsx`
3. **Display logic**: Update relevant component in `src/components/`
4. **Type changes**: Update `src/types/index.ts` first, then fix type errors

### WhatsApp Integration

The WhatsApp message is generated in `src/components/Cart.tsx`:
- Uses URL scheme: `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
- Message format is hardcoded in the component
- Includes: customer info, items with observations, pricing breakdown
- **Do not modify** the number format - must remain international format

## Key Conventions

### Code Style

1. **TypeScript**: Always use explicit types, never `any`
2. **Functional Components**: Use arrow functions with typed props
3. **Imports**: Use `@/` path alias (configured in tsconfig.json)
4. **Client Components**: Add `'use client'` at top when needed
5. **Naming**:
   - Components: PascalCase (e.g., `ProductCard.tsx`)
   - Files: Match component name
   - Functions: camelCase (e.g., `addToCart`)
   - Constants: camelCase or UPPER_SNAKE_CASE

### TypeScript Patterns

```typescript
// Component props
interface ComponentProps {
  item: Product;
  onSelect: (id: string) => void;
}

// Always destructure props
export default function Component({ item, onSelect }: ComponentProps) {
  // Implementation
}

// Use type inference where obvious
const [count, setCount] = useState(0); // Type inferred as number
```

### Styling Patterns

```typescript
// Mobile-first responsive design
<div className="px-4 sm:px-6 lg:px-8">

// Conditional classes
<button className={`base-classes ${isActive ? 'active-classes' : 'inactive-classes'}`}>

// Use primary color system
<div className="bg-primary-500 hover:bg-primary-600">
```

### State Management Patterns

```typescript
// Local UI state
const [isOpen, setIsOpen] = useState(false);

// Cart operations - always use context
const { cart, addToCart, removeFromCart } = useCart();

// Memoize expensive computations
const filtered = useMemo(() =>
  items.filter(item => item.category === selected),
  [items, selected]
);
```

## Common Tasks

### Task: Add Search Functionality

1. Add search state to `src/app/page.tsx`
2. Create `SearchBar.tsx` component in `src/components/`
3. Update filtering logic to include search term
4. Update memoization dependencies

### Task: Add New Payment Method

1. Update `RestaurantConfig` type in `src/types/index.ts`
2. Add payment options to `src/data/config.ts`
3. Update checkout form in `src/components/Cart.tsx`
4. Modify WhatsApp message template

### Task: Customize Theme Colors

1. Edit `tailwind.config.ts` colors.primary object
2. Update `primaryColor` in `src/data/config.ts`
3. Ensure contrast ratios meet accessibility standards

### Task: Add Product Images

1. Upload images to hosting service (Unsplash, Cloudinary, etc.)
2. Get full HTTPS URL
3. Add domain to `next.config.js` remotePatterns if new domain
4. Update product.image in `src/data/products.ts`

## Testing and Quality

### Before Committing

```bash
# Check linting
npm run lint

# Verify build
npm run build

# Check TypeScript
npx tsc --noEmit
```

### Common Build Issues

1. **Image domain not whitelisted**: Add to `next.config.js` remotePatterns
2. **TypeScript errors**: Run `npx tsc --noEmit` to see all errors
3. **Missing dependencies**: Delete node_modules and `npm install`
4. **Port in use**: Kill process on port 3000 or use `PORT=3001 npm run dev`

## Git Workflow

### Commit Message Format

Follow semantic commit style:
```
feat: add product search functionality
fix: correct cart total calculation
docs: update README with new features
style: format code with prettier
refactor: simplify cart context logic
chore: update dependencies
```

### Branch Strategy

- Work on feature branches
- Name format: `feature/description` or `fix/description`
- Keep commits atomic and focused
- Write descriptive commit messages

## Important Notes for AI Assistants

### ⚠️ Critical Rules

1. **Never modify** the WhatsApp number format - must stay international
2. **Always check** `src/data/config.ts` before making business logic changes
3. **Type safety first** - update types before implementing features
4. **Mobile-first** - test responsive design at all breakpoints
5. **Build verification** - always run `npm run build` before finalizing

### When Making Changes

1. **Read first**: Always read relevant files before modifying
2. **Type check**: Ensure TypeScript types are updated
3. **Test locally**: Verify changes work in dev mode
4. **Build check**: Ensure production build succeeds
5. **Document**: Update README.md if adding user-facing features

### File Modification Priority

When implementing features, modify files in this order:
1. `src/types/index.ts` - Type definitions first
2. `src/data/` - Configuration and data
3. `src/contexts/` - State management
4. `src/components/` - UI components
5. `src/app/` - Pages and layouts

### Common Pitfalls to Avoid

1. ❌ Don't use `any` type
2. ❌ Don't modify localStorage directly (use CartContext)
3. ❌ Don't add images without whitelisting domain
4. ❌ Don't forget `'use client'` for interactive components
5. ❌ Don't use CSS modules (use Tailwind only)
6. ❌ Don't hard-code values (use config.ts)
7. ❌ Don't skip mobile-first responsive design

## Environment and Runtime

### Node.js Version
- Required: Node.js 20 (specified in `.nvmrc`)
- Use `nvm use` to switch to correct version

### Scripts
```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Dependencies
- **React 18.3+**: Latest features including concurrent rendering
- **Next.js 14.2+**: App Router (not Pages Router)
- **TypeScript 5+**: Latest version with all strict checks
- **Tailwind 3.4+**: Modern utility classes

## Performance Considerations

1. **Images**: Use Next.js Image component for optimization
2. **Memoization**: Use `useMemo` and `useCallback` for expensive operations
3. **Bundle size**: Keep dependencies minimal
4. **Lazy loading**: Consider for large product catalogs
5. **localStorage**: Cart data is persisted automatically

## Accessibility

- Use semantic HTML elements
- Ensure sufficient color contrast (WCAG AA minimum)
- Add appropriate ARIA labels where needed
- Test keyboard navigation
- Verify mobile touch targets are adequate (min 44x44px)

## Security

- No sensitive data stored in code
- WhatsApp integration uses client-side URL scheme only
- No backend authentication required
- localStorage is client-side only (user's browser)
- All external images must use HTTPS

## Deployment

### Recommended Platform: Vercel
1. Connect GitHub repository
2. Deploy automatically on push to main
3. Environment variables not required for basic setup

### Alternative Platforms
- Netlify (similar to Vercel)
- Railway (Docker-based)
- AWS Amplify (AWS ecosystem)

### Build Configuration
- Build command: `npm run build`
- Output directory: `.next`
- Node.js version: 20

## Future Enhancement Ideas

Reference README.md section "💡 Dicas e Melhorias Futuras" for roadmap:
- Product search
- Discount coupons
- Pickup option
- Admin panel
- Database integration (Firebase/Supabase)
- User authentication
- Product reviews
- Multiple delivery addresses

## Quick Reference

### Most Frequently Modified Files
1. `src/data/products.ts` - Adding/editing products
2. `src/data/config.ts` - Restaurant settings
3. `src/components/Cart.tsx` - Checkout logic
4. `tailwind.config.ts` - Theme customization

### Key Type Interfaces
- `Product` - Product structure
- `CartItem` - Cart item with quantity
- `RestaurantConfig` - Configuration structure
- `Category` - Product category

### Essential Imports
```typescript
import { Product, CartItem, Category } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { restaurantConfig } from '@/data/config';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
```

---

**Last Updated**: 2025-11-21
**Version**: 1.0
**Maintained for**: AI assistants working with this codebase
