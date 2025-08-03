export interface Destination {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: Array<{
    image: string;
    caption: string;
  }>;
  video: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Da Nang',
    shortDescription:
      'Đà Nẵng là thành phố du lịch hàng đầu miền Trung Việt Nam, nổi tiếng với những bãi biển tuyệt đẹp và kiến trúc hiện đại. Thành phố này sở hữu bãi biển Mỹ Khê được CNN bình chọn là một trong những bãi biển quyến rũ nhất hành tinh với cát trắng mịn và nước biển trong xanh.',
    description:
      'Đà Nẵng là thành phố du lịch hàng đầu miền Trung Việt Nam, nổi tiếng với những bãi biển tuyệt đẹp và kiến trúc hiện đại. Thành phố này sở hữu bãi biển Mỹ Khê được CNN bình chọn là một trong những bãi biển quyến rũ nhất hành tinh với cát trắng mịn và nước biển trong xanh. Đà Nẵng còn là cửa ngõ đến với nhiều di sản văn hóa thế giới như phố cổ Hội An, thánh địa Mỹ Sơn và Cố đô Huế. Cầu Rồng biểu tượng của thành phố với thiết kế độc đáo, phun lửa và nước vào cuối tuần, tạo nên một cảnh tượng kỳ thú. Bán đảo Sơn Trà với ngôi chùa Linh Ứng và tượng Phật Quan Âm cao 67m nhìn ra biển tạo nên không gian tâm linh thanh tịnh. Ẩm thực Đà Nẵng đa dạng với các món đặc sản như mì Quảng, bánh xèo, nem lụi nướng và hải sản tươi sống. Thành phố này cũng là điểm khởi đầu lý tưởng để khám phá miền Trung với hệ thống giao thông thuận tiện và dịch vụ du lịch chất lượng cao.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5e/e7/e0/caption.jpg?w=500&h=400&s=1',
    gallery: [
      {
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5e/e7/e0/caption.jpg?w=500&h=400&s=1',
        caption: 'Bãi biển Mỹ Khê - một trong những bãi biển đẹp nhất thế giới',
      },
      {
        image:
          'https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20%C4%91%C3%A0%20n%E1%BA%B5ng/anh-dep-da-nang-1.jpg',
        caption: 'Cầu Rồng biểu tượng của Đà Nẵng phun lửa vào cuối tuần',
      },
      {
        image:
          'https://daivietourist.vn/wp-content/uploads/2024/09/chua-linh-ung-son-tra-1.jpg.webp',
        caption: 'Chùa Linh Ứng trên bán đảo Sơn Trà với tượng Phật Quan Âm',
      },
      {
        image:
          'https://duonggiahotel.vn/wp-content/uploads/2023/09/quan-my-quang-da-nang.jpg',
        caption: 'Mì Quảng - đặc sản nổi tiếng của Đà Nẵng',
      },
    ],
    video: 'https://www.youtube.com/embed/TxHE0Kmmcgk',
  },
  {
    id: 2,
    name: 'Ha Noi',
    shortDescription:
      'Hà Nội - thủ đô ngàn năm văn hiến của Việt Nam, là nơi hội tụ giữa truyền thống và hiện đại. Phố cổ Hà Nội với 36 phố phường mang đậm dấu ấn lịch sử, nơi mỗi con phố đều có câu chuyện riêng về nghề thủ công truyền thống.',
    description:
      'Hà Nội - thủ đô ngàn năm văn hiến của Việt Nam, là nơi hội tụ giữa truyền thống và hiện đại. Phố cổ Hà Nội với 36 phố phường mang đậm dấu ấn lịch sử, nơi mỗi con phố đều có câu chuyện riêng về nghề thủ công truyền thống. Hồ Hoàn Kiếm với đền Ngọc Sơn là trái tim của thành phố, nơi người dân tập thể dục buổi sáng và du khách thưởng thức không khí yên bình. Văn Miếu - Quốc Tử Giám, trường đại học đầu tiên của Việt Nam, lưu giữ nét kiến trúc cổ kính và truyền thống hiếu học của dân tộc. Lăng Chủ tịch Hồ Chí Minh và Bảo tàng Hồ Chí Minh là những điểm đến thiêng liêng. Ẩm thực Hà Nội nổi tiếng khắp thế giới với phở, bún chả, bánh mì, cà phê vỉa hè và không khí ấm cúng của các quán ăn gia đình. Chùa Một Cột, Hoả Lò, Cầu Long Biên là những biểu tượng lịch sử đáng tự hào. Hà Nội còn là trung tâm chính trị, kinh tế, văn hóa với nhiều trường đại học danh tiếng và cuộc sống văn hóa phong phú.',
    image:
      'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-ha-noi.jpg',
    gallery: [
      {
        image:
          'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-ha-noi.jpg',
        caption: 'Hồ Hoàn Kiếm - trái tim của thủ đô Hà Nội',
      },
      {
        image:
          'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-ha-noi-10.jpg',
        caption: 'Phố cổ Hà Nội với 36 phố phường lịch sử',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxosnvaxyWR5_oI42J0RoUaQULsa8MYzUrNw&s',
        caption: 'Văn Miếu - Quốc Tử Giám, trường đại học đầu tiên Việt Nam',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_XQ-pIBK3d03bMO8QeVT_WTReyxvJG31Sw&s',
        caption: 'Phở Hà Nội - món ăn nổi tiếng khắp thế giới',
      },
    ],
    video: 'https://www.youtube.com/embed/FClS4ni4zfo?list=RDFClS4ni4zfo',
  },
  {
    id: 3,
    name: 'Phu Quoc',
    shortDescription:
      'Phú Quốc - đảo ngọc của Việt Nam nằm ở vịnh Thái Lan, là thiên đường nghỉ dưỡng với những bãi biển hoang sơ tuyệt đẹp và làn nước trong vắt. Bãi Sao với cát trắng mịn như bột, bãi Dài với đường bờ biển dài 20km là những điểm đến lý tưởng.',
    description:
      'Phú Quốc - đảo ngọc của Việt Nam nằm ở vịnh Thái Lan, là thiên đường nghỉ dưỡng với những bãi biển hoang sơ tuyệt đẹp và làn nước trong vắt. Bãi Sao với cát trắng mịn như bột, bãi Dài với đường bờ biển dài 20km là những điểm đến lý tưởng để thư giãn và tắm biển. Cáp treo Hòn Thơm dài nhất thế giới mang đến trải nghiệm ngắm cảnh từ trên cao tuyệt vời. Vườn quốc gia Phú Quốc với hệ sinh thái nhiệt đới đa dạng, là nơi lý tưởng cho những ai yêu thích khám phá thiên nhiên. Chợ đêm Dinh Cầu với hải sản tươi sống và đặc sản địa phương như nước mắm Phú Quốc, tiêu đen, sim rượu tạo nên hương vị đặc trưng của đảo. Sunset Sanato Beach Club, Grand World và các khu nghỉ dưỡng cao cấp mang đến những trải nghiệm giải trí đẳng cấp quốc tế. Làng chài Hàm Ninh với cuộc sống bình dị của người dân địa phương, cùng với các hoạt động như câu cá, lặn ngắm san hô, khám phá các đảo nhỏ xung quanh tạo nên một Phú Quốc đa sắc màu và hấp dẫn.',
    image:
      'https://i2.ex-cdn.com/crystalbay.com/files/content/2024/11/25/phu-quoc-1-1034.jpeg',
    gallery: [
      {
        image:
          'https://i2.ex-cdn.com/crystalbay.com/files/content/2024/11/25/phu-quoc-1-1034.jpeg',
        caption: 'Bãi Sao Phú Quốc với cát trắng mịn như bột',
      },
      {
        image:
          'https://eholiday.vn/wp-content/uploads/2023/08/Sunworld-Hon-Thom-Nature-Park.jpg',
        caption: 'Cáp treo Hòn Thơm - dài nhất thế giới vượt biển',
      },
      {
        image:
          'https://phuquocxanh.com/vi/wp-content/uploads/2015/05/cho-dem-phu-quoc-1.jpg',
        caption: 'Chợ đêm Dinh Cầu với hải sản tươi sống',
      },
      {
        image:
          'https://luckyhousephuquoc.com/wp-content/uploads/2024/05/Nuoc-mam-phu-quoc-dac-san-lam-qua-noi-tieng.jpg',
        caption: 'Nước mắm Phú Quốc - đặc sản nổi tiếng của đảo ngọc',
      },
    ],
    video: 'https://www.youtube.com/embed/wG1SKI4Nr6Q?list=RDwG1SKI4Nr6Q',
  },
  {
    id: 4,
    name: 'Ho Chi Minh City',
    shortDescription:
      'Thành phố Hồ Chí Minh - trung tâm kinh tế lớn nhất Việt Nam, là thành phố sôi động không ngủ với nhịp sống hiện đại và năng lượng bất tận. Phố đi bộ Nguyễn Huệ với quảng trường ánh sáng và tòa nhà Bitexco cao 68 tầng tạo nên skyline hiện đại.',
    description:
      'Thành phố Hồ Chí Minh - trung tâm kinh tế lớn nhất Việt Nam, là thành phố sôi động không ngủ với nhịp sống hiện đại và năng lượng bất tận. Phố đi bộ Nguyễn Huệ với quảng trường ánh sáng và tòa nhà Bitexco cao 68 tầng tạo nên skyline hiện đại. Chợ Bến Thành, phố Tây Bùi Viện, và khu phố cổ với những tòa nhà thuộc địa Pháp mang đến sự pha trộn độc đáo giữa cũ và mới. Cung điện Thống Nhất, Nhà thờ Đức Bà Sài Gòn, Bưu điện Trung tâm Sài Gòn là những di tích lịch sử quan trọng. Địa đạo Củ Chi gần thành phố là minh chứng cho tinh thần bất khuất của dân tộc. Ẩm thực Sài Gòn đa dạng từ món ăn đường phố như bánh mì, hủ tiếu, cơm tấm đến các nhà hàng cao cấp phục vụ ẩm thực quốc tế. Cuộc sống về đêm sôi động với các bar, club, rạp chiếu phim, trung tâm thương mại. Thành phố còn là trung tâm giáo dục, y tế và công nghệ hàng đầu của cả nước, thu hút đông đảo du khách trong nước và quốc tế.',
    image:
      'https://cdn3.ivivu.com/2018/01/ve-dep-sai-gon-qua-ong-kinh-cua-nguoi-me-anh-ivivu-2.jpg',
    gallery: [
      {
        image:
          'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/5-6.jpg',
        caption: 'Phố đi bộ Nguyễn Huệ về đêm rực rỡ ánh đèn',
      },
      {
        image:
          'https://htv.mediacdn.vn/Images/NEWZ2024/JAN/02/kh%C3%A1nh%20h%C3%A0/cho.webp',
        caption: 'Chợ Bến Thành - biểu tượng của Sài Gòn',
      },
      {
        image:
          'https://cdn.xanhsm.com/2024/11/f5d8fc3e-nha-tho-duc-ba-thumbnail-min-1-1024x576.jpg',
        caption: 'Nhà thờ Đức Bà Sài Gòn - kiến trúc Gothic cổ kính',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMU4UgjUZrVYMBvLipaUsirOTG27oobxB6Q&s',
        caption: 'Bánh mì Sài Gòn - món ăn đường phố nổi tiếng',
      },
    ],
    video: 'https://www.youtube.com/embed/J73RQ0-fzGY',
  },
  {
    id: 5,
    name: 'Nha Trang',
    shortDescription:
      'Nha Trang là thành phố biển nổi tiếng nhất Việt Nam, sở hữu vịnh đẹp trong top những vịnh đẹp nhất thế giới với bãi biển dài 6km, cát trắng và nước biển trong xanh quanh năm. Tháp Ponagar - di tích Chăm cổ kính trên đồi, nhìn ra biển tạo nên khung cảnh thơ mộng.',
    description:
      'Nha Trang là thành phố biển nổi tiếng nhất Việt Nam, sở hữu vịnh đẹp trong top những vịnh đẹp nhất thế giới với bãi biển dài 6km, cát trắng và nước biển trong xanh quanh năm. Tháp Ponagar - di tích Chăm cổ kính trên đồi, nhìn ra biển tạo nên khung cảnh thơ mộng và linh thiêng. Vinpearl Land trên đảo Hòn Tre với cáp treo vượt biển dài nhất thế giới mang đến trải nghiệm giải trí tuyệt vời cho cả gia đình. Viện Hải dương học với bể cá lớn nhất Việt Nam, nơi có thể khám phá thế giới đại dương phong phú. Suối nước nóng I-Resort, Ba Hồ với những hồ nước tự nhiên trong vắt giữa rừng núi là điểm đến lý tưởng để thư giãn. Ẩm thực Nha Trang nổi bật với hải sản tươi sống, nem nướng Ninh Hòa, bánh căn, bún chả cá. Đặc biệt, yến sào Nha Trang được coi là đặc sản quý giá. Các hoạt động thể thao biển như lặn ngắm san hô, dù lượn, jet ski thu hút nhiều du khách ưa mạo hiểm. Khí hậu ôn hòa quanh năm làm Nha Trang trở thành điểm đến lý tưởng cho du lịch nghỉ dưỡng.',
    image: 'https://xaviahotel.com/vnt_upload/news/11_2017/nha-trang_1.jpg',
    gallery: [
      {
        image: 'https://xaviahotel.com/vnt_upload/news/11_2017/nha-trang_1.jpg',
        caption: 'Bãi biển Nha Trang dài 6km với cát trắng mịn',
      },
      {
        image:
          'https://storage.googleapis.com/blogvxr-uploads/2025/03/c663ef0c-thap-ba-ponagar-nha-trang-5849686-750x500.png',
        caption: 'Tháp Po Nagar - di tích Chăm cổ kính trên đồi',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiFkotuIvkxM-eUrvNcy73_sriCrs_05wTg&s',
        caption: 'Vinpearl Land Nha Trang - thiên đường giải trí trên đảo',
      },
      {
        image:
          'https://statics.vntrip.vn/data-v2/data-guide/img_content/1461840699_3-dac-san-nha-trang-5.jpg',
        caption: 'Nem nướng Ninh Hòa - đặc sản nổi tiếng Nha Trang',
      },
    ],
    video: 'https://www.youtube.com/embed/cUihlImNgHM?list=RDcUihlImNgHM',
  },
  {
    id: 6,
    name: 'Quang Nam',
    shortDescription:
      'Quảng Nam là tỉnh giàu di sản văn hóa thế giới với phố cổ Hội An và thánh địa Mỹ Sơn, nơi lưu giữ tinh hoa văn hóa dân tộc và văn minh Chăm cổ. Phố cổ Hội An với những ngôi nhà cổ kính, đèn lồng rực rỡ, các cửa hàng thủ công mỹ nghệ tạo nên bức tranh cổ tích đầy màu sắc.',
    description:
      'Quảng Nam là tỉnh giàu di sản văn hóa thế giới với phố cổ Hội An và thánh địa Mỹ Sơn, nơi lưu giữ tinh hoa văn hóa dân tộc và văn minh Chăm cổ. Phố cổ Hội An với những ngôi nhà cổ kính, đèn lồng rực rỡ, các cửa hàng thủ công mỹ nghệ tạo nên bức tranh cổ tích đầy màu sắc. Chùa Cầu Nhật Bản, Hội quán Phúc Kiến, nhà cổ Tấn Ký là những di tích kiến trúc độc đáo. Thánh địa Mỹ Sơn với 70 công trình tháp Chăm từ thế kỷ 4-14 là minh chứng cho nền văn minh Chăm Pa huy hoàng. Rừng dừa Bảy Mẫu với những chuyến thúng chai độc đáo trên sông nước, An Bàng với bãi biển hoang sơ tuyệt đẹp. Ẩm thực Quảng Nam đa dạng với mì Quảng, cao lầu, bánh bao bánh vạc, chè bắp. Làng gốm Thanh Hà, làng rau Trà Quế với nghề truyền thống được bảo tồn qua nhiều thế hệ. Cù Lao Chàm - khu dự trữ sinh quyển thế giới với hệ sinh thái biển phong phú và các làng chài bình dị. Quảng Nam còn có núi rừng hùng vĩ với vườn quốc gia Phong Nha - Kẻ Bàng, tạo nên sự đa dạng về cảnh quan thiên nhiên.',
    image:
      'https://statics.vinpearl.com/du-l%E1%BB%8Bch-quang-nam-thumb_1632934882.jpeg',
    gallery: [
      {
        image:
          'https://statics.vinpearl.com/du-l%E1%BB%8Bch-quang-nam-thumb_1632934882.jpeg',
        caption: 'Phố cổ Hội An với đèn lồng rực rỡ về đêm',
      },
      {
        image:
          'https://dulichconvoi.com/wp-content/uploads/2023/02/Thanh-Dia-My-Son-1400x875-1.png',
        caption: 'Thánh địa Mỹ Sơn - di sản văn hóa thế giới Chăm',
      },
      {
        image:
          'https://premier-village-danang.com/wp-content/uploads/sites/48/2025/01/Bay-Mau-Coconut-Forest-3-4.png',
        caption: 'Rừng dừa Bảy Mẫu với chuyến thúng chai độc đáo',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-5Y4WwPbdAPTvKaf3y4C6snU6JCM5IVURw&s',
        caption: 'Mì Quảng - đặc sản nổi tiếng của Quảng Nam',
      },
    ],
    video: 'https://www.youtube.com/embed/cxnZyVB0Wak',
  },
];
