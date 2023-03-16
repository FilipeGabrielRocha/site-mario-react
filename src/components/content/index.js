import imagemTitulo from "../../assets/img/titulo.png";
import superMarioChars from "../../assets/img/super-mario-chars.png";
import "./content.css";

const Content = () => {
  return (
    <section className="container">
      <div>
        <img
          className="imagem-titulo"
          src={imagemTitulo}
          alt="titulo super mario bros"
        />
        <p className="descricao">
          Mario é um encanador junto com seu irmão Luigi. Um dia, eles vão parar
          no reino dos cogumelos, governado pela Princesa Peach, mas ameaçado
          pelo rei dos Koopas, que faz de tudo para conseguir reinar em todos os
          lugares.
        </p>
        <button className="botao-trailer">Veja o trailer</button>
      </div>
      <img src={superMarioChars} alt="Super mario chars" />
    </section>
  );
};

export { Content };
