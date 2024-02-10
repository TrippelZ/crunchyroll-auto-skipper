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
