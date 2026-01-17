import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      className="md:flex-row justify-center items-center md:my-10 my-10 md:h-screen"
      id="Accueil"
    >
      <h1 className="uppercase font-bold mb-5 text-center text-3xl ">
        <span className="text-accent">E</span>glise{" "}
        <span className="text-accent">T</span>emple du{" "}
        <span className="text-accent">D</span>ieu{" "}
        <span className="text-accent">V</span>ivant
      </h1>
      <div className="flex flex-col-reverse  md:flex-row justify-center items-center md:my-15 my-10 ">
        <div className="flex flex-col md:w-3/4 bg-base-300 p-5 rounded-xl shadow-sm   mt-10 md:mt-0 ">
          <p className="">
            Nous sommes heureux de vous accueillir sur le site officiel de notre
            communaiuté chrétienne. Ici, chaque âme est précieuse, chaque coeur
            est une promesse, et chaque visite est une bénédiction. <br />
            Notre mission est simple : aimer Dieu, servir notre prochain et
            faire grandir la foi en Jésus-Christ. Que vous soyez en quête de
            vérité, curieux de découvrir notre foi, ou déjà enraciné dans
            l'amour du seigneur, vous êtes chez vous. <br />
            Explorez nos enseignements, nos programmes spirituels, nos temps de
            prière et de louange, et rejoingnez une famille où la présence de
            Dieu transforme les vies.
          </p>
          <p
            className="my-4 font-bold text-md text-center md:text-left
        "
          >
            "Venez à moi, vous tous qui êtes fatigués et chargés, et vous
            donnerai du repos."{" "}
            <span className="text-accent">Mathieu 11 : 28</span>
          </p>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4">
            <a href="" className="btn btn-accent md:w-fit">
              {" "}
              Contactez-moi
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61564484227797"
                target="_blank"
                className="rounded-full border text-accent border-accent p-2 text-3xl hover:bg-accent hover:text-white  hover:-translate-y-1 "
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/228910387"
                target="_blank"
                className="rounded-full border  text-accent border-accent p-2 text-3xl hover:bg-accent hover:text-white hover:-translate-y-1"
              >
                <FaWhatsapp />
              </a>
              <a
                href=""
                className="rounded-full text-accent border border-accent p-2 text-3xl hover:bg-accent hover:text-white hover:-translate-y-1"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/@etde815"
                target="_blank"
                className="rounded-full text-accent border border-accent p-2 text-3xl hover:bg-accent hover:text-white hover:-translate-y-1 "
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="md:ml-10 md:w-2/4 ">
          <div className="">
            <div>
              <img
                src="/logo.jpg"
                className="w-96  animate-[pulse_20s_linear_infinite] rounded-full object-cover border-4 lighten border-accent shadow-2xl"
                style={{
                  borderRadius: "",
                }}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
