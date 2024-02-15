const data = [
  {
    id: 1,
    isSelected: false,
  },
  {
    id: 2,
    isSelected: true,
  },
  {
    id: 3,
    isSelected: false,
  },
  {
    id: 4,
    isSelected: true,
  },
  {
    id: 5,
    isSelected: true,
  },
];

const data1 = [
  {
    id: 1,
    name: "milan",
    children: [
      {
        id: 3,
        name: "sachin",
        children: [
          {
            id: 5,
            name: "dixit",
            children: [
              {
                id: 10,
                name: "hello",
              },
            ],
          },
          {
            id: 11,
            name: "rushil",
            children: [
              {
                id: 13,
                name: "yash",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "virat",
    children: [
      {
        id: 4,
        name: "yuvraj",
        children: [
          {
            id: 6,
            name: "ishan",
            children: [
              {
                id: 8,
                name: "hello",
              },
            ],
          },
          {
            id: 12,
            name: "rahul",
            children: [
              {
                id: 14,
                name: "kishan",
              },
            ],
          },
        ],
      },
    ],
  },
];

const answer = data.map((obj) => {
  return obj.isSelected;
});
console.log(answer);

const writeName = function (data, space) {
  data.forEach((element) => {

    console.log(space, element.name);

    if (typeof element.children === "object") {
      space++;
      writeName(element.children, space);
    }
  });
};

const names = writeName(data1, 0);
