# 🌍 Du Lịch MeToo - Website Du Lịch Việt Nam

> **Việt Nam đất nước của sự tươi đẹp** - Khám phá những điểm đến tuyệt vời nhất Việt Nam

Website du lịch hiện đại được xây dựng với React + TypeScript + Vite, giới thiệu các địa điểm du lịch nổi tiếng của Việt Nam với giao diện đẹp và trải nghiệm người dùng tối ưu.

## ✨ Tính năng chính

- 🎠 **Banner Slider**: Carousel tự động với 8 hình ảnh du lịch đẹp
- 🏠 **Header Navigation**: Menu điều hướng chuyên nghiệp 
- 🗺️ **Destinations Grid**: Hiển thị 6 địa điểm du lịch hot nhất
- 📱 **Responsive Design**: Tối ưu cho mọi thiết bị
- 🖼️ **Modal Gallery**: Xem chi tiết với hình ảnh và video
- ❤️ **Like System**: Tương tác người dùng
- 🔍 **Search Functionality**: Tìm kiếm tour và khách sạn
- 📧 **Newsletter Signup**: Đăng ký nhận thông tin khuyến mãi

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 với Flexbox & Grid
- **Architecture**: Component-based với Custom Hooks
- **Icons**: Unicode Emojis
- **Responsive**: Mobile-first approach

## 📋 Điều kiện cài đặt

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 8.0.0 hoặc **yarn** >= 1.22.0
- **Git** ([Download](https://git-scm.com/))

### Kiểm tra phiên bản:
```bash
node --version
npm --version
git --version
```

## 🚀 Cài đặt và chạy dự án

### 1. Clone repository
```bash
git clone https://github.com/your-username/poc-tusk-sdk.git
cd poc-tusk-sdk/travel-app
```

### 2. Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### 3. Chạy development server
```bash
npm run dev
# hoặc
yarn dev
```

Mở trình duyệt và truy cập: `http://localhost:5173`

### 4. Build cho production
```bash
npm run build
# hoặc
yarn build
```

### 5. Preview production build
```bash
npm run preview
# hoặc
yarn preview
```

### 6. Lint code
```bash
npm run lint
# hoặc
yarn lint
```

## 📁 Cấu trúc dự án

```
travel-app/
├── public/
│   ├── travel-logo.svg      # Logo favicon
│   └── vite.svg
├── src/
│   ├── components/          # React Components
│   │   ├── Header.tsx       # Header navigation
│   │   ├── BannerSlider.tsx # Image carousel
│   │   ├── DestinationGrid.tsx # Destinations display
│   │   ├── DestinationModal.tsx # Detail modal
│   │   ├── Footer.tsx       # Footer
│   │   └── index.ts         # Export index
│   ├── constants/          # Data constants
│   │   ├── destinations.ts  # Destinations data
│   │   ├── bannerImages.ts  # Banner images
│   │   └── index.ts
│   ├── hooks/              # Custom hooks
│   │   ├── useBannerSlider.ts # Banner logic
│   │   ├── useDestinationModal.ts # Modal logic
│   │   └── index.ts
│   ├── App.tsx             # Main app component
│   ├── App.css             # Main stylesheet
│   └── main.tsx            # Entry point
├── package.json
└── README.md
```

## 🎨 Customization

### Thêm điểm đến mới
Chỉnh sửa file `src/constants/destinations.ts`:

```typescript
{
  id: 7,
  name: "Điểm đến mới",
  shortDescription: "Mô tả ngắn...",
  description: "Mô tả chi tiết...",
  image: "URL_hình_ảnh",
  gallery: [
    {
      image: "URL_gallery_1",
      caption: "Chú thích hình 1"
    }
    // ...
  ],
  video: "YouTube_embed_URL"
}
```

### Thêm banner mới
Chỉnh sửa file `src/constants/bannerImages.ts`:

```typescript
{
  url: "URL_hình_banner",
  title: "Tiêu đề banner"
}
```

### Thay đổi màu sắc
Chỉnh sửa các biến CSS trong `src/App.css`:

```css
:root {
  --primary-color: #e74c3c;
  --secondary-color: #3498db;
  --accent-color: #f39c12;
}
```

## 🤝 Contribute

Chúng tôi rất hoan nghênh mọi đóng góp! Hãy làm theo các bước sau:

### 1. Fork dự án
```bash
# Click "Fork" trên GitHub repo
```

### 2. Clone fork của bạn
```bash
git clone https://github.com/YOUR_USERNAME/dulich-metoo.git
cd dulich-metoo/travel-app
```

### 3. Tạo branch mới
```bash
git checkout -b feature/ten-tinh-nang-moi
# hoặc
git checkout -b fix/sua-loi-gi-do
```

### 4. Implement changes
- Viết code sạch và có comment
- Tuân thủ coding standards hiện tại
- Test kỹ trước khi commit

### 5. Commit changes
```bash
git add .
git commit -m "feat: thêm tính năng ABC"
# hoặc
git commit -m "fix: sửa lỗi XYZ"
```

### 6. Push và tạo Pull Request
```bash
git push origin feature/ten-tinh-nang-moi
```

Sau đó tạo Pull Request trên GitHub với mô tả chi tiết.

### 💡 Contribution Guidelines

- **Code Style**: Sử dụng TypeScript và tuân thủ ESLint rules
- **Components**: Mỗi component nên có single responsibility
- **Hooks**: Tách logic phức tạp thành custom hooks
- **CSS**: Sử dụng class naming convention rõ ràng
- **Responsive**: Đảm bảo tương thích mobile
- **Performance**: Optimize images và lazy loading khi cần

### 🐛 Bug Reports

Khi báo cáo bug, hãy bao gồm:
- Mô tả chi tiết lỗi
- Các bước tái hiện
- Screenshots/videos (nếu có)
- Browser và OS version
- Console errors (nếu có)

### ✨ Feature Requests

Cho feature requests, hãy bao gồm:
- Mô tả tính năng chi tiết
- Use cases và benefits
- Mockups/wireframes (nếu có)
- Technical considerations

## 📞 Liên hệ

- **Website**: [MeToo Travel](https://metoo-travel.com)
- **Email**: info@metootravel.com
- **Hotline**: 0909009009
- **GitHub Issues**: [Create Issue](https://github.com/your-username/dulich-metoo/issues)

## 📄 License

Dự án này được phân phối dưới [MIT License](LICENSE).

---

**Phát triển bởi MeToo Travel Team** 🇻🇳

*Khám phá Việt Nam - Trải nghiệm tuyệt vời!* ✈️🏔️🏖️
