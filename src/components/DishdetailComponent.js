import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderDish ({dish}){
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function RenderComments({comments}){
    const comms = comments.map ( (comment) => {
        return (
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {formatDate(comment.date)}</p>
            </div>
        );
    })
    if (comments){
        return (
            <div>
                <h4>Comments</h4>
                <div className="list-unstyled">
                    {comms}
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}

function formatDate(datetime){
    return new Intl.DateTimeFormat('en-US',{month:'short',day:'2-digit',year:'numeric'}).format(new Date(datetime));
}

const DishDetail = (props) => {
    if (props.dish)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}


export default DishDetail;