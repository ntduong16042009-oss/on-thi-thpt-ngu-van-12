export interface ExamReadingQuestion {
  number: number;
  level: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng';
  points: number;
  question: string;
  answerGuide: string;
}

export interface FullReferenceExam {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  badge: string;
  durationMinutes: number;
  totalPoints: number;
  structureSummary: string;
  relatedWorkIds: string[];
  readingSection: {
    points: number;
    genreType: string;
    sourceCitation: string;
    excerptTitle: string;
    excerptContent: string;
    questions: ExamReadingQuestion[];
  };
  writingSection: {
    points: number;
    question1: {
      points: number;
      wordCount: string;
      prompt: string;
      rubricPoints: string[];
      sampleParagraph: string;
    };
    question2: {
      points: number;
      wordCount: string;
      prompt: string;
      essayOutline: {
        intro: string;
        body: string[];
        conclusion: string;
      };
      highScoreTips: string[];
      sampleOpeningAndClosing: {
        opening: string;
        closing: string;
      };
    };
  };
}

export interface FrequentExamTopic {
  id: string;
  category: 'so-sanh' | 'the-loai' | 'nlxh';
  categoryLabel: string;
  frequencyBadge: string;
  title: string;
  prompt: string;
  targetSkill: string;
  relatedWorkIds: string[];
  keyArguments: string[];
  goldenEvidence: string;
  scoringSecret: string;
}

export const FORM_COMPARISON_OVERVIEW = {
  title: 'Cấu Trúc Form Đề Thi Tốt Nghiệp THPT Hiện Nay (Chuẩn Bộ GD&ĐT)',
  totalTime: '120 phút',
  totalScore: '10,0 điểm',
  parts: [
    {
      partName: 'PHẦN I. ĐỌC HIỂU (4,0 điểm)',
      timeAllocation: '25 – 30 phút',
      details: [
        'Gồm 05 câu hỏi phân hóa theo 3 cấp độ tư duy trên ngữ liệu văn bản văn học (thơ, truyện, kí, kịch) hoặc văn bản nghị luận / thông tin.',
        'Câu 1 & Câu 2 (Nhận biết – 0,5đ × 2 = 1,0đ): Xác định dấu hiệu hình thức thể loại (thể thơ, ngôi kể, điểm nhìn, luận đề, dữ liệu sơ cấp/thứ cấp...).',
        'Câu 3 & Câu 4 (Thông hiểu – 1,0đ × 2 = 2,0đ): Phân tích tác dụng biện pháp tu từ (nói mỉa, nghịch ngữ, ẩn dụ...), ý nghĩa chi tiết tiêu biểu, mạch lập luận.',
        'Câu 5 (Vận dụng – 1,0đ): Rút ra thông điệp, bày tỏ quan điểm cá nhân hoặc liên hệ thực tiễn đời sống (viết khoảng 5 – 7 dòng).',
      ],
    },
    {
      partName: 'PHẦN II. VIẾT – CÂU 1: ĐOẠN VĂN 200 CHỮ (2,0 điểm)',
      timeAllocation: '25 phút',
      details: [
        'Dạng 1 (Khi Đọc hiểu là ngữ liệu NLXH/Thông tin): Viết đoạn văn nghị luận văn học (khoảng 200 chữ) phân tích một khía cạnh nội dung/nghệ thuật của một đoạn thơ hoặc đoạn truyện.',
        'Dạng 2 (Khi Đọc hiểu là ngữ liệu Văn học): Viết đoạn văn nghị luận xã hội (khoảng 200 chữ) về một tư tưởng đạo lý hoặc hiện tượng đời sống rút ra từ ngữ liệu đọc hiểu, HOẶC viết đoạn văn phân tích 1 khía cạnh đặc sắc của chính ngữ liệu đó.',
        'Thang điểm chuẩn: Đảm bảo hình thức đoạn văn 200 chữ (0,25đ) · Xác định đúng vấn đề nghị luận (0,25đ) · Triển khai hệ thống ý chặt chẽ, có dẫn chứng (1,0đ) · Chính tả & Sáng tạo (0,5đ).',
      ],
    },
    {
      partName: 'PHẦN II. VIẾT – CÂU 2: BÀI VĂN 600 CHỮ (4,0 điểm)',
      timeAllocation: '60 – 65 phút',
      details: [
        'Phương án A (Bài văn Nghị luận Xã hội 600 chữ – 4,0đ): Bàn về một vấn đề thiết thực gắn với tuổi trẻ (hoài bão ước mơ, bản sắc văn hóa dân tộc, làm chủ AI và công nghệ, năng lực sáng tạo, ứng xử trước thử thách).',
        'Phương án B (Bài văn Nghị luận Văn học 600 chữ – 4,0đ): Phân tích, đánh giá một tác phẩm văn học hoặc so sánh, đánh giá hai đoạn trích truyện / hai đoạn thơ.',
        'Thang điểm chuẩn: Đảm bảo bố cục 3 phần Mở - Thân - Kết (0,25đ) · Xác định đúng vấn đề (0,5đ) · Triển khai luận điểm sâu sắc, lập luận thuyết phục (2,5đ) · Chính tả & Sáng tạo (0,75đ).',
      ],
    },
  ],
};

