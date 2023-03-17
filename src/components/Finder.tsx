import { component$, useBrowserVisibleTask$, useStore, QwikChangeEvent } from "@builder.io/qwik";
import { ChevronRightIcon } from "qwik-feather-icons";
import type { ParseResult } from 'papaparse'
import { parse } from 'papaparse';

export default component$(() => {
    const data = useStore({
        statesAbbr: new Array<string>,
        stateCities: {},
        cityDealers: {},
        selectedState: '',
        selectedCity: '',
        foundDealers: [{ name: "Yamadiesel (RJ)", address: "Av Dr Jefferson G. Bruno, 1290, Paraiso II, Resende/RJ Tel (24) 33818485" }] //new Array<any>
    })

    useBrowserVisibleTask$(() => {
        console.log('Rodou!')
        async function readCSV() {
            const url = `${window.location.protocol}//${window.location.host}/Endereços Dealers.csv`
            // const response = await fetch('Endereços Dealers.csv')
            // const csvText = await response.text()
            parse(url, {
                download: true,
                worker: true,
                skipEmptyLines: true,
                complete: function (result: ParseResult<string[]>) {
                    console.log(result)

                    const stateCities = {}
                    const cityDealers = {}
                    let currentDealer = ''
                    for (const row of result.data) {
                        console.log(row)

                        if (row[0])
                            currentDealer = row[0]

                        const regex = /,\s*([^,]+)\/(\w+)/
                        const matches = row[1].match(regex)

                        if (!matches) continue

                        const cityName = matches[1]
                        const stateAbbreviation = matches[2]

                        stateAbbreviation in stateCities
                            ? (stateCities[stateAbbreviation] as Array<string>).push(cityName)
                            : stateCities[stateAbbreviation] = [cityName]

                        cityName in cityDealers
                            ? (cityDealers[cityName] as Array<string>).push(currentDealer)
                            : cityDealers[cityName] = [{ name: currentDealer, address: row[1] }]
                    }

                    data.cityDealers = cityDealers
                    data.stateCities = stateCities
                    data.statesAbbr = Object.keys(stateCities).sort()

                    console.log(data)

                    console.log("All done!")
                }
            })
        }

        readCSV()
    })

    return (
        <div class="ml-0">
            <form class="pl-0 w-1/2 flex flex-col gap-4 justify-center items-center min-w-full md:min-w-[550px] md:flex-row md:justify-between" preventdefault:submit>
                <select name="estado" id="estado" class="rounded-3xl py-3 pl-4 md:basis-[50%]" onChange$={(e: QwikChangeEvent<HTMLSelectElement>) => data.selectedState = e.target.value}>
                    <option value="Estado" selected disabled>Estado</option>
                    {data.statesAbbr.map(state => <option value={state}>{state}</option>)}
                </select>
                <input list="cities" placeholder="Cidade" class="rounded-3xl py-3 pl-4 md:basis-[50%] md:ml-4" onChange$={(e: QwikChangeEvent<HTMLInputElement>) => data.selectedCity = e.target.value} />

                <datalist id="cities">
                    {data.stateCities[data.selectedState]?.map((city: string) => <option value={city}></option>)}
                </datalist>

                <button class="p-3 bg-[#248DF2] rounded-full flex-grow-0 w-14 md:basis-[10%] md:ml-4" onClick$={() => data.foundDealers = data.cityDealers[data.selectedCity]}>
                    <ChevronRightIcon size={30} />
                </button>

            </form>

            <div class="w-full text-white">
                <table class="w-full text-center">
                    <thead class="border-y-4">
                        <tr>
                            <th>Dealer</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>
                    <tbody class="border-y-2">
                        {data.foundDealers.map(dealer => {
                            return (
                                <tr>
                                    <td>{dealer.name}</td>
                                    <td>{dealer.address}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
})
