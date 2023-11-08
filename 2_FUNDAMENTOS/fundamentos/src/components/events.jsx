const Events = () => {
    const handleMyEvent = () => {
        console.log("Ativou evento!")
    }


    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
        </div>
    )
}

export default Events;