import React, {useState} from "react";
import { rateOffer } from "../actions/offer";
import { useDispatch } from "react-redux";

const RateDriver = ({shipment, confirmedOffer}) => {
  const dispatch = useDispatch();
//   const { id, locationFrom, locationTo, shipDate, items, offers, state } = shipment;
//   const navigate = useNavigate();
//   const handleFinish = (e) => {
//     e.preventDefault();
//     dispatch(finishShipment(id));
//   };

const [rating, setRating] = useState(0);

const handleRatingChange = (value) => {
  setRating(value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(rateOffer(rating, confirmedOffer.id));
    
};
  return (
    <div>
        {
            (!shipment.deliveryDate && !confirmedOffer.rate) && (
                <div>
                </div>
            )
        }
        {
        (shipment.deliveryDate && !confirmedOffer.rate) && (
            <div>
                <div>
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex align-items-center">
                        <h4 className="text-center">Por favor valora el viaje</h4>
                    </div>
                    <div className="row d-flex align-items-center">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div className="col-lg-2 text-center">
                        <span
                        key={value}
                        className={value <= rating ? 'star selected' : 'star'}
                        onClick={() => handleRatingChange(value)}
                        >
                        &#9733;
                        </span>
                    </div>
                    ))}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    <style>
                        {`
                        .star {
                            font-size: 2rem;
                            color: gray;
                            cursor: pointer;
                        }

                        .selected {
                            color: gold;
                        }
                        .rating-label {
                            font-weight: bold;
                          }
                        `}
                    </style>
                </form>
                </div>
            </div>
        )
        }
        {
        (shipment.deliveryDate && confirmedOffer.rate) && (
            <div className="row d-flex align-items-center">
                <div className="col-12 text-center">
                    <h4 className="text-center">Gracias por valorar el viaje</h4>
                </div>
                <div className="col-12 text-center">
                    Tu valoracion: <b>{confirmedOffer.rate} / 5 </b>
                </div>
            </div>
        )
        }
    </div>
  );
};

export default RateDriver;
