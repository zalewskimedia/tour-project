import Tour from "./Tour"

const Tours = ({ tours, removeTour }) => {
    return (
        <div className="container mx-auto py-16 px-8">
            <h1 className="text-center text-3xl font-bold mb-8">Our Tours</h1>
            <div className="grid md:grid-cols-3 gap-8">
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    )
                })}
            </div>
        </div>
    )
}
export default Tours
