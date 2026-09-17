import Tech from "./[components]/Tech";
import WhoWeAre from "./[components]/WhoWeAre";
import Navbar from "./[layouts]/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Tech />
      <WhoWeAre />
      <div className="mt-52">

      </div>
    </>
  )
}