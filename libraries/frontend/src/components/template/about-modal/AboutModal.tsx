import { AboutModalProps } from './';
import { healthContext } from 'context';
import React, { useContext } from 'react';
import { ModalOverlay } from 'components';

export function AboutModal({ isOpen, onToggle }: AboutModalProps) {
  const { health } = useContext(healthContext);
  return (
    <>
      <ModalOverlay header="Instinct" isOpen={isOpen} onToggle={onToggle}>
        <div className="text-dark">
          <p>High performance, scalable content management system developed with Typescript, React and Nest.</p>
          <h5>Version</h5>
          <p>{health.systemVersion}</p>
          <h5>Developed By</h5>
          <p>LeChris</p>
        </div>
      </ModalOverlay>
      .
    </>
  );
}
