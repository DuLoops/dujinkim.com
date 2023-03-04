import "../../styles/starParticles.scss";
const StarParticles = () => {
  const circles = [];

  for (let i = 1; i <= 100; i++) {
    circles.push(
      <div className="circle-container" key={i}>
        <div className="circle"></div>
      </div>
    );
  }

  return <div className="container">{circles}</div>;
};

export default StarParticles;
