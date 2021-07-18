interface ItemShope {
  id: number;
  name: string;
  description: string;
  slug: string;
  size: string[];
  img: string;
  price: number;
  star: number;
}

export const itemsShope: Array<ItemShope> = [
  {
    id: 1,
    name: "Los Angels,CA Shirt",
    description:
      "Duis et nunc fermentum, mollis nisl ac, pulvinar nunc. Aliquam elementum nec lacus sed ullamcorper. Mauris tempor ex at nunc finibus vehicula ac vitae ipsum. Suspendisse placerat ornare purus, sit amet volutpat nibh bibendum mattis. Phasellus accumsan dui in mattis aliquam. Proin lacinia odio orci, vitae vulputate sapien consectetur sed. Pellentesque id quam arcu. Morbi sit amet mi mi. Cras metus augue, viverra ac tincidunt vitae, scelerisque eget diam. Duis tempor urna ligula, vitae efficitur est elementum nec. Aenean in nisl quis metus pretium luctus in id erat. Nullam sed arcu sem. Donec ut rhoncus magna, at convallis lorem. Maecenas ex turpis, finibus venenatis sagittis vel, blandit quis dui. Phasellus semper pulvinar erat, non blandit dolor.",
    slug: "Los-Angels-CA-Shirt",
    size: ["large", "x-large"],
    img: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    price: 9.99,
    star: 4,
  },
  {
    id: 2,
    name: "white Shirt",
    description:
      "Nulla sit amet pretium arcu, condimentum pellentesque justo. In vehicula, elit accumsan pulvinar finibus, odio ligula facilisis turpis, nec rutrum nibh justo sit amet augue. In vitae imperdiet dui, vitae viverra purus. Suspendisse lobortis eleifend scelerisque. Mauris vestibulum sed nulla non tempor. Maecenas facilisis mattis dictum. Suspendisse ullamcorper nisi id mi dapibus, id eleifend nisl congue.",
    slug: "white-Shirt",
    size: ["large", "x-large"],
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: 5.99,
    star: 3.5,
  },
  {
    id: 3,
    name: "YAHWEH YIREH Shirt",
    description:
      "Suspendisse id enim dapibus, convallis tortor sed, rutrum tellus. Sed in diam nisi. Vivamus a magna pellentesque, pellentesque lectus eu, viverra risus. Duis blandit ornare est quis efficitur. Praesent bibendum sed dolor in tristique. Nullam condimentum, ligula non posuere vehicula, odio mi interdum dui, eu vehicula augue ex id augue. Maecenas faucibus semper ex, nec lobortis magna accumsan sit amet. Cras dignissim in turpis ac commodo. Phasellus pulvinar euismod nulla. Nullam suscipit justo vel maximus iaculis. Morbi efficitur, justo tempus viverra malesuada, quam purus rhoncus est, sed rutrum risus nisl facilisis ex.",
    slug: "YAHWEH-YIREH-Shirt",
    size: ["large", "x-large"],
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    price: 7.99,
    star: 4.2,
  },
  {
    id: 4,
    name: "Blue Cat Shirt",
    description:
      "Nulla luctus massa non feugiat cursus. Proin volutpat purus erat, id laoreet elit consequat ac. Sed sollicitudin fermentum magna eu vulputate. Aenean mollis rutrum ipsum, et gravida enim porta eget. Vivamus nec orci luctus, luctus magna sed, ultrices nisl. Praesent non odio est. In lacus lacus, condimentum non vulputate in, pretium vel metus. Phasellus consequat consequat hendrerit. Cras eu molestie dui, in ullamcorper lectus. Integer velit ante, blandit quis blandit a, aliquet in augue. Sed vel mi quis lectus eleifend auctor. Fusce sed felis laoreet enim rutrum feugiat in quis leo. Nulla pulvinar quam vitae justo laoreet, non efficitur orci porta. Maecenas a bibendum felis. Nulla pellentesque lorem sit amet ante placerat venenatis.",
    slug: "Blue-Cat-Shirt",
    size: ["Small", "large", "x-large"],
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    price: 6.99,
    star: 4,
  },
  {
    id: 5,
    name: "greenShirt",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    slug: "green-Shirt",
    size: ["Small", "large"],
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    price: 7.99,
    star: 4,
  },
  {
    id: 6,
    name: "705-Shirt",
    description:
      "Nam augue quam, aliquam ac lobortis id, vehicula porta risus. Sed mollis tellus eget odio interdum, eu rutrum dui ornare. Donec quis consequat mi. In dignissim lectus nec dignissim auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla interdum ex neque, vel ullamcorper metus molestie in. Phasellus euismod turpis et blandit laoreet. Pellentesque vehicula vel massa et dignissim. Phasellus et turpis tortor. Etiam sodales enim et dolor ultrices, eget sollicitudin ex mattis.",
    slug: "705-Shirt",
    size: ["Small", "large", "x-large"],
    img: "https://images.unsplash.com/photo-1618354691551-44de113f0164?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    price: 12.99,
    star: 4.5,
  },
  {
    id: 7,
    name: "Black-Shirt",
    description:
      "Sed porttitor erat eget leo sagittis aliquam. Aenean in nunc id risus finibus ultricies viverra sodales risus. Ut at ultricies nisl. Proin aliquet, massa quis faucibus aliquet, lectus dui condimentum urna, ac placerat sapien nulla eu sapien. Morbi commodo enim ut libero mollis ullamcorper. In nec tempor leo. Quisque sed placerat enim. Donec porta vestibulum libero ac efficitur. Quisque imperdiet mollis dolor, sit amet cursus mauris lacinia vel. Quisque in dignissim dolor. Nunc sit amet massa lacus. Sed lorem arcu, ornare id nunc id, interdum consectetur felis. Vivamus tempus justo quis nisl imperdiet, eu euismod metus mollis. Donec velit arcu, faucibus aliquet diam in, aliquam tempus sapien. Aenean vestibulum dolor eget urna pharetra, sed faucibus augue ultrices.",
    slug: "Black-Shirt",
    size: ["large", "x-large"],
    img: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    price: 8.99,
    star: 4,
  },
  {
    id: 8,
    name: "Super Black Shirt",
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    slug: "Super-Black-Shirt",
    size: ["large"],
    img: "https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80",
    price: 11.99,
    star: 5,
  },
  {
    id: 9,
    name: "Hotel Shirt",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    slug: "Hotel-Shirt-Shirt",
    size: ["Small", "large"],
    img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
    price: 5.99,
    star: 4.5,
  },
  {
    id: 10,
    name: "Death Shirt",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    slug: "Death-Shirt",
    size: ["large", "x-large"],
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    price: 9.99,
    star: 4.2,
  },
];
