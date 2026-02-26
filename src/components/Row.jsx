function Row({title}) {
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                <div className="poster"/>
                <div className="poster"/>
                <div className="poster"/>
                <div className="poster"/>
            </div>
        </div>
    )
}

export default Row;