const openings = document.getElementById("openings");
const endings  = document.getElementById("endings");
const recaps   = document.getElementById("recaps");
const previews = document.getElementById("previews");


function ToggleOpenings() {
    chrome.storage.sync.set({Intro: openings.checked});
}

function ToggleEndings() {
    chrome.storage.sync.set({Credits: endings.checked});
}

function ToggleRecaps() {
    chrome.storage.sync.set({Recap: recaps.checked});
}

function TogglePreviews() {
    chrome.storage.sync.set({Preview: previews.checked});
}

openings.addEventListener("click", ToggleOpenings);
endings.addEventListener("click", ToggleEndings);
recaps.addEventListener("click", ToggleRecaps);
previews.addEventListener("click", TogglePreviews);

function CheckedDefault(canSkip) {
    if (!canSkip.Intro) {
        if ( canSkip.Intro !== false ) {
            chrome.storage.sync.set({Intro: true});
        };
    };

    if (!canSkip.Credits) {
        if ( canSkip.Credits !== false ) {
            chrome.storage.sync.set({Credits: true});
        };
    };

    if (!canSkip.Recap) {
        if ( canSkip.Recap !== false ) {
            chrome.storage.sync.set({Recap: true});
        };
    };

    if (!canSkip.Preview) {
        if ( canSkip.Preview !== false ) {
            chrome.storage.sync.set({Preview: true});
        };
    };
}

window.onload = () => {
    chrome.storage.sync.get(["Recap","Intro", "Credits", "Preview"], (canSkip) => {
        CheckedDefault(canSkip);

        openings.checked = (canSkip.Intro   === false) ? false : true;
        endings.checked  = (canSkip.Credits === false) ? false : true;
        recaps.checked   = (canSkip.Recap   === false) ? false : true;
        previews.checked = (canSkip.Preview === false) ? false : true;
    });
};