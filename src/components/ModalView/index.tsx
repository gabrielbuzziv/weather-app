import React, { ReactNode } from 'react';
import { Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Overlay, Container, Bar } from './styles';

interface Props extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props) {
  return (
    <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <Overlay>
          <Container>
            <Bar />
            {children}
          </Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
