import { BurgerLines, StyledBurger } from "./Burger.style";

interface IBurgerProps {
    openState: boolean;
    openCallBack: React.Dispatch<React.SetStateAction<boolean>>
}

const Burger: React.FC<IBurgerProps> = ({
    openCallBack,
    openState,
  }) => (
    <StyledBurger open={openState} onClick={() => openCallBack(!openState)}>
      <BurgerLines />
      <BurgerLines />
      <BurgerLines />
    </StyledBurger>
);

export default Burger;