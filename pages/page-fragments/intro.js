import BaseFragment from './base-fragment.js';


export class Intro extends BaseFragment {
  
    constructor(page) {
        super(page);

        // Set root locator
        this.root = this.page.locator('.intro');

        // Logo in banner
        this.logo = this.getLocator('.intro__container__logo-image');

        // Title next to logo
        this.title = {
            association: this.root.getByRole('heading', { name: 'ASOCIAȚIA' }),
            opportunities: this.root.getByRole('heading', { name: "OPORTUNITĂȚI" }),
            careers: this.root.getByRole('heading', { name: 'ȘI CARIERE' })
        };

        // Watch image
        this.watchImage = this.getLocator(".intro__container-watch");

        // Arrow for navigation
        this.missionArrow = this.root.getByRole("link", { name : 'our-mission' })

    }

    async clickMissionArrow() {
        await this.click(this.missionArrow);
    }

 
    async scrollToIntro() {
        await this.scrollIntoView(this.logo);
    }

}

