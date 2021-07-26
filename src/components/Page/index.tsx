import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';



const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Equipe Especializada',
            'Book de Fotos',
            'Making Of',
            'Suporte aos Detalhes',
            'Kit Fotografias',
            'Cobertura Cerimonial',
            'Pós Cerimônia',
          ].map(modelName => (
            <ModelSection
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description="FAÇA SEU ORÇAMENTO CONOSCO."
              />
            }
            />
          ))}
          
        </div>
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
