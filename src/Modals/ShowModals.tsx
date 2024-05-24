import { MODALS } from "../state/Config.js";
import JupiterModal from "./JupiterModal.js";
import MercuryModal from "./MercuryModal.js";
import VenusModal from "./VenusModal.js";
import EarthModal from "./EarthModal.js";
import useStore from "../state/store.js";

const ShowModals = () => {
  const visibleModal = useStore((state) => state.visibleModal);

  switch (visibleModal) {
    case MODALS.JUPITER:
      return <JupiterModal showModal={true} />;
    case MODALS.MERCURY:
      return <MercuryModal showModal={true} />;
    case MODALS.VENUS:
      return <VenusModal showModal={true} />;
    case MODALS.EARTH:
      return <EarthModal showModal={true} />;

    default:
      break;
  }
};

export default ShowModals;
