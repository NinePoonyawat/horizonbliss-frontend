"use client";

import { useEffect } from "react";
import { Layout, Card, Affix, Menu, Row, Col, Button, Space } from "antd";
import { useState, useRef } from "react";
import { menuCategories, FoodItem } from "../../data/menu";
import { useRouter } from "next/navigation";
import { submitOrder } from "../../api/kitchen";
import OrderModal from "../../components/OrderModal";
import CartModal from "@/src/components/CartModal";
import KitchenPageHeader from "@/src/components/KitchenPageHeader";
import ConfirmOrderModal from "@/src/components/ConfirmOrderModal";
import "../kitchen.scss";

const { Sider, Content, Footer } = Layout;

export default function KitchenPage() {
  const router = useRouter();
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [roomNo, setRoomNo] = useState<string>("");

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const totalPrice = cart.reduce((sum, c) => sum + c.food.price * c.qty, 0);

  async function handleSubmitOrder() {
    const payload = {
      roomNo,
      orderedAt: new Date().toISOString(),
      items: cart.map((c) => ({
        name: c.food.name,
        qty: c.qty,
        options: {
          spicy: c.spicy,
          soup: c.soup,
          foodType: c.foodType,
          note: c.note,
        },
        price: c.food.price,
      })),
      total: totalPrice,
    };

    await submitOrder(payload);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiresAt = Number(localStorage.getItem("expiresAt"));

    if (!token || Date.now() > expiresAt) {
      localStorage.clear();
      router.replace("/");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-category");
            if (key) setActiveCategory(key);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // กลางจอ
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiresAt = Number(localStorage.getItem("expiresAt"));
    const storedRoom = localStorage.getItem("roomNo");

    if (!token || Date.now() > expiresAt || !storedRoom) {
      localStorage.clear();
      router.replace("/");
      return;
    }

    setRoomNo(storedRoom);
  }, [router]);

  return (
    <Layout className="kitchen-page">
      {/* ===== Sidebar ===== */}
      <Sider width={200} className="kitchen-sidebar">
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={activeCategory ? [activeCategory] : []}
          items={menuCategories.map((c) => ({
            key: c.key,
            label: <span className="category-label">{c.title}</span>,
            onClick: () =>
              sectionRefs.current[c.key]?.scrollIntoView({
                behavior: "smooth",
              }),
          }))}
        />
      </Sider>

      <Layout>
        {/* ===== Content ===== */}
        <KitchenPageHeader />
        <Content className="kitchen-content">
          {menuCategories.map((category) => (
            <div
              key={category.key}
              ref={(el) => {
                sectionRefs.current[category.key] = el;
              }}
              data-category={category.key}
              className="menu-section"
            >
              <div className="menu-section-title">{category.title}</div>

              <Row gutter={[16, 16]}>
                {category.items.map((item) => (
                  <Col span={12} key={item.id}>
                    <Card
                      hoverable
                      className="food-card"
                      cover={
                        <img
                          src={item.image}
                          alt={item.name}
                          className="food-image"
                        />
                      }
                    >
                      <div className="food-body">
                        <div className="food-name">{item.name}</div>
                        <div className="food-price">ราคา {item.price} บาท</div>

                        <div className="food-action">
                          <Button
                            type="primary"
                            block
                            onClick={() => setSelectedFood(item)}
                          >
                            สั่งอาหาร
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Content>

        {/* ===== Footer ===== */}
        <Affix offsetBottom={0}>
          <Footer className="order-footer">
            <div className="footer-left">
              <div className="total-label">รวมทั้งหมด</div>
              <div className="total-price">{totalPrice} บาท</div>
            </div>

            <div className="footer-right">
              <Space size="middle">
                <Button onClick={() => setCartOpen(true)}>ดูรายละเอียด</Button>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    if (cart.length === 0) {
                      alert("คุณยังไม่ได้เลือกเมนูอาหาร");
                      return;
                    }
                    setConfirmOpen(true);
                  }}
                >
                  สั่งอาหาร
                </Button>
              </Space>
            </div>
          </Footer>
        </Affix>
      </Layout>

      {/* ===== Order Modal ===== */}
      <OrderModal
        open={!!selectedFood}
        food={selectedFood}
        onClose={() => setSelectedFood(null)}
        onConfirm={(data) => {
          setCart([...cart, data]);
          setSelectedFood(null);
        }}
      />
      <CartModal
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onUpdateQty={(id, qty) => {
          setCart((prev) =>
            prev.map((c) => (c.food.id === id ? { ...c, qty } : c))
          );
        }}
        onRemove={(id) => {
          setCart((prev) => prev.filter((c) => c.food.id !== id));
        }}
      />
      <ConfirmOrderModal
        open={confirmOpen}
        cart={cart}
        roomNo={roomNo}
        loading={submitting}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          try {
            setSubmitting(true);
            handleSubmitOrder();
            router.replace("/thank-you");
          } finally {
            setSubmitting(false);
          }
        }}
      />
    </Layout>
  );
}
