import { test, expect } from '@playwright/test'
import { Team } from '../pages/Team.js'

test('Team navigation bar', async ({ page }) => {
    await page.goto('https://oportunitatisicariere.ro/');
    const team = new Team(page, expect);

    const roleInput = 'Back-end';
    await team.teamNavigationBar(roleInput);
    await team.verifyMemberTeamDates();
    await team.checkSocialsMediaMember();
    await team.isRoleMachingFilter();

})