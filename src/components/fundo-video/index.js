import "./fundo-video.css";
import videoMario from "../../assets/video/video-mario.mp4";

const FundoVideo = () => {
  return (
    <div className="fundo-video">
      <video className="video" autoPlay loop muted>
        <source src={videoMario} type="video/mp4" />
      </video>
    </div>
  );
};

export { FundoVideo };
