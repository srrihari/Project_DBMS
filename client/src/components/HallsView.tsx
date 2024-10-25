import useDB from "@/hooks/useDB";
import { useEffect, useState } from "react";
import HallCard, { HallCardProps } from "./Hallcard";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { log } from "console";

export default function HallsView() {
  const navigate = useNavigate();
  const [halls, setHalls] = useState<HallCardProps[]>([]);
  const db = useDB();

  useEffect(() => {
    const fetchData = async () => setHalls(await db.getHalls());
    fetchData();
  }, []);
  const id = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hall, setHall] = useState<any>();

  const handleLogin = async (event: React.MouseEvent) => {
    const response = await fetch("http://localhost:3000/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        email,
      }),
    });
    console.log(response.ok);
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    if (!data.isMatch) {
      window.alert(data.message);
      return;
    }

    localStorage.setItem("user_id", data.cid);
    navigate(`/bookings`);
  };
  return (
    <div className="space-y-6">
      {halls.map((hall) => (
        <HallCard key={hall.id} {...hall} />
      ))}
      <div style={{ position: "absolute", top: "5px", right: "40px" }}>
        <Dialog>
          <DialogTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-7 px-4 py-2flex items-center justify-center ">
            View Bookings
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="col-span-4 flex justify-center">
                  Enter Your Details
                </div>
              </DialogTitle>
              <DialogDescription></DialogDescription>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username">E-mail</Label>
                  <Input
                    id="mail"
                    type="email"
                    name="email"
                    className="col-span-3"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    className="col-span-3"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <div className="col-span-4 flex justify-center">
                    <Button onClick={handleLogin}>LOGIN</Button>
                  </div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
