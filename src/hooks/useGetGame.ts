import apiKey from "@/services/apiKey";
import { useQuery } from "@tanstack/react-query";

export function useGetGame(url: string, gameName: string) {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["Posts", gameName],
    // initialData: infos, // important,
    // placeholderData: infos, // important
    queryFn: async (): Promise<any> => {
      let address: string = url + '/' + gameName;
      const datas: any = await apiKey.get(address).then((res) => {
        return res;
      });
      return datas;
    },
    // impoertant part... (chnaging data type)
    select: (datas) => {
      return datas?.data;
    },
  });
  return { data, isPending, error, isError };
}
