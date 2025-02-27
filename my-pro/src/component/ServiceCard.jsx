import proptype from 'prop-types';

export default function ServiceCard({ service }) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

ServiceCard.propTypes = {
    service: proptype.object.isRequired,
};


