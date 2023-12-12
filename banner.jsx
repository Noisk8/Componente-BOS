const Marquee = styled.div`
  /* Styles from HTML classes */
  display: flex;
  align-items: center;
  gap: 1em; /* Added space between components */
  text-shadow: 0px 0px 5px #00FF00, 0px 0px 10px #00FFFF, 0px 0px 15px #FFFF00; /* Cyberpunk-style text shadow */

  /* Animation keyframes */
  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes marquee2 {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  /* Animation properties */
  animation: ${({ animation }) =>
    animation === "marquee" ? animation : "marquee2"} 25s linear infinite;
  background-color: #111; /* Cyberpunk-style background color */
  border: 1px solid #00FF00; /* Cyberpunk-style border */
  border-radius: 5px; /* Rounded corners */
`;

const Separator = styled.span`
  /* Styles from hidden class */
  display: none;

  @media (min-width: 768px) {
    /* Show on larger screens */
    display: inline;
  }
`;

const [animation, setAnimation] = useState("marquee");

const handleSwitchAnimation = () => {
  setAnimation(animation === "marquee" ? "marquee2" : "marquee");
};

return (
  <>
    <button onClick={handleSwitchAnimation}>Change Animation</button>
    <Marquee animation={animation}>
      <span>TEXTO</span>
      <Separator>✺</Separator>
      <span>TEXTO</span>
      <Separator>✺</Separator>
      <span>TEXTO</span>
      <Separator>✺</Separator>
      <span>Teatro</span>
      <Separator>✺</Separator>
      <span>Arte</span>
      <Separator>✺</Separator>
      <span>Pivona</span>
    </Marquee>
  </>
);
