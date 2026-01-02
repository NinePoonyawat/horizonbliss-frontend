"use client";

import { Modal, Button, InputNumber, Space, Divider } from "antd";

export default function CartModal({
  open,
  cart,
  onClose,
  onUpdateQty,
  onRemove,
}: {
  open: boolean;
  cart: any[];
  onClose: () => void;
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}) {
  const total = cart.reduce((sum, c) => sum + c.food.price * c.qty, 0);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title="รายการอาหารที่สั่ง"
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        {cart.map((item) => (
          <div key={item.food.id} className="cart-item">
            <div className="cart-item-header">
              <b>{item.food.name}</b>
              <span>{item.food.price * item.qty} บาท</span>
            </div>

            <div className="cart-item-options">
              {item.foodType && <div>รูปแบบ: {item.foodType}</div>}
              {item.soup && <div>น้ำ: {item.soup}</div>}
              {item.spicy && <div>เผ็ด: {item.spicy}</div>}
              {item.note && <div>หมายเหตุ: {item.note}</div>}
            </div>

            <Space>
              <InputNumber
                min={1}
                value={item.qty}
                onChange={(v) => onUpdateQty(item.food.id, v || 1)}
              />
              <Button danger onClick={() => onRemove(item.food.id)}>
                ลบ
              </Button>
            </Space>

            <Divider />
          </div>
        ))}

        <div style={{ textAlign: "right" }}>
          รวมทั้งหมด: <b style={{ color: "#ffa500" }}>{total} บาท</b>
        </div>
      </Space>
    </Modal>
  );
}
