import { component$ } from "@builder.io/qwik"
import FirstTP from "./firstTP"
import Footer from "./footer"

export default component$(() => {
    return(
        <>
            <FirstTP/>
            <Footer/>
        </>
    )
})