export default class OurMissionPage {
    constructor(page) {
        this.page = page;

        this.section = page.locator('#our-mission');
        this.title = this.section.getByRole('heading', { name: /misiunea noastră/i });

        this.textSimplificam = this.section.getByText(/simplificăm procesul de căutare/i);
        this.textVoluntari = this.section.getByText(/echipa noastră de voluntari/i);
    }

    async waitForLoaded() {
        await this.section.waitFor();
    }
}

