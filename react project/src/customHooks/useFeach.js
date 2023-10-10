import { useEffect, useState } from "react";

export const useFeach = (feachFunction) => {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [errors, setErrors] = useState(null);

  useEffect(() => {
    let feachData = async () => {
      setIsLoading(true);
      try {
        let { data } = await feachFunction();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrors(error.message);
      }
    };

    feachData();
  }, []);

  return [data, setData, isLoading, errors];
};
