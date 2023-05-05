import { component$ } from '@builder.io/qwik';
import ancora from '../img/ancora_w.png'
import abac from '../img/logo-abac.png'
import banco from '../img/bcb.png'
import great from '../img/gptw.png'
import iso from '../img/ison.png'
import logof from '../img/logo_footer.png'

export default component$(() => {
    return (
        <div class="bg-[#004C96]">
            <div class="max-w-[90vw] mx-auto flex flex-col justify-center items-center py-[3em] gap-[1em]">
                <p class="text-white font-normal">Administrado por:</p>
                <div class="flex justify-center items-center">
                  <img src={ancora} alt="Âncora Consórcios" width="180px" height="auto" loading="lazy" />
                </div>

                <div class="flex flex-col flex-wrap md:flex-row items-center lg:items-start justify-around w-full max-w-[60vw] mt-10 gap-5">
                    <a class='flex-none flex justify-center' href='https://www.bcb.gov.br/' rel='noopener noreferrer'><img src={banco} alt="Banco Central do Brasil" width="auto" height="67" loading="lazy" class="my-4 lg:my-0 h-[67px]" /></a>
                    <a class='flex-none flex justify-center' href='https://abac.org.br/' rel='noopener noreferrer'><img src={abac} alt="Associação Brasileira de Administradora de Consórcios" width="auto" height="50" loading="lazy" class="my-4 lg:my-0 h-[58px]"/></a>
                    <a class='flex-none flex justify-center  rounded-full' rel='noopener noreferrer'><img src={iso} alt="International Organization for Standardization" width="auto" height="67" loading="lazy" class="lg:my-0 h-[67px]" /></a>
                    <a class='flex-none flex justify-center' rel='noopener noreferrer'><img src={great} alt="Certificado Great Place to Work" width="auto" height="67" loading="lazy" class="my-4 lg:my-0 h-[67px]" /></a>
                </div>
                
               
                <div class="w-full max-w-[80vw] mt-10 text-center text-white text-sm">
                    <p>
                        Âncora Administradora de Consórcios S.A CNPJ: 60.375.243/0001-36 | Av. Dr. Antônio Barbosa Filho, 1260, Jd. Consolação - Franca/SP CEP: 14400-005<br></br>
                        Banco Central do Brasil - Atendimento: <b>145</b> (custo de ligação local) - www.bcb.gov.br - Aut. Bacen 03/00/188/89 Central de atendimento: <b>(16) 2103-3535</b>&nbsp;
                        E-mail: <a class="font-bold" rel='noreferrer' href="mailto:atendimento@ancoraconsorcios.com.br">atendimento@ancoraconsorcios.com.br</a> Ouvidoria: <b>0800 723-2227</b> - <a href="mailto:ouvidoria@ancoraconsorcios.com.br" rel='noreferrer'> E-mail: <b>ouvidoria@ancoraconsorcios.com.br</b></a>
                    </p>
                </div>
                <img src={logof} alt="Consórcio XCMG" width="140px" height="50px" class="mt-5"/>
            </div>

        </div>
    )
})