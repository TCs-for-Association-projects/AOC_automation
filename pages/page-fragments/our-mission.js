import BaseFragment from './base-fragment.js';
import { expect } from '@playwright/test';


export class OurMission extends BaseFragment {
  
    constructor(page) {
        super(page);

        // Set root locator
        this.root = this.page.locator('#our-mission');
        
        this.heading = this.root.getByRole('heading', { name: 'Misiunea noastră' });
        this.underline = this.getLocator('.underline');

        this.description = this.getLocator('.description');
        this.peviitorLink = this.description.locator('p > a');

        // Not sure what this arrow does
        this.arrow = this.description.getByAltText('right arrow');

        // It's basically an href with an image
        this.peviitorImageLink = this.root.locator("//div[@class='search-engine aos-init aos-animate']//a");

    }


    async scrollToMission() {
        await this.scrollIntoView(this.heading);
        
    }

 
    async expectLinksToBeCorrect() {
        await expect(this.peviitorLink).toHaveAttribute('href', 'https://peviitor.ro/');
        
        await expect(this.peviitorImageLink).toHaveAttribute('href', 'https://peviitor.ro/')
    }

}


