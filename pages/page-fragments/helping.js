export class HelpingPage {
constructor(page) {
  this.page = page;
  this.search_textbox = page.getByPlaceholder('Caută...');
  this.leftarrow = page.locator('.swiper-button-prev');
  this.rightarrow = page.locator('.swiper-button-next');
  this.emailLink = page.locator('a[href="mailto: aocpeviitor@gmail.com"]');
  this.declaratieLink = page.locator('a[href="https://redirectioneaza.ro/asociatia-oportunitati-si-cariere/" ]');
}

async gotoHelpingPage() {
  await this.page.goto('https://oportunitatisicariere.ro/index.html#how-contribute');
}

    async searchJobs(jobs) {
    for (const job of jobs) {
      // scrie jobul
      await this.search_textbox.fill(job);
      await this.page.waitForTimeout(700);

      // apasă săgeți
      await this.rightarrow.click();
      await this.rightarrow.click();
      await this.leftarrow.click();

      // mică pauză între joburi
      await this.page.waitForTimeout(700);

      // curăță inputul
      await this.search_textbox.clear();
    }
  
}
async clickEmail() {
  await this.emailLink.click();
}

async clickDeclaratie() {
  await this.declaratieLink.click();
}
}
