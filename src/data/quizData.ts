export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  workTitle: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Bài thơ "Tây Tiến" của Quang Dũng ban đầu có tên gọi là gì?',
    options: ['Nhớ Tây Tiến', 'Đoàn quân Tây Tiến', 'Tây Tiến ngày về', 'Hành quân Tây Tiến'],
    correctIndex: 0,
    explanation: 'Ban đầu bài thơ có tên là "Nhớ Tây Tiến", sau này khi in lại trong tập "Mây đầu ô" (1986), tác giả đổi tên thành "Tây Tiến" để nỗi nhớ trở nên lắng sâu và hàm súc hơn.',
    workTitle: 'Tây Tiến'
  },
  {
    id: 2,
    question: 'Hình ảnh nào sau đây trong bài thơ "Tây Tiến" thể hiện độ cao hiểm trở của địa hình và sự tinh nghịch của người lính?',
    options: ['Nhà ai Pha Luông mưa xa khơi', 'Heo hút cồn mây súng ngửi trời', 'Sông Mã gầm lên khúc độc hành', 'Mắt trừng gửi mộng qua biên giới'],
    correctIndex: 1,
    explanation: '"Heo hút cồn mây súng ngửi trời": hình ảnh nhân hóa "súng ngửi trời" vừa đặc tả đỉnh dốc chót vót chạm mây, vừa toát lên chất tếu táo, lạc quan của người lính Hà thành.',
    workTitle: 'Tây Tiến'
  },
  {
    id: 3,
    question: 'Hoàn cảnh sáng tác bài thơ "Việt Bắc" của Tố Hữu gắn liền với sự kiện lịch sử nào?',
    options: [
      'Chiến thắng Điện Biên Phủ trên không năm 1972',
      'Chiến dịch Điện Biên Phủ toàn thắng năm 1954',
      'Tháng 10/1954: Trung ương Đảng và Chính phủ rời chiến khu Việt Bắc về Thủ đô Hà Nội',
      'Đại hội Đảng toàn quốc lần thứ II năm 1951'
    ],
    correctIndex: 2,
    explanation: 'Tháng 10/1954, sau khi hiệp định Giơ-ne-vơ được ký kết, TW Đảng và Chính phủ rời chiến khu Việt Bắc về tiếp quản Thủ đô Hà Nội, tạo nên cuộc chia tay lịch sử thiêng liêng.',
    workTitle: 'Việt Bắc'
  },
  {
    id: 4,
    question: 'Tư tưởng cốt lõi xuyên suốt trong đoạn trích "Đất Nước" của Nguyễn Khoa Điềm là gì?',
    options: [
      'Đất Nước của các bậc đế vương muôn thuở',
      'Đất Nước của Nhân Dân, Đất Nước của ca dao thần thoại',
      'Đất Nước của những anh hùng thời đại mới',
      'Đất Nước nghìn năm văn hiến rực rỡ'
    ],
    correctIndex: 1,
    explanation: 'Tư tưởng bao trùm chương Đất Nước là "Đất Nước của Nhân Dân", nhân dân là người kiến tạo nên không gian địa lý, thời gian lịch sử và gìn giữ văn hóa dân tộc.',
    workTitle: 'Đất Nước'
  },
  {
    id: 5,
    question: 'Trong truyện ngắn "Vợ chồng A Phủ", âm thanh nào đã đánh thức sức sống tiềm tàng của Mị trong đêm tình mùa xuân?',
    options: ['Tiếng chày giã bánh dày', 'Tiếng chó sủa xa xa', 'Tiếng sáo gọi bạn tình', 'Tiếng khèn bên bờ suối'],
    correctIndex: 2,
    explanation: 'Tiếng sáo gọi bạn tình lơ lửng bay ngoài đường ("Mày có con trai con gái rồi / Mày đi làm nương...") đã đánh thức ký ức tuổi xuân tươi đẹp và khát khao sống của Mị.',
    workTitle: 'Vợ chồng A Phủ'
  },
  {
    id: 6,
    question: 'Trong tác phẩm "Vợ nhặt", bà cụ Tứ đã chuẩn bị món ăn gì trong bữa cơm đón dâu mới ngày hôm sau?',
    options: ['Cháo cám (chè khoán)', 'Bánh đúc ngô', 'Củ chuối luộc', 'Cơm gạo đỏ chan canh rau muống'],
    correctIndex: 0,
    explanation: 'Bà cụ Tứ bưng lên nồi cháo cám bốc khói nghi ngút và gọi vui là "chè khoán ngon đáo để" để động viên tinh thần con cái giữa nạn đói kinh hoàng.',
    workTitle: 'Vợ nhặt'
  },
  {
    id: 7,
    question: 'Phát hiện thứ hai của nghệ sĩ nhiếp ảnh Phùng khi con thuyền cập bờ trong "Chiếc thuyền ngoài xa" là gì?',
    options: [
      'Cảnh bình minh rực rỡ trên mặt biển',
      'Cảnh người chồng dùng thắt lưng quất tới tấp vào lưng người vợ trước sự chứng kiến của con cái',
      'Cảnh dân chài hân hoan kéo lưới trúng mùa cá lớn',
      'Cảnh phiên tòa lưu động xét xử người chồng vũ phu'
    ],
    correctIndex: 1,
    explanation: 'Ngay sau phát hiện thứ nhất về cái đẹp tuyệt mỹ của thiên nhiên, Phùng kinh ngạc phát hiện hiện thực tàn bạo của nạn bạo lực gia đình khi người chồng đánh đập vợ dã man.',
    workTitle: 'Chiếc thuyền ngoài xa'
  },
  {
    id: 8,
    question: 'Nguyễn Tuân đã so sánh hình dáng dòng Sông Đà nhìn từ trên máy bay xuống giống như hình ảnh nào?',
    options: [
      'Một dải lụa đào vắt ngang sườn núi',
      'Một áng tóc mun dài tuôn dài, đầu tóc chân tóc ẩn hiện trong mây trời bung nở hoa ban hoa gạo',
      'Một con trăn khổng lồ trườn qua thung lũng',
      'Một thanh bảo kiếm vung lên giữa đại ngàn'
    ],
    correctIndex: 1,
    explanation: 'Nguyễn Tuân viết: "Con Sông Đà tuôn dài tuôn dài như một áng tóc trữ tình, đầu tóc chân tóc ẩn hiện trong mây trời Tây Bắc bung nở hoa ban hoa gạo tháng hai...".',
    workTitle: 'Người lái đò Sông Đà'
  },
  {
    id: 9,
    question: 'Trong vở kịch "Hồn Trương Ba, da hàng thịt", câu nói nổi tiếng nào thể hiện khát vọng sống trọn vẹn, chân thực của nhân vật Trương Ba?',
    options: [
      'Tôi muốn được sống thêm dù trong bất kỳ thể xác nào!',
      'Không thể bên trong một đằng, bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn!',
      'Sống là phải biết chấp nhận hoàn cảnh trớ trêu.',
      'Người trần gian ai chẳng phải chịu đựng sự chắp vá!'
    ],
    correctIndex: 1,
    explanation: 'Trương Ba kiên quyết nói với Đế Thích: "Không thể bên trong một đằng, bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn!" - đây là tuyên ngôn triết lý sống cốt lõi của tác phẩm.',
    workTitle: 'Hồn Trương Ba, da hàng thịt'
  },
  {
    id: 10,
    question: 'Câu nói nổi tiếng của ông lão Xan-ti-a-gô trong tác phẩm "Ông già và biển cả" của Hemingway là gì?',
    options: [
      'Biển cả luôn tha thứ cho những kẻ dũng cảm.',
      'Con người không được sinh ra để dành cho thất bại. Con người có thể bị hủy diệt nhưng không thể bị đánh bại.',
      'Chiến thắng chỉ đến với người câu được con cá lớn nhất.',
      'Hãy chiến đấu đến hơi thở cuối cùng vì danh dự.'
    ],
    correctIndex: 1,
    explanation: 'Xan-ti-a-gô khẳng định bản lĩnh bất diệt của con người: "Con người không được sinh ra để dành cho thất bại. Con người có thể bị hủy diệt nhưng không thể bị đánh bại".',
    workTitle: 'Ông già và biển cả'
  },
  {
    id: 11,
    question: 'Trong đoạn trích "Xuân Tóc Đỏ cứu quốc" (Số đỏ - Vũ Trọng Phụng), đám đông trên sân quần vợt Rollandes đã reo hò khẩu hiệu nghịch dị nào?',
    options: [
      'Xuân Tóc Đỏ vạn tuế! Sự đại bại vạn tuế!',
      'Hòa bình muôn năm! Chiến thắng muôn năm!',
      'Quán quân Xiêm La muôn năm!',
      'Vĩ nhân thể thao cứu quốc!'
    ],
    correctIndex: 0,
    explanation: 'Nghịch ngữ "Sự đại bại vạn tuế!" là đỉnh cao trào phúng của Vũ Trọng Phụng, bóc trần một xã hội đảo điên nơi sự thua cuộc giả tạo và dối trá được tôn sùng làm vĩ nhân cứu nước.',
    workTitle: 'Xuân Tóc Đỏ cứu quốc'
  },
  {
    id: 12,
    question: 'Hình tượng người tráng sĩ tóc bạc mài gươm báu dưới ánh trăng ("Kỷ độ Long Tuyền đới nguyệt ma") xuất hiện trong tác phẩm nào?',
    options: ['Thuật hoài (Phạm Ngũ Lão)', 'Cảm hoài (Đặng Dung)', 'Bạch Đằng giang phú (Trương Hán Siêu)', 'Hịch tướng sĩ (Trần Quốc Tuấn)'],
    correctIndex: 1,
    explanation: 'Hai câu kết của "Cảm hoài" (Đặng Dung): "Quốc thù vị báo đầu tiên bạch / Kỷ độ Long Tuyền đới nguyệt ma" là tượng đài bi tráng bất hủ về người anh hùng thời Hậu Trần.',
    workTitle: 'Cảm hoài'
  },
  {
    id: 13,
    question: 'Trong truyện ngắn "Muối của rừng" của Nguyễn Huy Thiệp, chi tiết kì ảo hoa tử huyền nở báo hiệu điều gì?',
    options: [
      'Điềm lành của sự thức tỉnh nhân tính, tâm hồn thanh thản và mùa màng no ấm',
      'Rừng già sắp bước vào mùa bão lụt',
      'Đàn khỉ sẽ rời bỏ khu rừng ra đi',
      'Thợ săn sẽ bắn được nhiều muông thú hơn'
    ],
    correctIndex: 0,
    explanation: 'Hoa tử huyền ba mươi năm mới nở một lần trắng muốt như muối của rừng. Người gặp được hoa tử huyền sẽ gặp may mắn, biểu tượng cho sự cứu rỗi lương tri và sự hòa giải giữa con người với tự nhiên.',
    workTitle: 'Muối của rừng'
  },
  {
    id: 14,
    question: 'Trong bài thơ "Mộ" (Chiều tối) của Hồ Chí Minh, từ ngữ nào được xem là nhãn tự (mắt thơ) làm bừng sáng toàn bài thơ?',
    options: ['Quyện điểu (chim mỏi)', 'Cô vân (chòm mây lẻ)', 'Hồng (lò than rực hồng)', 'Sơn thôn (xóm núi)'],
    correctIndex: 2,
    explanation: 'Chữ "Hồng" (lò than rực hồng) ở cuối bài thơ là nhãn tự tỏa sáng, xua tan bóng đêm tăm tối và cái lạnh lẽo nơi rừng núi, thể hiện tinh thần lạc quan cách mạng luôn hướng về ánh sáng.',
    workTitle: 'Mộ (Chiều tối)'
  },
  {
    id: 15,
    question: 'Trong bài thơ "Vội vàng" của Xuân Diệu, câu thơ nào thể hiện đỉnh cao của nghệ thuật lấy vẻ đẹp con người trẻ trung làm thước đo vũ trụ?',
    options: [
      'Tôi muốn tắt nắng đi cho màu đừng nhạt mất',
      'Tháng giêng ngon như một cặp môi gần',
      'Mau đi thôi! Mùa chưa ngả chiều hôm',
      'Hỡi xuân hồng, ta muốn cắn vào ngươi!'
    ],
    correctIndex: 1,
    explanation: '"Tháng giêng ngon như một cặp môi gần" là sáng tạo thi pháp độc đáo: cụ thể hóa khái niệm thời gian thành vẻ đẹp quyến rũ, tình tứ của người thiếu nữ tuổi xuân.',
    workTitle: 'Vội vàng'
  },
  {
    id: 16,
    question: 'Ngôi trường tiên phong thực hiện mô hình giáo dục khai phóng tại Hà Nội năm 1907 do cụ Lương Văn Can sáng lập có tên là gì?',
    options: ['Đông Du học hiệu', 'Đông Kinh Nghĩa Thục', 'Quốc học Huế', 'Dục Thanh Phan Thiết'],
    correctIndex: 1,
    explanation: 'Đông Kinh Nghĩa Thục (1907) là trường học khai phóng tiên phong tại Việt Nam: dạy học miễn phí, phổ biến chữ Quốc ngữ, cải cách sách vở và đề cao tư duy thực nghiệp.',
    workTitle: 'Giáo dục khai phóng ở Việt Nam'
  },
  {
    id: 17,
    question: 'Trong đoạn trích "Nghệ thuật băm thịt gà" (Việc làng - Ngô Tất Tố), anh Lăng mõ làng phải chia một con gà luộc thành bao nhiêu cỗ?',
    options: ['12 cỗ', '16 cỗ', '23 cỗ', '36 cỗ'],
    correctIndex: 2,
    explanation: 'Anh Lăng phải chia một con gà thành đúng 23 cỗ (mỗi cỗ 4 miếng đều nhau chằn chặn) để phục vụ các bậc chức sắc trong làng, tránh bị phạt vạ vì hủ tục ngôi thứ.',
    workTitle: 'Nghệ thuật băm thịt gà'
  },
  {
    id: 18,
    question: 'Trong vở hài kịch "Quan thanh tra" của Nikolai Gogol, nhân vật Khlestakov vốn dĩ có thân phận thực sự là gì?',
    options: [
      'Một viên quan thanh tra tối cao vi hành từ kinh đô',
      'Một thương gia giàu có từ Moskva',
      'Một viên công chức quèn hạng mười bốn rỗng túi, ham chơi',
      'Một vị tướng giải ngũ về quê'
    ],
    correctIndex: 2,
    explanation: 'Khlestakov chỉ là một công chức hạng mười bốn nghèo túng, chơi cờ bạc thua hết tiền trọ ở Peterburg, nhưng vì tật giật mình tham nhũng nên đám quan lại tỉnh lẻ đã nhận nhầm hắn là Quan thanh tra.',
    workTitle: 'Nhân vật quan trọng'
  },
  {
    id: 19,
    question: 'Trong tiểu thuyết "Mùa lá rụng trong vườn" của Ma Văn Kháng, nhân vật nào được coi là biểu tượng của tấm lòng nhân hậu, thủy chung gắn kết đại gia đình?',
    options: ['Cô Lý', 'Chị Hoài', 'Anh Đông', 'Anh Cừ'],
    correctIndex: 1,
    explanation: 'Chị Hoài - người con dâu trưởng cũ dẫu đã có gia đình mới ở quê vẫn luôn hiếu nghĩa trở về thăm ông Bằng chiều 30 Tết, mang hơi ấm tình thân sưởi ấm nếp nhà đang xao xác.',
    workTitle: 'Mùa lá rụng trong vườn'
  },
  {
    id: 20,
    question: 'Tác giả của cuốn sách "Salt: A World History" (Đời muối: Lịch sử thế giới) trích học trong Bài 8 Ngữ văn 12 là ai?',
    options: ['Claude Lévi-Strauss', 'Mark Kurlansky', 'Ernest Hemingway', 'Nikolai Gogol'],
    correctIndex: 1,
    explanation: 'Mark Kurlansky là nhà sử học, nhà báo Mỹ nổi tiếng thế giới với lối viết lịch sử vi mô (microhistory) qua kiệt tác "Đời muối: Lịch sử thế giới".',
    workTitle: 'Đời muối'
  }
];
