import Title from "./Title";

const About = () => {
  return (
    <div className="md:h-screen flex flex-col items-center justify-center" id="Apropos">
      <Title title="A propos" />
      <div className=" flex flex-col  md:flex-row justify-center items-center gap-10">
        <div className=" bg-base-300 p-3 rounded-xl ">
          <h1 className="text-2xl uppercase font-bold text-center text-accent ">A gauche</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            blanditiis impedit laborum ullam libero temporibus minus, quidem
            aliquid in dolor facilis sapiente est ipsum dolorem nobis
            accusantium illum odio perferendis?
          </p>
        </div>
        <div className="bg-base-300 p-3 rounded-xl ">
          <h1 className="text-2xl uppercase font-bold text-center text-accent ">A droite</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ex
            aliquid voluptas at amet dolor est illo iusto corrupti! Neque
            aspernatur maxime facilis fugiat. Neque nisi illum minus voluptate
            inventore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
