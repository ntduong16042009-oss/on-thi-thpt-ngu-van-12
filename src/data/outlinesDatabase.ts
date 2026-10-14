export interface CuratedOutline {
  id: string;
  workId: string;
  workTitle: string;
  author: string;
  topic: string;
  genre: 'tho' | 'truyen' | 'ky' | 'kich' | 'chinhluan' | 'so-sanh' | 'nlxh';
  category: 'toan-canh' | 'doan-trich' | 'nhan-vat' | 'so-sanh' | 'ly-luan' | 'nlxh';
  categoryLabel: string;
  targetScore: string; // e.g. "9.0+ Chuyên Sâu", "8.5+ Trọng Tâm"
  timeEstimate: string; // "70 - 75 phút"
  tags: string[];
  keyQuote: string;
  intro: {
    approach1: string; // Lý luận văn học
    approach2: string; // Phong cách tác giả & thời đại
  };
  body: {
    overview: string; // Khái quát chung
    points: {
      number: string;
      title: string;
      evidence: string;
      analysis: string;
      commentary: string;
    }[];
    artisticValue: string[];
    advancedCommentary: string; // Đánh giá chiều sâu & nhận xét nâng cao (yêu cầu phụ 1đ)
    literaryConnection: string; // Liên hệ đối chiếu tác phẩm khác
  };
  conclusion: string;
  mindmapPoints: string[]; // 5 gạch đầu dòng then chốt
  goldenTheoryQuotes: {
    quote: string;
    author: string;
    note: string;
  }[];
}

