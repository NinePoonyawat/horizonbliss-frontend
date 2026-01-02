"use client";

import { Modal, Radio, InputNumber, Input, Space } from "antd";
import { useState, useEffect } from "react";
import type { FoodItem } from "../data/menu";

export default function OrderModal({
  open,
  food,
  onClose,
  onConfirm,
}: {
  open: boolean;
  food: FoodItem | null;
  onClose: () => void;
  onConfirm: (data: any) => void;
}) {
  const [qty, setQty] = useState(1);
  const [spicy, setSpicy] = useState<string | undefined>();
  const [soup, setSoup] = useState<string | undefined>();
  const [foodType, setFoodType] = useState<string | undefined>();
  const [note, setNote] = useState("");

  // 👉 helper หา default option
  const getDefault = (options?: string[]) => {
    if (!options?.length) return undefined;
    return (
      options.find((o) => o.includes("กลาง") || o.includes("ปกติ")) ??
      options[0]
    );
  };

  useEffect(() => {
    if (!open || !food) return;

    setQty(1);
    setNote("");

    setSpicy(getDefault(food.options?.spicy));
    setSoup(getDefault(food.options?.soupType));
    setFoodType(getDefault(food.options?.foodType));
  }, [open, food]);

  if (!food) return null;

  const selectedSpicy = spicy ?? getDefault(food.options?.spicy);
  const selectedSoup = soup ?? getDefault(food.options?.soupType);
  const selectedFoodType = foodType ?? getDefault(food.options?.foodType);

  return (
    <Modal
      open={open}
      title={food.name}
      onCancel={onClose}
      onOk={() =>
        onConfirm({
          food,
          qty,
          spicy: selectedSpicy,
          soup: selectedSoup,
          foodType: selectedFoodType,
          note,
        })
      }
      okText="เพิ่มในรายการ"
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <div>
          จำนวน:{" "}
          <InputNumber min={1} value={qty} onChange={(v) => setQty(v || 1)} />
        </div>

        {food.options?.foodType && (
          <div>
            <span>รูปแบบอาหาร :</span>
            <Radio.Group
              value={selectedFoodType}
              onChange={(e) => setFoodType(e.target.value)}
            >
              {food.options.foodType.map((s) => (
                <Radio key={s} value={s}>
                  {s}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        )}

        {food.options?.soupType && (
          <div>
            <span>ประเภทน้ำ :</span>
            <Radio.Group
              value={selectedSoup}
              onChange={(e) => setSoup(e.target.value)}
            >
              {food.options.soupType.map((s) => (
                <Radio key={s} value={s}>
                  {s}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        )}

        {food.options?.spicy && (
          <div>
            <span>ระดับความเผ็ด :</span>
            <Radio.Group
              value={selectedSpicy}
              onChange={(e) => setSpicy(e.target.value)}
            >
              {food.options.spicy.map((s) => (
                <Radio key={s} value={s}>
                  {s}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        )}

        <Input.TextArea
          placeholder="หมายเหตุ"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Space>
    </Modal>
  );
}
