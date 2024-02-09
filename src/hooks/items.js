import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import API_URL from "../Constants";

const fetchItemsByCategoryId = async (categoryId) => {
  console.log(categoryId);
  return await axios.get(API_URL + `/Item/GetItemsByCategoryId/${categoryId}`);
};

const fetchCategoriesByParentId = async (selectedCategoryId) => {
  return await axios.get(
    API_URL + `/Category/GetCategoriesByParentId/${selectedCategoryId}`
  );
};

export const useFetchItemsByCategoryId = (categoryId) => {
  return useQuery({
    queryKey: ["itemsByCategoryId"],
    queryFn: () => fetchItemsByCategoryId(categoryId),
  });
};

export const useFetchCategoriesByParentId = (selectedCategoryId) => {
  return useQuery({
    queryKey: ["categoriesByParentId"],
    queryFn: () => fetchCategoriesByParentId(selectedCategoryId),
  });
};
