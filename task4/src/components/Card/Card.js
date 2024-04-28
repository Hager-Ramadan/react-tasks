import "./Card.scss"
function Card(props) {
    return (
        <div className="card_product col-lg-4 col-md-6 col-sm-12 g-5">
            <img className="h-50 w-50"
                src={
                    props.ImgUrl
                }/>
            <h5> {
                props.ProductTitle
            } </h5>
            <p> {
                props.ProductDescription
            } </p>
            <span> {
                props.ProductPrice
            }$
            </span>
        </div>
    )
}
export default Card
