export interface ExpressionModeItem {
  id: string;
  name: string;
  badge: string;
  purpose: string;
  recognitionSigns: string[];
  commonGenres: string[];
  grade12Examples: string[];
  examTip: string;
}

export interface LiteraryFormulaExpression {
  id: string;
  category: 'doc-hieu' | 'nlxh' | 'nlvh';
  categoryLabel: string;
  title: string;
  expressionFormula: string;
  stepByStep: string[];
  applicationExample: string;
  scoreWeight: string;
}

export interface WorkExpressionSpec {
  workId: string;
  title: string;
  author: string;
  year: string;
  genreLabel: string;
  primaryExpression: string;
  combinedExpressions: string[];
  languageStyle: string;
  formAndStructure: string;
  dominantTone: string;
  coreRhetoricalDevices: string[];
  keyExpressionValue: string;
}

export const EXPRESSION_MODES_DATA: ExpressionModeItem[] = [
  {
    id: 'bieu-cam',
    name: 'Phương thức Biểu cảm',
    badge: 'Trọng tâm Thơ 12',
    purpose: 'Bày tỏ trực tiếp hoặc gián tiếp tình cảm, cảm xúc, nỗi nhớ, khát vọng và thái độ của chủ thể trữ tình trước thiên nhiên, con người và thời đại.',
    recognitionSigns: [
      'Xuất hiện dày đặc các từ ngữ bộc lộ cảm xúc trực tiếp: nhớ, thương, ôi, biết mấy, thiết tha, chơi vơi...',
      'Thường sử dụng thể thơ (lục bát, 7 chữ, 5 chữ, tự do) hoặc tùy bút, bút ký trữ tình.',
      'Có hình ảnh ẩn dụ, hoán dụ, điệp từ, điệp cấu trúc và câu cảm thán, câu hỏi tu từ.'
    ],
    commonGenres: ['Thơ trữ tình', 'Trường ca', 'Tùy bút', 'Bút ký trữ tình'],
    grade12Examples: [
      'Tây Tiến (Quang Dũng) — Biểu cảm nỗi nhớ Tây Bắc hào hoa, bi tráng',
      'Việt Bắc (Tố Hữu) — Biểu cảm ân tình cách mạng thủy chung son sắt',
      'Sóng (Xuân Quỳnh) — Biểu cảm khát vọng tình yêu nữ tính, mãnh liệt',
      'Đất Nước (Nguyễn Khoa Điềm) — Biểu cảm kết hợp chính luận triết lý'
    ],
    examTip: 'Nếu ngữ liệu Đọc hiểu là một đoạn thơ trữ tình, phương thức biểu đạt chính chắc chắn là BIỂU CẢM (trừ thơ tự sự kể chuyện thuần túy). Khi đề hỏi "các phương thức biểu đạt", hãy trả lời: Biểu cảm, kết hợp Miêu tả và Tự sự.'
  },
  {
    id: 'tu-su',
    name: 'Phương thức Tự sự',
    badge: 'Trọng tâm Truyện & Kịch',
    purpose: 'Trình bày chuỗi sự việc, diễn biến cốt truyện, hành động và xung đột của nhân vật theo một trình tự nhất định nhằm phản ánh hiện thực và gửi gắm tư tưởng.',
    recognitionSigns: [
      'Có cốt truyện, tình huống truyện, sự kiện mở đầu - diễn biến - cao trào - kết thúc.',
      'Có hệ thống nhân vật, ngôi kể (ngôi thứ nhất xưng "tôi" hoặc ngôi thứ ba giấu mình).',
      'Có lời người kể chuyện xen lẫn lời đối thoại, độc thoại nội tâm của nhân vật.'
    ],
    commonGenres: ['Truyện ngắn', 'Tiểu thuyết', 'Kịch bản văn học', 'Ký sự'],
    grade12Examples: [
      'Vợ chồng A Phủ (Tô Hoài) — Tự sự ngôi thứ 3 kết hợp miêu tả tâm lý bậc thầy',
      'Vợ nhặt (Kim Lân) — Tự sự xoay quanh tình huống "nhặt vợ" ngày đói',
      'Chiếc thuyền ngoài xa (Nguyễn Minh Châu) — Tự sự ngôi thứ nhất (nhân vật Phùng)',
      'Rừng xà nu (Nguyễn Trung Thành) — Tự sự mang đậm âm hưởng sử thi Tây Nguyên'
    ],
    examTip: 'Trong văn bản truyện ngắn, phương thức biểu đạt chính luôn là TỰ SỰ; các phương thức kết hợp là Miêu tả (ngoại hình, cảnh vật, tâm lý) và Biểu cảm.'
  },
  {
    id: 'nghi-luan',
    name: 'Phương thức Nghị luận',
    badge: 'Trọng tâm Chính luận & Đọc hiểu',
    purpose: 'Dùng hệ thống luận điểm, lý lẽ sắc bén và dẫn chứng xác thực để bàn bạc, thuyết phục người đọc/người nghe về một tư tưởng chính trị, đạo đức, văn học hoặc đời sống.',
    recognitionSigns: [
      'Có luận đề, luận điểm rõ ràng, câu văn mang tính khẳng định hoặc phủ định đanh thép.',
      'Sử dụng các từ nối lập luận: vì vậy, thế mà, tuy nhiên, bởi lẽ, quả thật, tóm lại...',
      'Kết hợp chặt chẽ các thao tác lập luận: giải thích, phân tích, chứng minh, bình luận, bác bỏ.'
    ],
    commonGenres: ['Tuyên ngôn', 'Bình luận xã hội', 'Tiểu luận phê bình', 'Lời kêu gọi'],
    grade12Examples: [
      'Tuyên ngôn Độc lập (Hồ Chí Minh) — Đỉnh cao văn chính luận mẫu mực',
      'Nguyễn Đình Chiểu, ngôi sao sáng trong văn nghệ của dân tộc (Phạm Văn Đồng)',
      'Thông điệp nhân ngày Thế giới phòng chống AIDS (Cô-phi An-nan)'
    ],
    examTip: 'Các đoạn trích bàn về lối sống, giá trị văn hóa, lời khuyên đạo lý trong Phần I Đọc hiểu (3.0 điểm) có phương thức biểu đạt chính là NGHỊ LUẬN.'
  },
  {
    id: 'mieu-ta',
    name: 'Phương thức Miêu tả',
    badge: 'Phương thức kết hợp đắt giá',
    purpose: 'Dùng ngôn từ gợi hình, gợi âm thanh, màu sắc để tái hiện bức tranh thiên nhiên, ngoại hình nhân vật hoặc trạng thái tâm lý sống động như đang hiện ra trước mắt.',
    recognitionSigns: [
      'Giàu tính từ chỉ màu sắc, hình dáng, kích thước và từ láy tượng hình, tượng thanh.',
      'Huy động đa giác quan (thị giác, thính giác, xúc giác, khứu giác).',
      'Thường kết hợp chặt chẽ với Tự sự và Biểu cảm trong tùy bút, bút ký, truyện ngắn.'
    ],
    commonGenres: ['Tùy bút', 'Bút ký', 'Đoạn văn tả cảnh/tả người trong truyện & thơ'],
    grade12Examples: [
      'Người lái đò Sông Đà (Nguyễn Tuân) — Miêu tả thác ghềnh hung bạo & sắc nước trữ tình',
      'Ai đã đặt tên cho dòng sông? (Hoàng Phủ Ngọc Tường) — Miêu tả thủy trình sông Hương',
      'Bức tranh tứ bình trong Việt Bắc (Tố Hữu) — Miêu tả cảnh và người bốn mùa'
    ],
    examTip: 'Miêu tả hiếm khi đứng độc lập một mình trong đề thi THPT mà thường đóng vai trò phương thức kết hợp giúp làm nổi bật đối tượng trữ tình hoặc tự sự.'
  },
  {
    id: 'thuyet-minh',
    name: 'Phương thức Thuyết minh',
    badge: 'Nhận biết nhanh',
    purpose: 'Cung cấp tri thức khách quan, chính xác về nguồn gốc, cấu tạo, đặc điểm, quy luật hoặc giá trị lịch sử - văn hóa của sự vật, hiện tượng.',
    recognitionSigns: [
      'Chứa nhiều số liệu thống kê, mốc thời gian, thuật ngữ khoa học, địa lý, lịch sử.',
      'Ngôn ngữ chuẩn xác, khách quan, mạch lạc.',
      'Xuất hiện trong phần giới thiệu tiểu dẫn hoặc kết hợp trong bút ký văn hóa.'
    ],
    commonGenres: ['Văn bản khoa học - phổ thông', 'Bút ký lịch sử - địa lý', 'Giới thiệu danh lam'],
    grade12Examples: [
      'Góc nhìn địa lý - lịch sử của sông Hương trong "Ai đã đặt tên cho dòng sông?"',
      'Tri thức quân sự, địa lý, võ thuật trong "Người lái đò Sông Đà"'
    ],
    examTip: 'Chỉ chọn Thuyết minh là phương thức chính khi văn bản thuần túy cung cấp thông tin khách quan, định nghĩa và số liệu khoa học.'
  },
  {
    id: 'hanh-chinh',
    name: 'Phương thức Hành chính - Công vụ',
    badge: 'Văn bản pháp quy',
    purpose: 'Giao tiếp giữa Nhà nước với nhân dân hoặc giữa các cơ quan, tổ chức trên cơ sở pháp lý (nghị định, thông tư, đơn từ, biên bản, tuyên bố ngoại giao).',
    recognitionSigns: [
      'Có khuôn mẫu hành chính (quốc hiệu, tiêu ngữ, căn cứ pháp lý, điều khoản).',
      'Từ ngữ đơn nghĩa, trang trọng, mang tính mệnh lệnh hoặc quy ước pháp luật.'
    ],
    commonGenres: ['Hiến pháp', 'Sắc lệnh', 'Đơn từ', 'Biên bản', 'Công văn'],
    grade12Examples: [
      'Yếu tố pháp lý quốc tế trong lời tuyên bố cuối "Tuyên ngôn Độc lập" (Hồ Chí Minh)'
    ],
    examTip: 'Trong đề thi tốt nghiệp THPT môn Ngữ Văn, phương thức Hành chính - công vụ hầu như không xuất hiện làm ngữ liệu Đọc hiểu chính.'
  }
];

