import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function SingleBenefit({ icon, title, description }: Props) {
  return (
    <div className="shadow-lg mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default SingleBenefit;
