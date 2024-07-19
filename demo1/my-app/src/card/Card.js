import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
`;
const Card = () => {
  return (
    <StyledCard>
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <div>
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
          <div>256</div>
        </div>
        <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            autem nostrum facere reiciendis excepturi iure commodi nemo expedita
            aut praesentium quas neque non, perferendis esse corporis in
            eligendi earum quis.
          </h3>
          <span>12000</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
