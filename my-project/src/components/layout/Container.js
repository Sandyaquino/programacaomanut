

const Container = (props) => {
    return(
        <div className={`${`flex-wrap justify-between mx-auto max-w-1200`} ${props.customClass}`}>
            {props.children}
        </div>
    )
}

export default Container;