export const CURATED_OUTLINES_DATA: CuratedOutline[] = [
  // 1. Tây Tiến - 14 câu đầu
  {
    id: 'tay-tien-14-cau-dau',
    workId: 'tay-tien',
    workTitle: 'Tây Tiến',
    author: 'Quang Dũng',
    topic: 'Cảm nhận vẻ đẹp bức tranh thiên nhiên Tây Bắc hiểm trở, hùng vĩ mà thơ mộng qua 14 câu thơ đầu bài thơ "Tây Tiến"',
    genre: 'tho',
    category: 'doan-trich',
    categoryLabel: 'Đoạn Trích Thơ Trọng Tâm',
    targetScore: '9.0+ Toàn Diện',
    timeEstimate: '75 phút',
    tags: ['Tây Tiến', 'Quang Dũng', '14 câu đầu', 'Thiên nhiên Tây Bắc', 'Nỗi nhớ', 'Sông Mã'],
    keyQuote: 'Sông Mã xa rồi Tây Tiến ơi! / Nhớ về rừng núi nhớ chơi vơi...',
    intro: {
      approach1: 'Nhà phê bình Đặng Anh Đào từng nhận định: "Có những bài thơ vừa ra đời đã hoá thân vào hồn thiêng sông núi, thành hành trang tinh thần của một thời đại". "Tây Tiến" của Quang Dũng chính là thi phẩm như thế. Mở đầu bài thơ, nỗi nhớ da diết đã đánh thức cả một vùng ký ức về thiên nhiên Tây Bắc vừa hiểm trở, hùng vĩ vừa hoang sơ, huyền ảo trong lòng người đọc.',
      approach2: 'Quang Dũng là một người nghệ sĩ đa tài: làm thơ, viết văn, vẽ tranh và soạn nhạc. Hồn thơ ông hào hoa, lãng mạn và đặc biệt nhạy cảm với vẻ đẹp của non sông xứ sở. Được viết năm 1948 tại Phù Lưu Chanh, 14 câu đầu của "Tây Tiến" đã tái hiện một chặng đường hành quân đầy gian lao nhưng ngập tràn chất thơ qua nỗi nhớ "chơi vơi" da diết.',
    },
    body: {
      overview: 'Đoàn quân Tây Tiến thành lập năm 1947, bảo vệ biên cương Tây Bắc. Xuất thân phần lớn là học sinh, trí thức Hà thành. Đoạn thơ mở đầu là bản tráng ca về không gian địa lý hiểm trở gắn liền với bước chân hào kiệt của đoàn binh.',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Khúc dạo đầu của nỗi nhớ da diết và không gian Tây Bắc (2 câu đầu)',
          evidence: '"Sông Mã xa rồi Tây Tiến ơi! / Nhớ về rừng núi nhớ chơi vơi"',
          analysis: 'Tiếng gọi thiết tha "Tây Tiến ơi!" ngân vang, nhân hóa con sông Mã như một chứng nhân lịch sử. Từ láy "chơi vơi" diễn tả nỗi nhớ lơ lửng, mênh mang, vô định giữa không gian nghìn trùng kỷ niệm.',
          commentary: 'Nỗi nhớ không đo đếm bằng khoảng cách địa lý mà đo bằng sự khắc khoải của tâm hồn nghệ sĩ.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Địa bàn hành quân hiểm trở và sự dữ dội, hùng vĩ của dốc núi (Câu 3 - 8)',
          evidence: '"Sài Khao sương lấp đoàn quân mỏi / Mường Lát hoa về trong đêm hơi / Dốc lên khúc khuỷu dốc thăm thẳm / Heo hút cồn mây súng ngửi trời / Ngàn thước lên cao, ngàn thước xuống / Nhà ai Pha Luông mưa xa khơi"',
          analysis: 'Hệ thống địa danh lạ lẫm khơi gợi sự hoang vu bí ẩn. Điệp từ "dốc", từ láy tượng hình "khúc khuỷu", "thăm thẳm" tái hiện độ gập ghềnh, dựng đứng. Hình ảnh hoán dụ - nhân hóa độc đáo "súng ngửi trời" cho thấy độ cao chót vót chạm mây, đồng thời toát lên chất lãng mạn, tinh nghịch kiêu hãnh của người lính trẻ. Nhịp thơ gãy khúc 4/3 rồi trải dài thanh bằng êm đềm ở câu cuối "Nhà ai Pha Luông mưa xa khơi" như một nét cọ lãng mạn xua tan nhọc nhằn.',
          commentary: 'Bút pháp tương phản tài tình giữa gân guốc, hiểm trở và mềm mại, trữ tình mang đậm phong cách hội họa của Quang Dũng.',
        },
        {
          number: 'Luận điểm 3',
          title: 'Sự hy sinh kiên cường và thiên nhiên hoang sơ bí ẩn (Câu 9 - 14)',
          evidence: '"Anh bạn dãi dầu không bước nữa / Gục lên súng mũ bỏ quên đời! / Chiều chiều oai linh thác gầm thét / Đêm đêm Mường Hịch cọp trêu người / Nhớ ôi Tây Tiến cơm lên khói / Mai Châu mùa em thơm nếp xôi"',
          analysis: 'Cách nói giảm nói tránh "không bước nữa", "bỏ quên đời" làm nhẹ bớt nỗi đau mất mát, tôn lên tư thế thanh thản của người lính. Thiên nhiên chốn rừng thiêng nước độc với âm thanh "thác gầm thét", "cọp trêu người" tô đậm thử thách khốc liệt. Khép lại đoạn thơ là hương vị ấm áp của bản làng "cơm lên khói", "thơm nếp xôi" chan chứa tình quân dân.',
          commentary: 'Chất bi tráng hòa quyện với chất lãng mạn tạo nên âm hưởng vừa bi thương vừa hào hùng.',
        },
      ],
      artisticValue: [
        'Bút pháp lãng mạn kết hợp cảm hứng bi tráng, giàu chất hội họa và chất nhạc',
        'Ngôn từ tạo hình đặc sắc, cách phối thanh trắc - bằng tài hoa tạo nên nhịp điệu trập trùng của địa hình',
        'Các biện pháp tu từ nhân hóa, điệp từ, từ láy giàu sức gợi cảm',
      ],
      advancedCommentary: 'Yêu cầu phụ (Nhận xét cảm hứng lãng mạn của Quang Dũng): Cảm hứng lãng mạn thể hiện ở cái tôi vượt lên thực tại khắc nghiệt, tìm thấy vẻ đẹp bay bổng trong gian khổ. Quang Dũng không né tránh hiện thực bi thương nhưng nhìn nhận nó bằng tâm thế người tráng sĩ hào hoa, sẵn sàng xả thân vì độc lập dân tộc.',
      literaryConnection: 'Đối chiếu với bài thơ "Đồng chí" của Chính Hữu: Nếu Chính Hữu nhìn hiện thực bằng con mắt chân thực, mộc mạc của người nông dân mặc áo lính, thì Quang Dũng lại nhìn qua lăng kính hào hoa, bay bổng của trí thức Hà thành.',
    },
    conclusion: '14 câu đầu bài thơ Tây Tiến là một trong những khúc tráng ca tuyệt mỹ của thơ ca kháng chiến chống Pháp. Đoạn thơ không chỉ tạc nên bức tranh thiên nhiên miền Tây hùng vĩ mà còn bất tử hóa bước chân người lính anh hùng trong lòng hậu thế.',
    mindmapPoints: [
      '1. Khúc dạo đầu: Nỗi nhớ "chơi vơi" mênh mông, tiếng gọi thiết tha Tây Tiến ơi và hình tượng dòng sông Mã.',
      '2. Địa danh hoang sơ & dốc núi hiểm trở: Sài Khao, Mường Lát, khúc khuỷu, thăm thẳm, ngàn thước lên cao/xuống.',
      '3. Tư thế ngạo nghễ của người lính: "Súng ngửi trời" - độ cao chót vót hóa thành nét lãng mạn trẻ trung.',
      '4. Hiện thực khắc nghiệt & tư thế ngã xuống: "Bỏ quên đời" - sự hy sinh nhẹ nhõm, thanh thản như giấc ngủ.',
      '5. Tình quân dân đượm nồng: "Cơm lên khói", "thơm nếp xôi" - nốt trầm ấm áp xua tan rét buốt rừng sâu.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Thơ là sự nung nấu của tâm hồn, là giọt ngọc chắt lọc từ những đau thương và lý tưởng cao đẹp.',
        author: 'Sóng Hồng',
        note: 'Dùng cho phần đánh giá cảm hứng lãng mạn và tài năng tạo hình của Quang Dũng.',
      },
      {
        quote: 'Tây Tiến là sự thăng hoa của một tâm hồn lãng mạn giữa một thời đại anh hùng.',
        author: 'Trần Đình Sử',
        note: 'Dẫn chứng nhận định đắt giá để đạt điểm 9+ ở phần kết bài hoặc mở bài.',
      },
    ],
  },

  // 2. Tây Tiến - Tượng đài người lính (8 câu đoạn 3)
  {
    id: 'tay-tien-tuong-dai-nguoi-linh',
    workId: 'tay-tien',
    workTitle: 'Tây Tiến',
    author: 'Quang Dũng',
    topic: 'Phân tích tượng đài người lính Tây Tiến qua đoạn thơ: "Tây Tiến đoàn binh không mọc tóc... Sông Mã gầm lên khúc độc hành"',
    genre: 'tho',
    category: 'doan-trich',
    categoryLabel: 'Đoạn Trích Thơ Trọng Tâm',
    targetScore: '9.0+ Chuyên Sâu',
    timeEstimate: '75 phút',
    tags: ['Tây Tiến', 'Tượng đài người lính', 'Không mọc tóc', 'Dáng kiều thơm', 'Sông Mã gầm'],
    keyQuote: 'Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm...',
    intro: {
      approach1: 'Nhà văn Nguyễn Minh Châu từng viết: "Văn học và đời sống là hai đường tròn đồng tâm mà tâm điểm chính là con người". Trong cuộc kháng chiến chống Pháp trường kỳ, hình tượng người lính đã trở thành linh hồn của thời đại. Đến với "Tây Tiến" của Quang Dũng, bức tượng đài ấy hiện lên sừng sững với vẻ đẹp vừa bi tráng, khốc liệt lại vừa hào hoa, lãng mạn qua 8 câu thơ đoạn 3.',
      approach2: 'Nếu người lính trong "Đồng chí" của Chính Hữu mang vẻ đẹp mộc mạc của quê hương "nước mặn đồng chua", thì người lính trong "Tây Tiến" lại toát lên khí phách tráng sĩ thời phong kiến hòa quyện với tâm hồn thanh niên Hà Nội hào hoa. 8 câu thơ thứ 3 chính là đỉnh cao của bức tượng đài bất tử ấy.',
    },
    body: {
      overview: 'Đoạn thơ là khúc tráng ca tôn vinh sự hy sinh và phẩm chất phi thường của các chiến sĩ Tây Tiến, thể hiện sâu sắc bút pháp bi tráng của Quang Dũng.',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Diện mạo kỳ dị khác thường nhưng toát lên khí phách oai vệ (2 câu đầu)',
          evidence: '"Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm"',
          analysis: 'Cụm từ "đoàn binh" gợi khí thế quân đội nghiêm trang. "Không mọc tóc" và "xanh màu lá" là dấu ấn của bệnh sốt rét rừng hiểm ác làm rụng tóc, da xanh xao. Nhưng Quang Dũng không biến họ thành nạn nhân đáng thương mà nâng lên thành "dữ oai hùm" - vẻ đẹp chúa sơn lâm oai phong, lẫm liệt, làm chủ núi rừng.',
          commentary: 'Hiện thực khốc liệt được khúc xạ qua lăng kính lãng mạn, biến cái tiều tụy thành cái oai hùng.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Thế giới tâm hồn hào hoa, mộng mơ của chàng trai Hà Nội (2 câu tiếp)',
          evidence: '"Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm"',
          analysis: '"Mắt trừng" biểu thị ý chí căm thù giặc, quyết tâm tiêu diệt kẻ thù bảo vệ biên cương. Trái tim người lính không hề khô cằn sắt đá mà vẫn dạt dào tình cảm: "Đêm mơ Hà Nội dáng kiều thơm". Hình ảnh "dáng kiều thơm" là vẻ đẹp thiếu nữ thủ đô thanh lịch - điểm tựa tinh thần nâng bước các anh nơi chiến trường bom đạn.',
          commentary: 'Sự hòa quyện tuyệt đẹp giữa lý tưởng chiến đấu vì non sông và tình yêu đôi lứa trong sáng.',
        },
        {
          number: 'Luận điểm 3',
          title: 'Lý tưởng xả thân cao cả và khúc tráng ca đưa tiễn vĩnh hằng (4 câu cuối)',
          evidence: '"Rải rác biên cương mồ viễn xứ / Chiến trường đi chẳng tiếc đời xanh / Áo bào thay chiếu anh về đất / Sông Mã gầm lên khúc độc hành"',
          analysis: 'Từ Hán Việt trang trọng "biên cương", "viễn xứ", "chiến trường" gợi không khí thiêng liêng cổ kính. Lời khẳng định "chẳng tiếc đời xanh" tuyên ngôn cho lý tưởng "Quyết tử để Tổ quốc quyết sinh". "Áo bào thay chiếu" là sự thật nghiệt ngã (thiếu thốn đến manh chiếu bọc thây) nhưng được thi vị hóa như những dũng tướng xưa. Dòng sông Mã "gầm lên khúc độc hành" tấu khúc nhạc bi hùng của đất mẹ tiễn đưa người con ưu tú.',
          commentary: 'Nỗi đau mất mát không bi lụy mà bừng sáng vẻ đẹp bi tráng trường tồn cùng non sông.',
        },
      ],
      artisticValue: [
        'Hệ thống từ Hán Việt cổ kính tạo sắc thái trang trọng, hào hùng',
        'Bút pháp lãng mạn đẩy các chi tiết đối lập lên đỉnh cao (ốm yếu vs oai hùm, mắt trừng vs dáng kiều thơm)',
        'Âm hưởng câu thơ trầm hùng, kết hợp điệp từ và hình tượng thiên nhiên kỳ vĩ làm nền cho con người',
      ],
      advancedCommentary: 'Yêu cầu phụ (Nhận xét chất bi tráng trong thơ Quang Dũng): "Bi" là nỗi đau đớn, mất mát trước cái chết và bệnh tật; "Tráng" là khí phách hiên ngang, hào hùng vượt lên cái chết. Quang Dũng đã dung hòa trọn vẹn hai yếu tố ấy để xây dựng một tượng đài bất tử.',
      literaryConnection: 'Liên hệ với lý tưởng của thanh niên thời kỳ chống Mỹ qua "Đất Nước" của Nguyễn Khoa Điềm: "Có biết bao người con gái con trai / Trong bốn ngàn lớp người giống ta lứa tuổi / Họ đã sống và chết / Giản dị và bình tâm / Không ai nhớ mặt đặt tên / Nhưng họ đã làm ra Đất Nước".',
    },
    conclusion: 'Đoạn thơ khép lại nhưng tượng đài người lính Tây Tiến vẫn sừng sững tỏa sáng. Đó là biểu tượng chói lọi của chủ nghĩa anh hùng cách mạng Việt Nam thế kỷ XX.',
    mindmapPoints: [
      '1. Diện mạo oai hùng: "Không mọc tóc", "quân xanh màu lá" -> biến chứng bệnh tật hóa thành khí phách "dữ oai hùm".',
      '2. Tâm hồn mộng mơ: "Mắt trừng" canh giữ biên cương, "đêm mơ Hà Nội dáng kiều thơm" - vẻ đẹp hào hoa.',
      '3. Lý tưởng cống hiến: "Chiến trường đi chẳng tiếc đời xanh" - tư thế tráng sĩ vì nước quên thân.',
      '4. Sự hy sinh thiêng liêng: "Áo bào thay chiếu anh về đất" - nói giảm nói tránh tôn vinh sự bất tử.',
      '5. Bản hợp xướng của non sông: "Sông Mã gầm lên khúc độc hành" - thiên nhiên tấu khúc tráng ca bất diệt.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Cái chết của người chiến sĩ không phải là sự kết thúc, mà là sự bắt đầu của một bài ca bất tử.',
        author: 'Nguyễn Đình Thi',
        note: 'Dùng để bình luận về 4 câu cuối đoạn trích.',
      },
    ],
  },

  // 3. Việt Bắc - Bức tranh Tứ bình
  {
    id: 'viet-bac-buc-tranh-tu-binh',
    workId: 'viet-bac',
    workTitle: 'Việt Bắc',
    author: 'Tố Hữu',
    topic: 'Phân tích bức tranh tứ bình bốn mùa qua đoạn thơ trong bài thơ "Việt Bắc": "Ta về, mình có nhớ ta... Nhớ ai tiếng hát ân tình thủy chung"',
    genre: 'tho',
    category: 'doan-trich',
    categoryLabel: 'Đoạn Trích Thơ Trọng Tâm',
    targetScore: '9.0+ Toàn Diện',
    timeEstimate: '75 phút',
    tags: ['Việt Bắc', 'Tố Hữu', 'Bức tranh tứ bình', 'Bốn mùa', 'Ân tình thủy chung', 'Thơ lục bát'],
    keyQuote: 'Ta về, mình có nhớ ta / Ta về, ta nhớ những hoa cùng người / Rừng xanh hoa chuối đỏ tươi...',
    intro: {
      approach1: 'Nhà thơ Xuân Diệu từng viết: "Việt Bắc là đỉnh thơ cao nhất mà Tố Hữu đã bước lên". Được ví như một khúc tình ca - anh hùng ca của kháng chiến, "Việt Bắc" không chỉ dệt nên bởi ân tình cách mạng sâu nặng mà còn lấp lánh vẻ đẹp hội họa cổ điển. Đoạn thơ tái hiện bức tranh tứ bình bốn mùa chính là khúc ngâm tuyệt diệu nhất của sự gắn kết giữa thiên nhiên và con người chiến khu.',
      approach2: 'Tố Hữu là lá cờ đầu của nền thơ ca cách mạng Việt Nam, thơ ông mang tính chất trữ tình chính trị sâu sắc và đậm đà tính dân tộc. Sáng tác vào tháng 10/1954 nhân sự kiện cơ quan Trung ương Đảng và Chính phủ rời chiến khu về lại Thủ đô, đoạn thơ bức tranh tứ bình 10 câu là viên ngọc quý kết tinh tình cảm thủy chung son sắt của người cán bộ về xuôi.',
    },
    body: {
      overview: 'Đoạn thơ gồm 10 câu thơ lục bát, mở đầu bằng 2 câu giới thiệu khái quát và 8 câu kế tiếp chia đều thành 4 cặp lục bát tương ứng với bốn mùa Đông - Xuân - Hè - Thu.',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Lời dẫn dắt gợi mở cảm xúc chủ đạo (2 câu đầu)',
          evidence: '"Ta về, mình có nhớ ta / Ta về, ta nhớ những hoa cùng người"',
          analysis: 'Cặp đại từ nhân xưng "mình - ta" ngọt ngào như ca dao đối đáp giao duyên. Tác giả khẳng định nỗi nhớ gắn liền: nhớ cảnh đẹp ("hoa") và nhớ con người nghĩa tình ("người"). Hoa và người đan quyện làm nên vẻ đẹp linh hồn của đất trời Việt Bắc.',
          commentary: 'Thiên nhiên không đơn thuần là cảnh vật vô tri mà trở thành tấm gương soi chiếu vẻ đẹp con người.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Bức tranh mùa đông rực rỡ và ấm áp (2 câu tiếp)',
          evidence: '"Rừng xanh hoa chuối đỏ tươi / Đèo cao nắng ánh dao gài thắt lưng"',
          analysis: 'Màu "đỏ tươi" của hoa chuối bừng sáng giữa sắc bạt ngàn "rừng xanh" như những ngọn đuốc sưởi ấm mùa đông lạnh giá. Hình ảnh con người lao động trên "đèo cao" với "dao gài thắt lưng" bắt ánh mặt trời lóe sáng, toát lên tư thế làm chủ thiên nhiên kỳ vĩ.',
          commentary: 'Nghệ thuật chấm phá tài hoa, biến cái lạnh giá của mùa đông thành một bức tranh tràn đầy sức sống.',
        },
        {
          number: 'Luận điểm 3',
          title: 'Bức tranh mùa xuân trong trẻo, bừng sáng sắc trắng (2 câu tiếp)',
          evidence: '"Ngày xuân mơ nở trắng rừng / Nhớ người đan nón chuốt từng sợi giang"',
          analysis: 'Động từ "nở" kết hợp với tính từ "trắng rừng" gợi tả sức sống mùa xuân lan tỏa mãnh liệt, phủ trắng không gian rừng núi. Con người xuất hiện trong dáng vẻ cần mẫn, khéo léo "chuốt từng sợi giang" - vẻ đẹp dịu dàng, nết na của người lao động kháng chiến.',
          commentary: 'Sắc trắng hoa mơ thanh khiết tượng trưng cho tâm hồn trong sạch, thủy chung của đồng bào chiến khu.',
        },
        {
          number: 'Luận điểm 4',
          title: 'Bức tranh mùa hè rộn rã âm thanh và ngập tràn sắc vàng (2 câu tiếp)',
          evidence: '"Ve kêu rừng phách đổ vàng / Nhớ cô em gái hái măng một mình"',
          analysis: 'Động từ mạnh "đổ" diễn tả sự chuyển màu đột ngột, mau lẹ của cánh rừng phách khi tiếng ve cất lên. Hình ảnh "cô em gái hái măng một mình" không gợi sự cô đơn mà toát lên vẻ đẹp cần cù, chịu thương chịu khó, thầm lặng cống hiến cho cách mạng.',
          commentary: 'Sự giao thoa diệu kỳ giữa thính giác (tiếng ve) và thị giác (sắc vàng) làm cho câu thơ bừng lên sức sống cuồn cuộn.',
        },
        {
          number: 'Luận điểm 5',
          title: 'Bức tranh mùa thu thanh bình, thơ mộng và nghĩa tình (2 câu cuối)',
          evidence: '"Rừng thu trăng rọi hòa bình / Nhớ ai tiếng hát ân tình thủy chung"',
          analysis: 'Ánh trăng thu rọi sáng không gian tĩnh lặng, tượng trưng cho nền hòa bình độc lập vừa giành lại được. Đại từ phiếm chỉ "nhớ ai" cùng giai điệu "tiếng hát ân tình thủy chung" ngân nga, lắng đọng tình cảm keo sơn giữa người đi và kẻ ở.',
          commentary: 'Khép lại bức tranh tứ bình bằng âm hưởng ân tình ngàn đời của đạo lý "Uống nước nhớ nguồn".',
        },
      ],
      artisticValue: [
        'Thể thơ lục bát truyền thống uyển chuyển, nhịp điệu ngọt ngào như lời ru ca dao',
        'Kết cấu đăng đối hài hòa: mỗi mùa gồm 1 câu tả cảnh kết hợp 1 câu tả người',
        'Nghệ thuật sử dụng màu sắc ấn tượng (đỏ tươi - xanh, trắng rừng, vàng rực, ánh trăng ngà)',
      ],
      advancedCommentary: 'Yêu cầu phụ (Nhận xét tính dân tộc trong đoạn thơ): Tính dân tộc biểu hiện sâu sắc qua thể thơ lục bát, cấu trúc xưng hô mình - ta đậm đà màu sắc văn học dân gian, và đặc biệt là tấm lòng trân trọng con người lao động mộc mạc cùng truyền thống ân nghĩa thủy chung của dân tộc Việt Nam.',
      literaryConnection: 'Đối chiếu với các bộ tứ bình cổ điển trong thơ trung đại (Mai - Lan - Cúc - Trúc): Tố Hữu đã hiện đại hóa thể loại tứ bình bằng cách đưa vào đó hình ảnh người lao động bình dị và lý tưởng cách mạng.',
    },
    conclusion: 'Bức tranh tứ bình trong bài thơ "Việt Bắc" là kiệt tác thi ca mẫu mực về tình yêu quê hương, đất nước và con người cách mạng. Đoạn thơ mãi đọng lại trong tâm trí người đọc khúc hát tri ân sâu lắng của cả một thời đại anh hùng.',
    mindmapPoints: [
      '1. Khái quát: Nỗi nhớ hoa & người - sự hòa quyện giữa đất trời và đồng bào chiến khu.',
      '2. Mùa đông: Sắc hoa chuối đỏ tươi giữa rừng xanh; con người trên đèo cao làm chủ núi rừng.',
      '3. Mùa xuân: Trắng rừng hoa mơ thanh khiết; bàn tay chuốt sợi giang cần mẫn khéo léo.',
      '4. Mùa hè: Rừng phách đổ vàng theo tiếng ve rộn rã; cô em gái hái măng chịu thương chịu khó.',
      '5. Mùa thu: Trăng rọi hòa bình; tiếng hát ân tình thủy chung kết đọng đạo lý dân tộc.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Thơ Tố Hữu là thơ trữ tình chính trị. Trái tim ông luôn đập cùng nhịp đập của non sông và quần chúng cần lao.',
        author: 'Chế Lan Viên',
        note: 'Dùng để đánh giá phong cách nghệ thuật của Tố Hữu ở phần nhận xét nâng cao.',
      },
    ],
  },

  // 4. Đất Nước - Nguyễn Khoa Điềm: Đoạn đầu nguồn gốc
  {
    id: 'dat-nuoc-nguon-goc',
    workId: 'dat-nuoc',
    workTitle: 'Đất Nước',
    author: 'Nguyễn Khoa Điềm',
    topic: 'Cảm nhận về nguồn gốc và sự hình thành của Đất Nước qua đoạn trích: "Khi ta lớn lên Đất Nước đã có rồi... Đất Nước có từ ngày đó..." trong trường ca "Mặt đường khát vọng"',
    genre: 'tho',
    category: 'doan-trich',
    categoryLabel: 'Đoạn Trích Thơ Trọng Tâm',
    targetScore: '9.0+ Toàn Diện',
    timeEstimate: '75 phút',
    tags: ['Đất Nước', 'Nguyễn Khoa Điềm', 'Mặt đường khát vọng', 'Nguồn gốc Đất Nước', 'Chất liệu văn hóa dân gian'],
    keyQuote: 'Khi ta lớn lên Đất Nước đã có rồi / Đất Nước có trong những cái "ngày xửa ngày xưa"...',
    intro: {
      approach1: 'Nhà thơ Chế Lan Viên từng viết: "Tổ quốc bao giờ đẹp thế này chăng? / Chưa đâu! Và ngay cả trong những ngày đẹp nhất...". Đề tài đất nước luôn là nguồn cảm hứng vô tận trong thơ ca cách mạng Việt Nam. Nhưng nếu các thi sĩ tiền bối thường nhìn Đất Nước qua tầm vóc kỳ vĩ, lớn lao thì Nguyễn Khoa Điềm lại khám phá Đất Nước từ chiều sâu văn hóa, phong tục và những điều gần gũi nhất trong tâm hồn mỗi con người.',
      approach2: 'Nguyễn Khoa Điềm thuộc thế hệ các nhà thơ trưởng thành trong kháng chiến chống Mỹ. Thơ ông giàu chất suy tư, cảm xúc dồn nén và đậm đặc chất liệu văn hóa dân gian. Trích đoạn mở đầu phần "Đất Nước" trong trường ca "Mặt đường khát vọng" (1971) đã đưa ra câu trả lời bình dị mà thiêng liêng về cội nguồn của Đất Nước.',
    },
    body: {
      overview: 'Đoạn thơ gồm 9 câu, cấu trúc theo hình thức trò chuyện tâm tình nhằm định nghĩa cội nguồn Đất Nước bắt đầu từ bao giờ và hiện hữu ở đâu trong đời sống người Việt.',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Sự hiện diện hiển nhiên và lâu đời của Đất Nước (2 câu đầu)',
          evidence: '"Khi ta lớn lên Đất Nước đã có rồi / Đất Nước có trong những cái "ngày xửa ngày xưa" mẹ thường hay kể"',
          analysis: 'Lời thơ cất lên tự nhiên như một lời khẳng định chân lý. Đất Nước không phải là khái niệm trừu tượng xa vời mà gắn liền với tuổi thơ, với lời ru và câu chuyện cổ tích thấm đẫm tình yêu thương của mẹ hiền.',
          commentary: 'Đất Nước vừa trường tồn vô tận trong chiều sâu lịch sử, vừa gần gũi thân thương trong ký ức mỗi cá nhân.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Đất Nước gắn liền với phong tục, lối sống và tập quán ngàn đời (Câu 3 - 5)',
          evidence: '"Đất Nước bắt đầu với miếng trầu bây giờ bà ăn / Đất Nước lớn lên khi dân mình biết trồng tre mà đánh giặc / Tóc mẹ thì bới sau đầu"',
          analysis: 'Phong tục ăn trầu gợi nhớ sự tích Trầu Cau - biểu tượng của tình nghĩa anh em, vợ chồng son sắt. Cây tre đánh giặc nhắc nhở truyền thống yêu nước kiên cường của Thánh Gióng. Hình ảnh "tóc mẹ thì bới sau đầu" là nét đẹp thuần hậu, truyền thống của người phụ nữ Việt Nam.',
          commentary: 'Mỗi chi tiết văn hóa bình dị đều chứa đựng hồn cốt bất diệt của non sông.',
        },
        {
          number: 'Luận điểm 3',
          title: 'Đất Nước hình thành từ tình nghĩa gia đình và lao động nhọc nhằn (Câu 6 - 9)',
          evidence: '"Cha mẹ thương nhau bằng gừng cay muối mặn / Cái kèo, cái cột thành tên / Hạt gạo phải một nắng hai sương xay, giã, dần, sàng / Đất Nước có từ ngày đó..."',
          analysis: 'Thành ngữ "gừng cay muối mặn" khẳng định đạo lý vợ chồng thủy chung gắn bó qua gian khó. Tục đặt tên con bằng "cái kèo, cái cột" là dấu ấn của nền văn minh lúa nước, ước mong con khỏe mạnh mộc mạc. Quy trình làm ra "hạt gạo" qua bao công đoạn "xay, giã, dần, sàng" tôn vinh giá trị của sức lao động cần cù. Câu kết "Đất Nước có từ ngày đó..." khẳng định Đất Nước sinh ra từ chính hơi thở cuộc sống của nhân dân.',
          commentary: 'Sự tích hợp nhuần nhuyễn chất liệu dân gian tạo nên một cái nhìn mới mẻ, sâu sắc về Tổ quốc.',
        },
      ],
      artisticValue: [
        'Vận dụng sáng tạo chất liệu văn hóa dân gian (ca dao, cổ tích, phong tục, thành ngữ)',
        'Giọng thơ tâm tình, trầm lắng, kết hợp giữa chất trữ tình và chất chính luận triết luận',
        'Hình thức câu thơ tự do linh hoạt, phóng khoáng như dòng chảy của tư tưởng',
      ],
      advancedCommentary: 'Yêu cầu phụ (Nhận xét nét độc đáo trong quan niệm về Đất Nước của Nguyễn Khoa Điềm): Tác giả không định nghĩa Đất Nước bằng niên đại lịch sử hay biên giới lãnh thổ khô khan, mà bằng cội nguồn văn hóa, lối sống và tình cảm nhân dân. Đất Nước không ở đâu xa mà kết tinh ngay trong mỗi nếp nhà, mỗi hạt gạo và mỗi phong tục cổ truyền.',
      literaryConnection: 'So sánh với cách nhìn Đất Nước của Nguyễn Đình Thi trong bài "Đất nước": Nguyễn Đình Thi nhìn Đất Nước qua bề dày đau thương và quật khởi anh hùng ("Nước chúng ta / Nước những người chưa bao giờ khuất"), còn Nguyễn Khoa Điềm nhìn từ chiều sâu văn hóa đời thường.',
    },
    conclusion: 'Đoạn thơ mở đầu của Nguyễn Khoa Điềm đã chạm vào nơi sâu thẳm nhất trong tâm thức người Việt. Đất Nước hiện lên thiêng liêng nhưng vô cùng ấm áp, gắn chặt với cội nguồn và trách nhiệm của mỗi người con đất Việt.',
    mindmapPoints: [
      '1. Khẳng định: "Khi ta lớn lên Đất Nước đã có rồi" - sự hiện diện tự nhiên, hiển nhiên từ cổ xưa.',
      '2. Gắn với ký ức tuổi thơ: Câu chuyện cổ tích "ngày xửa ngày xưa" mẹ kể.',
      '3. Gắn với phong tục & truyền thống: Miếng trầu của bà, cây tre đánh giặc giữ nước, bới tóc của mẹ.',
      '4. Gắn với tình nghĩa gia đình & lao động: Cha mẹ thương nhau bằng gừng cay muối mặn, hạt gạo một nắng hai sương.',
      '5. Kết luận đúc kết: "Đất Nước có từ ngày đó..." - Đất Nước là sự kết tinh của lịch sử và tâm hồn nhân dân.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Văn học dân gian là bầu sữa mẹ nuôi dưỡng tâm hồn và bản sắc thơ ca dân tộc.',
        author: 'Xuân Diệu',
        note: 'Dùng để bình luận về nghệ thuật sử dụng chất liệu dân gian của Nguyễn Khoa Điềm.',
      },
    ],
  },

  // 5. Đất Nước - Tư tưởng "Đất Nước của Nhân dân"
  {
    id: 'dat-nuoc-cua-nhan-dan',
    workId: 'dat-nuoc',
    workTitle: 'Đất Nước',
    author: 'Nguyễn Khoa Điềm',
    topic: 'Làm sáng tỏ tư tưởng "Đất Nước của Nhân dân" qua phần 2 đoạn trích "Đất Nước" của Nguyễn Khoa Điềm',
    genre: 'tho',
    category: 'ly-luan',
    categoryLabel: 'Dạng Đề Tư Tưởng & Luận Điểm Sâu',
    targetScore: '9.5+ Tuyệt Đối',
    timeEstimate: '80 phút',
    tags: ['Đất Nước', 'Tư tưởng Đất Nước của Nhân dân', 'Nguyễn Khoa Điềm', 'Văn hóa địa lý lịch sử'],
    keyQuote: 'Để Đất Nước này là Đất Nước Nhuận nhân / Đất Nước của Nhân dân, Đất Nước của ca dao thần thoại...',
    intro: {
      approach1: 'Trong dòng chảy lịch sử bốn ngàn năm, đã có biết bao triều đại hưng phế, biết bao danh tướng lưu danh sử sách. Nhưng ai mới thực sự là chủ nhân đích thực, là người tạc nên hình hài non sông gấm vóc? Trong bản trường ca "Mặt đường khát vọng", nhà thơ Nguyễn Khoa Điềm đã cất lên câu trả lời sâu sắc và xúc động nhất: "Đất Nước này là Đất Nước của Nhân dân".',
      approach2: 'Tư tưởng "Lấy dân làm gốc" vốn là truyền thống đạo lý ngàn đời của dân tộc ta từ thời Nguyễn Trãi. Đến thời đại chống Mỹ cứu nước, tư tưởng ấy đã được Nguyễn Khoa Điềm nâng lên thành một hệ thống triết lý thơ ca hoàn chỉnh, rực rỡ qua đoạn trích "Đất Nước".',
    },
    body: {
      overview: 'Tư tưởng Đất Nước của Nhân dân là cảm hứng cốt lõi xuyên suốt, được nhà thơ soi chiếu toàn diện trên ba bình diện: Không gian địa lý, Thời gian lịch sử và Bản sắc văn hóa truyền thống.',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Nhân dân là người kiến tạo nên không gian địa lý và cảnh quan non sông',
          evidence: '"Những người vợ nhớ chồng còn góp cho Đất Nước những núi Vọng Phu / Cặp vợ chồng yêu nhau góp nên hòn Trống Mái / Người học trò nghèo giúp cho Đất Nước mình thêm núi Bút non Nghiên / Gót ngựa của Phù Đổng..."',
          analysis: 'Nhà thơ nhìn cảnh sắc non sông không phải như những hiện tượng tự nhiên thuần túy mà là sự hóa thân từ tâm hồn, số phận và ước vọng của nhân dân. Tình nghĩa thủy chung hóa thành núi Vọng Phu, tình yêu đôi lứa tạo nên hòn Trống Mái, tinh thần hiếu học tạc nên núi Bút non Nghiên, lòng yêu nước để lại gót ngựa Phù Đổng. Điệp từ "góp" lặp lại nhiều lần khẳng định nhân dân chính là người thầm lặng dâng hiến cho dáng hình xứ sở.',
          commentary: 'Địa lý Đất Nước chính là bảo tàng lưu giữ tâm hồn và đạo đức của nhân dân qua muôn đời.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Nhân dân là người làm nên lịch sử bốn ngàn năm bảo vệ Tổ quốc',
          evidence: '"Họ đã sống và chết / Giản dị và bình tâm / Không ai nhớ mặt đặt tên / Nhưng họ đã làm ra Đất Nước"',
          analysis: 'Nhà thơ hướng ngòi bút về bốn ngàn lớp người bình dị vô danh. Họ không phải tướng lĩnh quyền quý nhưng khi giặc đến thì "con trai ra trận / người con gái trở về nuôi cái cùng con". Họ giữ ngọn lửa, truyền hạt lúa, bảo tồn tiếng mẹ đẻ và sẵn sàng ngã xuống để non sông trường tồn.',
          commentary: 'Lịch sử chân chính không chỉ viết bởi những bậc anh hùng vĩ đại mà được bồi đắp bằng máu xương của hàng triệu người con vô danh.',
        },
        {
          number: 'Luận điểm 3',
          title: 'Nhân dân là chủ nhân sáng tạo nên kho tàng văn hóa dân tộc',
          evidence: '"Đất Nước của Nhân dân, Đất Nước của ca dao thần thoại / Dạy anh biết "yêu em từ thuở trong nôi" / Biết quý công cầm vàng những ngày lặn lội / Biết trồng tre đợi ngày thành gậy / Đi trả thù mà không sợ dài lâu"',
          analysis: 'Đất Nước kết tinh rực rỡ trong ca dao thần thoại. Tác giả chắt lọc ba vẻ đẹp cốt lõi của tâm hồn người Việt: Say đắm trong tình yêu thủy chung, Trân trọng sức lao động và sự ân nghĩa, Kiên cường bất khuất chống ngoại xâm.',
          commentary: 'Văn hóa chính là căn cước tâm hồn giúp dân tộc trường tồn trước mọi biến thiên bão táp.',
        },
      ],
      artisticValue: [
        'Thể thơ tự do phóng khoáng, biến hóa nhịp điệu theo dòng cảm xúc triết luận sâu sắc',
        'Sự kết hợp nhuần nhuyễn giữa cảm xúc tha thiết và suy tư chính luận',
        'Vốn tri thức văn hóa, dân gian phong phú được chuyển hóa bằng ngôn từ hiện đại',
      ],
      advancedCommentary: 'Yêu cầu phụ (Ý nghĩa thời đại của tư tưởng Đất Nước của Nhân dân): Ra đời trong khói lửa chiến tranh tại chiến trường Trị Thiên khốc liệt năm 1971, tư tưởng này đã đánh thức lòng tự hào dân tộc, khơi dậy tinh thần dấn thân của tuổi trẻ các đô thị miền Nam xuống đường chống Mỹ, khẳng định trách nhiệm của mỗi công dân với non sông.',
      literaryConnection: 'Liên hệ với tư tưởng nhân nghĩa trong "Bình Ngô đại cáo" của Nguyễn Trãi: "Việc nhân nghĩa cốt ở yên dân / Quân điếu phạt trước lo trừ bạo" để thấy sự tiếp nối vẻ vang của truyền thống dân tộc.',
    },
    conclusion: 'Tư tưởng "Đất Nước của Nhân dân" trong thơ Nguyễn Khoa Điềm là đỉnh cao của nhận thức văn học thời kỳ kháng chiến chống Mỹ. Bài thơ mãi là bài học thiêng liêng về lòng biết ơn và ý thức cống hiến của thế hệ trẻ hôm nay.',
    mindmapPoints: [
      '1. Bình diện địa lý: Nhân dân "góp" cuộc đời, tình yêu, lòng dũng cảm tạc nên núi Vọng Phu, Trống Mái, núi Bút non Nghiên.',
      '2. Bình diện lịch sử: Tôn vinh bốn ngàn lớp người vô danh "không ai nhớ mặt đặt tên" nhưng đã làm ra Đất Nước.',
      '3. Bình diện văn hóa: Đất Nước của ca dao thần thoại - tình yêu thủy chung, quý trọng lao động, kiên cường đánh giặc.',
      '4. Nghệ thuật: Giọng thơ chính luận - trữ tình, chất liệu văn hóa dân gian thấm sâu vào từng câu chữ.',
      '5. Ý nghĩa thời đại: Thức tỉnh tuổi trẻ xuống đường bảo vệ độc lập dân tộc.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Dân là gốc nước, chở thuyền cũng là dân mà lật thuyền cũng là dân.',
        author: 'Nguyễn Trãi',
        note: 'Dùng cho phần dẫn dắt mở bài hoặc liên hệ lịch sử tư tưởng.',
      },
    ],
  },

  // 6. Sóng - Xuân Quỳnh: Vẻ đẹp tình yêu người phụ nữ
  {
    id: 'song-xuan-quynh-tinh-yeu',
    workId: 'song',
    workTitle: 'Sóng',
    author: 'Xuân Quỳnh',
    topic: 'Phân tích vẻ đẹp tâm hồn người phụ nữ trong tình yêu qua bài thơ "Sóng" của Xuân Quỳnh',
    genre: 'tho',
    category: 'toan-canh',
    categoryLabel: 'Phân Tích Toàn Bài & Hình Tượng',
    targetScore: '9.0+ Toàn Diện',
    timeEstimate: '75 phút',
    tags: ['Sóng', 'Xuân Quỳnh', 'Hình tượng Sóng', 'Tình yêu người phụ nữ', 'Nỗi nhớ', 'Thủy chung'],
    keyQuote: 'Dữ dội và dịu êm / Ồn ào và lặng lẽ / Sông không hiểu nổi mình / Sóng tìm ra tận bể...',
    intro: {
      approach1: 'Nhà thơ Puskin từng viết: "Tôi yêu em: đến nay chừng có thể / Ngọn lửa tình chưa hẳn đã tàn phai...". Tình yêu muôn đời là đề tài vĩnh cửu của thi ca nhân loại. Nhưng nếu thơ tình trước đây phần lớn cất lên từ tiếng lòng của phái mạnh, thì "Sóng" của Xuân Quỳnh là tiếng nói táo bạo, chân thành và đằm thắm của chính người phụ nữ khi yêu.',
      approach2: 'Xuân Quỳnh là một trong những nhà thơ nữ tiêu biểu nhất của nền thơ ca hiện đại Việt Nam. Thơ bà là tiếng lòng của một tâm hồn giàu lòng trắc ẩn, khao khát hạnh phúc đời thường nhưng luôn khắc khoải âu lo trước sự hữu hạn của thời gian. Sáng tác năm 1967 tại vùng biển Diêm Điền, "Sóng" chính là bài ca tuyệt đẹp về tình yêu của người phụ nữ.',
    },
    body: {
      overview: 'Bài thơ được xây dựng trên kết cấu sóng đôi độc đáo: "Sóng" và "Em" - hai thực thể lúc phân tách, lúc hòa nhập làm một để soi chiếu tâm trạng tình yêu.',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Quy luật trái ngược đầy bí ẩn của sóng và sự chủ động tìm kiếm tình yêu (Khổ 1 - 2)',
          evidence: '"Dữ dội và dịu êm / Ồn ào và lặng lẽ / Sông không hiểu nổi mình / Sóng tìm ra tận bể"',
          analysis: 'Các cặp tính từ tương phản diễn tả các trạng thái đối lập phức tạp của sóng biển cũng như tâm hồn người phụ nữ khi yêu: lúc mãnh liệt bùng cháy, lúc dịu dàng e ấp. Hành động "tìm ra tận bể" thể hiện sự chủ động, quyết liệt bứt phá khỏi những không gian chật hẹp để tìm kiếm tình yêu đích thực.',
          commentary: 'Nét mới mẻ, hiện đại trong quan niệm tình yêu của người phụ nữ thời đại mới.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Khát vọng khám phá nguồn cội bí ẩn của tình yêu (Khổ 3 - 4)',
          evidence: '"Trước muôn trùng sóng bể / Em nghĩ về anh, em / Em nghĩ về biển lớn / Từ nơi nào sóng lên? / Sóng bắt đầu từ gió / Gió bắt đầu từ đâu? / Em cũng không biết nữa / Khi nào ta yêu nhau"',
          analysis: 'Điệp từ "em nghĩ" thể hiện sự suy tư sâu sắc. Câu hỏi tự nhiên bất ngờ truy tìm cội nguồn của sóng và tình yêu dẫn đến câu trả lời bất lực đáng yêu: "Em cũng không biết nữa". Tình yêu là sự rung động kỳ diệu của trái tim, không thể lý giải bằng lý trí máy móc.',
          commentary: 'Vẻ đẹp hồn nhiên, trong sáng và đầy nữ tính của Xuân Quỳnh.',
        },
        {
          number: 'Luận điểm 3',
          title: 'Nỗi nhớ da diết chiếm lĩnh cả không gian và thời gian (Khổ 5)',
          evidence: '"Con sóng dưới lòng sâu / Con sóng trên mặt nước / Ôi con sóng nhớ bờ / Ngày đêm không ngủ được / Lòng em nhớ đến anh / Cả trong mơ còn thức"',
          analysis: 'Khổ thơ duy nhất dài 6 câu phá cách. Nỗi nhớ của sóng với bờ bao trùm chiều sâu ("lòng sâu"), bề rộng ("mặt nước") và thời gian ("ngày đêm không ngủ được"). Nhưng mãnh liệt nhất là nỗi nhớ của "Em": "Cả trong mơ còn thức" - ý thức tình yêu len lỏi vào cả cõi vô thức, chiếm trọn tâm hồn.',
          commentary: 'Đỉnh cao của nghệ thuật diễn tả nỗi nhớ trong thơ ca hiện đại.',
        },
        {
          number: 'Luận điểm 4',
          title: 'Lòng thủy chung son sắt và khát vọng bất tử hóa tình yêu (Khổ 6 - 9)',
          evidence: '"Dẫu xuôi về phương bắc / Dẫu ngược về phương nam / Nơi nào em cũng nghĩ / Hướng về anh - một phương / ... / Làm sao được tan ra / Thành trăm con sóng nhỏ / Giữa biển lớn tình yêu / Để ngàn năm còn vỗ"',
          analysis: 'Cách nói đảo "dẫu xuôi về bắc, dẫu ngược về nam" gợi cuộc đời đầy trắc trở, biến động nhưng trái tim chỉ có một phương duy nhất: "phương anh". Nhận thức được đời người hữu hạn trước thời gian vô thủy vô chung, nhà thơ khao khát "tan ra" không phải để biến mất mà để hòa vào đại dương tình yêu nhân loại, bất tử cùng thời gian.',
          commentary: 'Khát vọng hiến dâng cao cả, vượt lên sự hữu hạn của kiếp người.',
        },
      ],
      artisticValue: [
        'Thể thơ 5 chữ nhịp nhàng mô phỏng nhịp sóng biển vỗ bờ miên man',
        'Hình tượng ẩn dụ sóng đôi "Sóng - Em" độc đáo, tạo sức truyền cảm mãnh liệt',
        'Ngôn từ mộc mạc, tha thiết, giàu nữ tính và triết lý nhân sinh sâu sắc',
      ],
      advancedCommentary: 'Yêu cầu phụ (Nhận xét nét đẹp hiện đại hòa quyện truyền thống): Nét truyền thống thể hiện ở sự thủy chung, kín đáo, son sắt "hướng về anh một phương". Nét hiện đại thể hiện ở sự chủ động, quyết liệt tìm kiếm tình yêu đích thực và khát vọng hiến dâng bất tử hóa.',
      literaryConnection: 'Liên hệ với nỗi nhớ trong ca dao: "Khăn thương nhớ ai / Khăn rơi xuống đất... Đèn thương nhớ ai / Mà đèn không tắt..." để thấy mạch nguồn dân tộc tuôn chảy trong thơ Xuân Quỳnh.',
    },
    conclusion: '"Sóng" là đóa hoa tình yêu rực rỡ nhất trong vườn thơ kháng chiến chống Mỹ. Bài thơ mãi là bài ca rung động trái tim bao thế hệ bởi vẻ đẹp trong sáng, nồng nàn và thủy chung của người phụ nữ Việt Nam.',
    mindmapPoints: [
      '1. Khổ 1-2: Bản chất đối lập của sóng và sự chủ động tìm kiếm bến bờ tình yêu đích thực.',
      '2. Khổ 3-4: Khát vọng lý giải nguồn cội tình yêu -> vẻ đẹp ngây thơ, đáng yêu.',
      '3. Khổ 5: Nỗi nhớ da diết bao trùm không gian và thời gian ("Cả trong mơ còn thức").',
      '4. Khổ 6-7: Lòng thủy chung son sắt hướng về một phương duy nhất: "phương anh".',
      '5. Khổ 8-9: Chiêm nghiệm về thời gian và khát vọng "tan ra" để bất tử hóa tình yêu.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Thơ là tiếng lòng của một người nhưng là tiếng nói của muôn người.',
        author: 'Lamartine',
        note: 'Dùng để mở rộng về sức lan tỏa của bài thơ Sóng.',
      },
    ],
  },

  // 7. Vợ chồng A Phủ - Tô Hoài: Sức sống tiềm tàng của Mị đêm mùa xuân
  {
    id: 'vo-chong-a-phu-mi-mua-xuan',
    workId: 'vo-chong-a-phu',
    workTitle: 'Vợ chồng A Phủ',
    author: 'Tô Hoài',
    topic: 'Phân tích sức sống tiềm tàng và sự trỗi dậy của nhân vật Mị trong đêm tình mùa xuân ở Hồng Ngài (Vợ chồng A Phủ - Tô Hoài)',
    genre: 'truyen',
    category: 'nhan-vat',
    categoryLabel: 'Phân Tích Nhân Vật Trọng Tâm',
    targetScore: '9.0+ Toàn Diện',
    timeEstimate: '75 phút',
    tags: ['Vợ chồng A Phủ', 'Tô Hoài', 'Nhân vật Mị', 'Đêm tình mùa xuân', 'Sức sống tiềm tàng', 'Tiếng sáo'],
    keyQuote: 'Mị thấy phơi phới trở lại, trong lòng đột nhiên vui sướng như những đêm Tết ngày trước...',
    intro: {
      approach1: 'Nhà văn Lỗ Tấn từng viết: "Ước mơ không phải là cái gì sẵn có, cũng không phải là cái gì không thể có. Nó giống như con đường chưa có trên mặt đất; người ta đi mãi thì thành đường thôi". Đến với kiệt tác "Vợ chồng A Phủ" của Tô Hoài, người đọc xúc động trước hành trình đi tìm sự sống của nhân vật Mị. Đêm tình mùa xuân tại Hồng Ngài chính là khúc dạo đầu bừng sáng cho ngọn lửa sống mãnh liệt âm ỉ cháy dưới tàn tro cay đắng.',
      approach2: 'Tô Hoài là nhà văn có vốn hiểu biết sâu sắc và phong phú về phong tục tập quán của các dân tộc thiểu số miền núi Tây Bắc. Được viết năm 1952 sau chuyến đi thực tế cùng bộ đội giải phóng Tây Bắc, "Vợ chồng A Phủ" đã khắc họa thành công sức sống kỳ diệu của nhân vật Mị, minh chứng cho chân lý: bạo lực cường quyền có thể đày đọa thể xác nhưng không thể dập tắt khát vọng tự do của con người.',
    },
    body: {
      overview: 'Mị vốn là cô gái Mèo trẻ trung, xinh đẹp, tài hoa thổi lá hay như thổi sáo. Vì món nợ truyền kiếp của cha mẹ, Mị bị bắt làm con dâu gạt nợ nhà thống lý Pá Tra, bị đày đọa đến mức trơ lì cảm xúc "lùi lũi như con rùa nuôi nơi xó cửa".',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Những tác nhân đánh thức tâm hồn Mị trong đêm xuân',
          evidence: 'Khung cảnh mùa xuân Hồng Ngài: váy hoa phơi trên mỏm đá xòe như con bướm sặc sỡ; tiếng cười rộn rã của lũ trẻ; men rượu nồng nàn; và đặc biệt là âm thanh tiếng sáo gọi bạn tình "lơ lửng bay ngoài đường".',
          analysis: 'Tiếng sáo là chi tiết nghệ thuật đắt giá bậc nhất. Tiếng sáo từ xa đến gần, từ ngoại cảnh thẩm thấu vào nội tâm Mị. Men rượu ngấm vào khiến Mị lãng quên thực tại cay đắng, sống lại ký ức thanh xuân tươi đẹp.',
          commentary: 'Nghệ thuật đòn bẩy không gian tâm lý tài hoa của Tô Hoài.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Diễn biến tâm lý hồi sinh và khát vọng hạnh phúc của Mị',
          evidence: '"Mị thấy phơi phới trở lại, trong lòng đột nhiên vui sướng như những đêm Tết ngày trước... Mị trẻ lắm. Mị vẫn còn trẻ. Mị muốn đi chơi!"',
          analysis: 'Ý thức về quyền sống và tuổi trẻ bừng tỉnh. Nhận thức được bi kịch trớ trêu: "A Sử với Mị không có lòng với nhau mà vẫn phải ở với nhau!", Mị nghĩ đến cái chết "nếu có nắm lá ngón trong tay lúc này, Mị sẽ ăn cho chết ngay". Ý nghĩ muốn chết chính là biểu hiện cao nhất của sự thức tỉnh nhân phẩm: Mị không chấp nhận kiếp sống nô lệ.',
          commentary: 'Nghịch lý tâm lý sâu sắc: muốn chết vì không muốn sống kiếp làm trâu làm ngựa.',
        },
        {
          number: 'Luận điểm 3',
          title: 'Hành động chuẩn bị đi chơi và sức mạnh vượt qua sự trói buộc bạo tàn',
          evidence: 'Mị thắp đèn cho sáng căn phòng tăm tối, quấn lại tóc, với lấy chiếc váy hoa đẹp. Khi A Sử tàn nhẫn trói đứng Mị vào cột nhà bằng cả thúng sợi đay, thể xác Mị bị trói chặt nhưng tâm hồn Mị vẫn "đi theo những cuộc chơi, những đám chơi", vẫn "nghe tiếng sáo đưa Mị đi theo những cuộc chơi".',
          analysis: 'Hành động phản kháng âm thầm chứng minh sức sống của Mị đã chiến thắng sợi dây trói của bạo lực phong kiến. Tiếng sáo đã biến thành sợi dây tâm linh nâng đỡ Mị vượt lên nỗi đau thể xác.',
          commentary: 'Sự đối lập gay gắt giữa bạo lực tàn bạo của giai cấp thống trị và sức sống bất diệt của người phụ nữ lao động.',
        },
      ],
      artisticValue: [
        'Nghệ thuật miêu tả tâm lý nhân vật bậc thầy, tinh tế theo từng cung bậc cảm xúc',
        'Chi tiết nghệ thuật đặc sắc (tiếng sáo, ngọn đèn, bát rượu, nắm lá ngón)',
        'Ngôn ngữ kể chuyện giàu chất thơ, thấm đượm màu sắc phong tục Tây Bắc',
      ],
      advancedCommentary: 'Yêu cầu phụ (Nhận xét giá trị nhân đạo mới mẻ của Tô Hoài): Giá trị nhân đạo không chỉ dừng lại ở sự xót thương số phận bi kịch của người nông dân vùng cao, mà quan trọng hơn là phát hiện và ngợi ca sức sống tiềm tàng, khả năng tự giải thoát của họ.',
      literaryConnection: 'Đối chiếu với nhân vật chị Dậu trong "Tắt đèn" của Ngô Tất Tố: Chị Dậu phản kháng bột phát trong cơn phẫn nộ cùng cực, còn Mị phản kháng từ chiều sâu nội tâm được đánh thức bởi tiếng gọi của tự do và tình yêu.',
    },
    conclusion: 'Đoạn trích đêm tình mùa xuân là một trong những trang văn đẹp nhất của văn xuôi hiện đại Việt Nam. Qua nhân vật Mị, Tô Hoài đã thắp lên niềm tin bất diệt vào phẩm giá và sức sống mãnh liệt của con người nghèo khổ.',
    mindmapPoints: [
      '1. Hoàn cảnh trước đêm xuân: Mị bị tê liệt cảm xúc, "lùi lũi như con rùa nuôi nơi xó cửa".',
      '2. Tác nhân đánh thức: Cảnh sắc xuân Tây Bắc, men rượu nồng nàn và tiếng sáo gọi bạn tình thiết tha.',
      '3. Tâm lý hồi sinh: "Mị trẻ lắm, Mị muốn đi chơi" -> nhận thức bi kịch và ý nghĩ muốn chết chứng minh sự thức tỉnh.',
      '4. Hành động chuẩn bị: Thắp đèn, quấn tóc, lấy váy hoa -> hành động tự khẳng định quyền làm người.',
      '5. Chiến thắng bạo lực: Bị A Sử trói đứng vào cột nhưng tâm hồn vẫn bay theo tiếng sáo ngoài rừng.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Nhà văn tồn tại ở trên đời trước hết để làm công việc giống như kẻ nâng giấc cho những người cùng đường tuyệt lộ.',
        author: 'Nguyễn Minh Châu',
        note: 'Dùng để bình luận về tấm lòng nhân đạo của Tô Hoài với nhân vật Mị.',
      },
    ],
  },

  // 8. Vợ nhặt - Kim Lân: Tâm trạng bà cụ Tứ
  {
    id: 'vo-nhat-ba-cu-tu',
    workId: 'vo-nhat',
    workTitle: 'Vợ nhặt',
    author: 'Kim Lân',
    topic: 'Phân tích diễn biến tâm trạng của nhân vật bà cụ Tứ trong truyện ngắn "Vợ nhặt" của Kim Lân',
    genre: 'truyen',
    category: 'nhan-vat',
    categoryLabel: 'Phân Tích Nhân Vật Trọng Tâm',
    targetScore: '9.0+ Toàn Diện',
    timeEstimate: '75 phút',
    tags: ['Vợ nhặt', 'Kim Lân', 'Bà cụ Tứ', 'Tình mẫu tử', 'Bát cháo cám', 'Niềm hy vọng'],
    keyQuote: 'Bà lão vừa ai oán vừa xót thương cho số kiếp đứa con mình...',
    intro: {
      approach1: 'Nhà văn Macxim Gorki từng ca ngợi: "Không có mặt trời thì hoa không nở, không có tình yêu thì không có hạnh phúc, không có người mẹ thì không có anh hùng và thi sĩ". Tình mẫu tử thiêng liêng luôn là bến đỗ bình yên nhất của đời người. Trong kiệt tác "Vợ nhặt" của Kim Lân, giữa bóng tối mịt mù của nạn đói năm 1945, hình ảnh bà cụ Tứ hiện lên với tình thương con vô bờ bến và niềm tin bất diệt vào sự sống.',
      approach2: 'Kim Lân là cây bút truyện ngắn tài hoa, chuyên viết về nông thôn và người nông dân nghèo khổ bằng sự thấu hiểu từ gan ruột của một người "con đẻ của đồng ruộng". Truyện ngắn "Vợ nhặt" (rút từ tập "Con chó xấu xí") là bài ca về sự cưu mang đùm bọc, mà tâm điểm xúc động nhất chính là diễn biến tâm trạng đầy giằng xé của người mẹ già - bà cụ Tứ.',
    },
    body: {
      overview: 'Bà cụ Tứ là người mẹ nông dân nghèo khổ, già nua, góa bụa. Chiều muộn trở về căn nhà rúm ró, bà ngỡ ngàng khi thấy có người phụ nữ lạ đứng đầu giường con trai.',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Sự ngỡ ngàng, phấp phỏng âu lo khi bước vào nhà (Lúc mới về)',
          evidence: 'Bà nhìn thấy người đàn bà lạ, trong đầu đầy dấu hỏi nghi hoặc: "Quái, sao lại có người đàn bà nào ở trong ấy nhỉ? Người đàn bà nào lại đứng ở đầu giường thằng con mình thế kia?". Bà bước vào với sự e dè, linh cảm của một người mẹ từng trải.',
          analysis: 'Sự ngỡ ngàng xuất phát từ hoàn cảnh nghèo đói cùng cực: bà không tin con mình có thể lấy được vợ giữa lúc người chết đói như ngả rạ.',
          commentary: 'Tấm lòng người mẹ luôn trĩu nặng âu lo trước mọi biến cố của con cái.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Sự bẽ bàng, ai oán và xót thương tột cùng khi hiểu ra cơ sự',
          evidence: '"Bà lão cúi đầu nín lặng. Bà lão hiểu rồi. Lòng người mẹ nghèo khổ ấy còn hiểu ra biết bao nhiêu cơ sự, vừa ai oán vừa xót thương cho số kiếp đứa con mình... Chao ôi, người ta dựng vợ gả chồng cho con là lúc trong nhà ăn nên làm nổi... Còn mình thì..."',
          analysis: 'Hành động "cúi đầu nín lặng" nén chặt nỗi đau đớn, tủi cực. Bà không hề hắt hủi người đàn bà xa lạ mà cảm thấy có lỗi vì mình không lo nổi đám cưới chu đáo cho con. Giọt nước mắt lăn trên gò má nhăn nheo là sự chắt lọc của tình thương xót mênh mông.',
          commentary: 'Đỉnh cao của tấm lòng vị tha: thương con mình bao nhiêu thì thương xót con người ta bấy nhiêu.',
        },
        {
          number: 'Luận điểm 3',
          title: 'Sự chấp thuận bao dung và niềm lạc quan gieo mầm sống (Buổi sáng hôm sau)',
          evidence: 'Bà dịu dàng bảo: "Ừ, thôi thì các con đã phải duyên phải kiếp với nhau, u cũng mừng lòng...". Sáng hôm sau, khuôn mặt u ám thường ngày rạng rỡ hẳn lên. Bà lúi húi quét tước sân nhà, nói toàn chuyện vui tương lai: "Tràng ạ. Khi nào có tiền ta mua lấy đôi gà... này ngoảnh đi ngoảnh lại chả mấy mà có ngay đàn gà cho mà xem...". Chi tiết "nồi cháo cám" chát chúa nhưng bà gọi là "chè khoán" để xua đi không khí ảm đạm.',
          analysis: 'Tình mẫu tử đã biến thành nguồn sinh lực mạnh mẽ, thắp sáng niềm hy vọng vượt qua bờ vực cái chết.',
          commentary: 'Bà cụ Tứ chính là hiện thân cho sức sống bất diệt của người nông dân Việt Nam.',
        },
      ],
      artisticValue: [
        'Nghệ thuật miêu tả tâm lý nhân vật tự nhiên, tinh tế, chân thực đến từng giọt nước mắt',
        'Chi tiết nghệ thuật giàu sức biểu tượng (giọt nước mắt, nồi cháo cám, đàn gà tương lai)',
        'Ngôn ngữ đối thoại mộc mạc, đậm chất thôn quê đồng bằng Bắc Bộ',
      ],
      advancedCommentary: 'Yêu cầu phụ (Nhận xét tư tưởng nhân đạo của Kim Lân): Kim Lân không miêu tả người nông dân bị cái đói dồn đến mức tha hóa nhân phẩm, mà ngược lại, đặt con người trước ranh giới sống chết để khẳng định: Trong đói khát, con người vẫn yêu thương, cưu mang đùm bọc và hướng về sự sống ngày mai.',
      literaryConnection: 'So sánh với nhân vật Lão Hạc trong truyện ngắn cùng tên của Nam Cao: Lão Hạc chọn cái chết đau đớn để giữ gìn mảnh vườn và phẩm giá cho con; bà cụ Tứ chọn sống tiếp để gieo mầm hy vọng cho hạnh phúc của các con.',
    },
    conclusion: 'Nhân vật bà cụ Tứ là tượng đài bất hủ về người mẹ nghèo Việt Nam trong văn học hiện thực. Tình yêu thương và đức hy sinh của bà mãi tỏa sáng như ngọn lửa sưởi ấm tâm hồn người đọc qua mọi thời đại.',
    mindmapPoints: [
      '1. Ngỡ ngàng lúc ban đầu: Về nhà thấy người đàn bà lạ, đầy nghi hoặc và phấp phỏng âu lo.',
      '2. Cúi đầu nín lặng: Hiểu ra cơ sự, vừa ai oán xót thương vừa tủi phận vì không lo được cho con.',
      '3. Bao dung chấp nhận: "U cũng mừng lòng" - cưu mang nàng dâu nhặt bằng tấm lòng nhân hậu.',
      '4. Thắp sáng niềm tin sáng hôm sau: Khuôn mặt rạng rỡ, quét tước nhà cửa, bàn chuyện nuôi đàn gà tương lai.',
      '5. Nồi cháo cám - chè khoán: Nuốt cay đắng vào trong để giữ gìn niềm vui hạnh phúc cho con trẻ.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Một tác phẩm thật giá trị phải vượt lên bên trên tất cả các bờ cõi và giới hạn, phải là một tác phẩm chung cho cả loài người. Nó phải chứa đựng được một cái gì lớn lao, mạnh mẽ, vừa đau đớn, lại vừa phấn khởi. Nó ca tụng lòng thương, tình bác ái, sự công bình...',
        author: 'Nam Cao',
        note: 'Dùng để bình luận về giá trị nhân đạo sâu sắc của tác phẩm Vợ nhặt.',
      },
    ],
  },

  // 9. Người lái đò Sông Đà - Nguyễn Tuân: Hình tượng con Sông Đà
  {
    id: 'nguoi-lai-do-song-da-hinh-tuong',
    workId: 'nguoi-lai-do-song-da',
    workTitle: 'Người lái đò Sông Đà',
    author: 'Nguyễn Tuân',
    topic: 'Phân tích hai nét tính cách đối lập: Hung bạo và Thơ mộng trữ tình của con Sông Đà trong tùy bút "Người lái đò Sông Đà" của Nguyễn Tuân',
    genre: 'ky',
    category: 'toan-canh',
    categoryLabel: 'Phân Tích Toàn Bài & Hình Tượng',
    targetScore: '9.5+ Tuyệt Đối',
    timeEstimate: '80 phút',
    tags: ['Người lái đò Sông Đà', 'Nguyễn Tuân', 'Sông Đà hung bạo', 'Sông Đà trữ tình', 'Tùy bút', 'Phong cách tài hoa uyên bác'],
    keyQuote: 'Chúng thủy giai đông tẩu / Đà giang độc bắc lưu...',
    intro: {
      approach1: 'Nhà văn Nguyễn Tuân từng tâm niệm: "Nghệ thuật là sự tìm tòi và sáng tạo, người nghệ sĩ không thể dẫm lên dấu chân của người khác". Sinh thời, ông luôn khao khát săn tìm cái Đẹp ở phương diện phi thường, kỳ vĩ. Đến với tùy bút "Người lái đò Sông Đà" (1960), bạn đọc như được chiêm ngưỡng một công trình điêu khắc ngôn từ tráng lệ, nơi con sông Đà hiện lên như một sinh thể sống động với hai nét tính cách độc đáo: vừa hung bạo dữ dằn, vừa thơ mộng trữ tình.',
      approach2: 'Nguyễn Tuân là bậc thầy của thể loại tùy bút và nghệ thuật ngôn từ Việt Nam thế kỷ XX. Phong cách nghệ thuật của ông nổi bật với nét tài hoa, uyên bác, luôn khám phá sự vật ở góc độ văn hóa, mỹ thuật và điện ảnh. Con sông Đà Tây Bắc qua ngòi bút của ông không đơn thuần là dòng chảy địa lý mà là một nhân vật đầy cá tính và ma lực.',
    },
    body: {
      overview: 'Sông Đà được khắc họa qua lời đề từ độc đáo: "Chúng thủy giai đông tẩu / Đà giang độc bắc lưu" (Mọi dòng sông đều chảy về đông, chỉ riêng sông Đà chảy ngược về bắc), báo hiệu một cá tính ngang tàng, bất kham.',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Vẻ đẹp hung bạo, dữ dằn của Sông Đà (Kẻ thù số một của con người)',
          evidence: 'Cảnh đá bờ sông dựng vách thành "chẹt lòng sông như một cái yết hầu", trưa hè đứng dưới đáy ngõ ngoảnh mặt lên mới thấy nắng, đúng ngọ mới có mặt trời; ghềnh Hát Loóng "nước xô đá, đá xô sóng, sóng xô gió cuồn cuộn gùn ghè suốt năm"; những cái hút nước chết người xoáy tít như giếng bê tông sâu hoắm; âm thanh thác nước gầm réo như tiếng ngàn con trâu mộng lồng lộn; ba trùng vi thạch trận mai phục đầy tướng đá dữ dằn.',
          analysis: 'Nguyễn Tuân huy động kiến thức của nhiều ngành nghệ thuật (điện ảnh, quân sự, võ thuật, hội họa) để nhân hóa dòng sông thành một thủy quái hung hãn, nham hiểm với dã tâm tiêu diệt con thuyền.',
          commentary: 'Bút pháp miêu tả cảm giác mạnh làm nổi bật thiên nhiên Tây Bắc hùng vĩ, khắc nghiệt.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Vẻ đẹp thơ mộng, trữ tình của Sông Đà (Cố nhân tài hoa quyến rũ)',
          evidence: 'Từ trên máy bay nhìn xuống, sông Đà mềm mại như "một cái dây thừng ngoằn ngoèo", rồi biến thành "áng tóc trữ tình đầu tóc chân tóc ẩn hiện trong mây trời Tây Bắc bung nở hoa ban hoa gạo"; sắc nước đổi màu theo mùa (mùa xuân xanh ngọc bích trong trẻo, mùa thu lừ lừ chín đỏ như da mặt người bầm đi vì rượu); cảnh bờ sông hoang sơ tĩnh lặng "bờ sông hoang dại như một bờ tiền sử, bờ sông hồn nhiên như một nỗi niềm cổ tích tuổi xưa"; đàn cá dầm xanh quẫy đuôi lấp lánh.',
          analysis: 'Trút bỏ vẻ dữ dội ở thượng nguồn, về hạ lưu sông Đà hóa thân thành một kiệt tác thiên nhiên êm đềm, đậm chất thơ, khơi gợi cảm xúc bồi hồi của một "cố nhân" gặp lại sau tháng ngày xa cách.',
          commentary: 'Sự tài hoa của Nguyễn Tuân trong việc chuyển đổi giọng điệu từ gấp gáp sang êm đềm, tha thiết.',
        },
      ],
      artisticValue: [
        'Ngôn từ phong phú, chuẩn xác, giàu tính tạo hình và biểu cảm',
        'Vận dụng tri thức đa ngành: hội họa, điêu khắc, điện ảnh, địa lý, quân sự',
        'Nghệ thuật nhân hóa, so sánh độc đáo, biến vô tri thành sinh thể có tâm hồn phức tạp',
      ],
      advancedCommentary: 'Yêu cầu phụ (Nhận xét phong cách nghệ thuật tài hoa uyên bác của Nguyễn Tuân): Uyên bác ở chỗ ông am tường địa lý lịch sử, soi chiếu dòng sông dưới nhiều lăng kính khoa học. Tài hoa ở chỗ ông nhìn thiên nhiên ở phương diện thẩm mỹ, biến sông Đà thành một biểu tượng nghệ thuật tuyệt mỹ của đất nước.',
      literaryConnection: 'So sánh với vẻ đẹp của dòng sông Hương trong "Ai đã đặt tên cho dòng sông?" của Hoàng Phủ Ngọc Tường: Sông Đà là dòng sông gân guốc, cá tính mãnh liệt của miền núi Tây Bắc, còn sông Hương mang vẻ đẹp nữ tính, trầm mặc, gắn liền với chiều sâu văn hóa xứ Huế.',
    },
    conclusion: 'Hình tượng con sông Đà là một trong những thành tựu rực rỡ nhất của văn học ký Việt Nam. Dưới ngòi bút của Nguyễn Tuân, non sông Tổ quốc hiện lên vừa tráng lệ kỳ vĩ, vừa tha thiết trữ tình, bồi đắp trong lòng người đọc tình yêu sâu nặng với quê hương đất nước.',
    mindmapPoints: [
      '1. Lời đề từ cá tính: "Đà giang độc bắc lưu" - dòng chảy ngang tàng, độc đáo.',
      '2. Mặt hung bạo: Vách đá kẹp lòng sông, ghềnh Hát Loóng gùn ghè, hút nước xoáy sâu hoắm, 3 trùng vi thạch trận hiểm ác.',
      '3. Mặt trữ tình từ trên cao: "Áng tóc trữ tình" buốt nở hoa ban hoa gạo, sắc nước xanh ngọc bích và lừ lừ chín đỏ.',
      '4. Mặt trữ tình khi trôi xuôi: Cảnh bờ sông hoang dại như bờ tiền sử, tĩnh lặng như nỗi niềm cổ tích tuổi xưa.',
      '5. Phong cách Nguyễn Tuân: Tài hoa, uyên bác, ngôn từ điêu luyện bậc thầy.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Nguyễn Tuân là một định nghĩa về người nghệ sĩ: người luôn đi tìm cái Đẹp và phụng sự cái Đẹp suốt đời.',
        author: 'Nguyễn Đăng Mạnh',
        note: 'Dùng cho phần nhận xét phong cách tác giả ở mở bài hoặc đánh giá nghệ thuật.',
      },
    ],
  },

  // 10. Chiếc thuyền ngoài xa - Nguyễn Minh Châu: Hai phát hiện của người nghệ sĩ
  {
    id: 'chiec-thuyen-ngoai-xa-hai-phat-hien',
    workId: 'chiec-thuyen-ngoai-xa',
    workTitle: 'Chiếc thuyền ngoài xa',
    author: 'Nguyễn Minh Châu',
    topic: 'Phân tích hai phát hiện của người nghệ sĩ nhiếp ảnh Phùng bên bờ biển trong truyện ngắn "Chiếc thuyền ngoài xa" của Nguyễn Minh Châu',
    genre: 'truyen',
    category: 'doan-trich',
    categoryLabel: 'Phân Tích Đoạn Trích & Tình Huống Truyện',
    targetScore: '9.0+ Toàn Diện',
    timeEstimate: '75 phút',
    tags: ['Chiếc thuyền ngoài xa', 'Nguyễn Minh Châu', 'Nhiếp ảnh Phùng', 'Hai phát hiện', 'Nghệ thuật và cuộc sống', 'Triết lý nhân sinh'],
    keyQuote: 'Bản thân cái đẹp chính là đạo đức... Nhưng đằng sau vẻ đẹp ấy lại là một cảnh tượng xót xa...',
    intro: {
      approach1: 'Nhà văn Nga L.Tôn-xtôi từng khẳng định: "Nghệ thuật là sự mô tả cuộc sống, nhưng không phải bằng cách sao chép máy móc mà bằng sự thấu thị nỗi đau và phẩm giá con người". Trong chặng đường đổi mới văn học sau 1975, Nguyễn Minh Châu được mệnh danh là "người mở đường tinh anh và tài năng nhất". Truyện ngắn "Chiếc thuyền ngoài xa" với tình huống hai phát hiện đối lập của nghệ sĩ Phùng đã mở ra bài học sâu sắc về mối quan hệ giữa nghệ thuật và hiện thực đời sống.',
      approach2: 'Nguyễn Minh Châu luôn trăn trở tìm kiếm "hạt ngọc ẩn giấu trong bề sâu tâm hồn con người". Sáng tác năm 1983, "Chiếc thuyền ngoài xa" đánh dấu bước ngoặt chuyển từ cảm hứng sử thi lãng mạn sang cảm hứng thế sự đời tư, mang tính triết lý nhân sinh sâu sắc.',
    },
    body: {
      overview: 'Để hoàn thành bộ lịch nghệ thuật, Phùng đến vùng biển miền Trung và phục kích nhiều ngày để săn tìm một bức ảnh đắt giá về cảnh biển mờ sương.',
      points: [
        {
          number: 'Luận điểm 1',
          title: 'Phát hiện thứ nhất: Vẻ đẹp tuyệt mỹ của cảnh đắt trời cho',
          evidence: 'Mũi thuyền in một nét mơ hồ lòe nhòe vào bầu sương mù màu trắng sữa có pha đôi chút màu hồng hồng do ánh mặt trời chiếu vào; vài bóng người lớn lẫn trẻ con ngồi im phăng phắc; toàn bộ khung cảnh đẹp như một "bức tranh mực tàu của một danh họa thời cổ".',
          analysis: 'Vẻ đẹp hài hòa, thanh khiết, cổ kính khiến tâm hồn Phùng rung động mãnh liệt. Anh cảm thấy "bối rối", tim như có cái gì bóp thắt vào, cảm nhận được sự thanh lọc tâm hồn và ngỡ rằng "bản thân cái đẹp chính là đạo đức".',
          commentary: 'Khoảnh khắc thăng hoa tột đỉnh của người nghệ sĩ trước cái đẹp thuần khiết của ngoại cảnh.',
        },
        {
          number: 'Luận điểm 2',
          title: 'Phát hiện thứ hai: Hiện thực nghiệt ngã, nghịch lý đằng sau cái đẹp',
          evidence: 'Khi con thuyền đâm thẳng vào bờ, bước ra không phải là những tiên cảnh mà là hai vợ chồng người thuyền chài: người đàn bà xấu xí, mặt rỗ, lưng áo bạc phếch; người đàn ông to lớn dữ tợn với đôi mắt cháy rực lửa độc ác. Ngay sau đó là màn bạo lực gia đình tàn khốc: gã chồng rút thắt lưng da quật tới tấp vào lưng vợ như trút cơn giận giáp hạt, người vợ nhẫn nhục cam chịu không hề né tránh; đứa con (thằng Phác) lao vào giằng thắt lưng đánh lại cha để bảo vệ mẹ.',
          analysis: 'Phát hiện thứ hai giáng một đòn choáng váng vào người nghệ sĩ: Phùng đứng "há hốc mồm" kinh ngạc. Anh vứt máy ảnh lao tới ngăn cản. Đằng sau cái đẹp mơ màng là nỗi đau nhức nhối của bạo lực gia đình và sự đói nghèo dai dẳng.',
          commentary: 'Nghịch lý phũ phàng giữa vẻ đẹp nghệ thuật lãng mạn và hiện thực cuộc đời xót xa.',
        },
        {
          number: 'Luận điểm 3',
          title: 'Ý nghĩa triết lý sâu sắc rút ra từ hai phát hiện',
          evidence: 'Cuộc đời không đơn giản xuôi chiều như một bức tranh hoàn mỹ nhìn từ xa, mà chứa đựng muôn vàn nghịch lý phức tạp khi nhìn gần.',
          analysis: 'Bài học cho người nghệ sĩ: Không thể nhìn cuộc đời qua lăng kính lãng mạn thi vị hóa một chiều. Người nghệ sĩ phải bước lại gần cuộc đời, dám đối diện với những góc khuất tăm tối và nỗi đau của con người.',
          commentary: 'Mối quan hệ mật thiết: Nghệ thuật chân chính phải bắt nguồn từ cuộc sống và cất lên tiếng nói bênh vực con người.',
        },
      ],
      artisticValue: [
        'Nghệ thuật xây dựng tình huống truyện mang tính nhận thức sâu sắc (tình huống nghịch lý)',
        'Điểm nhìn trần thuật sắc sảo qua con mắt của người nghệ sĩ nhiếp ảnh từng là người lính',
        'Chi tiết nghệ thuật tương phản đối lập gay gắt làm nổi bật chủ đề tư tưởng',
      ],
      advancedCommentary: 'Yêu cầu phụ (Nhận xét cái nhìn hiện thực đa chiều của Nguyễn Minh Châu): Nhà văn từ bỏ cái nhìn giản đơn một chiều thời kỳ sử thi để chuyển sang cái nhìn đa diện, nhiều chiều về số phận con người sau chiến tranh: hòa bình lập lại không có nghĩa là mọi nỗi đau chấm dứt; con người vẫn phải đối mặt với cuộc mưu sinh nhọc nhằn.',
      literaryConnection: 'Liên hệ với quan niệm nghệ thuật trong "Trăng sáng" của Nam Cao: "Nghệ thuật không cần phải là ánh trăng lừa dối, không nên là ánh trăng lừa dối; nghệ thuật chỉ có thể là tiếng đau khổ kia thoát ra từ những kiếp lầm than".',
    },
    conclusion: 'Hai phát hiện của nghệ sĩ Phùng trong "Chiếc thuyền ngoài xa" là bài học đắt giá về trách nhiệm của người cầm bút. Tác phẩm khẳng định chân lý: Nghệ thuật vị nhân sinh, cái Đẹp phải gắn liền với cái Thiện và nỗi trăn trở về số phận con người.',
    mindmapPoints: [
      '1. Phát hiện 1: Cảnh chiếc thuyền ngoài xa trong sương sớm đẹp như bức tranh mực tàu thời cổ -> thăng hoa thẩm mỹ.',
      '2. Cảm xúc phát hiện 1: Bối rối, bóp thắt tim, tưởng rằng "cái đẹp chính là đạo đức".',
      '3. Phát hiện 2: Chiếc thuyền cập bến -> cảnh bạo lực gia đình tàn khốc (chồng đánh vợ dã man, con đánh lại cha).',
      '4. Cảm xúc phát hiện 2: Bàng hoàng, há hốc mồm, vứt máy ảnh lao vào can thiệp.',
      '5. Triết lý bài học: Đời không phẳng lặng; người nghệ sĩ phải có cái nhìn đa diện, không thể đứng xa ngắm nghía lừa dối.',
    ],
    goldenTheoryQuotes: [
      {
        quote: 'Nghệ thuật không phải là ánh trăng lừa dối, nghệ thuật chỉ có thể là tiếng đau khổ kia thoát ra từ những kiếp lầm than.',
        author: 'Nam Cao',
        note: 'Dùng làm câu nhận định lý luận then chốt để đạt điểm 9+ phần phân tích triết lý.',
      },
    ],
  },
];
