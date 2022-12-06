import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Home from "../../assets/img/21.png";
import Author from "../../assets/img/author.jpg";
import styles from "../../styles/ListingCards.module.css";

export default function ListingsCard() {
  return (
    <Link href={"/"}>
      <Card className="w-full w-96 mx-auto">
        <CardHeader className="relative h-56">
          <Image src={Home} alt="Loading..." />
        </CardHeader>
        <CardBody className="text-center">
          <Typography
            variant="h6"
            className="my-2 text-start poppins text-red-500 font-bold"
          >
            Rs 2,00,0000/Month
          </Typography>
          <Typography
            variant="h4"
            className="my-4 text-start poppins text-black font-semibold"
          >
            Cozy 5 Stars Apartment
          </Typography>
          <Typography className="text-start poppins">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life
            in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <div className="flex gap-3">
            <Image src={Author} alt="Loading..." className={styles.authorPic} />
            <div className="author-info text-start flex flex-col justify-between">
              <strong className="text-md text-black">Muhammad Uzair</strong>
              <span className="text-sm text-gray-500">Estate Agents</span>
            </div>
          </div>
          <div className="icons flex gap-2">
            <i className="fa-solid fa-arrow-up-right-from-square text-white text-lg px-3 py-2 rounded-full bg-red-500"></i>
            <i className="fa-solid fa-eye text-white text-lg px-3 py-2 rounded-full bg-red-500"></i>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
