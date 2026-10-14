export interface ExamSection {
  title: string;
  score: string;
  duration: string;
  tips: string[];
  formula: string;
  sampleTemplate?: string;
}

export interface LiteraryQuote {
  quote: string;
  author: string;
  application: string;
}

export interface IntroFormula {
  name: string;
  pattern: string;
  example: string;
}

export const EXAM_STRUCTURE: ExamSection[] = [
  {
    title: 'Phần I: Đọc Hiểu Văn Bản',
    score: '3.0 Điểm',
    duration: '15 - 20 phút',
    tips: [
      'Câu 1 (Nhận biết - 0.75đ): Thường hỏi về thể thơ, phương thức biểu đạt, phong cách ngôn ngữ. Trả lời trực diện, ngắn gọn trong 1 dòng.',
      'Câu 2 (Thông hiểu - 0.75đ): Tìm chi tiết hoặc từ ngữ theo tác giả trong ngữ liệu. Trích dẫn nguyên văn hoặc bám sát văn bản, không suy diễn.',
      'Câu 3 (Thông hiểu/Vận dụng - 1.0đ): Hiểu nội dung/hiệu quả nghệ thuật của một câu văn/hình ảnh. Nêu rõ nghĩa đen -> nghĩa bóng -> tác dụng nghệ thuật.',
      'Câu 4 (Vận dụng - 0.5đ): Bài học/thông điệp rút ra cho bản thân. Trả lời từ 3 - 5 dòng rõ ràng, có tính tích cực và nhân văn.'
    ],
    formula: 'Công thức: Trả lời ngắn gọn, đánh số thứ tự rõ ràng (Câu 1, Câu 2...), gạch đầu dòng mạch lạc, không viết lan man.',
    sampleTemplate: 'Ví dụ trả lời hiệu quả biện pháp tu từ: Gọi tên biện pháp (nhân hóa/so sánh...) -> Chỉ rõ từ ngữ thể hiện -> Phân tích tác dụng gợi hình gợi cảm -> Nêu cảm xúc, thái độ của tác giả.'
  },
  {
    title: 'Phần II - Câu 1: Nghị Luận Xã Hội (Đoạn văn 200 chữ)',
    score: '2.0 Điểm',
    duration: '20 - 25 phút',
    tips: [
      'Dung lượng: Viết trong khoảng 2/3 đến 1 trang giấy thi (khoảng 20 - 25 dòng), TUYỆT ĐỐI không xuống dòng tách đoạn.',
      'Dẫn chứng: Cần 1 dẫn chứng người thật việc thật tiêu biểu, mang tính thời sự hoặc truyền cảm hứng (tránh dẫn chứng quá cũ như Edison, Newton).',
      'Mở đoạn: Dẫn dắt 1 câu trực tiếp vào vấn đề cần nghị luận.',
      'Thân đoạn: Giải thích ngắn gọn (1 - 2 câu) -> Bàn luận & Phân tích các mặt đúng/sai/tác dụng (6 - 8 câu) -> Nêu dẫn chứng (2 - 3 câu) -> Bàn luận mở rộng/phản biện (2 câu).',
      'Kết đoạn: Bài học nhận thức và hành động của bản thân (2 câu).'
    ],
    formula: 'Công thức "G-B-C-P-R": Giải thích (G) + Bàn luận (B) + Chứng minh (C) + Phản biện (P) + Rút ra bài học (R).',
    sampleTemplate: 'Mở đoạn: "Cuộc sống không phải là một đường thẳng bình lặng mà là chuỗi những thử thách đòi hỏi mỗi người phải có [Vấn đề nghị luận]..."'
  },
  {
    title: 'Phần II - Câu 2: Nghị Luận Văn Học (Bài văn 5 điểm)',
    score: '5.0 Điểm',
    duration: '70 - 80 phút',
    tips: [
      'Dung lượng: Từ 2 đến 3 đôi giấy thi (4 - 6 trang viết tay). Chữ viết rõ ràng, phân chia luận điểm bằng các đoạn văn độc lập.',
      'Mở bài: 5 - 7 dòng, dẫn dắt khéo léo, nêu tên tác giả, tác phẩm, hoàn cảnh và trích dẫn vấn đề/đoạn thơ cần phân tích.',
      'Thân bài: Bắt buộc có phần Khái quát chung (0.5đ), sau đó chia 2 - 3 Luận điểm phân tích chi tiết, phần Đánh giá nghệ thuật (0.5đ) và Yêu cầu phụ/Nhận xét nâng cao (0.5đ - 1.0đ).',
      'Kết bài: Đúc kết lại giá trị tác phẩm, liên hệ thời đại và cảm xúc cá nhân.'
    ],
    formula: 'Bố cục chuẩn: Mở bài -> Khái quát hoàn cảnh/vị trí đoạn trích -> Luận điểm 1 -> Luận điểm 2 -> Luận điểm 3 -> Nghệ thuật -> Nhận xét nâng cao (yêu cầu phụ) -> Kết bài.',
    sampleTemplate: 'Bí quyết ghi điểm 8+: Luôn đối chiếu với một tác phẩm cùng đề tài để làm sâu sắc thêm tư tưởng nghệ thuật của nhà văn.'
  }
];

