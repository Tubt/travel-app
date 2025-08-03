# Test Thủ Công Ngay Lập Tức

## 🚀 Bước 1: Lấy Commit SHA hiện tại

```bash
git log --oneline -1
```

**Ví dụ output**:

```
a1b2c3d Add Tusk integration
```

→ **Commit SHA của bạn**: `a1b2c3d`

## 🧪 Bước 2: Chạy Manual Test

1. **Vào GitHub repo** → **Actions** tab
2. **Click "Tusk Test Runner"** workflow
3. **Click "Run workflow"** button
4. **Điền thông tin**:

```
runId: manual-test-001
tuskUrl: https://app.usetusk.ai
commitSha: a1b2c3d
```

_(Thay `a1b2c3d` bằng commit SHA thật của bạn)_

## ✅ Kết quả mong đợi:

1. **App Docker container** start ở port 3000
2. **Tusk runner** scan test files
3. **Cypress tests** chạy từng file:
   - `test/e2e/integration/userJourney.cy.ts`
   - `test/e2e/smoke/homepage.cy.ts`
4. **Results** hiển thị trong GitHub Actions logs

## 🎯 Quan trọng:

- **tuskUrl chỉ để log** - workflow vẫn chạy tests bình thường
- **Không cần Tusk account** để test workflow
- **Docker sẽ chạy** và tests sẽ thực thi
- **Kết quả trong Actions** tab của GitHub

## 🔍 Kiểm tra logs:

Trong GitHub Actions, bạn sẽ thấy:

```
Running Tusk test for file: test/e2e/integration/userJourney.cy.ts
Detected test tag: checklist_integrated
Running: cypress run --spec test/e2e/integration/userJourney.cy.ts --env grepTags=checklist_integrated
```

## 🐛 Nếu có lỗi:

**Lỗi TUSK_AUTH_TOKEN**:

```bash
Error: Secret TUSK_AUTH_TOKEN not found
```

**Fix**: Tạm thời comment dòng `authToken` trong workflow để test

**Lỗi Docker**:

```bash
Error: docker compose command not found
```

**Fix**: Workflow sẽ dùng GitHub's Docker