export const FULL_REFERENCE_EXAMS: FullReferenceExam[] = [
  {
    id: 'de-tham-khao-01',
    code: 'ĐỀ SỐ 01',
    title: 'Đề Tham Khảo Chuẩn Form Mới Bộ GD&ĐT (Đọc Hiểu Thơ + Đoạn Văn NLVH 200 Chữ + Bài Văn NLXH 600 Chữ)',
    subtitle: 'Tối ưu nhất theo cấu trúc Đề tham khảo Tốt nghiệp THPT hiện hành của Bộ GD&ĐT',
    badge: 'Chuẩn Form Bộ GD&ĐT · Hay Ra Nhất',
    durationMinutes: 120,
    totalPoints: 10,
    structureSummary: 'Đọc hiểu Thơ (4,0đ) + Đoạn văn NLVH 200 chữ (2,0đ) + Bài văn NLXH Tuổi trẻ 600 chữ (4,0đ)',
    relatedWorkIds: ['tay-tien', 'cam-hoai', 'voi-vang'],
    readingSection: {
      points: 4.0,
      genreType: 'Văn bản Thơ trữ tình hiện đại',
      sourceCitation: 'Trích "Tây Tiến" – Quang Dũng (Ngữ văn 12, Bài 2: Những thế giới thơ)',
      excerptTitle: 'Đọc đoạn trích sau và thực hiện các yêu cầu:',
      excerptContent: `Tây Tiến đoàn binh không mọc tóc
Quân xanh màu lá dữ oai hùm
Mắt trừng gửi mộng qua biên giới
Đêm mơ Hà Nội dáng kiều thơm
Rải rác biên cương mồ viễn xứ
Chiến trường đi chẳng tiếc đời xanh
Áo bào thay chiếu anh về đất
Sông Mã gầm lên khúc độc hành.`,
      questions: [
        {
          number: 1,
          level: 'Nhận biết',
          points: 0.5,
          question: 'Xác định thể thơ và dấu hiệu nhận biết thể thơ của đoạn trích trên.',
          answerGuide:
            'Thể thơ: Thất ngôn (7 chữ). Dấu hiệu nhận biết: Mỗi dòng thơ đều có 7 tiếng, nhịp thơ 4/3 săn chắc, gieo vần chân linh hoạt.',
        },
        {
          number: 2,
          level: 'Nhận biết',
          points: 0.5,
          question: 'Chỉ ra những từ ngữ Hán Việt có tính chất cổ kính, trang trọng được sử dụng trong đoạn trích.',
          answerGuide:
            'Các từ Hán Việt trang trọng, cổ kính: đoàn binh, biên giới, biên cương, viễn xứ, chiến trường, áo bào, độc hành.',
        },
        {
          number: 3,
          level: 'Thông hiểu',
          points: 1.0,
          question: 'Phân tích tác dụng của biện pháp tu từ nói giảm nói tránh trong câu thơ: "Áo bào thay chiếu anh về đất".',
          answerGuide:
            '1. Chỉ ra biện pháp: Cụm từ "anh về đất" là biện pháp nói giảm nói tránh chỉ sự hy sinh của người lính Tây Tiến; kết hợp cách nói "áo bào thay chiếu" (nâng tấm áo lính sờn rách thành chiến bào sang trọng).\n2. Tác dụng nghệ thuật: Làm vơi đi cảm giác bi lụy, lạnh lẽo của cái chết nơi rừng thiêng nước độc; biến sự hy sinh thành sự hóa thân thanh thản về với đất mẹ Tổ quốc.\n3. Thái độ tác giả: Thể hiện niềm tiếc thương sâu sắc và sự trân trọng, tôn vinh bất tử hóa người đồng đội.',
        },
        {
          number: 4,
          level: 'Thông hiểu',
          points: 1.0,
          question: 'Sự kết hợp giữa hai câu thơ "Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm" thể hiện vẻ đẹp gì trong tâm hồn người lính Tây Tiến?',
          answerGuide:
            'Sự kết hợp tạo nên hai nét tính cách đối lập mà thống nhất trong tâm hồn người lính Tây Tiến:\n- "Mắt trừng gửi mộng qua biên giới": Chí khí chiến đấu quyết liệt, khát vọng lập công trừ giặc bảo vệ biên cương (vẻ đẹp anh hùng, bi tráng).\n- "Đêm mơ Hà Nội dáng kiều thơm": Trái tim hào hoa, lãng mạn, đa tình của những chàng trai trí thức Hà thành luôn nhớ về quê hương và tình yêu.\n=> Khắc họa chân thực bức chân dung người lính vừa kiên cường như tráng sĩ xưa, vừa trẻ trung, tài hoa.',
        },
        {
          number: 5,
          level: 'Vận dụng',
          points: 1.0,
          question: 'Từ câu thơ "Chiến trường đi chẳng tiếc đời xanh", anh/chị suy nghĩ gì về lý tưởng cống hiến "đời xanh" của thế hệ trẻ Việt Nam trong thời đại hòa bình hôm nay? (Trả lời khoảng 5 – 7 dòng).',
          answerGuide:
            'Học sinh trình bày suy nghĩ sâu sắc, thuyết phục:\n- Trong thời chiến, "chẳng tiếc đời xanh" là sẵn sàng hiến dâng tuổi trẻ và máu xương cho độc lập dân tộc.\n- Trong thời bình hôm nay, cống hiến "đời xanh" của người trẻ là sống có hoài bão, không ngừng học tập làm chủ khoa học - công nghệ, dấn thân sáng tạo, tình nguyện vì cộng đồng và bảo vệ chủ quyền văn hóa - lãnh thổ quốc gia.',
        },
      ],
    },
    writingSection: {
      points: 6.0,
      question1: {
        points: 2.0,
        wordCount: 'Khoảng 200 chữ',
        prompt:
          'Từ ngữ liệu phần Đọc hiểu, anh/chị hãy viết một đoạn văn nghị luận (khoảng 200 chữ) làm rõ vẻ đẹp bi tráng của hình tượng người lính Tây Tiến trong đoạn trích trên.',
        rubricPoints: [
          'Mở đoạn (0,25đ): Giới thiệu tác giả Quang Dũng, bài thơ "Tây Tiến" và khái quát vẻ đẹp bi tráng của bức tượng đài người lính trong 8 câu thơ.',
          'Thân đoạn – Ý 1 (0,5đ): Phân tích cái "Bi" nhưng không lụy (Ngoại hình tiều tụy vì sốt rét "không mọc tóc", "xanh màu lá", những nấm "mồ viễn xứ" và sự hy sinh nơi biên cương).',
          'Thân đoạn – Ý 2 (0,75đ): Phân tích cái "Tráng" hào hùng, hào hoa áp đảo cái bi ("dữ oai hùm", "mắt trừng", "dáng kiều thơm", "chẳng tiếc đời xanh", "áo bào thay chiếu" và tiếng gầm thiên nhiên Sông Mã tiễn đưa).',
          'Kết đoạn (0,5đ): Đánh giá sự kết hợp bút pháp hiện thực và lãng mạn, hệ thống từ Hán Việt cổ kính và giọng điệu trầm hùng.',
        ],
        sampleParagraph:
          'Nếu thơ ca kháng chiến chống Pháp từng khắc họa nhiều hình ảnh bộ đội bình dị, mộc mạc, thì đến với tám câu thơ trích trong "Tây Tiến", Quang Dũng đã tạc vào thế kỷ một bức tượng đài người lính mang vẻ đẹp bi tráng và hào hoa bất tử. Chất "bi" hiện lên chân thực qua hiện thực chiến trường khốc liệt: những người lính trẻ phải đối mặt với cơn sốt rét rừng làm rụng hết tóc, làn da xanh xao và cả những nấm "mồ viễn xứ" rải rác nơi biên cương. Thế nhưng, vượt lên trên mất mát, chất "tráng" kiêu hùng và lãng mạn vẫn tỏa sáng rực rỡ. Bằng thủ pháp đối lập giữa ngoại hình tiều tụy và nội lực "dữ oai hùm", kết hợp điểm nhìn cận cảnh "mắt trừng gửi mộng qua biên giới" với nỗi nhớ "dáng kiều thơm" Hà Nội, nhà thơ đã khắc họa trọn vẹn cốt cách người lính trí thức vừa uy nghi lẫm liệt, vừa nồng nàn tình tứ. Đặc biệt, ở bốn câu cuối, hệ thống từ Hán Việt cổ kính ("biên cương", "viễn xứ", "áo bào", "độc hành") cùng biện pháp nói giảm nói tránh "anh về đất" và âm hưởng dữ dội "Sông Mã gầm lên khúc độc hành" đã nâng sự hy sinh của người lính lên tầm vóc sử thi bi tráng, để lại dư âm thiêng liêng muôn đời.',
      },
      question2: {
        points: 4.0,
        wordCount: 'Khoảng 600 chữ',
        prompt:
          'Trong kỷ nguyên bùng nổ của Trí tuệ nhân tạo (AI) và công nghệ số, nhiều người lo ngại con người sẽ dần đánh mất năng lực tư duy độc lập và chiều sâu cảm xúc nhân văn. Anh/chị hãy viết một bài văn nghị luận (khoảng 600 chữ) trình bày suy nghĩ của người trẻ về vấn đề: Làm chủ công nghệ nhưng không đánh mất bản sắc và tâm hồn con người.',
        essayOutline: {
          intro:
            'Dẫn dắt từ bước tiến vũ bão của cuộc Cách mạng công nghiệp 4.0 và Trí tuệ nhân tạo (AI). Nêu vấn đề nghị luận: Người trẻ cần bản lĩnh làm chủ công nghệ hiện đại đồng thời giữ gìn tư duy sáng tạo độc lập và vẻ đẹp tâm hồn nhân văn.',
          body: [
            '1. Giải thích vấn đề: "Làm chủ công nghệ" là biến AI và thiết bị số thành công cụ phục vụ học tập, sáng tạo; "không đánh mất bản sắc và tâm hồn" là giữ vững khả năng tự tư duy, lòng trắc ẩn, sự thấu cảm và giá trị văn hóa dân tộc.',
            '2. Bàn luận – Vì sao phải vừa làm chủ công nghệ vừa giữ gìn tâm hồn? (a) Công nghệ giúp xử lý dữ liệu siêu tốc nhưng không có trái tim biết rung động hay lương tri đạo đức; (b) Nếu lệ thuộc hoàn toàn vào AI, người trẻ sẽ rơi vào "lười biếng tư duy", vô cảm trước nỗi đau đồng loại và đánh mất dấu vân tay cá nhân.',
            '3. Chứng minh thực tế: Dẫn chứng những bạn trẻ Việt Nam ứng dụng AI để phục dựng ảnh liệt sĩ, số hóa di sản văn hóa dân tộc, nghiên cứu khoa học nhưng vẫn giàu lòng nhân ái trong các hoạt động thiện nguyện.',
            '4. Mở rộng & Phản biện: Phê phán hai thái cực sai lầm — hoặc bảo thủ khước từ công nghệ mới, hoặc tôn sùng công nghệ đến mức sao chép máy móc, sống ảo vô hồn.',
            '5. Bài học nhận thức và hành động của tuổi trẻ: Rèn luyện tư duy phản biện (Critical Thinking), đọc sách sâu, nuôi dưỡng đời sống tâm hồn qua văn học - nghệ thuật và kết nối chân thành giữa người với người.',
          ],
          conclusion:
            'Khẳng định thông điệp: Trí tuệ nhân tạo có thể thông minh vượt bậc, nhưng chỉ có trí tuệ sáng tạo và trái tim nhân ái của con người mới kiến tạo nên hạnh phúc đích thực.',
        },
        highScoreTips: [
          'Liên hệ khéo léo với tư tưởng của GS. Phan Đình Diệu trong văn bản "Năng lực sáng tạo" (Bài 3 Ngữ văn 12): Máy móc chỉ thực hiện thuật toán có sẵn, còn sáng tạo vượt khung là đặc quyền của con người.',
          'Sử dụng câu văn giàu hình ảnh: "Hãy để công nghệ là đôi cánh đưa ta bay xa, nhưng lương tri và văn hóa phải là la bàn định hướng".',
        ],
        sampleOpeningAndClosing: {
          opening:
            'Đã bao giờ bạn tự hỏi: Giữa một thế giới mà những thuật toán Trí tuệ nhân tạo có thể viết văn, vẽ tranh và giải toán chỉ trong vài giây, đâu là giá trị độc bản khiến con người không thể bị thay thế? Cuộc cách mạng số mở ra chân trời tri thức vô tận, nhưng cũng đặt thế hệ trẻ trước một bài toán sống còn: Làm thế nào để làm chủ công nghệ đỉnh cao mà không đánh mất tư duy sáng tạo độc lập và vẻ đẹp ấm áp của tâm hồn con người?',
          closing:
            'Suy cho cùng, máy móc dù tối tân đến đâu cũng chỉ là tấm gương phản chiếu trí tuệ của người tạo ra nó. Thế hệ trẻ Việt Nam bước vào kỷ nguyên vươn mình của dân tộc cần mang theo một cái đầu thông thái biết điều khiển công nghệ và một trái tim nóng ấm biết rung động trước cái Đẹp, biết sẻ chia cùng con người.',
        },
      },
    },
  },
  {
    id: 'de-tham-khao-02',
    code: 'ĐỀ SỐ 02',
    title: 'Đề Tham Khảo Chuẩn Form Mới (Đọc Hiểu Truyện + Đoạn Văn NLXH 200 Chữ + Bài Văn So Sánh Hai Tác Phẩm Truyện 4,0đ)',
    subtitle: 'Bám sát trọng tâm Bài 1, Bài 4 và kỹ năng viết bài văn so sánh, đánh giá hai tác phẩm truyện',
    badge: 'Trọng Tâm Truyện & So Sánh',
    durationMinutes: 120,
    totalPoints: 10,
    structureSummary: 'Đọc hiểu Truyện hiện đại (4,0đ) + Đoạn văn NLXH 200 chữ (2,0đ) + Bài văn So sánh 2 truyện (4,0đ)',
    relatedWorkIds: ['muoi-cua-rung', 'vo-nhat', 'chiec-thuyen-ngoai-xa'],
    readingSection: {
      points: 4.0,
      genreType: 'Văn bản Truyện ngắn hiện đại có yếu tố kì ảo',
      sourceCitation: 'Trích "Muối của rừng" – Nguyễn Huy Thiệp (Ngữ văn 12, Bài 4: Yếu tố kì ảo trong truyện kể)',
      excerptTitle: 'Đọc đoạn trích sau và thực hiện các yêu cầu:',
      excerptContent: `Ông Diểu thấy buồn tê tái đến tận đáy lòng. Ông nhìn cả hai con khỉ và thấy cay cay nơi sống mũi. Hóa ra ở đời, trách nhiệm đè lên lưng mỗi sinh vật quả thực nặng nề. "Thôi tao phóng sinh cho mày!" – Ông Diểu ngồi yên một lát rồi bỗng đứng dậy nhổ chiếc khăn mặt buộc ở vết thương con khỉ đực ra. Con khỉ đực nằm im, nó nhìn ông van lơn...
Ông Diểu rẽ lối tắt đi xuống núi. Dưới chân núi, hoa tử huyền nở trắng xóa. Loài hoa này cứ ba mươi năm mới nở một lần. Người nào gặp hoa tử huyền sẽ gặp may mắn. Ông Diểu đi trong mưa xuân dịu dàng, trần truồng và cô đơn. Chỉ cách một quãng ngắn nữa thôi là ông sẽ trở về với thế giới của con người.`,
      questions: [
        {
          number: 1,
          level: 'Nhận biết',
          points: 0.5,
          question: 'Xác định ngôi kể và điểm nhìn trần thuật chủ đạo trong đoạn trích trên.',
          answerGuide:
            'Ngôi kể: Ngôi thứ ba (người kể chuyện giấu mình). Điểm nhìn trần thuật chủ đạo: Điểm nhìn bên trong gắn liền với tâm lý, cảm xúc và suy ngẫm của nhân vật ông Diểu.',
        },
        {
          number: 2,
          level: 'Nhận biết',
          points: 0.5,
          question: 'Chỉ ra chi tiết mang màu sắc kì ảo xuất hiện ở phần cuối đoạn trích.',
          answerGuide:
            'Chi tiết kì ảo: Hình ảnh "hoa tử huyền nở trắng xóa" dưới chân núi — loài hoa 30 năm mới nở một lần và mang lại điềm lành, may mắn cho người gặp nó.',
        },
        {
          number: 3,
          level: 'Thông hiểu',
          points: 1.0,
          question: 'Vì sao nhân vật ông Diểu lại quyết định "phóng sinh" cho con khỉ đực sau cuộc đi săn đầy kịch tính?',
          answerGuide:
            'Ông Diểu quyết định phóng sinh cho con khỉ đực vì:\n- Ông chứng kiến tình nghĩa vợ chồng, sự hy sinh và nỗi đau đớn của gia đình loài khỉ, từ đó nhận ra "trách nhiệm đè lên lưng mỗi sinh vật quả thực nặng nề".\n- Lòng trắc ẩn và tính thiện bản nguyên trong tâm hồn ông Diểu đã chiến thắng bản năng chinh phục bạo tàn của người thợ săn.',
        },
        {
          number: 4,
          level: 'Thông hiểu',
          points: 1.0,
          question: 'Nêu ý nghĩa biểu tượng của hình ảnh ông Diểu "đi trong mưa xuân dịu dàng, trần truồng và cô đơn" khi xuống núi.',
          answerGuide:
            '- Trở về trạng thái "trần truồng" (đã bỏ lại súng săn, quần áo): Biểu tượng cho sự rũ bỏ lớp vỏ bọc quyền lực, tham vọng và vũ khí sát thương để trở về với bản tính tự nhiên, thuần khiết của con người.\n- "Mưa xuân dịu dàng" và "hoa tử huyền": Sự gội rửa, tha thứ và ban phước của thiên nhiên dành cho con người khi biết hối cải, hướng thiện.',
        },
        {
          number: 5,
          level: 'Vận dụng',
          points: 1.0,
          question: 'Từ hành động buông súng và phóng sinh của ông Diểu, anh/chị rút ra thông điệp gì về mối quan hệ giữa con người với thiên nhiên? (Trả lời khoảng 5 – 7 dòng).',
          answerGuide:
            'Thông điệp sâu sắc:\n- Thiên nhiên không phải là đối tượng để con người tàn sát, thống trị bằng bạo lực.\n- Khi con người biết lắng nghe, thấu cảm với muôn loài và sống hòa hợp với tự nhiên, con người mới tìm thấy sự bình yên và cứu rỗi chính tâm hồn mình.',
        },
      ],
    },
    writingSection: {
      points: 6.0,
      question1: {
        points: 2.0,
        wordCount: 'Khoảng 200 chữ',
        prompt:
          'Từ nội dung đoạn trích ở phần Đọc hiểu, anh/chị hãy viết một đoạn văn nghị luận (khoảng 200 chữ) bàn về sức mạnh của lòng trắc ẩn trong việc đánh thức phần thiện lương của con người.',
        rubricPoints: [
          'Mở đoạn (0,25đ): Dẫn dắt từ giọt nước mắt cay nơi sống mũi của ông Diểu đến vai trò của lòng trắc ẩn trong đời sống con người.',
          'Giải thích & Bàn luận (1,0đ): Lòng trắc ẩn là khả năng rung cảm trước nỗi đau của sinh linh khác; chính lòng trắc ẩn giúp con người dừng lại trước cái ác, hóa giải sự ích kỷ và bạo lực.',
          'Chứng minh & Phản biện (0,5đ): Liên hệ thực tế đời sống và phê phán lối sống vô cảm, tàn nhẫn.',
          'Kết đoạn (0,25đ): Khẳng định bài học nuôi dưỡng hạt mầm thiện lương mỗi ngày.',
        ],
        sampleParagraph:
          'Khoảnh khắc nhân vật ông Diểu trong "Muối của rừng" thấy cay cay nơi sống mũi trước nỗi đau của con khỉ đực và quyết định phóng sinh đã gợi lên một chân lý nhân sinh sâu sắc: chính lòng trắc ẩn là ngọn lửa thiêng đánh thức phần thiện lương nguyên bản trong mỗi con người. Lòng trắc ẩn không phải là sự thương hại bề trên, mà là khả năng biết đau trước nỗi đau của kẻ khác, biết rung động trước sự mong manh của vạn vật. Trong cuộc sống bộn bề, đôi khi tham vọng, sự nóng giận hay thói vị kỷ khiến con người trở nên lạnh lùng, vô tâm. Thế nhưng, chỉ một ánh mắt biết thương xót, một bàn tay biết dừng lại trước tổn thương của đồng loại và tự nhiên cũng đủ kéo con người trở về với ranh giới của nhân tính. Thực tế cho thấy, từ những chiến dịch cứu trợ đồng bào vùng bão lũ đến những hành động bảo vệ động vật hoang dã, lòng trắc ẩn luôn là sợi dây gắn kết thế giới bằng tình yêu thương. Ngược lại, căn bệnh vô cảm sẽ biến tâm hồn thành hoang mạc khô cằn. Bởi vậy, nuôi dưỡng lòng trắc ẩn chính là cách mỗi chúng ta giữ cho tâm hồn mình luôn nở những đóa "hoa tử huyền" của cái Thiện.',
      },
      question2: {
        points: 4.0,
        wordCount: 'Khoảng 600 chữ',
        prompt:
          'Anh/chị hãy viết bài văn nghị luận (khoảng 600 chữ) so sánh, đánh giá vẻ đẹp nhân đạo và nghệ thuật xây dựng tình huống truyện trong hai đoạn trích: cảnh Tràng đưa người vợ nhặt về nhà trong "Vợ nhặt" (Kim Lân) và cảnh phát hiện của nghệ sĩ Phùng trên bãi biển trong "Chiếc thuyền ngoài xa" (Nguyễn Minh Châu).',
        essayOutline: {
          intro:
            'Giới thiệu Kim Lân ("Vợ nhặt" - 1945) và Nguyễn Minh Châu ("Chiếc thuyền ngoài xa" - 1983). Nêu vấn đề nghị luận: Sự tương đồng và khác biệt đầy sáng tạo trong tư tưởng nhân đạo và nghệ thuật xây dựng tình huống truyện của hai tác phẩm.',
          body: [
            '1. Phân tích ngắn gọn từng tác phẩm: (a) "Vợ nhặt": Tình huống Tràng nhặt vợ giữa nạn đói khủng khiếp năm Ất Dậu 1945, tôn vinh khát vọng sống và tình người; (b) "Chiếc thuyền ngoài xa": Tình huống nhận thức của Phùng khi bước ra từ chiếc thuyền đẹp như mơ là bi kịch bạo lực gia đình hàng chài, đòi hỏi cái nhìn đa diện về con người.',
            '2. Chỉ ra điểm tương đồng: Cả hai nhà văn đều đặt nhân vật vào hoàn cảnh nghịch lý cùng cực để làm bật lên vẻ đẹp tiềm ẩn của người lao động (bà cụ Tứ, người vợ nhặt, người đàn bà hàng chài) và đều sử dụng tình huống truyện độc đáo làm đòn bẩy tư tưởng.',
            '3. Chỉ ra điểm khác biệt & sự vận động văn học: (a) Kim Lân (văn học 1945–1975): Tình huống éo le hướng tới niềm tin đổi đời tươi sáng dưới ánh sáng cách mạng ("lá cờ đỏ sao vàng"); (b) Nguyễn Minh Châu (văn học thời kỳ Đổi mới sau 1975): Tình huống nhận thức đa chiều, đi sâu vào những nghịch lý thế sự - đời tư không dễ giải quyết một sớm một chiều.',
            '4. Đánh giá giá trị nghệ thuật: Ngôn ngữ nông thôn giản dị, hóm hỉnh của Kim Lân đối sánh với giọng điệu triết luận, chiêm nghiệm của Nguyễn Minh Châu.',
          ],
          conclusion:
            'Khẳng định cả hai kiệt tác đều là những đỉnh cao của chủ nghĩa nhân đạo trong văn xuôi Việt Nam hiện đại.',
        },
        highScoreTips: [
          'Nhấn mạnh sự chuyển dịch từ "khuynh hướng sử thi - lịch sử dân tộc" (Kim Lân) sang "cảm hứng thế sự - triết lý nhân sinh" (Nguyễn Minh Châu).',
          'Dẫn câu nói của Nam Cao ("Nghệ thuật không phải là ánh trăng lừa dối...") để làm điểm tựa lý luận.',
        ],
        sampleOpeningAndClosing: {
          opening:
            'Nhà văn Nguyễn Minh Châu từng tâm niệm: "Văn học và đời sống là hai vòng tròn đồng tâm mà tâm điểm là con người". Dù viết về cái đói quay quắt năm Ất Dậu 1945 như Kim Lân trong "Vợ nhặt", hay trăn trở trước những góc khuất nhọc nhằn của đời thường sau chiến tranh như chính Nguyễn Minh Châu trong "Chiếc thuyền ngoài xa", hai cây bút xuất sắc của văn xuôi Việt Nam hiện đại đã gặp nhau ở tấm lòng nhân đạo thẳm sâu và nghệ thuật kiến tạo tình huống truyện bậc thầy.',
          closing:
            'Khép lại trang văn của Kim Lân và Nguyễn Minh Châu, người đọc vừa ấm lòng trước ngọn lửa tình người trong túp lều đêm tân hôn ngày đói, vừa trăn trở khôn nguôi trước tấm ảnh màu hồng có bóng dáng người đàn bà vùng biển. Hai tác phẩm, hai thời đại nhưng cùng hội tụ ở sứ mệnh cao cả nhất của văn chương: nâng niu và bảo vệ con người.',
        },
      },
    },
  },
  {
    id: 'de-tham-khao-03',
    code: 'ĐỀ SỐ 03',
    title: 'Đề Tham Khảo Chuẩn Form Mới (Đọc Hiểu Nghị Luận Văn Hóa + Đoạn Văn NLVH 200 Chữ + Bài Văn NLXH 600 Chữ)',
    subtitle: 'Bám sát Bài 3 (Lập luận trong văn bản nghị luận) & Bài 2 (Thế giới thơ)',
    badge: 'Đọc Hiểu Nghị Luận · Chuẩn Mới',
    durationMinutes: 120,
    totalPoints: 10,
    structureSummary: 'Đọc hiểu Nghị luận Văn hóa (4,0đ) + Đoạn văn NLVH Thơ 200 chữ (2,0đ) + Bài văn NLXH 600 chữ (4,0đ)',
    relatedWorkIds: ['nhin-ve-von-van-hoa-dan-toc', 'dan-ghi-ta-cua-lorca', 'dat-nuoc'],
    readingSection: {
      points: 4.0,
      genreType: 'Văn bản Nghị luận văn hóa',
      sourceCitation: 'Trích "Nhìn về vốn văn hóa dân tộc" – GS. Trần Đình Hượu (Ngữ văn 12, Bài 3)',
      excerptTitle: 'Đọc đoạn trích sau và thực hiện các yêu cầu:',
      excerptContent: `Tinh thần chung của văn hóa Việt Nam là thiết thực, linh hoạt, dung hợp. Không có khát vọng đi tới những đỉnh cao chót vót, những cái phi thường, tuyệt đối, văn hóa Việt Nam hướng tới cái bình thường, cái dung dị, hiền hòa trong đời sống hàng ngày. Con người Việt Nam ưa sự vừa phải, chuộng sự hài hòa: kiến trúc không đồ sộ mà hòa vào thiên nhiên; tôn giáo không cực đoan, cuồng tín mà chung sống hòa bình trong cùng một làng quê, một mái nhà. Trong ứng xử, người Việt trọng tình nghĩa hơn lý lẽ cứng nhắc, lấy sự yên ổn, thuận hòa làm quý.`,
      questions: [
        {
          number: 1,
          level: 'Nhận biết',
          points: 0.5,
          question: 'Xác định luận đề (câu văn nêu luận điểm khái quát nhất) của đoạn trích trên.',
          answerGuide:
            'Câu văn nêu luận đề khái quát nhất ở ngay đầu đoạn: "Tinh thần chung của văn hóa Việt Nam là thiết thực, linh hoạt, dung hợp."',
        },
        {
          number: 2,
          level: 'Nhận biết',
          points: 0.5,
          question: 'Tác giả đã dẫn ra những phương diện nào của đời sống để làm sáng tỏ đặc tính "ưa sự vừa phải, chuộng sự hài hòa" của người Việt?',
          answerGuide:
            'Tác giả đã dẫn ra 3 phương diện: (1) Kiến trúc (không đồ sộ mà hòa vào thiên nhiên); (2) Tôn giáo (không cực đoan mà chung sống hòa bình); (3) Cách ứng xử (trọng tình nghĩa hơn lý lẽ cứng nhắc, lấy thuận hòa làm quý).',
        },
        {
          number: 3,
          level: 'Thông hiểu',
          points: 1.0,
          question: 'Phân tích hiệu quả của phép lập luận tương phản ("không... mà...") được sử dụng liên tiếp trong đoạn trích.',
          answerGuide:
            '- Cấu trúc tương phản ("Không có khát vọng đi tới... mà hướng tới...", "kiến trúc không đồ sộ mà hòa vào...", "tôn giáo không cực đoan mà chung sống...") giúp làm nổi bật sự khác biệt độc đáo của văn hóa Việt Nam so với các nền văn hóa chuộng sự kỳ vĩ, cực đoan.\n- Tạo nhịp điệu câu văn cân đối, lập luận chặt chẽ, khách quan và giàu sức thuyết phục.',
        },
        {
          number: 4,
          level: 'Thông hiểu',
          points: 1.0,
          question: 'Anh/chị hiểu như thế nào về đặc tính "dung hợp" của văn hóa Việt Nam được tác giả nhắc tới?',
          answerGuide:
            '"Dung hợp" là khả năng tiếp thu có chọn lọc các yếu tố văn hóa, tư tưởng, tôn giáo từ bên ngoài (Phật, Nho, Lão, văn hóa phương Tây) rồi Việt hóa, dung hòa chúng với bản sắc bản địa để cùng tồn tại hài hòa, không bài xích hay xung đột cực đoan.',
        },
        {
          number: 5,
          level: 'Vận dụng',
          points: 1.0,
          question: 'Theo anh/chị, lối ứng xử "trọng tình nghĩa hơn lý lẽ cứng nhắc" của người Việt có ưu điểm và hạn chế gì trong xã hội hiện đại ngày nay?',
          answerGuide:
            '- Ưu điểm: Tạo sự gắn kết cộng đồng ấm áp, nhân văn, giàu lòng khoan dung và tương thân tương ái.\n- Hạn chế trong xã hội hiện đại: Nếu quá thiên về "tình" ("một bồ cái lý không bằng một tí cái tình") dễ dẫn đến thói cả nể, cục bộ thân quen, xem nhẹ nguyên tắc pháp luật và kỷ cương công việc. Do đó cần kết hợp hài hòa giữa trọng tình nghĩa và thượng tôn pháp luật.',
        },
      ],
    },
    writingSection: {
      points: 6.0,
      question1: {
        points: 2.0,
        wordCount: 'Khoảng 200 chữ',
        prompt:
          'Anh/chị hãy viết một đoạn văn nghị luận (khoảng 200 chữ) phân tích vẻ đẹp của các hình ảnh biểu tượng siêu thực trong đoạn thơ sau trích từ bài "Đàn ghi ta của Lor-ca" (Thanh Thảo): "tiếng ghi ta nâu / bầu trời cô gái ấy / tiếng ghi ta lá xanh biết mấy / tiếng ghi ta tròn bọt nước vỡ tan / tiếng ghi ta ròng ròng / máu chảy".',
        rubricPoints: [
          'Mở đoạn (0,25đ): Giới thiệu Thanh Thảo, bài thơ "Đàn ghi ta của Lor-ca" và đoạn thơ khắc họa số phận tiếng đàn - số phận Lor-ca.',
          'Phân tích nội dung & nghệ thuật (1,25đ): Điệp ngữ "tiếng ghi ta" kết hợp ẩn dụ chuyển đổi cảm giác ("nâu", "lá xanh", "tròn bọt nước vỡ tan", "ròng ròng máu chảy") diễn tả tình yêu đất đai, khát vọng sự sống mãnh liệt và cái chết bi phẫn của người nghệ sĩ tự do.',
          'Kết đoạn (0,5đ): Đánh giá bút pháp tượng trưng - siêu thực hiện đại của Thanh Thảo.',
        ],
        sampleParagraph:
          'Trong thi phẩm "Đàn ghi ta của Lor-ca", nhà thơ Thanh Thảo đã sử dụng bút pháp tượng trưng - siêu thực tài hoa để biến sáu câu thơ ngắn thành một bản giao hưởng bằng hình ảnh về cuộc đời và bi kịch của thiên tài Tây Ban Nha F.G. Lor-ca. Mở đầu đoạn thơ, điệp ngữ "tiếng ghi ta" lặp lại bốn lần như những hợp âm dồn dập, kết hợp cùng nghệ thuật ẩn dụ chuyển đổi cảm giác độc đáo biến âm thanh vô hình thành những sắc màu và khối hình hữu hình. Đó là "tiếng ghi ta nâu" trầm mặc gợi màu đất đai xứ sở Andalusia, màu làn da rám nắng và đôi mắt "bầu trời cô gái ấy" của người tình thủy chung; là "tiếng ghi ta lá xanh biết mấy" tràn trề nhựa sống và khát vọng nghệ thuật tươi trẻ. Thế nhưng, mạch thơ đột ngột chuyển sang bi kịch dữ dội qua hai hình ảnh tương phản: "tiếng ghi ta tròn bọt nước vỡ tan" và "tiếng ghi ta ròng ròng / máu chảy". Âm thanh đang tròn đầy vẻ đẹp bỗng vỡ vụn tức tưởi thành bọt nước, hóa thành dòng máu tươi đau đớn của người nghệ sĩ bị chế độ phát xít sát hại. Bằng cách tổ chức câu thơ tự do không viết hoa đầu dòng và chuỗi liên tưởng siêu thực, Thanh Thảo đã tạc nên vẻ đẹp bất멸 của tiếng đàn - linh hồn Lor-ca.',
      },
      question2: {
        points: 4.0,
        wordCount: 'Khoảng 600 chữ',
        prompt:
          'Từ văn bản "Nhìn về vốn văn hóa dân tộc" của GS. Trần Đình Hượu, anh/chị hãy viết một bài văn nghị luận (khoảng 600 chữ) trình bày suy nghĩ về chủ đề: Bản lĩnh giữ gìn bản sắc văn hóa dân tộc của người trẻ Việt Nam trên hành trình trở thành công dân toàn cầu.',
        essayOutline: {
          intro:
            'Dẫn dắt từ xu thế toàn cầu hóa và câu nói nổi tiếng "Hòa nhập nhưng không hòa tan". Nêu vấn đề nghị luận: Trách nhiệm và bản lĩnh giữ gìn bản sắc văn hóa dân tộc của thế hệ trẻ khi vươn ra thế giới.',
          body: [
            '1. Giải thích khái niệm: "Bản sắc văn hóa dân tộc" là cốt cách, tiếng nói, truyền thống yêu nước, trọng tình nghĩa và tinh thần dung hợp của người Việt; "Công dân toàn cầu" là người trẻ có ngoại ngữ, tri thức quốc tế và tư duy mở.',
            '2. Mối quan hệ biện chứng giữa Bản sắc dân tộc và Công dân toàn cầu: Bản sắc văn hóa chính là "tấm hộ chiếu tâm hồn" giúp người trẻ Việt Nam có vị thế riêng biệt, không trở thành bản sao mờ nhạt trên trường quốc tế.',
            '3. Chứng minh thực tế: Thế hệ trẻ Việt Nam mang âm hưởng dân gian, lịch sử dân tộc vào âm nhạc đương đại (như các dự án kết hợp nhạc cụ truyền thống với âm nhạc hiện đại), ẩm thực, thời trang áo dài và công nghệ vươn tầm thế giới.',
            '4. Phê phán & Mở rộng: Phê phán tâm lý sùng ngoại cực đoan, quay lưng với lịch sử - tiếng mẹ đẻ, hoặc ngược lại là tư tưởng khép kín, đóng cửa trước tinh hoa nhân loại.',
            '5. Giải pháp hành động: Hiểu sâu văn hóa Việt, làm mới truyền thống bằng ngôn ngữ sáng tạo của thời đại số.',
          ],
          conclusion:
            'Khẳng định: Cây có gốc sâu mới vươn cành đón gió lớn; người trẻ có cội nguồn văn hóa vững vàng mới tự tin bay cao trên bầu trời thế giới.',
        },
        highScoreTips: [
          'Vận dụng trực tiếp ba từ khóa của GS. Trần Đình Hượu: "Thiết thực - Linh hoạt - Dung hợp" như chiếc chìa khóa giúp người trẻ tiếp thu văn minh nhân loại mà vẫn giữ hồn Việt.',
        ],
        sampleOpeningAndClosing: {
          opening:
            'Một cái cây muốn vươn tán lá đón ánh mặt trời và đứng vững trước bão giông thì bộ rễ của nó phải bám thật sâu vào lòng đất mẹ. Cũng như vậy, trên hành trình bước ra biển lớn để trở thành những công dân toàn cầu, hành trang quý giá nhất định vị bản lĩnh của người trẻ Việt Nam không chỉ là ngoại ngữ hay công nghệ, mà chính là cội nguồn bản sắc văn hóa dân tộc.',
          closing:
            'Thế giới rộng lớn không cần thêm những bản sao vô hồn, thế giới luôn trân trọng những giá trị nguyên bản giàu bản sắc. Hãy bước ra năm châu bằng trí tuệ hiện đại của thế kỷ XXI và một trái tim thấm đẫm hồn cốt văn hóa Việt Nam ngàn năm văn hiến.',
        },
      },
    },
  },
  {
    id: 'de-tham-khao-04',
    code: 'ĐỀ SỐ 04',
    title: 'Đề Tham Khảo Trọng Tâm Tiểu Thuyết Trào Phúng & Hài Kịch (Bài 1 & Bài 5 SGK Mới)',
    subtitle: 'Đọc hiểu "Xuân Tóc Đỏ cứu quốc" (Vũ Trọng Phụng) + Đoạn văn NLXH 200 chữ + Bài văn Phân tích Nghệ thuật Trào phúng',
    badge: 'Trọng Tâm Tiểu Thuyết & Hài Kịch',
    durationMinutes: 120,
    totalPoints: 10,
    structureSummary: 'Đọc hiểu Tiểu thuyết Số đỏ (4,0đ) + Đoạn văn NLXH 200 chữ (2,0đ) + Bài văn NLVH 600 chữ (4,0đ)',
    relatedWorkIds: ['xuan-toc-do-cuu-quoc', 'nhan-vat-quan-trong', 'giau-cua'],
    readingSection: {
      points: 4.0,
      genreType: 'Văn bản Tiểu thuyết hiện thực trào phúng',
      sourceCitation: 'Trích "Xuân Tóc Đỏ cứu quốc" (Tiểu thuyết Số đỏ – Vũ Trọng Phụng, Bài 1 Ngữ văn 12)',
      excerptTitle: 'Đọc đoạn trích sau và thực hiện các yêu cầu:',
      excerptContent: `Xuân Tóc Đỏ nhảy lên mui chiếc xe hơi của quan Toàn quyền, giơ cao cánh tay như một nhà độc tài chính trị rồi dõng dạc thuyết:
– Hỡi công chúng! Mi chưa hiểu rõ những lẽ cực kỳ to tát nó khiến ta đành phải nhường giải cho nhà vô địch Xiêm La! Mi rất nông nổi! Nếu ta thắng cuộc thì đức vua Xiêm sẽ tức giận mà tuyên chiến ngay với nước Đại Nam ta! Thế là máu sẽ chảy thành sông, xương sẽ chất thành núi! Ta thà chịu nhục một mình mà cứu được hàng triệu sinh linh đồng bào!
Công chúng nghe đến đấy thì sửng sốt, nhìn nhau ngơ ngác rồi bỗng nhiên vỗ tay đôm đốp như mưa rào:
– Xuân Tóc Đỏ vạn tuế! Sự đại bại vạn tuế!`,
      questions: [
        {
          number: 1,
          level: 'Nhận biết',
          points: 0.5,
          question: 'Xác định tình huống truyện chính được miêu tả trong đoạn trích trên.',
          answerGuide:
            'Tình huống truyện: Sau khi bị ép phải cố tình đánh bóng thua trên sân quần vợt, Xuân Tóc Đỏ trèo lên mui xe hơi diễn thuyết bịp bợm trước đám đông, biến sự thua cuộc hèn hạ thành hành động "hy sinh cứu quốc" và được đám đông tung hô làm vĩ nhân.',
        },
        {
          number: 2,
          level: 'Nhận biết',
          points: 0.5,
          question: 'Chỉ ra cụm từ sử dụng biện pháp tu từ nghịch ngữ trong lời hô hào của đám đông ở cuối đoạn trích.',
          answerGuide:
            'Cụm từ chứa biện pháp nghịch ngữ: "Sự đại bại vạn tuế!" (ghép hai khái niệm hoàn toàn trái ngược nhau: "đại bại" là thua cuộc thảm hại với "vạn tuế" là lời chúc tụng vinh quang muôn năm).',
        },
        {
          number: 3,
          level: 'Thông hiểu',
          points: 1.0,
          question: 'Phân tích tác dụng nghệ thuật của biện pháp nói mỉa và nghịch ngữ trong câu hô "Xuân Tóc Đỏ vạn tuế! Sự đại bại vạn tuế!".',
          answerGuide:
            '- Lột trần sự đảo lộn mọi chuẩn mực giá trị đạo đức và danh dự trong xã hội thực dân nửa phong kiến: Thất bại nhục nhã lại được tôn vinh như chiến công hiển hách.\n- Khắc họa sự ngu muội, cả tin, dễ bị dẫn dắt của đám đông quần chúng trước những lời lẽ sáo rỗng.\n- Tạo tiếng cười trào phúng chua chát, đả kích sâu cay xã hội "chó đểu" đương thời.',
        },
        {
          number: 4,
          level: 'Thông hiểu',
          points: 1.0,
          question: 'Qua ngôn ngữ và cử chỉ của Xuân Tóc Đỏ khi đứng trên mui xe hơi, tác giả Vũ Trọng Phụng muốn phơi bày bản chất gì của nhân vật này?',
          answerGuide:
            'Phơi bày bản chất lưu manh, cơ hội, trơ trẽn và bậc thầy bịp bợm của Xuân Tóc Đỏ: Vốn là kẻ vô học dưới đáy xã hội nhưng hắn học đòi rất nhanh giọng điệu khoa trương, trịch thượng ("Hỡi công chúng! Mi rất nông nổi!") của giới chính khách để thao túng tâm lý đám đông.',
        },
        {
          number: 5,
          level: 'Vận dụng',
          points: 1.0,
          question: 'Từ phản ứng của đám đông trong đoạn trích, anh/chị rút ra bài học gì về thái độ tiếp nhận thông tin và tâm lý đám đông trên mạng xã hội hiện nay?',
          answerGuide:
            '- Không mù quáng chạy theo hiệu ứng đám đông hay thần tượng hóa những hào nhoáng, phát ngôn giật gân chưa được kiểm chứng.\n- Cần trang bị tư duy phản biện, tỉnh táo nhìn nhận bản chất sự việc để không bị dẫn dắt, thao túng tâm lý trên không gian mạng.',
        },
      ],
    },
    writingSection: {
      points: 6.0,
      question1: {
        points: 2.0,
        wordCount: 'Khoảng 200 chữ',
        prompt:
          'Từ thực trạng "hào nhoáng giả tạo" được phê phán trong tác phẩm của Vũ Trọng Phụng, anh/chị hãy viết một đoạn văn nghị luận (khoảng 200 chữ) bàn về tác hại của lối sống "phông bạt", chuộng hư danh ở một bộ phận giới trẻ hiện nay.',
        rubricPoints: [
          'Mở đoạn (0,25đ): Dẫn dắt và nêu vấn đề: Căn bệnh sống "phông bạt", đánh bóng tên tuổi bằng giá trị ảo.',
          'Giải thích & Phân tích tác hại (1,0đ): Làm xói mòn sự trung thực, khiến người trẻ chạy theo vỏ bọc hào nhoáng bên ngoài mà rỗng tuếch năng lực bên trong, gây hệ lụy niềm tin xã hội.',
          'Phản biện & Bài học (0,75đ): Đề cao lối sống thực chất, khẳng định giá trị bản thân bằng tri thức và nhân cách chân thật.',
        ],
        sampleParagraph:
          'Gần một thế kỷ trước, Vũ Trọng Phụng đã gióng lên hồi chuông cảnh tỉnh về một xã hội "Âu hóa" rởm đời chạy theo danh hão, và đến hôm nay, lời cảnh tỉnh ấy vẫn nguyên giá trị trước lối sống "phông bạt", chuộng hư danh của một bộ phận giới trẻ. "Sống phông bạt" là thói quen dựng lên một vỏ bọc hoàn hảo, giàu sang, tài năng hoặc đạo đức giả tạo trên mạng xã hội và ngoài đời thực nhằm thu hút sự ngưỡng mộ ảo. Khi quá mải mê tô vẽ cho chiếc mặt nạ hào nhoáng bên ngoài, người trẻ dần đánh mất sự kết nối với giá trị thực chất bên trong: họ ngại học tập gian khổ, sợ đối diện với khuyết điểm và dễ rơi vào khủng hoảng tâm lý khi sự thật bị phơi bày. Nguy hiểm hơn, căn bệnh chuộng hư danh còn làm lệch lạc thước đo giá trị xã hội, khiến sự chân thành bị xem nhẹ còn sự giả dối lại lên ngôi. Giá trị của một con người chưa bao giờ nằm ở những lượt tương tác ảo hay danh xưng tự phong, mà kết tinh từ năng lực thực sự và phẩm cách tử tế. Hãy dũng cảm bước ra khỏi tấm "phông bạt" hào nhoáng để sống một cuộc đời chân thực và có chiều sâu.',
      },
      question2: {
        points: 4.0,
        wordCount: 'Khoảng 600 chữ',
        prompt:
          'Anh/chị hãy viết một bài văn nghị luận (khoảng 600 chữ) phân tích, đánh giá nghệ thuật trào phúng của nhà văn Vũ Trọng Phụng trong văn bản "Xuân Tóc Đỏ cứu quốc" (Trích tiểu thuyết "Số đỏ").',
        essayOutline: {
          intro:
            'Giới thiệu Vũ Trọng Phụng — "Ông vua phóng sự đất Bắc" và bậc thầy tiểu thuyết trào phúng. Giới thiệu đoạn trích "Xuân Tóc Đỏ cứu quốc" (chương XX tiểu thuyết "Số đỏ") và khẳng định đỉnh cao nghệ thuật trào phúng của tác phẩm.',
          body: [
            '1. Nghệ thuật xây dựng tình huống trào phúng nghịch lý bậc thầy: Biến một trận đấu quần vợt thể thao thành đại cuộc ngoại giao quốc gia; biến kẻ thua cuộc vì dàn xếp tỷ số thành "bậc vĩ nhân cứu quốc".',
            '2. Nghệ thuật khắc họa nhân vật biếm họa sắc nét: Chân dung Xuân Tóc Đỏ — gã lưu manh thời cơ với màn độc thoại hùng biện bịp bợm; bức tranh biếm họa đám quan chức thượng lưu hèn nhát và đám đông công chúng mù quáng.',
            '3. Nghệ thuật sử dụng ngôn từ trào phúng (Nói mỉa, Nghịch ngữ, Phóng đại): Phân tích các cụm từ "Sự đại bại vạn tuế!", "bậc vĩ nhân", lối so sánh cường điệu và giọng điệu châm biếm lạnh lùng mà hủy diệt.',
            '4. Đánh giá ý nghĩa tư tưởng: Tiếng cười Vũ Trọng Phụng không chỉ để giải trí mà là lưỡi dao giải phẫu phanh phui sự thối nát của xã hội thực dân - phong kiến buổi giao thời.',
          ],
          conclusion:
            'Khẳng định vị trí độc tôn của "Số đỏ" trong nền tiểu thuyết Việt Nam hiện đại và sức sống vượt thời gian của tiếng cười Vũ Trọng Phụng.',
        },
        highScoreTips: [
          'Trích dẫn nhận định của nhà văn Nguyễn Khải: "Số đỏ của Vũ Trọng Phụng là một cuốn sách ghê gớm có thể làm vinh dự cho mọi nền văn học".',
        ],
        sampleOpeningAndClosing: {
          opening:
            'Trong lịch sử văn xuôi Việt Nam hiện đại, nếu Nam Cao làm người đọc nhói đau bởi những giọt nước mắt thầm lặng của kiếp người lầm than, thì Vũ Trọng Phụng lại cất lên một chuỗi cười dữ dội, chua chát để chôn vùi cả một xã hội thượng lưu giả dối. Đoạn trích "Xuân Tóc Đỏ cứu quốc" khép lại tiểu thuyết "Số đỏ" chính là chương nhạc cao trào nhất, nơi nghệ thuật trào phúng của Vũ Trọng Phụng thăng hoa đến độ mẫu mực.',
          closing:
            'Thời gian đã lùi xa gần một thế kỷ, nhưng màn kịch Xuân Tóc Đỏ đứng trên mui xe hơi hô hào "cứu quốc" và tiếng vỗ tay "Sự đại bại vạn tuế!" vẫn còn nguyên sức cảnh tỉnh. Đó chính là khả năng lớn lao của tiểu thuyết Vũ Trọng Phụng trong việc soi chiếu bản chất con người và thời đại.',
        },
      },
    },
  },
];

