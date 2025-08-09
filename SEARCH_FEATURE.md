# 🔍 Tính năng tìm kiếm tour

## Mô tả chức năng

Hệ thống tìm kiếm tour thông minh cho phép người dùng tìm kiếm tour theo thành phố, tỉnh và các bộ lọc nâng cao.

## ✨ Tính năng chính

### 1. **Tìm kiếm theo địa danh**

- **Input**: Tên thành phố, tỉnh, khu vực
- **Ví dụ**: "Đà Nẵng", "Sapa", "Phú Quốc", "Hạ Long"
- **Kết quả**: Hiển thị tất cả tour liên quan đến địa điểm đó

### 2. **Tìm kiếm nâng cao**

- **Loại tour**: Tour trong nước, nước ngoài, tour 1 ngày
- **Điểm khởi hành**: Hà Nội, TP.HCM, Đà Nẵng, Nha Trang, Phú Quốc
- **Điểm đến**: Miền Bắc, Miền Trung, Miền Nam
- **Kết hợp bộ lọc**: Có thể combine nhiều điều kiện

### 3. **Hiển thị kết quả**

- **Modal overlay**: Hiển thị full-screen với background blur
- **Card layout**: Mỗi tour hiển thị dưới dạng card đẹp mắt
- **Thông tin chi tiết**: Hình ảnh, tên tour, địa điểm, thời gian, giá, rating
- **Highlights**: Các điểm nổi bật của tour
- **CTA**: Nút "Đặt tour" cho mỗi kết quả

## 📊 Dữ liệu tour

### Tours có sẵn (12 tours):

#### Miền Bắc:

1. **Hà Nội - Sapa - Hạ Long** (3N2Đ) - 2.999.000đ
2. **Sapa - Fansipan** (2N1Đ) - 1.899.000đ
3. **Hạ Long - Bái Tử Long** (2N1Đ) - 2.199.000đ
4. **Ninh Bình - Tràng An** (1 ngày) - 599.000đ

#### Miền Trung:

5. **Đà Nẵng - Hội An - Bà Nà Hills** (3N2Đ) - 2.799.000đ
6. **Hội An - Mỹ Sơn** (2N1Đ) - 1.999.000đ
7. **Huế - Phong Nha** (3N2Đ) - 2.599.000đ
8. **Nha Trang - Vinpearl** (3N2Đ) - 3.199.000đ

#### Miền Nam:

9. **TP.HCM - Đà Lạt** (2N1Đ) - 1.799.000đ
10. **Cần Thơ - Chợ nổi** (2N1Đ) - 1.399.000đ
11. **Phú Quốc - Nam Du** (3N2Đ) - 3.599.000đ
12. **Vũng Tàu - Côn Đảo** (2N1Đ) - 2.299.000đ

## 🎯 Cách sử dụng

### Tìm kiếm cơ bản:

1. Nhập tên thành phố vào ô "Nhập thành phố / khu vực"
2. Click nút 🔍 hoặc nhấn Enter
3. Xem kết quả hiển thị trong modal

### Tìm kiếm nâng cao:

1. Chọn "Loại tour" (trong nước/ngoài/1 ngày)
2. Chọn "Khởi hành" (thành phố xuất phát)
3. Chọn "Điểm đến" (miền Bắc/Trung/Nam)
4. Click "TÌM TOUR"

### Các ví dụ search:

- **"Đà Nẵng"** → Hiển thị tour Đà Nẵng - Hội An - Bà Nà Hills
- **"Sapa"** → Hiển thị 2 tours có liên quan đến Sapa
- **"Phú Quốc"** → Hiển thị tour Phú Quốc - Nam Du
- **Loại: "Tour 1 ngày"** → Hiển thị tour Ninh Bình
- **Khởi hành: "TP. Hồ Chí Minh"** → Hiển thị tất cả tour khởi hành từ HCM

## 🔧 Technical Details

### Files liên quan:

- `src/constants/tourData.ts` - Dữ liệu tour và search functions
- `src/components/SearchSection.tsx` - Form tìm kiếm
- `src/components/SearchResults.tsx` - Hiển thị kết quả
- `src/App.css` - Styling cho search results

### Search Functions:

```typescript
searchToursByLocation(query: string): Tour[]  // Tìm theo địa danh
filterToursByType(tours: Tour[], type: string): Tour[]  // Lọc theo loại
filterToursByDeparture(tours: Tour[], departure: string): Tour[]  // Lọc theo khởi hành
filterToursByDestination(tours: Tour[], destination: string): Tour[]  // Lọc theo điểm đến
```

### Data Structure:

```typescript
interface Tour {
  id: number;
  name: string;
  location: string; // Thành phố
  province: string; // Tỉnh
  region: string; // Miền
  duration: string; // Thời gian
  price: string; // Giá
  rating: number; // Đánh giá
  image: string; // Hình ảnh
  highlights: string[]; // Điểm nổi bật
  description: string; // Mô tả
  type: string; // Loại tour
  departure: string[]; // Điểm khởi hành
}
```

## 🎨 UI/UX Features

### Search Form:

- **Loading states**: Hiển thị ⏳ khi đang search
- **Form validation**: Kiểm tra input trước khi search
- **Disabled states**: Disable form khi đang process
- **Enhanced placeholder**: Gợi ý ví dụ cho user

### Search Results:

- **Modal overlay**: Full-screen với background blur
- **Responsive grid**: Tự động adjust số cột theo screen size
- **Hover effects**: Card hover với animation mượt
- **Image optimization**: Lazy loading và scale effect
- **Price highlighting**: Giá tour nổi bật màu đỏ
- **CTA buttons**: Nút đặt tour với hover animation

### No Results:

- **Empty state**: Hiển thị friendly message khi không có kết quả
- **Suggestions**: Gợi ý liên hệ hotline nếu không tìm thấy

## 📱 Responsive Design

- **Desktop**: Grid 3-4 cột
- **Tablet**: Grid 2 cột
- **Mobile**: Grid 1 cột
- **Modal**: Tự động adjust height và padding

## 🔍 Search Logic

### Location Search:

```typescript
// Tìm kiếm flexible - match location, province, name, hoặc region
tour.location.toLowerCase().includes(query) ||
  tour.province.toLowerCase().includes(query) ||
  tour.name.toLowerCase().includes(query) ||
  tour.region.toLowerCase().includes(query);
```

### Advanced Search:

- Bắt đầu với toàn bộ tours
- Apply từng filter theo thứ tự
- Combine tất cả điều kiện với AND logic

## 📈 Analytics & Logging

- Log mỗi search query vào console
- Track số lượng kết quả tìm thấy
- Monitor search performance

## 🚀 Future Enhancements

- **Search suggestions**: Auto-complete khi gõ
- **Recent searches**: Lưu lại tìm kiếm gần đây
- **Filters**: Thêm filter theo giá, thời gian, rating
- **Sort options**: Sắp xếp theo giá, rating, thời gian
- **Pagination**: Phân trang khi có nhiều kết quả
- **Search analytics**: Track popular searches
