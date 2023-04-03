import { component$ } from "@builder.io/qwik";
import Form from "./form";
import maquinario from '../img/maquinarios.png'

export default component$(() => {
    return (
        <div class=" w-full bg-blue-900 bg-cover bg-center flex justify-between min-h-[90vh] sm:bg-bg-1">
            <div class="flex flex-col-reverse gap-24 pt-10 lg:pt-5 px-[5%] md:max-w-[98%] lg:flex-row mx-auto text-left justify-between align-center">
                <div class="basis-1/3 flex justify-center items-center">
                    <div class="bg-blue-900 flex justify-center items-center rounded-xl">
                        <Form />
                    </div>
                </div>
                <div class="basis-1/3 flex justify-center items-end relative">
                    <img class="lg:absolute lg:min-w-[160%] bottom-0" src={maquinario} alt="Maquinário XCMG" width="800px" loading="eager"/>
                </div>
                <div class="basis-1/3 flex flex-col justify-start items-start lg:text-right">
                    <h1 class="text-white lg:text-[28px] font-black mx-auto lg:leading-[50px]">
                        <span class="text-3xl lg:text-5xl">Maquinário pesado, com parcelas levíssimas.</span><br/>
                        Adquira o seu produto de linha amarela com o<span class="text-[#FFC700]"> Consórcio XCMG</span>
                    </h1>
                    <h2 class="font-medium text-2xl text-white">
                        A terceira maior empresa de maquinários de construção do mundo.
                    </h2>
                </div>

            </div>
        </div>
    )
})
