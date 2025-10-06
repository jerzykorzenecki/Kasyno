let budget = 1000;
document.addEventListener("DOMContentLoaded", () => {
    const budgetDisplay = document.getElementById("budget");
    if (budgetDisplay) {
        budgetDisplay.textContent = budget;
    }
});

// Funkcje, które będą wykorzystywane w grach:
function getBudget() {
    return budget;
}
function updateBudget(change) {
    budget += change;
    if (budget < 0) budget = 0;
    const budgetDisplay = document.getElementById("budget");
    if (budgetDisplay) budgetDisplay.textContent = budget;
}