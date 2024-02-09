import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import API_URL from "../Constants";
import { isEmpty } from "lodash";

const fetchAllOrders = async () => {
  return await axios.get(API_URL + `/Order/GetAllOrders`);
};

const fetchTrackingOrders = async (userId) => {
  console.log(userId);
  return await axios.get(
    API_URL + `/Order/GetTrackingOrder/${userId}?sort=desc`
  );
};

const fetchOrdersByStatus = async (userId, status, date, sort) => {
  if (!isEmpty(date)) {
    return (
      (await userId) &&
      axios.get(
        API_URL +
          `/Order/GetOrderByStatus/${userId}/${status}?startdate=${date}&endate=${date}T23:59:00&sort=${sort}`
      )
    );
  }
  return (
    (await userId) &&
    axios.get(
      API_URL + `/Order/GetOrderByStatus/${userId}/${status}?sort=${sort}`
    )
  );
};

export const useFetchAllOrders = () => {
  return useQuery({
    queryKey: ["allOrders"],
    queryFn: () => fetchAllOrders(),
    refetchIntervalInBackground: true,
    refetchInterval: 30000,
  });
};

export const useFetchOrdersByStatus = (userId, status, date, sort) => {
  return useQuery({
    queryKey: ["ordersByStatus"],
    queryFn: () => fetchOrdersByStatus(userId, status, date, sort),
    refetchIntervalInBackground: true,
    refetchInterval: 30000,
  });
};

export const useFetchPendingOrders = (userId) => {
  return useQuery({
    queryKey: ["pendingOrders"],
    queryFn: () => fetchOrdersByStatus(userId, "pending"),
    refetchIntervalInBackground: true,
    refetchInterval: 30000,
  });
};

export const useFetchInProgressOrders = (userId) => {
  return useQuery({
    queryKey: ["inProgressOrders"],
    queryFn: () => fetchOrdersByStatus(userId, "in-progress"),
    refetchIntervalInBackground: true,
    refetchInterval: 30000,
  });
};

export const useFetchTrackingOrders = (userId) => {
  console.log("this user", userId);
  return useQuery({
    queryKey: ["TrackingOrders"],
    queryFn: () => fetchTrackingOrders(userId),
    refetchIntervalInBackground: true,
    refetchInterval: 30000,
    onError: (err) => console.error(err),
  });
};

export const useFetchCompletedOrders = (userId) => {
  return useQuery({
    queryKey: ["completedOrders"],
    queryFn: () => fetchOrdersByStatus(userId, "completed"),
    refetchIntervalInBackground: true,
    refetchInterval: 30000,
  });
};