export const LITERARY_EXPRESSIONS_FORMULAS: LiteraryFormulaExpression[] = [
  {
    id: 'expr-ptbd',
    category: 'doc-hieu',
    categoryLabel: 'Đọc Hiểu (Câu 1 - 0.75đ)',
    title: 'Biểu Thức Xác Định Phương Thức Biểu Đạt & Thể Thơ',
    expressionFormula: '[Loại câu hỏi: "chính/chủ yếu" = 1 đáp án duy nhất] | [Loại câu hỏi: "các/những" = 2 đến 3 đáp án theo thứ tự ưu tiên]',
    stepByStep: [
      'Bước 1: Đọc kỹ từ khóa giới hạn trong đề bài ("phương thức biểu đạt chính" hay "các phương thức biểu đạt").',
      'Bước 2: Nhìn hình thức văn bản -> Thơ trữ tình = Biểu cảm; Truyện = Tự sự; Đoạn bàn luận tư tưởng = Nghị luận.',
      'Bước 3: Trình bày đúng 1 dòng duy nhất: "Phương thức biểu đạt chính của đoạn trích là: [Tên phương thức]."'
    ],
    applicationExample: 'Đề hỏi: Xác định phương thức biểu đạt chính của đoạn thơ trong "Đất Nước" (Nguyễn Khoa Điềm). -> Trả lời chuẩn barem: Phương thức biểu đạt chính là Biểu cảm (hoặc Biểu cảm kết hợp Nghị luận nếu đề hỏi các phương thức).',
    scoreWeight: '0.5 - 0.75 điểm (Ăn trọn trong 30 giây)'
  },
  {
    id: 'expr-bptt',
    category: 'doc-hieu',
    categoryLabel: 'Đọc Hiểu (Câu 3 - 1.0đ)',
    title: 'Biểu Thức Phân Tích Tác Dụng Biện Pháp Tu Từ (Công Thức 3 Tầng)',
    expressionFormula: 'Tác dụng BPTT = [Gọi tên + Chỉ từ ngữ (0.25đ)] + [Tác dụng Nội dung + Cảm xúc tác giả (0.5đ)] + [Tác dụng Nghệ thuật diễn đạt (0.25đ)]',
    stepByStep: [
      'Tầng 1 (Chỉ diện): Gọi chính xác tên biện pháp tu từ và trích dẫn từ ngữ/hình ảnh chứa biện pháp đó.',
      'Tầng 2 (Nội dung & Tư tưởng): Nhấn mạnh/khắc họa sinh động hình ảnh gì? Qua đó thể hiện tình cảm, thái độ gì của tác giả?',
      'Tầng 3 (Nghệ thuật): Giúp câu thơ/câu văn giàu hình ảnh, giàu nhịp điệu, tăng sức gợi hình gợi cảm và tạo ấn tượng sâu sắc với người đọc.'
    ],
    applicationExample: 'Áp dụng cho câu "Heo hút cồn mây súng ngửi trời": (1) Biện pháp nhân hóa "súng ngửi trời" và đảo ngữ "heo hút cồn mây". (2) Khắc họa độ cao chót vót của núi rừng Tây Bắc và vẻ đẹp lạc quan, kiêu dũng, tinh nghịch của người lính Tây Tiến. (3) Giúp câu thơ giàu tính tạo hình, sinh động và đậm chất lãng mạn hào hoa.',
    scoreWeight: '1.0 điểm chuẩn barem Bộ GD&ĐT'
  },
  {
    id: 'expr-nlxh',
    category: 'nlxh',
    categoryLabel: 'Nghị Luận Xã Hội 200 Chữ (2.0đ)',
    title: 'Biểu Thức Cấu Trúc Đoạn Văn 200 Chữ "G - B - C - P - R"',
    expressionFormula: 'Đoạn 200 chữ (1 đoạn duy nhất) = Mở đoạn (1 câu) + Giải thích (2 câu) + Bàn luận 3 chiều (8 câu) + Chứng minh (3 câu) + Phản biện (2 câu) + Rút bài học (2 câu)',
    stepByStep: [
      'G - Giải thích (0.25đ): Giải thích từ khóa/khái niệm bằng cách nêu bản chất và biểu hiện ngắn gọn.',
      'B - Bàn luận (0.75đ): Phân tích tác dụng/ý nghĩa trên 3 bình diện: Đối với cá nhân -> Đối với mối quan hệ con người -> Đối với xã hội/đất nước.',
      'C - Chứng minh (0.25đ): Đưa 1 dẫn chứng thực tế tiêu biểu, giàu sức thuyết phục và phân tích ngắn gọn.',
      'P - Phản biện (0.25đ): Mở rộng vấn đề, phê phán biểu hiện trái ngược (vô cảm, ích kỷ, ỷ lại...).',
      'R - Rút bài học (0.25đ): Khẳng định lại giá trị vấn đề và liên hệ hành động thiết thực của tuổi trẻ hôm nay.'
    ],
    applicationExample: 'Ví dụ đề "Sự thấu cảm trong cuộc sống": Mở đoạn trực tiếp -> Giải thích thấu cảm là đặt mình vào vị trí người khác -> Phân tích ý nghĩa hàn gắn vết thương, gắn kết cộng đồng -> Dẫn chứng thực tế -> Phê phán lối sống thờ ơ -> Bài học lắng nghe và sẻ chia.',
    scoreWeight: '2.0 điểm (20 - 25 phút)'
  },
  {
    id: 'expr-nlvh',
    category: 'nlvh',
    categoryLabel: 'Nghị Luận Văn Học (5.0đ)',
    title: 'Biểu Thức Phân Tích Đoạn Thơ / Đoạn Văn Đạt Điểm 9+',
    expressionFormula: 'Luận điểm 9+ = [Dẫn vị trí đoạn trích] + [Hình thức & Ngôn từ nghệ thuật] + [Nội dung & Hình tượng] + [Nhận định lý luận / Đối chiếu mở rộng]',
    stepByStep: [
      'Mở bài & Khái quát (1.0đ): Giới thiệu tác giả (phong cách), tác phẩm (hoàn cảnh sáng tác, xuất xứ) và vị trí đoạn trích.',
      'Phân tích từ nghệ thuật suy ra nội dung (2.5đ): Đi từ từ ngữ, hình ảnh, thanh điệu, biện pháp tu từ để làm bật nội dung tư tưởng (tránh diễn xuôi thơ).',
      'Đánh giá Nghệ thuật & Nội dung (0.5đ): Tóm lược thể thơ/tình huống truyện, giọng điệu, bút pháp đặc trưng.',
      'Giải quyết yêu cầu phụ & Liên hệ lý luận (0.75đ - 1.0đ): Nhận xét vẻ đẹp nhân vật/tư tưởng tác giả, lồng ghép 1 câu lý luận văn học và đối chiếu 1 tác phẩm cùng đề tài.'
    ],
    applicationExample: 'Khi phân tích "Tây Tiến", luôn đi theo trục: Từ Hán Việt + Phối thanh Bằng/Trắc + Bút pháp đối lập -> Vẻ đẹp bi tráng & hào hoa -> Đối chiếu với "Đồng chí" (Chính Hữu) -> Trích nhận định của Vũ Quần Phương.',
    scoreWeight: '5.0 điểm (70 - 75 phút)'
  }
];

