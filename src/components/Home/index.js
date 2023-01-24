import duzzk from "../../img/duzzk.png";
import "../../css/template.css";
import { TypeAnimation } from 'react-type-animation';



const Home = (props) => {
  return (
    <>
      <div className="home">
        <div className="homeApresentation">
          <h1>Eu sou o <span><TypeAnimation
            sequence={['Eduardo', 1000,
              "Duzzk", 1000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={1}
          /></span>
          </h1>
          <p>{props.desc}</p>
        </div>
        <div className="imgHome"><img src={duzzk} alt="" /></div>
      </div>
      <div className="homeSecond">

      </div>
      <div className="homeThird">

      </div>
    </>
  )
}

export default Home;