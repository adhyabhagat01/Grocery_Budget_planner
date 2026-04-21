Based on the project files provided, here is the `README.md` content for the **Grocery Budget Planner for Students**. [cite_start]This documentation is compiled from the project's research, UI/UX design, and front-end implementation details found in the repository materials[cite: 221, 222, 255].

***

# Grocery Budget Planner for Students

[cite_start]A specialized mobile-first application designed to help college students manage their grocery expenses, track consumption, and compare prices across popular quick-commerce platforms[cite: 57, 61, 72].

## 📌 Problem Statement
College students often face difficulties managing grocery expenses due to:
* [cite_start]**Limited Budgets:** Relying on irregular income or fixed monthly allowances[cite: 62, 67].
* [cite_start]**Lack of Tracking:** Realizing overspending only at the end of the month[cite: 63, 68].
* [cite_start]**Inefficiency:** Unintentional duplicate purchases and food wastage[cite: 64, 87].
* [cite_start]**Price Disparity:** Struggling to identify the cheapest platform among Blinkit, Instamart, and Zepto[cite: 65, 89].

## ✨ Key Features
* [cite_start]**Real-time Expense Tracking:** Record daily spending to maintain financial awareness[cite: 92, 212].
* [cite_start]**Price Comparison:** Compare item prices across different quick-commerce platforms to maximize savings[cite: 94, 168].
* [cite_start]**Grocery Usage Monitoring:** Track stock levels to avoid duplicate purchases[cite: 93, 148].
* [cite_start]**Visual Analytics:** Spending summaries through interactive pie charts and bar charts[cite: 169, 457, 460].
* [cite_start]**Budget Alerts:** Notifications when spending reaches a defined threshold (e.g., 80% of monthly budget)[cite: 126, 483, 707].

## 🛠️ Technology Stack
* [cite_start]**Design:** Figma (Interactive Prototyping) [cite: 253, 961]
* [cite_start]**Front-end:** React.js [cite: 722, 742]
* [cite_start]**Routing:** React Router DOM [cite: 745, 772]
* [cite_start]**Icons:** Lucide-React [cite: 746]
* [cite_start]**Styling:** CSS3 (including custom variables for a student-centric theme) [cite: 795, 797]

## 📁 Project Structure
```text
grocery-budget-planner/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Header, BottomNav)
│   ├── screens/         # Application pages (Dashboard, Login, Expenses, etc.)
│   ├── App.jsx          # Main application routing
│   ├── App.css          # Main layout styles
│   └── index.css        # Global styles and design tokens
├── package.json         # Project dependencies
└── README.md            # Project documentation
```
[cite_start][cite: 768]

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/adhyabhagat01/Grocery_Budget_planner.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 👤 User Personas
The app is designed around two primary student types:
1.  [cite_start]**The Budget-Conscious (e.g., Riya Sharma):** Needs to stay strictly within a monthly allowance and avoid any wastage[cite: 129, 286].
2.  [cite_start]**The Busy Student (e.g., Arjun Patel):** Balancing work and study, seeking quick automated tracking and the best deals[cite: 151, 320].

## 🧪 Results & Testing
[cite_start]Usability testing conducted with students revealed a high demand for a unified app (88% of surveyed students)[cite: 106, 281]. [cite_start]Feedback sessions led to the addition of budget alerts and a simplified navigation layout to reduce cognitive load[cite: 705, 708].

## 🎓 Contributors
* [cite_start]**Adhya Bhagat** [cite: 229]
* [cite_start]**Sakshi Patil** [cite: 230]
* [cite_start]*Under the guidance of Prof. Varsha Pandagre* [cite: 231]
