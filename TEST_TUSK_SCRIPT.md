# Test Tusk Script Locally

## 🧪 Cách test script trước khi push:

### **1. Test script trực tiếp:**

```bash
cd test
node tusk-test-runner.js test/e2e/smoke/homepage.cy.ts
```

**Kết quả mong đợi:**

```
Running Tusk test for file: test/e2e/smoke/homepage.cy.ts
Detected test tag: checklist_smoke
Running: npx cypress run --spec test/e2e/smoke/homepage.cy.ts --env grepTags=checklist_smoke
Test completed with exit code: 0
```

### **2. Test với integration file:**

```bash
cd test
node tusk-test-runner.js test/e2e/integration/userJourney.cy.ts
```

**Kết quả mong đợi:**

```
Running Tusk test for file: test/e2e/integration/userJourney.cy.ts
Detected test tag: checklist_integrated
Running: npx cypress run --spec test/e2e/integration/userJourney.cy.ts --env grepTags=checklist_integrated
Test completed with exit code: 0
```

## 🔧 **Yêu cầu để test:**

1. **App đang chạy** (port 5173 hoặc 3000):

   ```bash
   # Terminal 1: Start app
   npm run dev
   # hoặc
   docker compose up app -d
   ```

2. **Dependencies đã cài**:
   ```bash
   cd test && npm ci
   ```

## 🎯 **So sánh output:**

### **Nếu thành công:**

```
✓ Test completed with exit code: 0
✓ Screenshots: 0
✓ Passing tests: X
```

### **Nếu lỗi:**

```
✗ Test completed with exit code: 1
✗ Failing tests: X
✗ Screenshots: X (trong test/results/)
```

## 🐛 **Troubleshooting:**

### **Lỗi `cypress ENOENT`:**

**Fix**: ✅ Đã fix bằng cách dùng `npx cypress`

### **Lỗi `baseUrl connection refused`:**

**Fix**: Start app trước khi test

```bash
npm run dev        # hoặc
docker compose up app -d
```

### **Lỗi `grepTags not working`:**

**Fix**: Kiểm tra tag trong test file

```typescript
describe("My Tests", { tags: "checklist_smoke" }, () => {
  // tests
});
```

## 🚀 **Test với Docker (giống GitHub Actions):**

```bash
# Start app trong Docker
docker compose up app -d

# Test script (sẽ kết nối qua network)
cd test
CYPRESS_baseUrl=http://localhost:3000 node tusk-test-runner.js test/e2e/smoke/homepage.cy.ts
```

## ✅ **Khi nào script sẵn sàng cho Tusk:**

- ✅ Local test thành công
- ✅ Exit code = 0 cho passing tests
- ✅ Exit code = 1 cho failing tests
- ✅ Không có lỗi `spawn` hoặc `ENOENT`
- ✅ Test results lưu trong `test/results/`