export const FREQUENT_EXAM_TOPICS: FrequentExamTopic[] = [
  // NHÓM A: SO SÁNH HAI TÁC PHẨM (TRỌNG TÂM BÀI 1 & BÀI 2)
  {
    id: 'de-hay-ra-01',
    category: 'so-sanh',
    categoryLabel: 'So sánh 2 tác phẩm Thơ (Bài 2)',
    frequencyBadge: 'Tần suất ra thi: 98%',
    title: 'Đề 01: So sánh hình tượng người anh hùng / người lính trong "Cảm hoài" (Đặng Dung) và "Tây Tiến" (Quang Dũng)',
    prompt:
      'Anh/chị hãy viết bài văn nghị luận so sánh, đánh giá vẻ đẹp bi tráng của hình tượng người anh hùng trong bài thơ "Cảm hoài" (Đặng Dung) và hình tượng người lính trong đoạn trích "Tây Tiến" (Quang Dũng).',
    targetSkill: 'Kỹ năng viết bài văn nghị luận so sánh, đánh giá hai tác phẩm thơ cùng cảm hứng bi tráng',
    relatedWorkIds: ['cam-hoai', 'tay-tien'],
    keyArguments: [
      'Điểm tương đồng: Cả hai thi phẩm đều khắc họa hình tượng con người mang tầm vóc vũ trụ ("Phù địa trục, vãn thiên hà" – "Mắt trừng gửi mộng qua biên giới"), lấy lý tưởng đền nợ nước làm lẽ sống và đều thấm đẫm âm hưởng bi tráng thông qua ngôn từ Hán Việt trang trọng.',
      'Điểm khác biệt (Thời đại & Cái tôi): "Cảm hoài" (Đặng Dung – thế kỷ XV) là bi kịch thời thế lỡ vận ("Thời lai đồ điếu thành công dị / Vận khứ anh hùng ẩm hận đa") của vị tướng già tóc bạc mài gươm dưới trăng; trong khi "Tây Tiến" (Quang Dũng – 1948) là vẻ đẹp hào hoa, lãng mạn và tinh thần "chẳng tiếc đời xanh" của thế hệ thanh niên thời đại mới chiến thắng hoàn cảnh.',
    ],
    goldenEvidence:
      '"Quốc thù vị báo đầu tiên bạch / Kỷ độ Long Tuyền đái nguyệt ma" (Cảm hoài) đối sánh với "Chiến trường đi chẳng tiếc đời xanh / Áo bào thay chiếu anh về đất" (Tây Tiến).',
    scoringSecret:
      'Làm rõ sự kế thừa mạch nguồn thơ ca yêu nước dân tộc từ trung đại sang hiện đại: từ nỗi "ẩm hận" cô đơn của người anh hùng Hậu Trần đến khúc tráng ca hào hùng của đoàn binh Tây Tiến.',
  },
  {
    id: 'de-hay-ra-02',
    category: 'so-sanh',
    categoryLabel: 'So sánh 2 tác phẩm Truyện (Bài 1)',
    frequencyBadge: 'Tần suất ra thi: 96%',
    title: 'Đề 02: So sánh nghệ thuật trào phúng trong "Xuân Tóc Đỏ cứu quốc" (Vũ Trọng Phụng) và "Những trò lố hay là Va-ren và Phan Bội Châu" (Nguyễn Ái Quốc)',
    prompt:
      'Viết bài văn nghị luận so sánh, đánh giá nghệ thuật xây dựng nhân vật trào phúng và giọng điệu châm biếm trong "Xuân Tóc Đỏ cứu quốc" (Vũ Trọng Phụng) và "Những trò lố hay là Va-ren và Phan Bội Châu" (Nguyễn Ái Quốc).',
    targetSkill: 'Kỹ năng so sánh hai tác phẩm văn xuôi trào phúng hiện đại Việt Nam',
    relatedWorkIds: ['xuan-toc-do-cuu-quoc', 'nhung-tro-lo-va-ren-phan-boi-chau'],
    keyArguments: [
      'Điểm tương đồng: Cả hai tác phẩm đều sử dụng tiếng cười châm biếm sắc bén, thủ pháp tương phản - đối lập, nói mỉa và phóng đại để lột trần bản chất bịp bợm, lố bịch của những kẻ mang danh "vĩ nhân", "khai hóa" (Xuân Tóc Đỏ và Toàn quyền Va-ren).',
      'Điểm khác biệt: Nguyễn Ái Quốc viết bằng nhãn quan chính trị cách mạng, dựng thế đối lập tuyệt đối giữa cái Lố bịch (Va-ren) và cái Cao cả uy nghiêm (Phan Bội Châu im lặng như tượng đồng); còn Vũ Trọng Phụng dựng lên một sân khấu hài kịch nơi cả kẻ bịp bợm (Xuân Tóc Đỏ) lẫn đám đông và giới thượng lưu đều chìm trong sự đảo điên hoàn toàn.',
    ],
    goldenEvidence:
      'Sự im lặng và cái nhếch mép của cụ Phan Bội Châu trước Va-ren >< Tiếng hô "Xuân Tóc Đỏ vạn tuế! Sự đại bại vạn tuế!" của đám đông sân quần Rollandes.',
    scoringSecret:
      'Phân tích sâu thủ pháp "độc thoại giả đối thoại": cả Va-ren và Xuân Tóc Đỏ đều thao thao bất tuyệt bằng những lời hứa hão, lý lẽ bịp bợm.',
  },
  {
    id: 'de-hay-ra-03',
    category: 'so-sanh',
    categoryLabel: 'So sánh 2 tác phẩm Thơ (Bài 9)',
    frequencyBadge: 'Tần suất ra thi: 95%',
    title: 'Đề 03: So sánh cảm thức thời gian và khát vọng tình yêu trong "Vội vàng" (Xuân Diệu) và "Sóng" (Xuân Quỳnh)',
    prompt:
      'Anh/chị hãy viết bài văn nghị luận so sánh, đánh giá cảm thức về thời gian và khát vọng sống, khát vọng yêu trong hai đoạn trích thuộc bài thơ "Vội vàng" (Xuân Diệu) và "Sóng" (Xuân Quỳnh).',
    targetSkill: 'So sánh hai đỉnh cao thơ tình Việt Nam ở hai thời kỳ (Thơ Mới 1932–1945 và Thơ chống Mỹ)',
    relatedWorkIds: ['voi-vang', 'song'],
    keyArguments: [
      'Điểm tương đồng: Cả hai thi sĩ đều nhạy cảm đến thảng thốt trước sự hữu hạn của đời người và bước đi không ngừng của thời gian ("Xuân đương tới nghĩa là xuân đương qua" – "Cuộc đời tuy dài thế / Năm tháng vẫn đi qua"); từ đó cùng khao khát sống tận hiến, yêu mãnh liệt và vĩnh cửu hóa tình yêu.',
      'Điểm khác biệt: Xuân Diệu (Thơ Mới) mang cái tôi cá nhân cuồng nhiệt, muốn "tắt nắng, buộc gió", "ôm, riết, say, thâu, cắn" vào xuân hồng để tận hưởng thiên đường mặt đất; Xuân Quỳnh (Thơ hiện đại) gửi gắm tâm hồn phụ nữ đằm thắm, chọn cách hóa thân "tan ra thành trăm con sóng nhỏ" để hòa tình yêu cá nhân vào biển lớn cuộc đời.',
    ],
    goldenEvidence:
      '"Hỡi xuân hồng, ta muốn cắn vào ngươi!" (Vội vàng - Xuân Diệu) đối sánh với "Làm sao được tan ra / Thành trăm con sóng nhỏ / Giữa biển lớn tình yêu / Để ngàn năm còn vỗ" (Sóng - Xuân Quỳnh).',
    scoringSecret:
      'Chỉ ra nét khác biệt về thể thơ và nhạc điệu: Thể thơ tự do câu dài ngắn đan xen cuống quýt của Xuân Diệu với thể thơ 5 chữ nhịp nhàng như nhịp sóng biển của Xuân Quỳnh.',
  },
  {
    id: 'de-hay-ra-04',
    category: 'so-sanh',
    categoryLabel: 'So sánh 2 tác phẩm Truyện (Bài 1 & Truyền thống)',
    frequencyBadge: 'Tần suất ra thi: 93%',
    title: 'Đề 04: So sánh giá trị gia đình và vẻ đẹp người phụ nữ trong "Mùa lá rụng trong vườn" (Ma Văn Kháng) và "Chiếc thuyền ngoài xa" (Nguyễn Minh Châu)',
    prompt:
      'So sánh hình tượng người phụ nữ giàu đức hy sinh, giữ gìn hơi ấm gia đình qua nhân vật chị Hoài trong "Mùa lá rụng trong vườn" (Ma Văn Kháng) và người đàn bà hàng chài trong "Chiếc thuyền ngoài xa" (Nguyễn Minh Châu).',
    targetSkill: 'So sánh hai tác phẩm văn xuôi thế sự tiêu biểu cùng thời kỳ Đổi mới (1983–1985)',
    relatedWorkIds: ['mua-la-rung-trong-vuon', 'chiec-thuyen-ngoai-xa'],
    keyArguments: [
      'Điểm tương đồng: Cùng ra đời vào thập niên 1980 (tiền Đổi mới), cả hai tác phẩm đều khám phá những biến động, bi kịch trong đời sống gia đình và tôn vinh vẻ đẹp thiên tính nữ Việt Nam: giàu lòng vị tha, nhân hậu, là điểm tựa tinh thần giữ cho gia đình không tan vỡ.',
      'Điểm khác biệt: Chị Hoài (Ma Văn Kháng) đại diện cho vẻ đẹp văn hóa truyền thống nền nếp, thủy chung với gia đình chồng cũ trong không gian Tết Hà Nội ấm cúng; người đàn bà hàng chài (Nguyễn Minh Châu) hiện lên từ lam lũ đói nghèo nơi miền biển với sự thấu hiểu lẽ đời sâu sắc đằng sau vẻ ngoài thô kệch.',
    ],
    goldenEvidence:
      '"Đàn bà ở thuyền chúng tôi phải sống cho con chứ không thể sống cho mình..." (Chiếc thuyền ngoài xa) và hình ảnh chị Hoài mang hương vị đồng quê ấm áp về ngôi nhà ông Bằng chiều 30 Tết (Mùa lá rụng trong vườn).',
    scoringSecret:
      'Đặt hai tác phẩm trong bối cảnh văn học chuyển mình từ cảm hứng sử thi sang cảm hứng thế sự - đời tư.',
  },

  // NHÓM B: ĐỀ PHÂN TÍCH ĐẶC TRƯNG THỂ LOẠI (SGK 12 MỚI)
  {
    id: 'de-hay-ra-05',
    category: 'the-loai',
    categoryLabel: 'Truyện kể có yếu tố kì ảo (Bài 4)',
    frequencyBadge: 'Tần suất ra thi: 94%',
    title: 'Đề 05: Vai trò của yếu tố kì ảo trong "Hải khẩu linh từ" (Đoàn Thị Điểm) và "Muối của rừng" (Nguyễn Huy Thiệp)',
    prompt:
      'Phân tích và đánh giá chức năng nghệ thuật của yếu tố kì ảo trong truyện truyền kỳ "Hải khẩu linh từ - Đền thiêng cửa bể" (Đoàn Thị Điểm) và truyện ngắn hiện đại "Muối của rừng" (Nguyễn Huy Thiệp).',
    targetSkill: 'Nắm vững đặc trưng Bài 4: Yếu tố kì ảo trong truyện kể trung đại và hiện đại',
    relatedWorkIds: ['hai-khau-linh-tu', 'muoi-cua-rung'],
    keyArguments: [
      'Trong "Hải khẩu linh từ" (Truyền kỳ trung đại): Yếu tố kì ảo (Long cung, giao long, hiển linh báo mộng cho vua Lê Thánh Tông) tạo nên một thế giới siêu nhiên song hành với thế giới thực nhằm bất tử hóa phẩm tiết trung liệt của Chế thắng phu nhân Nguyễn Thị Bích Châu.',
      'Trong "Muối của rừng" (Truyện ngắn đương đại): Yếu tố kì ảo thu gọn lại thành một chi tiết biểu tượng duy mỹ ("hoa tử huyền" 30 năm nở một lần) ở cuối truyện, đóng vai trò như phép thử lương tri và phần thưởng tinh thần cho sự thức tỉnh nhân tính của ông Diểu.',
    ],
    goldenEvidence:
      'Chi tiết Bích Châu gieo mình xuống biển hóa thần hiển linh giúp đoàn thuyền nhà vua >< Chi tiết hoa tử huyền nở trắng xóa dưới chân núi trong mưa xuân khi ông Diểu buông súng.',
    scoringSecret:
      'Nhấn mạnh quy luật: Dù ở trung đại hay hiện đại, cái kì ảo không bao giờ tách rời cái thực mà luôn là phương tiện để phản ánh khát vọng công lý và lương tri con người.',
  },
  {
    id: 'de-hay-ra-06',
    category: 'the-loai',
    categoryLabel: 'Tiếng cười Hài kịch & Bi kịch (Bài 5 & Bài 9)',
    frequencyBadge: 'Tần suất ra thi: 92%',
    title: 'Đề 06: Nghệ thuật xung đột kịch trong "Nhân vật quan trọng" (Gogol), "Giấu của" (Lộng Chương) và "Hồn Trương Ba, da hàng thịt" (Lưu Quang Vũ)',
    prompt:
      'Phân tích nghệ thuật xây dựng tình huống và ngôn ngữ đối thoại kịch trong việc phơi bày sự tha hóa của con người qua "Giấu của" (Trích Quẫn – Lộng Chương) hoặc "Hồn Trương Ba, da hàng thịt" (Lưu Quang Vũ).',
    targetSkill: 'Phân tích văn bản kịch (xung đột kịch, hành động kịch, đối thoại - độc thoại - bàng thoại)',
    relatedWorkIds: ['giau-cua', 'nhan-vat-quan-trong', 'hon-truong-ba-da-hang-thit'],
    keyArguments: [
      'Trong hài kịch ("Giấu của" – Lộng Chương; "Nhân vật quan trọng" – Gogol): Xung đột kịch nảy sinh từ sự mâu thuẫn giữa bề ngoài đạo mạo, quyền quý với bản chất tham lam, khiếp nhược, khoác lác bên trong (ông bà Đại Cát quấn vàng lên người mẹ già; Khlestakov chém gió trước đám quan chức).',
      'Trong bi kịch hiện đại ("Hồn Trương Ba, da hàng thịt" – Lưu Quang Vũ): Xung đột kịch mang tầm vóc triết học sâu sắc giữa linh hồn thanh cao và xác thịt phàm tục, khẳng định con người chỉ hạnh phúc khi được sống là chính mình toàn vẹn.',
    ],
    goldenEvidence:
      '"Không thể bên trong một đằng, bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn!" (Hồn Trương Ba, da hàng thịt).',
    scoringSecret:
      'Khi phân tích kịch, bắt buộc phải chỉ ra các yếu tố đặc trưng thể loại: Chỉ dẫn sân khấu (chữ in nghiêng trong ngoặc), Ngôn ngữ đối thoại cá thể hóa và Nhịp độ hành động kịch.',
  },
  {
    id: 'de-hay-ra-07',
    category: 'the-loai',
    categoryLabel: 'Tác gia Hồ Chí Minh (Bài 6)',
    frequencyBadge: 'Tần suất ra thi: 95%',
    title: 'Đề 07: Sự hòa quyện giữa vẻ đẹp cổ điển và tinh thần hiện đại trong hai bài thơ "Mộ" (Chiều tối) và "Nguyên tiêu" (Rằm tháng Giêng) của Hồ Chí Minh',
    prompt:
      'Phân tích vẻ đẹp tâm hồn nghệ sĩ – chiến sĩ của Chủ tịch Hồ Chí Minh và sự kết hợp hài hòa giữa chất cổ điển với tinh thần hiện đại trong hai bài thơ chữ Hán "Mộ" (Chiều tối) và "Nguyên tiêu" (Rằm tháng Giêng).',
    targetSkill: 'Nắm vững trọng tâm Bài 6: Phong cách thơ chữ Hán Hồ Chí Minh',
    relatedWorkIds: ['mo-nguyen-tieu', 'tac-gia-ho-chi-minh', 'tuyen-ngon-doc-lap'],
    keyArguments: [
      'Chất cổ điển: Thể thơ thất ngôn tứ tuyệt Đường luật hàm súc, thi liệu cổ điển (cánh chim chiều, chòm mây cô đơn, trăng nguyên tiêu, khói sóng sông xuân), bút pháp chấm phá tả cảnh ngụ tình.',
      'Tinh thần hiện đại: Hình ảnh con người lao động khỏe khoắn làm trung tâm vũ trụ ("Sơn thôn thiếu nữ ma bao túc"), sự vận động từ bóng tối ra ánh sáng rực rỡ của nhãn tự "hồng", và phong thái ung dung "đàm quân sự" hòa quyện với "nguyệt mãn thuyền".',
    ],
    goldenEvidence:
      '"Sơn thôn thiếu nữ ma bao túc / Bao túc ma hoàn lô dĩ hồng" (Mộ) & "Yên ba thâm xứ đàm quân sự / Dạ bán quy lai nguyệt mãn thuyền" (Nguyên tiêu).',
    scoringSecret:
      'Phân tích kỹ hai nhãn tự "Hồng" (trong Mộ) và "Mãn" / "Xuân" (trong Nguyên tiêu) như điểm hội tụ của ánh sáng cách mạng và tâm hồn nghệ sĩ Hồ Chí Minh.',
  },
  {
    id: 'de-hay-ra-08',
    category: 'the-loai',
    categoryLabel: 'Phóng sự, Hồi kí & Tùy bút (Bài 7)',
    frequencyBadge: 'Tần suất ra thi: 91%',
    title: 'Đề 08: Chất "Sự thật đời sống" và cái tôi tác giả trong "Nghệ thuật băm thịt gà" (Ngô Tất Tố), "Bước vào đời" (Đào Duy Anh) và "Người lái đò Sông Đà" (Nguyễn Tuân)',
    prompt:
      'Phân tích cách thể hiện sự thật đời sống và dấu ấn cái tôi người trần thuật trong thể loại Kí qua "Nghệ thuật băm thịt gà" (Trích Việc làng – Ngô Tất Tố) hoặc "Người lái đò Sông Đà" (Nguyễn Tuân).',
    targetSkill: 'Nắm vững đặc trưng Bài 7: Tính phi hư cấu (Non-fiction), sự thật tư liệu kết hợp cảm hứng chủ quan trong Kí',
    relatedWorkIds: ['nghe-thuat-bam-thit-ga', 'buoc-vao-doi', 'nguoi-lai-do-song-da'],
    keyArguments: [
      'Tính xác thực (Phi hư cấu): Ngô Tất Tố ghi chép tỉ mỉ như phóng viên hiện trường về luật tục chia 1 con gà thành 23 cỗ chốn đình làng; Đào Duy Anh tái hiện chính xác mốc lịch sử 1925–1926; Nguyễn Tuân khảo cứu địa lý, thủy văn sông Đà.',
      'Dấu ấn chủ quan của người viết: Đằng sau sự thật khách quan là nỗi xót xa, mỉa mai hủ tục của Ngô Tất Tố; là lý tưởng dấn thân của Đào Duy Anh; là cái tôi tài hoa, uyên bác đi tìm "chất vàng mười" của Nguyễn Tuân.',
    ],
    goldenEvidence:
      'Cảnh anh Lăng chia một con gà luộc thành 23 phần đều tăm tắp (Việc làng) & Hình ảnh ông đò vượt trùng vi thạch trận Sông Đà (Nguyễn Tuân).',
    scoringSecret:
      'Làm rõ mệnh đề lý luận: Trong tác phẩm kí, "sự thật" là phần xác tư liệu, còn "tư tưởng và cảm xúc của nhà văn" là phần hồn tạo nên giá trị văn chương.',
  },

  // NHÓM C: ĐỀ NGHỊ LUẬN XÃ HỘI HAY RA NHẤT CHO TUỔI TRẺ
  {
    id: 'de-hay-ra-09',
    category: 'nlxh',
    categoryLabel: 'Nghị luận Xã hội Trọng tâm (Bài 3 & Bài 7)',
    frequencyBadge: 'Tần suất ra thi: 99%',
    title: 'Đề 09: Tuổi trẻ với khát vọng sáng tạo và dấn thân "Bước vào đời" trong kỷ nguyên mới',
    prompt:
      'Viết bài văn nghị luận (khoảng 600 chữ) bàn về vai trò của tư duy sáng tạo và bản lĩnh dám bước ra khỏi vùng an toàn của người trẻ trước ngưỡng cửa cuộc đời.',
    targetSkill: 'Kỹ năng viết bài văn NLXH 600 chữ (4,0 điểm) gắn với chủ đề Tuổi trẻ',
    relatedWorkIds: ['nang-luc-sang-tao', 'buoc-vao-doi', 'giao-duc-khai-phong-dong-kinh-nghia-thuc'],
    keyArguments: [
      'Giải thích: "Vùng an toàn" là những thói quen cũ kỹ, lối mòn có sẵn; "tư duy sáng tạo" (như GS. Phan Đình Diệu khẳng định) là năng lực tạo ra giá trị mới, giải pháp mới hữu ích cho cộng đồng.',
      'Bàn luận: Thế giới biến đổi từng ngày, nếu người trẻ chỉ học vẹt, sao chép theo khuôn mẫu thì sẽ bị đào thải. Bước ra khỏi vùng an toàn giúp khám phá giới hạn bản thân và đóng góp vào sự hưng thịnh của quốc gia.',
      'Bài học hành động: Học tập theo tinh thần khai phóng (như Đông Kinh Nghĩa Thục) và dấn thân phụng sự xã hội (như học giả Đào Duy Anh thuở "Bước vào đời").',
    ],
    goldenEvidence:
      'Dẫn chứng: Các kỹ sư trẻ Việt Nam nghiên cứu chip bán dẫn, trí tuệ nhân tạo, nông nghiệp công nghệ cao và các dự án khởi nghiệp xanh trên trường quốc tế.',
    scoringSecret:
      'Áp dụng cấu trúc 5 bước chuẩn: Giải thích -> Phân tích mặt tích cực -> Chứng minh bằng dẫn chứng thời sự -> Phản biện (phê phán sự liều lĩnh mù quáng hoặc thụ động an phận) -> Bài học nhận thức & hành động.',
  },
  {
    id: 'de-hay-ra-10',
    category: 'nlxh',
    categoryLabel: 'Nghị luận Xã hội Trọng tâm (Bài 4 & Bài 8)',
    frequencyBadge: 'Tần suất ra thi: 94%',
    title: 'Đề 10: Cách ứng xử nhân văn giữa con người với thiên nhiên và trách nhiệm bảo vệ di sản văn hóa - sinh thái',
    prompt:
      'Từ thông điệp của các văn bản "Muối của rừng" (Nguyễn Huy Thiệp) và "Pa-ra-na / Nhiệt đới buồn" (Claude Lévi-Strauss), anh/chị hãy viết bài văn nghị luận (khoảng 600 chữ) bàn về trách nhiệm sống hài hòa với tự nhiên của con người hiện đại.',
    targetSkill: 'Kỹ năng viết bài văn NLXH về chủ đề Sinh thái & Phát triển bền vững',
    relatedWorkIds: ['muoi-cua-rung', 'pa-ra-na', 'doi-muoi'],
    keyArguments: [
      'Con người không phải là "chúa tể" đứng trên tự nhiên mà là một mắt xích hữu cơ trong hệ sinh thái Trái Đất.',
      'Sự khai thác tàn bạo vì lợi nhuận ngắn hạn đã dẫn đến biến đổi khí hậu, lũ quét, sạt lở và sự tuyệt chủng của nhiều loài sinh vật.',
      'Sống hài hòa với thiên nhiên là thước đo văn minh và đạo đức của con người hiện đại: phát triển kinh tế xanh, tiêu dùng bền vững và biết kính trọng tự nhiên.',
    ],
    goldenEvidence:
      'Liên hệ thực tế biến đổi khí hậu toàn cầu, các dự án trồng rừng ngập mặn, chuyển đổi năng lượng sạch và lối sống Net Zero của thế hệ Gen Z.',
    scoringSecret:
      'Kết nối mượt mà giữa thông điệp văn học ("hoa tử huyền" trong Muối của rừng) với số liệu thực tế về môi trường.',
  },
];
