
export const TextOnRing = () => {

  const style = {
    position: 'absolute',
    top: 289,
    left: 300,
  }

  return (
    <section style={style}>
      <div class='circular'>
        <svg viewBox='0 0 100 100'>
          <path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
          <text style={{fontSize: 18}}>
            <textPath xlinkHref='#circle'>Name:</textPath>
          </text>
        </svg>
      </div>
    </section>
  );
};
