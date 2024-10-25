import useDB from '@/hooks/useDB';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HallCardProps } from './Hallcard';

export default function login() {
    const navigate = useNavigate();
  const [halls, setHalls] = useState<HallCardProps[]>([]);
  const db = useDB();

  useEffect(() => {
    const fetchData = async () => setHalls(await db.getHalls());
    fetchData();
  }, []);
  return (
    <div>login</div>
  )
}
