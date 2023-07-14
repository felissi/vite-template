import { useQuery } from "@tanstack/react-query";
interface Props {

}
interface PlantsData {
    count: number
    next: string
    previous: string | null
    results: Plant[]

}
interface Plant {
    "name": string
    "rotation_period": number
    "orbital_period": number
    "diameter": number
    "climate": string
    "gravity": string
    "terrain": string
    "surface_water": number
    "population": number
    "residents": string[]
    "films": string[]
    "created": string
    "edited": string
    "url": string
}
const fetchPlants = async () => {
    const res = await fetch('https://swapi.dev/api/planets/')
    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    return res.json()
}
export default function T1() {
    const { data, isLoading, isError, isSuccess, error } = useQuery<PlantsData, string>(['plants'], fetchPlants)
    return (
        <div>
            <h2>Plants</h2>
            {isLoading && (
                <div>loading data ...</div>
            )}
            {isError && (
                <div>{JSON.stringify(error)}</div>
            )}
            {isSuccess && (
                <div>
                    <div>
                        {data.results.map(plant => (
                            <div key={plant.name}>{plant.name}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}