import { MODALS } from "../state/Config.js";
import JupiterModal from "./JupiterModal.js";
import MercuryModal from "./MercuryModal.js";
import useStore from "../state/store.js";

const ShowModals = () => {
  const visibleModal = useStore((state) => state.visibleModal);

  switch (visibleModal) {
    case MODALS.JUPITER:
      return <JupiterModal showModal={true} />;
    case MODALS.MERCURY:
      return <MercuryModal showModal={true} />;

    default:
      break;
  }
};

export default ShowModals;
