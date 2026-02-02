import BaseFragment from './base-fragment.js';

class Header extends BaseFragment {

    constructor(page) {
        super(page);

        // Set root locator
        this.root = this.page.locator("#top-redirect");

        // Elements relative to root
        this.logo = this.getLocator(".img-logo");
        this.logoTitle = this.getLocator(".nav_logo__title");

        // Mobile-only elements
        if (this.isMobile()) {
            this.hamburgerBtn = this.getLocator("#icon-hamburger");
            this.closeBtn = this.getLocator("#icon-close");
        }
    }

    async clickMisiuneaNoastra() {
    await this.root.getByRole('link', { name: /misiunea/i }).click();
}

    async openHamburgerMenu() {
        await this.hamburgerBtn.click();
    }
}

export default Header;