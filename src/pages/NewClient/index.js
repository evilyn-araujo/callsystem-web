import React from 'react';
// components
import { Input, Title } from '../../components';
// style
import {
  Container, HeaderStyle, ContentStyle,
  FormStyle,
} from './style';

export default function NewClient() {
  return (
    <Container>
      <HeaderStyle>
        <Title
          icon={(
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="black" />
            </svg>
          )}
          label="Adicionar Cliente"
        />
      </HeaderStyle>
      <ContentStyle>
        <FormStyle>
          <Input
            label="Nome do Cliente"
            type="text"
          />
          <Input
            label="CNPJ"
            type="text"
          />
          <Input
            label="Endereço"
            type="text"
          />
        </FormStyle>
      </ContentStyle>

    </Container>
  );
}
