import { component$ } from '@builder.io/qwik';
import ancora_png from '../img/logo-negativa.png'
import ancora_avif from '../img/logo-negativa.avif'
import ancora_webp from '../img/logo-negativa.webp'
import abac from '../img/abac.png'
import banco from '../img/banco_central.png'
import great from '../img/great.png'
import iso from '../img/iso.png'

export default component$(() => {
    return (
        <div class="bg-[#004C96]">
            <div class="max-w-[90vw] mx-auto flex flex-col justify-center items-center py-[3em] gap-[1em]">
                <p class="text-white font-normal">Administrado por:</p>
                <div class="flex justify-center items-center">
                    <picture>
                        <source srcSet={ancora_avif} type="image/avif"/>
                        <source srcSet={ancora_webp} type="image/webp"/>
                        <img src={ancora_png} alt="Âncora Consórcios" width="250px" height="auto" loading="lazy" />
                    </picture>
                </div>

                <div class="flex flex-col flex-wrap md:flex-row items-center lg:items-start justify-around w-full max-w-[90vw] mt-10 gap-5">
                    <a class='flex-none flex justify-center' href='https://abac.org.br/' rel='noopener noreferrer'><img src={abac} alt="Associação Brasileira de Administradora de Consórcios" width="auto" height="67" loading="lazy" class="my-4 lg:my-0 h-[67px]"/></a>
                    <a class='flex-none flex justify-center' href='https://www.bcb.gov.br/' rel='noopener noreferrer'><img src={banco} alt="Banco Central do Brasil" width="auto" height="67" loading="lazy" class="my-4 lg:my-0 h-[67px]" /></a>
                    <a class='flex-none flex justify-center bg-white rounded-full' rel='noopener noreferrer'><img src={iso} alt="International Organization for Standardization" width="auto" height="67" loading="lazy" class="my-4 lg:my-0 h-[67px]" /></a>
                    <a class='flex-none flex justify-center' rel='noopener noreferrer'><img src={great} alt="Certificado Great Place to Work" width="auto" height="67" loading="lazy" class="my-4 lg:my-0 h-[67px]" /></a>
                </div>

                <div class="w-full max-w-[80vw] mt-10 text-center text-white text-sm">
                    <p>Âncora Administradora de Consórcios S.A / CNPJ: 60.375.243/0001-36 / AV . Dr. Antônio Barbosa Filho, 1260 Jd. Consolação - Franca/SP CEP: 14400-005</p>
                    <p>Banco Central do Brasil - Atendimento: 145 (custo de ligação local) - www.bcb.gov.br - Aut. Bacen 03/00/188/89</p><br/><br/>
                    <p>Central de atendimento: (16) 2103-3535 - E-mail: <a href="mailto:atendimento@ancoraconsorcios.com.br" rel='noopener noreferrer'>atendimento@ancoraconsorcios.com.br</a></p>
                    <p>Ouvidoria: 0800 723-2227 - E-mail: <a href="mailto:ouvidoria@ancoraconsorcios.com.br" rel='noopener noreferrer'>ouvidoria@ancoraconsorcios.com.br</a></p>
                </div>

            </div>

        </div>
    )
})