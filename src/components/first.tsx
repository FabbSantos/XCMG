import { component$ } from "@builder.io/qwik";
import img from '../img/img.jpg'
import Form from "./form";

export default component$(() => {
    return (
        <div class=" w-full bg-[#004C96] flex justify-between h-[9 0vh]">
            <div class="hidden lg:block relative min-w-[40vw]">
                <img class="" src={img} alt="heroimg"  height="auto" width="100%"/>
            </div>
            <div class="flex flex-col gap-4 pt-10 lg:pt-0 px-2 md:max-w-[80%] mx-auto text-center justify-center align-center">
                <h1 class="text-white text-2xl lg:text-3xl font-black text-center md:max-w-[70%] mx-auto">
                    Adquira os seus maquinários de linha amarela
                    de forma mais facilitada com o <span class="text-[#FFC700]"> Consórcio XCMG</span>.
                </h1>
                <Form />
            </div>
        </div>
    )
})
