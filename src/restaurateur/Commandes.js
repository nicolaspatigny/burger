import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Commande = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0px;
  margin: 10px;
  width: 220px;
  text-align: center;
`;

const Resume = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const Detail = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

const Titre = styled.header`
  align-items: center;
  border-radius: 4px;
  background-color: crimson;
`;

function Commandes() {
  return (
    <Container>
      <Commande>
        <Titre>
          <Resume>#1</Resume>
        </Titre>
        <Detail>
          Complet : salade, Tomates, Oignons mais sans tomate sans salade ni
          Oignons
        </Detail>
      </Commande>
      <Commande>
        <Titre>
          <Resume>#2</Resume>
        </Titre>
        <Detail>pas complet du tout mais avec tout dedans stp!</Detail>
      </Commande>
    </Container>
  );
}

export default Commandes;