export const WORK_EXPRESSION_SPECS: Record<string, WorkExpressionSpec> = {
  'tay-tien': {
    workId: 'tay-tien',
    title: 'Tây Tiến',
    author: 'Quang Dũng',
    year: '1948',
    genreLabel: 'Thơ 7 chữ (Thất ngôn)',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Miêu tả', 'Tự sự'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Thơ 7 chữ hiện đại (34 câu chia 4 đoạn), mạch cảm xúc vận động theo nỗi nhớ từ thiên nhiên, kỷ niệm quân dân đến tượng đài người lính.',
    dominantTone: 'Hào hoa, lãng mạn kết hợp âm hưởng bi tráng, trầm hùng',
    coreRhetoricalDevices: ['Đối lập tương phản', 'Nhân hóa ("súng ngửi trời", "Sông Mã gầm")', 'Nói giảm nói tránh ("anh về đất", "bỏ quên đời")', 'Từ Hán Việt cổ kính', 'Phối thanh Bằng - Trắc'],
    keyExpressionValue: 'Biểu đạt thành công bức tranh thiên nhiên Tây Bắc vừa hùng vĩ dữ dội vừa thơ mộng trữ tình và tượng đài người lính trí thức Hà Nội bi tráng bất tử.'
  },
  'viet-bac': {
    workId: 'viet-bac',
    title: 'Việt Bắc',
    author: 'Tố Hữu',
    year: '1954',
    genreLabel: 'Thơ Lục bát',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Miêu tả', 'Tự sự'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Trữ tình - Chính luận)',
    formAndStructure: 'Thể thơ lục bát truyền thống kết hợp kết cấu đối đáp giao duyên "Mình - Ta" của ca dao dân ca.',
    dominantTone: 'Ngọt ngào, tâm tình, tha thiết xen lẫn hào hùng sử thi',
    coreRhetoricalDevices: ['Hoán dụ ("Áo chàm")', 'Điệp từ "nhớ"', 'So sánh ("Nhớ gì như nhớ người yêu")', 'Phép đối cảnh - người trong tranh tứ bình', 'Nói quá ("Bước chân nát đá")'],
    keyExpressionValue: 'Biểu đạt đạo lý "Uống nước nhớ nguồn" và nghĩa tình cách mạng thủy chung giữa cán bộ về xuôi với đồng bào chiến khu Việt Bắc.'
  },
  'dat-nuoc': {
    workId: 'dat-nuoc',
    title: 'Đất Nước',
    author: 'Nguyễn Khoa Điềm',
    year: '1971',
    genreLabel: 'Thơ Tự do (Trường ca)',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Nghị luận', 'Tự sự', 'Miêu tả'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Chính luận - Trữ tình)',
    formAndStructure: 'Thơ tự do trích Chương V trường ca "Mặt đường khát vọng", kết cấu lập luận 2 phần: cảm nhận Đất Nước đa chiều và tư tưởng Đất Nước của Nhân dân.',
    dominantTone: 'Suy tư, triết luận sâu lắng kết hợp tâm tình trò chuyện (Anh - Em)',
    coreRhetoricalDevices: ['Điệp ngữ ("Đất Nước...", "Phải biết...")', 'Chiết tự ("Đất - Nước")', 'Chuyển hóa chất liệu văn hóa dân gian (ca dao, cổ tích, phong tục)', 'Ẩn dụ ("máu xương")'],
    keyExpressionValue: 'Biểu đạt tư tưởng cốt lõi: Đất Nước bắt nguồn từ những điều bình dị nhất và do chính Nhân dân lao động kiến tạo nên.'
  },
  'song': {
    workId: 'song',
    title: 'Sóng',
    author: 'Xuân Quỳnh',
    year: '1967',
    genreLabel: 'Thơ 5 chữ (Ngũ ngôn)',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Miêu tả', 'Tự sự'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Thơ 5 chữ (9 khổ, riêng khổ 5 mở rộng 6 câu), kết cấu song hành hai hình tượng ẩn dụ sóng đôi "Sóng" và "Em".',
    dominantTone: 'Tha thiết, nồng nàn, đằm thắm nữ tính và giàu suy tư',
    coreRhetoricalDevices: ['Ẩn dụ song hành (Sóng - Em)', 'Tương phản đối lập ("Dữ dội - dịu êm")', 'Điệp cấu trúc', 'Nhân hóa', 'Câu hỏi tu từ'],
    keyExpressionValue: 'Biểu đạt vẻ đẹp tâm hồn người phụ nữ trong tình yêu: vừa truyền thống thủy chung vừa hiện đại, chủ động khát khao hóa thân bất tử.'
  },
  'dan-ghi-ta-cua-lorca': {
    workId: 'dan-ghi-ta-cua-lorca',
    title: 'Đàn ghi ta của Lor-ca',
    author: 'Thanh Thảo',
    year: '1979',
    genreLabel: 'Thơ Tự do (Tượng trưng - Siêu thực)',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Tự sự', 'Miêu tả'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật hiện đại',
    formAndStructure: 'Thơ tự do không viết hoa đầu dòng, không dấu chấm câu, cấu trúc giao hưởng âm nhạc kết hợp chuỗi âm thanh "li-la li-la".',
    dominantTone: 'Bi tráng, xót thương, ngưỡng vọng và giàu chất triết luận',
    coreRhetoricalDevices: ['Ẩn dụ chuyển đổi cảm giác ("tiếng đàn bọt nước", "tiếng ghi-ta nâu/xanh/ròng ròng máu chảy")', 'Hoán dụ ("áo choàng đỏ gắt")', 'So sánh ("như cỏ mọc hoang")', 'Biểu tượng siêu thực'],
    keyExpressionValue: 'Biểu đạt hình tượng bi tráng của nghệ sĩ Lor-ca và khẳng định sức sống bất diệt của cái Đẹp, của nghệ thuật chân chính trước bạo tàn.'
  },
  'dat-nuoc-nguyen-dinh-thi': {
    workId: 'dat-nuoc-nguyen-dinh-thi',
    title: 'Đất nước (Nguyễn Đình Thi)',
    author: 'Nguyễn Đình Thi',
    year: '1948 - 1955',
    genreLabel: 'Thơ Tự do',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Miêu tả', 'Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Thơ tự do chia 2 phần: Mùa thu Hà Nội trong hoài niệm - hiện tại và hình tượng Đất nước đau thương vùng đứng dậy "rũ bùn đứng dậy sáng lòa".',
    dominantTone: 'Lắng đọng, thiết tha ở phần đầu; hào sảng, tráng lệ ở phần sau',
    coreRhetoricalDevices: ['Tương phản (Đau thương >< Quật khởi)', 'Nhân hóa ("Rừng tre phấp phới", "Đất nước đứng lên")', 'Ẩn dụ tượng trưng ("Rũ bùn đứng dậy sáng lòa")'],
    keyExpressionValue: 'Biểu đạt niềm tự hào làm chủ đất nước và sức mạnh quật khởi phi thường của dân tộc Việt Nam trong kháng chiến chống Pháp.'
  },
  'vo-chong-a-phu': {
    workId: 'vo-chong-a-phu',
    title: 'Vợ chồng A Phủ',
    author: 'Tô Hoài',
    year: '1952',
    genreLabel: 'Truyện ngắn hiện thực',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Trần thuật ngôi thứ 3 với điểm nhìn linh hoạt nhập vào nội tâm nhân vật Mị; cấu trúc 2 phần (ở Hồng Ngài và ở Phiềng Sa).',
    dominantTone: 'Trầm buồn, xót thương kết hợp hào sảng, ấm áp nhân văn',
    coreRhetoricalDevices: ['Chi tiết biểu tượng (tảng đá, căn buồng lỗ vuông, tiếng sáo, dòng nước mắt A Phủ)', 'Tương phản', 'Độc thoại nội tâm', 'Miêu tả phong tục Tây Bắc'],
    keyExpressionValue: 'Biểu đạt quá trình thức tỉnh sức sống tiềm tàng và khát vọng tự do mãnh liệt của người lao động miền núi dưới ách thống trị phong kiến - thực dân.'
  },
  'vo-nhat': {
    workId: 'vo-nhat',
    title: 'Vợ nhặt',
    author: 'Kim Lân',
    year: '1954',
    genreLabel: 'Truyện ngắn hiện thực nhân đạo',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (đậm khẩu ngữ Bắc Bộ)',
    formAndStructure: 'Trần thuật ngôi thứ 3 xoay quanh tình huống truyện độc đáo "nhặt vợ" giữa nạn đói Ất Dậu 1945; vận động từ bóng tối cái chết đến ánh sáng tương lai.',
    dominantTone: 'Bi hài đan xen, mộc mạc, hóm hỉnh mà xúc động nghẹn ngào',
    coreRhetoricalDevices: ['Tình huống truyện nghịch lý (Bi - Hài)', 'Đối lập (Sự sống >< Cái chết)', 'Chi tiết nghệ thuật đắt giá (bốn bát bánh đúc, nồi cháo cám, lá cờ đỏ)'],
    keyExpressionValue: 'Biểu đạt giá trị nhân đạo sâu sắc: dù ở bên bờ vực cái chết, con người vẫn khao khát sống, yêu thương đùm bọc nhau và tin vào tương lai.'
  },
  'chiec-thuyen-ngoai-xa': {
    workId: 'chiec-thuyen-ngoai-xa',
    title: 'Chiếc thuyền ngoài xa',
    author: 'Nguyễn Minh Châu',
    year: '1983',
    genreLabel: 'Truyện ngắn thế sự - triết lý',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm', 'Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Trần thuật ngôi thứ nhất (qua điểm nhìn nghệ sĩ Phùng), xây dựng trên tình huống nhận thức với hai phát hiện đối lập trên bãi biển và cuộc đối thoại ở tòa án.',
    dominantTone: 'Chiêm nghiệm, trăn trở, giàu tính triết luận và nhân bản',
    coreRhetoricalDevices: ['Tình huống nhận thức tương phản', 'Hình ảnh biểu tượng đa nghĩa (chiếc thuyền ngoài xa, sương mai hồng, tấm ảnh lịch)', 'Đối thoại triết lý'],
    keyExpressionValue: 'Biểu đạt bài học nhìn nhận cuộc sống và con người đa diện, nhiều chiều; khẳng định nghệ thuật chân chính không thể tách rời hiện thực đời sống.'
  },
  'rung-xa-nu': {
    workId: 'rung-xa-nu',
    title: 'Rừng xà nu',
    author: 'Nguyễn Trung Thành',
    year: '1965',
    genreLabel: 'Truyện ngắn sử thi',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Đậm khuynh hướng Sử thi)',
    formAndStructure: 'Kết cấu vòng tròn đầu cuối tương ứng (hình ảnh rừng xà nu) và truyện lồng trong truyện (lời kể của cụ Mết trong một đêm bên bếp lửa).',
    dominantTone: 'Trang trọng, hào hùng, bi tráng, ngợi ca sử thi',
    coreRhetoricalDevices: ['Ẩn dụ - Biểu tượng song hành (Cây xà nu - Con người làng Xô Man)', 'Nhân hóa kỳ vĩ', 'Đối lập', 'Điệp cấu trúc sử thi'],
    keyExpressionValue: 'Biểu đạt sức sống bất diệt của đồng bào Tây Nguyên và chân lý thời đại: phải cầm vũ khí đứng lên chống lại bạo lực xâm lược.'
  },
  'nhung-dua-con-trong-gia-dinh': {
    workId: 'nhung-dua-con-trong-gia-dinh',
    title: 'Những đứa con trong gia đình',
    author: 'Nguyễn Thi',
    year: '1966',
    genreLabel: 'Truyện ngắn kháng chiến',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Khẩu ngữ Nam Bộ)',
    formAndStructure: 'Trần thuật theo dòng ý thức, hồi tưởng đứt nối chập chờn của nhân vật Việt khi bị thương nằm lại chiến trường.',
    dominantTone: 'Hồn hậu, mộc mạc, bi hùng và thắm đượm tình cảm gia đình',
    coreRhetoricalDevices: ['Ẩn dụ "Dòng sông truyền thống"', 'Chi tiết cuốn sổ gia đình & khiêng bàn thờ má', 'Trần thuật dòng ý thức'],
    keyExpressionValue: 'Biểu đạt sự hòa quyện máu thịt giữa truyền thống gia đình và tình yêu Tổ quốc của những con người Nam Bộ kiên trung.'
  },
  'nguoi-lai-do-song-da': {
    workId: 'nguoi-lai-do-song-da',
    title: 'Người lái đò Sông Đà',
    author: 'Nguyễn Tuân',
    year: '1960',
    genreLabel: 'Tùy bút',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Miêu tả', 'Tự sự', 'Thuyết minh'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Tài hoa - Uyên bác)',
    formAndStructure: 'Thể loại tùy bút phóng túng xoay quanh cái Tôi tài hoa uyên bác, khắc họa đối sánh Sông Đà (hung bạo - trữ tình) và Ông lái đò (nghệ sĩ vượt thác).',
    dominantTone: 'Say đắm, hào hứng, gân guốc mà lãng mạn thi vị',
    coreRhetoricalDevices: ['Nhân hóa (Sông Đà như kẻ thù số 1 & cố nhân)', 'So sánh liên tưởng đa ngành (quân sự, võ thuật, điện ảnh, hội họa)', 'Trùng điệp thanh điệu'],
    keyExpressionValue: 'Biểu đạt vẻ đẹp kỳ vĩ, thơ mộng của thiên nhiên Tây Bắc và tôn vinh "chất vàng mười" của người lao động mới.'
  },
  'ai-da-dat-ten-cho-dong-song': {
    workId: 'ai-da-dat-ten-cho-dong-song',
    title: 'Ai đã đặt tên cho dòng sông?',
    author: 'Hoàng Phủ Ngọc Tường',
    year: '1981',
    genreLabel: 'Bút ký trữ tình',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Miêu tả', 'Tự sự', 'Thuyết minh'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật kết hợp Khoa học - Lịch sử',
    formAndStructure: 'Bút ký văn hóa - lịch sử - địa lý theo hành trình dòng chảy sông Hương từ thượng nguồn Trường Sơn, qua thành phố Huế ra biển cả.',
    dominantTone: 'Tài hoa, mê đắm, trầm mặc và giàu chất triết lý - thi ca',
    coreRhetoricalDevices: ['Nhân hóa (Cô gái Digan, người tình dịu dàng chung thủy)', 'So sánh duy mỹ ("điệu slow tình cảm", "tiếng vâng không nói ra")', 'Liên tưởng văn hóa - lịch sử'],
    keyExpressionValue: 'Biểu đạt vẻ đẹp đa chiều của dòng sông Hương như biểu tượng cho vẻ đẹp thiên nhiên, lịch sử và tâm hồn văn hóa cố đô Huế.'
  },
  'hon-truong-ba-da-hang-thit': {
    workId: 'hon-truong-ba-da-hang-thit',
    title: 'Hồn Trương Ba, da hàng thịt',
    author: 'Lưu Quang Vũ',
    year: '1981',
    genreLabel: 'Kịch nói hiện đại',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Biểu cảm', 'Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Ngôn ngữ Đối thoại kịch)',
    formAndStructure: 'Đoạn trích cảnh VII và màn kết vở kịch; cấu trúc xung đột kịch leo thang qua 3 cuộc đối thoại: Hồn - Xác, Trương Ba - Người thân, Trương Ba - Đế Thích.',
    dominantTone: 'Kịch tính, căng thẳng, triết luận sâu sắc xen lẫn trữ tình ở màn kết',
    coreRhetoricalDevices: ['Tương phản nhị nguyên (Hồn thanh cao >< Xác phàm tục)', 'Đối thoại và độc thoại triết học', 'Biểu tượng vườn cây xanh và quả na ở cảnh kết'],
    keyExpressionValue: 'Biểu đạt thông điệp nhân sinh sâu sắc: Con người phải được sống là chính mình toàn vẹn, hài hòa giữa tâm hồn và thể xác.'
  },
  'tuyen-ngon-doc-lap': {
    workId: 'tuyen-ngon-doc-lap',
    title: 'Tuyên ngôn Độc lập',
    author: 'Hồ Chí Minh',
    year: '1945',
    genreLabel: 'Văn chính luận (Tuyên ngôn)',
    primaryExpression: 'Nghị luận',
    combinedExpressions: ['Biểu cảm', 'Tự sự'],
    languageStyle: 'Phong cách ngôn ngữ Chính luận',
    formAndStructure: 'Kết cấu chính luận 3 phần chặt chẽ: Cơ sở pháp lý (trích Tuyên ngôn Mỹ - Pháp) -> Cơ sở thực tiễn (tố cáo tội ác Pháp & chính nghĩa Việt Nam) -> Lời tuyên bố độc lập.',
    dominantTone: 'Đanh thép, hùng hồn, khúc chiết, giàu sức thuyết phục và lay động',
    coreRhetoricalDevices: ['Lập luận "Gậy ông đập lưng ông"', 'Điệp cấu trúc ("Chúng...", "Một dân tộc...")', 'Liệt kê chứng cứ lịch sử xác thực', 'Câu văn khẳng định đanh thép'],
    keyExpressionValue: 'Biểu đạt ý chí độc lập tự do sắt đá của dân tộc Việt Nam và khai sinh nước Việt Nam Dân chủ Cộng hòa trước toàn thế giới.'
  },
  'ong-gia-va-bien-ca': {
    workId: 'ong-gia-va-bien-ca',
    title: 'Ông già và biển cả',
    author: 'Ernest Hemingway',
    year: '1952',
    genreLabel: 'Tiểu thuyết (Văn học nước ngoài)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Nguyên lý Tảng băng trôi)',
    formAndStructure: 'Trần thuật ngôi thứ 3 kết hợp độc thoại nội tâm của ông lão Xan-ti-a-gô trong cuộc săn đuổi con cá kiếm khổng lồ suốt 3 ngày đêm.',
    dominantTone: 'Hàm súc, kiệm lời nhưng ẩn chứa nội lực kiêu hùng, bi tráng',
    coreRhetoricalDevices: ['Nguyên lý "Tảng băng trôi" (1 phần nổi, 7 phần chìm)', 'Hình tượng biểu tượng đa nghĩa (Ông lão, Cá kiếm, Cá mập, Giấc mơ sư tử)', 'Độc thoại nội tâm'],
    keyExpressionValue: 'Biểu đạt tuyên ngôn bất hủ về phẩm giá con người: "Con người có thể bị hủy diệt nhưng không thể bị đánh bại".'
  },
  'thuoc': {
    workId: 'thuoc',
    title: 'Thuốc',
    author: 'Lỗ Tấn',
    year: '1919',
    genreLabel: 'Truyện ngắn (Văn học nước ngoài)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Kết cấu 4 phần theo trình tự thời gian - không gian (Pháp trường -> Quán trà -> Nghĩa địa) với hai tuyến nhân vật song hành (Thằng Thuyên - Hạ Du).',
    dominantTone: 'Trầm uất, lạnh lùng giải phẫu nhưng chất chứa nỗi đau thương trắc ẩn',
    coreRhetoricalDevices: ['Biểu tượng đa tầng (Chiếc bánh bao tẩm máu, Vòng hoa trên mộ, Con đường mòn nghĩa địa, Con quạ)', 'Tương phản', 'Không gian nghệ thuật quán trà'],
    keyExpressionValue: 'Biểu đạt nỗi đau trước căn bệnh u mê, vô cảm của quốc dân và niềm hy vọng thức tỉnh dân tộc.'
  },
  'xuan-toc-do-cuu-quoc': {
    workId: 'xuan-toc-do-cuu-quoc',
    title: 'Xuân Tóc Đỏ cứu quốc (Trích Số đỏ)',
    author: 'Vũ Trọng Phụng',
    year: '1936',
    genreLabel: 'Tiểu thuyết trào phúng (Bài 1)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Trào phúng hiện thực)',
    formAndStructure: 'Đoạn trích chương XX tiểu thuyết "Số đỏ", xoay quanh trận đấu quần vợt ngoại giao và màn diễn thuyết của Xuân Tóc Đỏ.',
    dominantTone: 'Châm biếm sâu cay, mỉa mai, hài hước và đả kích quyết liệt',
    coreRhetoricalDevices: ['Nói mỉa', 'Nghịch ngữ ("Sự đại bại vạn tuế!")', 'Cường điệu - phóng đại', 'Tình huống trào phúng nghịch lý'],
    keyExpressionValue: 'Biểu đạt sự lố bịch, bịp bợm của xã hội thượng lưu "Âu hóa" và sự mù quáng của đám đông.'
  },
  'mua-la-rung-trong-vuon': {
    workId: 'mua-la-rung-trong-vuon',
    title: 'Mùa lá rụng trong vườn',
    author: 'Ma Văn Kháng',
    year: '1985',
    genreLabel: 'Tiểu thuyết thế sự (Bài 1)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm', 'Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Trần thuật ngôi thứ 3 đa điểm nhìn, tập trung vào không gian chiều 30 Tết trong gia đình ông Bằng.',
    dominantTone: 'Trầm ấm, suy tư, hoài niệm và đượm nỗi trăn trở nhân văn',
    coreRhetoricalDevices: ['Độc thoại nội tâm', 'Điểm nhìn trần thuật dịch chuyển linh hoạt', 'Biểu tượng "mùa lá rụng"'],
    keyExpressionValue: 'Biểu đạt vẻ đẹp thiêng liêng của nếp nhà truyền thống và nỗi lo âu trước sự biến động đạo đức thời kỳ Đổi mới.'
  },
  'cam-hoai': {
    workId: 'cam-hoai',
    title: 'Cảm hoài (Nỗi lòng)',
    author: 'Đặng Dung',
    year: 'Đầu TK XV',
    genreLabel: 'Thơ thất ngôn bát cú Đường luật (Bài 2)',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Miêu tả', 'Tự sự'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Thơ chữ Hán trung đại)',
    formAndStructure: 'Thơ thất ngôn bát cú Đường luật (Đề - Thực - Luận - Kết) với phép đối chuẩn mực ở bốn câu giữa.',
    dominantTone: 'Bi tráng, hào hùng, uất nghẹn mà kiêu hãnh',
    coreRhetoricalDevices: ['Đối lập (Thời lai - Vận khứ)', 'Điển cố (Đồ điếu, Long Tuyền)', 'Cường điệu mang tầm vóc vũ trụ (Phù địa trục, Vãn thiên hà)'],
    keyExpressionValue: 'Biểu đạt chí khí quật cường và bi kịch lỡ vận của người anh hùng đầu bạc mài gươm dưới ánh trăng.'
  },
  'nhin-ve-von-van-hoa-dan-toc': {
    workId: 'nhin-ve-von-van-hoa-dan-toc',
    title: 'Nhìn về vốn văn hóa dân tộc',
    author: 'Trần Đình Hượu',
    year: '1986',
    genreLabel: 'Văn bản nghị luận văn hóa (Bài 3)',
    primaryExpression: 'Nghị luận',
    combinedExpressions: ['Thuyết minh', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Chính luận - Khoa học',
    formAndStructure: 'Hệ thống luận điểm phân tích từng lĩnh vực (tôn giáo, nghệ thuật, ứng xử, lý tưởng nhân sinh) rồi khái quát bản sắc văn hóa Việt.',
    dominantTone: 'Điềm đạm, khách quan, khoa học và sâu sắc',
    coreRhetoricalDevices: ['Lập luận phân tích - tổng hợp', 'So sánh đối chiếu', 'Liệt kê luận cứ đa diện'],
    keyExpressionValue: 'Biểu đạt diện mạo tinh thần văn hóa truyền thống Việt Nam: thiết thực, linh hoạt, dung hợp và trọng tình nghĩa.'
  },
  'nang-luc-sang-tao': {
    workId: 'nang-luc-sang-tao',
    title: 'Năng lực sáng tạo',
    author: 'Phan Đình Diệu',
    year: '1993',
    genreLabel: 'Văn bản nghị luận xã hội - khoa học (Bài 3)',
    primaryExpression: 'Nghị luận',
    combinedExpressions: ['Thuyết minh'],
    languageStyle: 'Phong cách ngôn ngữ Chính luận',
    formAndStructure: 'Kết cấu lập luận chặt chẽ: Giải thích khái niệm sáng tạo -> Phân tích vai trò và điều kiện -> Liên hệ thực tiễn đất nước.',
    dominantTone: 'Khúc chiết, mạch lạc, giàu tính đối thoại và khích lệ tư duy',
    coreRhetoricalDevices: ['Lập luận giải thích - chứng minh', 'Phản biện bác bỏ quan niệm hẹp hòi', 'Điệp cấu trúc nhấn mạnh'],
    keyExpressionValue: 'Biểu đạt tầm quan trọng sống còn của năng lực sáng tạo và tư duy độc lập trong kỷ nguyên tri thức.'
  },
  'may-y-nghi-ve-tho': {
    workId: 'may-y-nghi-ve-tho',
    title: 'Mấy ý nghĩ về thơ',
    author: 'Nguyễn Đình Thi',
    year: '1949',
    genreLabel: 'Tiểu luận phê bình văn học (Bài 3)',
    primaryExpression: 'Nghị luận',
    combinedExpressions: ['Biểu cảm', 'Miêu tả'],
    languageStyle: 'Phong cách ngôn ngữ Chính luận - Nghệ thuật',
    formAndStructure: 'Tiểu luận phê bình kết hợp giữa hệ thống luận điểm lý luận và những liên tưởng, dẫn chứng thơ ca giàu cảm xúc.',
    dominantTone: 'Tâm tình, tài hoa, sâu lắng mà sắc sảo',
    coreRhetoricalDevices: ['Ẩn dụ lý luận ("tiếng nói đầu tiên", "khoảng lặng giữa các chữ")', 'So sánh nghệ thuật', 'Câu hỏi tu từ'],
    keyExpressionValue: 'Biểu đạt bản chất thẩm mỹ của thơ ca: tiếng nói rung động trực tiếp của tâm hồn gắn liền với cuộc sống.'
  },
  'hai-khau-linh-tu': {
    workId: 'hai-khau-linh-tu',
    title: 'Hải khẩu linh từ - Đền thiêng cửa bể',
    author: 'Đoàn Thị Điểm',
    year: 'Thế kỷ XVIII',
    genreLabel: 'Truyện truyền kỳ trung đại (Bài 4)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Truyền kỳ chữ Hán)',
    formAndStructure: 'Kết cấu truyện truyền kỳ theo 3 chặng: Cuộc đời thực và "Kê minh thập sách" -> Hy sinh tại cửa biển -> Hiển linh nơi thế giới kì ảo.',
    dominantTone: 'Trang trọng, ngưỡng mộ, kỳ ảo và bi tráng',
    coreRhetoricalDevices: ['Yếu tố kì ảo đan xen lịch sử', 'Sử dụng điển cố, điển tích', 'Ngôn ngữ biền ngẫu và thơ ca đan cài'],
    keyExpressionValue: 'Biểu đạt vẻ đẹp trí tuệ, phẩm tiết trung liệt của bà Nguyễn Thị Bích Châu và khát vọng công lý của nhân dân.'
  },
  'muoi-cua-rung': {
    workId: 'muoi-cua-rung',
    title: 'Muối của rừng',
    author: 'Nguyễn Huy Thiệp',
    year: '1986',
    genreLabel: 'Truyện ngắn đương đại (Bài 4)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm', 'Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Truyện ngắn theo hành trình nhận thức của ông Diểu trong một buổi sáng mùa xuân đi săn, kết thúc bằng biểu tượng hoa tử huyền.',
    dominantTone: 'Tỉnh táo, triết luận nhưng thấm đẫm lòng trắc ẩn và chất thơ',
    coreRhetoricalDevices: ['Yếu tố kì ảo ("hoa tử huyền" 30 năm nở một lần)', 'Biểu tượng đa nghĩa ("Muối của rừng", sự trần truồng)', 'Tương phản tâm lý'],
    keyExpressionValue: 'Biểu đạt sự thức tỉnh lương tri, lòng nhân ái và thông điệp hòa giải sinh thái giữa con người với tự nhiên.'
  },
  'nhan-vat-quan-trong': {
    workId: 'nhan-vat-quan-trong',
    title: 'Nhân vật quan trọng (Trích Quan thanh tra)',
    author: 'Nikolai Gogol',
    year: '1836',
    genreLabel: 'Hài kịch cổ điển Nga (Bài 5)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Biểu cảm', 'Miêu tả'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Ngôn ngữ kịch trào phúng)',
    formAndStructure: 'Đoạn trích Hồi III vở hài kịch "Quan thanh tra", xoay quanh màn khoác lác của Khlestakov trước đám quan chức địa phương.',
    dominantTone: 'Hài hước, châm biếm sâu cay ("Cười qua nước mắt")',
    coreRhetoricalDevices: ['Tình huống hài kịch nhận lầm', 'Thủ pháp phóng đại tăng tiến', 'Ngôn ngữ đối thoại và bàng thoại (nói riêng)'],
    keyExpressionValue: 'Biểu đạt tiếng cười phanh phui thói khoác lác háo danh và bộ máy quan liêu tham nhũng, khiếp nhược.'
  },
  'giau-cua': {
    workId: 'giau-cua',
    title: 'Giấu của (Trích hài kịch Quẫn)',
    author: 'Lộng Chương',
    year: '1960',
    genreLabel: 'Hài kịch hiện đại Việt Nam (Bài 5)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Biểu cảm', 'Miêu tả'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Kịch nói)',
    formAndStructure: 'Đoạn trích xung đột cao trào trong gia đình tư sản Đại Cát khi tìm mọi cách tẩu tán vàng bạc trước công tư hợp doanh.',
    dominantTone: 'Trào lộng, rộn rã, mỉa mai sắc sảo',
    coreRhetoricalDevices: ['Hành động kịch nghịch dị (quấn vàng lên người mẹ già)', 'Đối thoại giàu tính khẩu ngữ', 'Tương phản giữa bề ngoài đạo lý và lòng tham'],
    keyExpressionValue: 'Biểu đạt sự "quẫn" về tinh thần và sự tha hóa tình thân khi con người làm nô lệ cho đồng tiền.'
  },
  'tac-gia-ho-chi-minh': {
    workId: 'tac-gia-ho-chi-minh',
    title: 'Tác gia Hồ Chí Minh',
    author: 'Hồ Chí Minh',
    year: '1919 - 1969',
    genreLabel: 'Bài học Khái quát Tác gia (Bài 6)',
    primaryExpression: 'Thuyết minh',
    combinedExpressions: ['Nghị luận', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Khoa học - Chính luận',
    formAndStructure: 'Tổng quan tiểu sử -> Quan điểm sáng tác -> Di sản văn học (Chính luận, Truyện kí, Thơ ca) -> Phong cách nghệ thuật.',
    dominantTone: 'Trang trọng, chuẩn mực, truyền cảm hứng văn hóa',
    coreRhetoricalDevices: ['Hệ thống hóa lịch sử văn học', 'Phân tích - tổng hợp', 'Trích dẫn tiêu biểu'],
    keyExpressionValue: 'Biểu đạt tầm vóc tư tưởng "Văn hóa phải soi đường cho quốc dân đi" và phong cách nghệ thuật đa dạng mà thống nhất của Hồ Chí Minh.'
  },
  'mo-nguyen-tieu': {
    workId: 'mo-nguyen-tieu',
    title: 'Mộ (Chiều tối); Nguyên tiêu (Rằm tháng Giêng)',
    author: 'Hồ Chí Minh',
    year: '1942 & 1948',
    genreLabel: 'Thơ tứ tuyệt chữ Hán (Bài 6)',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Miêu tả', 'Tự sự'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Hai bài thơ thất ngôn tứ tuyệt Đường luật chữ Hán (Khai - Thừa - Chuyển - Hợp).',
    dominantTone: 'Thanh cao, ấm áp, ung dung tự tại, hòa quyện cổ điển và hiện đại',
    coreRhetoricalDevices: ['Điệp liên hoàn ("ma bao túc", điệp từ "xuân")', 'Nhãn tự ("hồng", "mãn")', 'Bút pháp chấm phá tả cảnh ngụ tình'],
    keyExpressionValue: 'Biểu đạt tình yêu thiên nhiên, lòng nhân ái với người lao động và tinh thần lạc quan cách mạng của Bác Hồ.'
  },
  'nhung-tro-lo-va-ren-phan-boi-chau': {
    workId: 'nhung-tro-lo-va-ren-phan-boi-chau',
    title: 'Những trò lố hay là Va-ren và Phan Bội Châu',
    author: 'Hồ Chí Minh',
    year: '1925',
    genreLabel: 'Truyện ngắn trào phúng hiện đại (Bài 6)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm', 'Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật - Chính luận',
    formAndStructure: 'Truyện ngắn hiện đại viết bằng tiếng Pháp, xây dựng trên trục đối lập hoàn toàn giữa Toàn quyền Va-ren và cụ Phan Bội Châu.',
    dominantTone: 'Châm biếm sắc bén đối với kẻ thù và ngưỡng mộ trang nghiêm đối với bậc anh hùng',
    coreRhetoricalDevices: ['Tương phản - đối lập gay gắt', 'Nói mỉa, châm biếm', 'Chi tiết nghệ thuật đắt giá (Sự im lặng, cái nhếch mép)'],
    keyExpressionValue: 'Biểu đạt sự bỉ ổi của thực dân Pháp và khí phách bất khuất kiên trung của nhà yêu nước Phan Bội Châu.'
  },
  'nghe-thuat-bam-thit-ga': {
    workId: 'nghe-thuat-bam-thit-ga',
    title: 'Nghệ thuật băm thịt gà (Trích Việc làng)',
    author: 'Ngô Tất Tố',
    year: '1940',
    genreLabel: 'Phóng sự văn học (Bài 7)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Thuyết minh', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật - Báo chí (Phóng sự)',
    formAndStructure: 'Phóng sự điều tra thực tế chốn đình trung qua điểm nhìn của nhân vật "tôi" quan sát anh Lăng chia một con gà thành 23 cỗ.',
    dominantTone: 'Khách quan, hóm hỉnh mà chua chát, xót xa',
    coreRhetoricalDevices: ['Miêu tả cận cảnh tỉ mỉ', 'Nói mỉa (gọi việc chia cỗ phục dịch là "nghệ thuật")', 'Kết hợp sự thật tư liệu và bình luận'],
    keyExpressionValue: 'Biểu đạt sự thật nhức nhối về hủ tục đình đám, ngôi thứ đè nặng lên thân phận người nông dân trước năm 1945.'
  },
  'buoc-vao-doi': {
    workId: 'buoc-vao-doi',
    title: 'Bước vào đời (Trích Nhớ nghĩ chiều hôm)',
    author: 'Đào Duy Anh',
    year: '1972',
    genreLabel: 'Hồi kí văn học - lịch sử (Bài 7)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Biểu cảm', 'Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Hồi kí phi hư cấu)',
    formAndStructure: 'Hồi kí trần thuật ngôi thứ nhất ("tôi"), tái hiện những năm tháng tuổi trẻ 1925–1926 dấn thân vào phong trào yêu nước và báo chí ở Huế.',
    dominantTone: 'Chân thành, điềm đạm, giàu suy tư lịch sử và nhiệt huyết tuổi trẻ',
    coreRhetoricalDevices: ['Trần thuật phi hư cấu xác thực', 'Điểm nhìn kép (người già nhớ về tuổi trẻ)', 'Kết hợp tự sự và chiêm nghiệm'],
    keyExpressionValue: 'Biểu đạt khát vọng chọn lẽ sống cao đẹp, gắn bó cuộc đời cá nhân với vận mệnh văn hóa dân tộc của người trí thức trẻ.'
  },
  'pa-ra-na': {
    workId: 'pa-ra-na',
    title: 'Pa-ra-ma / Pa-ra-na (Trích Nhiệt đới buồn)',
    author: 'Claude Lévi-Strauss',
    year: '1955',
    genreLabel: 'Văn bản thông tin - Du kí nhân học (Bài 8)',
    primaryExpression: 'Thuyết minh',
    combinedExpressions: ['Miêu tả', 'Tự sự', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Khoa học - Nghệ thuật',
    formAndStructure: 'Văn bản thông tin tổng hợp dữ liệu địa lý, sinh thái và dân tộc học từ chuyến khảo sát thực địa lưu vực sông Paraná.',
    dominantTone: 'Chuẩn xác khoa học kết hợp chiều sâu triết lý nhân văn',
    coreRhetoricalDevices: ['Tổ chức dữ liệu thực địa sơ cấp & thứ cấp', 'So sánh đối chiếu không gian - thời gian', 'Miêu tả giàu tính tạo hình'],
    keyExpressionValue: 'Biểu đạt bức tranh sinh thái - văn hóa vùng Paraná và lời cảnh báo nhân văn về sự biến đổi của tự nhiên trước làn sóng công nghiệp.'
  },
  'giao-duc-khai-phong-dong-kinh-nghia-thuc': {
    workId: 'giao-duc-khai-phong-dong-kinh-nghia-thuc',
    title: 'Giáo dục khai phóng ở Việt Nam nhìn từ Đông Kinh Nghĩa Thục',
    author: 'Nguyễn Nam',
    year: '2021',
    genreLabel: 'Văn bản thông tin nghiên cứu lịch sử (Bài 8)',
    primaryExpression: 'Thuyết minh',
    combinedExpressions: ['Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Khoa học',
    formAndStructure: 'Văn bản thông tin học thuật có trích dẫn nguồn, cước chú chuẩn mực, đối chiếu mô hình Đông Kinh Nghĩa Thục (1907) với giáo dục khai phóng.',
    dominantTone: 'Khách quan, chuẩn mực học thuật, tôn trọng quyền sở hữu trí tuệ',
    coreRhetoricalDevices: ['Trích dẫn dữ liệu lịch sử chuẩn xác', 'Phân tích đối chiếu khái niệm', 'Hệ thống hóa 6 phương diện cải cách'],
    keyExpressionValue: 'Biểu đạt giá trị tiên phong của trường Đông Kinh Nghĩa Thục đối với tư tưởng giáo dục khai phóng tại Việt Nam.'
  },
  'doi-muoi': {
    workId: 'doi-muoi',
    title: 'Đời muối (Trích Đời muối: Lịch sử thế giới)',
    author: 'Mark Kurlansky',
    year: '2002',
    genreLabel: 'Văn bản thông tin lịch sử thế giới (Bài 8)',
    primaryExpression: 'Thuyết minh',
    combinedExpressions: ['Tự sự', 'Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Khoa học đại chúng - Báo chí',
    formAndStructure: 'Văn bản thông tin theo lối "lịch sử vi mô", kết nối dữ liệu lịch sử, hóa học, kinh tế Đông - Tây xoay quanh hạt muối.',
    dominantTone: 'Lôi cuốn, sinh động, giàu tính khám phá tri thức',
    coreRhetoricalDevices: ['Khai thác dữ liệu liên ngành', 'Liệt kê số liệu và sự kiện lịch sử xác thực', 'Đối lập xưa - nay'],
    keyExpressionValue: 'Biểu đạt tầm vóc lớn lao của một vật phẩm bình dị (hạt muối) trong việc kiến tạo lịch sử văn minh nhân loại.'
  },
  'voi-vang': {
    workId: 'voi-vang',
    title: 'Vội vàng',
    author: 'Xuân Diệu',
    year: '1938',
    genreLabel: 'Thơ Mới tự do (Bài 9)',
    primaryExpression: 'Biểu cảm',
    combinedExpressions: ['Miêu tả', 'Nghị luận'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
    formAndStructure: 'Thơ tự do chia làm 3 mạch cảm xúc: Bức tranh thiên đường mặt đất (13 câu đầu) -> Nỗi sầu thời gian (16 câu giữa) -> Khát vọng sống vội vàng (đoạn kết).',
    dominantTone: 'Sôi nổi, đắm say, cuống quýt, vừa nồng nàn vừa triết lý',
    coreRhetoricalDevices: ['Điệp ngữ ("Tôi muốn", "Này đây", "Cho")', 'Ẩn dụ chuyển đổi cảm giác ("Tháng giêng ngon như một cặp môi gần")', 'Động từ mạnh tăng tiến ("ôm, riết, say, thâu, cắn")'],
    keyExpressionValue: 'Biểu đạt quan niệm nhân sinh mới mẻ: trân quý từng khoảnh khắc thời gian tuổi trẻ và sống tận hiến giữa cuộc đời.'
  },
  'tro-ve-hemingway': {
    workId: 'tro-ve-hemingway',
    title: 'Trở về (Trích Ông già và biển cả)',
    author: 'Ernest Hemingway',
    year: '1952',
    genreLabel: 'Tiểu thuyết hiện đại thế giới (Bài 9)',
    primaryExpression: 'Tự sự',
    combinedExpressions: ['Miêu tả', 'Biểu cảm'],
    languageStyle: 'Phong cách ngôn ngữ Nghệ thuật (Nguyên lý Tảng băng trôi)',
    formAndStructure: 'Đoạn kết tiểu thuyết "Ông già và biển cả": Cảnh ông lão Santiago trở về bến cảng, cuộc trò chuyện với cậu bé Manolin và giấc mơ sư tử.',
    dominantTone: 'Trầm tĩnh, kiệm lời mà xúc động, mang âm hưởng sử thi nhân bản',
    coreRhetoricalDevices: ['Nguyên lý "Tảng băng trôi"', 'Hình ảnh biểu tượng (vác cột buồm lên dốc, bộ xương cá kiếm 18 bộ, giấc mơ sư tử)', 'Đối thoại hàm súc'],
    keyExpressionValue: 'Biểu đạt chiến thắng tinh thần bất diệt của con người và sự truyền lửa ý chí giữa các thế hệ.'
  }
};
