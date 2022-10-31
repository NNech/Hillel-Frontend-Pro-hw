class Tabs {
    #currentTabIndex;

    static CLASS_TAB_NAV_BTN = "tab-button";
    static CLASS_TAB_NAV_BTN_ACTIV = "tab-button-activ";
    static CLASS_TAB_CONTENT = "tab-content";
    static CLASS_TAB_CONTENT_ACTIV = "tab-content-activ";
    static CURRENT_TAB_INDEX_DEFAULT = 0;

    constructor(wrapEl) {
        this.wrapEl = wrapEl;

        this.bindStyles();
        this.bindEvent();
        this.setActiveTab(Tabs.CURRENT_TAB_INDEX_DEFAULT);
    }

    bindStyles() {
        const [navEl, contentEl] = this.wrapEl.children;

        for (const navItemEl of navEl.children) {
            navItemEl.classList.add(Tabs.CLASS_TAB_NAV_BTN);
        }

        for (const contentItemEl of contentEl.children) {
            contentItemEl.classList.add(Tabs.CLASS_TAB_CONTENT);
        }
    }

    bindEvent() {
        this.wrapEl.addEventListener("click", this.onWrapElclick.bind(this));
    }

    onWrapElclick(e) {
        if (e.target.classList.contains(Tabs.CLASS_TAB_NAV_BTN)) {
            const btnIndex = this.getTabNavBtnIndex(e.target);
            this.hideActiveTab();
            this.setActiveTab(btnIndex);
        }
    }

    getTabNavBtnIndex(clickedEl) {
        const listOfButtons = Array.from(this.wrapEl.children[0].children);

        for (let i = 0; i < listOfButtons.length; i++) {
            if (clickedEl === listOfButtons[i]) {
                return i;
            }
        }
    }

    hideActiveTab() {
        this.wrapEl.children[0].children[
            this.#currentTabIndex
        ].classList.remove(Tabs.CLASS_TAB_NAV_BTN_ACTIV);
        this.wrapEl.children[1].children[
            this.#currentTabIndex
        ].classList.remove(Tabs.CLASS_TAB_CONTENT_ACTIV);
    }

    setActiveTab(index) {
        this.wrapEl.children[0].children[index].classList.add(
            Tabs.CLASS_TAB_NAV_BTN_ACTIV
        );
        this.wrapEl.children[1].children[index].classList.add(
            Tabs.CLASS_TAB_CONTENT_ACTIV
        );

        this.#currentTabIndex = index;
    }
}
