import classNames from 'classnames';
import { memo } from 'react';

// ^======================== OfferHost ========================^ //

type OfferHostProps = {
  offerHostData: {
    name: string;
    isPro: boolean;
    avatarUrl: string;
    description: string;
  };
};

function OfferHost({ offerHostData }: OfferHostProps): JSX.Element {
  const { name, isPro, avatarUrl, description } = offerHostData;

  return (
    <div className='offer__host'>
      <h2 className='offer__host-title'>Meet the host</h2>
      <div className='offer__host-user user'>
        <div
          className={classNames(
            'offer__avatar-wrapper', 'user__avatar-wrapper',
            { 'offer__avatar-wrapper--pro': isPro }
          )}
        >
          <img
            className='offer__avatar user__avatar'
            src={avatarUrl}
            width={74}
            height={74}
            alt='Host avatar'
          />
        </div>
        <span className='offer__user-name'>{name}</span>
        {
          isPro ?
            <span className='offer__user-status'>
              Pro
            </span> : ''
        }
      </div>
      <div className='offer__description'>
        <p className='offer__text'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default memo(OfferHost);
