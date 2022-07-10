import React, { useState } from "react";
import styled from "styled-components";

export default function CheckOut () {
  const [payment, setPayment] = useState({ name:"", cardNum:"" });
  const [address, setAddress] = useState({ street:"", number:"", district:"", city:"", stateUF:"" })
  const [showPayment, setShowPayment] = useState(false);
  const [showAddress, setShowAddress] = useState(false);


  return (
    <Container>
      <Top showPayment={showPayment} showAddress={showAddress}>
        <h2>Checkout</h2>
        <h5>Itens:</h5>
        <h4>Valor total = R$TOTAL</h4>
        <h3 onClick={() => {
          setShowAddress(false);
          setShowPayment(!showPayment);
          }}>Pagamento</h3>
        <Payment showPayment={showPayment}>
          <form>
            <OneInputLine>
              <label htmlFor="name">Nome: </label>
              <input
                type="text"
                id="name"
                value={payment.name}
                onChange={(e) =>
                  setPayment({ ...payment, name: e.target.value })
                }
                required
              />
            </OneInputLine>
            <OneInputLine>
              <label htmlFor="card-number">Número do cartão: </label>
              <input
                type="tel"
                id="card-number"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                placeholder="xxxx xxxx xxxx xxxx"
                value={payment.cardNum}
                onChange={(e) =>
                  setPayment({ ...payment, cardNum: e.target.value })
                }
                required
              />
            </OneInputLine>
          </form>
        </Payment>
        <h3 onClick={() => {
          setShowPayment(false);
          setShowAddress(!showAddress);
          }}>Endereço</h3>
        <Address showAddress={showAddress}>
          <form>
            <TwoInputsLine>
              <label htmlFor="street">Rua: </label>
              <input
                type="text"
                id="street"
                value={address.street}
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
                required
              />
              <label htmlFor="number">Nº: </label>
              <input
                type="number"
                id="number"
                value={address.number}
                onChange={(e) =>
                  setAddress({ ...address, number: e.target.value })
                }
                required
              />
            </TwoInputsLine>
            <OneInputLine>
              <label htmlFor="district">Bairro: </label>
              <input
                type="text"
                id="district"
                value={address.district}
                onChange={(e) =>
                  setAddress({ ...address, district: e.target.value })
                }
                required
              />
            </OneInputLine>
            <TwoInputsLine>
              <label htmlFor="city">Cidade: </label>
              <input
                type="text"
                id="city"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                required
              />
              <label htmlFor="state">UF: </label>
              <input
                type="text"
                id="state"
                value={address.stateUF}
                onChange={(e) =>
                  setAddress({ ...address, stateUF: e.target.value })
                }
                required
              />
            </TwoInputsLine>
          </form>
        </Address>
      </Top>
      <Bottom>
        <button type="submit">Fechar Compra</button>
        <button>Cancelar</button>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 85vh;
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2 {
    font-size: 24px;
    font-weight: 700;

    width: 100%;
    margin-top: 26px;
  }

  h5 {
    font-size: 15px;
    font-weight: 600;

    width: 100%;
    margin-top: 13px;
  }

  h4 {
    font-size: 20px;
    font-weight: 600;

    width: 100%;
    margin: 25px 0;

    text-align: right;
  }

  h3 {
    background-color: #0E553C;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

    width: 100%;
    max-width: 766px;
    margin-top: 8px;
    padding: 8px;
  }

  h3:first-of-type {
    border-radius: ${({ showPayment }) => showPayment ? "5px 5px 0 0" : "5px"};
  }

  h3:last-of-type {
    border-radius: ${({ showAddress }) => showAddress ? "5px 5px 0 0" : "5px"};
  }
`;

const Payment = styled.div`
  background-color: #F1F4F1;
  border-radius: 0 0 5px 5px;
  display: ${({ showPayment }) => showPayment ? "inherit" : "none"};

  width: 100%;
  max-width: 766px;
  padding: 8px;

  form {
    width: 100%;
  }
`;

const Address = styled.div`
  background-color: #F1F4F1;
  border-radius: 0 0 5px 5px;
  display: ${({ showAddress }) => showAddress ? "inherit" : "none"};

  width: 100%;
  max-width: 766px;
  padding: 8px;

  form {
    width: 100%;
  }
`;

const TwoInputsLine = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  align-items: center;

  label {
    font-weight: 600;

    margin-right: 5px;
  }

  input {
    background-color: #D9D9D9;
    border: none;
    outline: none;

    width: 100%;
    margin-bottom: 5px;
    margin-right: 8px;
    padding: 5px;
  }

  input:nth-last-of-type(1) {
    width: 40px;
  }
`;

const OneInputLine = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  align-items: center;

  label {
    font-weight: 600;

    margin-right: 5px;
  }

  input {
    background-color: #D9D9D9;
    border: none;
    outline: none;

    width: 100%;
    margin-bottom: 5px;
    margin-right: 8px;
    padding: 5px;
  }  
`;

const Bottom = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  button {
    font-size: 18px;
    font-weight: 700;
    border: none;
    outline: none;
    cursor: pointer;
  }

  button:first-of-type {
    background-color: #E99BAF;
    color: #FFFFFF;
    border-radius: 5px;

    width: 170px;
    height: 35px;
    margin-top: 25px;
  }

  button:last-of-type {
    background-color: #FFFFFF;
    color: #A7A7A7;

    margin-top: 8px;
  }
`;