// Dynamically import all images from the /data folder
const imageFiles = import.meta.glob("../data/*.jpg", { eager: true });

export var endo = [
  {
    imgs: [
      imageFiles["../data/endo-1-1.jpg"].default,
      imageFiles["../data/endo-1-2.jpg"].default,
      imageFiles["../data/endo-1-3.jpg"].default,
    ],
    name: "Moaaz Mohamed",
    age: 45,
    case: "Acute irreversible pulpitis in UR2",
    treatment: "Endo ttt",
  },
  {
    imgs: [
      imageFiles["../data/endo-2-1.jpg"].default,
      imageFiles["../data/endo-2-2.jpg"].default,
      imageFiles["../data/endo-2-3.jpg"].default,
      imageFiles["../data/endo-2-4.jpg"].default,
      imageFiles["../data/endo-2-5.jpg"].default,
      imageFiles["../data/endo-2-6.jpg"].default,
    ],
    name: "Moaaz Mohamed",
    age: 45,
    case: "Necrotic pulp of UL5",
    treatment: "Endo ttt",
  },
  {
    imgs: [
      imageFiles["../data/endo-3-1.jpg"].default,
      imageFiles["../data/endo-3-2.jpg"].default,
      imageFiles["../data/endo-3-3.jpg"].default,
      imageFiles["../data/endo-3-4.jpg"].default,
      imageFiles["../data/endo-3-5.jpg"].default,
      imageFiles["../data/endo-3-6.jpg"].default,
    ],
    name: "Tasnim Gamal",
    age: 18,
    case: "Acute irreversible pulpitis in UR4",
    treatment: "Endo ttt",
  },
];
