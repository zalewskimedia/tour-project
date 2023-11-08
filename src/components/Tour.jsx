import { useState } from "react"

const Tour = ({ name, image, price, info, id, removeTour }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className="relative shadow-xl">
            <img src={image} alt={name} className="w-full h-80 object-cover" />
            <span className="bg-amber-500 text-white px-4 py-2 absolute top-0 right-0">
                ${price}
            </span>
            <div className="px-8 pb-8">
                <h2 className="text-xl text-center font-bold mt-2 mb-4">
                    {name}
                </h2>
                <p>
                    {readMore ? info : `${info.substring(0, 120)}...`}{" "}
                    <button
                        className="text-orange-600 hover:text-orange-500"
                        onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Hide" : "Read More"}
                    </button>
                </p>
                <div className="text-center mt-8">
                    <button
                        className="bg-orange-500 px-8 py-2 rounded-md text-white hover:bg-orange-400"
                        onClick={() => removeTour(id)}>
                        Remove
                    </button>
                </div>
            </div>
        </article>
    )
}
export default Tour
