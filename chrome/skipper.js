const Skip = (button) => {
    chrome.storage.sync.get(["Recap","Intro", "Credits", "Preview"], (canSkip) => {
        switch(button.innerText) {
            case "SKIP RECAP":
                if (!canSkip.Recap) {
                    if ( canSkip.Recap === false ) return;
                    chrome.storage.sync.set({Recap: true});
                };
                button.getElementsByTagName("div")[0].click();
                break;
            case "SKIP INTRO":
                if (!canSkip.Intro) {
                    if ( canSkip.Intro === false ) return;
                    chrome.storage.sync.set({Intro: true});
                };
                button.getElementsByTagName("div")[0].click();
                break;
            case "SKIP CREDITS":
                if (!canSkip.Credits) {
                    if ( canSkip.Credits === false ) return;
                    chrome.storage.sync.set({Credits: true});
                };
                button.getElementsByTagName("div")[0].click();
                break;
            case "SKIP PREVIEW":
                if (!canSkip.Preview) {
                    if ( canSkip.Preview === false ) return;
                    chrome.storage.sync.set({Preview: true});
                };
                button.getElementsByTagName("div")[0].click();
                break;
        }
    });
}

const IsSkipButton = (changes) => {
    let skipButton;
    
    for ( const change of changes ) {
        for ( const child of change.addedNodes ) {
            if ( child.ariaLabel !== "Skip Intro" ) continue;

            skipButton = child;
            break;
        }

        if ( skipButton ) break;
    }

    if ( !skipButton ) return;

    Skip(skipButton);
}

const childrenChanged = new MutationObserver(IsSkipButton);


const buttonParent = document.getElementById("velocity-controls-package");

childrenChanged.observe(buttonParent, { childList: true });










/* const FindButtonParent = (iframe) => {
    let buttonParent = iframe.getElementById("velocity-controls-package");

    if ( !buttonParent ) {
        const parentAdded = new MutationObserver((changes, observer) => {
            buttonParent = iframe.getElementById("velocity-controls-package");
            
            if ( !buttonParent ) return;
            console.log("buttonParent found")
            observer.disconnect();
            childrenChanged.observe(buttonParent, { childList: true });
        });

        parentAdded.observe(iframe, { childList: true, subtree: true })
    } else {
        childrenChanged.observe(buttonParent, { childList: true });
    }
}

console.log(window.location)
let iframe = document.getElementsByTagName("iframe")[0];

if ( !iframe ) {
    const iframeAdded = new MutationObserver((changes, observer) => {
        iframe = document.getElementsByTagName("iframe")[0];

        if ( !iframe ) return;
        
        observer.disconnect();
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        console.log(innerDoc)
        console.log(document.querySelectorAll("#vilos"))
        FindButtonParent(innerDoc);
    });

    iframeAdded.observe(document, { childList: true, subtree: true });
} else {
    const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    FindButtonParent(innerDoc);
} */

// document.getElementsByClassName("css-1dbjc4n r-1awozwy r-lj0ial r-1jd5jdk r-1loqt21 r-18u37iz r-eu3ka r-1777fci r-kuhrb7 r-ymttw5 r-u8s1d r-1ff5aok r-1otgn73")[0].click()