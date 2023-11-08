import { useEffect, useState } from "react"
import Loading from "./components/Loading"
import Tours from "./components/Tours"

const url = "https://course-api.com/react-tours-project"

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [tours, setTours] = useState([])

    const removeTour = id => {
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }
    const fetchTours = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setTours(tours)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchTours()
    }, [])

    if (isLoading) {
        return <Loading />
    }
    if (tours.length < 1) {
        return (
            <div className="container mx-auto py-16 px-8 text-center">
                <button
                    className="bg-orange-500 text-white px-16 py-2 rounded-lg hover:bg-orange-400"
                    onClick={fetchTours}>
                    Load Tours
                </button>
            </div>
        )
    }
    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    )
}

export default App
