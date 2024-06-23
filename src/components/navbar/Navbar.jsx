import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span
             initial={{opacity: 0, scale: 0.5}}
             animate={{opacity: 1, scale: 1}}
             transition={{duration: 0.5}}
            >Adithyan s</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/adithyan313/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/adithyan313"><img src="https://res.cloudinary.com/dajlabmrb/image/upload/v1713021018/github-mark-white_wbb8t5.svg" alt="" /></a>
                <a href="https://www.instagram.com/adhi____s/?hl=en"><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar