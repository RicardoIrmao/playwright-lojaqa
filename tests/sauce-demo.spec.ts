import { test, expect } from '@playwright/test';

test('acessar o catálogo da Sauce Demo', async ({ page }) => {

    await page.goto('https://sauce-demo.myshopify.com/');

    await expect(page).toHaveTitle(/Sauce/);

    await page.getByRole('link', { name: 'Catalog' }).click();

    await expect(page).toHaveURL(/collections/);

    await expect(
        page.getByText('Grey jacket')
    ).toBeVisible();

    await page.getByText('Grey jacket').click();

    await expect(page).toHaveURL(/products/);

    await expect(
        page.getByRole('heading', { name: 'Grey jacket' })
    ).toBeVisible();
});