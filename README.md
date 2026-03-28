# Frontend Testing Suite (Level 2)

This project is a professional demonstration of **Unit Testing** and **Component Testing** in a React (Next.js) environment using **Jest** and **React Testing Library (RTL)**.

## 🚀 Tech Stack

*   **Framework:** Next.js (React)
*   **Test Runner:** Jest
*   **Testing Library:** React Testing Library (RTL)
*   **User Interaction:** `@testing-library/user-event`
*   **Styling:** Tailwind CSS

## 📂 Project Structure

```text
/src
  /components
    Button.js       - Reusable Button component
    Input.js        - Controlled Input field
    Card.js         - Card for structured content
    Counter.js      - Functional component with interaction
  /tests
    Button.test.js  - Level 1 & 2 tests for Button
    Input.test.js   - Interaction tests for Input
    Card.test.js    - Rendering tests for Card
    Counter.test.js - Advanced interaction tests with userEvent
```

## 🛠️ Setup Instructions

1.  **Clone the project** or copy the files.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to see the components in action.

## 🧪 How to Run Tests

To execute the test suite, run:

```bash
npm test
```

### What's being tested?

*   **Level 1 Tests**: Ensuring components render without crashing and display correct props.
*   **Level 2 Tests**: Testing user interactions like button clicks and typing into inputs.
*   **Advanced Testing**: Using `userEvent` for more realistic simulation of user behavior (e.g., in the Counter component).

## 💡 Best Practices Implemented

*   **Screen Queries**: Using `getByText`, `getByRole`, and `getByPlaceholderText` for semantic testing.
*   **Async Testing**: Properly awaiting `userEvent` actions.
*   **Jest Mocking**: Using `jest.fn()` to verify event handlers are called correctly.
*   **Next.js Integration**: Using official `next/jest` configuration.
