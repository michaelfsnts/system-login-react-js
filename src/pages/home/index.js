import React from "react";
import { useHref, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  
  return (
    <C.Container>
      <C.Title>Bem-vindo</C.Title>
      <Button Text="Acessar Player"></Button>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;