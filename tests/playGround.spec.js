// @ts-check

import { test, expect } from '@playwright/test';

import { Playground } from '../pages/playground';

test('Button section - button displays correct status after clicking', async ({ page }) => {

  const playground = new Playground(page);

  const buttonLoadTimeout = 2000;

  await playground.navigateTo();

 

  await playground.clickableButton.click(); 

  await expect(playground.clickableButtonStatus).toContainText(playground.clickedStatus);
  await page.getByRole('button', { name: 'clicked' }).click();

  await expect(playground.page.getByTestId('btn-state')).toContainText(playground.initalStatus);

}); 

test('Button with timer - single click', async ({ page }) => {
  const playground = new Playground(page);

  const buttonLoadTimeout = 7000;

  await playground.navigateTo()
  await expect(playground.timerButton).toBeVisible(); 

  await expect(playground.timerResuls).toContainText('Waiting for click');

  await playground.setTimer.click();

  await expect(playground.timerResuls).toHaveText('Processing...');

  await expect(playground.timerResuls).toHaveText('Complete', { timeout: buttonLoadTimeout });

});
test ('Button with timer - multiple click', async ({ page }) => {
  const playground = new Playground(page);

  const buttonLoadTimeout = 7000;

  await playground.navigateTo()
  await playground.setTimer.click();
  await playground.setTimer.click();
  await expect(playground.timerResuls).toHaveText('Processing...'); 
  await expect(playground.timerResuls).toHaveText('Complete', { timeout: buttonLoadTimeout });


}); 