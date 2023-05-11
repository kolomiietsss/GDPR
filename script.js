console.log(11)
let customSettings = {
    necessaryCookies: true,
    analyticalCookies: true,
    rightToAccessData: true,
    rightToDataRectification: true,
    rightToBeForgotten: true,
    rightToRestrictionProcessing: true,
    rightToMobility: false,
    rightToObject: false,
    rightFromSelectionAndProfiling: false

}

function setBasicCookies(daysToLive = 30) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    document.cookie = `acceptBasicCookies=true; expires=${date}; path=/`;
}

function setAnalyticalCookies(daysToLive = 30) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    document.cookie = `acceptAnalyticalCookies=true; expires=${date}; path=/`;
}

function setNoneCookies(daysToLive = 30) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    document.cookie = `acceptNoneCookies=true; expires=${date}; path=/`;
}

function setCheckboxes() {
    customSettings.necessaryCookies = document.querySelector('#necessaryCookies').checked;
    customSettings.analyticalCookies = document.querySelector('#analyticalCookies').checked;
    customSettings.rightToAccessData = document.querySelector('#rightToAccessData').checked;
    customSettings.rightToDataRectification = document.querySelector('#rightToDataRectification').checked;
    customSettings.rightToBeForgotten = document.querySelector('#rightToBeForgotten').checked;
    customSettings.rightToRestrictionProcessing = document.querySelector('#rightToRestrictionProcessing').checked;
    customSettings.rightToMobility = document.querySelector('#rightToMobility').checked;
    customSettings.rightToObject = document.querySelector('#rightToObject').checked;
    customSettings.rightFromSelectionAndProfiling = document.querySelector('#rightFromSelectionAndProfiling').checked;

    // console.log(customSettings);
}


let popUp = document.getElementById("cookiePopup");
let buttonsBlock = document.getElementById("buttonsBlock");
let basicInformationBlock = document.getElementById("basicInformation");


let additionalSettingsBlock = document.getElementById("additional-settings");


document.getElementById("acceptCookie").addEventListener("click", () => {
    console.log(22)
    setBasicCookies();
    setAnalyticalCookies();
    popUp.classList.add("hide");
    popUp.classList.remove("show");
});

document.getElementById("refuseCookie").addEventListener("click", () => {
    setNoneCookies();
    popUp.classList.add("hide");
    popUp.classList.remove("show");
});

document.getElementById("settingsCookie").addEventListener("click", () => {

    basicInformationBlock.classList.add("hide");
    basicInformationBlock.classList.remove("show");

    buttonsBlock.classList.add("hide-fake");
    buttonsBlock.classList.remove("show");

    additionalSettingsBlock.classList.remove("hide");
    additionalSettingsBlock.classList.add("show");


});

document.getElementById("goBackCookie").addEventListener("click", () => {
    additionalSettingsBlock.classList.remove("show");
    additionalSettingsBlock.classList.add("hide");

    basicInformationBlock.classList.add("show");
    basicInformationBlock.classList.remove("hide");

    buttonsBlock.classList.add("show");
    buttonsBlock.classList.remove("hide-fake");
});

document.getElementById("acceptCustomCookie").addEventListener("click", () => {
    setCheckboxes();

    popUp.classList.add("hide");
    popUp.classList.remove("show");
});


function checkExistingCookie() {
    let input = document.cookie.split("=");
    if (input[0] == "acceptBasicCookies" || input[0] == "acceptNoneCookies") {
        popUp.classList.add("hide");
        popUp.classList.remove("show");
    } else {
        popUp.classList.add("show");
        popUp.classList.remove("hide");
    }
};


window.onload = () => {
    setTimeout(() => {
        checkExistingCookie();
    }, 1);
};