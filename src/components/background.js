const Background = (props) => {
  return (
    <div className="position-fixed vw-100 vh-100 z-index-n1 d-flex end-0 top-0 justify-content-center">
      <img className="blur" src={props.src} alt={props.alt} />
    </div>
  );
};

export default Background;
