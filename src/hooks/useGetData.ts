import apiKey from "@/services/apiKey";
import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useGetData(url: string) {
  let next: string | null = null;
  let previous: string | null = null;
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["Posts", url],
    // initialData: infos, // important,
    // placeholderData: infos, // important
    queryFn: async (): Promise<any> => {
      let address: string = url;
      const datas: any = await apiKey.get(address).then((res) => {
        return res;
      });
      return datas;
    },
    // impoertant part... (chnaging data type)
    select: (datas) => {
      next = datas?.data.next;
      previous = datas?.data.previous;
      return datas?.data.results;
    },
  });
  return { data, isPending, error, isError, next, previous };
}

// export const useGetData = (url: string) => {
//   const {
//     data,
//     isPending,
//     hasNextPage,
//     hasPreviousPage,
//     fetchNextPage,
//     fetchPreviousPage,
//     isFetchingNextPage,
//   } = useInfiniteQuery({
//     queryKey: ["Posts", url],
//     initialPageParam: 1,
//     queryFn: async function ({ pageParam }: { pageParam: number }) {
//       let address: string = url + `&page=${pageParam}`;
  
//       const datas = await apiKey.get(address);
//       return datas.data;
//     },
//     getNextPageParam: function (
//       lastPage,
//       allPages,
//       lastPageParam,
//       allPageParams
//     ) {
//       if (lastPage.next) {
//         return lastPageParam + 1;
//       } else {
//         return null;
//       }
//     },
//     select(result) {
//       return result.pages.flatMap((page) => page.results);
//     },
//   });

//   return {
//     data,
//     isPending,
//     hasNextPage,
//     hasPreviousPage,
//     fetchNextPage,
//     fetchPreviousPage,
//     isFetchingNextPage,
//   };
// };

