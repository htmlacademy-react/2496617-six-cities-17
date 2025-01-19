// ^======================== OfferInside ========================^ //

import { memo } from 'react';

type OfferInsideProps = {
  goods: string[];
};

function OfferInside({ goods }: OfferInsideProps): JSX.Element {
  return (
    <div className='offer__inside' data-testid='offer-inside'>
      <h2 className='offer__inside-title'>What&#39;s inside</h2>
      <ul className='offer__inside-list'>
        {goods.map((good) =>
          <li key={good} className='offer__inside-item' data-testid='offer-good'>{good}</li>
        )}
      </ul>
    </div>
  );
}

export default memo(OfferInside);
