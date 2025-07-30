import ModalBar from './ModalBar';
import { ModalContainer } from './ModalBar.styles';

export default function Modal({ onClose }) {
  return (
    <ModalBar>
      <ModalBar.Overlay onClose={onClose}>
        <ModalContainer>
          <ModalBar.TitleSection onClose={onClose} />
          <ModalBar.NameSection />
          <ModalBar.ParticipantSection />
          <ModalBar.TimeSection />
          <ModalBar.TimeLengthSection />
          <ModalBar.SubmitButton onClose={onClose} />
        </ModalContainer>
      </ModalBar.Overlay>
    </ModalBar> 
  );
}
