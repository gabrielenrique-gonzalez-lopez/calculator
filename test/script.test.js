const { calculate, changeTheme } = require("../public/scripts/script");

describe("Calculator Functions", () => {
  it("should correctly calculate expressions", () => {
    expect(calculate("2+2")).toEqual(4);
    expect(calculate("5*10")).toEqual(50);
    expect(calculate("1/0")).toEqual("Can't divide 0 with 0");
  });

  it("should correctly change the theme", () => {
    const theme = document.createElement("link");
    theme.setAttribute("href", "styles/light.css");
    theme.setAttribute("id", "theme");
    document.head.appendChild(theme);

    const themeIcon = document.createElement("img");
    themeIcon.setAttribute("src", "assets/SunIcon.svg");
    themeIcon.setAttribute("id", "theme-icon");
    document.body.appendChild(themeIcon);

    const toast = document.createElement("div");
    toast.setAttribute("id", "toast");
    document.body.appendChild(toast);

    changeTheme();
    expect(theme.getAttribute("href")).toEqual("styles/dark.css");
    expect(themeIcon.getAttribute("src")).toEqual("assets/MoonIcon.svg");
    expect(toast.innerHTML).toEqual("Dark Mode 🌙");

    changeTheme();
    expect(theme.getAttribute("href")).toEqual("styles/light.css");
    expect(themeIcon.getAttribute("src")).toEqual("assets/SunIcon.svg");
    expect(toast.innerHTML).toEqual("Light Mode ☀️");
  });
});