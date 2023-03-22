import { component$ } from "@builder.io/qwik";
import one_png from '../img/XE17U.png'
import one_avif from '../img/XE17U.avif'
import one_webp from '../img/XE17U.webp'
import two_png from '../img/XCB-P25.png'
import two_avif from '../img/XCB-P25.avif'
import two_webp from '../img/XCB-P25.webp'
import three_png from '../img/XCB-P30.png'
import three_avif from '../img/XCB-P30.avif'
import three_webp from '../img/XCB-P30.webp'

export default component$(() => {
    return (
        <>
            <div id="maquinas" class="flex flex-col md:flex-row flex-wrap max-w-[90vw] mx-auto justify-around text-center text-[#004C96] font-bold my-16">
                <div class="flex flex-col justify-center items-center">
                    <picture>
                        <source srcSet={two_avif} type="image/avif"/>
                        <source srcSet={two_webp} type="image/webp"/>
                        <img src={two_png} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="300px" />
                    </picture>
                    <h4 class="font-bold text-3xl my-4">XCB-P25/L25</h4>
                    <p class="font-medium text-xl my-4">R$220.000,00</p>
                    <p class="font-medium text-2xl text-center">Plano Normal<br />100 meses - R$2639,90</p>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <picture>
                        <source srcSet={one_avif} type="image/avif"/>
                        <source srcSet={one_webp} type="image/webp"/>
                        <img src={one_png} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="300px" />
                    </picture>
                    <h4 class="font-bold text-3xl my-4">XE17U</h4>
                    <p class="font-medium text-xl my-4">R$210.000,00</p>
                    <p class="font-medium text-2xl text-center">Plano Normal<br/>100 meses - R$2519,90</p>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <picture>
                        <source srcSet={three_avif} type="image/avif"/>
                        <source srcSet={three_webp} type="image/webp"/>
                        <img src={three_png} alt="Guindaste de caminhão" loading="lazy" height="250px" width="300px" />
                    </picture>
                    <h4 class="font-bold text-3xl my-4">XCB-P30/L30</h4>
                    <p class="font-medium text-xl my-4">R$230.000,00</p>
                    <p class="font-medium text-2xl text-center">Plano Normal<br />100 meses - R$2759,89</p>
                </div>
            </div>
            {/* <div class="w-full flex justify-center py-[1em] pb-20">
                <button class="font-bold text-xl py-1 px-[2em] rounded-xl bg-[#004C96] text-white self-center"> Veja mais </button>
            </div> */}
            <div class="w-full flex justify-center py-[1em] pb-20">
                <button class="font-bold text-xl py-1 px-[2em] rounded-xl bg-[#004C96] text-white self-center" onClick$={() => document.querySelector('form')?.scrollIntoView()}> Conheça nossos planos </button>
            </div>
        </>
    )
})