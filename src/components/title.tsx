import { component$ } from "@builder.io/qwik";


export default component$((props:t) => {
    const title = props.t
    return (
        <div class="lg:min-h-[100px] w-full bg-bg-Title flex justify-center align-center font-extrabold text-center text-3xl lg:text-5xl p-4 text-[#004C96]">
            <h2>{title}</h2>
        </div>
    )
})