export const LITERARY_QUOTES: LiteraryQuote[] = [
  {
    quote: 'Văn học là nhân học.',
    author: 'M. Gorki',
    application: 'Dùng cho phần mở bài hoặc đánh giá giá trị nhân đạo trong Vợ chồng A Phủ, Vợ nhặt, Chiếc thuyền ngoài xa.'
  },
  {
    quote: 'Thơ là tiếng lòng của một người đi tìm những tâm hồn đồng điệu.',
    author: 'Tố Hữu',
    application: 'Dùng khi phân tích các bài thơ trữ tình như Việt Bắc, Tây Tiến, Sóng.'
  },
  {
    quote: 'Nghệ thuật không phải là ánh trăng lừa dối, không nên là ánh trăng lừa dối, nghệ thuật chỉ có thể là tiếng đau khổ kia thoát ra từ những kiếp lầm than.',
    author: 'Nam Cao',
    application: 'Rất đắt giá khi phân tích Chiếc thuyền ngoài xa (Nguyễn Minh Châu) hoặc Vợ nhặt (Kim Lân).'
  },
  {
    quote: 'Mỗi công dân có một dạng vân tay, mỗi nhà văn thứ thiệt có một dạng vân chữ.',
    author: 'Lê Đạt',
    application: 'Dùng khi phân tích phong cách nghệ thuật độc đáo của Nguyễn Tuân (Người lái đò Sông Đà) hoặc Quang Dũng (Tây Tiến).'
  },
  {
    quote: 'Chi tiết nhỏ làm nên nhà văn lớn.',
    author: 'M. Gorki',
    application: 'Dùng khi phân tích chi tiết đắt giá: bát cháo cám (Vợ nhặt), giọt nước mắt A Phủ (Vợ chồng A Phủ), tấm ảnh bộ lịch (Chiếc thuyền ngoài xa).'
  },
  {
    quote: 'Thơ là rượu của thế gian.',
    author: 'Huy Cận',
    application: 'Dùng khi bình luận về chất men say say, vẻ đẹp lãng mạn của thi ca như Tây Tiến, Sóng.'
  }
];

export const INTRO_FORMULAS: IntroFormula[] = [
  {
    name: 'Công thức 1: Mở bài từ đề tài & dòng chảy văn học',
    pattern: 'Trong dòng chảy bất tận của nền văn học Việt Nam hiện đại, đề tài [Tên đề tài: người lính / tình yêu / người nông dân...] luôn là nguồn cảm hứng dạt dào cho bao thế hệ cầm bút. Nếu như [Tác giả khác] đưa ta đến với [...], thì đến với [Tác giả], ta lại bắt gặp một tiếng nói riêng đầy ấn tượng qua tác phẩm [Tên tác phẩm]...',
    example: 'Trong dòng chảy bất tận của văn học kháng chiến chống Pháp, đề tài người lính luôn là tượng đài chói lọi. Nếu như Chính Hữu tìm về vẻ đẹp mộc mạc của người nông dân mặc áo lính trong "Đồng chí", thì Quang Dũng lại tạc nên bức tượng đài bi tráng, hào hoa đầy kiêu hãnh trong tuyệt phẩm "Tây Tiến"...'
  },
  {
    name: 'Công thức 2: Mở bài bằng nhận định lý luận văn học',
    pattern: 'Nhà văn/nhà phê bình [Tên danh nhân] từng khẳng định: "[Câu nhận định]". Thật vậy, giá trị đích thực của một tác phẩm văn chương chính là ở [...]. Đọc [Tên tác phẩm] của [Tác giả], người đọc không khỏi thổn thức trước...',
    example: 'Đại văn hào M. Gorki từng đúc kết: "Văn học là nhân học". Thật vậy, văn chương chân chính muôn đời là câu chuyện về tình thương và phẩm giá con người. Đến với truyện ngắn "Vợ nhặt" của nhà văn Kim Lân, ta càng thấm thía hơn ngọn lửa tình người ấm áp rực cháy giữa đêm đen nghèo đói...'
  },
  {
    name: 'Công thức 3: Mở bài từ phong cách tác giả & thời đại',
    pattern: '[Tác giả] là một trong những gương mặt tiêu biểu nhất của nền văn học hiện đại Việt Nam với phong cách [Đặc trưng phong cách]. Trong sự nghiệp sáng tác của ông/bà, [Tên tác phẩm] được coi là đỉnh cao kết tinh tài năng và tư tưởng...',
    example: 'Được mệnh danh là bậc thầy của ngôn từ và thể loại tùy bút, Nguyễn Tuân suốt đời là một lữ khách tài hoa đi tìm cái Đẹp tuyệt đối. Tùy bút "Người lái đò Sông Đà" chính là khúc tráng ca trác tuyệt, nơi ngòi bút tài hoa uyên bác của ông thăng hoa để ngợi ca thiên nhiên kỳ vĩ và con người lao động kiên cường...'
  }
];
