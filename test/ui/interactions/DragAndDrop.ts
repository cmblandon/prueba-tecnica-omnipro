import { d, Answerable, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { PageElement, PageElementInteraction } from '@serenity-js/web';
import { PlaywrightPage, PlaywrightPageElement } from '@serenity-js/playwright';

export class DragAndDrop extends PageElementInteraction {

    static from(source: Answerable<PageElement>) {
        return {
            to: (target: Answerable<PageElement>) => new DragAndDrop(source, target),
        };
    }

    constructor(
        private readonly source: Answerable<PageElement>,
        private readonly target: Answerable<PageElement>,
    ) {
        super(d`#actor drags ${source} to ${target}`);
    }

    async performAs(actor: UsesAbilities & AnswersQuestions): Promise<void> {
        const page = await actor.answer(PlaywrightPage.current().nativePage());

        // 1. ESPERA ACTIVA: Esperar a que la red esté tranquila y los anuncios carguen
        await page.waitForLoadState('networkidle');

        // 2. LIMPIEZA PROFUNDA: Eliminar elementos que causan desplazamientos (Ads y Footer)
        await page.evaluate(() => {
            const selectors = [
                '#adplus-anchor', 
                'footer', 
                '[id^="google_ads"]', 
                '.ad-unit',
                '#fixedban' // Este banner inferior suele romper el scroll de DemoQA
            ];
            selectors.forEach(s => {
                document.querySelectorAll(s).forEach(el => el.remove());
            });
        });

        // 3. RESOLVER ELEMENTOS
        const sourceElement = await actor.answer(this.source);
        const targetElement = await actor.answer(this.target);

        const srcLocator = await (sourceElement as PlaywrightPageElement).nativeElement();
        const tgtLocator = await (targetElement as PlaywrightPageElement).nativeElement();

        // 4. ACCIÓN NATIVA ROBUSTA
        // dragTo maneja internamente el scroll y el cálculo de centro de los elementos
        await srcLocator.dragTo(tgtLocator, {
            force: true,      // Ignora si un anuncio invisible está encima
            timeout: 5000,    // Tiempo suficiente para la animación de jQuery
        });

        // 5. MINI-PAUSA: Dar tiempo a jQuery UI para disparar el evento 'drop'
        await page.waitForTimeout(500);
    }
}