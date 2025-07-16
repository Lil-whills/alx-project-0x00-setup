
# ALX Project 0x00 – Next.js Project Setup

This project is part of the **ALX Software Engineering Frontend Specialization**. It focuses on building a structured Next.js application from scratch, leveraging TypeScript, Tailwind CSS, reusable components, routing, props, and interfaces to create a scalable architecture.

---

## 📁 Project Structure

This project was created using the `create-next-app` CLI with TypeScript and Tailwind CSS. The structure is organized into:

- `components/`: Reusable React functional components (Card, Pill, Button)
- `interfaces/`: TypeScript interfaces for component props
- `pages/`: Contains all the routed pages (e.g., `index.tsx`, `landing.tsx`, `about.tsx`)
- `public/assets/`: Static assets such as images

---

## ✅ What I Did – Task Breakdown

### 0. **Scaffolding the Project**
- Used the command:
  ```bash
  npx create-next-app@latest alx-project-0x00 --typescript
  ```
- Selected:
  - ✅ ESLint
  - ✅ Tailwind CSS
  - ✅ Import alias
  - ❌ No `/src` directory
  - ❌ No App Router

- Ran:
  ```bash
  npm run dev
  ```
  And accessed the app via `http://localhost:3000`.

---

### 1. **Set Up Directories**
- Created `components/` and `interfaces/` folders in the root directory.
- Refactored `pages/index.tsx` to use an arrow function and moved the `export default` to the bottom.
- Created:
  - `components/Card.tsx`
  - `components/Pill.tsx`
  - `interfaces/index.ts`

---

### 2. **Basic Routing**
- Created `pages/landing.tsx` and `pages/about.tsx` to understand how Page-based routing works in Next.js.
- Navigated to:
  - `http://localhost:3000/landing`
  - `http://localhost:3000/about`

---

### 3. **Rendering Components**
- Moved images (`house.png`, `star.png`) into `public/assets/images`.
- Wrote and structured the `Card` and `Pill` components with layout, Tailwind utility classes, and image rendering.
- Implemented design-focused layout with responsive and interactive styling.

---

### 4. **Using Components**
- Imported and reused `<Card />` in `landing.tsx`.
- Duplicated `<Card />` multiple times to explore reusability and layout control.

---

### 5. **Typing Functional Components**
- Created a `PillProps` interface in `interfaces/index.ts`:
  ```ts
  export interface PillProps {
    title: string;
  }
  ```
- Updated `Pill.tsx` to accept props:
  ```tsx
  const Pill: React.FC<PillProps> = ({ title }) => { ... }
  ```
- Made the Pill component dynamic using the passed title.

---

### 6. **Advanced Task – Button Component**
- Created a reusable `<Button />` component that takes two props:
  - `title: string`
  - `style: string` (Tailwind utility classes)
- Used the button multiple times in `landing.tsx` with different:
  - Sizes (`px-2 py-1`, `px-4 py-2`, `px-6 py-3`)
  - Shapes (`rounded-sm`, `rounded-md`, `rounded-full`)
- Example usage:
  ```tsx
  <Button title="Click Me" style="px-4 py-2 rounded-md" />
  ```

- Updated `tailwind.config.js` with `safelist` for dynamic classnames to ensure Tailwind doesn’t purge them.

---

## 📚 What I Learned

- ✅ How to scaffold and configure a **Next.js + TypeScript** project
- ✅ Difference between `Pages Router` and `App Router`
- ✅ File-based routing using `pages/` directory
- ✅ Creating **reusable functional components** with **props**
- ✅ How to manage props and types using **TypeScript interfaces**
- ✅ How to use **Tailwind CSS** utility classes effectively
- ✅ Making components dynamic and layout responsive
- ✅ Understanding **component reusability**, **prop drilling**, and clean folder structure
- ✅ Git basics: cloning, pushing, committing, and using proper repo directory naming

---

## 🧠 Final Thoughts

This project introduced me to a real-world Next.js setup. It gave me a practical foundation in:
- Using CLI tools to create fast, production-ready frontend apps
- Writing clean, modular, scalable code
- Embracing TypeScript and Tailwind as modern dev tools

I'm confident that I can now scaffold and organize larger frontend applications using this approach.

---

## 🔗 Repository

**GitHub Repo:** [alx-project-0x00-setup](https://github.com/Lil-whills/alx-project-0x00-setup)

**Project Directory:** `alx-project-0x00`
