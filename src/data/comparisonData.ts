export interface ComparisonTopic {
  id: string;
  title: string;
  workA: string;
  workB: string;
  authorA: string;
  authorB: string;
  similarity: string[];
  differenceA: {
    heading: string;
    points: string[];
  };
  differenceB: {
    heading: string;
    points: string[];
  };
  conclusion: string;
}

export const COMPARISONS_DATA: ComparisonTopic[] = [
  {
    id: 'song-da-vs-song-huong',
    title: 'Vẻ đẹp hai dòng sông: Sông Đà và Sông Hương',
    workA: 'Người lái đò Sông Đà',
    authorA: 'Nguyễn Tuân',
    workB: 'Ai đã đặt tên cho dòng sông?',
    authorB: 'Hoàng Phủ Ngọc Tường',
    similarity: [
      'Đều là những kiệt tác văn xuôi tùy bút / bút ký ngợi ca cảnh sắc non sông gấm vóc Việt Nam.',
      'Cả hai dòng sông đều được nhân hóa như những sinh thể có linh hồn, tính cách và số phận độc đáo.',
      'Đều thể hiện phong cách nghệ thuật tài hoa, uyên bác và tình yêu tha thiết với quê hương xứ sở.'
    ],
    differenceA: {
      heading: 'Sông Đà (Nguyễn Tuân) - Kỳ vĩ, Dữ dội và Tài hoa',
      points: [
        'Mang hai nét tính cách đối lập: Hung bạo dữ dằn (thác ghềnh, thạch trận, hút nước) và Thơ mộng trữ tình.',
        'Sông Đà như một "kẻ thù số một" thách thức bản lĩnh con người, tôn vinh hình tượng người lao động trí dũng.',
        'Văn phong góc cạnh, dữ dội, vận dụng tri thức quân sự, điện ảnh, hội họa.'
      ]
    },
    differenceB: {
      heading: 'Sông Hương (Hoàng Phủ Ngọc Tường) - Thơ mộng, Dịu dàng và Văn hóa',
      points: [
        'Dòng sông của cái đẹp dịu dàng, trầm mặc, mang đậm bản sắc văn hóa và tâm hồn người con gái xứ Huế.',
        'Được khắc họa như một người tình thủy chung tìm về thành phố Huế mộng mơ.',
        'Văn phong mềm mại, êm đềm, đậm chất thơ và bề dày triết học lịch sử.'
      ]
    },
    conclusion: 'Sự khác biệt bắt nguồn từ đối tượng miêu tả (miền Tây Bắc hiểm trở vs xứ Huế cổ kính) và cá tính sáng tạo độc đáo của mỗi tác giả: Nguyễn Tuân ưa tìm kiếm cảm giác mạnh và cái đẹp phi thường, còn Hoàng Phủ Ngọc Tường mê đắm trong chất thơ và trầm tích văn hóa.'
  },
  {
    id: 'mi-vs-thi',
    title: 'Vẻ đẹp và khát vọng sống: Nhân vật Mị và Thị',
    workA: 'Vợ chồng A Phủ (Nhân vật Mị)',
    authorA: 'Tô Hoài',
    workB: 'Vợ nhặt (Nhân vật Thị)',
    authorB: 'Kim Lân',
    similarity: [
      'Đều là những người phụ nữ nghèo khổ, nạn nhân của xã hội cũ và nghịch cảnh khắc nghiệt.',
      'Cả hai đều tiềm tàng sức sống mãnh liệt và khát khao hạnh phúc không gì dập tắt nổi.',
      'Đều được cứu rỗi bởi tình người, tình thương và tìm thấy con đường hướng về ánh sáng cuộc đời.'
    ],
    differenceA: {
      heading: 'Mị (Vợ chồng A Phủ) - Sức sống quật khởi',
      points: [
        'Bi kịch làm dâu gạt nợ, bị tước đoạt tự do, sống kiếp nô lệ trâu ngựa trong nhà thống lí Pá Tra.',
        'Sức sống tiềm tàng trỗi dậy qua các giai đoạn: từ đêm tình mùa xuân đến hành động cởi trói cứu A Phủ và tự giải thoát.',
        'Tô Hoài đi sâu miêu tả tâm lý nội tâm tinh tế, sự biến chuyển từ cam chịu đến phản kháng quyết liệt.'
      ]
    },
    differenceB: {
      heading: 'Thị (Vợ nhặt) - Thiên tính nữ hồi sinh',
      points: [
        'Nạn nhân trực tiếp của cái đói 1945, bị tước đoạt cả tên tuổi, nhan sắc và nhân phẩm vì miếng ăn.',
        'Sự hồi sinh diễn ra khi tìm được bến đỗ gia đình: từ chao chát trở nên hiền hậu, đúng mực người vợ dâu hiền.',
        'Kim Lân thể hiện niềm tin vào bản chất lương thiện và thiên chức làm vợ, làm mẹ của người phụ nữ nông dân.'
      ]
    },
    conclusion: 'Cả hai tác phẩm đều thể hiện chủ nghĩa nhân đạo sâu sắc của văn xuôi cách mạng: khẳng định phẩm giá và sức sống bất diệt của người phụ nữ Việt Nam trong tột cùng gian khổ.'
  },
  {
    id: 'linh-tay-tien-vs-linh-dong-chi',
    title: 'Hình tượng người lính: Tây Tiến và Đồng chí',
    workA: 'Tây Tiến (Người lính Tây Tiến)',
    authorA: 'Quang Dũng',
    workB: 'Đồng chí (Người lính thời chống Pháp)',
    authorB: 'Chính Hữu',
    similarity: [
      'Đều khắc họa chân dung người lính vệ quốc trong những năm đầu kháng chiến chống Pháp đầy gian khổ, thiếu thốn.',
      'Đều sáng ngời tinh thần yêu nước, dũng cảm và lý tưởng chiến đấu vì nền độc lập tự do của Tổ quốc.',
      'Tình đồng chí đồng đội gắn bó keo sơn chia ngọt sẻ bùi giữa chiến trường khốc liệt.'
    ],
    differenceA: {
      heading: 'Lính Tây Tiến - Hào hoa, lãng mạn, bi tráng',
      points: [
        'Xuất thân là thanh niên trí thức, học sinh sinh viên Hà thành mang tâm hồn lãng tử.',
        'Vẻ đẹp kiêu hùng, dữ dội ("dữ oai hùm", "chiến trường đi chẳng tiếc đời xanh"), mang nét tráng lệ cổ điển.',
        'Bút pháp lãng mạn bay bổng, từ ngữ Hán Việt trang trọng ("áo bào", "biên cương", "viễn xứ").'
      ]
    },
    differenceB: {
      heading: 'Lính Đồng chí - Mộc mạc, bình dị, hiện thực',
      points: [
        'Xuất thân từ những miền quê nghèo khó "nước mặn đồng chua", "đất cày lên sỏi đá".',
        'Vẻ đẹp bình dị, chân chất của người nông dân mặc áo lính ("áo anh rách vai", "quần tôi có vài mảnh vá").',
        'Bút pháp hiện thực nghiêm ngặt, ngôn ngữ cô đọng, giản dị đậm phong vị thôn quê.'
      ]
    },
    conclusion: 'Hai bức tượng đài bổ sung cho nhau, tạo nên bức tranh toàn diện và phong phú về người lính cụ Hồ trong kháng chiến chống Pháp: vừa mộc mạc chân chất, vừa hào hoa bi tráng.'
  }
];
