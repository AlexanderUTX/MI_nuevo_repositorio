const List = (props) => {
    console.log(props)
    return(
        <div>
            <h4>Lista</h4>
            <h6>{props.subtitle}</h6>
        </div>
    )
}

export default List