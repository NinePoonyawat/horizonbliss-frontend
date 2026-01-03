"use client";

import { Modal, Button, Divider, Space } from "antd";

export default function ConfirmOrderModal({
  open,
  cart,
  roomNo,
  onCancel,
  onConfirm,
  loading = false,
}: {
  open: boolean;
  cart: any[];
  roomNo: string;
  onCancel: () => void;
  onConfirm: () => void;
  loading?: boolean;
}) {
  const total = cart.reduce((sum, item) => sum + item.food.price * item.qty, 0);

  return (
    <Modal
      open={open}
      title="ยืนยันการสั่งอาหาร"
      onCancel={onCancel}
      footer={null}
      centered
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <div>
          <b>ห้อง:</b> {roomNo}
        </div>

        <Divider />

        {cart.map((item) => (
          <div key={item.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <b>
                {item.food.name} x{item.qty}
              </b>
              <span>{item.food.price * item.qty} บาท</span>
            </div>

            <div style={{ fontSize: 13, opacity: 0.8 }}>
              {item.foodType && <div>รูปแบบ: {item.foodType}</div>}
              {item.soup && <div>น้ำ: {item.soup}</div>}
              {item.spicy && <div>เผ็ด: {item.spicy}</div>}
              {item.note && <div>หมายเหตุ: {item.note}</div>}
            </div>

            <Divider />
          </div>
        ))}

        <div style={{ textAlign: "right", fontSize: 16 }}>
          รวมทั้งหมด: <b style={{ color: "#ffa500" }}>{total} บาท</b>
        </div>

        <Divider />

        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Button onClick={onCancel}>สั่งอาหารต่อ</Button>

          <Button type="primary" loading={loading} onClick={onConfirm}>
            ยืนยันสั่งอาหาร
          </Button>
        </Space>
      </Space>
    </Modal>
  );
}
