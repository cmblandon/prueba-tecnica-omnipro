import { PageElement, By } from '@serenity-js/web';

export class AccordionPage {

  static panelHeader = (title: string) => PageElement
    .located(By.xpath(`//button[contains(@class,'accordion-button') and normalize-space()='${title}']`))
    .describedAs(`${title} accordion header`);

  static panelBody = (title: string) => PageElement
    .located(By.xpath(`//button[normalize-space()='${title}']/ancestor::div[contains(@class,'accordion-item')]//div[contains(@class,'accordion-collapse')]`))
    .describedAs(`${title} accordion body`);
}
