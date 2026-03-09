import { expect } from "@playwright/test";

export class Playground {

    constructor(page) {
        this.page = page;

        this.url = 'playground/'

        this.clickableButton = this.page.locator('#btn-click-me');

        this.clickableButtonStatus = this.page.getByTestId('btn-state');

        this.initalStatus = 'Status: idle';

        this.clickedStatus = 'Status: clicked';
        this.timerButton = this.page.locator('#sec-timer-button');
        this.setTimer = this.page.locator('#timer-btn');
        this.timerResuls = page.getByTestId('timer-result')

    }

    async navigateTo() {

        await this.page.goto(this.url);

    }

    async clickButtonInGivenState(initial) {

        if (initial) {

            await expect(this.clickableButtonStatus).toContainText(this.initalStatus);

            await this.clickableButton.click();

            await expect(this.clickableButtonStatus).toContainText(this.clickedStatus);

        }

        else {

            await expect(this.clickableButtonStatus).toContainText(this.clickedStatus);

            await this.clickableButton.click();

            await expect(this.clickableButtonStatus).toContainText(this.initalStatus);

        }

    }

}

module.exports = { Playground }