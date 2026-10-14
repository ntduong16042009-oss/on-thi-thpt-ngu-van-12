export interface DetailedLineItem {
  id: string;
  originalText: string;           // Câu thơ hoặc câu trích văn xuôi nguyên văn
  contextOrSection: string;       // Thuộc khổ thơ / đoạn nào
  rhetoricalDevice: string;       // Biện pháp tu từ, thanh điệu, thi pháp nghệ thuật
  wordLevelAnalysis: string;      // Bóc tách nghĩa từng từ ngữ đắt giá
  poeticInterpretation: string;   // Phân tích chiều sâu nội dung & cảm xúc
  scholarlyInsight?: string;      // Bình giảng nâng cao phục vụ bài thi điểm 9+
}

export interface WorkLineAnalysis {
  workId: string;
  title: string;
  genre: 'tho' | 'van';
  introSummary: string;
  lineItems: DetailedLineItem[];
}

export const DETAILED_LINE_ANALYSES: Record<string, WorkLineAnalysis> = {
  'tay-tien': {
    workId: 'tay-tien',
    title: 'Tây Tiến (Quang Dũng)',
    genre: 'tho',
    introSummary: 'Bóc tách chi tiết từng câu thơ trong kiệt tác Tây Tiến: nghệ thuật phối thanh trắc - bằng, từ ngữ gợi hình, chất lãng mạn hào hoa và âm hưởng bi tráng.',
    lineItems: [
      {
        id: 'tt-1',
        originalText: 'Sông Mã xa rồi Tây Tiến ơi!',
        contextOrSection: 'Khổ 1 - Câu mở đầu bài thơ',
        rhetoricalDevice: 'Câu cảm thán, hô từ "ơi", nhân hóa dòng sông Mã.',
        wordLevelAnalysis: '"Sông Mã" đứng đầu câu thơ vừa là đối tượng địa lý cụ thể của miền Tây, vừa là người bạn đồng hành, chứng nhân lịch sử của đoàn quân. Cụm từ "xa rồi" gợi khoảng cách địa lý và thời gian thăm thẳm. Hô từ "ơi" cất lên như một tiếng gọi thiết tha từ đáy lòng vọng về quá khứ.',
        poeticInterpretation: 'Câu thơ mở ra một không gian hoài niệm bao la. Nhà thơ không gọi tên một địa danh đơn thuần mà gọi "Tây Tiến" như gọi một sinh thể sống động, một phần máu thịt của tuổi trẻ dấn thân.',
        scholarlyInsight: 'Tiếng gọi mở đầu bài thơ tạo âm hưởng vang vọng như tiếng dội của núi rừng, báo hiệu một trường cảm xúc dạt dào không thể kìm nén.'
      },
      {
        id: 'tt-2',
        originalText: 'Nhớ về rừng núi, nhớ chơi vơi',
        contextOrSection: 'Khổ 1 - Câu 2',
        rhetoricalDevice: 'Điệp từ "nhớ", từ láy tượng cảm "chơi vơi", hiệp vần "ơi" (Tây Tiến ơi - chơi vơi).',
        wordLevelAnalysis: 'Điệp từ "nhớ" lặp lại hai lần diễn tả nỗi nhớ tầng tầng lớp lớp, đợt sóng cảm xúc dâng trào. Từ láy "chơi vơi" là một sáng tạo thi ca độc đáo: trạng thái lơ lửng, bồng bềnh, không đo đếm được trong không gian và thời gian.',
        poeticInterpretation: 'Nỗi nhớ không chỉ hướng về đối tượng cụ thể mà đã hóa thành một tâm trạng bao trùm cõi lòng nhà thơ. Nỗi nhớ nhẹ nhàng mà da diết, mông lung mà thấm thía tận tâm can.',
        scholarlyInsight: 'Vần "ơi" liên tiếp tạo nên âm hưởng ngân vang, mênh mang như tiếng chuông vọng giữa thung lũng đại ngàn.'
      },
      {
        id: 'tt-3',
        originalText: 'Sài Khao sương lấp đoàn quân mỏi',
        contextOrSection: 'Khổ 1 - Câu 3',
        rhetoricalDevice: 'Hình ảnh thực kết hợp lãng mạn, thanh trắc ở đầu câu, từ gợi cảm "sương lấp".',
        wordLevelAnalysis: '"Sài Khao" - địa danh miền cao gợi cảm giác heo hút, hoang sơ. Động từ "lấp" đặc tả màn sương dày đặc, nuốt chửng cả con đường hành quân. Tính từ "mỏi" thể hiện sự mệt mỏi về thể xác của những người lính sau chặng đường dài leo dốc.',
        poeticInterpretation: 'Quang Dũng không giấu giếm gian khổ của người lính. Màn sương Tây Bắc vừa dữ dội khắc nghiệt đe dọa bước chân hành quân, vừa mang nét bồng bềnh kỳ ảo của miền sơn cước.',
        scholarlyInsight: 'Gian khổ hiện thực được nhìn qua lăng kính thi vị của người thanh niên Hà Nội, biến sự nhọc nhằn thành vẻ đẹp bảng lảng huyền ảo.'
      },
      {
        id: 'tt-4',
        originalText: 'Mường Lát hoa về trong đêm hơi',
        contextOrSection: 'Khổ 1 - Câu 4',
        rhetoricalDevice: 'Ẩn dụ chuyển đổi cảm giác, toàn thanh bằng tạo sự êm dịu.',
        wordLevelAnalysis: '"Hoa về" có thể hiểu theo nhiều tầng nghĩa: hoa rừng nở rộ trong đêm sương, hay ẩn dụ cho những bó đuốc sáng rực của đoàn quân hành quân như những bông hoa lửa bừng nở giữa màn đêm mờ sương ("đêm hơi").',
        poeticInterpretation: 'Câu thơ toàn thanh bằng nhẹ nhàng như một nét vẽ mềm mại xua tan nỗi mệt mỏi của câu thơ trước. Bước chân hành quân trong đêm bỗng trở nên lãng mạn, thanh tao như một cuộc du ngoạn giữa cõi tiên.',
        scholarlyInsight: 'Sự cân bằng tuyệt diệu: sau câu thơ nặng trĩu về thể xác là câu thơ thăng hoa của tâm hồn lãng mạn.'
      },
      {
        id: 'tt-5',
        originalText: 'Dốc lên khúc khuỷu dốc thăm thẳm',
        contextOrSection: 'Khổ 1 - Câu 5',
        rhetoricalDevice: 'Điệp từ "dốc", từ láy tượng hình giàu thanh trắc ("khúc khuỷu", "thăm thẳm").',
        wordLevelAnalysis: 'Điệp từ "dốc" ở đầu và giữa câu nhấn mạnh địa hình trập trùng tiếp nối không dứt. Từ láy "khúc khuỷu" gợi sự gập ghềnh hiểm trở theo chiều ngang; "thăm thẳm" gợi vực sâu hun hút khôn cùng theo chiều dọc.',
        poeticInterpretation: 'Câu thơ như gập lại, nhấp nhô theo từng bước chân của người lính. Thanh trắc dồn dập (Dốc - khúc khuỷu - dốc - thẳm) tạo âm hưởng gân guốc, thở dốc của người leo đèo.',
        scholarlyInsight: 'Nguyễn Đăng Mạnh: "Câu thơ như một khúc gỗ gồ ghề của địa hình Tây Bắc được gọt giũa thành thi ca."'
      },
      {
        id: 'tt-6',
        originalText: 'Heo hút cồn mây súng ngửi trời',
        contextOrSection: 'Khổ 1 - Câu 6',
        rhetoricalDevice: 'Đảo ngữ "heo hút cồn mây", nhân hóa táo bạo "súng ngửi trời".',
        wordLevelAnalysis: 'Đảo tính từ "heo hút" lên đầu nhấn mạnh sự vắng vẻ, hoang vu tận cùng. Mũi súng của người lính vươn cao chạm tới mây trời được nhân hóa bằng động từ "ngửi trời".',
        poeticInterpretation: 'Hình ảnh vừa đo được độ cao ngất ngưởng của đỉnh đèo (người lính đi trên mây), vừa toát lên chất tinh nghịch, hóm hỉnh, lạc quan kiêu dũng của tuổi trẻ trí thức Hà Nội xem thường gian khổ.',
        scholarlyInsight: 'Từ "ngửi" dân dã mà đắc địa: biến sự hiểm trở của tự nhiên thành bệ phóng tôn vinh tầm vóc kiêu hùng của con người vệ quốc.'
      },
      {
        id: 'tt-7',
        originalText: 'Ngàn thước lên cao, ngàn thước xuống',
        contextOrSection: 'Khổ 1 - Câu 7',
        rhetoricalDevice: 'Điệp ngữ "ngàn thước", phép đối chuẩn mực giữa vế trước (lên cao) và vế sau (xuống).',
        wordLevelAnalysis: 'Nhịp thơ 4/3 bẻ gãy ở giữa câu như chiếc com-pa đo độ dốc thẳng đứng của sườn núi. "Lên cao" vút lên thì "xuống" đột ngột gieo mình xuống vực thẳm.',
        poeticInterpretation: 'Người đọc có cảm giác chóng mặt trước sự biến ảo khôn lường của địa hình Tây Bắc: vừa vượt qua đỉnh dốc dựng đứng đã đối mặt ngay với vực sâu không đáy.',
        scholarlyInsight: 'Hình học thi ca: một nét vẽ dứt khoát tạo chiều cao và chiều sâu đối nghịch cực độ.'
      },
      {
        id: 'tt-8',
        originalText: 'Nhà ai Pha Luông mưa xa khơi',
        contextOrSection: 'Khổ 1 - Câu 8',
        rhetoricalDevice: 'Toàn thanh bằng (7 thanh bằng liên tiếp), âm hưởng mênh mang.',
        wordLevelAnalysis: '"Nhà ai" mang tính phiếm chỉ, gợi cảm giác ấm áp của cuộc sống con người giữa chốn rừng thiêng nước độc. Cụm từ "mưa xa khơi" gợi màn mưa mỏng manh giăng kín thung lũng mờ ảo như biển khơi bao la.',
        poeticInterpretation: 'Sau những câu thơ dồn dập thanh trắc gân guốc, câu thơ toàn thanh bằng này mở ra một không gian êm ả, thanh bình. Đứng trên đỉnh đèo nhìn xuống thung lũng ngập tràn sương mưa, lòng người lính bỗng lắng lại ngọt ngào.',
        scholarlyInsight: 'Nghệ thuật phối âm đỉnh cao của Quang Dũng: dùng thanh bằng xoa dịu những gân guốc của thanh trắc, đem lại sự cân bằng hoàn mỹ cho cảm xúc thẩm mỹ.'
      },
      {
        id: 'tt-9',
        originalText: 'Anh bạn dãi dầu không bước nữa / Gục lên súng mũ bỏ quên đời!',
        contextOrSection: 'Khổ 1 - Câu 9, 10',
        rhetoricalDevice: 'Từ láy "dãi dầu", cách nói giảm nói tránh "không bước nữa", "bỏ quên đời".',
        wordLevelAnalysis: '"Dãi dầu" tóm gọn những sương gió, mưa rừng, sốt rét mà người lính đã trải qua. "Không bước nữa" và "bỏ quên đời" là cách diễn đạt nhẹ nhõm về sự hy sinh thanh thản.',
        poeticInterpretation: 'Người lính gục ngã trên chặng đường hành quân nhưng tư thế vẫn gắn liền với "súng mũ" - vũ khí chiến đấu. Cái chết không bi lụy mà như một giấc ngủ thanh thản sau một ngày dài dấn thân.',
        scholarlyInsight: 'Cái nhìn hiện thực bi tráng: sự khốc liệt của chiến tranh không làm suy giảm vẻ đẹp hào hùng của người chiến sĩ.'
      },
      {
        id: 'tt-10',
        originalText: 'Nhớ ôi Tây Tiến cơm lên khói / Mai Châu mùa em thơm nếp xôi',
        contextOrSection: 'Khổ 1 - Câu 13, 14',
        rhetoricalDevice: 'Thán từ "Nhớ ôi", cách kết hợp từ độc đáo "mùa em", ẩn dụ chuyển đổi cảm giác.',
        wordLevelAnalysis: '"Mùa em" là một phát hiện ngôn từ tuyệt đẹp của Quang Dũng: không phải mùa lúa, mùa hoa mà là mùa gặp gỡ em, mùa tình nghĩa ấm áp. "Thơm nếp xôi" vừa là hương vị ngọt ngào của xôi nếp nương Mai Châu, vừa là tình cảm nồng thắm của đồng bào.',
        poeticInterpretation: 'Khổ thơ khép lại bằng một nốt nhạc ấm áp tình quân dân. Khói lam chiều và hương nếp xôi nương xua tan cái lạnh giá của núi rừng, tiếp thêm sức mạnh cho đoàn quân ra trận.',
        scholarlyInsight: 'Nghĩa tình quân dân Tây Bắc trở thành hành trang thiêng liêng nâng bước người lính qua muôn dặm đèo heo hút.'
      },
      {
        id: 'tt-11',
        originalText: 'Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm',
        contextOrSection: 'Khổ 3 - Khắc họa chân dung người lính',
        rhetoricalDevice: 'Từ Hán Việt "đoàn binh", tương phản gay gắt giữa ngoại hình tiều tụy và khí phách dũng mãnh.',
        wordLevelAnalysis: '"Đoàn binh" tạo âm hưởng trang trọng, hào hùng thay vì "đoàn quân". "Không mọc tóc" và "quân xanh màu lá" tả thực di chứng khốc liệt của căn bệnh sốt rét rừng. Đối lập lại là cụm từ "dữ oai hùm" - tư thế kiêu dũng, uy phong của chúa sơn lâm.',
        poeticInterpretation: 'Quang Dũng đã biến những nét khắc nghiệt của bệnh tật thành vẻ kỳ vĩ, gân guốc. Người lính không bị khuất phục bởi hoàn cảnh mà áp đảo hoàn cảnh bằng ý chí sắt đá.',
        scholarlyInsight: 'Bút pháp lãng mạn hòa quyện hiện thực: hiện thực trần trụi được nâng bổng bằng khí phách anh hùng ca.'
      },
      {
        id: 'tt-12',
        originalText: 'Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm',
        contextOrSection: 'Khổ 3 - Thế giới tâm hồn người lính',
        rhetoricalDevice: 'Phép đối giữa hai câu thơ: ngày đánh giặc ("mắt trừng") - đêm nhớ người thương ("dáng kiều thơm").',
        wordLevelAnalysis: '"Mắt trừng" biểu thị ngọn lửa căm thù giặc bốc cháy, sự tập trung cao độ nơi chiến tuyến. "Mộng qua biên giới" là khát vọng lập chiến công đánh đuổi giặc thù. "Dáng kiều thơm" là vẻ đẹp thanh lịch, quyến rũ của những thiếu nữ Hà thành trong ký ức.',
        poeticInterpretation: 'Câu thơ khẳng định vẻ đẹp tâm hồn phong phú của người lính trí thức: ban ngày kiên cường chiến đấu, ban đêm gửi gắm nỗi nhớ về quê hương. Nỗi nhớ người yêu không làm nhụt ý chí mà tiếp thêm niềm tin chiến thắng.',
        scholarlyInsight: 'Đây là giá trị nhân văn sâu sắc: người lính không phải gỗ đá vô tri mà có trái tim đập rộn rã nhịp yêu thương lứa đôi.'
      },
      {
        id: 'tt-13',
        originalText: 'Rải rác biên cương mồ viễn xứ / Chiến trường đi chẳng tiếc đời xanh',
        contextOrSection: 'Khổ 3 - Lý tưởng hiến dâng',
        rhetoricalDevice: 'Từ Hán Việt trang trọng ("biên cương", "viễn xứ"), hoán dụ "đời xanh".',
        wordLevelAnalysis: '"Mồ viễn xứ" gợi những nấm mồ cô đơn nơi đất khách quê người. Nhưng câu thơ sau đối đáp đanh thép: "chẳng tiếc" - thái độ dứt khoát, thanh thản. "Đời xanh" là tuổi trẻ, thanh xuân tươi đẹp nhất của một đời người.',
        poeticInterpretation: 'Vẻ đẹp bi tráng đạt đến cao độ: người lính sẵn sàng hiến dâng cả tuổi thanh xuân cho sự trường tồn của Tổ quốc. Lý tưởng sống "Quyết tử để Tổ quốc quyết sinh" sáng ngời giữa chiến trường.',
        scholarlyInsight: 'Tư thế tráng sĩ thời đại mới: sự hy sinh được thi vị hóa thành hành động dâng hiến cao quý và thiêng liêng nhất.'
      },
      {
        id: 'tt-14',
        originalText: 'Áo bào thay chiếu, anh về đất / Sông Mã gầm lên khúc độc hành',
        contextOrSection: 'Khổ 3 - Đoạn kết bi tráng',
        rhetoricalDevice: 'Tráng lệ hóa hiện thực "áo bào thay chiếu", nói giảm nói tránh "anh về đất", nhân hóa dòng sông Mã.',
        wordLevelAnalysis: 'Hiện thực: người lính hy sinh không có cả manh chiếu bó thân. Thi ca: tấm chiếu rách biến thành tấm "áo bào" của các bậc tướng quân thời xưa. "Về đất" thể hiện sự thanh thản khi trở về lòng mẹ Tổ quốc.',
        poeticInterpretation: 'Khúc tiễn đưa không phải là tiếng khóc than mà là tiếng gầm vang trời dậy đất của thiên nhiên: "Sông Mã gầm lên khúc độc hành". Sông Mã thay mặt non sông tấu lên bản đại hợp xướng tiễn đưa linh hồn người anh hùng vào cõi bất tử.',
        scholarlyInsight: 'Đỉnh cao của cảm hứng bi tráng: sự mất mát đau thương được nâng tầm sử thi vũ trụ, biến cái chết thành sự bất tử muôn đời.'
      }
    ]
  },
  'viet-bac': {
    workId: 'viet-bac',
    title: 'Việt Bắc (Tố Hữu)',
    genre: 'tho',
    introSummary: 'Bóc tách chi tiết từng câu thơ trong tác phẩm Việt Bắc: kết cấu đối đáp mình - ta, bức tranh tứ bình bốn mùa và khí thế ra trận.',
    lineItems: [
      {
        id: 'vb-1',
        originalText: 'Mình về mình có nhớ ta / Mười lăm năm ấy thiết tha mặn nồng',
        contextOrSection: 'Khổ 1 - Lời của người ở lại',
        rhetoricalDevice: 'Cặp đại từ xưng hô "mình - ta", câu hỏi tu từ mang sắc thái ca dao.',
        wordLevelAnalysis: '"Mình về" đặt ở đầu câu gợi cuộc chia ly. "Mười lăm năm ấy" là khoảng thời gian lịch sử từ khởi nghĩa Bắc Sơn (1940) đến hòa bình (1954). "Thiết tha mặn nồng" là tình nghĩa sâu nặng được đo bằng thời gian máu lửa.',
        poeticInterpretation: 'Người ở lại cất lời hỏi nhưng thực chất là để giãi bày nỗi niềm, khơi gợi ký ức gắn bó keo sơn giữa nhân dân kháng chiến và người cán bộ về xuôi.',
        scholarlyInsight: 'Tố Hữu đã biến sự kiện chính trị trọng đại thành lời hò hẹn lứa đôi ngọt ngào, đậm đà bản sắc dân tộc.'
      },
      {
        id: 'vb-2',
        originalText: 'Mình về mình có nhớ không / Nhìn cây nhớ núi, nhìn sông nhớ nguồn?',
        contextOrSection: 'Khổ 1 - Câu 3, 4',
        rhetoricalDevice: 'Điệp từ "nhớ", thành ngữ dân gian "uống nước nhớ nguồn".',
        wordLevelAnalysis: '"Nhìn cây nhớ núi, nhìn sông nhớ nguồn" là lời nhắc nhở tế nhị về cội nguồn cách mạng. Về xuôi với phố thị phồn hoa, liệu người cán bộ có còn nhớ mảnh đất chiến khu gian khổ đã cưu mang cách mạng thuở ban đầu?',
        poeticInterpretation: 'Câu hỏi mang chiều sâu triết lý đạo lý truyền thống của dân tộc: đạo lý thủy chung son sắt, sống có trước có sau.',
        scholarlyInsight: 'Tư tưởng chính luận thấm đẫm trong hình thức ca dao giao duyên bình dị, đi thẳng vào tâm can người đọc.'
      },
      {
        id: 'vb-3',
        originalText: 'Áo chàm đưa buổi phân ly / Cầm tay nhau biết nói gì hôm nay...',
        contextOrSection: 'Khổ 2 - Câu 3, 4',
        rhetoricalDevice: 'Hoán dụ "Áo chàm", dấu chấm lửng nghẹn ngào (...).',
        wordLevelAnalysis: '"Áo chàm" là trang phục bình dị của đồng bào các dân tộc thiểu số Việt Bắc, hoán dụ cho con người mộc mạc, nghĩa tình nơi chiến khu. Hành động "cầm tay nhau" và dấu chấm lửng diễn tả nỗi xúc động trào dâng đến nghẹn lời.',
        poeticInterpretation: 'Im lặng chính là đỉnh cao của sự thấu hiểu. Giây phút chia tay không cần lời nói hoa mỹ mà chỉ có cái nắm tay truyền hơi ấm và niềm tin son sắt.',
        scholarlyInsight: 'Hình ảnh áo chàm trở thành biểu tượng nghệ thuật bất hủ của lòng trung kiên và nghĩa tình cách mạng.'
      },
      {
        id: 'vb-4',
        originalText: 'Rừng xanh hoa chuối đỏ tươi / Đèo cao nắng ánh dao gài thắt lưng',
        contextOrSection: 'Bức tranh tứ bình - Mùa Đông',
        rhetoricalDevice: 'Tương phản màu sắc (xanh - đỏ tươi), nghệ thuật lấy điểm xao cảnh.',
        wordLevelAnalysis: 'Trên nền bạt ngàn của "rừng xanh" đại ngàn mùa đông, sắc "hoa chuối đỏ tươi" bừng nở như những ngọn đuốc thắp sáng không gian. Hình ảnh con người trên đèo cao có "nắng ánh dao gài thắt lưng" toát lên tư thế lao động khỏe khoắn, làm chủ vũ trụ.',
        poeticInterpretation: 'Mùa đông Việt Bắc không lạnh lẽo, hiu hắt mà ấm áp, rực rỡ bởi sắc hoa và ánh sáng phản chiếu từ con người lao động kiêu hùng.',
        scholarlyInsight: 'Thi pháp cổ điển kết hợp tinh thần thời đại: con người trở thành tâm điểm phát sáng của bức tranh thiên nhiên.'
      },
      {
        id: 'vb-5',
        originalText: 'Ngày xuân mơ nở trắng rừng / Nhớ người đan nón chuốt từng sợi giang',
        contextOrSection: 'Bức tranh tứ bình - Mùa Xuân',
        rhetoricalDevice: 'Nghệ thuật phối màu tinh khôi, từ láy tượng hình "chuốt từng".',
        wordLevelAnalysis: '"Trắng rừng" diễn tả sắc hoa mơ bung nở tràn ngập không gian, phủ kín núi đồi bằng màu trắng tinh khiết. Hình ảnh con người "chuốt từng sợi giang" gợi sự cần mẫn, khéo léo, nhẫn nại của người lao động Việt Bắc.',
        poeticInterpretation: 'Mùa xuân mang vẻ đẹp tinh khôi, trong trẻo. Cảnh và người hòa quyện tạo nên nhịp điệu lao động thanh bình, êm ả giữa lòng kháng chiến.',
        scholarlyInsight: 'Sợi giang mỏng manh qua bàn tay chuốt sợi của con người trở thành biểu tượng cho vẻ đẹp tâm hồn tỉ mỉ, son sắt.'
      },
      {
        id: 'vb-6',
        originalText: 'Ve kêu rừng phách đổ vàng / Nhớ cô em gái hái măng một mình',
        contextOrSection: 'Bức tranh tứ bình - Mùa Hạ',
        rhetoricalDevice: 'Chuyển đổi cảm giác: âm thanh ve kêu kích hoạt thị giác "đổ vàng".',
        wordLevelAnalysis: 'Động từ "đổ" diễn tả sự chuyển màu mau lẹ, đột ngột của rừng phách khi hè sang. Hình ảnh "cô em gái hái măng một mình" không gợi sự cô đơn mà toát lên vẻ chịu thương chịu khó, thầm lặng cống hiến cho kháng chiến.',
        poeticInterpretation: 'Bức tranh mùa hè tràn đầy âm thanh rộn rã và sắc vàng óng ả. Con người hiện lên mộc mạc, gần gũi trong công việc đời thường giản dị.',
        scholarlyInsight: 'Từ "đổ" là nhãn tự của câu thơ: cả một cánh rừng đồng loạt trút sắc vàng tạo ấn tượng thị giác choáng ngợp.'
      },
      {
        id: 'vb-7',
        originalText: 'Rừng thu trăng rọi hòa bình / Nhớ ai tiếng hát ân tình thủy chung',
        contextOrSection: 'Bức tranh tứ bình - Mùa Thu',
        rhetoricalDevice: 'Từ ngữ mang sắc thái ước lệ "hòa bình", đại từ phiếm chỉ "ai".',
        wordLevelAnalysis: '"Trăng rọi hòa bình" gợi ánh trăng thu vằng vặc soi sáng núi rừng, báo hiệu ngày chiến thắng đã cận kề. "Tiếng hát ân tình thủy chung" khép lại bức tranh tứ bình bằng âm thanh ngọt ngào của nghĩa tình cách mạng.',
        poeticInterpretation: 'Mùa thu Việt Bắc là mùa thu của niềm vui độc lập. Tiếng hát bay bổng xua tan mọi gian khổ, đọng lại trong tâm trí người về xuôi lời thề gắn bó trọn đời.',
        scholarlyInsight: 'Khép lại chu kỳ bốn mùa bằng sự viên mãn: thiên nhiên hòa bình, lòng người son sắt thủy chung.'
      }
    ]
  },
  'dat-nuoc': {
    workId: 'dat-nuoc',
    title: 'Đất Nước (Nguyễn Khoa Điềm)',
    genre: 'tho',
    introSummary: 'Bóc tách chi tiết từng dòng thơ trong trích đoạn Đất Nước: chất liệu văn hóa dân gian, sự gắn bó máu thịt và tư tưởng Đất Nước của Nhân Dân.',
    lineItems: [
      {
        id: 'dn-1',
        originalText: 'Khi ta lớn lên Đất Nước đã có rồi / Đất Nước có trong những cái "ngày xửa ngày xưa..." mẹ thường hay kể',
        contextOrSection: 'Đoạn 1 - Cội nguồn Đất Nước',
        rhetoricalDevice: 'Giọng thơ tự sự tâm tình, dẫn dụ cổ tích dân gian.',
        wordLevelAnalysis: '"Khi ta lớn lên" khẳng định Đất Nước có trước cá nhân mỗi con người, trường tồn ngàn đời. Cụm từ "ngày xửa ngày xưa" gợi mở thế giới cổ tích nhiệm màu, nơi lưu giữ ước mơ và đạo lý của tổ tiên.',
        poeticInterpretation: 'Nguyễn Khoa Điềm đưa Đất Nước từ cõi trừu tượng về với nôi ru tuổi thơ. Đất Nước không phải là khái niệm khô cứng mà ấm áp trong từng câu chuyện kể của mẹ.',
        scholarlyInsight: 'Mở đầu bằng chất liệu dân gian giúp tác phẩm chạm thẳng vào tiềm thức văn hóa của mọi thế hệ người Việt.'
      },
      {
        id: 'dn-2',
        originalText: 'Đất Nước bắt đầu với miếng trầu bây giờ bà ăn / Đất Nước lớn lên khi dân mình biết trồng tre mà đánh giặc',
        contextOrSection: 'Đoạn 1 - Quá trình phát triển',
        rhetoricalDevice: 'Liên tưởng văn hóa: phong tục ăn trầu và truyền thuyết Thánh Gióng.',
        wordLevelAnalysis: '"Miếng trầu" gợi phong tục trầu cau ngàn đời và tình nghĩa thủy chung son sắt. "Biết trồng tre mà đánh giặc" nhắc nhớ biểu tượng Thánh Gióng - truyền thống chống giặc ngoại xâm quật cường của dân tộc.',
        poeticInterpretation: 'Đất Nước có hai chiều kích sinh thành: chiều sâu phong tục văn hóa bình dị và sức mạnh kiên cường bảo vệ non sông.',
        scholarlyInsight: 'Hình tượng cây tre Việt Nam mộc mạc mà dẻo dai trở thành cốt cách của cả dân tộc trong thăng trầm lịch sử.'
      },
      {
        id: 'dn-3',
        originalText: 'Tóc mẹ thì bới sau đầu / Cha mẹ thương nhau bằng gừng cay muối mặn',
        contextOrSection: 'Đoạn 1 - Nếp sống phong tục',
        rhetoricalDevice: 'Vận dụng ca dao truyền thống "Tay bưng đĩa muối chén gừng / Gừng cay muối mặn xin đừng quên nhau".',
        wordLevelAnalysis: '"Bới sau đầu" là nếp sống thuần hậu, đoan trang của người phụ nữ Việt Nam cổ truyền. "Gừng cay muối mặn" đúc kết tình nghĩa vợ chồng son sắt, thủy chung vượt qua bao gian nan cơ cực.',
        poeticInterpretation: 'Đất Nước định hình từ chính đạo lý gia đình, từ tình yêu thương thầm lặng của các bậc sinh thành nuôi dưỡng con khôn lớn.',
        scholarlyInsight: 'Gia đình là tế bào của Đất Nước: tình cảm lứa đôi bình dị được nâng lên thành nền tảng văn hóa vững bền của dân tộc.'
      },
      {
        id: 'dn-4',
        originalText: 'Đất là nơi anh đến trường / Nước là nơi em tắm / Đất Nước là nơi ta hò hẹn / Đất Nước là nơi em đánh rơi chiếc khăn trong nỗi nhớ thầm',
        contextOrSection: 'Đoạn 2 - Không gian Đất Nước',
        rhetoricalDevice: 'Chiết tự hai thành tố Đất và Nước, kết hợp ca dao "Khăn thương nhớ ai".',
        wordLevelAnalysis: 'Tách Đất và Nước gắn với không gian riêng tư của mỗi cá nhân, rồi hợp nhất Đất Nước trong không gian hẹn hò lứa đôi. "Chiếc khăn trong nỗi nhớ thầm" gợi vẻ đẹp e ấp, kín đáo của tình yêu người phụ nữ.',
        poeticInterpretation: 'Đất Nước không ở đâu xa lạ mà hiện diện ngay trong những kỷ niệm thanh xuân tươi đẹp nhất của mỗi con người.',
        scholarlyInsight: 'Sự hòa quyện tuyệt vời giữa cái riêng tư và cái cộng đồng, tình yêu lứa đôi nâng cánh cho tình yêu Tổ quốc.'
      },
      {
        id: 'dn-5',
        originalText: 'Em ơi em Đất Nước là máu xương của mình / Phải biết gắn bó và san sẻ / Phải biết hóa thân cho dáng hình xứ sở / Làm nên Đất Nước muôn đời...',
        contextOrSection: 'Đoạn 3 - Lời nhắn nhủ trách nhiệm',
        rhetoricalDevice: 'Ẩn dụ "máu xương", điệp từ "Phải biết", mệnh đề khẳng định dứt khoát.',
        wordLevelAnalysis: '"Máu xương" khẳng định Đất Nước là sự sống của mỗi cá nhân, được đánh đổi bằng máu xương của bao thế hệ đi trước. Ba động từ hành động "gắn bó", "san sẻ", "hóa thân" xác lập trách nhiệm thiêng liêng của thế hệ trẻ.',
        poeticInterpretation: 'Lời thơ mang âm hưởng triết luận sâu sắc và lời hiệu triệu tha thiết: mỗi người trẻ phải sẵn sàng cống hiến, hy sinh tuổi xuân để bảo vệ sự trường tồn của giang sơn.',
        scholarlyInsight: 'Đỉnh cao cảm xúc chính luận của trường ca: biến nhận thức thành ý chí hành động cách mạng sục sôi.'
      },
      {
        id: 'dn-6',
        originalText: 'Để Đất Nước này là Đất Nước của Nhân dân / Đất Nước của Nhân dân, Đất Nước của ca dao thần thoại',
        contextOrSection: 'Đoạn kết - Đúc kết tư tưởng',
        rhetoricalDevice: 'Điệp khúc "Đất Nước của Nhân dân", nhạc điệu ngân vang trang trọng.',
        wordLevelAnalysis: 'Nhân dân được viết hoa như một sự tôn vinh tuyệt đối. Nhân dân là người làm ra không gian địa lý, thời gian lịch sử và giữ gìn ngọn lửa văn hóa dân tộc.',
        poeticInterpretation: 'Tư tưởng thẩm mỹ cốt lõi của tác phẩm: Đất Nước đích thực không thuộc về các bậc vương quyền mà thuộc về hàng triệu con người lao động vô danh đổ máu xương kiến tạo.',
        scholarlyInsight: 'Đóng góp to lớn của Nguyễn Khoa Điềm vào dòng thơ trữ tình - chính luận Việt Nam thời kỳ chống Mỹ cứu nước.'
      }
    ]
  },
  'song': {
    workId: 'song',
    title: 'Sóng (Xuân Quỳnh)',
    genre: 'tho',
    introSummary: 'Bóc tách chi tiết từng dòng thơ trong bài thơ Sóng: trạng thái đối cực, nỗi nhớ ba chiều và khát vọng bất tử hóa tình yêu.',
    lineItems: [
      {
        id: 's-1',
        originalText: 'Dữ dội và dịu êm / Ồn ào và lặng lẽ',
        contextOrSection: 'Khổ 1 - Câu 1, 2',
        rhetoricalDevice: 'Phép đối tương phản: dữ dội >< dịu êm, ồn ào >< lặng lẽ.',
        wordLevelAnalysis: 'Bốn tính từ đối lập đặt song song miêu tả hai trạng thái sóng biển, đồng thời ẩn dụ cho những cung bậc biến chuyển khôn lường của tâm hồn người phụ nữ khi yêu.',
        poeticInterpretation: 'Trái tim người phụ nữ không đơn điệu một màu mà luôn nồng nàn, khi cuồng nhiệt mãnh liệt, khi lại sâu lắng dịu dàng.',
        scholarlyInsight: 'Xuân Quỳnh nắm bắt tài tình quy luật tâm lý tình cảm của phái nữ: phong phú, phức tạp nhưng luôn chân thành.'
      },
      {
        id: 's-2',
        originalText: 'Sông không hiểu nổi mình / Sóng tìm ra tận bể',
        contextOrSection: 'Khổ 1 - Câu 3, 4',
        rhetoricalDevice: 'Nhân hóa con sông và con sóng, ẩn dụ hành trình tìm kiếm tình yêu.',
        wordLevelAnalysis: '"Sông" tượng trưng cho không gian chật hẹp, tù túng. "Bể" tượng trưng cho đại dương mênh mông, bến đỗ thấu hiểu. "Tìm ra" thể hiện thái độ chủ động, kiên quyết.',
        poeticInterpretation: 'Khát vọng vượt thoát khỏi sự chật hẹp, nhỏ nhen để hướng về không gian bao la của tình yêu đích thực có sự đồng điệu tâm hồn.',
        scholarlyInsight: 'Tuyên ngôn nữ quyền trong thi ca: người phụ nữ hiện đại tự tay quyết định hạnh phúc và kiếm tìm bến đỗ đời mình.'
      },
      {
        id: 's-3',
        originalText: 'Con sóng dưới lòng sâu / Con sóng trên mặt nước / Ôi con sóng nhớ bờ / Ngày đêm không ngủ được / Lòng em nhớ đến anh / Cả trong mơ còn thức',
        contextOrSection: 'Khổ 5 - Khổ thơ 6 câu duy nhất',
        rhetoricalDevice: 'Điệp từ "con sóng", mở rộng khổ thơ từ 4 lên 6 câu, đối lập "lòng sâu" - "mặt nước".',
        wordLevelAnalysis: 'Nỗi nhớ được đo trong không gian 3 chiều: độ sâu thăm thẳm và bề rộng mặt nước; trong thời gian: ngày lẫn đêm. Đỉnh cao là câu "Cả trong mơ còn thức" - nỗi nhớ vượt thoát cõi ý thức để chiếm lĩnh tiềm thức.',
        poeticInterpretation: 'Nỗi nhớ da diết đến cồn cào. Khi trái tim yêu tỉnh táo thì ngay cả giấc mơ cũng không ngủ yên, luôn hướng về bóng hình người mình thương.',
        scholarlyInsight: 'Phát hiện tâm lý độc đáo: ranh giới giữa thực và mộng bị xóa nhòa khi nỗi nhớ đạt đến đỉnh điểm tuyệt đối.'
      },
      {
        id: 's-4',
        originalText: 'Dẫu xuôi về phương bắc / Dẫu ngược về phương nam / Nơi nào em cũng nghĩ / Hướng về anh - một phương',
        contextOrSection: 'Khổ 6 - Lòng thủy chung',
        rhetoricalDevice: 'Đảo ngữ "xuôi bắc - ngược nam", quy ước địa lý mới "phương anh".',
        wordLevelAnalysis: 'Quy luật tự nhiên là "xuôi nam ngược bắc", Xuân Quỳnh đảo lại gợi những trắc trở, nghịch cảnh của cuộc đời. Dù không gian biến động ra sao, trái tim người phụ nữ chỉ định hướng về một phương duy nhất: "phương anh".',
        poeticInterpretation: 'Lời khẳng định đanh thép về lòng thủy chung son sắt. "Phương anh" là tọa độ tinh thần duy nhất định vị cuộc đời người phụ nữ.',
        scholarlyInsight: 'Vẻ đẹp truyền thống của người phụ nữ Việt Nam tỏa sáng giữa thời đại bão táp chiến tranh.'
      },
      {
        id: 's-5',
        originalText: 'Làm sao được tan ra / Thành trăm con sóng nhỏ / Giữa biển lớn tình yêu / Để ngàn năm còn vỗ',
        contextOrSection: 'Khổ cuối - Khát vọng bất tử',
        rhetoricalDevice: 'Câu hỏi tu từ ước vọng "Làm sao", ẩn dụ "tan ra", "biển lớn tình yêu".',
        wordLevelAnalysis: '"Tan ra" không phải là biến mất hay tiêu diệt mà là sự hòa nhập, hiến dâng trọn vẹn cái tôi cá nhân nhỏ bé vào cái ta tình yêu rộng lớn của nhân loại.',
        poeticInterpretation: 'Khát vọng tình yêu vượt qua giới hạn hữu hạn của đời người để hòa vào vĩnh hằng. Tình yêu chân chính sẽ trường tồn cùng thời gian.',
        scholarlyInsight: 'Triết lý nhân sinh cao đẹp: cách duy nhất để chiến thắng sự hữu hạn của kiếp người là hiến dâng tình yêu thương trọn vẹn.'
      }
    ]
  },
  'dan-ghi-ta-lor-ca': {
    workId: 'dan-ghi-ta-lor-ca',
    title: 'Đàn ghi ta của Lor-ca (Thanh Thảo)',
    genre: 'tho',
    introSummary: 'Bóc tách chi tiết từng dòng thơ siêu thực tượng trưng trong Đàn ghi ta của Lor-ca: âm thanh tiếng đàn, cái chết bi tráng và sự bất tử của nghệ thuật.',
    lineItems: [
      {
        id: 'lc-1',
        originalText: 'những tiếng đàn bọt nước / Tây Ban Nha áo choàng đỏ gắt',
        contextOrSection: 'Đoạn 1 - Không gian Tây Ban Nha',
        rhetoricalDevice: 'Ẩn dụ chuyển đổi cảm giác "tiếng đàn bọt nước", hoán dụ văn hóa "áo choàng đỏ gắt".',
        wordLevelAnalysis: '"Tiếng đàn bọt nước" gợi âm thanh giòn tan, mong manh, dễ vỡ của số phận nghệ thuật. "Áo choàng đỏ gắt" gợi đấu trường bò tót đẫm máu, biểu tượng cho bầu không khí chính trị phát xít ngột ngạt và căng thẳng tột cùng.',
        poeticInterpretation: 'Sự đối lập gay gắt giữa sự mong manh của cái đẹp nghệ thuật và sự bạo tàn của thế lực phát xít Franco.',
        scholarlyInsight: 'Nghệ thuật thơ tượng trưng: không dùng viết hoa đầu dòng tạo mạch cảm xúc tuôn trào không gián đoạn.'
      },
      {
        id: 'lc-2',
        originalText: 'li-la li-la li-la / đi lang thang về miền đơn độc',
        contextOrSection: 'Đoạn 1 - Hình tượng Lorca',
        rhetoricalDevice: 'Mô phỏng âm thanh dây đàn ghi ta, đồng âm với loài hoa đinh hương (lilac).',
        wordLevelAnalysis: 'Chuỗi âm "li-la li-la li-la" vang lên như khúc dạo đầu của cây đàn ghi ta Tây Ban Nha. "Miền đơn độc" khắc họa bi kịch của người nghệ sĩ tiên phong cô đơn trên con đường cách tân văn hóa.',
        poeticInterpretation: 'Lorca xuất hiện như một hiệp sĩ lãng tử, dũng cảm dấn thân vào hành trình nghệ thuật dù biết trước nỗi cô đơn và hiểm nguy rình rập.',
        scholarlyInsight: 'Sự hòa quyện giữa nhạc và họa: âm thanh tiếng đàn mang sắc tím ngát của loài hoa đinh hương kiêu hãnh.'
      },
      {
        id: 'lc-3',
        originalText: 'không ai chôn cất tiếng đàn / tiếng đàn như cỏ mọc hoang',
        contextOrSection: 'Đoạn 4 - Sức sống tiếng đàn',
        rhetoricalDevice: 'So sánh "tiếng đàn như cỏ mọc hoang", câu thơ mang màu sắc triết luận siêu thực.',
        wordLevelAnalysis: '"Không ai chôn cất" xuất phát từ di chúc của Lorca ("Khi tôi chết hãy chôn tôi với cây đàn"). Không ai chôn cất tiếng đàn vì cái đẹp không thể bị chôn vùi. "Cỏ mọc hoang" là biểu tượng cho sức sống mãnh liệt, tự do, bất diệt của nghệ thuật.',
        poeticInterpretation: 'Bạo lực phát xít có thể sát hại thể xác người nghệ sĩ nhưng không bao giờ tiêu diệt được tiếng đàn và tư tưởng tự do của ông.',
        scholarlyInsight: 'Chân lý thời đại: Nghệ thuật chân chính tự do sinh sôi như cỏ dại, trường tồn vĩnh cửu trong lòng nhân loại.'
      }
    ]
  },
  'vo-chong-a-phu': {
    workId: 'vo-chong-a-phu',
    title: 'Vợ chồng A Phủ (Tô Hoài)',
    genre: 'van',
    introSummary: 'Bóc tách chi tiết từng câu văn, chi tiết nghệ thuật then chốt trong Vợ chồng A Phủ: bi kịch thân phận, sự hồi sinh trong đêm tình mùa xuân và hành động cởi trói.',
    lineItems: [
      {
        id: 'ap-1',
        originalText: 'Ai ở xa về, thấy một cô gái ngồi quay sợi gai bên tảng đá trước cửa, cạnh tàu ngựa... lúc nào cũng cúi mặt, mặt buồn rười rượi.',
        contextOrSection: 'Mở đầu tác phẩm - Bức chân dung số phận Mị',
        rhetoricalDevice: 'Nghệ thuật tương phản: người con dâu nhà quan giàu có nhưng ngồi cạnh chuồng ngựa và tảng đá vô tri.',
        wordLevelAnalysis: '"Tảng đá" và "tàu ngựa" là những vật thể vô tri, bẩn thỉu. Mị ngồi cạnh chúng như một đồ vật câm lặng. "Cúi mặt, buồn rười rượi" gợi sự cam chịu, tê liệt tinh thần tuyệt vọng của kiếp người làm dâu gạt nợ.',
        poeticInterpretation: 'Tô Hoài đặt nhân vật vào một nghịch cảnh gây tò mò: tại sao con dâu nhà chúa đất giàu có bậc nhất Hồng Ngài lại có dáng vẻ thảm sầu đến thế? Khơi gợi bi kịch bị áp bức tàn nhẫn.',
        scholarlyInsight: 'Mở đầu truyện ấn tượng theo thi pháp điện ảnh: từ ngoại cảnh kéo máy quay cận cảnh gương mặt u buồn của nhân vật.'
      },
      {
        id: 'ap-2',
        originalText: 'Ở cái buồng Mị nằm, kín mít, có một chiếc cửa sổ một lỗ vuông bằng bàn tay. Lúc nào trông ra cũng chỉ thấy trăng trắng, không biết là sương hay là nắng.',
        contextOrSection: 'Chi tiết không gian căn buồng Mị',
        rhetoricalDevice: 'Hình ảnh biểu tượng: căn buồng ngục thất của số phận.',
        wordLevelAnalysis: '"Lỗ vuông bằng bàn tay" - kích thước quá nhỏ bé, ngột ngạt. "Mờ mờ trăng trắng" xóa nhòa ranh giới giữa ngày và đêm, sương và nắng, tước đoạt toàn bộ ý niệm về thời gian và cuộc sống tự do của Mị.',
        poeticInterpretation: 'Căn buồng giam cầm tuổi thanh xuân của Mị. Mị như bị chôn sống trong một nấm mồ tăm tối, tê liệt cả giác quan lẫn khát vọng sống.',
        scholarlyInsight: 'Chi tiết nghệ thuật bậc thầy: không gian vật chất phản chiếu không gian tinh thần bị giam cầm của người phụ nữ Tây Bắc.'
      },
      {
        id: 'ap-3',
        originalText: 'Mị thấy phơi phới trở lại, trong lòng đột nhiên vui sướng như những đêm Tết ngày trước. Mị trẻ lắm. Mị vẫn còn trẻ. Mị muốn đi chơi!',
        contextOrSection: 'Đêm tình mùa xuân ở Hồng Ngài',
        rhetoricalDevice: 'Điệp từ khẳng định "Mị trẻ lắm / Mị vẫn còn trẻ", câu cảm thán bộc lộ khát vọng sống.',
        wordLevelAnalysis: '"Phơi phới" là từ láy gợi trạng thái tâm hồn bay bổng, tràn ngập sinh khí. Ba câu văn ngắn dồn dập khẳng định quyền sống: ý thức về tuổi thanh xuân trỗi dậy mạnh mẽ sau nhiều năm bị vùi lấp.',
        poeticInterpretation: 'Khát vọng hạnh phúc bùng cháy. Mị nhận ra mình còn trẻ và có quyền đi chơi Tết như bao người phụ nữ khác. Ngọn lửa sức sống tiềm tàng chính thức bừng sáng.',
        scholarlyInsight: 'Quy luật tâm lý tinh tế của Tô Hoài: dưới lớp tro tàn của sự áp bức, than hồng của khát vọng sống vẫn âm ỉ đợi gió xuân để bùng cháy.'
      },
      {
        id: 'ap-4',
        originalText: 'Dòng nước mắt lấp lánh rớt xuống hai hõm má đã xám đen lại của A Phủ... Trời ơi, nó bắt trói đứng người ta đến chết...',
        contextOrSection: 'Đêm mùa đông - Bước ngoặt nhận thức',
        rhetoricalDevice: 'Chi tiết thị giác đắt giá "dòng nước mắt lấp lánh", độc thoại nội tâm bừng tỉnh.',
        wordLevelAnalysis: '"Hai hõm má xám đen lại" là dấu hiệu của cái chết đang đến gần. "Dòng nước mắt" của một chàng trai dũng mãnh rơi xuống là giọt nước tràn ly đánh thức lòng trắc ẩn trong tâm hồn Mị.',
        poeticInterpretation: 'Từ nỗi đau của chính mình trong quá khứ ("trói đứng"), Mị thấu hiểu nỗi đau của người khác. Tình thương đồng loại trỗi dậy mãnh liệt, chiến thắng nỗi sợ hãi chúa đất thống lí.',
        scholarlyInsight: 'Giọt nước mắt của A Phủ chính là ngọn lửa làm tan chảy lớp băng giá vô cảm trong trái tim Mị, dẫn tới hành động cởi trói lịch sử.'
      }
    ]
  },
  'vo-nhat': {
    workId: 'vo-nhat',
    title: 'Vợ nhặt (Kim Lân)',
    genre: 'van',
    introSummary: 'Bóc tách chi tiết từng câu văn, chi tiết nghệ thuật then chốt trong Vợ nhặt: bối cảnh nạn đói, sự hồi sinh của Tràng, lòng bao dung của bà cụ Tứ và nồi cháo cám.',
    lineItems: [
      {
        id: 'vn-1',
        originalText: 'Cái đói đã tràn đến xóm này tự lúc nào... người chết như ngả rạ... xanh xám như những bóng ma.',
        contextOrSection: 'Mở đầu truyện - Bức tranh nạn đói 1945',
        rhetoricalDevice: 'So sánh "chết như ngả rạ", "như những bóng ma", từ ngữ gợi tả không khí tang tóc.',
        wordLevelAnalysis: '"Tràn đến" gợi sức tàn phá dữ dội của nạn đói như cơn lũ quét. "Xanh xám" đặc tả sắc diện của những con người cận kề miệng vực cái chết, ranh giới giữa người sống và người chết mong manh hơn bao giờ hết.',
        poeticInterpretation: 'Kim Lân phác họa bối cảnh nạn đói năm 1945 đầy ám ảnh: không gian chết chóc bủa vây làm nền tảng tôn vinh khát vọng sống phi thường của các nhân vật.',
        scholarlyInsight: 'Hiện thực thảm khốc được tái hiện chân thực đến rùng mình: bức tranh nông thôn Việt Nam dưới gông cùm phát xít - thực dân.'
      },
      {
        id: 'vn-2',
        originalText: 'Tràng nhìn thị, trong lòng dấy lên một tình thương yêu gắn bó lạ lùng. Hắn thấy hắn có bổn phận phải chăm lo cho gia đình...',
        contextOrSection: 'Buổi sáng hôm sau - Sự hồi sinh của Tràng',
        rhetoricalDevice: 'Nghệ thuật phân tích tâm lý trực tiếp, từ ngữ mang tính bước ngoặt nhận thức.',
        wordLevelAnalysis: '"Gắn bó lạ lùng" là cảm xúc thiêng liêng về tổ ấm gia đình. Cụm từ "có bổn phận" đánh dấu sự trưởng thành vượt bậc: từ một gã trai thô kệch, ngờ nghệch trở thành người chủ gia đình có trách nhiệm.',
        poeticInterpretation: 'Sức mạnh kỳ diệu của tình yêu thương: mái ấm gia đình đã thức tỉnh nhân cách và ý thức trách nhiệm sống của con người.',
        scholarlyInsight: 'Kim Lân khẳng định giá trị nhân bản: tình người là sức mạnh nâng đỡ con người đứng vững trước bờ vực diệt vong.'
      },
      {
        id: 'vn-3',
        originalText: 'Bà lão cúi đầu nín lặng. Bà lão hiểu rồi. Lòng người mẹ nghèo khổ ấy còn hiểu ra biết bao nhiêu cơ sự, vừa ai oán vừa xót thương cho số kiếp đứa con mình.',
        contextOrSection: 'Tâm trạng bà cụ Tứ khi thấy nàng dâu mới',
        rhetoricalDevice: 'Nghệ thuật miêu tả nội tâm gián tiếp qua cử chỉ "cúi đầu nín lặng".',
        wordLevelAnalysis: '"Cúi đầu nín lặng" là sự nén lại của muôn vàn cảm xúc xót xa. "Hiểu rồi" là sự thấu hiểu lẽ đời cay đắng: người ta có gặp bước khó khăn này mới lấy đến con mình. "Ai oán và xót thương" vừa tủi thân vì cảnh nghèo, vừa thương con dâu xa lạ.',
        poeticInterpretation: 'Tấm lòng bao dung vô bờ bến của người mẹ nghèo Việt Nam: không một lời trách móc mà chỉ có tình thương và sự cưu mang đùm bọc.',
        scholarlyInsight: 'Đoạn văn xúc động đến rơi nước mắt: bức chân dung người mẹ Việt Nam nghèo khó mà vĩ đại.'
      },
      {
        id: 'vn-4',
        originalText: 'Chè khoán đây, ngon đáo để, cứ thử ăn mà xem!... Miếng cám đắng chát và nghẹn bứ trong cổ...',
        contextOrSection: 'Bữa cơm đón dâu mới',
        rhetoricalDevice: 'Nói vui, nói giảm nói tránh để động viên con cái ("chè khoán"), tương phản với thực tế đắng chát.',
        wordLevelAnalysis: '"Chè khoán" thực chất là nồi cháo nấu bằng cám đắng chát của gia súc. Nhưng bà mẹ cố ý gọi là chè khoán để xua tan không khí ảm đạm. Miếng cám "đắng chát và nghẹn bứ" phơi bày sự khốc liệt của miếng ăn ngày đói.',
        poeticInterpretation: 'Nồi cháo cám đắng chát về vật chất nhưng ngọt ngào về tình người. Bữa cơm thảm hại nhất trong văn học nhưng lại ngập tràn tiếng cười và niềm hy vọng vào tương lai.',
        scholarlyInsight: 'Chi tiết nhỏ làm nên nhà văn lớn: nồi chè khoán là biểu tượng cho nghị lực sống phi thường của người nông dân Việt Nam.'
      }
    ]
  },
  'chiec-thuyen-ngoai-xa': {
    workId: 'chiec-thuyen-ngoai-xa',
    title: 'Chiếc thuyền ngoài xa (Nguyễn Minh Châu)',
    genre: 'van',
    introSummary: 'Bóc tách chi tiết từng câu văn, chi tiết nghệ thuật trong Chiếc thuyền ngoài xa: hai phát hiện đối lập, câu chuyện tại tòa án và tấm ảnh lịch.',
    lineItems: [
      {
        id: 'ct-1',
        originalText: 'Tôi tưởng chính mình vừa khám phá thấy cái chân lý của sự toàn thiện, khám phá thấy cái khoảnh khắc trong ngần của tâm hồn.',
        contextOrSection: 'Phát hiện thứ nhất của nghệ sĩ Phùng',
        rhetoricalDevice: 'Ngôn ngữ triết lý thẩm mỹ, điệp ngữ "khám phá thấy".',
        wordLevelAnalysis: '"Toàn thiện" là sự hoàn mỹ tuyệt đối về cả cái đẹp và đạo đức. "Khoảnh khắc trong ngần" là trạng thái tâm hồn người nghệ sĩ được thanh lọc gột rửa khi chiêm ngưỡng bức tranh thiên nhiên tuyệt bích.',
        poeticInterpretation: 'Phùng đã đạt tới đỉnh cao của khoái cảm nghệ thuật khi bắt gặp chiếc thuyền trong sương sớm. Anh ngỡ rằng cái đẹp bên ngoài đồng nghĩa với sự thánh thiện bên trong.',
        scholarlyInsight: 'Sự ngộ nhận ban đầu của người nghệ sĩ lãng mạn: nhìn cuộc đời qua lăng kính màu hồng từ xa.'
      },
      {
        id: 'ct-2',
        originalText: 'Người đàn ông rút chiếc thắt lưng của lính ngụy, vừa quất tới tấp vào lưng người đàn bà vừa thở hồng hộc, nghiến răng ken két...',
        contextOrSection: 'Phát hiện thứ hai - Bi kịch cập bờ',
        rhetoricalDevice: 'Từ ngữ miêu tả bạo lực trần trụi, chi tiết hiện thực gai góc.',
        wordLevelAnalysis: '"Chiếc thắt lưng của lính ngụy" gợi tàn dư đau đớn của chiến tranh. Động từ "quất tới tấp", từ láy "nghiến răng ken két" diễn tả sự hung bạo dã man, giải tỏa uất ức nghèo khổ lên thân xác người vợ.',
        poeticInterpretation: 'Ngay sau phát hiện về cái đẹp toàn bích là hiện thực tàn nhẫn của bạo lực gia đình. Chiếc thuyền cập bờ đã xé tan màn sương lãng mạn, phơi bày nỗi đau số phận con người.',
        scholarlyInsight: 'Nghịch lý nghệ thuật và cuộc đời: khoảng cách giữa nghệ thuật thuần túy và hiện thực trần trụi.'
      },
      {
        id: 'ct-3',
        originalText: 'Đàn bà ở thuyền chúng con phải sống cho con chứ không thể sống cho mình như ở trên đất được...',
        contextOrSection: 'Lời giãi bày của người đàn bà ở tòa án huyện',
        rhetoricalDevice: 'Triết lý nhân sinh mộc mạc, sự tương phản "trên thuyền" và "trên đất".',
        wordLevelAnalysis: '"Sống cho con chứ không thể sống cho mình" đúc kết đức hy sinh cao cả của người mẹ. Cuộc sống lênh đênh sông nước đầy bão gió đòi hỏi phải có một người đàn ông chèo chống để đàn con được sống.',
        poeticInterpretation: 'Người đàn bà thất học, quê mùa đã dạy cho viên chánh án Đẩu và nghệ sĩ Phùng bài học sâu sắc về cuộc đời: không thể áp dụng sách vở giáo điều vào hiện thực phức tạp.',
        scholarlyInsight: 'Hạt ngọc ẩn giấu trong tâm hồn: vẻ đẹp tình mẫu tử thiêng liêng tỏa sáng giữa cảnh đời lam lũ.'
      },
      {
        id: 'ct-4',
        originalText: 'Bao giờ tôi cũng thấy người đàn bà ấy đang bước ra khỏi tấm ảnh, đó là một người đàn bà vùng biển cao lớn với những đường nét thô kệch, tấm lưng áo bạc phếch có miếng vá...',
        contextOrSection: 'Chi tiết tấm ảnh trong bộ lịch - Kết truyện',
        rhetoricalDevice: 'Hình tượng biểu tượng hai tầng nghĩa: màu hồng ánh sương mai và người đàn bà bước ra.',
        wordLevelAnalysis: '"Màu hồng ánh sương mai" là cái đẹp lãng mạn của nghệ thuật. "Người đàn bà bước ra khỏi tấm ảnh" là hiện thực nhọc nhằn của đời sống không bao giờ chịu nằm yên sau khung kính nghệ thuật.',
        poeticInterpretation: 'Nghệ thuật chân chính phải gắn liền với cuộc đời, không được quay lưng lại với nỗi đau của con người. Người nghệ sĩ phải nhìn thấu cả hai mặt của cuộc sống.',
        scholarlyInsight: 'Tuyên ngôn đổi mới của Nguyễn Minh Châu: Nghệ thuật vị nhân sinh, nghệ thuật vì con người.'
      }
    ]
  },
  'nguoi-lai-do-song-da': {
    workId: 'nguoi-lai-do-song-da',
    title: 'Người lái đò Sông Đà (Nguyễn Tuân)',
    genre: 'van',
    introSummary: 'Bóc tách chi tiết từng câu văn trong tùy bút Người lái đò Sông Đà: bản tính hung bạo, thạch trận hiểm độc, vẻ đẹp áng tóc mun trữ tình và sự tài hoa của ông đò.',
    lineItems: [
      {
        id: 'sd-1',
        originalText: 'Chúng thủy giai đông tẩu / Đà giang độc bắc lưu',
        contextOrSection: 'Lời đề từ - Cá tính dòng sông',
        rhetoricalDevice: 'Câu chữ Hán cổ kính, tương phản độc tôn (chúng thủy >< độc bắc lưu).',
        wordLevelAnalysis: '"Chúng thủy" là mọi dòng sông đều xuôi về hướng đông; duy chỉ có "Đà giang" một mình chảy ngược về hướng bắc. Khẳng định cá tính ngang tàng, độc đáo, khác biệt của dòng sông.',
        poeticInterpretation: 'Lời đề từ hé mở tính cách nổi loạn, dữ dội, không chịu khuất phục của sông Đà, đồng thời phản chiếu cá tính nghệ thuật ưa cảm giác mạnh của Nguyễn Tuân.',
        scholarlyInsight: 'Một tuyên ngôn thẩm mỹ: Nguyễn Tuân chọn đối tượng miêu tả độc đáo nhất để phô diễn ngòi bút tài hoa bậc thầy.'
      },
      {
        id: 'sd-2',
        originalText: 'Mặt hòn đá nào trông cũng ngỗ ngược, hằn học, dữ dằn... nước thở và nằm nghe như tiếng một ngàn con trâu mộng đang lồng lộn giữa rừng vầu rừng nứa bị cháy...',
        contextOrSection: 'Sông Đà hung bạo - Đá và Nước',
        rhetoricalDevice: 'Nhân hóa đá sông Đà có tâm địa, so sánh độc đáo tiếng nước thác với tiếng ngàn con trâu mộng trong rừng cháy.',
        wordLevelAnalysis: 'Ba tính từ "ngỗ ngược, hằn học, dữ dằn" biến những hòn đá vô tri thành một đội quân giặc hung tợn. Liên tưởng "trâu mộng lồng lộn giữa rừng cháy" lấy lửa tả nước, tạo ấn tượng thính giác dữ dội chưa từng có.',
        poeticInterpretation: 'Nguyễn Tuân không miêu tả thiên nhiên đơn thuần mà biến sông Đà thành một đấu trường sinh tử tráng lệ, nơi thiên nhiên thách thức bản lĩnh con người.',
        scholarlyInsight: 'Sức sáng tạo ngôn từ vô song: liên tưởng vượt qua giới hạn thông thường để đạt tới đỉnh cao của cảm giác mạnh.'
      },
      {
        id: 'sd-3',
        originalText: 'Con Sông Đà tuôn dài tuôn dài như một áng tóc trữ tình, đầu tóc chân tóc ẩn hiện trong mây trời Tây Bắc bung nở hoa ban hoa gạo tháng hai...',
        contextOrSection: 'Sông Đà trữ tình nhìn từ trên cao',
        rhetoricalDevice: 'Điệp từ "tuôn dài tuôn dài", so sánh dòng sông với "áng tóc trữ tình".',
        wordLevelAnalysis: 'Điệp từ "tuôn dài" mở ra dòng chảy êm đềm bất tận. "Áng tóc trữ tình" kết hợp giữa mái tóc thiếu nữ kiều diễm và chất thơ lãng mạn. Sắc trắng hoa ban và đỏ rực hoa gạo cài lên mái tóc dòng sông như một nét điểm xuyết tuyệt mỹ.',
        poeticInterpretation: 'Dòng sông hung bạo bỗng chốc hóa thân thành một đại mỹ nhân kiều diễm của núi rừng Tây Bắc. Vẻ đẹp lãng mạn làm say đắm lòng người nghệ sĩ suốt đời đi tìm cái Đẹp.',
        scholarlyInsight: 'Nguyễn Tuân nhìn thiên nhiên ở góc độ văn hóa thẩm mỹ: sông Đà trở thành kiệt tác nghệ thuật của tạo hóa.'
      },
      {
        id: 'sd-4',
        originalText: 'Cưỡi lên thác Sông Đà, phải cưỡi đến cùng như là cưỡi hổ... Nắm chặt lấy cái bờm sóng đúng luồng rồi, ông đò ghì cương lái, bám chắc lấy luồng nước mà phóng nhanh vào cửa sinh...',
        contextOrSection: 'Ông lái đò vượt thạch trận',
        rhetoricalDevice: 'Ẩn dụ "cưỡi thác như cưỡi hổ", thuật ngữ võ thuật và quân sự điêu luyện.',
        wordLevelAnalysis: '"Cưỡi hổ", "ghì cương lái", "phóng nhanh vào cửa sinh" khắc họa phong thái dũng mãnh, mưu trí của ông đò. Ông không thụ động chống đỡ mà chủ động tấn công, làm chủ tình thế.',
        poeticInterpretation: 'Hình tượng người lao động mới hiện lên như một vị tướng tài ba, một nghệ sĩ điêu luyện trên sông nước. Lao động chân chính đã đạt tới tầm vóc nghệ thuật đỉnh cao.',
        scholarlyInsight: 'Tư tưởng thẩm mỹ tiến bộ của Nguyễn Tuân sau 1945: Tôn vinh người lao động bình dị là người anh hùng thời đại mới.'
      }
    ]
  }
};
