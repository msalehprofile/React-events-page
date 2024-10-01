export type EventDataType = {
    id: number;
    eventName: string;
    venue: string;
    imageURL: string;
    startDate: string;
    description: string;
    artists: string[];
}


export const eventData = [
  {
    id: 1,
    eventName: "Rock Revolution Concert",
    venue: "O2 Manchester",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2024-11-29T19:00:00",
    description:
      "Experience the ultimate rock concert featuring top bands from around the world.",
    artists: ["The Rolling Stones", "Foo Fighters", "Muse", "Arctic Monkeys"],
  },
  {
    id: 2,
    eventName: "Comedy Night Extravaganza",
    venue: "Laugh Factory London",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2024-12-05T20:30:00",
    description:
      "Get ready for a night of non-stop laughter with our lineup of hilarious comedians.",
    artists: ["John Mulaney", "Ali Wong", "Dave Chappelle"],
  },
  {
    id: 3,
    eventName: "Classical Symphony Orchestra",
    venue: "Royal Albert Hall",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2025-01-15T18:00:00",
    description:
      "Immerse yourself in the beautiful melodies of classical masterpieces performed by world-renowned musicians.",
    artists: [
      "London Symphony Orchestra",
      "Yo-Yo Ma",
      "Lang Lang",
      "Anne-Sophie Mutter",
      "Gustavo Dudamel",
    ],
  },
  {
    id: 4,
    eventName: "Tech Innovation Summit",
    venue: "ExCeL London",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2025-02-20T09:00:00",
    description:
      "Discover the latest technological advancements and network with industry leaders at this cutting-edge conference.",
    artists: ["Elon Musk", "Satya Nadella", "Susan Wojcicki", "Jensen Huang"],
  },
  {
    id: 5,
    eventName: "Food & Wine Festival",
    venue: "NEC Birmingham",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2025-03-10T11:00:00",
    description:
      "Indulge in a culinary journey featuring exquisite dishes and fine wines from around the globe.",
    artists: [
      "Gordon Ramsay",
      "Jamie Oliver",
      "Nigella Lawson",
      "Heston Blumenthal",
      "Mary Berry",
    ],
  },
  {
    id: 6,
    eventName: "Art Exhibition: Modern Masters",
    venue: "Tate Modern",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2025-04-05T10:00:00",
    description:
      "Explore thought-provoking artworks from contemporary artists pushing the boundaries of creativity.",
    artists: ["Banksy", "Yayoi Kusama", "Ai Weiwei", "Jeff Koons"],
  },
  {
    id: 7,
    eventName: "Fashion Week Spectacular",
    venue: "Somerset House",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2025-05-22T14:00:00",
    description:
      "Witness the latest trends and designs from top fashion houses in this glamorous runway event.",
    artists: ["Vivienne Westwood", "Alexander McQueen", "Stella McCartney"],
  },
  {
    id: 8,
    eventName: "Sports Championship Final",
    venue: "Wembley Stadium",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2025-06-30T15:30:00",
    description:
      "Cheer for your favorite team in this thrilling championship match that will keep you on the edge of your seat.",
    artists: ["Manchester United", "Liverpool FC", "Chelsea FC", "Arsenal FC"],
  },
  {
    id: 9,
    eventName: "Science and Nature Expo",
    venue: "National Museum Cardiff",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2025-07-18T10:30:00",
    description:
      "Discover the wonders of our planet and beyond through interactive exhibits and engaging presentations.",
    artists: [
      "Neil deGrasse Tyson",
      "Jane Goodall",
      "Brian Cox",
      "David Attenborough",
      "Michio Kaku",
    ],
  },
  {
    id: 10,
    eventName: "Summer Music Festival",
    venue: "Hyde Park",
    imageUrl:
      "https://d1plawd8huk6hh.cloudfront.net/assets/default400_1024.png?w=360&h =300&auto=format&fit=crop&crop=faces,entropy&dpr=1",
    startDate: "2025-08-08T12:00:00",
    description:
      "Enjoy a weekend of fantastic live music performances across multiple stages in a beautiful outdoor setting.",
    artists: ["Adele", "Ed Sheeran", "Coldplay", "Taylor Swift", "BeyoncÃ©"],
  },
];
