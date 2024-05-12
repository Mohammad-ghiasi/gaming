"use client"
import React from 'react'
import { useGetData } from "@/hooks/useGetData";
import { Text, Box, Flex } from '@chakra-ui/react';
import VerticalNav from '../secondNav/VerticalNav';

export default function Body() {
    const { data, isPending, error, isError } = useGetData("/games")


    return (
        <>
            <Flex>
                <Flex flex={{ base: "0", lg: "2" }}>
                    <VerticalNav />
                </Flex>
                <Flex flex={{ base: "12", lg: "10" }}>
                    {/* {data?.map((item: any) => <Text>{item.name}</Text>)} */}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita sed dolor inventore amet iusto incidunt reprehenderit necessitatibus ipsam neque! Officiis suscipit voluptas excepturi? Aut dolorem nulla id labore harum.
                    Natus qui mollitia dicta tempora labore repellendus voluptatem quos eos aspernatur soluta repellat iure quisquam et animi asperiores dignissimos iste, quidem voluptates quod debitis ullam, vero excepturi? Delectus, odit adipisci.
                    Commodi, totam deleniti ipsum voluptatum natus dolorum eius, ex culpa omnis praesentium aspernatur nulla consequuntur ea tenetur error incidunt labore placeat laboriosam ducimus necessitatibus possimus voluptatibus eos qui! Cum, omnis!
                    Numquam explicabo quasi fugiat deserunt, commodi sequi praesentium eos neque dolores nobis sapiente blanditiis, officia obcaecati. Illum delectus ducimus sed maxime repudiandae, nihil cum voluptatibus dolorem, facere nobis harum. Inventore?
                    Cumque, excepturi numquam laudantium perspiciatis debitis neque similique optio voluptatibus, eos unde sapiente praesentium obcaecati quis saepe tenetur architecto iure necessitatibus fugit velit quo. Natus ipsam reprehenderit libero dignissimos veritatis.
                    Ratione tenetur laudantium earum assumenda dolorum praesentium, nisi nobis laborum saepe doloribus temporibus dignissimos est ea officiis odit nesciunt enim suscipit modi inventore doloremque. Amet fuga animi aperiam vero voluptatum?
                    Fuga harum veritatis officiis error voluptas earum laudantium suscipit praesentium laborum vel dolor deleniti inventore nam a, impedit corrupti magnam ea aut consectetur! Magni iste distinctio dolorum, ducimus eius labore.
                    Earum repudiandae vitae voluptatum delectus repellendus eius consequatur possimus, dicta soluta, architecto, quae at commodi rerum et quia id fugit eaque distinctio ullam enim repellat explicabo pariatur dolorem tempora. Officia.
                    Commodi doloribus dicta tenetur accusantium, corporis voluptatem dignissimos numquam praesentium fugit a eveniet inventore debitis ex molestias, sit iusto eius cupiditate laudantium corrupti provident ea! Consectetur impedit at cupiditate illum.
                    Voluptas natus corrupti accusantium? Nesciunt, quisquam? Repellendus ducimus, officia omnis nihil, tempore velit aliquam eos mollitia quisquam voluptatem quibusdam id dolores sunt tenetur magnam eius esse quae dignissimos! Impedit, suscipit.
                </Flex>
            </Flex>
        </>
    )
}
