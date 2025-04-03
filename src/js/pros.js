// Dynamically import all images from the /data folder
const imageFiles = import.meta.glob("../data/*.jpg", { eager: true });

export var pros = [
  {
    imgs: [
      imageFiles["../data/pros-1-1.jpg"].default,
      imageFiles["../data/pros-1-2.jpg"].default,
      imageFiles["../data/pros-1-3.jpg"].default,
      imageFiles["../data/pros-1-4.jpg"].default,
    ],
    name: "Amany Mohamed",
    age: 47,
    case: "missing LL67 & LR6",
    treatment: "Acrylic RPD",
    extraNotes:
      "Bone condition wasn't suitable for a vitalium RPD so an acrylic one was the ttt.",
  },
];
