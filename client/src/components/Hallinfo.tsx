import React, {  useEffect, useState } from "react";
import { Button } from "./ui/button";
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
import { useNavigate, useParams } from "react-router-dom";
import useDB from "@/hooks/useDB";

const Hallinfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const db = useDB();
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hall, setHall] = useState<any>();

  useEffect(() => {
    const fetchData = async () => setHall(await db.getHallfromId(id!));
    if(id) fetchData();
  }, []);

  const handleBooking = async (event: React.MouseEvent) => {
    console.log(username);

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        email,
        hallID:id,
      }),
    });
    // console.log(response.status);
    if (response.ok) {
      window.alert(`Thanks For Registering ${username}!!!`);
      navigate(`/`);
    } else {
      window.alert("Error Registering");
    }
  };
  
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "8px",
      width: "25%", // Adjust the width as needed
      margin: "20px auto", // Center it horizontally
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      fontSize:"20px",
      fontWeight:"lighter"
    }}  className="container">
      <h1 style={{textAlign: "center", marginBottom: "30px", fontSize:"25px", fontWeight:"bold"}}><b>{hall?.hallName}</b></h1>
    <h1 style={{ marginBottom: "20px" }}>Accommodation: {hall?.acc}</h1>
    <h1 style={{ marginBottom: "20px" }}>Price: {hall?.price}</h1>
    <h1 style={{ marginBottom: "20px" }}>Features: {hall?.ht}</h1>

      <div style = {{textAlign: "center"}}>
      <Dialog>
        <DialogTrigger  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-7 px-4 py-2flex items-center justify-center ">
          BOOK
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
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="username"
                  className="col-span-3"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>

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
                  <Button onClick={handleBooking}>REGISTER</Button>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
    </div>
  );
};

export default Hallinfo;
