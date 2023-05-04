import { component$ } from "@builder.io/qwik";
import Form from "./form";
import Header from "./header/header";

export default component$(() => {
    return (
        <>
            <div class="first px-[5%] py-10 md:py-0 md:px-0 flex-col w-full bg-blue-900 bg-cover bg-center flex justify-center  md:justify-start items-center md:items-end  lg:min-h-[90vh] lg:bg-bg-1">
            <Header/>
                <h2 class=" pl-[5%] self-start text-white text-[1.4rem] md:text-[1.6rem] mb-[5%]">
                    A terceira maior empresa de maquinários de construção do mundo.
                </h2>

                <Form/>

                <h1 class=" pl-[5%] mt-28 self-start font-bold text-white text-[1.7rem] md:text-[2.1rem] shadow-inner">
                    Maquinário pesado com parcelas levíssimas.<br></br>
                    Adquira o seu produto de linha amarela com o Consórcio XCMG
                </h1>
            </div>
        </>
    )
})
