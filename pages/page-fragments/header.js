import BaseFragment from './base-fragment.js';


class Header extends BaseFragment {
 
  constructor(page) {
    super(page);
    // Set root locator
    this.root = this.page.locator("#top-redirect");
    
    // Elements relative to root
    this.logo = this.getLocator(".img-logo");
    // Hidden but exists on page, just has opacity: 0 in CSS
    this.logoTitle = this.getLocator(".nav__logo__title");
    if(this.isMobile()){
      this.hamburgerBtn = this.getLocator("#icon-hamburger");
      this.closeBtn = this.getLocator("#icon-close");
    }
    // Navigation links
    this.navLinks = this.getLocator(".nav__links__list a");
    this.missionLink = this.getLocator('a[href="#our-mission"]');
    this.contributeLink = this.getLocator('a[href="#how-contribute"]');
    // Social links container
    this.socialLinks = this.getLocator("#socialLinks");
    this.discordSocial = this.socialLinks.locator('a[href*="discord"]');
    // Join button
    this.joinBtn = this.getLocator('.primary-btn:has-text("Alătură-te")');
  }


  async openHamburgerMenu() {
    if (this.isMobile()){
      await this.click(this.hamburgerBtn);
    } 
  }

 
  async closeMenu() {
    if (this.isMobile()){
      await this.click(this.closeBtn);
    } 
  }

 
  async clickMissionLink() {
    await this.click(this.missionLink);
  }


  async clickJoinDiscord() {
    await this.click(this.joinBtn);
  }


  async getNavLinkCount() {
    return await this.navLinks.count();
  }
}


export default Header;


