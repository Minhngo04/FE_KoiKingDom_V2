import MyCardForm from './MyCardForm.jsx';
import '../../assets/scss/Profile/MyCardForm.scss';
import { myCards, tours } from '../../data/mockAPI';
import Button from '@mui/material/Button';

const MyCard = () => {
  // Calculate the total number of items
  const totalItems = myCards.length;

  // Calculate the total price of all items
  const totalPrice = myCards.reduce((total, card) => {
    const tour = tours.find((t) => t.id === card.tourId);
    return total + (tour ? tour.price : 0);
  }, 0);

  return (
    <>
      <form className="card-form">
        <h1 className="info-title">My Card</h1>
        {myCards.map((myCard, index) => (
          <MyCardForm key={index} myCard={myCard} />
        ))}
        <div
          style={{
            alignSelf: 'end',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div>
            <span>Items: {totalItems}</span>
          </div>
          <div>
            <span>Sub total: ${totalPrice}</span>
          </div>
          <Button
            variant="text"
            sx={{
              backgroundColor: 'red',
              color: 'white',
              alignSelf: 'end',
              fontSize: '2rem',
              height: '6rem',
              width: '21rem',
              '&:hover': {
                backgroundColor: 'darkred',
              },
            }}
          >
            Checkout
          </Button>
        </div>
      </form>
    </>
  );
};

export default MyCard;
