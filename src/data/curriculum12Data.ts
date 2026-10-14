import { WorkItem } from './worksData';

export interface CurriculumRowItem {
  week: string;
  period: string;
  content: string;
  category: 'doc' | 'tieng-viet' | 'viet' | 'noi-nghe' | 'cdht' | 'kiem-tra';
  workId?: string;
  note?: string;
}

export interface CurriculumLessonUnit {
  id: string;
  semester: 1 | 2;
  lessonNumber: number;
  title: string;
  totalPeriods: number;
  genreFocus: string;
  rows: CurriculumRowItem[];
}

export const CURRICULUM_12_NEW_WORKS: WorkItem[] = [
  {
    id: 'xuan-toc-do-cuu-quoc',
    title: 'Xuân Tóc Đỏ cứu quốc (Trích Số đỏ)',
    author: 'Vũ Trọng Phụng',
    authorBio:
      'Vũ Trọng Phụng (1912 - 1939), quê ở làng Hảo, huyện Mỹ Hào, tỉnh Hưng Yên nhưng sinh sống tại Hà Nội. Ông được mệnh danh là "Ông vua phóng sự đất Bắc" và là bậc thầy của tiểu thuyết hiện thực phê phán Việt Nam thế kỷ XX với ngòi bút trào phúng sắc sảo, dữ dội.',
    year: '1936',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Bài 1 · Tiểu thuyết hiện đại',
    readTimeMinutes: 14,
    summary:
      'Đoạn trích thuộc chương XX (chương cuối) của tiểu thuyết "Số đỏ", tái hiện màn kịch quần vợt ngoại giao lố bịch giữa Xuân Tóc Đỏ và quán quân Xiêm La. Chỉ bằng cái lưỡi gỗ hùng biện bịp bợm khi "nhường" bàn thắng để giữ hòa bình Việt - Xiêm, một kẻ lưu manh vô học như Xuân Tóc Đỏ bỗng được đám đám đông mù quáng và giới thượng lưu phong kiến - thực dân tôn vinh làm "bậc vĩ nhân cứu quốc".',
    context:
      'Tiểu thuyết "Số đỏ" được đăng báo Hà Nội báo từ số 40 (ngày 7/10/1936) và in thành sách năm 1938. Đoạn trích "Xuân Tóc Đỏ cứu quốc" khép lại tác phẩm bằng đỉnh cao của nghệ thuật trào phúng, phơi bày bản chất bịp bợm của phong trào "Âu hóa", "thể thao cứu quốc" giả hiệu đương thời.',
    authorAesthetics:
      'Vũ Trọng Phụng quan niệm tiểu thuyết là "sự thực ở đời". Ông sử dụng tiếng cười trào phúng, cường điệu và nghịch dị để lột trần mặt nạ đạo đức giả của xã hội tư sản thành thị nửa thực dân nửa phong kiến.',
    mainThemes: [
      'Phê phán sâu cay xã hội thượng lưu "Âu hóa" rởm đời, lố lăng và bịp bợm',
      'Nghệ thuật xây dựng tình huống trào phúng nghịch lý: Kẻ thua cuộc trên sân quần vợt lại trở thành "vĩ nhân cứu quốc"',
      'Thủ pháp nói mỉa, nghịch ngữ và cường điệu bậc thầy trong ngôn từ tiểu thuyết Vũ Trọng Phụng',
      'Sự tha hóa của đám đông mù quáng và màn kịch chính trị - ngoại giao nực cười',
    ],
    keyAnalysis: [
      {
        heading: 'Không khí trận đấu quần vợt và các nhân vật "thượng lưu" lố bịch',
        content:
          'Sân quần Rollandes biến thành một sân khấu hài kịch khổng lồ với sự có mặt của Đức vua Xiêm, Toàn quyền Pháp, các quan đại thần và giới trưởng giả Hà thành (ông bà Văn Minh, cô Tuyết, cụ Hồng...). Trận đấu thể thao bị thổi phồng thành vận mệnh ngoại giao quốc gia, tạo tiền đề cho bước ngoặt trào phúng.',
        evidence:
          '"Tất cả những nhân vật tai mặt ở Bắc Kỳ hôm ấy đều có mặt tại sân quần Rollandes để xem cuộc đấu có tính cách quốc tế và lịch sử ấy."',
        literaryCommentary:
          'Vũ Trọng Phụng dựng lên một đại cảnh náo nhiệt nhưng rỗng tuếch, nơi mọi giá trị nghiêm túc đều bị đảo lộn.',
      },
      {
        heading: 'Tình huống trớ trêu: Đòn áp chế chính trị và cú đánh bóng ra ngoài "cứu nước"',
        content:
          'Khi Xuân Tóc Đỏ sắp thắng quán quân Xiêm La, vua Xiêm tức giận dọa gây chiến tranh. Quan Tổng đốc và ông Văn Minh hoảng hốt ra lệnh mật cho Xuân phải thua. Xuân Tóc Đỏ cố tình gạt bóng ra ngoài để chịu thua ở điểm quyết định, biến một pha dàn xếp tỷ số hèn hạ thành hành động "hy sinh danh dự cá nhân vì nền hòa bình Tổ quốc".',
        evidence:
          '"Xuân Tóc Đỏ đã cứu vãn được một cuộc chiến tranh Việt - Xiêm! Xuân Tóc Đỏ thật là một vĩ nhân!"',
      },
      {
        heading: 'Màn hùng biện của Xuân Tóc Đỏ trên nóc ô tô và sự điên đảo của đám đông',
        content:
          'Trước đám đông công chúng đang thất vọng la ó, Xuân Tóc Đỏ trèo lên mui xe hơi, bắt chước giọng điệu của các chính khách để "hiệu triệu" quần chúng bằng ngôn từ trịch thượng: "Hỡi công chúng mi chưa hiểu rõ những lẽ cực kỳ to tát nó khiến ta đành phải nhường giải cho nhà vô địch Xiêm La!". Đám đông lập tức chuyển từ phẫn nộ sang sùng bái, vỗ tay hoan hô "Xuân Tóc Đỏ vạn tuế!".',
        evidence:
          '"Hỡi quần chúng nông nổi kia, mi chưa hiểu rõ những lẽ cực kỳ to tát... Đám đông như bị thôi miên, vỗ tay đôm đốp: Xuân Tóc Đỏ vạn tuế! Sự đại bại vạn tuế!"',
        literaryCommentary:
          'Nghịch ngữ "Sự đại bại vạn tuế!" là đỉnh cao châm biếm của Vũ Trọng Phụng về một xã hội đảo điên, nơi cái giả dối thống trị tuyệt đối.',
      },
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà văn Nguyễn Khải',
        quote:
          'Số đỏ của Vũ Trọng Phụng là một cuốn sách ghê gớm có thể làm vinh dự cho mọi nền văn học. Nhân vật Xuân Tóc Đỏ là một sáng tạo nghệ thuật độc nhất vô nhị.',
      },
      {
        critic: 'GS. Nguyễn Đăng Mạnh',
        quote:
          'Tiếng cười Vũ Trọng Phụng là tiếng cười hủy diệt cái xã hội "chó đểu" đương thời bằng những nghịch lý không tưởng mà lại chân thực đến rợn người.',
      },
    ],
    quotes: [
      'Hỡi công chúng mi chưa hiểu rõ những lẽ cực kỳ to tát nó khiến ta đành phải nhường giải cho nhà vô địch Xiêm La!',
      'Xuân Tóc Đỏ vạn tuế! Sự đại bại vạn tuế!',
      'Như thế, ở đời này, xưa nay chưa từng có một vĩ nhân nào đã cứu được nước nhà một cách vẻ vang như Xuân Tóc Đỏ vậy.',
    ],
    artisticValues: [
      'Nghệ thuật xây dựng tình huống truyện trào phúng đầy kịch tính và bất ngờ',
      'Sử dụng dày đặc biện pháp tu từ nói mỉa, nghịch ngữ và phóng đại',
      'Ngôn ngữ đối thoại cá thể hóa sắc nét, lột tả bản chất bịp bợm của nhân vật',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu Vũ Trọng Phụng, tiểu thuyết "Số đỏ" và đoạn trích "Xuân Tóc Đỏ cứu quốc" (Bài 1 - Khả năng lớn lao của tiểu thuyết). Nêu giá trị hiện thực và nghệ thuật trào phúng bậc thầy.',
      body: [
        '1. Bối cảnh trận đấu quần vợt "lịch sử" và sự lố bịch của tầng lớp thượng lưu.',
        '2. Bước ngoặt kịch tính: Từ nguy cơ thắng cuộc đến màn dàn xếp chịu thua để "cứu quốc".',
        '3. Màn diễn thuyết bịp bợm của Xuân Tóc Đỏ và tâm lý đám đông mù quáng.',
        '4. Nghệ thuật trào phúng: Nói mỉa, nghịch ngữ ("Sự đại bại vạn tuế"), cường điệu và giọng điệu châm biếm sâu cay.',
      ],
      conclusion:
        'Khẳng định sức sống bất hủ của hình tượng Xuân Tóc Đỏ và khả năng khám phá, phanh phui hiện thực lớn lao của thể loại tiểu thuyết.',
    },
    examPrompts: [
      'Phân tích nghệ thuật trào phúng (tình huống, ngôn ngữ, nghịch ngữ, nói mỉa) trong đoạn trích "Xuân Tóc Đỏ cứu quốc" của Vũ Trọng Phụng.',
      'Từ nhân vật Xuân Tóc Đỏ và đám đông trong đoạn trích, anh/chị suy nghĩ gì về hiện tượng thần tượng hóa mù quáng trong đời sống?',
    ],
    keywords: [
      'Xuân Tóc Đỏ cứu quốc',
      'Số đỏ',
      'Vũ Trọng Phụng',
      'Trào phúng',
      'Nói mỉa',
      'Nghịch ngữ',
      'Bài 1 Ngữ văn 12',
    ],
  },
  {
    id: 'mua-la-rung-trong-vuon',
    title: 'Mùa lá rụng trong vườn',
    author: 'Ma Văn Kháng',
    authorBio:
      'Ma Văn Kháng (sinh năm 1936), tên khai sinh là Đinh Trọng Đoàn, quê ở Kim Liên, Đống Đa, Hà Nội. Ông là một trong những cây bút văn xuôi hàng đầu thời kỳ Đổi mới, được trao tặng Giải thưởng Văn học ASEAN (1998) và Giải thưởng Hồ Chí Minh về Văn học nghệ thuật (2012).',
    year: '1985',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Bài 1 · Tiểu thuyết thế sự',
    readTimeMinutes: 14,
    summary:
      'Đoạn trích tái hiện khung cảnh ngày Tết cổ truyền trong gia đình ông Bằng - một gia đình nền nếp gia phong ở Hà Nội trước những cơn lốc biến động của cơ chế thị trường đầu thời kỳ Đổi mới. Qua tâm trạng của ông Bằng và chị Hoài (người con dâu trưởng cũ lên thăm nhà), tác phẩm đặt ra nỗi trăn trở sâu sắc về việc giữ gìn đạo lý, cội nguồn gia đình trước sự xô bồ của thời cuộc.',
    context:
      'Tiểu thuyết "Mùa lá rụng trong vườn" ra đời năm 1985 - thời điểm giao thời khi đất nước chuẩn bị bước vào công cuộc Đổi mới (1986), mở đầu cho dòng tiểu thuyết thế sự - đời tư khám phá những biến động trong cấu trúc gia đình truyền thống.',
    authorAesthetics:
      'Văn xuôi Ma Văn Kháng giàu chất triết luận, trữ tình và nhân văn, luôn đau đáu trước sự va đập giữa các giá trị đạo đức truyền thống với lối sống thực dụng hiện đại.',
    mainThemes: [
      'Vẻ đẹp thiêng liêng, ấm áp của truyền thống gia đình Việt Nam trong khoảnh khắc chiều 30 Tết',
      'Sự rạn nứt, biến động của nếp nhà truyền thống trước cơn lốc kinh tế thị trường',
      'Hình tượng ông Bằng - trụ cột đạo đức mẫu mực và chị Hoài - biểu tượng của lòng nhân hậu, thủy chung',
      'Nghệ thuật trần thuật đa điểm nhìn và miêu tả tâm lý nhân vật tinh tế',
    ],
    keyAnalysis: [
      {
        heading: 'Không khí chiều Tất niên thiêng liêng và hình tượng người cha - ông Bằng',
        content:
          'Bữa cơm tất niên và nghi thức cúng gia tiên chiều 30 Tết được miêu tả trang trọng, ấm cúng. Ông Bằng hiện lên như cây đại thụ che chở nếp nhà, vừa nghiêm cẩn giữ gìn gia phong, vừa bao dung nhưng chất chứa nỗi buồn thầm kín trước những bi kịch, lầm lạc của các con (Đông, Luận, Lý, Cừ, Cần).',
        evidence:
          '"Ông Bằng đứng trước bàn thờ, chắp tay trang nghiêm. Khói hương trầm quyện tỏa làm ấm cả căn phòng ngày cuối năm..."',
      },
      {
        heading: 'Nhân vật chị Hoài - Vẻ đẹp của nghĩa tình thủy chung và cội nguồn',
        content:
          'Dù chồng (anh Tường - người con cả liệt sĩ) đã hy sinh và chị Hoài đã có gia đình mới ở quê, nhưng Tết nào chị cũng về thăm ông Bằng và các em. Sự xuất hiện của chị Hoài đem lại hơi ấm sum vầy, đánh thức lương tri và sự gắn kết trong đại gia đình đang có nguy cơ phân rã.',
        evidence:
          '"Chị Hoài xuất hiện như một làn gió ấm lành của miền quê thổi vào ngôi nhà phố đang xao xác những lo toan..."',
      },
      {
        heading: 'Ý nghĩa biểu tượng nhan đề "Mùa lá rụng trong vườn"',
        content:
          'Hình ảnh "mùa lá rụng trong vườn" vừa là quy luật tự nhiên của đất trời lúc giao mùa, vừa là ẩn dụ cho những biến thiên, rụng rơi của những giá trị cũ trong khu vườn gia đình truyền thống để chuẩn bị cho sự hồi sinh mới.',
      },
    ],
    quotes: [
      'Gia đình là cái gốc của con người, nhưng cái gốc ấy đang phải hứng chịu bao cơn gió lốc của thời cuộc.',
      'Chị Hoài về, mang theo cả hương vị đồng quê và tấm lòng thơm thảo không bao giờ phai nhạt.',
    ],
    artisticValues: [
      'Nghệ thuật trần thuật phối hợp điểm nhìn của người kể chuyện và điểm nhìn nội tâm nhân vật',
      'Xây dựng bức tranh tâm lý đa dạng của nhiều thế hệ trong một đại gia đình',
      'Giọng văn trầm ấm, giàu chất suy tư triết lý và thấm đẫm tinh thần nhân văn',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu nhà văn Ma Văn Kháng và tiểu thuyết "Mùa lá rụng trong vườn" (Bài 1). Nêu vấn đề trung tâm: truyền thống gia đình trước biến động thời đại.',
      body: [
        '1. Khung cảnh ngày Tết cổ truyền và vẻ đẹp nếp nhà ông Bằng.',
        '2. Hình tượng ông Bằng và chị Hoài - những điểm tựa đạo đức và nghĩa tình.',
        '3. Những xung đột, trăn trở của các thành viên trong gia đình thời kỳ giao thời.',
        '4. Nghệ thuật tự sự: điểm nhìn trần thuật linh hoạt, miêu tả nội tâm tinh tế.',
      ],
      conclusion:
        'Khẳng định thông điệp nhân văn sâu sắc: Dù xã hội biến đổi, tình thân và đạo lý cội nguồn vẫn là bến đỗ bình yên nhất của con người.',
    },
    examPrompts: [
      'Phân tích vẻ đẹp tâm hồn của nhân vật chị Hoài và ông Bằng trong đoạn trích "Mùa lá rụng trong vườn" (Ma Văn Kháng).',
      'So sánh cách tiếp cận đời sống xã hội qua lăng kính tiểu thuyết giữa "Xuân Tóc Đỏ cứu quốc" (Vũ Trọng Phụng) và "Mùa lá rụng trong vườn" (Ma Văn Kháng).',
    ],
    keywords: [
      'Mùa lá rụng trong vườn',
      'Ma Văn Kháng',
      'Ông Bằng',
      'Chị Hoài',
      'Tiểu thuyết thế sự',
      'Bài 1 Ngữ văn 12',
    ],
  },
  {
    id: 'cam-hoai',
    title: 'Cảm hoài (Nỗi lòng)',
    author: 'Đặng Dung',
    authorBio:
      'Đặng Dung (1373 - 1414), quê ở huyện Thiên Lộc, trấn Nghệ An (nay là huyện Can Lộc, tỉnh Hà Tĩnh). Ông là danh tướng trụ cột của nhà Hậu Trần trong cuộc kháng chiến chống quân Minh xâm lược đầu thế kỷ XV, nổi tiếng với chiến thắng Bô Cô oanh liệt và tuyệt phẩm thơ chữ Hán "Cảm hoài".',
    year: 'Đầu TK XV',
    genre: 'tho',
    genreName: 'Thơ',
    tag: 'Bài 2 · Thơ Đường luật trung đại',
    readTimeMinutes: 12,
    summary:
      'Bài thơ thất ngôn bát cú Đường luật ghi lại tâm sự bi tráng của người anh hùng Đặng Dung khi vận nước gian truân, thời thế không thuận lợi. Dù tóc đã bạc mà thù nước chưa trả xong, bao phen mài gươm dưới ánh trăng, người tráng sĩ vẫn giữ trọn khí phách hào hùng muốn xoay chuyển đất trời và phẩm tiết kiên trung bất khuất.',
    context:
      'Sáng tác vào khoảng năm 1413 - 1414, khi cuộc khởi nghĩa Hậu Trần chống giặc Minh rơi vào thế cô lập, hiểm nghèo trước lúc Đặng Dung bị bắt và tuẫn tiết trên đường giải sang Trung Quốc.',
    authorAesthetics:
      'Thơ Đặng Dung kết tinh vẻ đẹp bi tráng của văn học yêu nước thời Lý - Trần: hình tượng kỳ vĩ mang tầm vóc vũ trụ kết hợp với nỗi đau thời thế sâu thẳm của bậc anh hùng lỡ vận.',
    mainThemes: [
      'Nỗi đau đớn, xót xa của người anh hùng trước thế sự ngổn ngang và tuổi già ập đến',
      'Hình tượng bi tráng vượt thời gian: người tráng sĩ đầu bạc mài gươm dưới ánh trăng ("Kỷ độ Long Tuyền đới nguyệt ma")',
      'Khát vọng xoay chuyển càn khôn, phò vua giúp nước dù vận mệnh éo le',
      'Vẻ đẹp sử thi và bút pháp đối lập, điển cố hàm súc của thơ Đường luật trung đại',
    ],
    keyAnalysis: [
      {
        heading: 'Hai câu đề & thực: Bi kịch của người anh hùng giữa vòng xoáy thời thế',
        content:
          '"Thế sự du du nại lão hà / Vô cùng thiên địa nhập hàm ca" (Việc đời dằng dặc mà ta đã già rồi biết làm sao / Đất trời vô tận thu cả vào trong khúc hát say). Khi gặp thời ("Thời lai"), kẻ làm hàng thịt (Phàn Khoái), người câu cá (Hàn Tín) cũng làm nên nghiệp lớn; còn khi lỡ vận ("Vận khứ"), bậc anh hùng đành nuốt hận đến cháy lòng.',
        evidence:
          '"Thế sự du du nại lão hà / Vô cùng thiên địa nhập hàm ca / Thời lai đồ điếu thành công dị / Vận khứ anh hùng ẩm hận đa"',
      },
      {
        heading: 'Hai câu luận & kết: Tượng đài người tráng sĩ đầu bạc mài gươm dưới trăng',
        content:
          'Hai câu luận và kết là đỉnh cao tuyệt bút của thơ ca cổ điển Việt Nam: "Trí chúa hữu hoài phù địa trục / Tây nhung vô lực vãn thiên hà / Quốc thù vị báo đầu tiên bạch / Kỷ độ Long Tuyền đới nguyệt ma" (Giúp vua những muốn nâng trục đất / Giặt giáp không sức kéo sông Ngân / Thù nước chưa trả đầu đã bạc / Bao độ mài gươm Long Tuyền dưới bóng trăng). Hình ảnh người tướng già tóc trắng xóa mài thanh gươm báu dưới ánh trăng vừa kỳ vĩ, vừa bi thương mà kiên cường bất khuất.',
        evidence:
          '"Quốc thù vị báo đầu tiên bạch / Kỷ độ Long Tuyền đới nguyệt ma" (Thù nước chưa trả đầu đã bạc / Bao phen dưới trăng mài gươm Long Tuyền)',
        literaryCommentary:
          'Lý Tử Tấn từng ca ngợi: "Phi hào kiệt chi sĩ bất năng" (Không phải bậc hào kiệt trong thiên hạ thì không thể viết nổi câu thơ ấy).',
      },
    ],
    quotes: [
      'Thế sự du du nại lão hà / Vô cùng thiên địa nhập hàm ca',
      'Thời lai đồ điếu thành công dị / Vận khứ anh hùng ẩm hận đa',
      'Quốc thù vị báo đầu tiên bạch / Kỷ độ Long Tuyền đới nguyệt ma',
    ],
    artisticValues: [
      'Kết cấu thơ thất ngôn bát cú Đường luật chặt chẽ, nghệ thuật đối仗 (đối xứng) điêu luyện',
      'Hình tượng thơ mang tầm vóc vũ trụ ("phù địa trục", "vãn thiên hà", "đới nguyệt ma")',
      'Sử dụng điển cố lịch sử tinh tế để khắc họa bi kịch thời thế của bậc anh hùng',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu danh tướng Đặng Dung và bài thơ "Cảm hoài" (Bài 2 - Những thế giới thơ). Khẳng định đây là bức tượng đài bi tráng bất hủ về người anh hùng vệ quốc.',
      body: [
        '1. Nỗi niềm khắc khoải trước việc đời dằng dặc và tuổi già (Hai câu đề).',
        '2. Suy ngẫm triết lý về "Thời" và "Vận" của người anh hùng (Hai câu thực).',
        '3. Chí khí xoay chuyển càn khôn và bi kịch lực bất tòng tâm (Hai câu luận).',
        '4. Vẻ đẹp tuyệt mỹ của hình tượng người tráng sĩ tóc bạc mài gươm dưới trăng (Hai câu kết).',
      ],
      conclusion:
        'Đánh giá vẻ đẹp bi tráng của bài thơ và sự tiếp nối mạch nguồn yêu nước trong thơ ca dân tộc (so sánh với Tây Tiến của Quang Dũng).',
    },
    examPrompts: [
      'Phân tích vẻ đẹp bi tráng của hình tượng người anh hùng trong bài thơ "Cảm hoài" của Đặng Dung.',
      'So sánh cảm hứng bi tráng và hình tượng người lính/tráng sĩ trong "Cảm hoài" (Đặng Dung) và "Tây Tiến" (Quang Dũng).',
    ],
    keywords: [
      'Cảm hoài',
      'Nỗi lòng',
      'Đặng Dung',
      'Long Tuyền đới nguyệt ma',
      'Bi tráng',
      'Bài 2 Ngữ văn 12',
    ],
  },
  {
    id: 'nhin-ve-von-van-hoa-dan-toc',
    title: 'Nhìn về vốn văn hóa dân tộc',
    author: 'Trần Đình Hượu',
    authorBio:
      'GS. Trần Đình Hượu (1927 - 1995), quê ở huyện Thanh Chương, tỉnh Nghệ An. Ông là nhà nghiên cứu hàng đầu về lịch sử tư tưởng phương Đông, Nho giáo và văn học Việt Nam trung - cận đại, được trao tặng Giải thưởng Nhà nước về Khoa học và Công nghệ năm 2000.',
    year: '1986',
    genre: 'chinhluan',
    genreName: 'Chính luận',
    tag: 'Bài 3 · Văn bản nghị luận',
    readTimeMinutes: 13,
    summary:
      'Văn bản trích từ công trình "Đến hiện đại từ truyền thống", phân tích một cách khoa học, khách quan và sâu sắc diện mạo của vốn văn hóa truyền thống Việt Nam trên các phương diện: tôn giáo, nghệ thuật, kiến trúc, ứng xử xã hội và quan niệm nhân sinh. Tác giả chỉ ra cả ưu điểm (tính thiết thực, dung hợp, trọng tình nghĩa, chuộng hòa bình) lẫn hạn chế (thiếu cái kỳ vĩ, cực đoan, ít sáng tạo đột phá) để định hướng con đường hiện đại hóa đất nước.',
    context:
      'Viết trong bối cảnh đất nước bước vào công cuộc Đổi mới và hội nhập, đòi hỏi cái nhìn tỉnh táo, khoa học về di sản văn hóa truyền thống để "đến hiện đại từ truyền thống".',
    mainThemes: [
      'Đặc trưng cốt lõi của văn hóa truyền thống Việt Nam: tinh thần thiết thực, dung hợp, hài hòa với thiên nhiên',
      'Vẻ đẹp thẩm mỹ của văn hóa Việt: ưa sự tinh tế, vừa phải, thanh nhã hơn là cái đồ sộ, kỳ vĩ',
      'Lý tưởng sống của người Việt: mong ước thái bình, an cư lạc nghiệp, trọng tình nghĩa và sự hiền minh',
      'Nghệ thuật lập luận chặt chẽ, khách quan, kết hợp giải thích, chứng minh và bình luận sâu sắc',
    ],
    keyAnalysis: [
      {
        heading: 'Tinh thần dung hợp tôn giáo và tính thiết thực trong văn hóa Việt',
        content:
          'Người Việt tiếp nhận Phật giáo, Nho giáo, Đạo giáo nhưng không đẩy đến sự cuồng tín hay khổ hạnh cực đoan, mà gạn lọc để phục vụ cuộc sống trần thế thiết thực, giữ sự dung hòa "Tam giáo đồng nguyên" ấm áp trong đời sống làng xã.',
        evidence:
          '"Người Việt Nam không có tâm lý kiêu ngạo dân tộc nhưng cũng không tự ti; tiếp nhận văn hóa bên ngoài trên tinh thần dung hợp, thiết thực."',
      },
      {
        heading: 'Quan niệm thẩm mỹ và mẫu người lý tưởng truyền thống',
        content:
          'Trong nghệ thuật và kiến trúc, người Việt không hướng tới những công trình vĩnh cửu khổng lồ mà chuộng cái xinh xắn, hài hòa với cảnh quan. Con người được đề cao là người hiền minh, trọng nghĩa tình hơn là kẻ hùng mạnh bạo liệt.',
        evidence:
          '"Tinh thần chung của văn hóa Việt Nam là thiết thực, linh hoạt, dung hợp... hướng tới cái đẹp dịu dàng, thanh lịch, vừa phải."',
      },
    ],
    quotes: [
      'Tinh thần chung của văn hóa Việt Nam là thiết thực, linh hoạt, dung hợp.',
      'Con người được ưa chuộng là con người hiền lành, tình nghĩa; không chuộng trí mà cũng không chuộng dũng.',
      'Cái đẹp vừa ý là cái đẹp xinh xắn, thanh cảnh, không chói lọi, không kỳ vĩ.',
    ],
    artisticValues: [
      'Hệ thống luận điểm rõ ràng, mạch lạc, bao quát nhiều lĩnh vực văn hóa',
      'Thái độ nghị luận khách quan, điềm đạm, nhìn thẳng vào cả mặt mạnh và mặt hạn chế',
      'Ngôn ngữ khoa học chuẩn xác, giàu sức khái quát và thuyết phục',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu GS. Trần Đình Hượu và văn bản "Nhìn về vốn văn hóa dân tộc" (Bài 3 - Lập luận trong văn bản nghị luận).',
      body: [
        '1. Nhận diện đặc trưng văn hóa Việt qua tôn giáo, tín ngưỡng và lối sống.',
        '2. Đặc điểm thẩm mỹ trong nghệ thuật, kiến trúc và văn chương truyền thống.',
        '3. Ưu điểm và những giới hạn của vốn văn hóa truyền thống trong bối cảnh hiện đại hóa.',
        '4. Nghệ thuật lập luận, sử dụng lý lẽ và bằng chứng của tác giả.',
      ],
      conclusion:
        'Bài học nhận thức cho thế hệ trẻ: Giữ gìn bản sắc dân tộc gắn liền với tiếp thu tinh hoa nhân loại.',
    },
    examPrompts: [
      'Phân tích hệ thống luận điểm và nghệ thuật lập luận trong văn bản "Nhìn về vốn văn hóa dân tộc" của Trần Đình Hượu.',
      'Từ nhận định của Trần Đình Hượu, anh/chị hãy viết bài nghị luận về trách nhiệm giữ gìn và phát huy bản sắc văn hóa dân tộc của tuổi trẻ hôm nay.',
    ],
    keywords: [
      'Nhìn về vốn văn hóa dân tộc',
      'Trần Đình Hượu',
      'Đến hiện đại từ truyền thống',
      'Thiết thực linh hoạt',
      'Bài 3 Ngữ văn 12',
    ],
  },
  {
    id: 'nang-luc-sang-tao',
    title: 'Năng lực sáng tạo',
    author: 'Phan Đình Diệu',
    authorBio:
      'GS.TSKH Phan Đình Diệu (1936 - 2018), quê ở Can Lộc, Hà Tĩnh. Ông là nhà toán học nổi tiếng quốc tế, người đặt nền móng cho ngành Công nghệ thông tin Việt Nam ("Anh Cả của giới Tin học Việt Nam") và là một trí thức luôn đau đáu với giáo dục, tư duy sáng tạo của thế hệ trẻ.',
    year: '1993',
    genre: 'chinhluan',
    genreName: 'Chính luận',
    tag: 'Bài 3 · Văn bản nghị luận',
    readTimeMinutes: 12,
    summary:
      'Văn bản bàn luận sâu sắc về bản chất, vai trò và điều kiện phát triển của năng lực sáng tạo đối với mỗi cá nhân và cả dân tộc trong kỷ nguyên kinh tế tri thức. Tác giả khẳng định sáng tạo không chỉ giới hạn trong khoa học hay nghệ thuật đỉnh cao mà hiện diện trong mọi hoạt động sống khi con người vượt qua lối mòn tư duy.',
    context:
      'Ra đời trong bối cảnh thế giới chuyển dịch mạnh mẽ sang nền văn minh trí tuệ và công nghệ cao, đặt ra yêu cầu cấp bách về đổi mới tư duy và giáo dục tại Việt Nam.',
    mainThemes: [
      'Khái niệm và bản chất của năng lực sáng tạo: khả năng tạo ra giá trị mới, cách giải quyết mới hiệu quả',
      'Mối quan hệ mật thiết giữa tri thức tích lũy và tư duy độc lập, hoài nghi khoa học',
      'Vai trò quyết định của năng lực sáng tạo đối với sự hưng thịnh của quốc gia trong thời đại mới',
      'Cách lập luận chặt chẽ của một nhà khoa học: định nghĩa khái niệm, phân tích điều kiện và mở rộng vấn đề',
    ],
    keyAnalysis: [
      {
        heading: 'Bản chất và phạm vi rộng mở của năng lực sáng tạo',
        content:
          'GS. Phan Đình Diệu bác bỏ quan niệm hẹp hòi cho rằng sáng tạo chỉ dành cho thiên tài. Mọi con người bình thường đều có tiềm năng sáng tạo nếu biết suy nghĩ độc lập, tìm tòi cái mới trong công việc hằng ngày.',
        evidence:
          '"Sáng tạo không phải là đặc quyền của riêng một số ít người mà là phẩm chất tiềm tàng trong mỗi con người biết tư duy tự chủ."',
      },
      {
        heading: 'Điều kiện để giải phóng năng lực sáng tạo ở người trẻ',
        content:
          'Muốn sáng tạo phải có nền tảng tri thức vững chắc, bản lĩnh dám đặt câu hỏi phản biện trước những điều có sẵn và một môi trường xã hội khuyến khích sự tìm tòi, tôn trọng sự khác biệt.',
      },
    ],
    quotes: [
      'Năng lực sáng tạo là động lực cốt lõi đưa con người và dân tộc vượt lên trong thời đại trí tuệ.',
      'Học tập không chỉ là ghi nhớ tri thức có sẵn mà là rèn luyện năng lực tự tìm ra tri thức mới.',
    ],
    artisticValues: [
      'Cấu trúc lập luận chuẩn mực theo tư duy lô-gíc của một nhà toán học lớn',
      'Lý lẽ sắc bén, giàu tính thời sự và khơi gợi cảm hứng hành động cho tuổi trẻ',
      'Ngôn ngữ chính luận trong sáng, khúc chiết, giàu sức thuyết phục',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu GS. Phan Đình Diệu và văn bản nghị luận "Năng lực sáng tạo" (Bài 3).',
      body: [
        '1. Giải thích khái niệm năng lực sáng tạo và biểu hiện của nó.',
        '2. Tầm quan trọng của năng lực sáng tạo trong kỷ nguyên khoa học - công nghệ.',
        '3. Các yếu tố thúc đẩy và cản trở năng lực sáng tạo.',
        '4. Liên hệ bài học rèn luyện tư duy sáng tạo và hoài bão của tuổi trẻ.',
      ],
      conclusion:
        'Khẳng định thông điệp của văn bản đối với hành trang lập thân, lập nghiệp của học sinh lớp 12.',
    },
    examPrompts: [
      'Phân tích mạch lập luận và sức thuyết phục của văn bản "Năng lực sáng tạo" (Phan Đình Diệu).',
      'Viết bài văn nghị luận về một vấn đề liên quan đến tuổi trẻ: Làm thế nào để đánh thức năng lực sáng tạo và hoài bão lớn trong kỷ nguyên số?',
    ],
    keywords: [
      'Năng lực sáng tạo',
      'Phan Đình Diệu',
      'Tư duy độc lập',
      'Văn bản nghị luận',
      'Bài 3 Ngữ văn 12',
    ],
  },
  {
    id: 'may-y-nghi-ve-tho',
    title: 'Mấy ý nghĩ về thơ',
    author: 'Nguyễn Đình Thi',
    authorBio:
      'Nguyễn Đình Thi (1924 - 2003), sinh tại Luang Prabang (Lào), quê gốc ở làng Vũ Thạch, Hà Nội. Ông là nghệ sĩ đa tài (nhà thơ, nhà văn, nhà viết kịch, nhạc sĩ, nhà lý luận phê bình), nguyên Tổng thư ký Hội Nhà văn Việt Nam, được trao Giải thưởng Hồ Chí Minh năm 1996.',
    year: '1949',
    genre: 'chinhluan',
    genreName: 'Chính luận',
    tag: 'Bài 3 · Tiểu luận phê bình',
    readTimeMinutes: 13,
    summary:
      'Tiểu luận nổi tiếng của Nguyễn Đình Thi bàn về đặc trưng bản chất của thơ ca: Thơ là tiếng nói đầu tiên, tiếng nói thứ nhất của tâm hồn khi chạm vào cuộc sống; ngôn ngữ thơ giàu nhạc điệu, hình ảnh và khoảng lặng giữa các từ; thơ tự do là bước phát triển tất yếu để giải phóng cảm xúc thời đại mới.',
    context:
      'Được trình bày tại Hội nghị tranh luận văn nghệ ở Việt Bắc tháng 9 năm 1949, đánh dấu bước chuyển mình quan trọng của lý luận thơ ca cách mạng Việt Nam.',
    mainThemes: [
      'Bản chất của thơ: Sự rung động trực tiếp của tâm hồn gắn liền với tư tưởng, tình cảm và cuộc sống',
      'Đặc trưng của hình ảnh thơ, nhạc điệu nội tâm và ngôn từ nghệ thuật trong thơ',
      'Vai trò của "khoảng trống" giữa các chữ và sự đồng sáng tạo của người đọc',
      'Sự kết hợp nhuần nhuyễn giữa tư duy lý luận sắc sảo và cảm수 nghệ thuật tinh tế của một nhà thơ',
    ],
    keyAnalysis: [
      {
        heading: 'Thơ là tiếng nói của tâm hồn gắn liền với cuộc sống',
        content:
          'Nguyễn Đình Thi khẳng định nguồn gốc của thơ là cảm xúc mãnh liệt trước cuộc đời. Làm thơ không phải là ghép vần bằng lý trí khô khan mà là để tâm hồn tự cất tiếng hát khi đã tràn đầy rung động.',
        evidence:
          '"Thơ là tiếng nói đầu tiên, tiếng nói thứ nhất của tâm hồn khi đụng chạm tới cuộc sống."',
      },
      {
        heading: 'Đặc trưng của hình ảnh, nhịp điệu và ngôn từ thơ',
        content:
          'Hình ảnh trong thơ không phải là bức ảnh chụp tĩnh tại mà là hình ảnh lấp lánh ánh sáng của cảm xúc. Nhịp điệu của thơ không chỉ nằm ở niêm luật bên ngoài mà là nhịp sóng tâm hồn bên trong, và điều kỳ diệu của thơ nằm ở cả phần "im lặng giữa các chữ".',
        evidence:
          '"Giữa các chữ, các câu thơ có những khoảng lặng, nơi tư tưởng và tình cảm ngân vang mãi trong lòng người đọc."',
      },
    ],
    quotes: [
      'Thơ là tiếng nói đầu tiên, tiếng nói thứ nhất của tâm hồn khi đụng chạm tới cuộc sống.',
      'Đầu mối của thơ có lẽ ta đi tìm bên trong tâm hồn con người chăng?',
      'Nhịp điệu của thơ là nhịp điệu của tâm hồn, không phải chỉ là sự gò bó của vần điệu bên ngoài.',
    ],
    artisticValues: [
      'Lập luận vừa chặt chẽ, sâu sắc vừa mềm mại, giàu hình ảnh và chất thơ',
      'Cách đặt vấn đề theo lối đối thoại, tâm tình cùng người đọc',
      'Dẫn chứng văn học chọn lọc, sinh động từ ca dao đến thơ cổ điển và hiện đại',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu Nguyễn Đình Thi và tiểu luận phê bình "Mấy ý nghĩ về thơ" (Bài 3).',
      body: [
        '1. Quan niệm của Nguyễn Đình Thi về cội nguồn của thơ: tâm hồn và cuộc sống.',
        '2. Phân tích các yếu tố cấu thành thơ: hình ảnh, tư tưởng, nhạc điệu và ngôn từ.',
        '3. Quan điểm tiến bộ về việc đổi mới hình thức thơ ca.',
        '4. Nghệ thuật viết văn nghị luận giàu chất văn chương của Nguyễn Đình Thi.',
      ],
      conclusion:
        'Khẳng định giá trị kinh điển của văn bản đối với lý luận văn học và việc đọc hiểu thơ ca lớp 12.',
    },
    examPrompts: [
      'Phân tích nghệ thuật lập luận của Nguyễn Đình Thi trong văn bản "Mấy ý nghĩ về thơ".',
      'Từ quan niệm của Nguyễn Đình Thi trong "Mấy ý nghĩ về thơ", hãy làm sáng tỏ vẻ đẹp của một bài thơ trong chương trình Ngữ văn 12.',
    ],
    keywords: [
      'Mấy ý nghĩ về thơ',
      'Nguyễn Đình Thi',
      'Tiểu luận phê bình',
      'Tiếng nói tâm hồn',
      'Bài 3 Ngữ văn 12',
    ],
  },
  {
    id: 'hai-khau-linh-tu',
    title: 'Hải khẩu linh từ - Đền thiêng cửa bể',
    author: 'Đoàn Thị Điểm',
    authorBio:
      'Hồng Hà nữ sĩ Đoàn Thị Điểm (1705 - 1748), quê ở làng Giai Phạm, huyện Văn Giang, trấn Kinh Bắc (nay thuộc tỉnh Hưng Yên). Bà là nữ danh sĩ kiệt xuất thế kỷ XVIII, nổi tiếng với bản diễn Nôm "Chinh phụ ngâm" và tập truyện chữ Hán "Truyền kỳ tân phả" (Tục truyền kỳ).',
    year: 'Thế kỷ XVIII',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Bài 4 · Truyện truyền kỳ (Yếu tố kì ảo)',
    readTimeMinutes: 14,
    summary:
      'Trích từ tập "Truyền kỳ tân phả", tác phẩm kể về cuộc đời và sự hiển linh của bà Nguyễn Thị Bích Châu (Chế Thắng Phu nhân) - bậc hiền phi tài sắc vẹn toàn của vua Trần Duệ Tông. Bà từng dâng biểu "Kê minh thập sách" giúp vua trị nước, và khi theo vua nam chinh gặp sóng dữ tại cửa biển Kỳ Anh (Hà Tĩnh), bà đã dũng cảm gieo mình xuống biển hy sinh để cứu đoàn thuyền nhà vua, sau hiển thánh phù trợ vua Lê Thánh Tông và nhân dân.',
    context:
      'Sáng tác vào nửa đầu thế kỷ XVIII, tiếp nối truyền thống truyện truyền kỳ trung đại Việt Nam nhằm tôn vinh tài năng, đức hạnh và lòng yêu nước thương dân của người phụ nữ Việt Nam.',
    mainThemes: [
      'Ca ngợi vẻ đẹp trí tuệ ("Kê minh thập sách") và lòng trung liệt vì nước quên thân của bà Nguyễn Thị Bích Châu',
      'Vai trò của yếu tố kì ảo (vua biển Giao Long, hiển linh trong mộng, giúp vua Lê Thánh Tông dẹp giặc) trong việc bất tử hóa người liệt nữ',
      'Sự kết hợp hài hòa giữa sự kiện lịch sử có thật và trí tưởng tượng kì ảo lãng mạn',
      'Tư tưởng nhân văn của Đoàn Thị Điểm: Đề cao phẩm giá, trí tuệ chính trị của người phụ nữ',
    ],
    keyAnalysis: [
      {
        heading: 'Vẻ đẹp tài đức và bản lĩnh chính trị qua "Kê minh thập sách"',
        content:
          'Khác với hình ảnh cung tần chỉ biết hầu hạ chốn hậu cung, Bích Châu là bậc nữ lưu có tầm nhìn quốc gia đại sự. Bản "Kê minh thập sách" (Mười kế sách dâng lúc gà gáy) khuyên vua bền gốc nước, trọng hiền tài, thương dân lành thể hiện trí tuệ lỗi lạc.',
        evidence:
          '"Thiếp nghe: Bền gốc nước, yên lòng dân là đạo lớn của bậc đế vương..."',
      },
      {
        heading: 'Hành động gieo mình xuống cửa biển Hải Khẩu và thế giới kì ảo',
        content:
          'Giữa sóng cuồng gió dữ do Quảng Lợi Vương đòi cống nạp, Bích Châu khảng khái nhận lấy sự hy sinh: "Thiếp xin lấy một tấm thân hèn mọn này để cứu muôn mạng quân dân". Yếu tố kì ảo (bà hóa thành bậc thần tiên dưới thủy cung, hiển linh trò chuyện và giúp vua Lê Thánh Tông bình Chiêm) vừa giải nỗi oan khuất, vừa dựng tượng đài vĩnh cửu cho người liệt nữ tại ngôi đền thiêng cửa bể.',
      },
    ],
    quotes: [
      'Thiếp thà làm hạt ngọc nát để giữ trọn tiết nghĩa, quyết không chịu làm ngói lành mà ô danh!',
      'Đền thiêng cửa bể ngàn năm khói hương, ghi tạc tấm lòng trung liệt của bậc nữ trung hào kiệt.',
    ],
    artisticValues: [
      'Đan cài nhuần nhuyễn yếu tố kì ảo (thần linh, thủy cung, giấc mộng) với chi tiết lịch sử thực tế (vua Trần Duệ Tông, vua Lê Thánh Tông, địa danh Hải Khẩu)',
      'Nghệ thuật khắc họa nhân vật qua ngôn từ đối thoại, tờ biểu và thơ văn điển nhã',
      'Sử dụng điển cố, điển tích phong phú, trang trọng',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu nữ sĩ Đoàn Thị Điểm, tập "Truyền kỳ tân phả" và truyện "Hải khẩu linh từ - Đền thiêng cửa bể" (Bài 4 - Yếu tố kì ảo trong truyện kể).',
      body: [
        '1. Vẻ đẹp tài sắc và trí tuệ trị quốc của Nguyễn Thị Bích Châu ở cõi trần.',
        '2. Hành động hy sinh lẫm liệt vì nghĩa lớn tại cửa biển Hải Khẩu.',
        '3. Giá trị của yếu tố kì ảo trong phần hậu thân và sự hiển linh của Chế Thắng Phu nhân.',
        '4. Nghệ thuật truyện truyền kỳ và nghệ thuật sử dụng điển cố của Đoàn Thị Điểm.',
      ],
      conclusion:
        'Khẳng định giá trị nhân văn sâu sắc của tác phẩm trong dòng văn học viết về người phụ nữ Việt Nam.',
    },
    examPrompts: [
      'Phân tích vai trò và ý nghĩa của yếu tố kì ảo trong văn bản "Hải khẩu linh từ - Đền thiêng cửa bể" của Đoàn Thị Điểm.',
      'Cảm nhận về vẻ đẹp nhân cách và trí tuệ của nhân vật Nguyễn Thị Bích Châu trong tác phẩm.',
    ],
    keywords: [
      'Hải khẩu linh từ',
      'Đền thiêng cửa bể',
      'Đoàn Thị Điểm',
      'Nguyễn Thị Bích Châu',
      'Yếu tố kì ảo',
      'Bài 4 Ngữ văn 12',
    ],
  },
  {
    id: 'muoi-cua-rung',
    title: 'Muối của rừng',
    author: 'Nguyễn Huy Thiệp',
    authorBio:
      'Nguyễn Huy Thiệp (1950 - 2021), quê ở huyện Thanh Trì, Hà Nội. Ông là nhà văn có đóng góp cách tân đột phá nhất cho truyện ngắn Việt Nam đương đại sau 1975, được truy tặng Giải thưởng Nhà nước về Văn học nghệ thuật năm 2022.',
    year: '1986',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Bài 4 · Truyện ngắn đương đại (Kì ảo & Sinh thái)',
    readTimeMinutes: 14,
    summary:
      'Truyện kể về chuyến đi săn mùa xuân của ông Diểu với khẩu súng hai nòng hiện đại. Sau khi bắn bị thương khỉ bố, chứng kiến tình nghĩa vợ chồng và sự hy sinh cứu chồng của khỉ mẹ cùng cái chết của chú khỉ con dưới vực sâu, ông Diểu trải qua hành trình thức tỉnh lương tri: băng bó cho khỉ già, buông bỏ súng đạn, trần truồng trở về trong làn mưa xuân ấm áp và bắt gặp loài hoa tử huyền ("muối của rừng") ba mươi năm mới nở một lần.',
    context:
      'Sáng tác năm 1986, là một trong những truyện ngắn xuất sắc nhất của Nguyễn Huy Thiệp mang cảm hứng triết luận nhân sinh và sinh thái sâu sắc.',
    authorAesthetics:
      'Nguyễn Huy Thiệp kết hợp bút pháp hiện thực sắc lạnh với yếu tố kì ảo, biểu tượng đa nghĩa để khảo sát phần thiện căn sâu thẳm trong tâm hồn con người.',
    mainThemes: [
      'Hành trình thức tỉnh nhân tính: từ kẻ đi săn ngạo mạn với vũ khí hủy diệt đến sự hối hận, thương cảm và buông bỏ bạo lực',
      'Bài học đạo đức từ thế giới tự nhiên qua tình nghĩa thủy chung của gia đình loài khỉ',
      'Ý nghĩa biểu tượng kì ảo của hoa tử huyền - "muối của rừng": điềm lành của sự thanh lọc tâm hồn và hòa giải giữa con người với thiên nhiên',
      'Thông điệp sinh thái hiện đại: Con người chỉ tìm thấy hạnh phúc khi sống hòa hợp, tôn trọng muôn loài',
    ],
    keyAnalysis: [
      {
        heading: 'Cuộc đối đầu giữa ông Diểu và gia đình loài khỉ',
        content:
          'Ban đầu ông Diểu bước vào rừng với tâm thế kẻ chinh phục kiêu ngạo nhờ khẩu súng săn. Thế nhưng khi chứng kiến khỉ cái liều mình quay lại cứu khỉ đực và ánh mắt van lơn, đau đớn rất "người" của con khỉ già bị thương, lòng trắc ẩn trong ông Diểu đã chiến thắng bản năng sát sinh.',
        evidence:
          '"Ông Diểu nhìn vào mắt con khỉ già, thấy một nỗi đau đớn, tuyệt vọng đến tê người. Ông bỗng thấy sợ hãi chính hành động của mình..."',
      },
      {
        heading: 'Sự trở về trần trụi và biểu tượng kì ảo hoa Tử Huyền ("Muối của rừng")',
        content:
          'Mất súng, mất quần áo, ông Diểu trở về với trạng thái nguyên sơ nhất của con người giữa thiên nhiên, tay ôm con khỉ già rồi thả nó về với rừng. Ngay khoảnh khắc ông buông bỏ tham sân và bạo lực, rừng xuân ban tặng cho ông cuộc gặp gỡ kỳ diệu với hoa tử huyền trắng như muối - loài hoa 30 năm mới nở một lần báo hiệu điềm lành và mùa màng no ấm.',
        evidence:
          '"Mưa xuân ấm áp. Ông Diểu bước đi trần truồng, cô đơn nhưng thanh thản giữa ngàn hoa tử huyền trắng muốt như muối của rừng..."',
        literaryCommentary:
          'Chi tiết kì ảo hoa tử huyền nâng câu chuyện đi săn thành một ngụ ngôn triết học tuyệt đẹp về sự cứu rỗi lương tri.',
      },
    ],
    quotes: [
      'Hoa tử huyền cứ ba mươi năm mới nở một lần. Người nào gặp hoa tử huyền sẽ gặp may mắn.',
      'Ông Diểu nhận ra rằng làm điều ác thì dễ, nhưng giữ được lòng nhân từ trước muôn loài mới thật gian nan.',
      'Trần truồng và cô đơn, ông Diểu bước đi trong mưa xuân, lòng thanh thản lạ thường.',
    ],
    artisticValues: [
      'Kết hợp tài tình giữa bút pháp tả thực sinh động và chi tiết kì ảo, biểu tượng ("hoa tử huyền")',
      'Nghệ thuật phân tích diễn biến tâm lý nhân vật tinh vi qua từng chặng hành trình',
      'Ngôn ngữ cô đọng, giàu tính triết lý và đa tầng nghĩa',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu Nguyễn Huy Thiệp và truyện ngắn "Muối của rừng" (Bài 4 - Yếu tố kì ảo trong truyện kể).',
      body: [
        '1. Hình ảnh ông Diểu lúc mới vào rừng và phát súng bắn hạ khỉ đực.',
        '2. Diễn biến tâm lý của ông Diểu trước tình cảm của gia đình khỉ và sự thức tỉnh lương tri.',
        '3. Hành động phóng sinh và cuộc trở về trong trạng thái nguyên sơ.',
        '4. Ý nghĩa biểu tượng kì ảo của hoa tử huyền ("Muối của rừng") và thông điệp sinh thái - nhân văn.',
      ],
      conclusion:
        'Khẳng định giá trị tư tưởng vượt thời đại của tác phẩm về mối quan hệ giữa con người với tự nhiên và cái Thiện.',
    },
    examPrompts: [
      'Phân tích hành trình thức tỉnh nhân tính của nhân vật ông Diểu trong truyện ngắn "Muối của rừng" (Nguyễn Huy Thiệp).',
      'Phân tích ý nghĩa biểu tượng của chi tiết kì ảo "hoa tử huyền" và nhan đề "Muối của rừng".',
    ],
    keywords: [
      'Muối của rừng',
      'Nguyễn Huy Thiệp',
      'Ông Diểu',
      'Hoa tử huyền',
      'Văn học sinh thái',
      'Bài 4 Ngữ văn 12',
    ],
  },
  {
    id: 'nhan-vat-quan-trong',
    title: 'Nhân vật quan trọng (Trích Quan thanh tra)',
    author: 'Nikolai Gogol',
    authorBio:
      'Nikolai Vasilyevich Gogol (Ni-cô-lai Gô-gôn, 1809 - 1852) là đại văn hào hiện thực Nga thế kỷ XIX, bậc thầy của nghệ thuật trào phúng thế giới với phương châm nghệ thuật bất hủ: "Cười qua nước mắt".',
    year: '1836',
    genre: 'kinh',
    genreName: 'Kịch',
    tag: 'Bài 5 · Tiếng cười của hài kịch',
    readTimeMinutes: 13,
    summary:
      'Đoạn trích thuộc hồi III của vở hài kịch bất hủ "Quan thanh tra". Do nỗi sợ bị vạch tội tham nhũng nên từ viên Thị trưởng đến đám quan chức địa phương đã nhận nhầm Khlestakov (Khlet-xta-cốp) - một công chức quèn rỗng túi, ăn chơi ở thủ đô Петербург - là "Quan thanh tra cấp cao đi vi hành". Được đà tung hứng, Khlestakov tha hồ khoác lác không biết ngượng mồm rằng mình là bạn thân của Пушкин, chỉ huy các bộ trưởng và sắp lên làm Thống chế.',
    context:
      'Vở hài kịch 5 hồi "Quan thanh tra" công diễn năm 1836 dưới thời Nga hoàng Nikolai I, giáng một đòn sấm sét vào bộ máy quan liêu tham nhũng, hèn hạ và thói giả dối xã hội.',
    mainThemes: [
      'Xung đột hài kịch độc đáo giữa cái bên ngoài hào nhoáng giả tạo với cái bên trong rỗng tuếch, tầm thường',
      'Hình tượng Khlestakov - biểu tượng kinh điển của thói khoác lác, háo danh ("Chủ nghĩa Khlestakov")',
      'Sự đê hèn, khiếp nhược vì tật giật mình của đám quan chức tham nhũng (Thị trưởng, Chánh án, Trưởng viện tế bần...)',
      'Nghệ thuật tạo tiếng cười hài kịch qua tình huống hiểu lầm, ngôn ngữ đối thoại và cử chỉ sân khấu',
    ],
    keyAnalysis: [
      {
        heading: 'Màn khoác lác leo thang không phanh của Khlestakov',
        content:
          'Thấy đám quan chức tỉnh lẻ khúm núm sợ sệt, Khlestakov từ chỗ tưởng mình sắp bị bắt đi tù vì nợ tiền trọ đã nhanh chóng nhập vai "nhân vật quan trọng". Hắn bịa chuyện từ việc viết hết các kiệt tác văn học, đánh bài với các đại sứ, có ba vạn năm ngàn người đưa thư riêng cho đến việc thâu tóm quyền lực toàn triều đình.',
        evidence:
          '"Trên bàn giấy của tôi, toàn những tước công, tước bá chen chúc nhau như kiến... Tôi vỗ vai Pu-skin bảo: Sao anh bạn, dạo này thế nào?"',
      },
      {
        heading: 'Nỗi khiếp sợ mù quáng của viên Thị trưởng và bộ máy quan lại',
        content:
          'Lời khoác lác của Khlestakov càng vô lý bao nhiêu thì viên Thị trưởng và vợ con ông ta lại càng run rẩy, tin sái cổ bấy nhiêu. Chính nỗi sợ hãi vì tội lỗi tham nhũng đã làm mờ mắt đám quan lại tinh ranh.',
        evidence:
          '"Thị trưởng (run lẩy bẩy nói riêng): Lạy Chúa, ngài thực là một bậc đại nhân vật!"',
      },
    ],
    quotes: [
      'Trên đời này có ai mà không quen biết tôi! Ba vạn năm ngàn người đưa thư chạy rầm rập chỉ để chuyển thư cho tôi!',
      'Chớ có trách tấm gương nếu mặt anh méo mó. (Đề từ vở kịch Quan thanh tra)',
    ],
    artisticValues: [
      'Xây dựng tình huống hài kịch nhận lầm xuyên suốt, đẩy sự phi lý lên đỉnh điểm',
      'Nghệ thuật phóng đại và thủ pháp tăng tiến trong ngôn ngữ đối thoại của Khlestakov',
      'Phối hợp nhịp nhàng giữa lời thoại chính, lời nói riêng (bàng thoại) và chỉ dẫn sân khấu',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu đại văn hào Nga Nikolai Gogol, vở hài kịch "Quan thanh tra" và đoạn trích "Nhân vật quan trọng" (Bài 5 - Tiếng cười của hài kịch).',
      body: [
        '1. Tình huống hài kịch nhận lầm tạo đà cho màn kịch "Nhân vật quan trọng".',
        '2. Chân dung Khlestakov qua màn khoác lác leo thang từ văn chương đến quyền lực chính trị.',
        '3. Phản ứng khúm núm, khiếp nhược của viên Thị trưởng và đám quan chức tham nhũng.',
        '4. Đặc trưng nghệ thuật hài kịch của Gogol: ngôn ngữ, hành động kịch và ý nghĩa tiếng cười "cười qua nước mắt".',
      ],
      conclusion:
        'Khẳng định giá trị phê phán xã hội bất hủ của vở kịch và bài học cảnh tỉnh về bệnh háo danh, xu nịnh.',
    },
    examPrompts: [
      'Phân tích nghệ thuật xây dựng tình huống và ngôn ngữ hài kịch trong đoạn trích "Nhân vật quan trọng" (Nikolai Gogol).',
      'Ý nghĩa xã hội của hình tượng Khlestakov và đám quan chức trong đoạn trích "Nhân vật quan trọng".',
    ],
    keywords: [
      'Nhân vật quan trọng',
      'Quan thanh tra',
      'Nikolai Gogol',
      'Khlestakov',
      'Hài kịch',
      'Bài 5 Ngữ văn 12',
    ],
  },
  {
    id: 'giau-cua',
    title: 'Giấu của (Trích hài kịch Quẫn)',
    author: 'Lộng Chương',
    authorBio:
      'Lộng Chương (1918 - 2003), tên thật là Phạm Văn Hiền, quê ở tỉnh Hải Dương. Ông là cây bút hài kịch hàng đầu của nền sân khấu hiện đại Việt Nam, được phong tặng danh hiệu Nghệ sĩ Nhân dân và Giải thưởng Hồ Chí Minh về Văn học nghệ thuật (2000).',
    year: '1960',
    genre: 'kinh',
    genreName: 'Kịch',
    tag: 'Bài 5 · Hài kịch Việt Nam hiện đại',
    readTimeMinutes: 13,
    summary:
      'Đoạn trích thuộc vở hài kịch 5 hồi "Quẫn", khắc họa cảnh gia đình tư sản Đại Cát hoảng loạn tìm đủ mọi mưu kế kỳ quái để tẩu tán, giấu giếm vàng bạc châu báu trước chính sách công tư hợp doanh ở miền Bắc cuối thập niên 1950. Qua hành động biến mẹ già (cụ Đại Lợi) thành "cây giá treo vàng sống", tác giả phơi bày bi hài kịch của lòng tham lam, ích kỷ làm méo mó nhân tính.',
    context:
      'Vở hài kịch "Quẫn" ra đời năm 1960, trở thành kiệt tác mẫu mực nhất của hài kịch Việt Nam thế kỷ XX với hơn 2.000 đêm công diễn vang dội.',
    mainThemes: [
      'Xung đột hài kịch giữa mưu đồ giữ của ích kỷ của tầng lớp tư sản cũ với xu thế phát triển mới của xã hội',
      'Sự tha hóa nhân cách vì đồng tiền: biến tình mẫu tử, gia đình thành công cụ cất giấu tài sản',
      'Nghệ thuật tạo tiếng cười qua hành động sân khấu lố bịch, dồn dập và ngôn ngữ đối thoại giàu tính khẩu ngữ',
    ],
    keyAnalysis: [
      {
        heading: 'Cảnh tượng giấu vàng hỗn loạn của vợ chồng ông bà Đại Cát',
        content:
          'Vì sợ phải kê khai tài sản vào công tư hợp doanh, ông bà Đại Cát cuống cuồng giấu vàng vào gậy trúc, guốc mộc, gối bông, thậm chí bắt bà mẹ già là cụ Đại Lợi đeo hàng chục cây vàng, kiềng cổ, nhẫn ngọc đầy người rồi giả ốm nằm liệt giường.',
        evidence:
          '"Ông Đại Cát: Cứ quấn cả vào người cụ! Cụ già rồi, không ai người ta khám người cụ đâu!"',
      },
      {
        heading: 'Tiếng cười châm biếm sâu sắc về trạng thái "Quẫn" vì tiền tài',
        content:
          'Càng cố giấu của, các nhân vật càng tự trói buộc mình vào nỗi lo sợ nơm nớp: sợ con cái phát hiện, sợ người giúp việc ăn cắp, sợ chính người thân phản bội. Lòng tham biến ngôi nhà giàu sang thành một nhà tù tinh thần đúng như tên vở kịch: "Quẫn".',
      },
    ],
    quotes: [
      'Của cải một đời tích góp, chẳng lẽ lại đem nộp không cho công tư hợp doanh!',
      'Trạng thái "quẫn" là bi hài kịch của những kẻ làm nô lệ cho đồng tiền và lòng tham vị kỷ.',
    ],
    artisticValues: [
      'Xây dựng hành động kịch liên hoàn, nhịp độ nhanh, giàu tính trình diễn sân khấu',
      'Khắc họa tính cách nhân vật hài kịch sắc nét (Đại Cát mưu mô, bà Đại Cát đanh đá, cụ Đại Lợi tham lam cổ hủ)',
      'Ngôn ngữ đối thoại sinh động, đậm chất đời thường miền Bắc',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu nhà viết kịch Lộng Chương, vở hài kịch "Quẫn" và đoạn trích "Giấu của" (Bài 5 - Tiếng cười của hài kịch).',
      body: [
        '1. Tình huống kịch: Nỗi ám ảnh công tư hợp doanh và cuộc chạy đua giấu của.',
        '2. Các chi tiết hài hước đặc sắc: giấu vàng vào đồ vật và biến mẹ già thành nơi cất giấu vàng.',
        '3. Bản chất tính cách của ông bà Đại Cát và cụ Đại Lợi.',
        '4. Nghệ thuật hài kịch của Lộng Chương (xung đột, hành động, ngôn từ).',
      ],
      conclusion:
        'Ý nghĩa phê phán thói tham lam vị kỷ và vị trí đỉnh cao của "Quẫn" trong nền kịch nói Việt Nam.',
    },
    examPrompts: [
      'Phân tích thủ pháp tạo tiếng cười hài kịch trong đoạn trích "Giấu của" (Trích "Quẫn" - Lộng Chương).',
      'So sánh nghệ thuật xây dựng nhân vật hài kịch giữa "Nhân vật quan trọng" (Gogol) và "Giấu của" (Lộng Chương).',
    ],
    keywords: [
      'Giấu của',
      'Hài kịch Quẫn',
      'Lộng Chương',
      'Đại Cát',
      'Tiếng cười hài kịch',
      'Bài 5 Ngữ văn 12',
    ],
  },
  {
    id: 'tac-gia-ho-chi-minh',
    title: 'Tác gia Hồ Chí Minh',
    author: 'Hồ Chí Minh',
    authorBio:
      'Hồ Chí Minh (1890 - 1969), quê ở làng Sen, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Người là vị lãnh tụ vĩ đại của dân tộc Việt Nam, Anh hùng giải phóng dân tộc, Danh nhân văn hóa kiệt xuất thế giới và là nhà văn, nhà thơ lớn của nền văn học Việt Nam hiện đại.',
    year: '1919 - 1969',
    genre: 'chinhluan',
    genreName: 'Chính luận',
    tag: 'Bài 6 · Tác gia văn học lớn',
    readTimeMinutes: 15,
    summary:
      'Bài học tổng kết toàn diện về cuộc đời, quan điểm sáng tác, di sản văn học đồ sộ và phong cách nghệ thuật độc đáo của Chủ tịch Hồ Chí Minh. Văn học của Người luôn lấy mục đích phục vụ cách mạng làm kim chỉ nam ("Văn hóa nghệ thuật cũng là một mặt trận"), đa dạng về thể loại (văn chính luận, truyện và kí, thơ ca) nhưng thống nhất ở tư tưởng nhân đạo cao cả và nghệ thuật uyên bác.',
    context:
      'Sự nghiệp văn học của Hồ Chí Minh gắn liền với hơn nửa thế kỷ hoạt động cách mạng ở Pháp, Liên Xô, Trung Quốc và Việt Nam, tiêu biểu cho tinh thần "Văn hóa phải soi đường cho quốc dân đi".',
    authorAesthetics:
      'Hồ Chí Minh coi văn chương là vũ khí chiến đấu sắc bén ("Nay ở trong thơ nên có thép"), luôn xuất phát từ đối tượng tiếp nhận ("Viết cho ai?") và mục đích ("Viết để làm gì?") để quyết định nội dung ("Viết cái gì?") và hình thức ("Viết thế nào?").',
    mainThemes: [
      'Quan điểm sáng tác nhất quán: Văn nghệ là vũ khí chiến đấu phụng sự Tổ quốc và nhân dân; chú trọng tính chân thực và tính dân tộc',
      'Di sản văn học phong phú trên 3 mảng lớn: Văn chính luận sắc bén, Truyện và kí hiện đại - chiến đấu, Thơ ca hàm súc - cổ điển mà hiện đại',
      'Phong cách nghệ thuật độc đáo, đa dạng mà thống nhất: kết hợp truyền thống với hiện đại, chất thép với chất tình',
    ],
    keyAnalysis: [
      {
        heading: 'Quan điểm sáng tác văn học nghệ thuật của Hồ Chí Minh',
        content:
          'Thứ nhất, Hồ Chí Minh coi văn học là một vũ khí chiến đấu lợi hại phụng sự sự nghiệp cách mạng; nhà văn cũng là chiến sĩ trên mặt trận văn hóa. Thứ hai, Người luôn đề cao tính chân thực và tính dân tộc của văn chương. Thứ ba, khi cầm bút, Người luôn tự đặt 4 câu hỏi cốt lõi: "Viết cho ai? Viết để làm gì? Viết cái gì? Viết thế nào?" để lựa chọn bút pháp phù hợp nhất.',
        evidence:
          '"Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy." / "Nay ở trong thơ nên có thép / Nhà thơ cũng phải biết xung phong."',
      },
      {
        heading: 'Ba bộ phận hợp thành di sản văn học Hồ Chí Minh',
        content:
          '1. Văn chính luận ("Bản án chế độ thực dân Pháp", "Tuyên ngôn Độc lập", "Lời kêu gọi toàn quốc kháng chiến"): lập luận đanh thép, bằng chứng xác thực, giàu nhiệt huyết. 2. Truyện và kí ("Pari", "Vi hành", "Những trò lố hay là Va-ren và Phan Bội Châu", "Nhật ký chìm tàu"): bút pháp trào phúng hiện đại, trí tưởng tượng phong phú. 3. Thơ ca ("Nhật ký trong tù", thơ chữ Hán và thơ tiếng Việt ở Việt Bắc): hòa quyện vẻ đẹp cổ điển Đường - Tống với tinh thần chiến sĩ hiện đại.',
      },
    ],
    quotes: [
      'Văn hóa phải soi đường cho quốc dân đi.',
      'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy.',
      'Nay ở trong thơ nên có thép / Nhà thơ cũng phải biết xung phong.',
    ],
    artisticValues: [
      'Phong cách nghệ thuật cực kỳ đa dạng theo từng thể loại và đối tượng độc giả',
      'Sự kết hợp hài hòa giữa tính chính luận khoa học và tính trữ tình nhân văn',
      'Sự giao thoa tuyệt vời giữa tinh hoa văn hóa phương Đông cổ điển và văn minh phương Tây hiện đại',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu vị trí tối cao của Chủ tịch Hồ Chí Minh trong lịch sử dân tộc và nền văn học Việt Nam hiện đại (Bài 6).',
      body: [
        '1. Ba quan điểm sáng tác văn học cốt lõi của Hồ Chí Minh.',
        '2. Thành tựu lớn trên 3 thể loại: Văn chính luận, Truyện và kí, Thơ ca.',
        '3. Những đặc điểm nổi bật trong phong cách nghệ thuật Hồ Chí Minh (Đa dạng mà thống nhất).',
        '4. Ý nghĩa tư tưởng "Văn hóa phải soi đường cho quốc dân đi" đối với thời đại hôm nay.',
      ],
      conclusion:
        'Khẳng định di sản văn chương Hồ Chí Minh là báu vật tinh thần vô giá của dân tộc Việt Nam.',
    },
    examPrompts: [
      'Trình bày những nét chính về quan điểm sáng tác và phong cách nghệ thuật văn học của Chủ tịch Hồ Chí Minh.',
      'Chứng minh sự thống nhất giữa "chất thép" và "chất tình" trong thơ văn Hồ Chí Minh qua các tác phẩm đã học ở lớp 12.',
    ],
    keywords: [
      'Tác gia Hồ Chí Minh',
      'Văn hóa phải soi đường',
      'Quan điểm sáng tác',
      'Phong cách nghệ thuật',
      'Bài 6 Ngữ văn 12',
    ],
  },
  {
    id: 'mo-nguyen-tieu',
    title: 'Mộ (Chiều tối); Nguyên tiêu (Rằm tháng Giêng)',
    author: 'Hồ Chí Minh',
    authorBio:
      'Hồ Chí Minh (1890 - 1969), lãnh tụ thiên tài của dân tộc Việt Nam và là nhà thơ lớn với tâm hồn nghệ sĩ thanh cao, nhạy cảm trước vẻ đẹp của thiên nhiên và con người.',
    year: '1942 & 1948',
    genre: 'tho',
    genreName: 'Thơ',
    tag: 'Bài 6 · Thơ chữ Hán Hồ Chí Minh',
    readTimeMinutes: 14,
    summary:
      'Hai tuyệt phẩm thơ tứ tuyệt chữ Hán tiêu biểu cho hai giai đoạn: "Mộ" (Chiều tối - trích "Nhật ký trong tù", 1942) khắc họa vẻ đẹp tâm hồn nhân đạo và sự vận động hướng về ánh sáng của người tù cách mạng trên đường chuyển lao; "Nguyên tiêu" (Rằm tháng Giêng, 1948) vẽ nên bức tranh đêm trăng chiến khu Việt Bắc tràn ngập ánh sáng, hòa quyện giữa việc quân quốc đại sự và tình yêu thiên nhiên bát ngát.',
    context:
      '"Mộ" là bài thơ thứ 31 trong tập "Ngục trung nhật ký" viết mùa thu năm 1942 tại Quảng Tây (Trung Quốc). "Nguyên tiêu" sáng tác vào đêm rằm tháng Giêng năm Mậu Tý (đầu năm 1948) trên dòng sông Đáy ở chiến khu Việt Bắc.',
    mainThemes: [
      'Vẻ đẹp tâm hồn Hồ Chí Minh: Tình yêu thiên nhiên tha thiết, lòng nhân ái với người lao động và phong thái ung dung tự tại',
      'Sự vận động kỳ diệu của hình tượng thơ trong "Mộ": từ bóng tối sang ánh sáng ("hồng"), từ cô đơn lạnh lẽo sang ấm áp sự sống con người',
      'Không gian nghệ thuật tràn ngập sắc xuân và ánh trăng trong "Nguyên tiêu": sự hòa hợp giữa thi sĩ và chiến sĩ ("Đàm quân sự" và "Nguyệt mãn thuyền")',
      'Sự kết hợp hoàn mỹ giữa bút pháp cổ điển Đường thi và tinh thần cách mạng hiện đại',
    ],
    keyAnalysis: [
      {
        heading: 'Bài thơ "Mộ" (Chiều tối): Bức tranh thiên nhiên và bức tranh đời sống miền sơn cước',
        content:
          'Hai câu đầu: "Quyện điểu quy lâm tầm túc thụ / Cô vân mạn mạn độ thiên không" (Chim mỏi về rừng tìm chốn ngủ / Chòm mây trôi nhẹ giữa tầng không) thể hiện sự đồng cảm sâu sắc của người tù với cánh chim mỏi và chòm mây cô đơn. Hai câu sau: "Sơn thôn thiếu nữ ma bao túc / Bao túc ma hoàn lô dĩ hồng" (Cô em xóm núi xay ngô tối / Xay hết lò than đã rực hồng). Điệp vòng "ma bao túc - bao túc ma hoàn" diễn tả vòng quay lao động cần mẫn, và nhãn tự "hồng" ở cuối bài làm bừng sáng cả bài thơ, xua tan bóng đêm và sự mệt mỏi.',
        evidence:
          '"Sơn thôn thiếu nữ ma bao túc / Bao túc ma hoàn lô dĩ hồng" (Cô em xóm núi xay ngô tối / Xay hết lò than đã rực hồng)',
      },
      {
        heading: 'Bài thơ "Nguyên tiêu" (Rằm tháng Giêng): Đêm trăng chiến khu và con thuyền chở đầy ánh trăng',
        content:
          'Hai câu đầu mở ra không gian bát ngát tràn ngập sắc xuân và ánh trăng rằm: "Kim dạ nguyên tiêu nguyệt chính viên / Xuân giang, xuân thủy tiếp xuân thiên" (ba chữ "xuân" điệp liên tiếp nối liền sông - nước - trời). Hai câu cuối: "Yên ba thâm xứ đàm quân sự / Dạ bán quy lai nguyệt mãn thuyền" (Nơi sâu khói sóng bàn việc quân / Nửa đêm trở về trăng đầy thuyền). Bàn việc quân nơi khói sóng mịt mù mà khi về lòng thuyền chở đầy ánh trăng lãng mạn.',
        evidence:
          '"Kim dạ nguyên tiêu nguyệt chính viên / Xuân giang, xuân thủy tiếp xuân thiên / Yên ba thâm xứ đàm quân sự / Dạ bán quy lai nguyệt mãn thuyền"',
      },
    ],
    quotes: [
      'Quyện điểu quy lâm tầm túc thụ / Cô vân mạn mạn độ thiên không',
      'Sơn thôn thiếu nữ ma bao túc / Bao túc ma hoàn lô dĩ hồng',
      'Kim dạ nguyên tiêu nguyệt chính viên / Xuân giang, xuân thủy tiếp xuân thiên',
      'Yên ba thâm xứ đàm quân sự / Dạ bán quy lai nguyệt mãn thuyền',
    ],
    artisticValues: [
      'Thể thơ thất ngôn tứ tuyệt chữ Hán cô đọng, ý tại ngôn ngoại',
      'Nghệ thuật sử dụng nhãn tự ("hồng", "mãn"), điệp từ liên hoàn ("ma bao túc", "xuân") đắt giá',
      'Bút pháp chấm phá cổ điển kết hợp tinh thần vận động hướng về ánh sáng và tương lai',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu chùm thơ chữ Hán của Hồ Chí Minh: "Mộ" (Chiều tối) và "Nguyên tiêu" (Rằm tháng Giêng) trong Bài 6 Ngữ văn 12.',
      body: [
        '1. Phân tích bài thơ "Mộ": Bức tranh chiều tối nơi núi rừng và vẻ đẹp lao động khỏe khoắn cùng nhãn tự "hồng".',
        '2. Phân tích bài thơ "Nguyên tiêu": Không gian đêm trăng nguyên tiêu kỳ vĩ và hình ảnh con thuyền chở đầy ánh trăng kháng chiến.',
        '3. Điểm tương đồng trong phong cách thơ Hồ Chí Minh: Cổ điển và hiện đại, chất thép và chất tình.',
      ],
      conclusion:
        'Khẳng định vẻ đẹp tâm hồn nghệ sĩ - chiến sĩ vĩ đại của Chủ tịch Hồ Chí Minh.',
    },
    examPrompts: [
      'Phân tích vẻ đẹp cổ điển và hiện đại trong hai bài thơ "Mộ" (Chiều tối) và "Nguyên tiêu" (Rằm tháng Giêng) của Hồ Chí Minh.',
      'Bình giảng giá trị của chữ "hồng" trong bài thơ "Mộ" và hình ảnh "nguyệt mãn thuyền" trong bài "Nguyên tiêu".',
    ],
    keywords: [
      'Mộ',
      'Chiều tối',
      'Nguyên tiêu',
      'Rằm tháng Giêng',
      'Hồ Chí Minh',
      'Nhật ký trong tù',
      'Bài 6 Ngữ văn 12',
    ],
  },
  {
    id: 'nhung-tro-lo-va-ren-phan-boi-chau',
    title: 'Những trò lố hay là Va-ren và Phan Bội Châu',
    author: 'Hồ Chí Minh',
    authorBio:
      'Nguyễn Ái Quốc - Hồ Chí Minh (1890 - 1969). Trong những năm 1920 hoạt động tại Pháp, Người đã viết hàng loạt truyện ngắn và kí bằng tiếng Pháp đăng trên báo "Le Paria" (Người cùng khổ), đặt nền móng cho văn xuôi hiện đại Việt Nam.',
    year: '1925',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Bài 6 · Truyện ngắn trào phúng hiện đại',
    readTimeMinutes: 13,
    summary:
      'Bằng trí tưởng tượng sắc sảo, Nguyễn Ái Quốc dựng lên cuộc chạm trán giả định tại nhà tù Hỏa Lò (Hà Nội) giữa Toàn quyền Đông Dương mới sang nhận chức Alexandre Varenne (Va-ren) - kẻ phản bội giai cấp vô sản, lố bịch, giả dối - với cụ Phan Bội Châu - bậc anh hùng yêu nước vĩ đại đang bị giam cầm. Trước lời dụ dỗ đường mật của Va-ren, cụ Phan chỉ giữ sự im lặng dửng dưng khinh bỉ, rồi nhếch mép cười hoặc nhổ vào mặt kẻ thù.',
    context:
      'Viết bằng tiếng Pháp, đăng trên báo Le Paria (Người cùng khổ) số 36 - 37 tháng 9 và 10 năm 1925, ngay trước khi Va-ren đặt chân sang Đông Dương nhưng lại nhằm mục đích cổ vũ phong trào đòi thả cụ Phan Bội Châu (bị thực dân Pháp bắt cóc tại Thượng Hải tháng 6/1925).',
    mainThemes: [
      'Nghệ thuật tương phản - đối lập gay gắt giữa hai nhân vật đại diện cho hai thế lực: Thực dân xâm lược phản bội (Va-ren) và Dân tộc Việt Nam bất khuất (Phan Bội Châu)',
      'Lột trần bản chất bịp bợm, lố bịch của Toàn quyền Va-ren qua những lời hứa hão ("chăm sóc", "nâng đỡ") và màn độc thoại vô duyên',
      'Tôn vinh khí phách hiên ngang, uy vũ bất năng khuất của bậc chí sĩ Phan Bội Châu chỉ bằng "sự im lặng", "cái nhếch mép" và "bãi nước bọt"',
    ],
    keyAnalysis: [
      {
        heading: 'Chân dung biếm họa về Toàn quyền Va-ren và những "trò lố"',
        content:
          'Va-ren nguyên là đảng viên Đảng Xã hội Pháp nhưng đã "bán rẻ lương tâm" để làm Toàn quyền Đông Dương. Hành trình từ Sài Gòn ra Huế, Hà Nội của hắn là chuỗi lời hứa suông rỗng tuếch. Khi vào xà lim gặp Phan Bội Châu, hắn thao thao bất tuyệt khoe khoang, đem cái gương phản bội của chính mình ra để khuyên cụ Phan đầu hàng Pháp.',
        evidence:
          '"Ông hứa thế; giả thử cứ cho rằng một vị Toàn quyền Đông Dương mà lại biết giữ lời hứa đi chăng nữa, thì chúng ta vẫn được phép tự hỏi liệu quan Toàn quyền Va-ren sẽ "chăm sóc" vụ ấy vào lúc nào và ra làm sao..."',
      },
      {
        heading: 'Tư thế bất khuất của Phan Bội Châu: Sức mạnh của sự im lặng và cái nhếch mép',
        content:
          'Dù đôi cánh phượng hoàng đang bị xiềng xích trong ngục tối, cụ Phan Bội Châu vẫn đứng ở vị thế tinh thần áp đảo hoàn toàn kẻ thống trị. Cụ không thèm đáp một lời nào trước bài diễn văn lố bịch của Va-ren. Kết thúc truyện là 3 giả thiết tăng tiến đầy kịch tính: Cụ Phan im lặng dửng dưng -> Cụ nhếch mép cười ruồi khinh bỉ -> Nhân chứng Anh Đơ-la-tông-be quả quyết cụ Phan đã nhổ vào mặt Va-ren!',
        evidence:
          '"Từ đầu chí cuối, cụ Phan Bội Châu ngồi im phắc, không nói nửa lời... Chỉ thấy đôi ngọn râu mép của người tù nhếch lên một chút rồi lại hạ xuống ngay."',
      },
    ],
    quotes: [
      'Ông hứa thế; giả thử cứ cho rằng một vị Toàn quyền Đông Dương mà lại biết giữ lời hứa đi chăng nữa...',
      'Suốt cuộc gặp gỡ, cụ Phan Bội Châu im lặng như một bức tượng đồng, khiến lời lẽ của Va-ren trở thành một màn độc thoại lố bịch.',
      'Đôi ngọn râu mép của người tù nhếch lên một chút rồi lại hạ xuống ngay, và cái đó chỉ diễn ra một lần thôi.',
    ],
    artisticValues: [
      'Thủ pháp đối lập - tương phản xuyên suốt tạo hiệu quả thẩm mỹ và tư tưởng mạnh mẽ',
      'Trí tưởng tượng hư cấu độc đáo: viết về chuyến đi của Va-ren trước cả khi sự việc diễn ra ngoài đời',
      'Giọng văn châm biếm sắc sảo, linh hoạt kết hợp kết thúc mở đa tầng nghĩa',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu Nguyễn Ái Quốc và truyện ngắn "Những trò lố hay là Va-ren và Phan Bội Châu" (1925) trong Bài 6 Ngữ văn 12.',
      body: [
        '1. Ý nghĩa nhan đề và thủ pháp đối lập xuyên suốt tác phẩm.',
        '2. Hình tượng Va-ren - kẻ phản bội và những trò lố bịp bợm.',
        '3. Hình tượng Phan Bội Châu - bậc anh hùng dân tộc kiên trung qua nghệ thuật miêu tả sự im lặng.',
        '4. Nghệ thuật kết thúc truyện bằng cái nhếch mép và lời tái bút đầy kịch tính.',
      ],
      conclusion:
        'Khẳng định tài năng truyện ngắn hiện đại bậc thầy và tinh thần chiến đấu sắc bén của Nguyễn Ái Quốc.',
    },
    examPrompts: [
      'Phân tích nghệ thuật tương phản - đối lập trong việc khắc họa hai nhân vật Va-ren và Phan Bội Châu của Nguyễn Ái Quốc.',
      'Ý nghĩa nghệ thuật của chi tiết "sự im lặng" và "cái nhếch mép" của Phan Bội Châu trong tác phẩm.',
    ],
    keywords: [
      'Những trò lố',
      'Va-ren và Phan Bội Châu',
      'Nguyễn Ái Quốc',
      'Hồ Chí Minh',
      'Truyện ngắn trào phúng',
      'Bài 6 Ngữ văn 12',
    ],
  },
  {
    id: 'nghe-thuat-bam-thit-ga',
    title: 'Nghệ thuật băm thịt gà (Trích Việc làng)',
    author: 'Ngô Tất Tố',
    authorBio:
      'Ngô Tất Tố (1893 - 1954), quê ở làng Lộc Hà, huyện Từ Sơn, tỉnh Bắc Ninh (nay thuộc Đông Anh, Hà Nội). Ông là nhà văn hiện thực phê phán xuất sắc nhất viết về nông thôn Việt Nam trước Cách mạng tháng Tám, nhà báo, học giả Nho học uyên bác, được truy tặng Giải thưởng Hồ Chí Minh năm 1996.',
    year: '1940',
    genre: 'ky',
    genreName: 'Kí',
    tag: 'Bài 7 · Phóng sự (Sự thật trong kí)',
    readTimeMinutes: 13,
    summary:
      'Trích từ thiên phóng sự "Việc làng" (chương IV), văn bản ghi lại tận mắt cảnh anh mõ làng (Lăng) thực hành "nghệ thuật" chia một con gà luộc thành 23 cỗ đều tăm tắp, không thừa một miếng xương, không rách một miếng da để phục vụ các bậc chức sắc trong làng. Đằng sau sự khéo léo kỳ dị ấy là hiện thực chua xót về hủ tục "miếng ăn chốn đình trung" đè nặng lên thân phận người nông dân dưới đáy xã hội.',
    context:
      'Tập phóng sự "Việc làng" gồm 16 thiên đăng trên báo Hà Nội tân văn năm 1940, phơi bày toàn bộ hệ thống hủ tục nặng nề, phi lý của nông thôn Việt Nam thời phong kiến - thực dân.',
    mainThemes: [
      'Sự thật trần trụi về hủ tục hương ẩm, ngôi thứ và tục chia phần khắt khe chốn đình làng xưa',
      'Nghịch lý trớ trêu: Việc băm một con gà luộc thành 23 phần lại được nâng lên thành "nghệ thuật" quyết định cả sinh mạng, danh dự của kẻ làm mõ',
      'Nỗi xót thương và tiếng nói phê phán hủ tục phong kiến kìm hãm đời sống người nông dân',
      'Đặc trưng thể loại phóng sự: tính xác thực của sự kiện, sự quan sát tỉ mỉ và giọng điệu vừa khách quan vừa mỉa mai sâu cay',
    ],
    keyAnalysis: [
      {
        heading: 'Màn trình diễn "nghệ thuật băm thịt gà" thần sầu của anh Lăng',
        content:
          'Bằng con dao phay sắc ngọt và chiếc thớt gỗ, anh Lăng pha một con gà luộc thành đúng 23 phần (mỗi phần 4 miếng, tổng cộng 92 miếng kèm 23 miếng phao câu, gan, mề) đều nhau như đúc. Nếu băm lệch hoặc thiếu dù chỉ một miếng da cho các quan viên chức sắc, anh sẽ bị làng phạt vạ sạt nghiệp.',
        evidence:
          '"Mỗi nhát dao xuống thớt là một miếng thịt gà đứt rời, vuông vức, có đủ cả da lẫn thịt, xếp vào hai mươi ba chiếc đĩa không sai một mảy may..."',
      },
      {
        heading: 'Bi kịch thân phận và sự phê phán hủ tục làng xã',
        content:
          'Ngô Tất Tố gọi việc băm thịt gà là "nghệ thuật" với giọng điệu vừa thán phục sự khéo tay của người lao động, vừa chua chát mỉa mai: bao nhiêu trí tuệ, công sức của con người lại bị vắt kiệt chỉ để hầu hạ cái "miếng ăn, miếng nhục" của đám kỳ hào hương lý.',
      },
    ],
    quotes: [
      'Ở làng quê, một miếng giữa làng bằng một sàng xó bếp; chỉ lệch một miếng da gà là đủ sinh ra kiện cáo, phạt vạ.',
      'Băm một con gà ra hai mươi ba cỗ mà đĩa nào cũng có đủ phao câu, gan, mề, da, thịt — đó thực là một nghệ thuật kỳ diệu mà cũng thật đau xót.',
    ],
    artisticValues: [
      'Nghệ thuật quan sát cận cảnh sắc sảo, miêu tả thao tác sống động như một thước phim tài liệu',
      'Kết hợp nhuần nhuyễn thông tin xác thực (sự thật trong kí) với bình luận, trữ tình ngoại đề',
      'Giọng điệu trào phúng ngầm đằng sau vẻ mặt nghiêm trang của người trần thuật',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu nhà văn Ngô Tất Tố, tập phóng sự "Việc làng" và đoạn trích "Nghệ thuật băm thịt gà" (Bài 7 - Sự thật trong tác phẩm kí).',
      body: [
        '1. Bối cảnh bữa cỗ việc làng và áp lực ngôi thứ đè nặng lên người làm mõ.',
        '2. Miêu tả chi tiết quá trình anh Lăng thực hiện "nghệ thuật băm thịt gà" thành 23 cỗ.',
        '3. Ý nghĩa phê phán hiện thực: Hủ tục đình trung và bi kịch "miếng ăn" ở nông thôn cũ.',
        '4. Đặc sắc nghệ thuật phóng sự của Ngô Tất Tố (tính xác thực, điểm nhìn trần thuật, giọng điệu).',
      ],
      conclusion:
        'Khẳng định giá trị tư liệu lịch sử - văn hóa và tầm vóc nhân đạo của ngòi bút Ngô Tất Tố.',
    },
    examPrompts: [
      'Phân tích cách thể hiện "sự thật đời sống" và thái độ của nhà văn Ngô Tất Tố trong đoạn trích "Nghệ thuật băm thịt gà".',
      'Ý nghĩa của nhan đề "Nghệ thuật băm thịt gà" và nghệ thuật trần thuật trong tác phẩm phóng sự "Việc làng".',
    ],
    keywords: [
      'Nghệ thuật băm thịt gà',
      'Việc làng',
      'Ngô Tất Tố',
      'Phóng sự',
      'Sự thật trong kí',
      'Bài 7 Ngữ văn 12',
    ],
  },
  {
    id: 'buoc-vao-doi',
    title: 'Bước vào đời (Trích Nhớ nghĩ chiều hôm)',
    author: 'Đào Duy Anh',
    authorBio:
      'GS. Đào Duy Anh (1904 - 1988), sinh tại Thanh Hóa, quê gốc ở huyện Thanh Oai, Hà Đông (nay thuộc Hà Nội). Ông là học giả bách khoa vĩ đại, người đặt nền móng cho sử học, văn hóa học, từ điển học và nhân học hiện đại Việt Nam, được truy tặng Giải thưởng Hồ Chí Minh đợt 1 (1996).',
    year: '1972',
    genre: 'ky',
    genreName: 'Kí',
    tag: 'Bài 7 · Hồi kí (Sự thật lịch sử & cá nhân)',
    readTimeMinutes: 13,
    summary:
      'Trích từ tập hồi kí "Nhớ nghĩ chiều hôm", văn bản tái hiện chặng đường tuổi trẻ đầy nhiệt huyết của tác giả vào khoảng năm 1925 - 1926: từ bỏ công việc dạy học ổn định ở Quảng Bình để vào Đà Nẵng, Sài Gòn rồi dừng chân ở Huế gặp cụ Phan Bội Châu, tham gia làm báo "Tiếng Dân" cùng cụ Huỳnh Thúc Kháng và quyết tâm dấn thân vào con đường hoạt động văn hóa, học thuật phục vụ dân tộc.',
    context:
      'Tập hồi kí "Nhớ nghĩ chiều hôm" được học giả Đào Duy Anh hoàn thành đầu thập niên 1970, nhìn lại hành trình một thế hệ trí thức tân học đi tìm lý tưởng yêu nước đầu thế kỷ XX.',
    mainThemes: [
      'Khát vọng dấn thân, tìm đường cống hiến cho Tổ quốc của người thanh niên trí thức trước vận hội mới của lịch sử',
      'Giá trị lịch sử chân thực qua những cuộc gặp gỡ với các bậc chí sĩ lớn: Phan Bội Châu, Huỳnh Thúc Kháng, Võ Liêm Sơn',
      'Sự chuyển biến nhận thức từ lòng yêu nước cảm tính sang ý thức xây dựng nền văn hóa và học thuật dân tộc',
      'Đặc trưng thể loại hồi kí: Sự kết hợp giữa ký ức chân thực của cái tôi cá nhân và bối cảnh lịch sử dân tộc',
    ],
    keyAnalysis: [
      {
        heading: 'Quyết định bước ngoặt của tuổi trẻ: Rời trường học nhỏ để bước vào cuộc đời lớn',
        content:
          'Giữa bầu không khí sôi sục của phong trào đòi ân xá Phan Bội Châu và để tang Phan Châu Trinh (1925 - 1926), chàng thanh niên Đào Duy Anh không cam chịu cuộc sống công chức an phận mà từ chức giáo học ở Đồng Hới để dấn thân vào phong trào yêu nước và làm báo cách mạng.',
        evidence:
          '"Tôi cảm thấy mình không thể cứ ngồi yên trong bốn bức tường lớp học khi cả nước đang chuyển mình sôi động..."',
      },
      {
        heading: 'Cuộc gặp gỡ với cụ Phan Bội Châu, cụ Huỳnh Thúc Kháng và lựa chọn con đường văn hóa',
        content:
          'Những trang hồi kí ghi lại trung thực, sống động không khí thành Huế, tờ báo Tiếng Dân vàQuan Hải Tùng Thư. Từ thực tiễn ấy, Đào Duy Anh tìm thấy sứ mệnh trọn đời: dùng ngòi bút học thuật và biên soạn sách báo để khai dân trí, bồi đắp nền tảng văn hóa Việt Nam hiện đại.',
      },
    ],
    quotes: [
      'Tuổi trẻ không thể đứng ngoài dòng chảy lớn của dân tộc; mỗi bước vào đời là một lần tự xác lập lý tưởng sống.',
      'Qua hồi kí "Bước vào đời", chân dung cả một thế hệ thanh niên trí thức những năm 1920 hiện lên trung thực và đầy cảm hứng.',
    ],
    artisticValues: [
      'Tính xác thực cao của thể loại hồi kí: sự kiện, nhân vật lịch sử, mốc thời gian rõ ràng',
      'Giọng văn điềm đạm, chân thành, giàu chất chiêm nghiệm của một bậc đại học giả nhìn lại tuổi trẻ',
      'Kết hợp hài hòa giữa tự sự (kể việc) và biểu cảm, nghị luận',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu học giả Đào Duy Anh, tập hồi kí "Nhớ nghĩ chiều hôm" và đoạn trích "Bước vào đời" (Bài 7 - Sự thật trong tác phẩm kí).',
      body: [
        '1. Bối cảnh lịch sử những năm 1925 - 1926 và tâm tư của chàng thanh niên Đào Duy Anh.',
        '2. Hành trình "bước vào đời": Từ bỏ sự an nhàn để tìm đến các trung tâm phong trào yêu nước.',
        '3. Ấn tượng về các nhân vật lịch sử (Phan Bội Châu, Huỳnh Thúc Kháng) và sự định hình lý tưởng văn hóa.',
        '4. Đặc sắc nghệ thuật hồi kí: tính phi hư cấu, điểm nhìn kép (hiện tại nhớ về quá khứ).',
      ],
      conclusion:
        'Bài học truyền cảm hứng cho tuổi trẻ hôm nay về lý tưởng sống, trách nhiệm xã hội và cách ứng xử khi bước vào đời.',
    },
    examPrompts: [
      'Phân tích giá trị hiện thực lịch sử và vẻ đẹp tâm hồn người trí thức trẻ trong đoạn trích hồi kí "Bước vào đời" (Đào Duy Anh).',
      'Từ văn bản "Bước vào đời", anh/chị hãy viết bài nghị luận về hành trang và lý tưởng của người trẻ khi bước vào ngưỡng cửa cuộc đời.',
    ],
    keywords: [
      'Bước vào đời',
      'Nhớ nghĩ chiều hôm',
      'Đào Duy Anh',
      'Hồi kí',
      'Sự thật trong kí',
      'Bài 7 Ngữ văn 12',
    ],
  },
  {
    id: 'pa-ra-na',
    title: 'Pa-ra-ma / Pa-ra-na (Trích Nhiệt đới buồn)',
    author: 'Claude Lévi-Strauss',
    authorBio:
      'Claude Lévi-Strauss (C. Lê-vi-Xtơ-rốt, 1908 - 2009) là nhà nhân류 học, dân tộc học và triết gia vĩ đại người Pháp, cha đẻ của chủ nghĩa cấu trúc hiện đại với kiệt tác "Tristes Tropiques" (Nhiệt đới buồn, 1955).',
    year: '1955',
    genre: 'nuocngoai',
    genreName: 'Nước ngoài',
    tag: 'Bài 8 · Văn bản thông tin & Du kí nhân học',
    readTimeMinutes: 12,
    summary:
      'Trích từ kiệt tác "Nhiệt đới buồn", văn bản cung cấp dữ liệu địa lý, sinh thái, lịch sử và dân tộc học phong phú về vùng lưu vực sông Paraná (Pa-ra-na / Pa-ra-ma) ở Nam Mỹ (Brazil). Qua chuyến khảo sát thực địa, tác giả tái hiện sự biến đổi của rừng nguyên sinh, đời sống các bộ lạc bản địa và đặt ra cảnh báo sâu sắc về tác động của quá trình khai phá công nghiệp lên tự nhiên và văn hóa bản địa.',
    context:
      'Kết quả từ những chuyến điền dã nhân học của Claude Lévi-Strauss tại vùng nội địa Brazil những năm 1935 - 1939, được in trong cuốn "Tristes Tropiques" năm 1955.',
    mainThemes: [
      'Hệ thống dữ liệu xác thực, đa chiều về địa hình, thổ nhưỡng, thảm thực vật rừng thông Paraná và cư dân vùng biên viễn Nam Mỹ',
      'Sự giao thoa và va chạm giữa làn sóng di cư, khai phá hiện đại với thiên nhiên hoang sơ và tộc người bản địa',
      'Nghệ thuật lồng ghép dữ liệu khoa học (văn bản thông tin) với cảm quan thẩm mỹ và suy tư triết học nhân văn',
    ],
    keyAnalysis: [
      {
        heading: 'Cách tổ chức dữ liệu địa lý - sinh thái và nhân học trong văn bản',
        content:
          'Tác giả cung cấp những dữ liệu cụ thể, chính xác về cấu trúc địa chất, độ cao, sự thay đổi của thảm thực vật khi đi sâu vào bang Paraná và đời sống của người bản địa cùng những người khai hoang mới đến.',
      },
      {
        heading: 'Cái nhìn nhân văn sâu sắc đằng sau những dòng dữ liệu khoa học',
        content:
          'Không chỉ dừng lại ở các con số hay mô tả địa lý khô khan, Lévi-Strauss nhìn thấy nỗi buồn của vùng nhiệt đới khi những cánh rừng nguyên sinh bị tàn phá và các nền văn hóa bản địa dần bị đẩy vào quên lãng.',
      },
    ],
    quotes: [
      'Mỗi vùng đất không chỉ là một bản đồ địa lý mà còn là những tầng trầm tích của lịch sử tự nhiên và số phận con người.',
      'Đằng sau những dữ liệu điền dã khách quan là nỗi trăn trở của nhà nhân học trước sự biến mất của thế giới nguyên sơ.',
    ],
    artisticValues: [
      'Kết hợp chặt chẽ dữ liệu sơ cấp (quan sát thực địa trực tiếp) và dữ liệu thứ cấp (lịch sử, địa chất)',
      'Bố cục văn bản thông tin rõ ràng, giàu sức gợi hình',
      'Giọng điệu vừa chuẩn xác khoa học vừa giàu chất suy tưởng văn chương',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu nhà nhân học Claude Lévi-Strauss, tác phẩm "Nhiệt đới buồn" và văn bản "Pa-ra-na / Pa-ra-ma" (Bài 8 - Dữ liệu trong văn bản thông tin).',
      body: [
        '1. Các loại dữ liệu thông tin được triển khai trong văn bản (địa lý, sinh thái, lịch sử cư trú).',
        '2. Giá trị của dữ liệu thực địa trong việc tái hiện bức tranh vùng đất Paraná.',
        '3. Thái độ, quan điểm nhân văn và sinh thái của tác giả.',
        '4. Nghệ thuật kết hợp phương thức thuyết minh với miêu tả và biểu cảm.',
      ],
      conclusion:
        'Ý nghĩa của văn bản trong việc rèn luyện kỹ năng đọc hiểu dữ liệu thông tin và ý thức bảo vệ di sản tự nhiên - văn hóa.',
    },
    examPrompts: [
      'Phân tích vai trò và cách sử dụng dữ liệu trong văn bản thông tin "Pa-ra-ma / Pa-ra-na" của Claude Lévi-Strauss.',
      'Từ văn bản của Lévi-Strauss, hãy trình bày suy nghĩ về mối quan hệ giữa phát triển kinh tế và bảo tồn thiên nhiên, văn hóa bản địa.',
    ],
    keywords: [
      'Pa-ra-ma',
      'Pa-ra-na',
      'Nhiệt đới buồn',
      'Claude Lévi-Strauss',
      'Văn bản thông tin',
      'Bài 8 Ngữ văn 12',
    ],
  },
  {
    id: 'giao-duc-khai-phong-dong-kinh-nghia-thuc',
    title: 'Giáo dục khai phóng ở Việt Nam nhìn từ Đông Kinh Nghĩa Thục',
    author: 'Nguyễn Nam',
    authorBio:
      'TS. Nguyễn Nam là nhà nghiên cứu văn hóa, lịch sử và giáo dục so sánh (tốt nghiệp Tiến sĩ tại Đại học Harvard, Hoa Kỳ), giảng viên chương trình Nghiên cứu Việt Nam tại Đại học Fulbright Việt Nam, có nhiều công trình chuyên sâu về lịch sử tư tưởng cận đại Việt Nam.',
    year: '2021',
    genre: 'chinhluan',
    genreName: 'Chính luận',
    tag: 'Bài 8 · Văn bản thông tin khoa học - lịch sử',
    readTimeMinutes: 13,
    summary:
      'Văn bản nghiên cứu có hệ thống về mô hình trường Đông Kinh Nghĩa Thục (1907) tại Hà Nội do cụ Lương Văn Can cùng các chí sĩ sáng lập. Thông qua hệ thống dữ liệu lịch sử xác thực (chương trình học, sách giáo khoa "Văn minh tân học sách", phương pháp diễn thuyết công cộng, miễn học phí, cổ vũ chữ Quốc ngữ), tác giả chứng minh Đông Kinh Nghĩa Thục chính là hình mẫu tiên phong của nền giáo dục khai phóng (Liberal Arts Education) tại Việt Nam đầu thế kỷ XX.',
    context:
      'Bài nghiên cứu hiện đại nhìn lại di sản cải cách giáo dục của phong trào Đông Kinh Nghĩa Thục (1907) để rút ra bài học cho công cuộc đổi mới giáo dục Việt Nam trong thế kỷ XXI.',
    mainThemes: [
      'Khái niệm "Giáo dục khai phóng" và sự tương đồng sâu sắc với tôn chỉ của Đông Kinh Nghĩa Thục năm 1907',
      'Sáu phương diện cải cách toàn diện trong "Văn minh tân học sách": dùng chữ Quốc ngữ, hiệu đính sách vở, sửa đổi phép thi, cổ vũ nhân tài, chấn hưng công nghệ và mở báo quán',
      'Cách trích dẫn dữ liệu lịch sử chuẩn mực, tôn trọng quyền sở hữu trí tuệ và đối chiếu liên ngành',
    ],
    keyAnalysis: [
      {
        heading: 'Hệ thống dữ liệu lịch sử về cuộc cách mạng giáo dục của Đông Kinh Nghĩa Thục',
        content:
          'Dù chỉ tồn tại hợp pháp trong khoảng 9 tháng năm 1907, Đông Kinh Nghĩa Thục đã tạo nên bước ngoặt lịch sử: dạy học miễn phí ("Nghĩa thục") cho cả nam và nữ, thay lối học từ chương khoa cử cũ bằng các môn học hiện đại (lịch sử, địa lý, khoa học tự nhiên, kinh tế, công dân) bằng chữ Quốc ngữ.',
        evidence:
          '"Mục đích của nhà trường là khai thông dân trí, bồi dưỡng nhân cách tự chủ và tinh thần trách nhiệm công dân trước vận mệnh đất nước."',
      },
      {
        heading: 'Giá trị của tinh thần "Khai phóng" từ năm 1907 đến thời đại số hôm nay',
        content:
          'Giáo dục khai phóng không nhồi nhét kiến thức chết mà giải phóng tư duy con người khỏi định kiến, kết hợp hài hòa giữa đạo đức truyền thống ("Thực nghiệp", "Nghĩa") và tri thức khoa học phương Tây ("Tân học").',
      },
    ],
    quotes: [
      'Đông Kinh Nghĩa Thục là một cuộc cách mạng về tư tưởng và giáo dục, mở đường cho nền học thuật hiện đại Việt Nam.',
      'Giáo dục khai phóng hướng tới việc đào tạo những con người tự do, có tư duy phản biện và lòng phụng sự xã hội.',
    ],
    artisticValues: [
      'Cấu trúc văn bản thông tin khoa học chuẩn mực: có cước chú, trích dẫn nguồn dữ liệu minh bạch',
      'Kết hợp dữ liệu lịch sử cận đại với lý thuyết giáo dục hiện đại quốc tế',
      'Lập luận khách quan, khúc chiết, giàu hàm lượng tri thức văn hóa',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu văn bản "Giáo dục khai phóng ở Việt Nam nhìn từ Đông Kinh Nghĩa Thục" của Nguyễn Nam (Bài 8 - Dữ liệu trong văn bản thông tin).',
      body: [
        '1. Khái niệm giáo dục khai phóng và bối cảnh ra đời của Đông Kinh Nghĩa Thục (1907).',
        '2. Hệ thống dữ liệu làm sáng tỏ 6 phương diện cải cách trong "Văn minh tân học sách".',
        '3. Phương pháp tổ chức thông tin, trích dẫn tài liệu và tôn trọng quyền sở hữu trí tuệ trong văn bản.',
        '4. Bài học từ Đông Kinh Nghĩa Thục đối với việc tự học và giáo dục khai phóng của thế hệ trẻ hôm nay.',
      ],
      conclusion:
        'Khẳng định tầm vóc vượt thời đại của cụ Lương Văn Can và các nhà nho duy tân đầu thế kỷ XX.',
    },
    examPrompts: [
      'Phân tích cách tác giả Nguyễn Nam sử dụng và tổ chức dữ liệu lịch sử trong văn bản "Giáo dục khai phóng ở Việt Nam nhìn từ Đông Kinh Nghĩa Thục".',
      'Từ tinh thần của Đông Kinh Nghĩa Thục, anh/chị suy nghĩ gì về ý nghĩa của việc học tập suốt đời và tư duy khai phóng của học sinh ngày nay?',
    ],
    keywords: [
      'Giáo dục khai phóng',
      'Đông Kinh Nghĩa Thục',
      'Nguyễn Nam',
      'Lương Văn Can',
      'Văn minh tân học sách',
      'Bài 8 Ngữ văn 12',
    ],
  },
  {
    id: 'doi-muoi',
    title: 'Đời muối (Trích Đời muối: Lịch sử thế giới)',
    author: 'Mark Kurlansky',
    authorBio:
      'Mark Kurlansky (sinh năm 1948) là nhà báo, nhà sử học và tác giả người Mỹ nổi tiếng thế giới với lối viết "lịch sử vi mô" (microhistory) - khám phá lịch sử toàn cầu thông qua câu chuyện của một vật phẩm quen thuộc như muối, cá tuyết hay giấy.',
    year: '2002',
    genre: 'nuocngoai',
    genreName: 'Nước ngoài',
    tag: 'Bài 8 · Văn bản thông tin (Lịch sử thế giới)',
    readTimeMinutes: 12,
    summary:
      'Trích từ cuốn sách bán chạy toàn cầu "Salt: A World History" (Đời muối: Lịch sử thế giới), văn bản dẫn dắt người đọc đi xuyên qua hàng thiên niên kỷ lịch sử nhân loại thông qua hạt muối: từ nền văn minh Trung Hoa cổ đại, Ai Cập, La Mã đến các tuyến đường thương mại, thuế muối, chiến tranh và sự phát triển của khoa học hóa học hiện đại.',
    context:
      'Xuất bản năm 2002, tác phẩm là mẫu mực xuất sắc của văn bản thông tin tổng hợp dữ liệu liên ngành (lịch sử, hóa học, kinh tế, ẩm thực, văn hóa).',
    mainThemes: [
      'Hạt muối bình dị từng là mặt hàng chiến lược định hình các nền văn minh, kinh tế, thuế khóa và cả các cuộc chiến tranh trong lịch sử thế giới',
      'Sự chuyển biến vị thế của muối khi khoa học địa chất và hóa học hiện đại phát hiện ra trữ lượng muối khổng lồ trên Trái Đất',
      'Nghệ thuật tổ chức dữ liệu theo trục thời gian kết hợp không gian văn hóa Đông - Tây vô cùng hấp dẫn',
    ],
    keyAnalysis: [
      {
        heading: 'Vai trò chiến lược của muối trong lịch sử các nền văn minh nhân loại',
        content:
          'Tác giả đưa ra hàng loạt dữ liệu lịch sử bất ngờ: muối từng được dùng để trả lương cho binh lính La Mã (nguồn gốc của từ "salary" - tiền lương từ "sal" là muối), là nguồn thu thuế độc quyền xây dựng Vạn Lý Trường Thành ở Trung Hoa và châm ngòi cho nhiều cuộc cách mạng.',
        evidence:
          '"Trong suốt phần lớn lịch sử nhân loại, muối là một báu vật chiến lược được săn lùng, độc quyền và tranh đoạt không kém gì vàng hay dầu mỏ ngày nay."',
      },
      {
        heading: 'Nghệ thuật kể chuyện lịch sử qua những dữ liệu sống động',
        content:
          'Mark Kurlansky biến những dữ liệu khảo cổ, hóa học (NaCl) và kinh tế khô khan thành một cuốn biên niên sử kỳ thú, giúp người đọc nhận ra giá trị vĩ đại ẩn giấu trong những vật phẩm đời thường nhất.',
      },
    ],
    quotes: [
      'Từ một hạt muối nhỏ bé trên bàn ăn, cả lịch sử thương mại, chiến tranh và văn minh nhân loại hiện lên sống động.',
      'Những thứ từng làm nên chiến tranh trong quá khứ đôi khi lại trở thành điều bình dị nhất của hiện tại nhờ tiến bộ khoa học.',
    ],
    artisticValues: [
      'Phương pháp tiếp cận "lịch sử vi mô" độc đáo: từ cái nhỏ bé nhìn ra bức tranh toàn cầu',
      'Hệ thống dữ liệu đa ngành (lịch sử, ngôn ngữ học, hóa học, kinh tế) phong phú, chính xác',
      'Lối hành văn lôi cuốn, giàu tính khám phá và liên tưởng bất ngờ',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu tác giả Mark Kurlansky và văn bản thông tin "Đời muối" (Bài 8 - Dữ liệu trong văn bản thông tin).',
      body: [
        '1. Hệ thống dữ liệu lịch sử về vai trò của muối ở phương Đông và phương Tây cổ - trung đại.',
        '2. Dữ liệu khoa học hiện đại làm thay đổi nhận thức và vị thế của muối.',
        '3. Cách sắp xếp, đối chiếu dữ liệu thông tin đầy cuốn hút của tác giả.',
        '4. Thông điệp nhận thức về mối liên hệ giữa tự nhiên, khoa học và lịch sử văn minh.',
      ],
      conclusion:
        'Đánh giá sức hấp dẫn của văn bản thông tin hiện đại khi biết kết hợp dữ liệu chuẩn xác với góc nhìn sáng tạo.',
    },
    examPrompts: [
      'Phân tích cách triển khai dữ liệu thông tin và sức hấp dẫn của văn bản "Đời muối" (Mark Kurlansky).',
      'Từ câu chuyện "Đời muối", anh/chị rút ra bài học gì về cách quan sát những sự vật bình dị quanh mình?',
    ],
    keywords: [
      'Đời muối',
      'Mark Kurlansky',
      'Lịch sử thế giới',
      'Dữ liệu văn bản thông tin',
      'Bài 8 Ngữ văn 12',
    ],
  },
  {
    id: 'voi-vang',
    title: 'Vội vàng',
    author: 'Xuân Diệu',
    authorBio:
      'Xuân Diệu (1916 - 1985), tên khai sinh là Ngô Xuân Diệu, quê cha ở làng Trảo Nha, huyện Can Lộc, tỉnh Hà Tĩnh; quê mẹ ở vạn Gò Bồi, Tuy Phước, Bình Định. Ông là "nhà thơ mới nhất trong các nhà thơ Mới", "Ông hoàng thơ tình Việt Nam", Viện sĩ Viện Hàn lâm Nghệ thuật Cộng hòa Dân chủ Đức, được truy tặng Giải thưởng Hồ Chí Minh đợt 1 (1996).',
    year: '1938',
    genre: 'tho',
    genreName: 'Thơ',
    tag: 'Bài 9 · Văn học và cuộc đời (Thơ Mới)',
    readTimeMinutes: 15,
    summary:
      'In trong tập "Thơ thơ" (1938), "Vội vàng" là lời tuyên ngôn nghệ thuật và nhân sinh mãnh liệt của cái tôi Thơ mới. Xuất phát từ việc phát hiện ra thiên đường ngay trên mặt đất đầy hương sắc mùa xuân nhưng thời gian lại chảy trôi tuyến tính một đi không trở lại, Xuân Diệu khao khát "tắt nắng", "buộc gió" và chọn lối sống "vội vàng", cuống quýt để tận hưởng, tận hiến từng giây phút của tuổi trẻ và tình yêu.',
    context:
      'Rút từ tập thơ đầu tay "Thơ thơ" (1938) của Xuân Diệu - đỉnh cao của phong trào Thơ mới (1932 - 1945), đánh dấu sự thức tỉnh rực rỡ của ý thức cá nhân và cảm quan thời gian hiện đại.',
    authorAesthetics:
      'Xuân Diệu lấy con người giữa tuổi trẻ và tình yêu làm chuẩn mực của mọi cái đẹp trên thế gian; thơ ông là nguồn sống rạo rực chưa từng thấy ở chốn nước non lặng lẽ này.',
    mainThemes: [
      'Ước muốn kỳ lạ muốn đoạt quyền tạo hóa ("tắt nắng", "buộc gió") để giữ mãi hương sắc trần gian',
      'Bức tranh thiên đường mặt đất mùa xuân tràn đầy nhựa sống, tình tứ và lấy vẻ đẹp con người làm thước đo ("Tháng giêng ngon như một cặp môi gần")',
      'Quan niệm mới mẻ về thời gian tuyến tính một đi không trở lại và nỗi tiếc nuối tuổi trẻ phai tàn',
      'Tuyên ngôn sống "Vội vàng": Sống mãnh liệt, sống hết mình, giao cảm trọn vẹn với cuộc đời',
    ],
    keyAnalysis: [
      {
        heading: 'Khát vọng "tắt nắng", "buộc gió" và bức tranh thiên đường trên mặt đất',
        content:
          'Mở đầu bài thơ là bốn câu ngũ ngôn như lời nguyện ước táo bạo: "Tôi muốn tắt nắng đi / Cho màu đừng nhạt mất / Tôi muốn buộc gió lại / Cho hương đừng bay đi". Bởi lẽ trần gian trong mắt Xuân Diệu là một bữa tiệc xuân tình tứ: ong bướm tuần tháng mật, hoa đồng nội xanh rì, lá cành tơ phơ phất, yến anh khúc tình si, ánh sáng chớp hàng mi và đỉnh cao là câu thơ thần tình: "Tháng giêng ngon như một cặp môi gần".',
        evidence:
          '"Tôi muốn tắt nắng đi / Cho màu đừng nhạt mất; / Tôi muốn buộc gió lại / Cho hương đừng bay đi... / Tháng giêng ngon như một cặp môi gần"',
        literaryCommentary:
          'Hoài Thanh trong "Thi nhân Việt Nam" nhận xét: "Xuân Diệu say đắm tình yêu, say đắm cảnh trời, sống vội vàng, sống cuống quýt".',
      },
      {
        heading: 'Triết lý về thời gian tuyến tính và lời giục giã sống "Vội vàng" tận hiến',
        content:
          'Khác với quan niệm thời gian tuần hoàn của người xưa, Xuân Diệu nhìn thấy từng khoảnh khắc thời gian ra đi là vĩnh viễn chia lìa: "Xuân đương tới, nghĩa là xuân đương qua / Xuân còn non, nghĩa là xuân sẽ già". Để chiến thắng sự hữu hạn của đời người, nhà thơ chọn "Vội vàng" ôm trọn cuộc sống: "Ta muốn ôm / Cả sự sống mới bắt đầu mơn mởn... / Hỡi xuân hồng, ta muốn cắn vào ngươi!".',
        evidence:
          '"Xuân đương tới, nghĩa là xuân đương qua, / Xuân còn non, nghĩa là xuân sẽ già... / Hỡi xuân hồng, ta muốn cắn vào ngươi!"',
      },
    ],
    scholarlyQuotes: [
      {
        critic: 'Hoài Thanh - Hoài Chân (Thi nhân Việt Nam)',
        quote:
          'Xuân Diệu đã đốt cảnh Bồng Lai mà xua ai nấy về hạ giới. Thơ Xuân Diệu là một nguồn sống rạo rực chưa từng thấy ở chốn nước non lặng lẽ này.',
      },
      {
        critic: 'GS. Hà Minh Đức',
        quote:
          'Vội vàng không phải là sự hưởng thụ ích kỷ gấp gáp, mà là khát vọng sống cường độ cao nhất để không hoài phí một giây phút nào của tuổi trẻ trên mặt đất.',
      },
    ],
    quotes: [
      'Tôi muốn tắt nắng đi / Cho màu đừng nhạt mất; / Tôi muốn buộc gió lại / Cho hương đừng bay đi.',
      'Của ong bướm này đây tuần tháng mật; / Này đây hoa của đồng nội xanh rì...',
      'Tháng giêng ngon như một cặp môi gần;',
      'Xuân đương tới, nghĩa là xuân đương qua, / Xuân còn non, nghĩa là xuân sẽ già',
      'Hỡi xuân hồng, ta muốn cắn vào ngươi!',
    ],
    artisticValues: [
      'Thể thơ tự do phóng khoáng (mở đầu 5 chữ, chuyển sang 8 chữ và câu thơ 3 chữ "Ta muốn ôm" đứng riêng giữa dòng)',
      'Nghệ thuật ẩn dụ chuyển đổi cảm giác ("Tháng giêng ngon như một cặp môi gần") và hệ thống động từ tăng tiến ("ôm", "riết", "say", "thâu", "cắn")',
      'Sự kết hợp độc đáo giữa mạch cảm xúc sôi nổi, đắm say với mạch triết luận sắc sảo về thời gian',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu Xuân Diệu - "nhà thơ mới nhất trong các nhà thơ Mới" và thi phẩm "Vội vàng" (Bài 9 - Văn học và cuộc đời).',
      body: [
        '1. Ước muốn đoạt quyền tạo hóa ("tắt nắng", "buộc gió") và bức tranh thiên đường mặt đất mùa xuân.',
        '2. Cái nhìn bi kịch mà hiện đại về bước đi của thời gian và tuổi trẻ.',
        '3. Khát vọng giao cảm mãnh liệt với cuộc đời ("Ta muốn ôm... Hỡi xuân hồng, ta muốn cắn vào ngươi!").',
        '4. Những cách tân nghệ thuật kiệt xuất của Xuân Diệu trong phong trào Thơ mới.',
      ],
      conclusion:
        'Khẳng định giá trị nhân văn cao đẹp của "Vội vàng": Đánh thức tình yêu cuộc sống trần thế và ý thức trân quý thời gian của tuổi trẻ.',
    },
    examPrompts: [
      'Phân tích bức tranh thiên nhiên mùa xuân và quan niệm nhân sinh mới mẻ của Xuân Diệu trong bài thơ "Vội vàng".',
      'Làm rõ mối quan hệ giữa "Văn học và cuộc đời" qua khát vọng giao cảm với trần thế trong bài thơ "Vội vàng" (Xuân Diệu).',
    ],
    keywords: [
      'Vội vàng',
      'Xuân Diệu',
      'Thơ Mới',
      'Tắt nắng buộc gió',
      'Xuân hồng',
      'Bài 9 Ngữ văn 12',
    ],
  },
  {
    id: 'tro-ve-hemingway',
    title: 'Trở về (Trích Ông già và biển cả)',
    author: 'Ernest Hemingway',
    authorBio:
      'Ernest Hemingway (Ơ-nít Hê-minh-uê, 1899 - 1961), đại văn hào Mỹ được trao Giải Pulitzer (1953) và Giải Nobel Văn học (1954), người khai sinh nguyên lý sáng tác "Tảng băng trôi" (ba phần nổi, bảy phần chìm).',
    year: '1952',
    genre: 'nuocngoai',
    genreName: 'Nước ngoài',
    tag: 'Bài 9 · Văn học và cuộc đời (Tiểu thuyết thế giới)',
    readTimeMinutes: 13,
    summary:
      'Đoạn trích "Trở về" lấy từ phần kết của tiểu thuyết "Ông già và biển cả" (The Old Man and the Sea): Sau cuộc chiến đấu ngoan cường suốt 3 ngày đêm ngoài khơi xa với con cá kiếm khổng lồ và bầy cá mập dữ tợn, ông lão Santiago (Xan-ti-a-gô) trở về bến cảng trong đêm tối khi con cá kiếm chỉ còn trơ lại bộ xương trắng khổng lồ dài mười tám bộ. Ông lão kiệt sức vác cột buồm lên dốc về lều ngủ thiếp đi, trong khi cậu bé Manolin bật khóc vì thương cảm, đám ngư dân kính cẩn đo bộ xương cá và ông lão lại mơ về những con sư tử trên bờ biển châu Phi.',
    context:
      'Thuộc phần kết tiểu thuyết "Ông già và biển cả" (1952), được đưa vào Bài 9 "Văn học và cuộc đời" của chương trình Ngữ văn 12 để suy ngẫm về chiến thắng tinh thần trong thất bại vật chất của con người.',
    mainThemes: [
      'Hành trình "Trở về" mang dáng dấp bi tráng của người anh hùng: Thất bại về mặt vật chất nhưng chiến thắng tuyệt đối về mặt tinh thần và phẩm giá',
      'Sự tiếp nối thế hệ qua tình cảm yêu thương, ngưỡng mộ của cậu bé Manolin dành cho ông lão Santiago ("Cháu còn phải học ông nhiều lắm")',
      'Ý nghĩa đa tầng của bộ xương cá kiếm khổng lồ và giấc mơ về những con sư tử ở phần kết',
      'Sức mạnh nâng đỡ con người của văn chương chân chính trước những thử thách khắc nghiệt của cuộc đời',
    ],
    keyAnalysis: [
      {
        heading: 'Dáng vẻ ông lão Santiago khi trở về bến cảng trong đêm và vác cột buồm về lều',
        content:
          'Trở về bến cảng khi mọi ánh đèn đã tắt, ông lão Santiago lặng lẽ tháo cột buồm, vác lên vai bước lên con dốc trong đêm tối, năm lần phải ngồi xuống nghỉ mới về tới lều. Hình ảnh ông lão vác cột buồm nằm úp mặt trên giường báo với hai bàn tay rướm máu gợi liên tưởng sâu sắc đến hình ảnh Chúa Giê-su vác cây thập giá - biểu tượng của sự chịu đựng cao cả của con người.',
        evidence:
          '"Ông lão vác cột buồm lên vai và bắt đầu trèo lên dốc. Lúc này ông mới biết mình mệt đến mức nào..."',
      },
      {
        heading: 'Tình người ấm áp của cậu bé Manolin và giấc mơ sư tử bất멸',
        content:
          'Sáng hôm sau, cậu bé Manolin mang cà phê nóng đến, nhìn bàn tay thương tích của ông lão mà bật khóc, kiên quyết từ nay sẽ lại đi biển cùng ông bất chấp sự ngăn cản của cha mẹ. Trong khi du khách vô tâm tưởng bộ xương cá kiếm là xương cá mập, thì những ngư dân thực thụ đều kính phục tầm vóc kỳ công của Santiago, còn ông lão đang thanh thản mơ về những con sư tử thời trai trẻ.',
        evidence:
          '"Thế là nó đã đánh bại ông, Manolin ạ - Ông lão nói. - Không, nó không đánh bại được ông! Chính là lũ cá mập sau đó chứ!"',
      },
    ],
    quotes: [
      'Thế là chúng đã đánh bại ông, Manolin ạ. — Không, con cá không đánh bại được ông!',
      'Cháu mặc kệ! Bây giờ chúng ta sẽ lại đi câu với nhau, vì cháu còn phải học ông nhiều lắm.',
      'Trên con đường đi lên phía lều, qua cửa mở, ông lão đang ngủ và ông đang mơ về những con sư tử.',
    ],
    artisticValues: [
      'Đỉnh cao của nguyên lý "Tảng băng trôi": chi tiết tả thực giản dị nhưng hàm chứa tầng sâu triết học và tôn giáo',
      'Nghệ thuật đối lập giữa cái nhìn thấu cảm của cậu bé Manolin/ngư dân với cái nhìn hời hợt của khách du lịch',
      'Kết thúc mở giàu dư ba bằng hình ảnh giấc mơ sư tử - biểu tượng của sức sống bất diệt',
    ],
    essayOutline: {
      introduction:
        'Giới thiệu Ernest Hemingway, nguyên lý "Tảng băng trôi" và đoạn trích "Trở về" (Bài 9 - Văn học và cuộc đời).',
      body: [
        '1. Cảnh ông lão Santiago trở về bến cảng trong đêm tối và hành trình vác cột buồm về lều.',
        '2. Cuộc trò chuyện xúc động giữa Santiago và cậu bé Manolin - sự truyền lửa ý chí qua các thế hệ.',
        '3. Hình ảnh bộ xương cá kiếm dài 18 bộ và hai cách nhìn nhận (ngư dân và khách du lịch).',
        '4. Ý nghĩa kết thúc bằng giấc mơ sư tử và thông điệp về phẩm giá con người.',
      ],
      conclusion:
        'Khẳng định sứ mệnh cao cả của văn học đối với cuộc đời: Tôn vinh vẻ đẹp bất khuất của con người ngay cả trong nghịch cảnh.',
    },
    examPrompts: [
      'Phân tích vẻ đẹp nhân cách của ông lão Santiago và ý nghĩa của sự "Trở về" trong đoạn trích của Hemingway.',
      'Làm rõ nguyên lý "Tảng băng trôi" qua hình ảnh chiếc cột buồm, bộ xương cá kiếm và giấc mơ sư tử trong đoạn trích "Trở về".',
    ],
    keywords: [
      'Trở về',
      'Ông già và biển cả',
      'Ernest Hemingway',
      'Santiago',
      'Manolin',
      'Bài 9 Ngữ văn 12',
    ],
  },
];

