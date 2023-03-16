import { Content } from "../components/content";
import { FundoVideo } from "../components/fundo-video";
import { Menu } from "../components/menu";
import { Modal } from "../components/modal";

const Home = () => {
  return (
    <>
      <FundoVideo />
      <Menu />
      <Content />
      <Modal />
    </>
  );
};

export { Home };
