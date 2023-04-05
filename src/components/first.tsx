import { component$ } from "@builder.io/qwik";
import Form from "./form";
import maquinario from '../img/maquinarios.png'

export default component$(() => {
    return (
        <div class=" flex-col w-full bg-blue-900 bg-cover bg-center flex justify-center  lg:justify-between lg:min-h-[90vh] lg:bg-bg-1">
            <div class="flex flex-col-reverse gap-12 lg:gap-24 pt-10 w-full lg:pt-5 lg:min-h-[90vh] px-[5%] lg:px-[3%] lg:flex-row mx-auto text-left lg:justify-between">
                <div class="basis-1/3 flex justify-center lg:justify-start items-center">
                    <div class="bg-blue-900 flex justify-start items-start rounded-xl lg:max-w-[70%]">
                        <Form />
                    </div>
                </div>
                <div class="lg:basis-1/3 flex flex-col justify-start items-start lg:text-right">
                    <h1 class="text-white lg:text-[26px] font-black mx-auto lg:leading-[50px]">
                        <span class="text-3xl lg:text-4xl">Maquinário pesado, com parcelas levíssimas.</span><br/>
                        Adquira o seu produto de linha amarela com o<span class="text-[#FFC700]"> Consórcio XCMG</span>
                    </h1>
                    <h2 class="font-medium text-2xl text-white">
                        A terceira maior empresa de maquinários de construção do mundo.
                    </h2>
                </div>

            </div>
                <div class="basis-1/3 flex justify-center items-end pb-10 relative mt-6 lg:hidden ">
                    <img class="lg:absolute lg:min-w-[160%] bottom-0" src={maquinario} alt="Maquinário XCMG" width="500px" loading="eager"/>
                </div>
        </div>
    )
})
