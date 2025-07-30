import { useState } from 'react';
import { Stu2PageContainer, SearchButton } from './Stu2Page.styles';
import Modal from '../components/stu2/modal/Modal';

export default function Stu2Page() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <Stu2PageContainer>
      <SearchButton onClick={handleClick}>약속 시간 탐색하기</SearchButton>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </Stu2PageContainer>
  );
}
