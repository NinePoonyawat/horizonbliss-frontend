export type FoodOption = {
  spicy?: string[];
  soupType?: string[]; //น้ำข้น, น้ำใส
  foodType?: string[]; //จานเดี่ยว, กับข้าว
};

export type FoodItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  options?: FoodOption;
};

export type MenuCategory = {
  key: string;
  title: string;
  items: FoodItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    key: "hot-menu",
    title: "เมนูแนะนำ",
    items: [
      {
        id: "chicken-wing",
        name: "ปีกไก่ทอด",
        price: 120,
        image: "https://via.placeholder.com/300x200",
      },
    ],
  },
  {
    key: "made-to-order",
    title: "เมนูตามสั่ง",
    items: [
      {
        id: "kaprao-shrimp",
        name: "ข้าวกะเพรากุ้ง",
        price: 120,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "kaprao-squid",
        name: "ข้าวกะเพราหมึก",
        price: 120,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "kaprao-pork",
        name: "ข้าวกะเพราหมูสับ",
        price: 80,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "kaprao-sea",
        name: "ข้าวกะเพราทะเล",
        price: 120,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "fried-rice-shrimp",
        name: "ข้าวผัดกุ้ง",
        price: 120,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "pad-cha-sea",
        name: "ผัดฉ่าทะเล",
        price: 150,
        image: "https://via.placeholder.com/300x200",
        options: {
          spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"],
          foodType: ["จานเดียว", "กับข้าว"],
        },
      },
      {
        id: "tom-yum-sea",
        name: "ต้มยำทะเล",
        price: 150,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "tom-yum-shrimp",
        name: "ต้มยำกุ้ง",
        price: 150,
        image: "https://via.placeholder.com/300x200",
        options: {
          spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"],
          soupType: ["น้ำข้น", "น้ำใส"],
        },
      },
    ],
  },
  {
    key: "yum",
    title: "เมนูยำ",
    items: [
      {
        id: "yum-sea",
        name: "ยำทะเล",
        price: 180,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "yum-moo-yor",
        name: "ยำหมูยอ",
        price: 120,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "yum-shrimp",
        name: "ยำกุ้งสด",
        price: 150,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "yum-fried-egg",
        name: "ยำไข่ดาว",
        price: 100,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "yum-chinese-cannabis",
        name: "ยำกุนเชียง",
        price: 100,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
    ],
  },
  {
    key: "soutern-east",
    title: "เมนูอาหารอีสาน",
    items: [
      {
        id: "som-tam-thai",
        name: "ส้มตำไทย",
        price: 80,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "som-tam-crab",
        name: "ส้มตำปู-ปลาร้า",
        price: 80,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "pork-neck",
        name: "คอหมูย่าง",
        price: 180,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "lab-moo",
        name: "ลาบหมู",
        price: 120,
        image: "https://via.placeholder.com/300x200",
        options: { spicy: ["เผ็ดมาก", "เผ็ดกลาง", "เผ็ดน้อย"] },
      },
      {
        id: "fried-egg",
        name: "ไข่ดาว",
        price: 20,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "omelet",
        name: "ไข่เจียว",
        price: 50,
        image: "https://via.placeholder.com/300x200",
        options: { foodType: ["จานเดียว", "กับข้าว"] },
      },
      {
        id: "rice",
        name: "ข้าวสวย",
        price: 20,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "chicken-wing",
        name: "ปีกไก่ทอด",
        price: 120,
        image: "https://via.placeholder.com/300x200",
      },
    ],
  },
  {
    key: "hot-pot-set",
    title: "ชุดหมูกระทะ",
    items: [
      {
        id: "hot-pot-set",
        name: "ชุดหมูกระทะ",
        price: 499,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "moo-muk",
        name: "หมูหมัก",
        price: 100,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "shrimp",
        name: "กุ้งสด",
        price: 120,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "vegetable-set",
        name: "ผักรวม",
        price: 60,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "won-sen",
        name: "วุ้นเส้น",
        price: 20,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "egg",
        name: "ไข่ไก่",
        price: 15,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "three-floors-pork",
        name: "สามชั้นหมัก",
        price: 100,
        image: "https://via.placeholder.com/300x200",
      },
    ],
  },
  {
    key: "beverage",
    title: "เครื่องดื่ม",
    items: [
      {
        id: "beer-chang",
        name: "เบียร์ช้าง(กระป๋อง)",
        price: 70,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "beer-leo",
        name: "เบียร์ลีโอ(กระป๋อง)",
        price: 70,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "beer-sing",
        name: "เบียร์สิงห์(กระป๋อง)",
        price: 80,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "hoogarden-rose",
        name: "ฮูการ์เด้น โรเซ่(กระป๋อง)",
        price: 150,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "coke",
        name: "น้ำอัดลม",
        price: 20,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "water",
        name: "น้ำเปล่า",
        price: 10,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "soda",
        name: "โซดา",
        price: 15,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "ice",
        name: "น้ำแข็ง",
        price: 20,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "beer-leo-bottle",
        name: "เบียร์ลีโอ(ขวด)",
        price: 90,
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: "beer-sing-bottle",
        name: "เบียร์สิงค์(ขวด)",
        price: 100,
        image: "https://via.placeholder.com/300x200",
      },
    ],
  },
];
