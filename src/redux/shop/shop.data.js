const SHOP_DATA = {
  fresh: {
    id: 1,
    title: "Fresh",
    routeName: "fresh",
    items: [
      {
        id: 1,
        name: "Blazer Low N7",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dc1e017c-5ed5-444b-837b-d0ff10c1b17a/blazer-low-n7-shoe-5bQVVC.jpg",
        price: 80,
      },
      {
        id: 2,
        name: "Air Max 1 N7",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e78ec4e0-1e5b-4ca7-8a89-05595bf7a132/air-max-1-n7-shoe-xQFCj5.jpg",
        price: 130,
      },
      {
        id: 3,
        name: "Air Presto",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7595a206-8678-4e28-ab61-08c063700491/air-presto-mens-shoe-CBrWFF.jpg",
        price: 130,
      },
      {
        id: 4,
        name: "Air Max 270",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c9239465-2703-4f5c-8b18-44948fea3c39/air-max-270-mens-shoe-F8FDLQ.jpg",
        price: 150,
      },
      {
        id: 5,
        name: "Renew Run",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9f801bf1-f1f7-49fc-9842-63afb1995aeb/renew-run-mens-running-shoe-lfvnTs.jpg",
        price: 90,
      },
      {
        id: 6,
        name: "Air Zoom Structure 23",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/42bde1f6-e0fb-4046-9cbf-ae07753dedc4/air-zoom-structure-23-mens-running-shoe-427jQw.jpg",
        price: 120,
      },
      {
        id: 7,
        name: "Air Zoom Pegasus 37",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/0984a115-7c17-4373-a1a3-1e2b03c41605/air-zoom-pegasus-37-flyease-mens-running-shoe-extra-wide-8nq874.jpg",
        price: 120,
      },
      {
        id: 8,
        name: "Air Max ZM950",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/41b1ef6d-97c5-4acc-becd-94c3b15cb557/air-max-zm950-mens-shoe-FRkJbF.jpg",
        price: 180,
      },
      {
        id: 9,
        name: "Air Max 90 SE",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9f78ae2c-2c78-4b58-be1b-83cf74ad7e10/air-max-90-se-mens-shoe-frR1F7.jpg",
        price: 130,
      },
    ],
  },
  popular: {
    id: 2,
    title: "Popular",
    routeName: "popular",
    items: [
      {
        id: 10,
        name: "Air Force 1 07",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/jomszuqr8gw3h18xhpro/air-force-1-07-mens-shoe-JkTGzADv.jpg",
        price: 90,
      },
      {
        id: 11,
        name: "Air Force 1",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f80ac20c-2e2c-4baa-996b-6544f2723d85/air-force-1-mens-boot-rDmRsD.jpg",
        price: 160,
      },
      {
        id: 12,
        name: "Air Jordan 3 Retro SE",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7b4923de-c8b6-4ba8-a5f4-458200e38de4/air-jordan-3-retro-se-shoe-gt1c9k.jpg",
        price: 250,
      },
      {
        id: 13,
        name: "Air Jordan 4 Retro",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c6df96c6-cf00-4c36-9a5d-925e765d809d/air-jordan-4-retro-shoe.jpg",
        price: 200,
      },
      {
        id: 14,
        name: "Air Max 270 React",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cxdkiijbolujkkwh9nla/air-max-270-react-mens-shoe-zPRv3k.jpg",
        price: 160,
      },
      {
        id: 15,
        name: "LeBron 18",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/a011143b-3f77-40be-a425-d6e8b64c2006/lebron-18-basketball-shoe-M6DgN2.jpg",
        price: 200,
      },
      {
        id: 16,
        name: "Air VaporMax Plus",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zx0w2pqu1asagkhrt0bz/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
        price: 200,
      },
      {
        id: 17,
        name: "Air More Uptempo",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/747a2572-b1e3-45ae-83b8-0752efb02e7c/air-more-uptempo-mens-shoe-gVtQBG.jpg",
        price: 170,
      },
    ],
  },
  discount: {
    id: 3,
    title: "Discount",
    routeName: "discount",
    items: [
      {
        id: 18,
        name: "Flex Experience RN 8",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bwjbqdbpsn0aiysgcg6e/flex-experience-rn-8-mens-running-shoe-ttJnnc.jpg",
        price: 37,
      },
      {
        id: 19,
        name: "Air Diamond Trainer",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bnamhx07uzlgnm0qbkaj/air-diamond-trainer-mens-baseball-shoe-q10vkx.jpg",
        price: 38,
      },
      {
        id: 20,
        name: "Drop-Type Mid",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/8ca135e5-6227-49d0-8480-ac65c1e663b8/drop-type-mid-mens-shoe-M1pTNk.jpg",
        price: 39,
      },
      {
        id: 21,
        name: "Donwshifter 9",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/g8vruqsrsqihqnt2ulyr/downshifter-9-mens-running-shoe-v0cLTv.jpg",
        price: 40,
      },
      {
        id: 22,
        name: "Tanjun",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-35fe5bb1-cb0a-4c7c-8678-7358019ee87c/tanjun-mens-shoe-w8ToA8jr.jpg",
        price: 65,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Court Royale AC",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/224bd622-0d4b-4764-993f-c8c74ee8b719/court-royale-ac-womens-shoe-XZFfnk.jpg",
        price: 60,
      },
      {
        id: 24,
        name: "Revolution 5",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/04d94305-b944-44d2-8787-2500633f76c8/revolution-5-womens-running-shoe-hC41Vf.jpg",
        price: 65,
      },
      {
        id: 25,
        name: "Renew In-Season TR 10",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/efca940d-0790-41d6-8026-806bb67096cd/renew-in-season-tr-10-womens-training-shoe-rV5XZ4.jpg",
        price: 75,
      },
      {
        id: 26,
        name: "Air Zoom Tempo NEXT%",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/2d0281f0-d0dc-45ef-95ae-496cbcd80333/air-zoom-tempo-next-womens-running-shoe-ZWMnV0.jpg",
        price: 200,
      },
      {
        id: 27,
        name: "Air Max 97",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c93ed3fb-dc72-44f6-a4ee-a7f3d42dc7d6/air-max-97-womens-shoe-XD9m01.jpg",
        price: 170,
      },
      {
        id: 28,
        name: "React Infinity Run Flyknit",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/fb0c9ddb-45b1-416c-b24c-579075d78f94/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
        price: 160,
      },
      {
        id: 29,
        name: "TC 7900 LX 3M",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/2d992fad-7857-4222-9338-ff1ec590fced/tc-7900-lx-3m%E2%84%A2-womens-shoe-SgrkqS.jpg",
        price: 120,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Blazer Low N7",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dc1e017c-5ed5-444b-837b-d0ff10c1b17a/blazer-low-n7-shoe-5bQVVC.jpg",
        price: 80,
      },
      {
        id: 31,
        name: "Air Max 1 N7",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e78ec4e0-1e5b-4ca7-8a89-05595bf7a132/air-max-1-n7-shoe-xQFCj5.jpg",
        price: 130,
      },
      {
        id: 32,
        name: "Air Presto",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7595a206-8678-4e28-ab61-08c063700491/air-presto-mens-shoe-CBrWFF.jpg",
        price: 130,
      },
      {
        id: 33,
        name: "Air Max 270",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c9239465-2703-4f5c-8b18-44948fea3c39/air-max-270-mens-shoe-F8FDLQ.jpg",
        price: 150,
      },
      {
        id: 34,
        name: "Renew Run",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9f801bf1-f1f7-49fc-9842-63afb1995aeb/renew-run-mens-running-shoe-lfvnTs.jpg",
        price: 90,
      },
      {
        id: 35,
        name: "Air Zoom Structure 23",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/42bde1f6-e0fb-4046-9cbf-ae07753dedc4/air-zoom-structure-23-mens-running-shoe-427jQw.jpg",
        price: 120,
      },
      {
        id: 36,
        name: "Air Zoom Pegasus 37",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/0984a115-7c17-4373-a1a3-1e2b03c41605/air-zoom-pegasus-37-flyease-mens-running-shoe-extra-wide-8nq874.jpg",
        price: 120,
      },
      {
        id: 37,
        name: "Air Max ZM950",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/41b1ef6d-97c5-4acc-becd-94c3b15cb557/air-max-zm950-mens-shoe-FRkJbF.jpg",
        price: 180,
      },
      {
        id: 38,
        name: "Air Max 90 SE",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9f78ae2c-2c78-4b58-be1b-83cf74ad7e10/air-max-90-se-mens-shoe-frR1F7.jpg",
        price: 130,
      },
      {
        id: 39,
        name: "Flex Experience RN 8",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bwjbqdbpsn0aiysgcg6e/flex-experience-rn-8-mens-running-shoe-ttJnnc.jpg",
        price: 37,
      },
      {
        id: 40,
        name: "Air Diamond Trainer",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bnamhx07uzlgnm0qbkaj/air-diamond-trainer-mens-baseball-shoe-q10vkx.jpg",
        price: 38,
      },
      {
        id: 41,
        name: "Drop-Type Mid",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/8ca135e5-6227-49d0-8480-ac65c1e663b8/drop-type-mid-mens-shoe-M1pTNk.jpg",
        price: 39,
      },
      {
        id: 42,
        name: "Donwshifter 9",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/g8vruqsrsqihqnt2ulyr/downshifter-9-mens-running-shoe-v0cLTv.jpg",
        price: 40,
      },
      {
        id: 43,
        name: "Tanjun",
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-35fe5bb1-cb0a-4c7c-8678-7358019ee87c/tanjun-mens-shoe-w8ToA8jr.jpg",
        price: 65,
      },
    ],
  },
};

export default SHOP_DATA;
