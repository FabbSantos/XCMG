import { component$ } from '@builder.io/qwik';
import ancora from '../img/ancora.png'
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
                    <img src={ancora} alt="Âncora Consórcios" width="250px" height="auto" loading="lazy" />
                </div>

                <div class="flex flex-col flex-wrap md:flex-row items-center lg:items-start justify-around w-full max-w-[60vw] mt-10 ">
                    <img src={abac} alt="Associação Brasileira de Administradora de Consórcios" width="200px" height="auto" loading="lazy" class="my-4 lg:my-0"/>
                    <img src={banco} alt="Banco Central do Brasil" width="200px" height="auto" loading="lazy" class="my-4 lg:my-0" />
                    <img src={iso} alt="International Organization for Standardization" width="130px" height="auto" loading="lazy" class="my-4 lg:my-0" />
                    <img src={great} alt="Certificado Great Place to Work" width="80px" height="auto" loading="lazy" class="my-4 lg:my-0" />
                </div>

            </div>

        </div>
    )
})