import apiKey from "@/services/apiKey";
import { useQuery } from "@tanstack/react-query";

export function useGetData(url: string) {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["Posts", url],
    // initialData: infos, // important,
    // placeholderData: infos, // important
    queryFn: async (): Promise<any> => {
      let address: string = url;
      const datas: any = await apiKey.get("/games").then((res) => {
        return res;
      });
      return datas;
    },
    // impoertant part... (chnaging data type)
    select: (datas) => {
      return datas.data.results;
    },
  });
  return {data, isPending, error, isError}
};