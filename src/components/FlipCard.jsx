export default function FlipCard({ frontImg, backImg }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImg} alt="Front" />
        </div>
        <div className="flip-card-back">
          <img src={backImg} alt="Back" />
        </div>
      </div>
    </div>
  );
}
