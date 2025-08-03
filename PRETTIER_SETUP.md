# Prettier Auto-Format Setup

## 🎨 Đã Setup:

✅ **Prettier config** (`.prettierrc`) - Cài đặt format style  
✅ **Prettier ignore** (`.prettierignore`) - Loại trừ file không cần format  
✅ **Git Pre-commit Hook** - Tự động chạy prettier mỗi lần commit  
✅ **npm scripts** - Chạy prettier thủ công

## 🚀 Cách sử dụng:

### **Tự động (Khuyên dùng)**:

```bash
git add .
git commit -m "Your commit message"
# → Prettier sẽ tự động chạy trước khi commit! 🎨
```

### **Thủ công**:

```bash
# Format tất cả files
npm run format

# Kiểm tra format (không sửa)
npm run format:check
```

## 🧪 Test Hook:

1. **Tạo file test**:

   ```bash
   echo 'console.log("test"    );' > test-prettier.js
   ```

2. **Commit file**:

   ```bash
   git add test-prettier.js
   git commit -m "Test prettier"
   ```

3. **Kết quả mong đợi**:

   ```
   🎨 Running Prettier before commit...
   ✅ Prettier completed!
   ```

4. **Kiểm tra file**:
   ```javascript
   // Trước: console.log("test"    );
   // Sau:  console.log("test");
   ```

## ⚙️ Cấu hình Prettier:

File `.prettierrc`:

```json
{
  "semi": true, // Dấu ; cuối dòng
  "singleQuote": false, // Dùng dấu "
  "printWidth": 80, // Độ rộng dòng
  "tabWidth": 2, // 2 spaces
  "trailingComma": "es5" // Dấu , cuối object/array
}
```

## 🚫 Files bị bỏ qua:

`.prettierignore` loại trừ:

- `node_modules/`
- `dist/` và `build/`
- `package-lock.json`
- `test/results/`
- File `.min.js`, `.min.css`

## 🛠️ Scripts có sẵn:

| Script                 | Mô tả                       |
| ---------------------- | --------------------------- |
| `npm run format`       | Format tất cả files         |
| `npm run format:check` | Kiểm tra format (không sửa) |

## 🐛 Troubleshooting:

### Hook không chạy:

```bash
# Kiểm tra file tồn tại
ls -la .git/hooks/pre-commit

# Kiểm tra permission
chmod +x .git/hooks/pre-commit
```

### Prettier lỗi:

```bash
# Chạy thủ công để debug
npx prettier --write .
```

### Muốn bỏ qua hook:

```bash
# Commit không chạy prettier
git commit -m "message" --no-verify
```

## 🎯 Lưu ý:

- **Hook chỉ chạy khi commit** - không chạy khi pull/push
- **Format toàn bộ repo** - không chỉ staged files
- **Tự động add lại** - files đã format sẽ được add vào commit
- **Node >= 14** - cần Node version đủ mới

## 🔄 Nếu muốn upgrade:

Khi upgrade Node >= 18, có thể dùng **Husky + lint-staged**:

```bash
npm install --save-dev husky@latest lint-staged@latest
npx husky install
```

Nhưng setup hiện tại hoạt động tốt với Node cũ! 🎉
