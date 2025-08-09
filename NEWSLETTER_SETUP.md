# 📧 Newsletter Signup Feature

## Tính năng đăng ký nhận tin khuyến mãi

### 🎯 Mô tả

Khách hàng có thể đăng ký nhận tin khuyến mãi tour qua form ở footer. Khi có đăng ký mới, hệ thống sẽ gửi thông báo đến email `traveltest@yopmail.com`.

### 📍 Vị trí

- **Component**: `src/components/Footer.tsx`
- **Form**: Phần "DU LỊCH THÔNG MINH" ở footer
- **Selector**: `newsletter-signup`, `newsletter-form`

### ✨ Tính năng

1. **Form validation**: Kiểm tra email hợp lệ
2. **Loading state**: Hiển thị "Đang gửi..." khi đang xử lý
3. **Success/Error messages**: Thông báo kết quả cho người dùng
4. **Auto-clear**: Xóa thông báo sau 5 giây
5. **Email notification**: Gửi thông báo đến `traveltest@yopmail.com`

### 🔧 Cách hoạt động

#### 1. Khi người dùng đăng ký:

```
Input: user@example.com
↓
Validation: Kiểm tra format email
↓
API Call: POST /api/newsletter-signup
↓
Notification: Email gửi đến traveltest@yopmail.com
↓
Success message: "✅ Đăng ký thành công!"
```

#### 2. Nội dung email thông báo:

- **To**: traveltest@yopmail.com
- **Subject**: 🎒 Đăng ký newsletter mới từ {email}
- **Content**:
  - Email khách hàng
  - Thời gian đăng ký
  - Nguồn: Website footer
  - Hướng dẫn thêm vào list marketing

### 📱 Demo Mode

Hiện tại ứng dụng chạy ở demo mode:

- API endpoint sẽ fail nhưng vẫn hiển thị success
- Log chi tiết sẽ hiện trong console
- Message: "✅ Đăng ký thành công! (Demo mode)"

### 🚀 Triển khai thực tế

Để triển khai thực tế, cần:

1. **Backend API**: Tạo endpoint `/api/newsletter-signup`
2. **Email Service**: Tích hợp SendGrid, AWS SES, hoặc Nodemailer
3. **Database**: Lưu trữ danh sách subscribers
4. **Environment Variables**:
   ```
   NOTIFICATION_EMAIL=traveltest@yopmail.com
   EMAIL_SERVICE_API_KEY=your_api_key
   ```

### 🧪 Testing

Có thể test bằng các selectors:

- `newsletter-email-input`: Input email
- `newsletter-submit-btn`: Nút gửi
- `newsletter-message`: Thông báo kết quả
- `newsletter-form`: Form container

### 📊 Analytics

Console sẽ log:

```
📧 Newsletter signup: user@example.com -> notification sent to traveltest@yopmail.com
```

### 🔗 Related Files

- `src/components/Footer.tsx` - Main component
- `src/App.css` - Styling cho messages
- `public/api/newsletter-signup.js` - Mock API endpoint
- `NEWSLETTER_SETUP.md` - Tài liệu này

### 📞 Support

Mọi thắc mắc về tính năng này, liên hệ team development.
