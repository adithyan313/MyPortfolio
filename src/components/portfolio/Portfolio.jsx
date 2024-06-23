import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Favorite-Footwear E-Commers - Full Stack",
    img: "/blog.png",
    link: "https://github.com/adithyan313/Footwear__Project.git",
    desc: `Developed a comprehensive e-commerce platform for managing and selling various categories of footwear online. Implemented an admin panel with login, CRUD operations for products, sales reports, and order management. Built a user-friendly interface with registration, login, product browsing, search, filtering, and cart management features. Integrated Razorpay for secure payment processing, order confirmations, and email receipts. Enabled QR code generation and scanning to enhance user experience, resulting in a streamlined platform for footwear sales and inventory management.`,
  },
  {
    id: 2,
    title: "BookMyShow Movie Booking website - Full Stack",
    img: "/recipe.png",
    link: "https://github.com/adithyan313/MovieTicketBooking.git",
    desc: `Developed an online movie booking platform for a theatre, facilitating the management of movie shows and enhancing user convenience. The platform includes admin login with email/password authentication, allowing admins to add, edit, delete, and disable movie shows. Users can register and log in, view all shows on a specific date, and book tickets for any show. Integrated Razorpay payment gateway ensures secure transactions. Users receive booking confirmation screens with booking IDs and email confirmations upon successful bookings. The platform also features a "My Bookings" page for users to view and download tickets, with PDF ticket generation that includes a QR code containing show details.`,
  },
  {
    id: 3,
    title: "Medico Managing Website - Django/Rest-Api",
    img: "/threads.png",
    link: "https://github.com/adithyan313/DjangoMedico-Project.git",
    desc: `Developed a Django application and REST API for managing a medical store, enabling users to perform CRUD operations on medicines. Key features include user signup and login functionality, the ability to add, edit, and delete medicines, as well as list and search for medicines. The Django REST API provides JSON responses for all requests, supporting user authentication and allowing for adding, editing, deleting, listing, and searching medicines. The API was thoroughly tested using Postman to ensure functionality and reliability.`
  },
  {
    id: 4,
    title: "Medical Store Inventory Management - Reactjs",
    img: "/movie.png",
    link: "https://github.com/adithyan313/React-Medico-Project.git",
    desc: `Developed a React application to manage medicines by consuming a provided API, enabling users to perform CRUD operations. Key features include user authentication with signup and login functionality, and comprehensive medicine management capabilities such as adding new medicines, editing existing medicine details, deleting medicines, listing all medicines, and searching for specific medicines.`,
  },
  {
    id: 5,
    title: "Calculator - Javascript",
    img: "/medica.png",
    link: "https://github.com/adithyan313/Calculator.git",
    desc: `Designed and developed a user-friendly, responsive calculator using JavaScript, HTML, and CSS, featuring basic arithmetic operations with accurate calculation capabilities, a clear function to reset inputs, and a display for showing calculated values, all encapsulated in an intuitive calculator-shaped interface.`,
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="portfolio">
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
            </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