export const CURRICULUM_LESSONS_DATA: CurriculumLessonUnit[] = [
  {
    id: 'bai-1',
    semester: 1,
    lessonNumber: 1,
    title: 'Bài 1: Khả năng lớn lao của tiểu thuyết',
    totalPeriods: 6,
    genreFocus: 'Tiểu thuyết hiện đại',
    rows: [
      {
        week: 'Bài 1',
        period: 'VB 1',
        content: 'Xuân Tóc Đỏ cứu quốc (Trích Số đỏ - Vũ Trọng Phụng)',
        category: 'doc',
        workId: 'xuan-toc-do-cuu-quoc',
      },
      {
        week: 'Bài 1',
        period: 'VB 2',
        content: 'Mùa lá rụng trong vườn (Ma Văn Kháng)',
        category: 'doc',
        workId: 'mua-la-rung-trong-vuon',
      },
    ],
  },
  {
    id: 'bai-2',
    semester: 1,
    lessonNumber: 2,
    title: 'Bài 2: Những thế giới thơ',
    totalPeriods: 7,
    genreFocus: 'Thơ trữ tình trung đại & hiện đại',
    rows: [
      {
        week: 'Bài 2',
        period: 'VB 1',
        content: 'Cảm hoài (Nỗi lòng - Đặng Dung)',
        category: 'doc',
        workId: 'cam-hoai',
      },
      {
        week: 'Bài 2',
        period: 'VB 2',
        content: 'Tây Tiến (Quang Dũng)',
        category: 'doc',
        workId: 'tay-tien',
      },
      {
        week: 'Bài 2',
        period: 'VB 3',
        content: 'Đàn ghi ta của Lor-ca (Thanh Thảo)',
        category: 'doc',
        workId: 'dan-ghi-ta-cua-lorca',
      },
    ],
  },
  {
    id: 'bai-3',
    semester: 1,
    lessonNumber: 3,
    title: 'Bài 3: Lập luận trong văn bản nghị luận',
    totalPeriods: 6,
    genreFocus: 'Văn bản nghị luận văn hóa & văn học',
    rows: [
      {
        week: 'Bài 3',
        period: 'VB 1',
        content: 'Nhìn về vốn văn hóa dân tộc (Trần Đình Hượu)',
        category: 'doc',
        workId: 'nhin-ve-von-van-hoa-dan-toc',
      },
      {
        week: 'Bài 3',
        period: 'VB 2',
        content: 'Năng lực sáng tạo (Phan Đình Diệu)',
        category: 'doc',
        workId: 'nang-luc-sang-tao',
      },
      {
        week: 'Bài 3',
        period: 'VB 3',
        content: 'Mấy ý nghĩ về thơ (Nguyễn Đình Thi)',
        category: 'doc',
        workId: 'may-y-nghi-ve-tho',
      },
    ],
  },
  {
    id: 'bai-4',
    semester: 1,
    lessonNumber: 4,
    title: 'Bài 4: Yếu tố kì ảo trong truyện kể',
    totalPeriods: 4,
    genreFocus: 'Truyện truyền kỳ & Truyện ngắn có yếu tố kì ảo',
    rows: [
      {
        week: 'Bài 4',
        period: 'VB 1',
        content: 'Hải khẩu linh từ - Đền thiêng cửa bể (Đoàn Thị Điểm)',
        category: 'doc',
        workId: 'hai-khau-linh-tu',
      },
      {
        week: 'Bài 4',
        period: 'VB 2',
        content: 'Muối của rừng (Nguyễn Huy Thiệp)',
        category: 'doc',
        workId: 'muoi-cua-rung',
      },
    ],
  },
  {
    id: 'bai-5',
    semester: 1,
    lessonNumber: 5,
    title: 'Bài 5: Tiếng cười của hài kịch',
    totalPeriods: 4,
    genreFocus: 'Hài kịch kinh điển thế giới & Việt Nam',
    rows: [
      {
        week: 'Bài 5',
        period: 'VB 1',
        content: 'Nhân vật quan trọng (Trích Quan thanh tra - Nikolai Gogol)',
        category: 'doc',
        workId: 'nhan-vat-quan-trong',
      },
      {
        week: 'Bài 5',
        period: 'VB 2',
        content: 'Giấu của (Trích hài kịch Quẫn - Lộng Chương)',
        category: 'doc',
        workId: 'giau-cua',
      },
    ],
  },
  {
    id: 'bai-6',
    semester: 2,
    lessonNumber: 6,
    title: 'Bài 6: Hồ Chí Minh – “Văn hóa phải soi đường cho quốc dân đi”',
    totalPeriods: 7,
    genreFocus: 'Tác gia Hồ Chí Minh (Chính luận, Thơ chữ Hán, Truyện ngắn)',
    rows: [
      {
        week: 'Bài 6',
        period: 'VB 1',
        content: 'Tác gia Hồ Chí Minh (Sự nghiệp & Phong cách văn học)',
        category: 'doc',
        workId: 'tac-gia-ho-chi-minh',
      },
      {
        week: 'Bài 6',
        period: 'VB 2',
        content: 'Tuyên ngôn Độc lập (Hồ Chí Minh)',
        category: 'doc',
        workId: 'tuyen-ngon-doc-lap',
      },
      {
        week: 'Bài 6',
        period: 'VB 3, 4',
        content: 'Mộ (Chiều tối); Nguyên tiêu (Rằm tháng Giêng) - Hồ Chí Minh',
        category: 'doc',
        workId: 'mo-nguyen-tieu',
      },
      {
        week: 'Bài 6',
        period: 'VB 5',
        content: 'Những trò lố hay là Va-ren và Phan Bội Châu (Nguyễn Ái Quốc)',
        category: 'doc',
        workId: 'nhung-tro-lo-va-ren-phan-boi-chau',
      },
    ],
  },
  {
    id: 'bai-7',
    semester: 2,
    lessonNumber: 7,
    title: 'Bài 7: Sự thật trong tác phẩm kí',
    totalPeriods: 5,
    genreFocus: 'Phóng sự, Hồi kí & Tùy bút hiện đại',
    rows: [
      {
        week: 'Bài 7',
        period: 'VB 1',
        content: 'Nghệ thuật băm thịt gà (Trích Việc làng - Ngô Tất Tố)',
        category: 'doc',
        workId: 'nghe-thuat-bam-thit-ga',
      },
      {
        week: 'Bài 7',
        period: 'VB 2',
        content: 'Bước vào đời (Trích hồi kí Nhớ nghĩ chiều hôm - Đào Duy Anh)',
        category: 'doc',
        workId: 'buoc-vao-doi',
      },
    ],
  },
  {
    id: 'bai-8',
    semester: 2,
    lessonNumber: 8,
    title: 'Bài 8: Dữ liệu trong văn bản thông tin',
    totalPeriods: 6,
    genreFocus: 'Văn bản thông tin & Du kí nhân học - lịch sử',
    rows: [
      {
        week: 'Bài 8',
        period: 'VB 1',
        content: 'Pa-ra-ma / Pa-ra-na (Trích Nhiệt đới buồn - Claude Lévi-Strauss)',
        category: 'doc',
        workId: 'pa-ra-na',
      },
      {
        week: 'Bài 8',
        period: 'VB 2',
        content: 'Giáo dục khai phóng ở Việt Nam nhìn từ Đông Kinh Nghĩa Thục (Nguyễn Nam)',
        category: 'doc',
        workId: 'giao-duc-khai-phong-dong-kinh-nghia-thuc',
      },
      {
        week: 'Bài 8',
        period: 'VB 3',
        content: 'Đời muối (Trích Đời muối: Lịch sử thế giới - Mark Kurlansky)',
        category: 'doc',
        workId: 'doi-muoi',
      },
    ],
  },
  {
    id: 'bai-9',
    semester: 2,
    lessonNumber: 9,
    title: 'Bài 9: Văn học và cuộc đời',
    totalPeriods: 6,
    genreFocus: 'Thơ Mới, Tiểu thuyết thế giới & Kịch hiện đại',
    rows: [
      {
        week: 'Bài 9',
        period: 'VB 1',
        content: 'Vội vàng (Xuân Diệu)',
        category: 'doc',
        workId: 'voi-vang',
      },
      {
        week: 'Bài 9',
        period: 'VB 2',
        content: 'Trở về (Trích Ông già và biển cả - Ernest Hemingway)',
        category: 'doc',
        workId: 'tro-ve-hemingway',
      },
      {
        week: 'Bài 9',
        period: 'VB 3',
        content: 'Hồn Trương Ba, da hàng thịt (Lưu Quang Vũ)',
        category: 'doc',
        workId: 'hon-truong-ba-da-hang-thit',
      },
    ],
  },
];

