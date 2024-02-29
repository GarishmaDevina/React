function Movies(props){
    return(
        <div className="Movies">
            <img src={props.url} height={300} width={300}/>
            <h2>{props.title}</h2>
        </div>
    )

}
export default Movies