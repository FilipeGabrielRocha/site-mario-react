import "./modal.css";
import "./service/abrir-modal"
import "./service/fechar-modal";

const Modal = () => {
  return (
    <div className="modal">
      <div className="conteudo-modal">
        <span className="fechar-modal">X</span>
        <iframe
          className="iframe"
          id="video"
          width="560"
          height="315"
          src=""
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export { Modal };
