import { MODALS } from "../state/Config.js";
import JupiterModal from "./JupiterModal.js";
import MercuryModal from "./MercuryModal.js";
import VenusModal from "./VenusModal.js";
import EarthModal from "./EarthModal.js";
import MarsModal from "./MarsModal.js";
import SaturnModal from "./SaturnModal.js";
import UranusModal from "./UranusModal.js";
import NeptuneModal from "./NeptuneModal.js";
import useStore from "../state/store.js";

const ShowModals = () => {
  const visibleModal = useStore((state) => state.visibleModal);

  switch (visibleModal) {
    case MODALS.MERCURY:
      return <MercuryModal showModal={true} />;
    case MODALS.VENUS:
      return <VenusModal showModal={true} />;
    case MODALS.EARTH:
      return <EarthModal showModal={true} />;
    case MODALS.MARS:
      return <MarsModal showModal={true} />;
    case MODALS.JUPITER:
      return <JupiterModal showModal={true} />;
    case MODALS.SATURN:
      return <SaturnModal showModal={true} />;
    case MODALS.URANUS:
      return <UranusModal showModal={true} />;
    case MODALS.NEPTUNE:
      return <NeptuneModal showModal={true} />;

    default:
      break;
  }
};

export default ShowModals;
