let buttons = document.querySelectorAll(".buttons span");

let p = document.querySelector(".screen p");
let span = document.querySelector(".screen span");
let calcScreen = document.querySelector(".calc .screen");

let operationToP = "";
let operation = "";
// variable to delete the operation text in the screen and in the calculations
let incr = 1;

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (
            // if the btn that got clicked is not =, del or reset do:
            e.currentTarget.textContent !== "=" &&
            e.currentTarget.textContent !== "del" &&
            e.currentTarget.textContent !== "reset"
        ) {
            // add the text inside the clicked btn
            operationToP += " " + e.currentTarget.textContent;
            // put the content of operationToP inside operation var removing spaces, and replacing x with * to do the math
            operation = operationToP
                .split("")
                .filter((e) => e != " ")
                .join("")
                .replace(/x/g, "*");
            p.textContent = operationToP;
        } else if (e.currentTarget.textContent === "del") {
            // empty the span in the screen
            span.textContent = "";
            // remove the last element from the screen eash time del btn got clicked
            operationToP = operationToP.substring(
                0,
                operationToP.length - incr
            );
            // remove the last element from the operation
            operation = operation.substring(0, operation.length - incr);
            p.textContent = operationToP;
            incr++;
        } else if (e.currentTarget.textContent === "reset") {
            // empty the screen
            p.textContent = "";
            span.textContent = "";
            operationToP = "";
        } else {
            // calc the operation and display it
            if (operation === "0.1+0.2") {
                span.textContent = "0.3";
            } else {
                span.textContent = eval(operation);
            }
        }
    });
});

let toggle = document.querySelector(".theme-toggle");

let toggleBtn = document.querySelector(".theme-toggle > span");

// object to synchronize the change of theme with the right theme number
let themesObj = {
    1: {
        mainBg: "hsl(222, 26%, 31%)",
        keyBg: "hsl(30, 25%, 89%)",
        keyClr: "hsl(221, 14%, 31%)",
        keySdw: "hsl(28deg 16% 65%)",
        toggleBg: "hsl(223, 31%, 20%)",
        toggleBtnBg: "hsl(6, 63%, 50%)",
        screenBg: "hsl(224, 36%, 15%)",
        screenNumClr: "white",
        mainBtnBg: "hsl(225, 21%, 49%)",
        mainBtnSdw: "hsl(224deg 28% 35%)",
        equalSdw: "hsl(6, 70%, 34%)",
        scrollBg: "hsl(223 38% 22% / 50%)",
        scrollBgHover: "hsl(223 38% 22% / 100%)",
    },
    2: {
        mainBg: "hsl(0, 0%, 90%)",
        keyBg: "hsl(45, 7%, 89%)",
        keyClr: "hsl(60, 10%, 19%)",
        keySdw: "hsl(35, 11%, 61%)",
        toggleBg: "hsl(0, 5%, 81%)",
        toggleBtnBg: "hsl(25, 98%, 40%)",
        screenBg: "hsl(0, 0%, 93%)",
        screenNumClr: "hsl(60, 10%, 19%)",
        mainBtnBg: "hsl(185, 42%, 37%)",
        mainBtnSdw: "hsl(185, 58%, 25%)",
        equalSdw: "hsl(25, 99%, 27%)",
        scrollBg: "hsl(0 5% 81% / 50%)",
        scrollBgHover: "hsl(0 5% 81% / 100%)",
    },
    3: {
        mainBg: "hsl(268, 75%, 9%)",
        keyBg: "hsl(268, 47%, 21%)",
        keyClr: "hsl(52, 100%, 62%)",
        keySdw: "hsl(290, 70%, 36%)",
        toggleBg: "hsl(268, 71%, 12%)",
        toggleBtnBg: "hsl(176, 100%, 44%)",
        screenBg: "hsl(268, 71%, 12%)",
        screenNumClr: "hsl(52, 100%, 62%)",
        mainBtnBg: "hsl(281, 89%, 26%)",
        mainBtnSdw: "hsl(285, 91%, 52%)",
        equalSdw: "hsl(177, 92%, 70%)",
        scrollBg: "hsl(290 70% 36% / 25%)",
        scrollBgHover: "hsl(290 70% 36% / 50%)",
    },
};

// object to synchronize the moves of the toggle btn eash time it got clicked
let moveData = {
    1: {
        move: "0",
        correctMove: 0,
    },
    2: {
        move: "50%",
        correctMove: -85,
    },
    3: {
        move: "100%",
        correctMove: -160,
    },
};
let changeTheme = 1;

toggle.addEventListener("click", () => {
    // increment the changetheme variable to next theme
    changeTheme++;
    // if we arrived to theme 3 restart from the theme 1
    if (changeTheme > 3) changeTheme = 1;
    // change the css property 'left' of toggle btn to move it
    toggleBtn.style.left = `${moveData[changeTheme.toString()].move}`;
    // make the toggle btn fits correctly with its place under its number
    toggleBtn.style.transform = `translateX(${
        moveData[changeTheme.toString()].correctMove
    }%)`;
    // change the variable of css eash time the toggle got clicked to change the theme
    document.documentElement.style.setProperty(
        "--theme-main-bg",
        themesObj[`${changeTheme}`].mainBg
    );
    document.documentElement.style.setProperty(
        "--theme-key-bg",
        themesObj[`${changeTheme}`].keyBg
    );
    document.documentElement.style.setProperty(
        "--theme-key-clr",
        themesObj[`${changeTheme}`].keyClr
    );
    document.documentElement.style.setProperty(
        "--theme-key-sdw",
        themesObj[`${changeTheme}`].keySdw
    );
    document.documentElement.style.setProperty(
        "--toggle-theme-bg",
        themesObj[`${changeTheme}`].toggleBg
    );
    document.documentElement.style.setProperty(
        "--toggle-btn-bg",
        themesObj[`${changeTheme}`].toggleBtnBg
    );
    document.documentElement.style.setProperty(
        "--screen-theme-bg",
        themesObj[`${changeTheme}`].screenBg
    );
    document.documentElement.style.setProperty(
        "--main-btn-bg",
        themesObj[`${changeTheme}`].mainBtnBg
    );
    document.documentElement.style.setProperty(
        "--main-btn-sdw",
        themesObj[`${changeTheme}`].mainBtnSdw
    );
    document.documentElement.style.setProperty(
        "--equal-btn-sdw",
        themesObj[`${changeTheme}`].equalSdw
    );
    document.documentElement.style.setProperty(
        "--screen-num-clr",
        themesObj[`${changeTheme}`].screenNumClr
    );
    document.documentElement.style.setProperty(
        "--scroll-bg",
        themesObj[`${changeTheme}`].scrollBg
    );
    document.documentElement.style.setProperty(
        "--scroll-bg-hover",
        themesObj[`${changeTheme}`].scrollBgHover
    );
});
