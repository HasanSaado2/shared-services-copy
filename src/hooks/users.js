import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import API_URL from "../Constants";

const fetchUserById = async (userId) => {
  return (await userId) && axios.get(API_URL + `/User/GetUser/${userId}`);
};

const fetchAllUsers = async () => {
  return await axios.get(API_URL + `/User/GetAllUsers`);
};

const fetchMeetingRoomUsers = async () => {
  return await axios.get(API_URL + `/User/GetMeetingRoomUsers`);
};

export const useFetchUserById = (userId) => {
  return useQuery({
    queryKey: ["userById"],
    queryFn: () => fetchUserById(userId),
    onError: (err) => console.error(err),
  });
};

export const useFetchAllUsers = () => {
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: () => fetchAllUsers(),
    onError: (err) => console.error(err),
  });
};

export const useFetchMeetingRoomUsers = () => {
  return useQuery({
    queryKey: ["MeetingRoomUsers"],
    queryFn: () => fetchMeetingRoomUsers(),
    onError: (err) => console.error(err),
  });
};
