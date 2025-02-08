import { SelectRole } from '@entities/ui/SelectRole';
import { Typography, VStack } from '@shared/ui';
import { GuardianIcon } from '@shared/ui/GuardianIcon';
import { WandIcon } from '@shared/ui/WandIcon';
import { useState } from 'react';
import styled from 'styled-components';

export const SelectRolesWidget = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsModal(!isModal);
  };

  return (
    <>
      <VStack $gap={'15px'} $alignItems="center">
        <VStack $alignItems="center">
          <Typography size="Title1" weight={'bold'}>
            보호자와 피보호자를
          </Typography>
          <Typography size="Title1" weight={'bold'}>
            선택해주세요
          </Typography>
        </VStack>
        <VStack $gap={'10px'}>
          <SelectRole role="guardian" color="blue">
            <GuardianIcon />
          </SelectRole>
          <SelectRole
            role="wand"
            color="green"
            onClick={toggleModal}
          >
            <WandIcon />
          </SelectRole>
        </VStack>
      </VStack>
      {isModal && (
        <Modal onClick={toggleModal}>
          <ModalContent
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Typography
              size="SubHeadLine"
              weight={'bold'}
              color="text"
            >
              보호자코드 6자리를 입력해주세요.
            </Typography>
            <Input placeholder="ex) 123456" />
            <Button>
              <Typography
                size="SubHeadLine"
                weight={'bold'}
                color="white"
              >
                등록
              </Typography>
            </Button>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.light.color.white};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.light.color.grey};
  font-size: 15px;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  background: ${({ theme }) => theme.light.color.green};
  justify-content: center;
  align-items: center;
  display: flex;
`;
