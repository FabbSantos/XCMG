import { component$ } from "@builder.io/qwik";
import { ChevronRightIcon } from "qwik-feather-icons";


export default component$(() => {
    return(
        <div class="ml-0">
            <form class="pl-0 w-1/2 flex flex-col gap-4 justify-center items-center min-w-full md:min-w-[550px] md:flex-row md:justify-between">
                <select name="estado" id="estado" class="rounded-3xl py-3 pl-4 md:basis-[50%]">
                    <option value="Estado" selected disabled>Estado</option>
                </select>
                <input type="text" placeholder="Cidade" class="rounded-3xl py-3 pl-4 md:basis-[50%] md:ml-4" />

                <button class="p-3 bg-[#248DF2] rounded-full flex-grow-0 w-14 md:basis-[10%] md:ml-4">
                    <ChevronRightIcon size={30}/>
                </button>

            </form>
        </div>
    )
})
