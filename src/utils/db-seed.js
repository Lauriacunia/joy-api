import mongoose from "mongoose";
import { connectMongoDB } from "./../config/configMongoDB.js";

connectMongoDB();

import { CategoryService } from "../services/category.service.js";
const categoryService = new CategoryService();

const createCategories = async () => {
  try {
    const categoryData = [
      {
        name: "Gastronomy",
        keywords: ["food", "cuisine", "restaurants", "dining"],
        color: "#ff6347",
        cover_image: "https://example.com/gastronomy.jpg",
      },
      {
        name: "Nightlife",
        keywords: ["nightlife", "bars", "clubs", "entertainment"],
        color: "#8a2be2",
        cover_image: "https://example.com/nightlife.jpg",
      },
      {
        name: "Excursions",
        keywords: ["excursions", "day trips", "outings", "adventures"],
        color: "#008000",
        cover_image: "https://example.com/excursions.jpg",
      },
      {
        name: "Getaways",
        keywords: ["getaways", "short breaks", "weekend trips", "vacations"],
        color: "#4682b4",
        cover_image: "https://example.com/getaways.jpg",
      },
      {
        name: "Adventure",
        keywords: ["adventure", "exploration", "outdoor activities", "thrills"],
        color: "#ff4500",
        cover_image: "https://example.com/adventure.jpg",
      },
      {
        name: "Entertainment",
        keywords: ["entertainment", "shows", "performances", "events"],
        color: "#da70d6",
        cover_image: "https://example.com/entertainment.jpg",
      },
      {
        name: "Courses",
        keywords: ["courses", "classes", "workshops", "learning"],
        color: "#228b22",
        cover_image: "https://example.com/courses.jpg",
      },
      {
        name: "Relaxation",
        keywords: ["relaxation", "spa", "wellness", "peace"],
        color: "#ff8c00",
        cover_image: "https://example.com/relaxation.jpg",
      },
      {
        name: "Wellness",
        keywords: ["wellness", "health", "mindfulness", "self-care"],
        color: "#40e0d0",
        cover_image: "https://example.com/wellness.jpg",
      },
      {
        name: "Romance",
        keywords: ["romance", "couples", "love", "date nights"],
        color: "#ff69b4",
        cover_image: "https://example.com/romance.jpg",
      },
      {
        name: "Nature",
        keywords: ["nature", "outdoors", "parks", "scenery"],
        color: "#32cd32",
        cover_image: "https://example.com/nature.jpg",
      },
      {
        name: "Extreme",
        keywords: ["extreme", "thrills", "high-adrenaline", "intense"],
        color: "#ff0000",
        cover_image: "https://example.com/extreme.jpg",
      },
      {
        name: "Original",
        keywords: ["original", "unique", "innovative", "creative"],
        color: "#8b4513",
        cover_image: "https://example.com/original.jpg",
      },
      {
        name: "Theater",
        keywords: ["theater", "performing arts", "plays", "stage"],
        color: "#800080",
        cover_image: "https://example.com/theater.jpg",
      },
    ];

    await categoryService.create(categoryData);
    console.log("Creadas 14 categorías con información realista.");
  } catch (error) {
    console.error("Error al crear categorías:", error);
  } finally {
    mongoose.disconnect();
  }
};

createCategories();
