import { useAppSelector } from '../../hooks';

// ^======================== ErrorMessage ========================^ //

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);
  return error ?
    <div
      className='error-message__wrapper'
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'calc(Infinity)',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#ffffff80',
        backdropFilter: 'blur(4px)',
      }}
    >
      <p
        className='error-message'
        style={{
          fontSize: 100,
        }}
      >
        {error}
      </p>
    </div>
    : null;
}
