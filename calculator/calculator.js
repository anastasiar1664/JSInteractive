export class Calculator {
  constructor() {
    this.display = document.getElementById("display");
    this.expression = "";
    this.hasError = false;
  }

  init() {
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        this.handleButtonClick(button.textContent);
      });
    });
    this.updateDisplay();
  }

  handleButtonClick(value) {
    if (this.hasError && value !== "C") {
      this.clear();
    }
    if (value === "C") {
      this.clear();
    } else if (value === "=") {
      this.calculate();
    } else {
    }
  }
}
