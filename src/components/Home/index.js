import duzzk from "../../img/duzzk.png";
import "../../css/template.css";
import { TypeAnimation } from 'react-type-animation';



const Home = (props) => {
  return (
    <>
      <div className="home">
        <div className="homeApresentation">
          <h1 className="apresentationName">Eu sou o <TypeAnimation 
            className="animatedName"
            sequence={['Eduardo', 1000,
              "Duzzk", 1000
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            speed={1}
          />
          </h1>
          <p className="descApresentation">{props.desc}</p>
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