import TaCard from "@/components/custom/TaCard";
import Sidebar from "@/components/ui/sidebar";
import React from "react";

const dummyData = [
  { name: "Filip D.", major: "Computer Science", email: "dimit1f@cmich.edu", stars: "3145", img: "https://images.pexels.com/photos/3244392/pexels-photo-3244392.jpeg?auto=compress&cs=tinysrgb&w=600"},
  { name: "Martin D.", major: "Opera Singing", email: "dimit1f@cmich.edu", stars: "10k", img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600"},
  { name: "Mateja M.", major: "Data Science", email: "dimit1f@cmich.edu", stars: "4532", img: "https://images.pexels.com/photos/2460488/pexels-photo-2460488.jpeg?auto=compress&cs=tinysrgb&w=600"},
  { name: "Merrick P.", major: "Enviromental Science", email: "dimit1f@cmich.edu", stars: "3145", img: "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&w=600"},
  { name: "Austin K.", major: "Computer Science", email: "dimit1f@cmich.edu", stars: "4135", img: "https://images.pexels.com/photos/4061512/pexels-photo-4061512.jpeg?auto=compress&cs=tinysrgb&w=600"},
  { name: "Angela T.", major: "Theater Somethign", email: "dimit1f@cmich.edu", stars: "150", img: "https://images.pexels.com/photos/11608681/pexels-photo-11608681.jpeg?auto=compress&cs=tinysrgb&w=600"},
]

const page = () => {
  return (
    <>
      <Sidebar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 lg:px-20">
        {dummyData.map(ta => <TaCard name={ta.name} major={ta.major} email={ta.email} stars={ta.stars} img={ta.img} />)}
      </div>
    </>
  );
};

export default page;
