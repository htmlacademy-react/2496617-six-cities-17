// ^======================== OfferInside ========================^ //

type OfferInsideProps = {
  goods: string[];
};

export default function OfferInside({ goods }: OfferInsideProps): JSX.Element {
  return (
    <div className='offer__inside'>
      <h2 className='offer__inside-title'>What&#39;s inside</h2>
      <ul className='offer__inside-list'>
        {goods.map((good) =>
          <li key={good} className='offer__inside-item'>{good}</li>
        )}
      </ul>
    </div>
  );
}
