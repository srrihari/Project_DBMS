import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export interface HallCardProps {
  hallName: string;
  acc: number;
  price: number;
  ht: string;
  id: number;
}

const HallCard = ({ hallName, acc, price, ht, id }: HallCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Hallinfo/${id}`);
  };
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-center mb-4">{hallName}</h2>
        <div>Price: {price}</div>
      </CardContent>

      <CardFooter className="justify-center">
        <Button onClick={handleClick}>VIEW</Button>
      </CardFooter>
    </Card>
  );
};
export default HallCard;
