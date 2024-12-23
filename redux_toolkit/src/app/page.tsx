import Image from "next/image";
import AddUser from "./components/add-user";
import DisplayUser from "./components/display-user";

export default function Home() {
  return (
    <div>
         <AddUser/>
         <DisplayUser/>
    </div>
  );
}
