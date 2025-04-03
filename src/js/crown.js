// Dynamically import all images from the /data folder
const imageFiles = import.meta.glob("../data/*.jpg", { eager: true });

export var cr = [
  {
    imgs: [
      imageFiles["../data/cr-1-1.jpg"].default,
      imageFiles["../data/cr-1-2.jpg"].default,
      imageFiles["../data/cr-1-3.jpg"].default,
      imageFiles["../data/cr-1-4.jpg"].default,
    ],
    name: "Amany Fathy",
    age: 42,
    case: "Endo treated upper right 5",
    treatment: "PCC",
    extraNotes:
      "Metal post was inserted and then a zirconia crown with the closest shade to the adjacent teeth",
  },
  {
    imgs: [
      imageFiles["../data/cr-2-1.jpg"].default,
      imageFiles["../data/cr-2-2.jpg"].default,
      imageFiles["../data/cr-2-3.jpg"].default,
      imageFiles["../data/cr-2-4.jpg"].default,
      imageFiles["../data/cr-2-5.jpg"].default,
      imageFiles["../data/cr-2-6.jpg"].default,
      imageFiles["../data/cr-2-7.jpg"].default,
      imageFiles["../data/cr-2-8.jpg"].default,
      imageFiles["../data/cr-2-9.jpg"].default,
    ],
    name: "Hamdy Ahmed",
    age: 40,
    case: "Missing lower left 6",
    treatment: "PFM bridge LL567",
    extraNotes:
      "Occlusal anatomy was almost destroyed due to high spots removal☹️",
  },
];
