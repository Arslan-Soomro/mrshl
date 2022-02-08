import {
  FC,
  ReactElement,
  useState,
} from "react";
/*
const ModalWrapper = ({
  Modal,
}: {
  Modal: ({ exitHandler }: { exitHandler: () => void }) => ReactElement;
}) => {
  const [isVisible, setVisible] = useState(false);

  const modalToggler = () => {
    isVisible ? setVisible(false) : setVisible(true);
  };

  return isVisible ? (
    <div className="absolute h-full w-full bg-black/5 flex justify-center items-center">
      {<Modal exitHandler={modalToggler} />}
    </div>
  ) : null;
};*/

const ModalWrapper: FC = ({ children }) => {
    return(
        <div className="absolute h-full w-full bg-black/5 flex justify-center items-center">{children}</div>
    )
}

export default ModalWrapper;
