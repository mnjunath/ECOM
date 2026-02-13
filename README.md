# 🛒 Authentication-Based E-Commerce Dashboard

A fully responsive E-Commerce Dashboard built using **React**, **Redux Toolkit**, and **Tailwind CSS**.

This project demonstrates authentication flow, protected routes, session management, product listing with infinite scroll, cart functionality, and profile editing — all without a backend.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- Protected Routes
- 5-minute Session Management
- Auto Logout on Session Expiry
- Persistent Login using localStorage

### 🛍 Products
- Fetches products from DummyJSON API
- Infinite Scroll
- Debounced Search
- Loading State
- Empty State Handling

### 🛒 Cart
- Add to Cart
- Prevent Duplicate Items
- Increase / Decrease Quantity
- Remove Items
- Dynamic Subtotal & Total Calculation
- Empty Cart Handling

### 👤 Profile
- Edit Name
- Edit Email
- Edit Password
- Updates Redux State & localStorage
- Instant UI Update

### 🎨 UI / UX
- Fully Responsive (Mobile, Tablet, Desktop)
- Clean Premium Minimal Design
- Consistent Spacing & Typography
- Toast Notifications for Feedback

---

## 🛠 Tech Stack

- React (Vite)
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify
- DummyJSON Public API

---

## 📂 Project Structure

```

src/
├── app/
│    └── store.js
├── features/
│    ├── auth/
│    ├── cart/
│    ├── products/
│    └── ui/
├── components/
├── layouts/
├── pages/
├── services/
└── utils/

```

---

## 🔐 Authentication Flow

1. User registers (data stored in localStorage).
2. User logs in with email and password.
3. On login:
   - Session expiry is set for 5 minutes.
   - User state saved in Redux.
   - Session saved in localStorage.
4. Protected routes restrict unauthorized access.
5. Session auto-expires after 5 minutes.
6. Auto logout + redirect to login.

---

## 📦 Product API

Products are fetched from:

```

[https://dummyjson.com/products](https://dummyjson.com/products)

````

Features implemented:
- Pagination using `limit` and `skip`
- Infinite scroll with IntersectionObserver
- Debounced search using `setTimeout`
- Proper loading and error handling

---

## 🛒 Cart Logic

- Cart state managed globally using Redux.
- Duplicate items increase quantity instead of re-adding.
- Cart total calculated dynamically.
- Subtotal shown per item.
- Remove functionality implemented.

---

## 👤 Profile Management

- Editable user profile.
- Updates Redux store.
- Updates localStorage.
- UI updates immediately without refresh.

---

## 🧠 Concepts Demonstrated

- Global State Management (Redux Toolkit)
- Protected Routing
- Session Handling
- Async Thunks
- LocalStorage Persistence
- Infinite Scrolling
- Debounced Input Handling
- Clean Folder Structure
- Separation of Logic and UI

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd ecommerce-dashboard
````

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## 📱 Responsive Design

* Mobile-first layout
* Grid-based product display
* Clean spacing system
* Minimal premium aesthetic

---

## 📌 Notes

* No backend is used.
* Authentication is simulated using localStorage.
* Built as part of a frontend internship assignment.

---

## 👨‍💻 Author

**Manjunath Reddy**
Frontend Developer (React | Redux | Tailwind CSS)
