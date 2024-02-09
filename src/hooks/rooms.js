import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import API_URL from "../Constants";

const fetchRoomById = async (roomId) => {
  return await axios.get(API_URL + `/Room/GetRoomById/${roomId}`);
}

export const useFetchRoomById = (roomId) => {
  return useQuery({
    queryKey: ['room'],
    queryFn: () => fetchRoomById(roomId),
  });
}
