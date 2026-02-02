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

    async checkSocialsMediaMember() {
        const socialsCount = await this.membersSocialsMedia.count();
        for (let i = 0; i < socialsCount; i++) {
            const linksMember = this.linksSocials.nth(i).locator('span a')

            await this.expect(linksMember).toHaveCount(3)
            const expectedHrefs = ['linkedin.com', 'github.com', 'discord.com'];

            for (let j = 0; j < 3; j++) {
                const link = linksMember.nth(j);
                const href = await this.link.getAttribute('href')
                await this.expect(link).toBeVisible();
                await this.expect(link).toBeEnabled();
                await this.expect(href).toContain(expectedHrefs[j])
            }
        }
    }

    async isRoleMachingFilter() {
        const roleKeywordsMap = {
            QA: ['QA Manager', 'Test Lead', 'Manual Tester', 'Automation Tester'],
            Cybersecurity: ['Data Protection Officer'],
            Core: ['Product Owner', 'Project Manager', 'UI/UX Expert', 'CTO', 'Lead'],
            Scraping: ['Scraper', 'Scraping'],
        };

        const keywords = roleKeywordsMap[this.role];
        const countRoles = await this.roles.count();

        for (let i = 0; i < countRoles; i++) {
            const roleName = await this.roles.nth(i).innerText();

            if (keywords) {
                // verificăm doar primul match
                for (let j = 0; j < keywords.length; j++) {
                    await this.expect(roleName.includes(keywords[j])).toBeTruthy();
                    break; // oprește după primul match găsit
                }
            } else {
                await this.expect(roleName.includes(this.role)).toBeTruthy();
            }
        }
    }

}

