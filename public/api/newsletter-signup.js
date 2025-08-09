// Mock API endpoint for newsletter signup
// This simulates sending notification email to traveltest@yopmail.com

export default function handler(req, res) {
  if (req.method === "POST") {
    const { userEmail, notificationEmail, timestamp, source } = req.body;

    // Simulate email notification logic
    console.log("📧 Newsletter Signup Notification");
    console.log("================================");
    console.log(`User Email: ${userEmail}`);
    console.log(`Notification Email: ${notificationEmail}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Source: ${source}`);
    console.log("================================");

    // Simulate email content that would be sent to traveltest@yopmail.com
    const emailContent = {
      to: notificationEmail,
      subject: `🎒 Đăng ký newsletter mới từ ${userEmail}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e74c3c;">📧 Thông báo đăng ký newsletter</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Chi tiết đăng ký:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>📧 Email khách hàng:</strong> ${userEmail}</li>
              <li><strong>⏰ Thời gian:</strong> ${new Date(timestamp).toLocaleString("vi-VN")}</li>
              <li><strong>📱 Nguồn:</strong> Website footer</li>
            </ul>
          </div>
          
          <div style="background-color: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745;">
            <h4 style="margin: 0; color: #155724;">✅ Hành động cần thực hiện:</h4>
            <p style="margin: 10px 0; color: #155724;">
              Khách hàng này đã đăng ký nhận thông tin tour khuyến mãi. 
              Vui lòng thêm email <strong>${userEmail}</strong> vào danh sách marketing.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
          
          <div style="text-align: center; color: #6c757d; font-size: 0.9rem;">
            <p>📞 Hotline: 1800 8989 | 📧 info@metootravel.com</p>
            <p>🏢 78 CMT8, P.Võ Thị Sáu, Q.3, TP.HCM</p>
            <p style="font-size: 0.8rem; margin-top: 20px;">
              © 2024 MeToo Travel - Email tự động từ hệ thống website
            </p>
          </div>
        </div>
      `,
    };

    // Simulate successful email sending
    setTimeout(() => {
      console.log(
        "✅ Email notification sent successfully to:",
        notificationEmail
      );
      console.log("📧 Email preview:", emailContent);
    }, 100);

    // Return success response
    res.status(200).json({
      success: true,
      message: "Newsletter signup processed successfully",
      data: {
        userEmail,
        notificationSent: true,
        notificationEmail,
        timestamp,
      },
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    });
  }
}
