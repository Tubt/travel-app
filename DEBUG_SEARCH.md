# 🐛 Search Debug Guide

## Vấn đề: "da nang" ra Ninh Bình

### Cách debug:

1. **Mở browser console** (F12)
2. **Search "da nang"**
3. **Xem console output** sẽ hiển thị:

```
🔍 Searching for: "da nang" -> normalized: "da nang"
🎯 Canonical for "da nang": da nang

🔎 Checking: Hà Nội - Sapa - Hạ Long
   📍 Primary fields: [ha noi, ha noi, ha noi - sapa - ha long]
❌ Hà Nội - Sapa - Hạ Long: No match

🔎 Checking: Sapa - Fansipan - Bản Cát Cát
   📍 Primary fields: [sapa, lao cai, sapa - fansipan - ban cat cat]
❌ Sapa - Fansipan - Bản Cát Cát: No match

🔎 Checking: Đà Nẵng - Hội An - Bà Nà Hills
   📍 Primary fields: [da nang, da nang, da nang - hoi an - ba na hills]
✅ Đà Nẵng - Hội An - Bà Nà Hills: Alias match: "da nang" === "da nang"

🔎 Checking: Ninh Bình - Tràng An - Tam Cốc
   📍 Primary fields: [ninh binh, ninh binh, ninh binh - trang an - tam coc]
❌ Ninh Bình - Tràng An - Tam Cốc: No match
```

### Kết quả mong muốn:

- ✅ Chỉ Đà Nẵng match
- ❌ Ninh Bình KHÔNG match

### Nếu Ninh Bình vẫn match:

Check xem log có hiển thị gì, có thể:

1. **Exact match sai**:

   ```
   ✅ Ninh Bình: Exact match in primary field: "xxx"
   ```

2. **Alias match sai**:

   ```
   ✅ Ninh Bình: Alias match: "da nang" === "xxx"
   ```

3. **Word match sai**:
   ```
   ✅ Ninh Bình: Exact substring: "nang" in "xxx"
   ```

### Các thay đổi đã làm:

1. **Strict alias matching**: Chỉ exact canonical match
2. **Strict word matching**: Word >= 4 chars cho substring, 3-char cần exact match
3. **Tắt secondary fields**: Không search trong highlights/region nữa
4. **Chi tiết debug logs**: Thấy rõ tại sao match

### Test cases:

| Query       | Should Match | Should NOT Match  |
| ----------- | ------------ | ----------------- |
| "da nang"   | Đà Nẵng      | Ninh Bình, Hà Nội |
| "ninh binh" | Ninh Bình    | Đà Nẵng, Sapa     |
| "ha noi"    | Hà Nội       | Đà Nẵng, Cần Thơ  |

### Troubleshooting:

Nếu vẫn có vấn đề:

1. Kiểm tra console logs chi tiết
2. Verify không có alias conflict
3. Check similarity calculation
4. Xem word splitting logic
