async function getHalls() {
  const res = await fetch("http://localhost:3000/");
  const data = await res.json();
  const mappedHalls = data.map((hall: any) => ({
    id: hall.hall_id,
    hallName: hall.hall_name,
    acc: hall.hall_accommodation,
    price: hall.hall_price,
    ht: hall.hall_tags,
  }));
  return mappedHalls;
}

async function getBookings(cid: string) {
  const res = await fetch(`http://localhost:3000/booking?id=${cid}`);
  const data = await res.json();
  return data;
}

async function getHallfromId(id: string) {
  const res = await fetch(`http://localhost:3000/?id=${id}`);
  const hall = await res.json();
  console.log(hall);
  return {
    id: hall.hall_id,
    hallName: hall.hall_name,
    acc: hall.hall_accommodation,
    price: hall.hall_price,
    ht: hall.hall_tags,
  };
}

async function getCustomerfromId(id: string) {
  const res = await fetch(`http://localhost:3000/?Cid=${id}`);
  const book = await res.json();
  console.log(book);
  return {
    // id: hall.hall_id,
    // hallName: hall.hall_name,
    // acc: hall.hall_accommodation,
    // price: hall.hall_price,
    // ht: hall.hall_tags,
  };
}

export default function useDB() {
  return { getHalls, getBookings, getHallfromId, getCustomerfromId };
}
