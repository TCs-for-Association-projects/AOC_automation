export class Team {

    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
        this.members = page.locator('#team-wrapper.team__members');
        this.names = this.members.locator('h4');
        this.images = this.members.locator('img');
        this.roles = this.members.locator('p')
        this.membersSocialsMedia = this.members.locator('team__member__socials')
        this.linksSocials = this.membersSocialsMedia.locator('span a')
        this.role = null;

    }

    async teamNavigationBar(role) {
        this.role = role;
        const roleButton = this.page.locator(`//button[normalize-space()='${role}']`)
        await this.expect(roleButton).toBeVisible();
        await this.expect(roleButton).toBeEnabled();
        await roleButton.click();

    }

    async verifyMemberTeamDates() {
        const count = await this.members.count();

        for (let i = 0; i < count; i++) {
            const nameMember = await this.names.nth(i).innerText();
            const imageMember = this.images.nth(i);
            const regex = /^[A-Za-zĂÂÎȘȚ][A-Za-zăâîșț\s-]+$/;

            await this.expect(imageMember).toBeVisible();
            await this.expect(nameMember.trim()).toMatch(regex);
        }
    }

}