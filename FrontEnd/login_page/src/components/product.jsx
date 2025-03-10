import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"

export default function ProductCard({ _id, email, name, description, category, tags, price, stock, images, role, dele ,toCart}) {
  let navigate = useNavigate();

  const edit = () => {
    navigate("/create", { state: { _id, email, name, description, category, tags, price, stock, images, role, edit: true } });
  };



  const editDeleteButtons = () => (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={edit}
        className="flex-1 text-white px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        Edit
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={dele}
        className="flex-1 text-white px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-500 transition-all duration-300"
      >
        Delete
      </motion.button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl cursor-pointer flex flex-col justify-between max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
    >
      <div className="relative">
        <IoIosArrowBack className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
        <motion.img
          src={`http://localhost:8080/products-photo/${images[0]}`}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-3 transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <IoIosArrowForward className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-sm text-gray-600 opacity-80 line-clamp-3">{description}</p>
      <p className="text-lg font-bold text-gray-900 mt-2">${price}</p>
      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full text-white px-4 py-2 mt-2 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
      >
        More Info
      </motion.button> */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toCart}
        className="w-full text-white px-4 py-2 mt-2 rounded-md bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 transition-all duration-300"
      >
        More Info
      </motion.button>
      {role === "seller" && editDeleteButtons()}
    </motion.div>
  );
}