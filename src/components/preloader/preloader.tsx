// ^======================== Preloader ========================^ //

export default function Preloader(): JSX.Element {
  return (
    <div
      className='preloader__wrapper'
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'calc(Infinity)',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#ffffff80',
        backdropFilter: 'blur(4px)'
      }}
    >
      <div
        className='preloader'
        style={{
          fontSize: 100,
        }}
      >
        Loading...
      </div>
    </div>
  );
}
