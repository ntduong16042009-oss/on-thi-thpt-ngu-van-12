export interface VerseAnalysisItem {
  id: string;
  order: number;
  stanzaTitle: string;
  verses: string;
  artisticDevices: string;
  detailedInterpretation: string;
  thematicSignificance: string;
  examTakeaway: string;
}

export interface ProseAnalysisItem {
  id: string;
  order: number;
  sectionTitle: string;
  excerpt: string;
  artisticHighlights: string;
  deepAnalysis: string;
  thematicSignificance: string;
  examTakeaway: string;
}

export const VERSE_ANALYSIS_DATA: Record<string, VerseAnalysisItem[]> = {
  'tay-tien': [
    {
      id: 'tt-1',
      order: 1,
      stanzaTitle: 'Câu 1-2: Khúc dạo đầu tha thiết - Nỗi nhớ cội nguồn và dòng sông Mã lịch sử',
      verses: 'Sông Mã xa rồi Tây Tiến ơi!\nNhớ về rừng núi, nhớ chơi vơi.',
      artisticDevices: 'Từ cảm thán "ơi" gieo ở cuối câu; điệp từ "nhớ" lặp lại hai lần; từ láy tượng cảm "chơi vơi"; vần chân "ơi" ngân vang.',
      detailedInterpretation: 'Câu thơ mở đầu tựa như một tiếng gọi thảng thốt bật lên từ sâu thẳm tâm can người thi sĩ. "Sông Mã" - dòng sông huyền thoại chảy qua miền biên ải Tây Bắc, từng đồng hành cùng bước chân đoàn binh, nay đã trở thành chứng nhân lịch sử linh thiêng. Tiếng gọi "Tây Tiến ơi!" biến một danh xưng đơn vị quân đội thành một thực thể sống động, thân thương như máu thịt. Nỗi nhớ rừng núi được định hình bằng hai chữ "nhớ chơi vơi" - một trạng thái cảm xúc bồng bềnh, hư ảo, không đo lường được bằng không gian hay thời gian, tựa như khói mây bảng lảng chốn thâm sơn cùng cốc.',
      thematicSignificance: 'Mở ra không gian hoài niệm bao la, xác lập nguồn cảm hứng chủ đạo của bài thơ là tình đồng đội thiêng liêng và nỗi nhớ miền đất Tây Bắc hào hùng.',
      examTakeaway: 'Khi phân tích 2 câu đầu, học sinh cần nhấn mạnh nghệ thuật phối thanh và từ láy "chơi vơi" (Xuân Diệu từng khen đây là chữ thần tình diễn tả nỗi nhớ mênh mang không bờ bến).'
    },
    {
      id: 'tt-2',
      order: 2,
      stanzaTitle: 'Câu 3-4: Địa bàn hành quân heo hút và sương mù rừng thẳm',
      verses: 'Sài Khao sương lấp đoàn quân mỏi,\nMường Lát hoa về trong đêm hơi.',
      artisticDevices: 'Địa danh lạ tai (Sài Khao, Mường Lát); động từ mạnh "lấp"; hình ảnh ẩn dụ thi vị "hoa về trong đêm hơi"; đối lập giữa hiện thực khắc nghiệt và tâm hồn lãng mạn.',
      detailedInterpretation: 'Chặng đường hành quân hiện lên với sự khắc nghiệt tột cùng: "Sài Khao sương lấp". Chữ "lấp" đặc tả màn sương dày đặc, nuốt chửng cả một đoàn quân dãi dầu phong trần. Thế nhưng ngay sau câu thơ trĩu nặng mệt mỏi là một hình ảnh diễm lệ bất ngờ: "Mường Lát hoa về trong đêm hơi". "Đêm hơi" là đêm sương bốc hơi huyền ảo. "Hoa về" có thể hiểu là đoàn quân cầm những ngọn đuốc hoa lung linh trong đêm, hoặc là những bông hoa rừng nở bừng trong sương khói, hay vẻ đẹp thanh tao của các cô gái miền sơn cước. Ngòi bút lãng mạn đã nâng đỡ hiện thực gian truân, biến bước chân mệt nhọc thành cuộc phiêu du thi vị.',
      thematicSignificance: 'Khắc họa khí chất lãng mạn đặc trưng của người lính trí thức Hà thành: luôn nhìn thấy cái đẹp và chất thơ ngay trong gian khổ cùng cực.',
      examTakeaway: 'Đối chiếu nét tương phản giữa chữ "mỏi" (hiện thực khốc liệt) và "hoa về" (tâm hồn lãng mạn bay bổng).'
    },
    {
      id: 'tt-3',
      order: 3,
      stanzaTitle: 'Câu 5-6: Dốc núi trập trùng và tư thế "súng ngửi trời" kiêu hùng',
      verses: 'Dốc lên khúc khuỷu dốc thăm thẳm,\nHeo hút cồn mây súng ngửi trời.',
      artisticDevices: 'Điệp từ "dốc"; từ láy tượng hình giàu thanh trắc "khúc khuỷu", "thăm thẳm"; từ láy gợi độ cao "heo hút"; nhân hóa táo bạo "súng ngửi trời".',
      detailedInterpretation: 'Hai câu thơ chứa mật độ thanh trắc dày đặc gợi mở cung đường hành quân gập ghềnh, hiểm trở. "Khúc khuỷu" đo độ quanh co, ngoằn ngoèo; "thăm thẳm" đo chiều sâu hun hút của vực thẳm. Đỉnh cao nghệ thuật là câu "Heo hút cồn mây súng ngửi trời": mũi súng của người chiến sĩ vươn cao chạm tới tầng mây, như đang "ngửi trời". Hình ảnh nhân hóa không chỉ đo độ cao chót vót của đỉnh đèo miền Tây mà còn toát lên nét tinh nghịch, hóm hỉnh, lạc quan và tư thế làm chủ thiên nhiên vũ trụ của người chiến sĩ vệ quốc.',
      thematicSignificance: 'Chuyển hóa độ cao hiểm trở của địa hình thành bệ phóng cho tầm vóc sử thi kỳ vĩ của người lính cách mạng thời đầu kháng chiến.',
      examTakeaway: 'Phân tích chữ "súng ngửi trời" so sánh với hình ảnh "Đầu súng trăng treo" (Chính Hữu) để làm bật chất lãng mạn tài hoa riêng có của Quang Dũng.'
    },
    {
      id: 'tt-4',
      order: 4,
      stanzaTitle: 'Câu 7-8: Điệp khúc thăng trầm và nét vẽ bảng lảng Pha Luông',
      verses: 'Ngàn thước lên cao, ngàn thước xuống,\nNhà ai Pha Luông mưa xa khơi.',
      artisticDevices: 'Phép đối chỉnh "lên cao" - "xuống"; điệp ngữ "ngàn thước"; câu thơ toàn thanh bằng (7/7 thanh bằng ở câu cuối); nhịp thơ ngắt 4/3 cân đối.',
      detailedInterpretation: 'Câu thơ "Ngàn thước lên cao, ngàn thước xuống" như bị bẻ đôi ở giữa, tái hiện những đỉnh dốc dựng đứng rồi đổ dốc bất ngờ tựa như con dốc số phận. Nhưng ngay sau cảm giác rợn ngợp ấy, câu thơ "Nhà ai Pha Luông mưa xa khơi" thả xuống một giai điệu hoàn toàn thanh thản. Bảy thanh bằng êm ái như làn mưa rừng xua tan đi cái ngột ngạt, nhọc nhằn. Đứng từ đỉnh cao chót vót phóng tầm mắt xuống thung lũng xa, người lính thấy những mái nhà thấp thoáng ẩn hiện trong biển mưa mờ ảo.',
      thematicSignificance: 'Sự hòa quyện tuyệt đỉnh giữa hội họa và âm nhạc: nét vẽ gân guốc đối lập với nét cọ mềm mại bồng bềnh.',
      examTakeaway: 'Bình luận về hiệu quả nghệ thuật của câu thơ toàn thanh bằng: một nốt trầm êm dịu làm dịu mát tâm hồn người lính sau chặng đường leo dốc nghẹt thở.'
    },
    {
      id: 'tt-5',
      order: 5,
      stanzaTitle: 'Câu 9-10: Hiện thực hy sinh thanh thản và phong thái kiêu hùng',
      verses: 'Anh bạn dãi dầu không bước nữa,\nGục lên súng mũ bỏ quên đời!',
      artisticDevices: 'Từ láy "dãi dầu"; cách nói giảm nói tránh "không bước nữa", "bỏ quên đời"; tư thế "gục lên súng mũ".',
      detailedInterpretation: 'Quang Dũng không ngần ngại nhìn thẳng vào sự mất mát, hy sinh của đồng đội. Những cơn sốt rét rừng, những dặm trường đói khát khiến người lính kiệt sức, ngã xuống bên vệ đường. Nhưng tác giả không dùng từ "chết" hay "hy sinh" mà nói "không bước nữa", "bỏ quên đời". Cái chết được nhìn nhận như một giấc ngủ thanh thản sau một chặng đường dài tận hiến. Tư thế "gục lên súng mũ" gắn liền với vũ khí chiến đấu, người lính ngã xuống trong tư thế của người chiến sĩ đang hành quân, biến cái bi thành cái tráng.',
      thematicSignificance: 'Chất bi tráng trong quan niệm thẩm mỹ của Quang Dũng: sự hy sinh không gợi bi lụy mà gợi niềm kính phục thiêng liêng.',
      examTakeaway: 'Khắc sâu cách nói "bỏ quên đời" - thái độ khinh thường gian khổ và xem cái chết nhẹ tựa lông hồng của tuổi trẻ kháng chiến.'
    },
    {
      id: 'tt-6',
      order: 6,
      stanzaTitle: 'Câu 11-12: Hương vị ấm áp tình quân dân Tây Bắc',
      verses: 'Nhớ ôi Tây Tiến cơm lên khói,\nMai Châu mùa em thơm nếp xôi.',
      artisticDevices: 'Thán từ "nhớ ôi"; ẩn dụ chuyển đổi cảm giác "thơm nếp xôi"; sáng tạo ngôn từ độc đáo "mùa em".',
      detailedInterpretation: 'Sau chặng đường vượt dốc gian nan, người lính dừng chân tại bản làng Mai Châu yên bình. Làn khói lam chiều ấm áp bốc lên từ nồi xôi nếp nương xua tan cái lạnh lẽo của rừng sâu. Cụm từ "mùa em" là một sáng tạo thi ca độc đáo: không phải mùa lúa, mùa hoa mà là "mùa em" - mùa của tình cảm ấm áp, của những thiếu nữ Mai Châu dịu dàng bưng bát xôi nếp thơm nồng tiếp sức cho bộ đội. Tình quân dân gắn bó keo sơn đã trở thành nguồn năng lượng tinh thần vô giá.',
      thematicSignificance: 'Điểm tựa bình yên của người lính giữa chiến trường khắc nghiệt: tình cảm nhân dân đùm bọc, chở che.',
      examTakeaway: 'Phân tích vẻ đẹp lãng mạn và sức gợi tinh tế của từ "mùa em" - kết tinh giữa hương vị nếp xôi và hương vị tình người Tây Bắc.'
    },
    {
      id: 'tt-7',
      order: 7,
      stanzaTitle: 'Câu 13-16: Đêm hội đuốc hoa lung linh và vẻ đẹp huyền ảo miền sơn cước',
      verses: 'Doanh trại bừng lên hội đuốc hoa,\nKìa em xiêm áo tự bao giờ.\nKhèn lên man điệu nàng e ấp,\nNhạc về Viên Chăn xây hồn thơ.',
      artisticDevices: 'Động từ "bừng"; từ cảm thán ngỡ ngàng "kìa em"; từ láy tượng hình "e ấp"; kết hợp âm hưởng nhạc điệu phương Tây và điệu khèn dân tộc.',
      detailedInterpretation: 'Đoạn thơ mở ra một thế giới lễ hội rực rỡ sắc màu và âm thanh. Từ "bừng" vừa gợi ánh sáng đuốc hoa thắp sáng màn đêm, vừa gợi niềm vui bừng nở trong đáy mắt người lính. Tiếng reo ngỡ ngàng "Kìa em xiêm áo tự bao giờ" bắt trọn khoảnh khắc xuất hiện lộng lẫy, kiều diễm của người thiếu nữ sơn cước trong bộ trang phục dân tộc sặc sỡ. Điệu khèn "man điệu" (vũ điệu hoang dã, say đắm) hòa quyện cùng nét "e ấp" thẹn thùng của người sơn nữ khiến tâm hồn người lính bay bổng, chắp cánh cho những ước mơ hòa bình bay xa tới tận Viên Chăn.',
      thematicSignificance: 'Tâm hồn lãng mạn, đa tình, tài hoa của người lính Hà thành khi hòa nhập vào không gian văn hóa đặc sắc của miền Tây.',
      examTakeaway: 'Làm nổi bật chất men say văn hóa và tính chất đa thanh, đa sắc trong đêm lửa trại thắm đượm nghĩa tình quân dân.'
    },
    {
      id: 'tt-8',
      order: 8,
      stanzaTitle: 'Câu 17-20: Cảnh sông nước Châu Mộc huyền ảo và nét vẽ hoài niệm bảng lảng',
      verses: 'Người đi Châu Mộc chiều sương ấy,\nCó thấy hồn lau nẻo bến bờ.\nCó nhớ dáng người trên độc mộc,\nTrôi dòng nước lũ hoa đong đưa.',
      artisticDevices: 'Điệp cấu trúc nghi vấn "Có thấy... Có nhớ..."; nhân hóa "hồn lau"; hình ảnh tương phản "dòng nước lũ" và "hoa đong đưa".',
      detailedInterpretation: 'Bức tranh sông nước Châu Mộc hiện ra trong buổi chiều sương buông mờ ảo. Đại từ chỉ định "chiều sương ấy" gợi một thời gian hoài niệm xa xôi mà không thể nào phai mờ. Những cây lau không chỉ vô tri vô giác mà dường như có linh hồn ("hồn lau") đang vẫy chào người chiến sĩ. Hình tượng "dáng người trên độc mộc" toát lên vẻ đẹp kiêu hãnh, mềm mại của con người vùng cao vững vàng tay chèo giữa dòng nước lũ cuộn sóng. Chi tiết "hoa đong đưa" như một nụ cười duyên dáng của thiên nhiên đưa tiễn đoàn thuyền độc mộc.',
      thematicSignificance: 'Chất thơ hòa quyện chất họa: Quang Dũng sử dụng ngòi bút thủy mặc phương Đông để lưu giữ vẻ đẹp thơ mộng, cổ tích của Tây Bắc.',
      examTakeaway: 'Phân tích chữ "hồn lau" và "hoa đong đưa" để làm nổi bật tâm hồn nhạy cảm, tinh tế của tác giả trước vẻ đẹp kín đáo của thiên nhiên.'
    },
    {
      id: 'tt-9',
      order: 9,
      stanzaTitle: 'Câu 21-24: Chân dung tượng đài người lính - Hào hùng, kỳ vĩ và lãng mạn',
      verses: 'Tây Tiến đoàn binh không mọc tóc,\nQuân xanh màu lá dữ oai hùm.\nMắt trừng gửi mộng qua biên giới,\nĐêm mơ Hà Nội dáng kiều thơm.',
      artisticDevices: 'Từ Hán Việt trang trọng "đoàn binh"; tả thực căn bệnh sốt rét rừng kết hợp ẩn dụ "dữ oai hùm"; đối lập giữa hiện thực gân guốc và mộng ước lãng mạn "dáng kiều thơm".',
      detailedInterpretation: 'Quang Dũng không tô hồng hiện thực: những cơn sốt rét rừng làm người lính rụng hết tóc ("không mọc tóc"), da xanh xao như màu lá rừng ("quân xanh màu lá"). Thế nhưng, dáng vẻ bên ngoài khắc khổ ấy lại được bù đắp bằng khí phách hiên ngang của loài mãnh chúa sơn lâm ("dữ oai hùm"). Câu thơ "Mắt trừng gửi mộng qua biên giới" biểu đạt ý chí chiến đấu sắt đá trừng trị kẻ thù xâm lược. Nhưng phía sau ánh mắt rực lửa căm thù ấy lại là một trái tim đa cảm thiết tha: "Đêm mơ Hà Nội dáng kiều thơm". Hình ảnh "dáng kiều thơm" là vẻ đẹp của người thiếu nữ Hà thành thanh lịch, là quê hương, là hậu phương tiếp thêm sức mạnh chiến đấu cho người chiến sĩ.',
      thematicSignificance: 'Bức chân dung toàn vẹn nhất về người lính thời chống Pháp: sự kết hợp hoàn hảo giữa cái dũng mãnh của người tráng sĩ và nét hào hoa thanh lịch của tuổi trẻ Thủ đô.',
      examTakeaway: 'Lấy dẫn chứng bảo vệ câu thơ "dáng kiều thơm" từng bị quy kết là ủy mị tư sản; khẳng định đây là cội nguồn sức mạnh nâng bước người lính qua mưa bom bão đạn.'
    },
    {
      id: 'tt-10',
      order: 10,
      stanzaTitle: 'Câu 25-28: Khúc bi tráng đỉnh cao - Cái chết hóa thành bất tử',
      verses: 'Rải rác biên cương mồ viễn xứ,\nChiến trường đi chẳng tiếc đời xanh.\nÁo bào thay chiếu, anh về đất,\nSông Mã gầm lên khúc độc hành.',
      artisticDevices: 'Hệ thống từ Hán Việt cổ kính "biên cương", "viễn xứ", "chiến trường", "áo bào", "độc hành"; tương phản giữa mồ mả lạnh lẽo và lý tưởng cống hiến; nhân hóa dòng sông Mã.',
      detailedInterpretation: 'Câu thơ "Rải rác biên cương mồ viễn xứ" gợi lên nỗi đau đớn xót xa trước những nấm mồ vô danh rải rác chốn rừng hoang. Nhưng ngay sau đó, câu thơ vút cao với tinh thần dấn thân bất khuất: "Chiến trường đi chẳng tiếc đời xanh". "Đời xanh" là tuổi thanh xuân tươi đẹp nhất, người lính sẵn sàng hiến dâng cho nền độc lập dân tộc mà không hề tính toan, do dự. Chi tiết "Áo bào thay chiếu anh về đất": người lính ngã xuống chỉ có manh chiếu rách bọc thân (thậm chí không có chiếu), nhưng tấm lòng trân trọng của nhà thơ đã khoác lên vai anh tấm áo bào đỏ thắm của bậc dũng tướng thuở xưa. "Anh về đất" là cách nói giảm nói tránh thanh thản, xem cái chết như sự trở về lòng mẹ Tổ quốc. Và dòng sông Mã đã thay mặt non sông tấu lên khúc độc hành gầm vang trời đất đưa tiễn linh hồn người bất tử.',
      thematicSignificance: 'Đỉnh cao của cảm hứng bi tráng trong thi ca kháng chiến: biến nỗi đau mất mát thành bản hùng ca thiêng liêng muôn đời.',
      examTakeaway: 'Phân tích nghệ thuật tráng lệ hóa hiện thực của Quang Dũng qua hình tượng "áo bào thay chiếu" và khúc độc hành sông Mã.'
    },
    {
      id: 'tt-11',
      order: 11,
      stanzaTitle: 'Câu 29-32: Lời thề gắn bó và linh hồn bất tử của đoàn quân Tây Tiến',
      verses: 'Tây Tiến người đi không hẹn ước,\nĐường lên thăm thẳm một chia phôi.\nAi lên Tây Tiến mùa xuân ấy,\nHồn về Sầm Nứa chẳng về xuôi.',
      artisticDevices: 'Từ láy "thăm thẳm"; cấu trúc "không hẹn ước... một chia phôi"; đại từ phiếm chỉ "Ai"; tương phản giữa thể xác và linh hồn.',
      detailedInterpretation: 'Khổ thơ khép lại bài thơ bằng âm hưởng thâm trầm, da diết của một lời thề son sắt. "Người đi không hẹn ước" bởi lẽ ra đi là xác định một đi không trở lại, dấn thân vào con đường gian lao "một chia phôi". "Mùa xuân ấy" là mùa xuân lịch sử năm 1947 khi đoàn quân Tây Tiến thành lập. Câu kết "Hồn về Sầm Nứa chẳng về xuôi" khẳng định: dù thể xác có thể ngã xuống dọc đường hành quân, nhưng linh hồn và ý chí của người lính Tây Tiến vẫn mãi gắn bó cùng đồng đội, cùng chiến trường miền Tây, trường tồn cùng non sông gấm vóc.',
      thematicSignificance: 'Đúc kết khí phách ngút ngàn của cả một thế hệ thanh niên: thề quyết tử để Tổ quốc quyết sinh.',
      examTakeaway: 'Khái quát lại giá trị của toàn bài thơ: bản trường ca bất hủ kết tinh vẻ đẹp hào hoa và bi tráng của thời đại chống Pháp.'
    }
  ],

  'viet-bac': [
    {
      id: 'vb-1',
      order: 1,
      stanzaTitle: 'Cặp 1-4: Lời ướm hỏi ngọt ngào và đạo lý ân tình cội nguồn',
      verses: 'Mình về mình có nhớ ta\nMười lăm năm ấy thiết tha mặn nồng.\nMình về mình có nhớ không\nNhìn cây nhớ núi, nhìn sông nhớ nguồn?',
      artisticDevices: 'Cặp đại từ xưng hô dân ca "mình - ta"; điệp ngữ cấu trúc "Mình về mình có nhớ..."; câu hỏi tu từ; hình ảnh biểu tượng "cây - núi", "sông - nguồn".',
      detailedInterpretation: 'Bốn câu thơ đầu là lời ướm hỏi tha thiết của đồng bào Việt Bắc gửi tới người cán bộ cách mạng về xuôi. Tố Hữu đã mượn kết cấu đối đáp hát giao duyên ngọt ngào của ca dao cổ để chuyên chở một nội dung chính trị trọng đại. Khoảng thời gian "mười lăm năm ấy" (1940 - 1954) từ khởi nghĩa Bắc Sơn đến chiến thắng Điện Biên Phủ là một chặng đường dài đồng cam cộng khổ, chia ngọt sẻ bùi giữa nhân dân và cách mạng. Câu hỏi tu từ "Nhìn cây nhớ núi, nhìn sông nhớ nguồn" không chỉ là lời dặn dò đừng quên cảnh cũ người xưa mà còn nâng lên thành đạo lý truyền thống muôn đời của dân tộc: Uống nước nhớ nguồn.',
      thematicSignificance: 'Xác lập giọng điệu trữ tình - chính luận đượm đà tính dân tộc và đặt nền móng cho khúc ca ân tình thủy chung xuyên suốt tác phẩm.',
      examTakeaway: 'Phân tích nghệ thuật biến vấn đề chính trị khô khan thành bản tình ca lứa đôi ngọt ngào của Tố Hữu.'
    },
    {
      id: 'vb-2',
      order: 2,
      stanzaTitle: 'Cặp 5-8: Tiếng lòng bịn rịn và khoảnh khắc chia tay không lời',
      verses: 'Tiếng ai tha thiết bên cồn\nBâng khuâng trong dạ, bồn chồn bước đi.\nÁo chàm đưa buổi phân ly\nCầm tay nhau biết nói gì hôm nay...',
      artisticDevices: 'Đại từ phiếm chỉ "ai"; từ láy kép "bâng khuâng", "bồn chồn"; hoán dụ nghệ thuật "áo chàm"; dấu chấm lửng nghẹn ngào cuối câu.',
      detailedInterpretation: 'Đây là lời đáp của người cán bộ về xuôi trước tiếng gọi của người ở lại. Đại từ phiếm chỉ "ai" làm tiếng gọi trở nên vang vọng, da diết khắp không gian bờ bãi. Hai từ láy "bâng khuâng" (tâm trạng lưu luyến, tiếc nuối) và "bồn chồn" (bước chân ngập ngừng, dùng dằng nửa muốn đi nửa muốn ở lại) đặc tả sự giằng xé nội tâm. Hình ảnh hoán dụ "áo chàm" gợi lên sắc áo nghèo khó, bền màu, chất phác nhưng thủy chung son sắt của đồng bào các dân tộc thiểu số Việt Bắc. Cử chỉ "Cầm tay nhau biết nói gì hôm nay..." kết thúc bằng dấu ba chấm buông lửng: không phải là không có gì để nói, mà là có quá nhiều cảm xúc trào dâng khiến lời nói bị nghẹn lại, chỉ còn sự thấu hiểu qua ánh mắt và hơi ấm bàn tay.',
      thematicSignificance: 'Bức tranh chia ly lịch sử được thu lại thành một khoảnh khắc thiêng liêng đậm chất nhân văn và xúc động khôn nguôi.',
      examTakeaway: 'Bình luận về dấu ba chấm (...) ở câu thứ 8: khoảng lặng nghệ thuật chứa đựng biển trời ân tình cách mạng.'
    },
    {
      id: 'vb-3',
      order: 3,
      stanzaTitle: 'Cặp 9-16: Nỗi nhớ da diết và những kỷ niệm gian lao ấm áp nghĩa tình',
      verses: 'Nhớ gì như nhớ người yêu\nTrăng lên đầu núi, nắng chiều lưng nương\nNhớ từng bản khói cùng sương\nBếp lửa nhân nghĩa, chia củ sắn lùi.\nThương nhau chia củ sắn lùi\nBát cơm sẻ nửa, chăn sui đắp cùng.',
      artisticDevices: 'So sánh độc đáo "Nhớ gì như nhớ người yêu"; điệp từ "nhớ"; tiểu đối "chia củ sắn lùi / bát cơm sẻ nửa / chăn sui đắp cùng"; hoán dụ "bếp lửa nhân nghĩa".',
      detailedInterpretation: 'Tố Hữu so sánh nỗi nhớ chiến khu với "nhớ người yêu" - mức độ mãnh liệt, cháy bỏng và thường trực nhất trong thang bậc tình cảm con người. Nỗi nhớ ấy phủ sóng khắp không gian và thời gian: từ ánh trăng đầu núi đến nắng chiều lưng nương, từ bản làng sương khói đến ngọn bếp lửa bập bùng. Đặc biệt, vẻ đẹp của tình đồng chí đồng bào được kết tinh qua những chi tiết đời sống mộc mạc: "chia củ sắn lùi", "bát cơm sẻ nửa", "chăn sui đắp cùng". Giữa cái đói và cái rét buốt của mùa đông rừng sâu, những con người cách mạng đã sưởi ấm cho nhau bằng hơi ấm của sự san sẻ, gắn bó keo sơn.',
      thematicSignificance: 'Tôn vinh vẻ đẹp đạo lý sống cao cả của nhân dân Việt Bắc: nghèo vật chất nhưng giàu có vô ngần về nghĩa tình.',
      examTakeaway: 'Phân tích các chi tiết hiện thực mộc mạc (củ sắn lùi, chăn sui) trở thành biểu tượng bất tử của tình nghĩa cách mạng.'
    },
    {
      id: 'vb-4',
      order: 4,
      stanzaTitle: 'Cặp 17-24: Bức tranh tứ bình bốn mùa - Tuyệt tác nghệ thuật của thi phẩm',
      verses: 'Rừng xanh hoa chuối đỏ tươi\nĐèo cao nắng ánh dao gài thắt lưng.\nNgày xuân mơ nở trắng rừng\nNhớ người đan nón chuốt từng sợi giang.\nVe kêu rừng phách đổ vàng\nNhớ cô em gái hái măng một mình.\nRừng thu trăng rọi hòa bình\nNhớ ai tiếng hát ân tình thủy chung.',
      artisticDevices: 'Kết cấu xen kẽ một câu tả cảnh - một câu tả người; nghệ thuật phối màu bậc thầy (xanh - đỏ, trắng muốt, vàng rực, ánh trăng thu); động từ chuyển đổi kỳ ảo "đổ vàng".',
      detailedInterpretation: 'Đoạn thơ mười câu khắc họa bức tranh tứ bình bốn mùa của thiên nhiên và con người Việt Bắc: Mùa đông bừng sáng sức sống với sắc "hoa chuối đỏ tươi" giữa bạt ngàn rừng xanh, con người xuất hiện ở tư thế kiêu hãnh "đèo cao nắng ánh dao gài thắt lưng" - ánh thép lấp lánh làm chủ đỉnh trời. Mùa xuân tinh khôi với màu hoa mơ "nở trắng rừng" và hình ảnh con người lao động cần mẫn, khéo léo "chuốt từng sợi giang". Mùa hạ sôi động với âm thanh ve ngân và thị giác kỳ diệu: chữ "đổ vàng" miêu tả sự chuyển màu đột ngột, mau lẹ của rừng phách khi hè sang, cùng hình bóng chịu thương chịu khó của "cô em gái hái măng một mình". Mùa thu êm đềm với ánh trăng hòa bình và tiếng hát ân tình thủy chung.',
      thematicSignificance: 'Đỉnh cao thi pháp Tố Hữu: con người không hề đơn độc trước vũ trụ mà trở thành tâm điểm tỏa sáng, hòa quyện hữu cơ cùng thiên nhiên tươi đẹp.',
      examTakeaway: 'Phân tích trình tự thời gian độc đáo (Đông -> Xuân -> Hạ -> Thu) và nghệ thuật phối màu, dùng chữ "đổ vàng" mang tính đột phá.'
    },
    {
      id: 'vb-5',
      order: 5,
      stanzaTitle: 'Cặp 25-30: Âm hưởng sử thi tráng lệ trong khúc ca Việt Bắc ra trận',
      verses: 'Những đường Việt Bắc của ta\nĐêm đêm rầm rập như là đất rung\nQuân đi điệp điệp trùng trùng\nÁnh sao đầu súng bạn cùng mũ nan\nDân công đỏ đuốc từng đoàn\nBước chân nát đá muôn tàn lửa bay.',
      artisticDevices: 'Từ láy tượng thanh và tượng hình "rầm rập", "điệp điệp trùng trùng"; so sánh cường điệu "như là đất rung", "bước chân nát đá"; hình ảnh biểu tượng lãng mạn "ánh sao đầu súng".',
      detailedInterpretation: 'Từ giọng điệu tâm tình ngọt ngào, thi phẩm chuyển sang khúc tráng ca hào sảng của cuộc chiến tranh nhân dân toàn diện. Từ láy "rầm rập" cùng so sánh "như là đất rung" tái hiện sức mạnh lay trời chuyển đất của các đoàn quân tiến ra mặt trận. Cụm từ "Quân đi điệp điệp trùng trùng" gợi mở thế trận lớp lớp không dứt. Hình ảnh "Ánh sao đầu súng bạn cùng mũ nan" vừa là hình ảnh tả thực ánh sao trời lấp lánh trên mũi lê, vừa biểu tượng cho ngôi sao lý tưởng Đảng soi đường cho người chiến sĩ. Đoàn dân công rực lửa đuốc đỏ với sức mạnh "bước chân nát đá" thể hiện ý chí quật cường của một dân tộc quyết tâm giành lại độc lập tự do.',
      thematicSignificance: 'Khắc họa sức mạnh quật khởi của toàn dân tộc trong chiến dịch Điện Biên Phủ lịch sử.',
      examTakeaway: 'Đối chiếu hình tượng "Ánh sao đầu súng" với "Đầu súng trăng treo" (Chính Hữu) để thấy được sự kế thừa và sáng tạo thi ca độc đáo.'
    }
  ],

  'dat-nuoc': [
    {
      id: 'dn-1',
      order: 1,
      stanzaTitle: 'Đoạn 1: Cội nguồn sinh thành Đất Nước từ những điều bình dị, thân thương',
      verses: 'Khi ta lớn lên Đất Nước đã có rồi\nĐất Nước có trong những cái "ngày xửa ngày xưa..." mẹ thường hay kể\nĐất Nước bắt đầu với miếng trầu bây giờ bà ăn\nĐất Nước lớn lên khi dân mình biết trồng tre mà đánh giặc.',
      artisticDevices: 'Điệp từ "Đất Nước" viết hoa trang trọng; cấu trúc định nghĩa thơ ca; vận dụng chất liệu văn hóa dân gian (cổ tích Trầu Cau, Thánh Gióng).',
      detailedInterpretation: 'Nguyễn Khoa Điềm không truy tìm cội nguồn Đất Nước ở những mốc thời gian biên niên sử khô khan hay các triều đại vua chúa, mà bắt đầu từ ký ức tuổi thơ của mỗi con người. Cụm từ "ngày xửa ngày xưa..." mở ra không gian cổ tích thần tiên, nơi bài học đạo đức đầu đời được dung nạp qua lời ru của mẹ. Đất Nước hiện hữu trong tục ăn trầu của bà (truyền thống gắn bó thủy chung), lớn lên qua truyền thuyết Thánh Gióng nhổ tre đánh giặc (truyền thống kiên cường bất khuất đánh giặc ngoại xâm).',
      thematicSignificance: 'Đưa Đất Nước từ cõi thiêng liêng trừu tượng trở về gắn liền với đời sống tâm hồn bình dị của từng gia đình người Việt.',
      examTakeaway: 'Nhấn mạnh cách mở đầu tự nhiên, thân tình như một câu chuyện kể, phá vỡ lối tư duy ước lệ của văn học cổ điển.'
    },
    {
      id: 'dn-2',
      order: 2,
      stanzaTitle: 'Đoạn 2: Nếp sống văn hóa, nghĩa tình và lao động nhọc nhằn',
      verses: 'Tóc mẹ thì bới sau đầu\nCha mẹ thương nhau bằng gừng cay muối mặn\nCái kèo, cái cột thành tên\nHạt gạo phải một nắng hai sương xay, giã, dần, sàng\nĐất Nước có từ ngày đó...',
      artisticDevices: 'Chi tiết phong tục thuần khiết; vận dụng thành ngữ "gừng cay muối mặn", "một nắng hai sương"; liệt kê công đoạn lao động "xay, giã, dần, sàng".',
      detailedInterpretation: 'Đất Nước hiện hình qua thói quen búi tóc sau đầu giản dị của mẹ; qua nghĩa vợ chồng son sắt keo sơn "gừng cay muối mặn xin đừng quên nhau"; qua phong tục đặt tên con mộc mạc bằng cái kèo cái cột để cầu mong sự khỏe mạnh, bình an. Đặc biệt, câu thơ "Hạt gạo phải một nắng hai sương xay, giã, dần, sàng" liệt kê bốn thao tác lao động thủ công cực nhọc để làm ra hạt ngọc nuôi sống con người. Đất Nước vì thế được kết tinh từ mồ hôi, nước mắt và công lao vun đắp của biết bao thế hệ người lao động.',
      thematicSignificance: 'Khẳng định Đất Nước hình thành từ chiều sâu văn hóa phong tục và truyền thống lao động bền bỉ ngàn đời.',
      examTakeaway: 'Phân tích việc tác giả không trích nguyên văn câu ca dao mà chỉ chắt lọc hồn cốt tinh túy để câu thơ tự do mang đầy chất triết luận.'
    },
    {
      id: 'dn-3',
      order: 3,
      stanzaTitle: 'Đoạn 3: Đất Nước trong không gian riêng tư đôi lứa và giang sơn rộng lớn',
      verses: 'Đất là nơi anh đến trường\nNước là nơi em tắm\nĐất Nước là nơi ta hò hẹn\nĐất Nước là nơi em đánh rơi chiếc khăn trong nỗi nhớ thầm.',
      artisticDevices: 'Biện pháp tách từ ngữ "Đất" - "Nước" rồi hợp nhất "Đất Nước"; điệp cấu trúc "Đất là nơi... Nước là nơi..."; vận dụng hình ảnh chiếc khăn trong ca dao.',
      detailedInterpretation: 'Nhà thơ phân tách hai yếu tố "Đất" và "Nước" để gắn kết với những không gian sinh hoạt gần gũi nhất của tuổi hoa niên: con đường đến trường của anh, bến nước em tắm mát. Khi hai yếu tố ấy hợp lại thành "Đất Nước", nó trở thành không gian hò hẹn lãng mạn của tình yêu lứa đôi. Hình ảnh "chiếc khăn trong nỗi nhớ thầm" gợi nhớ ngay câu ca dao "Khăn thương nhớ ai khăn rơi xuống đất". Tình yêu đôi lứa không tách rời mà hòa quyện làm một với tình yêu quê hương xứ sở.',
      thematicSignificance: 'Một cái nhìn trữ tình và nhân văn: Đất Nước được nuôi dưỡng bằng chính những tình cảm trong sáng, ngọt ngào nhất của con người.',
      examTakeaway: 'Làm nổi bật nét độc đáo trong thủ pháp tách - hợp từ ngữ để lý giải bản chất của khái niệm Đất Nước.'
    },
    {
      id: 'dn-4',
      order: 4,
      stanzaTitle: 'Đoạn 4: Lời nhắn nhủ gan ruột về trách nhiệm hóa thân cho xứ sở',
      verses: 'Em ơi em Đất Nước là máu xương của mình\nPhải biết gắn bó và san sẻ\nPhải biết hóa thân cho dáng hình xứ sở\nLàm nên Đất Nước muôn đời...',
      artisticDevices: 'Tiếng gọi thiết tha "Em ơi em"; ẩn dụ sâu sắc "máu xương của mình"; điệp ngữ mệnh lệnh thức "Phải biết..."; từ khóa triết học "hóa thân".',
      detailedInterpretation: 'Lời thơ cất lên như lời tâm sự chân tình giữa đôi lứa nhưng lại mang tầm vóc của một tuyên ngôn bổn phận công dân. Đất Nước không phải thứ ngoại tại xa lạ mà là "máu xương" - phần sinh mệnh thịt da của mỗi người. Từ nhận thức ấy, nhà thơ nêu ra mệnh lệnh hành động: "gắn bó" để đoàn kết, "san sẻ" để cống hiến và đỉnh cao là "hóa thân" - sẵn sàng hy sinh lợi ích cá nhân, thậm chí tính mạng vì sự trường tồn của Tổ quốc.',
      thematicSignificance: 'Khơi gợi ý thức trách nhiệm thiêng liêng của thế hệ thanh niên trí thức miền Nam trong cuộc kháng chiến chống Mỹ.',
      examTakeaway: 'Phân tích từ "hóa thân": không phải sự tan biến mất mát mà là sự hòa nhập cá nhân vào cái vĩnh hằng của cộng đồng.'
    },
    {
      id: 'dn-5',
      order: 5,
      stanzaTitle: 'Đoạn 5: Nhân dân làm ra địa lý và bốn ngàn năm lịch sử',
      verses: 'Những người vợ nhớ chồng còn góp cho Đất Nước những núi Vọng Phu\nCặp vợ chồng yêu nhau góp nên hòn Trống Mái...\nKhông ai nhớ mặt đặt tên\nNhưng họ đã làm ra Đất Nước.',
      artisticDevices: 'Điệp từ "góp"; liệt kê danh lam thắng cảnh gắn với huyền tích dân gian; tương phản giữa sự vô danh và công lao kỳ vĩ.',
      detailedInterpretation: 'Dưới cái nhìn của Nguyễn Khoa Điềm, mọi thắng cảnh non sông đều được tạc nên từ tâm hồn và số phận của nhân dân: ngọn núi Vọng Phu kết tinh từ đức hy sinh của người phụ nữ chờ chồng nơi biên ải; hòn Trống Mái là biểu tượng cho tình yêu thủy chung. Trong bốn ngàn năm lịch sử, hàng triệu con người bình dị đã sống và chết, "không ai nhớ mặt đặt tên", nhưng chính họ đã đổ mồ hôi gieo trồng, giữ hạt lúa, truyền ngọn lửa và cầm vũ khí đánh giặc để làm nên hình hài non nước muôn đời.',
      thematicSignificance: 'Hoàn thiện tư tưởng cốt lõi: Đất Nước của Nhân Dân, Đất Nước của ca dao thần thoại.',
      examTakeaway: 'Khắc sâu luận điểm: Nhân dân là chủ nhân chân chính, duy nhất của lịch sử và địa lý dân tộc.'
    }
  ],

  'song': [
    {
      id: 'song-1',
      order: 1,
      stanzaTitle: 'Khổ 1: Những trạng thái đối cực và hành trình tìm ra biển lớn',
      verses: 'Dữ dội và dịu êm\nỒn ào và lặng lẽ\nSông không hiểu nổi mình\nSóng tìm ra tận bể',
      artisticDevices: 'Hai cặp từ tương phản đối lập (dữ dội - dịu êm, ồn ào - lặng lẽ); liên từ "và"; nhân hóa hình tượng "Sông" và "Sóng".',
      detailedInterpretation: 'Khổ thơ mở đầu bằng sự đan cài của những trạng thái trái ngược nhau trong lòng sóng đại dương, cũng chính là sự biến đổi tâm lý phức tạp, phong phú của người phụ nữ khi yêu: có lúc cuồng nhiệt, mãnh liệt nhưng cũng có lúc trầm tư, sâu lắng. Hành trình "Sông không hiểu nổi mình / Sóng tìm ra tận bể" biểu đạt một bước chuyển tư tưởng mang tính hiện đại: con sóng không chấp nhận sự chật hẹp, tù túng của dòng sông mà kiên quyết dấn thân ra biển lớn mênh mông để tìm thấy bản ngã đích thực của chính mình.',
      thematicSignificance: 'Khát vọng tự chủ, mạnh dạn kiếm tìm tình yêu đích thực và sự đồng điệu tâm hồn của người phụ nữ thời hiện đại.',
      examTakeaway: 'Nhấn mạnh tính hiện đại trong thơ Xuân Quỳnh: người phụ nữ chủ động từ bỏ giới hạn nhỏ hẹp để vươn tới cái cao cả, bao dung.'
    },
    {
      id: 'song-2',
      order: 2,
      stanzaTitle: 'Khổ 2: Quy luật vĩnh hằng của sóng và khát vọng tình yêu muôn thuở',
      verses: 'Ôi con sóng ngày xưa\nVà ngày sau vẫn thế\nNỗi khát vọng tình yêu\nBồi hồi trong ngực trẻ',
      artisticDevices: 'Thán từ "Ôi"; cấu trúc thời gian đối sánh "ngày xưa" - "ngày sau"; từ láy tượng cảm "bồi hồi"; ẩn dụ "ngực trẻ".',
      detailedInterpretation: 'Sóng biển muôn đời vẫn dạt dào vỗ bờ, bất chấp sự luân chuyển của thời gian. Cũng như thế, tình yêu luôn là khát vọng ngàn đời của loài người, đặc biệt là tuổi trẻ. Từ láy "bồi hồi" diễn tả những xao xuyến, rạo rực, nhịp đập thổn thức của trái tim đang yêu. Tình yêu là quy luật tất yếu của sự sống, trẻ trung và vĩnh cửu.',
      thematicSignificance: 'Khẳng định tình yêu là nhu cầu sống còn, là bản năng thiêng liêng và bất tử của con người qua mọi thời đại.',
      examTakeaway: 'Liên hệ với quy luật muôn thuở của tình yêu trong thơ ca nhân loại (Xuân Diệu: "Làm sao sống được mà không yêu...").'
    },
    {
      id: 'song-3',
      order: 3,
      stanzaTitle: 'Khổ 3 & 4: Sự bất lực đáng yêu của lý trí khi cắt nghĩa nguồn cội tình yêu',
      verses: 'Sóng bắt đầu từ gió\nGió bắt đầu từ đâu?\nEm cũng không biết nữa\nKhi nào ta yêu nhau',
      artisticDevices: 'Hệ thống câu hỏi tu từ liên tiếp; điệp liên hoàn (sóng -> gió, gió -> từ đâu); cái lắc đầu duyên dáng "Em cũng không biết nữa".',
      detailedInterpretation: 'Nhà thơ đi tìm cội nguồn của sóng và gió để từ đó truy nguyên cội nguồn tình yêu của mình với anh. Nhưng quy luật của tự nhiên cũng bí ẩn như quy luật của trái tim: tình yêu đến bất ngờ, tự nhiên và không thể giải thích bằng các công thức lý trí đơn thuần. Cái lắc đầu thật thà "Em cũng không biết nữa" toát lên sự ngây thơ, bối rối đáng yêu và đầy nữ tính.',
      thematicSignificance: 'Tôn vinh vẻ đẹp bí ẩn, kỳ diệu và bất khả tri của tình cảm lứa đôi.',
      examTakeaway: 'Bình luận về nét đẹp nữ tính mộc mạc của Xuân Quỳnh: sự thất bại của lý trí lại chính là thắng lợi rực rỡ của trái tim.'
    },
    {
      id: 'song-4',
      order: 4,
      stanzaTitle: 'Khổ 5: Nỗi nhớ da diết chiếm lĩnh không gian, thời gian và tiềm thức',
      verses: 'Con sóng dưới lòng sâu\nCon sóng trên mặt nước\nÔi con sóng nhớ bờ\nNgày đêm không ngủ được\nLòng em nhớ đến anh\nCả trong mơ còn thức',
      artisticDevices: 'Khổ thơ kéo dài 6 câu (phá cách so với các khổ 4 câu); điệp từ "con sóng"; đối lập "dưới lòng sâu" - "trên mặt nước"; phát hiện tâm lý đột phá "Cả trong mơ còn thức".',
      detailedInterpretation: 'Nỗi nhớ được đo bằng chiều sâu của lòng đại dương và bề rộng của mặt biển, tồn tại bất tận trong thời gian "ngày đêm không ngủ được". Đỉnh cao nghệ thuật là sự đồng hiện giữa con sóng nhớ bờ và em nhớ anh: "Cả trong mơ còn thức". Trong giấc ngủ, lý trí đã nghỉ ngơi nhưng tình yêu thì không bao giờ ngừng nghỉ; trái tim vẫn thao thức nhớ về anh ngay trong cõi vô thức.',
      thematicSignificance: 'Khắc họa nỗi nhớ tình yêu đạt đến độ mãnh liệt, tuyệt đối và chân thành nhất trong thơ ca Việt Nam hiện đại.',
      examTakeaway: 'Phân tích câu thơ độc nhất vô nhị "Cả trong mơ còn thức" - đỉnh cao của sự thăng hoa cảm xúc nữ tính.'
    },
    {
      id: 'song-5',
      order: 5,
      stanzaTitle: 'Khổ 6: Lòng thủy chung son sắt và niềm tin hướng về một phương',
      verses: 'Dẫu xuôi về phương bắc\nDẫu ngược về phương nam\nNơi nào em cũng nghĩ\nHướng về anh - một phương',
      artisticDevices: 'Phép điệp từ "dẫu"; cách nói đảo trật tự tự nhiên "xuôi về phương bắc / ngược về phương nam"; sáng tạo khái niệm không gian độc đáo "phương anh".',
      detailedInterpretation: 'Quy luật địa lý thông thường là "xuôi nam ngược bắc", nhưng nhà thơ cố tình đảo lại để nhấn mạnh những trắc trở, gian truân của cuộc đời. Dù đường đời có vạn nẻo chông gai, không gian có bốn phương tám hướng thì trong tâm tưởng người phụ nữ chỉ tồn tại một hướng duy nhất: phương của anh - phương của tình yêu và sự thủy chung son sắt.',
      thematicSignificance: 'Vẻ đẹp truyền thống của người phụ nữ Việt Nam: lòng thủy chung bất diệt trước mọi phong ba bão táp.',
      examTakeaway: 'Phân tích chữ "phương anh" như một tọa độ tâm lý độc nhất, khẳng định la bàn tình yêu của trái tim.'
    },
    {
      id: 'song-6',
      order: 6,
      stanzaTitle: 'Khổ 7-9: Trăn trở trước thời gian và khát vọng vĩnh cửu hóa tình yêu',
      verses: 'Cuộc đời tuy dài thế\nNăm tháng vẫn đi qua\nNhư biển kia dẫu rộng\nMây vẫn bay về xa\n\nLàm sao được tan ra\nThành trăm con sóng nhỏ\nGiữa biển lớn tình yêu\nĐể ngàn năm còn vỗ',
      artisticDevices: 'Cặp quan hệ từ nghịch đối "tuy... vẫn...", "dẫu... vẫn..."; câu hỏi ước muốn "Làm sao được tan ra"; ẩn dụ "biển lớn tình yêu"; thời gian vô tận "ngàn năm".',
      detailedInterpretation: 'Xuân Quỳnh ý thức sâu sắc về sự hữu hạn của kiếp người trước sự vô cùng của thời gian và vũ trụ. Nỗi âu lo ấy không dẫn tới tuyệt vọng bi quan mà thúc đẩy một khát vọng dâng hiến cao thượng: "Làm sao được tan ra". "Tan ra" không phải là hủy diệt, mà là hòa tan cái tôi cá nhân nhỏ bé vào biển lớn bao la của tình yêu cuộc đời, để tình yêu ấy được ngân vang và trường tồn vĩnh viễn cùng năm tháng.',
      thematicSignificance: 'Triết lý nhân sinh cao đẹp: cách duy nhất để chiến thắng sự hữu hạn của đời người là hiến dâng trọn vẹn cho tình yêu và cộng đồng.',
      examTakeaway: 'Bình luận về khát vọng bất tử hóa tình yêu qua hình tượng "trăm con sóng nhỏ giữa biển lớn tình yêu".'
    }
  ],

  'dan-ghi-ta-cua-lorca': [
    {
      id: 'lorca-1',
      order: 1,
      stanzaTitle: 'Khổ 1: Hình ảnh Lor-ca trên nền không gian văn hóa Tây Ban Nha và sự cô độc',
      verses: 'Những tiếng đàn bọt nước\nTây Ban Nha áo choàng đỏ gắt\nli-la li-la li-la\nđi lang thang về miền đơn độc\nvới vầng trăng chếnh choáng\ntrên yên ngựa mỏi mòn',
      artisticDevices: 'Ẩn dụ chuyển đổi cảm giác "tiếng đàn bọt nước"; hoán dụ biểu tượng văn hóa "áo choàng đỏ gắt"; điệp âm mô phỏng tiếng đàn guitar "li-la li-la li-la"; từ láy "chếnh choáng", "mỏi mòn".',
      detailedInterpretation: 'Khổ thơ tái hiện chân dung nghệ sĩ vĩ đại Phê-đê-ri-cô Đê Ga-xi-a Lor-ca. "Tiếng đàn bọt nước" gợi vẻ đẹp mong manh, dễ vỡ của nghệ thuật trước số phận nghiệt ngã. "Áo choàng đỏ gắt" gợi liên tưởng đến đấu trường bò tót khốc liệt - biểu tượng văn hóa Tây Ban Nha, đồng thời gợi màu máu và bầu không khí chính trị ngột ngạt của chủ nghĩa phát xít Franco. Chuỗi âm thanh "li-la li-la li-la" vừa là tên loài hoa đinh hương tím, vừa mô phỏng âm vang ngân rung của những dây đàn ghi ta réo rắt. Người nghệ sĩ mang khát vọng tự do bước đi cô độc trên hành trình cách tân nghệ thuật.',
      thematicSignificance: 'Khắc họa số phận mong manh và bản lĩnh kiên cường của người nghệ sĩ tiên phong chống lại độc tài.',
      examTakeaway: 'Phân tích chuỗi âm thanh "li-la li-la" và biểu tượng "áo choàng đỏ gắt" đặc trưng phong cách siêu thực của Thanh Thảo.'
    },
    {
      id: 'lorca-2',
      order: 2,
      stanzaTitle: 'Khổ 2: Cái chết bi thảm và sự tàn bạo của chế độ phát xít',
      verses: 'Tây Ban Nha\nhát nghêu ngao\nbỗng kinh hoàng\náo choàng bê bết đỏ\nLor-ca bị đi giải\nvề bãi bắn\nchàng đi như người mộng du',
      artisticDevices: 'Nhịp thơ ngắn, đứt đoạn bất ngờ; tương phản gay gắt giữa tiếng hát vô tư và cảnh bắn giết rùng rợn; hình ảnh hoán dụ "áo choàng bê bết đỏ".',
      detailedInterpretation: 'Tiếng hát tự do "nghêu ngao" bỗng bị ngắt ngang bởi bạo lực dã man. Từ ngữ "kinh hoàng", "bãi bắn" tái hiện khoảnh khắc bi kịch khi Lor-ca bị bọn phát xít sát hại dã man năm 1936 bên bờ vực thẳm. "Áo choàng bê bết đỏ" là sự biến đổi bi thương từ sắc đỏ rực rỡ của đấu trường thành màu máu tươi oan khuất. Dáng vẻ "đi như người mộng du" biểu hiện sự bình thản, khinh bỉ cái chết của một tâm hồn đã vượt lên trên mọi hận thù trần thế.',
      thematicSignificance: 'Bản cáo trạng đanh thép tố cáo tội ác tàn sát nghệ thuật của chủ nghĩa phát xít.',
      examTakeaway: 'Phân tích nhịp thơ gấp khúc và hình ảnh "chàng đi như người mộng du" - tư thế thanh thản của bậc liệt sĩ nghệ thuật.'
    },
    {
      id: 'lorca-3',
      order: 3,
      stanzaTitle: 'Khổ 3: Sự thăng hoa và biến ảo kỳ diệu của âm thanh tiếng đàn ghi-ta',
      verses: 'tiếng ghi-ta nâu\nbầu trời cô gái ấy\ntiếng ghi-ta lá xanh biết mấy\ntiếng ghi-ta tròn bọt nước vỡ tan\ntiếng ghi-ta ròng ròng\nmáu chảy',
      artisticDevices: 'Điệp từ "tiếng ghi-ta"; ẩn dụ chuyển đổi cảm giác qua các gam màu (nâu, xanh, bọt nước vỡ, ròng ròng máu chảy); nghệ thuật tượng trưng siêu thực.',
      detailedInterpretation: 'Âm thanh tiếng đàn được vật chất hóa qua muôn ngàn sắc thái thị giác và cảm xúc: "tiếng ghi-ta nâu" gợi màu gỗ mộc của cây đàn, màu da bánh mật và tình yêu quê hương Tây Ban Nha; "tiếng ghi-ta lá xanh" gợi niềm hy vọng trẻ trung và tình yêu đôi lứa; "tiếng ghi-ta tròn bọt nước vỡ tan" là bi kịch tan vỡ đột ngột của một kiếp tài hoa; và cuối cùng là hình tượng đau đớn đến thắt lòng: "tiếng ghi-ta ròng ròng máu chảy". Tiếng đàn không chỉ là âm thanh mà là một sinh thể sống đang chịu nỗi đau thể xác cùng người nghệ sĩ.',
      thematicSignificance: 'Tiếng đàn ghi ta hóa thành biểu tượng bất tử cho sự sống, tình yêu và linh hồn của Lor-ca.',
      examTakeaway: 'Phân tích sự biến đổi của hình ảnh tiếng đàn từ vô hình thành hữu hình mang tính biểu tượng cao.'
    },
    {
      id: 'lorca-4',
      order: 4,
      stanzaTitle: 'Khổ 4-6: Sự bất tử của nghệ thuật và cuộc giải thoát thanh thản vào cõi vĩnh hằng',
      verses: 'không ai chôn cất tiếng đàn\ntiếng đàn như cỏ mọc hoang\ngiọt nước mắt vầng trăng\nlong lanh trong đáy giếng\n\nđường chỉ tay đã đứt\ndòng sông rộng vô cùng\nLor-ca bơi sang ngang\ntrên chiếc ghi-ta màu bạc\n\nchàng ném lá bùa vào xoáy nước\nchàng ném trái tim mình\nvào lặng yên bất chợt\nli-la li-la li-la...',
      artisticDevices: 'So sánh "tiếng đàn như cỏ mọc hoang"; hình ảnh đáy giếng lịch sử; biểu tượng "chiếc ghi-ta màu bạc"; hành động dứt khoát "ném lá bùa", "ném trái tim".',
      detailedInterpretation: 'Câu thơ "Không ai chôn cất tiếng đàn" bắt nguồn từ di chúc của Lor-ca: "Khi tôi chết hãy chôn tôi với cây đàn ghi-ta". Thanh Thảo xót xa trước việc nghệ thuật của Lor-ca bị lãng quên hoặc không ai đủ sức tiếp nối, nhưng đồng thời khẳng định: tiếng đàn ấy sẽ tự sinh sôi như "cỏ mọc hoang" với sức sống mãnh liệt không gì tiêu diệt nổi. Hành động Lor-ca "bơi sang ngang trên chiếc ghi-ta màu bạc" và "ném trái tim mình vào lặng yên bất chợt" là cuộc giải thoát thanh thản, bước vào cõi bất tử vĩnh hằng của nghệ thuật.',
      thematicSignificance: 'Khẳng định sức sống bất diệt của cái Đẹp và tư tưởng giải thoát triết học sâu sắc.',
      examTakeaway: 'Phân tích hình tượng "tiếng đàn như cỏ mọc hoang" và sự bất tử của nghệ thuật Lor-ca trong tâm thức nhân loại.'
    }
  ],

  'cam-hoai': [
    {
      id: 'ch-1',
      order: 1,
      stanzaTitle: 'Hai câu đề (Câu 1-2): Nỗi niềm bùi ngùi trước việc đời dằng dặc và tuổi già',
      verses: 'Thế sự du du nại lão hà,\nVô cùng thiên địa nhập hàm ca.\n(Việc đời dằng dặc mà ta đã già rồi biết làm sao,\nĐất trời vô tận thu cả vào trong khúc hát say).',
      artisticDevices: 'Từ láy tượng thanh - tượng thái "du du" (dằng dặc, mông lung); câu hỏi tu từ "nại lão hà" (biết làm sao); tương phản giữa cái vô tận của đất trời ("vô cùng thiên địa") và sự hữu hạn của đời người; hành động "nhập hàm ca" (hát nghêu ngao trong cơn say).',
      detailedInterpretation: 'Hai câu đề mở ra một không gian vũ trụ bao la và dòng thời gian vô tận. Người anh hùng Đặng Dung đứng giữa đất trời nhìn việc đời trôi đi dằng dặc ("thế sự du du") mà thảng thốt nhận ra tuổi già đã ập đến ("nại lão hà"). Câu hỏi tu từ là tiếng thở dài nén chặt của bậc chí sĩ khi chí lớn chưa thành mà sức lực đã hao mòn. Cụm từ "nhập hàm ca" không phải là sự buông xuôi hưởng lạc trần tục, mà là cách mượn chén rượu say để nuốt nghẹn nỗi đau thời thế, dồn nén cả càn khôn vào một khúc tráng ca bi tráng.',
      thematicSignificance: 'Khắc họa nỗi đau đớn, trăn trở của người tráng sĩ yêu nước trước sự bất lực của kiếp người trước định mệnh thời gian.',
      examTakeaway: 'Phân tích từ "du du" và "nại lão hà" để làm rõ tâm trạng bi kịch thời thế nhưng không hề bi lụy của Đặng Dung.'
    },
    {
      id: 'ch-2',
      order: 2,
      stanzaTitle: 'Hai câu thực (Câu 3-4): Triết lý sâu sắc về Thời và Vận của kẻ anh hùng',
      verses: 'Thời lai đồ điếu thành công dị,\nVận khứ anh hùng ẩm hận đa.\n(Gặp thời, kẻ làm nghề mổ lợn, câu cá cũng dễ dàng thành công;\nLỡ vận, bậc anh hùng đành phải nuốt hận nhiều).',
      artisticDevices: 'Phép đối chuẩn mực: "Thời lai" (gặp thời) đối với "Vận khứ" (hết vận); "đồ điếu" (kẻ hàng thịt, người câu cá) đối với "anh hùng"; "thành công dị" (dễ thành công) đối với "ẩm hận đa" (nuốt hận nhiều); điển cố lịch sử (Phàn Khoái làm nghề mổ lợn, Hàn Tín làm nghề câu cá).',
      detailedInterpretation: 'Đặng Dung đúc kết quy luật khắc nghiệt của lịch sử: Khi thời vận đã đến, những người xuất thân bình dân như Phàn Khoái, Hàn Tín cũng có thể phò vua dựng nên đại nghiệp vẻ vang. Trái lại, khi vận nước đã suy vi, thế cờ đã lỡ, dẫu là bậc anh hùng cái thế mưu lược tột bậc cũng đành ngậm đắng nuốt cay ("ẩm hận đa"). Chữ "ẩm hận" (uống hận) đặc tả nỗi uất nghẹn ngấm sâu vào từng thớ thịt tâm can của một dũng tướng bất lực nhìn giang sơn rơi vào tay giặc Minh hung tàn.',
      thematicSignificance: 'Cái nhìn hiện thực tỉnh táo, đau đớn nhưng đầy kiêu hãnh của bậc tráng sĩ trước nghịch cảnh lịch sử.',
      examTakeaway: 'Khai thác nghệ thuật đối lập và cách dùng điển tích "đồ điếu" để khẳng định tư tưởng triết luận sắc bén của thơ ca trung đại.'
    },
    {
      id: 'ch-3',
      order: 3,
      stanzaTitle: 'Hai câu luận (Câu 5-6): Khát vọng xoay chuyển càn khôn và bi kịch bất lực',
      verses: 'Trí chúa hữu hoài phù địa trục,\nTây nhung vô lực vãn thiên hà.\n(Giúp chúa những muốn nâng trục đất;\nGiặt giáp không sức kéo dòng sông Ngân xuống).',
      artisticDevices: 'Hình tượng mang tầm vóc vũ trụ kỳ vĩ: "phù địa trục" (nâng trục đất), "vãn thiên hà" (kéo sông Ngân Hà); phép đối chỉnh; điển cố "vãn thiên hà" (mượn ý Đỗ Phủ muốn kéo sông Ngân Hà xuống để rửa sạch giáp binh, dập tắt chiến tranh).',
      detailedInterpretation: 'Hai câu thơ vút cao với tầm vóc kỳ vĩ sánh ngang trời đất. "Phù địa trục" thể hiện ý chí phi thường muốn xoay chuyển càn khôn, nâng đỡ vương triều Hậu Trần đang sụp đổ. Thế nhưng hiện thực éo le đối đáp lại: "vô lực vãn thiên hà" - không đủ sức kéo dòng sông Ngân xuống để rửa sạch vũ khí chiến tranh, đem lại thái bình cho trăm họ. Nỗi bất lực ở đây không phải do hèn kém tài năng, mà bởi lực lượng quân Minh quá bạo tàn, thời thế không thuận lợi. Sự tương phản giữa khát vọng vĩ đại và hiện thực nghiệt ngã càng tôn lên nhân cách cao thượng của Đặng Dung.',
      thematicSignificance: 'Tôn vinh chí khí anh hùng ngút trời của con người thời Hậu Trần: dẫu ngã xuống vẫn ngẩng cao đầu quyết tử vì giang sơn.',
      examTakeaway: 'Phân tích hai hình tượng vũ trụ "phù địa trục" và "vãn thiên hà" để thấy được bút pháp tráng lệ của văn học Lý - Trần.'
    },
    {
      id: 'ch-4',
      order: 4,
      stanzaTitle: 'Hai câu kết (Câu 7-8): Tượng đài bi tráng - Người tráng sĩ đầu bạc mài gươm dưới trăng',
      verses: 'Quốc thù vị báo đầu tiên bạch,\nKỷ độ Long Tuyền đới nguyệt ma.\n(Nợ nước chưa trả xong mà đầu đã bạc;\nĐã bao phen mang gươm báu Long Tuyền mài dưới ánh trăng).',
      artisticDevices: 'Tương phản giữa món nợ nước chưa trả ("quốc thù vị báo") và mái đầu bạc trắng ("đầu tiên bạch"); biểu tượng kiếm báu "Long Tuyền"; hình tượng tráng lệ "đới nguyệt ma" (mài gươm dưới bóng trăng).',
      detailedInterpretation: 'Đây là hai câu thơ tráng lệ và bi thương bậc nhất trong lịch sử thi ca dân tộc. Mái đầu bạc trước tuổi vì ngày đêm đau đáu lo toan vận mệnh dân tộc. Nhưng không hề buông xuôi gươm giáo, người dũng tướng già ấy đêm đêm vẫn mang thanh bảo kiếm Long Tuyền ra mài dưới ánh trăng ("Kỷ độ Long Tuyền đới nguyệt ma"). Ánh thép sắc bén của lưỡi gươm hòa quyện vào ánh sáng lạnh lùng của vầng trăng đại ngàn, phản chiếu ánh mắt rực lửa căm thù và ý chí chiến đấu đến hơi thở cuối cùng. Lý Tử Tấn từng thán phục: "Phi hào kiệt chi sĩ bất năng" - không phải đấng hào kiệt muôn đời thì không thể viết nổi câu thơ tuyệt mỹ dường ấy.',
      thematicSignificance: 'Tạc nên bức tượng đài bất tử về khí phách kiên trung, dũng liệt của người anh hùng dân tộc Việt Nam thời trung đại.',
      examTakeaway: 'Bình luận sâu sắc về hình ảnh "mài gươm dưới trăng" và liên hệ với hình tượng người lính Tây Tiến trong thơ Quang Dũng.'
    }
  ],

  'mo-nguyen-tieu': [
    {
      id: 'mo-1',
      order: 1,
      stanzaTitle: 'Bài "Mộ" (Chiều tối) - Hai câu đầu: Bức tranh thiên nhiên hoàng hôn nơi rừng núi',
      verses: 'Quyện điểu quy lâm tầm túc thụ,\nCô vân mạn mạn độ thiên không.\n(Chim mỏi về rừng tìm chốn ngủ,\nChòm mây lẻ loi trôi lơ lửng giữa tầng không).',
      artisticDevices: 'Bút pháp chấm phá cổ điển phương Đông; hình ảnh ước lệ "quyện điểu" (cánh chim mỏi), "cô vân" (chòm mây lẻ loi); từ láy "mạn mạn" (trôi lững lờ, chậm chạp); tương quan không gian bao la và điểm nhìn người tù.',
      detailedInterpretation: 'Khung cảnh hoàng hôn chốn rừng núi hiểm trở hiện lên qua hai nét chấm phá tài hoa. Cánh chim bay về rừng sau một ngày mỏi cánh kiếm ăn ("quyện điểu"), và một chòm mây cô đơn trôi lững lờ nơi đáy trời xanh thẳm ("cô vân mạn mạn"). Ẩn sau cảnh vật là tâm trạng của người tù Hồ Chí Minh: sau một ngày bị đày ải xiềng xích trên dặm đường dài, Người cảm nhận sâu sắc sự mệt mỏi của cánh chim và sự cô đơn của chòm mây. Sự đồng cảm ấy toát lên tình yêu thiên nhiên mênh mông và phong thái ung dung tự tại, vượt lên trên gông cùm thể xác.',
      thematicSignificance: 'Vẻ đẹp tâm hồn chiến sĩ - thi sĩ: hòa mình vào nhịp sống của vũ trụ với phong thái tự do tuyệt đối.',
      examTakeaway: 'Phân tích bản dịch thơ của Nam Trân (bỏ quên chữ "cô" và dịch từ "mạn mạn" thành "trôi nhẹ") để làm sáng tỏ nguyên tác chữ Hán hàm súc của Bác.'
    },
    {
      id: 'mo-2',
      order: 2,
      stanzaTitle: 'Bài "Mộ" (Chiều tối) - Hai câu sau: Bức tranh đời sống ấm áp và nhãn tự "Hồng"',
      verses: 'Sơn thôn thiếu nữ ma bao túc,\nBao túc ma hoàn lô dĩ hồng.\n(Cô gái xóm núi xay ngô,\nXay ngô vừa xong thì lò than đã rực hồng).',
      artisticDevices: 'Điệp từ liên hoàn vắt dòng ("ma bao túc" -> "bao túc ma hoàn"); từ ngữ tả thực đời sống bình dị; nhãn tự "hồng" làm bừng sáng toàn bài; sự vận động từ bóng tối sang ánh sáng.',
      detailedInterpretation: 'Bức tranh thơ chuyển biến bất ngờ từ thiên nhiên hoang vắng sang hơi ấm của đời sống con người. Hình ảnh cô thôn nữ miền sơn cước khỏe khoắn xay ngô tối gợi sự lao động cần cù, ấm áp tình người. Điệp vòng "ma bao túc / bao túc ma hoàn" tái hiện vòng quay nhịp nhàng, kiên nhẫn của chiếc cối xay đá. Và khi công việc hoàn thành, chữ "hồng" (lò than rực hồng) xuất hiện ở cuối bài thơ như một con mắt thần (nhãn tự). Không cần dùng chữ "tối", người đọc vẫn nhận biết màn đêm buông xuống nhờ sắc đỏ rực của lò than. Chữ "hồng" xua tan cái lạnh giá, tăm tối, thắp sáng niềm tin lạc quan cách mạng.',
      thematicSignificance: 'Quy luật vận động kỳ diệu của thơ Hồ Chí Minh: luôn hướng về sự sống, con người và ánh sáng tương lai.',
      examTakeaway: 'Bình luận về chữ "hồng" - nhãn tự của bài thơ, minh chứng cho "chất thép" hòa quyện trong "chất tình" thi ca của Bác.'
    },
    {
      id: 'nt-1',
      order: 3,
      stanzaTitle: 'Bài "Nguyên tiêu" (Rằm tháng Giêng) - Hai câu đầu: Đêm trăng xuân chiến khu ngập tràn ánh sáng',
      verses: 'Kim dạ nguyên tiêu nguyệt chính viên,\nXuân giang, xuân thủy tiếp xuân thiên.\n(Đêm nay rằm tháng Giêng trăng tròn vành vạnh,\nSông xuân, nước xuân nối liền với trời xuân).',
      artisticDevices: 'Điệp từ "xuân" ba lần liên tiếp ("xuân giang, xuân thủy, xuân thiên"); hình tượng trăng tròn "nguyệt chính viên"; không gian mở rộng ba chiều kết nối sông, nước và trời.',
      detailedInterpretation: 'Hai câu đầu mở ra một bức tranh thiên nhiên tuyệt mỹ trong đêm rằm đầu năm. Trăng tròn vẹn nguyên ("nguyệt chính viên") tỏa ánh sáng lung linh khắp núi rừng Việt Bắc. Ba chữ "xuân" dồn dập nối tiếp nhau: dòng sông mùa xuân, làn nước mùa xuân vươn tới tận vòm trời mùa xuân bát ngát. Sức sống của mùa xuân và ánh trăng như hòa quyện vào nhau, biểu hiện tâm hồn dạt dào niềm vui, sự phơi phới lạc quan của vị lãnh tụ trước khí thế đi lên của cuộc kháng chiến toàn quốc.',
      thematicSignificance: 'Bản tụng ca vẻ đẹp tràn trề nhựa sống của đất trời Việt Bắc và tâm hồn thi sĩ thanh cao của Bác.',
      examTakeaway: 'Phân tích nghệ thuật dùng ba chữ "xuân" và không gian bát ngát gợi liên tưởng đến cảm hứng thơ Đường cổ điển.'
    },
    {
      id: 'nt-2',
      order: 4,
      stanzaTitle: 'Bài "Nguyên tiêu" (Rằm tháng Giêng) - Hai câu sau: Con thuyền kháng chiến chở đầy ánh trăng',
      verses: 'Yên ba thâm xứ đàm quân sự,\nDạ bán quy lai nguyệt mãn thuyền.\n(Nơi khói sóng mịt mù bàn việc quân quốc trọng đại,\nNửa đêm trở về thuyền chở đầy ánh trăng).',
      artisticDevices: 'Không gian khói sóng cổ điển "yên ba thâm xứ"; tương phản - hòa hợp giữa việc quân hệ trọng ("đàm quân sự") và thi hứng lãng mạn ("nguyệt mãn thuyền"); hình tượng chiếc thuyền chở trăng.',
      detailedInterpretation: 'Nơi bí mật giữa sương khói sông Đáy, Bác cùng Trung ương Đảng đang bàn việc quân quốc đại sự để chỉ đạo cuộc kháng chiến chống Pháp. Việc nước hệ trọng, căng thẳng ngàn cân treo sợi tóc, nhưng khi công việc hoàn tất lúc nửa đêm ("dạ bán quy lai"), con thuyền nhỏ trở về bỗng chốc ngập tràn ánh trăng vàng ("nguyệt mãn thuyền"). Hình ảnh "thuyền chở đầy ánh trăng" là đỉnh cao của sự thăng hoa lãng mạn cách mạng: phong thái ung dung, tự tại của người chiến sĩ cách mạng làm chủ thời cuộc và hoàn cảnh.',
      thematicSignificance: 'Sự thống nhất hoàn mỹ giữa vị thế người lãnh tụ cứu nước kiên định và cốt cách tao nhã của bậc đại thi hào dân tộc.',
      examTakeaway: 'Bình luận về sự chuyển hóa giữa hai câu đầu và hai câu cuối: từ trăng sông nước đến trăng tràn ngập lòng thuyền lãnh tụ.'
    }
  ],

  'voi-vang': [
    {
      id: 'vv-1',
      order: 1,
      stanzaTitle: 'Đoạn 1 (Câu 1-4): Ước muốn kỳ lạ muốn đoạt quyền tạo hóa để lưu giữ sắc hương',
      verses: 'Tôi muốn tắt nắng đi\nCho màu đừng nhạt mất;\nTôi muốn buộc gió lại\nCho hương đừng bay đi.',
      artisticDevices: 'Thể thơ ngũ ngôn ngắn, dồn dập; điệp ngữ cấu trúc "Tôi muốn... Cho..."; đại từ nhân xưng "Tôi" khẳng định cái tôi cá nhân mãnh liệt; động từ đoạt quyền tự nhiên "tắt nắng", "buộc gió".',
      detailedInterpretation: 'Bốn câu mở đầu cất lên như một mệnh lệnh táo bạo của cái tôi cá nhân thời đại Thơ Mới. Xuân Diệu muốn làm một việc phi lý đối với quy luật vũ trụ: "tắt nắng", "buộc gió". Nhưng đó không phải là sự ngông cuồng vô lối, mà là khát vọng tha thiết đến cháy bỏng muốn ngưng đọng thời gian, níu giữ những sắc màu rực rỡ và hương thơm ngọt ngào của trần gian trần thế khỏi bị phai tàn theo quy luật tạo hóa.',
      thematicSignificance: 'Tuyên ngôn thức tỉnh của cái tôi cá nhân: trân quý từng hạt nắng, ngọn gió của sự sống trần thế.',
      examTakeaway: 'Phân tích cái tôi Xuân Diệu dám đứng ngang hàng với hóa công để đòi quyền lưu giữ cái đẹp của cuộc đời.'
    },
    {
      id: 'vv-2',
      order: 2,
      stanzaTitle: 'Đoạn 2 (Câu 5-13): Bức tranh thiên đường mặt đất mùa xuân tràn ngập nhựa sống tình tứ',
      verses: 'Của ong bướm này đây tuần tháng mật;\nNày đây hoa của đồng nội xanh rì;\nNày đây lá của cành tơ phơ phất;\nCủa yến anh này đây khúc tình si;\nVà này đây ánh sáng chớp hàng mi,\nMỗi buổi sớm thần Vui hằng gõ cửa;\nTháng giêng ngon như một cặp môi gần;',
      artisticDevices: 'Điệp từ điệp ngữ dồn dập "Này đây... Của..."; ẩn dụ so sánh chuyển đổi cảm giác thần tình "Tháng giêng ngon như một cặp môi gần"; nhân hóa mặt trời "ánh sáng chớp hàng mi", "thần Vui gõ cửa".',
      detailedInterpretation: 'Xuân Diệu đã đốt cảnh Bồng Lai mà xua ai nấy về hạ giới! Dưới con mắt say đắm của thi sĩ, cõi trần này chính là thiên đường đẹp đẽ nhất: ong bướm say đắm trong tuần trăng mật, đồng nội xanh rì hoa lá, cành tơ phơ phất gió xuân, yến anh ríu rít bản hợp ca tình ái. Đỉnh cao nghệ thuật là câu thơ độc nhất vô nhị: "Tháng giêng ngon như một cặp môi gần". Tháng giêng - khái niệm thời gian trừu tượng - được cụ thể hóa thành một vật thể có vị giác ("ngon"), mang hình hài quyến rũ của đôi môi người thiếu nữ đang hé mở đón nhận tình yêu. Xuân Diệu đã lấy con người giữa tuổi trẻ làm chuẩn mực cho mọi vẻ đẹp của vũ trụ.',
      thematicSignificance: 'Phát hiện vĩ đại của Thơ Mới: Thiên đường không ở cõi tiên xa xôi mà hiện hữu ngay giữa mặt đất bình dị này.',
      examTakeaway: 'Bình luận sâu sắc về câu thơ "Tháng giêng ngon như một cặp môi gần" - bước ngoặt thi pháp lấy vẻ đẹp con người làm thước đo tự nhiên.'
    },
    {
      id: 'vv-3',
      order: 3,
      stanzaTitle: 'Đoạn 3 (Câu 14-29): Cảm quan bi kịch về thời gian tuyến tính và nỗi tiếc nuối tuổi xuân',
      verses: 'Xuân đương tới, nghĩa là xuân đương qua,\nXuân còn non, nghĩa là xuân sẽ già,\nMà xuân hết, nghĩa là tôi cũng mất.\nLòng tôi rộng, nhưng lượng trời cứ chật,\nKhông cho dài thời trẻ của nhân gian,\nNói làm chi rằng xuân vẫn tuần hoàn,\nNếu tuổi trẻ chẳng hai lần thắm lại!\nCòn trời đất, nhưng chẳng còn tôi mãi,\nNên bâng khuâng tôi tiếc cả đất trời;',
      artisticDevices: 'Cặp quan hệ từ chỉ logic nhân quả "nghĩa là"; phép điệp đối lập (tới - qua, non - già, rộng - chật); câu cảm thán tiếc nuối; triết lý về thời gian một đi không trở lại.',
      detailedInterpretation: 'Khác với quan niệm tuần hoàn tròn trịa của người xưa (hết xuân lại đến xuân), Xuân Diệu nhìn nhận thời gian bằng cảm quan hiện đại phương Tây: thời gian là dòng chảy tuyến tính một chiều nghiệt ngã. Trong mỗi bước đi của hiện tại đã hàm chứa mầm mống của sự mất mát chia ly ("đương tới nghĩa là đương qua"). Đời người thì hữu hạn trong khi vũ trụ thì vô cùng. Nỗi sợ hãi cái chết và tuổi già ập đến khiến nhà thơ thốt lên cay đắng: "Còn trời đất nhưng chẳng còn tôi mãi". Nỗi tiếc xuân ở đây chính là biểu hiện cao độ nhất của lòng yêu đời tha thiết.',
      thematicSignificance: 'Bi kịch hiện sinh của kiếp người trước thời gian vô tình, đánh thức ý thức sâu sắc về giá trị từng giây phút tuổi trẻ.',
      examTakeaway: 'Đối chiếu quan niệm thời gian tuần hoàn của văn học trung đại với quan niệm thời gian tuyến tính hiện đại của Xuân Diệu.'
    },
    {
      id: 'vv-4',
      order: 4,
      stanzaTitle: 'Đoạn 4 (Câu 30-44): Khát vọng sống vội vàng, cuống quýt để tận hưởng và tận hiến cho cuộc đời',
      verses: 'Mau đi thôi! Mùa chưa ngả chiều hôm,\nTa muốn ôm\nCả sự sống mới bắt đầu mơn mởn;\nTa muốn riết mây đưa và gió lượn,\nTa muốn say cánh bướm với tình yêu,\nTa muốn thâu trong một cái hôn nhiều\nVà non nước, và cây, và cỏ rạng,\nCho chếnh choáng mùi thơm, cho đã đầy ánh sáng,\nCho no nê thanh sắc của thời tươi;\n- Hỡi xuân hồng, ta muốn cắn vào ngươi!',
      artisticDevices: 'Lời giục giã "Mau đi thôi!"; câu thơ 3 chữ "Ta muốn ôm" đứng riêng một dòng tạo điểm nhấn mạnh mẽ; hệ thống động từ mạnh tăng tiến ("ôm -> riết -> say -> thâu -> cắn"); liên từ "và", "cho" điệp liên tiếp; hình ảnh ẩn dụ "Hỡi xuân hồng".',
      detailedInterpretation: 'Từ nỗi lo âu thời gian trôi mau, Xuân Diệu không tìm đến lối sống thoát ly yếm thế mà chuyển hóa thành một nguồn năng lượng sống bùng nổ mãnh liệt: "Mau đi thôi!". Câu thơ "Ta muốn ôm" đứng giữa trang thơ như vòng tay khao khát dang rộng đón lấy toàn bộ vũ trụ. Chuỗi động từ tăng tiến bộc lộ khát vọng chiếm lĩnh sự sống ở mức độ thèm thuồng, say đắm nhất: từ "ôm" âu yếm đến "riết" chặt chẽ, từ "say" mê mẩn đến "thâu" trọn vẹn và đạt tới đỉnh điểm cuồng nhiệt trong câu kết: "Hỡi xuân hồng, ta muốn cắn vào ngươi!". Mùa xuân như một trái ngọt chín mọng quyến rũ, và nhà thơ muốn dùng toàn bộ giác quan để thưởng thức trọn vẹn hương vị của nó.',
      thematicSignificance: 'Tuyên ngôn sống "Vội vàng" tích cực: Sống mãnh liệt, sống hết mình, cống hiến trọn vẹn từng phút giây của tuổi xuân cho cuộc đời.',
      examTakeaway: 'Phân tích hệ thống động từ tăng tiến và câu kết táo bạo "ta muốn cắn vào ngươi" để làm sáng tỏ phong cách thơ sôi nổi đắm say của Xuân Diệu.'
    }
  ]
};

export const PROSE_ANALYSIS_DATA: Record<string, ProseAnalysisItem[]> = {
  'nguoi-lai-do-song-da': [
    {
      id: 'sld-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Lời đề từ độc đáo và dòng chảy nghịch ngợm của sông Đà',
      excerpt: '"Đẹp vậy thay, tiếng hát trên dòng sông" (W. Xcốt) và "Chúng thủy giai đông tẩu / Đà giang độc bắc lưu" (Nguyễn Quang Bích)',
      artisticHighlights: 'Hai câu đề từ cô đọng: một câu tôn vinh chất thơ trữ tình, một câu khẳng định cá tính ngỗ ngược độc tôn.',
      deepAnalysis: 'Nguyễn Tuân mở đầu tùy bút bằng hai lời đề từ mang tính định hướng thẩm mỹ sâu sắc. Câu thơ của nhà văn Scotland khẳng định sông Đà là khúc ca say đắm của nghệ thuật. Nhưng câu thơ chữ Hán thứ hai lại vạch rõ bản tính quật cường: trong khi trăm sông trên cõi đất nước đều chảy về hướng Đông ra biển cả, thì riêng con sông Đà lại chảy ngược lên hướng Bắc ("Độc bắc lưu"). Sông Đà từ chối sự tầm thường, mang cá tính của một kẻ nổi loạn kiêu hùng.',
      thematicSignificance: 'Khắc họa trọn vẹn hai nét tính cách đối lập tạo nên diện mạo kỳ vĩ của sông Đà: vừa hung bạo vừa trữ tình.',
      examTakeaway: 'Phân tích vai trò định hướng của lời đề từ đối với toàn bộ cấu trúc tùy bút của Nguyễn Tuân.'
    },
    {
      id: 'sld-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Vách đá bờ sông chẹt lòng sông và độ sâu ghê rợn',
      excerpt: '"Mặt sông chỗ ấy chỉ lúc đúng ngọ mới có mặt trời... đứng bên này bờ nhẹ tay ném hòn đá qua bên kia vách. Ngồi trong khoang đò qua quãng ấy, đang mùa hè mà cũng thấy lạnh, cảm giác như đứng ở hè một cái ngõ mà ngóng lên một khung cửa sổ nào trên cái tầng nhà thứ mấy nào vừa tắt phụt đèn điện."',
      artisticHighlights: 'So sánh liên tưởng hiện đại giữa thiên nhiên hoang dã và phố thị cao tầng; huy động giác quan thị giác và xúc giác.',
      deepAnalysis: 'Nguyễn Tuân đo độ hẹp của lòng sông bằng hai cách tinh tế: độ chiếu sáng của mặt trời (chỉ đúng giữa trưa mới lọt tia nắng) và tầm ném của một hòn đá nhỏ. Bằng trí tưởng tượng kỳ tài, ông đưa người đọc từ chốn đại ngàn về với ngõ hẹp phố cổ Hà Nội trong một đêm hè mất điện, đem lại cảm giác ớn lạnh, ngột ngạt và sự rợn ngợp trước các vách đá sừng sững cao vút như những thành trì cấm địa.',
      thematicSignificance: 'Mở đầu cho chuỗi miêu tả sự hung bạo của sông Đà bằng đòn bẩy không gian chật hẹp, hiểm ác.',
      examTakeaway: 'Chỉ ra nét độc đáo trong phong cách Nguyễn Tuân: lấy hình ảnh văn minh hiện đại để soi chiếu thiên nhiên hoang sơ.'
    },
    {
      id: 'sld-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Hút nước quãng Tà Mường Vát rùng rợn như giếng bê tông xoáy tít',
      excerpt: '"Nước thở và vật như cái giếng bê tông xoáy tít... tiếng nước nghe như tiếng một ngàn con trâu mộng đang lồng lộn giữa rừng vầu rừng sứa bị cháy bùng bùng..."',
      artisticHighlights: 'Nghệ thuật nhân hóa âm thanh, so sánh đa tầng, liên tưởng điện ảnh và hình ảnh động dữ dội.',
      deepAnalysis: 'Con sông Đà được biến hóa thành một con thủy quái khổng lồ đang thở phì phò và rình rập nuốt chửng những chiếc thuyền xấu số. Những cái hút nước xoáy tít như những miệng phễu hút sâu xuống đáy sông. Nguyễn Tuân kết hợp tài tình kiến trúc (giếng bê tông) và âm thanh cháy rừng của ngàn con trâu mộng lồng lộn để diễn tả sức tàn phá khủng khiếp của dòng nước dữ.',
      thematicSignificance: 'Tạo dựng một đấu trường khốc liệt giữa con người và thiên nhiên dữ dội.',
      examTakeaway: 'Bình luận về sự phong phú vô tận trong kho từ vựng và trường liên tưởng độc đáo của Nguyễn Tuân.'
    },
    {
      id: 'sld-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Ba trùng vi thạch trận và cuộc chiến sinh tử của người lái đò',
      excerpt: '"Trùng vi thứ nhất mở ra năm cửa trận, có bốn cửa tử, một cửa sinh... Trùng vi thứ hai tăng thêm nhiều cửa tử, cửa sinh bố trí lệch sang bờ hữu... Trùng vi thứ ba ít cửa hơn nhưng bên phải bên trái đều là luồng chết, luồng sinh nằm ngay giữa bọn đá hậu vệ..."',
      artisticHighlights: 'Vận dụng thuật ngữ quân sự, võ thuật, binh pháp cổ xưa để miêu tả trận thủy chiến;',
      deepAnalysis: 'Đá sông Đà không vô tri mà được tổ chức thành một đội quân ma mãnh có mưu mô hiểm độc: đá tiền vệ dụ dỗ, đá hậu vệ khóa chặt, đá tướng hung hãn. Đối mặt với bầy thủy quái hung hãn, người lái đò xuất hiện như một viên tướng tài ba: nắm chắc binh pháp của thần sông thần đá, cưỡi lên thác ghềnh như cưỡi hổ, tay lái ra hoa vượt qua từng cửa tử để đưa con thuyền cập bến bình an.',
      thematicSignificance: 'Ca ngợi vẻ đẹp trí dũng và phẩm chất anh hùng của người lao động mới trong công cuộc chinh phục tự nhiên.',
      examTakeaway: 'Phân tích nghệ thuật "tay lái ra hoa" - biến lao động nhọc nhằn hiểm nguy thành nghệ thuật đỉnh cao.'
    },
    {
      id: 'sld-5',
      order: 5,
      sectionTitle: 'Phân đoạn 5: Vẻ đẹp trữ tình - Dòng sông như áng tóc và sắc nước biến ảo',
      excerpt: '"Con Sông Đà tuôn dài tuôn dài như một áng tóc trữ tình, đầu tóc chân tóc ẩn hiện trong mây trời Tây Bắc bung nở hoa ban hoa gạo tháng hai... Mùa xuân dòng xanh ngọc bích... Mùa thu nước Sông Đà lừ lừ chín đỏ như da một người bầm đi vì rượu bữa."',
      artisticHighlights: 'So sánh nhân hóa duy mỹ; ngòi bút hội họa chấm phá màu sắc tinh vi; ngôn từ mềm mại giàu nhạc tính.',
      deepAnalysis: 'Từ đỉnh cao máy bay nhìn xuống, dòng sông dữ bỗng hóa thành một người thiếu nữ kiều diễm với mái tóc mây bồng bềnh phủ đầy sắc hoa ban hoa gạo. Nguyễn Tuân tinh tế phân biệt màu nước sông Đà: không đục ngầu như sông Hồng mà mùa xuân trong vắt sắc "xanh ngọc bích" quý phái, mùa thu lại mang sắc đỏ bầm dữ dội đầy cá tính.',
      thematicSignificance: 'Chất thơ lãng mạn bù đắp và tôn vinh nét đẹp văn hóa của sông núi Tây Bắc.',
      examTakeaway: 'Bình luận về tình yêu tha thiết với giang sơn đất nước thể hiện qua từng nét cọ màu sắc của tác giả.'
    }
  ],

  'ai-da-dat-ten-cho-dong-song': [
    {
      id: 'sh-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Sông Hương ở thượng nguồn - Bản trường ca của rừng già và cô gái Digan',
      excerpt: '"Sông Hương là một bản trường ca của rừng già, rầm rộ giữa bóng cây đại ngàn, mãnh liệt qua những ghềnh thác, cuộn xoáy như cơn lốc... Nó là một cô gái Di-gan phóng khoáng và man dại..."',
      artisticHighlights: 'Nhân hóa sông Hương thành cô gái Digan; so sánh với bản trường ca; từ ngữ tạo hình mạnh mẽ.',
      deepAnalysis: 'Trước khi trở thành dòng sông êm ả của kinh thành Huế, sông Hương từng có một thời tuổi trẻ sôi nổi, mãnh liệt giữa lòng Trường Sơn. Bản tính hoang dã, tự do của cô gái Digan đại diện cho sức sống nội sinh tiềm tàng, bí ẩn mà thiên nhiên đã hào phóng ban tặng cho dòng sông xứ Huế.',
      thematicSignificance: 'Phát hiện chiều sâu tính cách khởi nguyên của sông Hương mà ít người biết tới.',
      examTakeaway: 'Làm rõ mối quan hệ giữa cội nguồn tự nhiên phóng khoáng và vẻ đẹp thâm trầm văn hóa sau này của dòng sông.'
    },
    {
      id: 'sh-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Sông Hương qua Châu Hóa và cuộc tìm kiếm người tình trong mộng',
      excerpt: '"Như một người gái đẹp nằm ngủ mơ màng giữa cánh đồng Châu Hóa đầy hoa dại được người tình đánh thức... Dòng sông uốn mình qua những khúc quanh liên tục, như một cuộc tìm kiếm có ý thức người tình nhân đích thực của nó."',
      artisticHighlights: 'Mô típ cổ tích "người đẹp ngủ trong rừng"; nhân hóa dòng sông mang tâm trạng người con gái đang yêu.',
      deepAnalysis: 'Rời khỏi rừng già, sông Hương thay đổi diện mạo: trở nên mềm mại, duyên dáng như một thiếu nữ e ấp. Hành trình vượt qua các khúc quanh của dòng sông được Hoàng Phủ Ngọc Tường ví như cuộc hành hương của tình yêu, chủ động kiếm tìm chàng hoàng tử kinh thành Huế để trao gửi trọn vẹn vẻ đẹp trinh nguyên.',
      thematicSignificance: 'Thổi linh hồn tình yêu lãng mạn vào từng ngã rẽ địa lý của dòng chảy.',
      examTakeaway: 'Phân tích nét tài hoa của ngòi bút bút ký khi biến bản đồ địa lý thành bản đồ tâm trạng tình yêu.'
    },
    {
      id: 'sh-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Sông Hương trong lòng thành phố Huế - Điệu nhảy slow tình cảm',
      excerpt: '"Sông Hương trôi đi chậm, thực chậm, cơ hồ chỉ còn là một mặt hồ yên tĩnh... Đấy là điệu slow tình cảm dành riêng cho Huế, có thể cảm nhận được bằng thị giác qua trăm nghìn ánh hoa đăng bồng bềnh trong đêm hội..."',
      artisticHighlights: 'Liên tưởng âm nhạc phương Tây "điệu slow"; so sánh với dòng sông Nê-va của nước Nga; chất thơ lắng đọng.',
      deepAnalysis: 'Khi giáp mặt thành phố Huế, dòng sông như tìm thấy sự thỏa nguyện. Tốc độ dòng chảy chậm lại đến mức ngập ngừng, như không muốn rời xa người tình. Hoàng Phủ Ngọc Tường so sánh sự êm đềm của sông Hương với dòng sông Nê-va chảy xiết của nước Nga để khẳng định: chỉ riêng xứ Huế mới có dòng sông tình cảm, tĩnh tại đến thế.',
      thematicSignificance: 'Tạo nên linh hồn trầm mặc, cổ kính và thi vị đặc trưng của văn hóa cố đô Huế.',
      examTakeaway: 'Phân tích "điệu slow tình cảm" như một giá trị thẩm mỹ và nhịp sống văn hóa ngàn đời của con người xứ Huế.'
    },
    {
      id: 'sh-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Khúc rẽ chia tay Bao Vinh và nét lẳng lơ kín đáo của tình yêu',
      excerpt: '"Rời khỏi kinh thành, sông Hương chếch về hướng chính bắc... nhưng sực nhớ lại điều gì chưa kịp nói, nó đột ngột đổi dòng rẽ về hướng đông để gặp lại thành phố lần cuối ở góc thị trấn Bao Vinh xưa cổ... Đấy là nỗi vương vấn, cả một chút lẳng lơ kín đáo của tình yêu."',
      artisticHighlights: 'Nhân hóa tinh tế; phát hiện tâm lý độc đáo "lẳng lơ kín đáo"; so sánh với nàng Kiều trở lại tìm Kim Trọng.',
      deepAnalysis: 'Quy luật địa lý khiến dòng sông phải rẽ dòng chảy ra biển, nhưng tác giả lại nhìn nhận khúc quanh ấy như một cuộc trở lại của tình nhân chưa nỡ chia tay. Chữ "lẳng lơ kín đáo" không hề thô thiển mà là nét duyên ngầm đáng yêu của người phụ nữ tha thiết yêu và mong được yêu.',
      thematicSignificance: 'Đưa mối quan hệ giữa sông Hương và xứ Huế lên đỉnh cao của tình yêu thủy chung son sắt.',
      examTakeaway: 'Liên hệ với hình ảnh nàng Kiều trong Truyện Kiều để làm nổi bật nét đẹp truyền thống và hiện đại của hình tượng.'
    }
  ],

  'vo-chong-a-phu': [
    {
      id: 'vcap-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Cuộc đời làm dâu gạt nợ và sự tê liệt tinh thần của Mị',
      excerpt: '"Ai ở xa về, thấy một cô gái ngồi quay sợi gai bên tảng đá trước cửa, cạnh tàu ngựa... lúc nào cũng cúi mặt, mặt buồn rười rượi... Ở cái buồng Mị nằm, kín mít, có một chiếc cửa sổ một lỗ vuông bằng bàn tay, lúc nào trông ra cũng chỉ thấy mờ mờ trăng trắng..."',
      artisticHighlights: 'Bút pháp tương phản sắc sảo; chi tiết nghệ thuật biểu tượng (tảng đá, tàu ngựa, buồng lỗ vuông); so sánh con rùa nuôi trong xó cửa.',
      deepAnalysis: 'Tô Hoài đặt nhân vật Mị vào bối cảnh trớ trêu: nhà giàu có nghìn con thuốc phiện, bạc trắng chất đầy hòm nhưng Mị lại lầm lũi ngồi cạnh tảng đá vô tri và chuồng ngựa bẩn thỉu. Căn buồng lỗ vuông bằng bàn tay là biểu tượng cho ngục thất tinh thần, giam hãm tuổi thanh xuân của người con gái vùng cao. Mị bị tước đoạt ý niệm về thời gian và quyền sống, biến thành một công cụ lao động biết nói cam chịu kiếp nô lệ.',
      thematicSignificance: 'Bản cáo trạng đanh thép tố cáo tội ác tàn bạo của chế độ phong kiến miền núi và thần quyền hủ tục.',
      examTakeaway: 'Phân tích nghệ thuật miêu tả ngoại hình và không gian giam hãm để làm bật sự hủy diệt nhân tính của thế lực bạo tàn.'
    },
    {
      id: 'vcap-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Tuổi trẻ của A Phủ và vụ xử kiện quái gở nhà Thống lí Pá Tra',
      excerpt: '"A Phủ mồ côi cha mẹ từ nhỏ, đi làm thuê làm mướn nuôi thân... Lớn lên khỏe như con trâu mộng, biết đúc lưỡi cày, săn bò tót... Đêm hội mùa xuân, thấy A Sử phá đám, A Phủ nhảy xổ vào đánh sấp mặt A Sử... Vụ xử kiện diễn ra trong khói thuốc phiện mù mịt, A Phủ bị đánh tơi bời rồi bị trói thành nô lệ trả nợ..."',
      artisticHighlights: 'Nghệ thuật tương phản giữa sức mạnh tự do và bạo lực cường quyền; cảnh xử kiện đậm chất phong tục Tây Bắc u ám; chi tiết hút thuốc phiện trừ nợ.',
      deepAnalysis: 'A Phủ là hiện thân cho vẻ đẹp hoang dã, dũng cảm và yêu công lý của trai tráng miền cao. Dù nghèo không có vòng bạc cưới vợ, anh vẫn kiêu hãnh ngẩng cao đầu. Hành động trừng trị A Sử - kẻ cậy quyền thế cướp vợ người khác - là sự bộc phát tự nhiên của tinh thần chuộng nghĩa hiệp. Cảnh xử kiện kỳ quặc kéo dài từ sáng đến đêm trong làn khói thuốc phiện mịt mù phơi bày bản chất tàn độc của giai cấp thống trị: dùng luật tục và tiền bạc để biến một chàng trai tự do thành con ở không công truyền đời.',
      thematicSignificance: 'Vạch trần cơ chế đè nén tàn nhẫn của chế độ chúa đất vùng cao: cướp đoạt tự do và bóc lột cùng kiệt người nghèo.',
      examTakeaway: 'Phân tích cảnh xử kiện nhà Pá Tra như một bức tranh thu nhỏ về sự thối nát và bạo ngược của phong kiến miền núi.'
    },
    {
      id: 'vcap-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Sự hồi sinh diệu kỳ trong đêm tình mùa xuân ở Hồng Ngài',
      excerpt: '"Mị nghe tiếng sáo véo von ngoài đường... Mị thấy phơi phới trở lại, trong lòng đột nhiên vui sướng như những đêm Tết ngày trước. Mị trẻ lắm. Mị vẫn còn trẻ. Mị muốn đi chơi!... A Sử trói đứng Mị vào cột nhà bằng thúng sợi đay, nhưng Mị vẫn nghe tiếng sáo đưa Mị đi theo những cuộc chơi..."',
      artisticHighlights: 'Nghệ thuật miêu tả tâm lý nội tâm bậc thầy; chuỗi tác nhân kích thích (cảnh sắc xuân, tiếng sáo, men rượu); đối lập giữa thân xác bị giam cầm và tâm hồn tự do.',
      deepAnalysis: 'Mùa xuân về Hồng Ngài mang theo tiếng sáo gọi bạn tình bay lơ lửng ngoài đường. Tiếng sáo và men rượu ngày Tết đã thẩm thấu vào tâm hồn Mị, đánh thức phần người tưởng chừng đã hóa đá. Lần đầu tiên sau bao năm câm lặng, Mị cất lên tiếng nói tự nhận thức: "Mị còn trẻ. Mị muốn đi chơi!". Dù bị A Sử trói đứng vào cột bằng dây đay thắt chặt da thịt, sợi dây trói chỉ trói được thể xác chứ không thể giam cầm được linh hồn Mị đang bay bổng theo những giai điệu tình yêu.',
      thematicSignificance: 'Khẳng định chân lý: ngọn lửa của khát vọng sống và tự do trong tâm hồn con người có thể bị vùi dập nhưng không bao giờ bị dập tắt.',
      examTakeaway: 'Phân tích diễn biến tâm lý hợp lý, tự nhiên theo từng nấc thang cảm xúc của nhân vật Mị trong đêm tình mùa xuân.'
    },
    {
      id: 'vcap-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Giọt nước mắt của A Phủ và hành động cởi trói tự giải thoát cuộc đời',
      excerpt: '"Mị lé mắt trông sang, thấy một dòng nước mắt lấp lánh rớt xuống hai hõm má đã xám đen lại của A Phủ... Mị rút con dao nhỏ cắt lúa, cắt đứt dây mây... Rồi Mị cũng vụt chạy. Trời tối lắm. Nhưng Mị vẫn băng đi. Mị đuổi kịp A Phủ: A Phủ cho tôi đi với! Ở đây thì chết mất!"',
      artisticHighlights: 'Chi tiết giọt nước mắt mang tính bước ngoặt; nghệ thuật miêu tả hành động dồn dập, quyết liệt; lời thoại giục giã mang tính bước ngoặt số phận.',
      deepAnalysis: 'Ngọn lửa sưởi đêm mùa đông dẫn lối cho ánh mắt Mị chạm vào dòng nước mắt bất lực của chàng trai dũng mãnh A Phủ. Giọt nước mắt ấy làm thức tỉnh lòng trắc ẩn: Mị nhớ lại mình từng bị trói, thấu hiểu nỗi đau cùng cực và nhận ra bản chất tàn độc của nhà Pá Tra. Tình thương người đã chiến thắng nỗi sợ hãi cái chết. Hành động cắt dây mây cứu A Phủ đồng thời là hành động cắt đứt sợi dây oan nghiệt trói buộc đời mình. Bước chân Mị băng qua bóng đêm là bước chân vươn tới ánh sáng tự do của cách mạng.',
      thematicSignificance: 'Đỉnh cao của chủ nghĩa nhân đạo cách mạng: con người bị áp bức đã tự mình vùng dậy đập tan xiềng xích nô lệ.',
      examTakeaway: 'Phân tích sự chuyển biến từ tình thương người đến bản năng tự giải phóng bản thân của nhân vật Mị.'
    },
    {
      id: 'vcap-5',
      order: 5,
      sectionTitle: 'Phân đoạn 5: Cuộc sống mới ở Phiềng Sa - Giác ngộ lý tưởng cách mạng và cầm súng giải phóng quê hương',
      excerpt: '"Sang Phiềng Sa, Mị và A Phủ nên vợ nên chồng, dựng lán trồng trọt... Gặp cán bộ A Châu, A Phủ kết nghĩa anh em và gia nhập đội du kích... Khi giặc Pháp tràn lên càn quét, A Phủ và Mị cùng dân làng cầm súng bắn tỉa bảo vệ bản làng..."',
      artisticHighlights: 'Kết thúc mở rộng sử thi; sự trưởng thành từ tự phát đến tự giác; bức tranh ấm áp của sự đổi đời cách mạng.',
      deepAnalysis: 'Tô Hoài không dừng câu chuyện ở sự trốn chạy cá nhân mà đưa nhân vật đến bến đỗ lịch sử tất yếu: Phiềng Sa. Tại đây, dưới sự dẫn dắt của Đảng và cán bộ A Châu, Mị và A Phủ từ những nạn nhân đau khổ đã trở thành những chiến sĩ du kích dũng cảm bảo vệ quê hương. Tình yêu đôi lứa hòa vào tình yêu đất nước, khẳng định quy luật: muốn có tự do đích thực, con người phải gắn số phận mình với sự nghiệp giải phóng dân tộc.',
      thematicSignificance: 'Chủ nghĩa lạc quan cách mạng: con đường giải phóng cho đồng bào các dân tộc thiểu số là đi theo ngọn cờ của Đảng.',
      examTakeaway: 'Ý nghĩa của phần hai tác phẩm (ở Phiềng Sa) trong việc hoàn thiện thông điệp nhân đạo và cách mạng của Tô Hoài.'
    }
  ],

  'vo-nhat': [
    {
      id: 'vn-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Bối cảnh nạn đói năm 1945 và tình huống "nhặt vợ" chấn động',
      excerpt: '"Cái đói đã tràn đến xóm này tự lúc nào... Người chết như ngả rạ... Mùi ẩm mốc của rác rưởi và mùi gây của xác người... Tràng nhặt được vợ chỉ bằng bốn bát bánh đúc và hai câu hò đùa ngoài chợ."',
      artisticHighlights: 'Tái hiện hiện thực tang tóc khốc liệt; tình huống truyện độc đáo éo le vừa bi vừa hài.',
      deepAnalysis: 'Kim Lân đặt nhân vật vào ranh giới mong manh giữa sự sống và cái chết của nạn đói năm Ất Dậu 1945. Giữa lúc người ta không nuôi nổi thân mình thì Tràng - một gã trai ngụ cư thô kệch - lại dắt về một người vợ. "Nhặt" vợ như nhặt cành cây ngọn cỏ ngoài đường phản ánh số phận rẻ mạt của con người trong nạn đói, nhưng đồng thời tình huống ấy lại là tia chớp thắp sáng hy vọng sống giữa đêm đen tăm tối.',
      thematicSignificance: 'Phản ánh chân thực thảm họa lịch sử và tôn vinh khát vọng hạnh phúc gia đình bất diệt.',
      examTakeaway: 'Phân tích ý nghĩa nhan đề "Vợ nhặt" và giá trị tư tưởng sâu sắc của tình huống truyện độc đáo.'
    },
    {
      id: 'vn-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Cảnh Tràng đưa vợ về xóm ngụ cư - Nụ cười rạng rỡ giữa màn đêm chết chóc',
      excerpt: '"Tràng đi trước, người đàn bà cắp cái thúng con đi sau... Mặt Tràng có một vẻ gì phớn phở khác thường, hai con mắt gà gật của hắn sáng lên lấp lánh... Lũ trẻ con reo lên: Chông vợ hài! Người trong xóm nhìn theo thở dài: Giời đất này còn rước cái của nợ ấy về..."',
      artisticHighlights: 'Nghệ thuật miêu tả tâm lý nhân vật qua cử chỉ và ánh mắt; tương phản giữa không khí tang tóc của xóm ngụ cư và niềm hạnh phúc e ấp của đôi vợ chồng mới.',
      deepAnalysis: 'Hành trình từ chợ về nhà của Tràng và Thị như một luồng gió ấm thổi qua xóm ngụ cư u ám. Tràng tự hào, mãn nguyện như vừa lập được một kỳ tích. Những người dân đói nghèo nhìn theo vừa ái ngại vừa nhen nhóm một chút ghen tị và hy vọng. Niềm hạnh phúc đơn sơ của con người đã xua tan mùi chết chóc bao trùm.',
      thematicSignificance: 'Khẳng định sức mạnh của niềm vui sống: tình yêu thương thắp sáng niềm tin giữa ranh giới sống chết.',
      examTakeaway: 'Phân tích tâm trạng của Tràng và phản ứng của người dân xóm ngụ cư khi thấy Tràng dẫn vợ về.'
    },
    {
      id: 'vn-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Bà cụ Tứ đón nhận nàng dâu mới - Tấm lòng bao dung và những giọt nước mắt nghẹn ngào',
      excerpt: '"Bà lão cúi đầu nín lặng... Bà lão hiểu rồi... Lòng người mẹ nghèo khổ ấy vừa xót xa vừa mừng rui... Bà cụ Tứ nhìn người đàn bà ngồi nép mép giường, lòng ngập tràn thương cảm: Người ta có gặp bước khó khăn này mới đến với con mình... Con ngồi xuống đây cho đỡ mỏi chân..."',
      artisticHighlights: 'Nghệ thuật khắc họa tâm lý người mẹ già nhân hậu bậc thầy; chi tiết "cúi đầu nín lặng" nén chặt bao nỗi niềm; giọt nước mắt nghẹn ngào của tình mẫu tử.',
      deepAnalysis: 'Bà cụ Tứ là kết tinh của vẻ đẹp người mẹ Việt Nam nghèo khó mà bao dung vô tận. Ban đầu ngạc nhiên, sau đó là xót xa tủi cực vì mình không làm tròn bổn phận cưới vợ đàng hoàng cho con. Nhưng trên hết là tấm lòng nhân hậu: bà không hề xua đuổi hay xét nét gốc tích của Thị mà dang rộng vòng tay đón nhận con dâu với lòng cảm thông sâu sắc. Lời dặn dò "chúng mày lấy nhau lúc này u thương quá" chứa chan tình người cao cả.',
      thematicSignificance: 'Tôn vinh vẻ đẹp tình mẫu tử và đạo lý nhân hậu, bao dung của người nông dân nghèo Việt Nam.',
      examTakeaway: 'Phân tích diễn biến tâm trạng bà cụ Tứ từ ngạc nhiên, tủi hờn đến thương cảm và tràn đầy hy vọng.'
    },
    {
      id: 'vn-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Buổi sáng đầu tiên sau ngày cưới - Sự hồi sinh kỳ diệu của Thị và trách nhiệm mới của Tràng',
      excerpt: '"Tràng mở mắt ra thấy ánh nắng sớm rọi vào nhà... Nhà cửa sân vườn đã được quét tước sạch sẽ, đống rác mùn đã được dọn sạch... Thị hôm nay khác hẳn, hiền hậu đúng mực, không còn vẻ chao chát chỏng lỏn... Tràng thấy mình bỗng nhiên trưởng thành: Hắn thấy hắn có bổn phận phải lo lắng cho vợ con sau này..."',
      artisticHighlights: 'Bút pháp miêu tả không gian chan hòa ánh sáng ấm áp; sự thay đổi tính cách tự nhiên, thuyết phục; cảm giác gắn bó thiêng liêng với tổ ấm.',
      deepAnalysis: 'Ánh nắng ban mai tượng trưng cho bình minh của cuộc đời mới. Dưới bàn tay thu vén của người phụ nữ, căn nhà rách nát bỗng trở nên ấm cúng, ngăn nắp. Thị lấy lại vẻ e ấp, dịu dàng của thiên tính nữ, còn Tràng thì lột xác từ một kẻ thô kệch thành người đàn ông trụ cột có ý thức trách nhiệm sâu sắc. Hơi ấm gia đình đã thanh lọc và hồi sinh nhân phẩm con người.',
      thematicSignificance: 'Khẳng định giá trị nhân bản: mái ấm gia đình là cái nôi nuôi dưỡng và hoàn thiện nhân cách con người.',
      examTakeaway: 'Phân tích sự thay đổi của cảnh vật và con người trong buổi sáng sau đêm tân hôn.'
    },
    {
      id: 'vn-5',
      order: 5,
      sectionTitle: 'Phân đoạn 5: Bữa cơm ngày đói với nồi cháo cám và tầm nhìn về lá cờ đỏ sao vàng',
      excerpt: '"Bà cụ Tứ bưng lên một cái nồi bốc khói nghi ngút: Chè khoán đây, ngon đáo để, cứ thử ăn mà xem!... Miếng cám đắng chát, nghẹn bứ trong cổ họng... Tiếng trống thúc thuế dồn dập... Trong óc Tràng vẫn thấy hiện ra cảnh những người nghèo đói ầm ầm kéo nhau đi trên đê Sộp, đằng trước có lá cờ đỏ to lớn phấp phới..."',
      artisticHighlights: 'Chi tiết nghệ thuật bát cháo cám đắng chát; âm thanh tiếng trống thuế dồn dập đe dọa; hình ảnh biểu tượng lá cờ đỏ kết thúc tác phẩm mở ra tương lai.',
      deepAnalysis: 'Bữa cơm đón dâu với nồi cháo cám ("chè khoán") chát đắng là hiện thực nghiệt ngã nhất của nạn đói, nhưng tấm lòng lạc quan của bà mẹ già đã biến nó thành bữa tiệc của niềm hy vọng. Chi tiết kết thúc truyện với hình ảnh lá cờ đỏ sao vàng trên đê Sộp không chỉ là sự giải thoát tư tưởng cho Tràng mà còn là bước ngoặt lịch sử của giai cấp cần lao: con đường duy nhất để thoát khỏi cảnh chết đói nô lệ là đứng lên đi theo Đảng làm cách mạng.',
      thematicSignificance: 'Chủ nghĩa lạc quan cách mạng: gắn kết khát vọng hạnh phúc cá nhân với con đường giải phóng của toàn dân tộc.',
      examTakeaway: 'Phân tích chi tiết nồi cháo cám và ý nghĩa của hình ảnh lá cờ đỏ sao vàng trong việc khép lại tác phẩm.'
    }
  ],

  'rung-xa-nu': [
    {
      id: 'rxn-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Bức tranh cánh rừng xà nu bạt ngàn - Biểu tượng sức sống bất diệt của Tây Nguyên',
      excerpt: '"Làng ở trong tầm đại bác của đồn giặc... Hầu hết đạn đại bác đều rơi vào ngọn đồi xà nu cạnh con nước lớn. Cả rừng xà nu hàng vạn cây không có cây nào không bị thương... Cạnh một cây mới ngã gục, đã có bốn năm cây con mọc lên, ngọn xanh rờn, hình nhọn mũi tên lao thẳng lên bầu trời... Cứ thế hai ba năm nay rừng xà nu ưỡn tấm ngực lớn của mình ra, che chở cho làng..."',
      artisticHighlights: 'Bút pháp nhân hóa kì vĩ (cây xà nu như con người kiên cường); cảm hứng sử thi tráng lệ; kết cấu vòng tròn đầu cuối tương ứng; hình ảnh ẩn dụ trùng điệp.',
      deepAnalysis: 'Nguyễn Trung Thành đã chọn cây xà nu - loài cây đặc trưng của đại ngàn Tây Nguyên - làm linh hồn cho thiên truyện. Cây xà nu chịu nỗi đau đớn thể xác như con người: nhựa ứa ra thơm ngào ngạt rồi đặc quyện thành từng cục máu lớn. Nhưng xà nu là loài cây ham ánh sáng mặt trời nhất, phóng lên trời tìm nắng. Một cây ngã xuống thì bốn năm mầm non nhọn hoắt như mũi tên vươn lên thay thế. Sức sống mãnh liệt của cây xà nu chính là hình ảnh hoán dụ của các thế hệ đồng bào làng Xô Man kiên cường đánh Mỹ, bom đạn bạo tàn không thể nào khuất phục.',
      thematicSignificance: 'Tượng đài sử thi bất tử về sức sống quật khởi, bất diệt của con người và mảnh đất Tây Nguyên anh hùng.',
      examTakeaway: 'Phân tích sự tương ứng hoàn hảo giữa cây xà nu và con người làng Xô Man: Cụ Mết như cây cổ thụ vững chãi, Tnú như thân cây cường tráng chịu nhiều thương tích, Dít như cây xà nu lớn phóng lên thẳng tắp, bé Heng như mầm xà nu non đang lớn nhanh.'
    },
    {
      id: 'rxn-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Tuổi thơ của Tnú - Lòng kiên trung, dũng cảm nuôi giấu cán bộ cách mạng',
      excerpt: '"Tnú và Mai đi nuôi cán bộ Quyết trong rừng... Thằng Tnú đi rừng không đi đường mòn mà xé rừng mà đi, lội qua chỗ nước sâu vì giặc không ngờ tới... Học chữ thì thua Mai, Tnú lấy đá đập vào đầu chảy máu tự phạt... Giặc phục kích bắt được Tnú, Tnú kịp nuốt ngay lá thư mật vào bụng..."',
      artisticHighlights: 'Nghệ thuật khắc họa tính cách nhân vật nhất quán, hành động quyết liệt đậm chất Tây Nguyên; chi tiết đập đá vào đầu độc đáo.',
      deepAnalysis: 'Ngay từ thuở nhỏ mồ côi được buôn làng cưu mang, Tnú đã sớm bộc lộ phẩm chất phi thường của một người anh hùng Tây Nguyên. Hành động lấy đá tự đập vào đầu khi học chữ thua Mai cho thấy lòng tự trọng và ý chí kiên quyết sắt đá. Sự mưu trí khi đưa thư vượt thác ghềnh ("cưỡi lên đầu ngọn thác") và phản xạ nuốt thư mật vào bụng khi rơi vào tay giặc chứng minh lòng trung thành tuyệt đối với Đảng và cách mạng từ thuở thiếu niên.',
      thematicSignificance: 'Gốc rễ của chủ nghĩa anh hùng cách mạng được ươm mầm từ phẩm chất trung thực, quả cảm và giác ngộ lý tưởng từ thời thơ ấu.',
      examTakeaway: 'Làm nổi bật nét tính cách gan dạ, bộc trực, trung kiên của Tnú thời niên thiếu làm nền tảng cho sự trưởng thành vượt bậc sau này.'
    },
    {
      id: 'rxn-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Bi kịch mất mát đau đớn - Vợ con bị tra tấn và nỗi đau bất lực của người đàn ông',
      excerpt: '"Thằng Dục và lũ lính bắt mẹ con Mai đem ra sân... roi sắt quất túi bụi lên thân thể mẹ con Mai... Tnú ngồi trong bụi cây, hai con mắt của anh bây giờ là hai cục than đỏ... Anh nhảy xổ vào giữa bọn lính, dang hai cánh tay rộng như hai cánh lim ôm chặt lấy mẹ con Mai... Nhưng Tnú chỉ có hai bàn tay trắng, giặc trói chặt Tnú lại..."',
      artisticHighlights: 'Tương phản giữa sự tàn bạo dã man của giặc và tình phụ tử thiêng liêng; hình ảnh "hai con mắt là hai cục than đỏ"; chi tiết hai bàn tay trắng bất lực.',
      deepAnalysis: 'Đây là đoạn văn bi kịch đạt đến đỉnh điểm của tác phẩm. Nỗi đau thể xác của Mai và đứa con thơ biến thành nỗi đau xé lòng của Tnú. Nguyễn Trung Thành miêu tả sự căm thù ngùn ngụt trong ánh mắt anh. Nhưng vì chỉ có hai bàn tay trắng không có vũ khí, Tnú đã không thể bảo vệ được những người mình yêu thương nhất. Chi tiết này chuẩn bị tâm lý cho chân lý tất yếu lịch sử: khi kẻ thù đã dùng bạo lực tàn bạo, con người không thể chiến thắng chỉ bằng lòng quả cảm đơn độc.',
      thematicSignificance: 'Hiện thực khốc liệt của chiến tranh: nỗi đau tột cùng của cá nhân hòa vào nỗi đau của cả dân tộc dưới gót giày xâm lăng.',
      examTakeaway: 'Phân tích bi kịch bàn tay trắng của Tnú để làm nổi bật sự cần thiết của con đường đấu tranh vũ trang cách mạng.'
    },
    {
      id: 'rxn-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Mười ngón tay bốc cháy thành đuốc và chân lý cách mạng rực lửa của Cụ Mết',
      excerpt: '"Chúng nó lấy nhựa xà nu tẩm vào mười đầu ngón tay Tnú rồi đốt... Mười ngón tay bốc cháy thành mười ngọn đuốc... Tnú không kêu van, người cộng sản không thèm kêu van... Cụ Mết dẫn buôn làng cầm mác xông vào chém sạch mười tên ác ôn... Cụ Mết rung rung chòm râu nói lớn: Chúng nó đã cầm súng, mình phải cầm giáo!"',
      artisticHighlights: 'Hình ảnh mười ngón tay ngọn đuốc đắt giá; âm hưởng sử thi tráng lệ rung chuyển núi rừng; đúc kết chân lý lịch sử đanh thép.',
      deepAnalysis: 'Mười ngón tay Tnú bốc cháy là khúc tráng ca bi tráng nhất của lòng kiên trung. Nhựa xà nu vốn che chở cho làng nay bị giặc biến thành công cụ tra tấn, nhưng Tnú cắn răng không thèm van xin một lời. Khi nỗi đau dâng lên tột cùng cũng là lúc ngọn lửa quật khởi bùng nổ: cụ Mết đã mài sắc dao mác sẵn sàng chỉ huy dân làng xông vào tiêu diệt kẻ thù cứu Tnú. Câu nói của Cụ Mết trở thành chân lý thời đại: Phải dùng bạo lực cách mạng để đập tan bạo lực phản cách mạng.',
      thematicSignificance: 'Chân lý thời đại cứu nước: chỉ có con đường cầm vũ khí đứng lên tự giải phóng mới đem lại sự sống còn cho dân tộc.',
      examTakeaway: 'Bình luận sâu sắc về câu nói bất hủ của Cụ Mết: "Chúng nó đã cầm súng, mình phải cầm giáo" - sợi chỉ đỏ xuyên suốt tác phẩm.'
    }
  ],

  'chiec-thuyen-ngoai-xa': [
    {
      id: 'ctnx-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Bức tranh chiếc thuyền ngoài xa - Cái đẹp toàn bích "đắt trời cho"',
      excerpt: '"Một cảnh đắt trời cho... Trước mặt tôi là một bức tranh mực tàu của một danh họa thời cổ. Mũi thuyền in một nét mơ hồ lòe nhòe vào bầu sương mù màu trắng sữa có pha đôi chút màu hồng hồng do ánh mặt trời chiếu vào... Tôi tưởng như mình vừa khám phá ra cái Chân, cái Thiện, cái Mỹ tuyệt đối của cuộc đời..."',
      artisticHighlights: 'Bút pháp miêu tả thi vị hóa, hội họa cổ điển phương Đông; nghệ thuật diễn tả rung động thẩm mỹ tinh tế.',
      deepAnalysis: 'Để chụp được bức ảnh lịch cho bộ lịch năm sau, nghệ sĩ Phùng đã phải phục kích nhiều ngày ở vùng biển miền Trung. Khoảnh khắc chiếc thuyền hiện lên trong sương sớm là tuyệt tác của tạo hóa. Cái đẹp hài hòa tuyệt đối giữa thiên nhiên và con người khiến tâm hồn người nghệ sĩ như được thanh lọc, gột rửa, ngập tràn cảm giác hạnh phúc tột cùng. Phùng đinh ninh rằng bản thân cái đẹp chính là đạo đức.',
      thematicSignificance: 'Sức mạnh kỳ diệu của nghệ thuật thuần túy có thể đưa tâm hồn con người chạm tới cõi thăng hoa tuyệt mỹ.',
      examTakeaway: 'Phân tích rung cảm của Phùng trước phát hiện thứ nhất để thấy sự ngây thơ, lãng mạn hóa hiện thực của người nghệ sĩ trước khi va chạm cuộc đời.'
    },
    {
      id: 'ctnx-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Hiện thực trần trụi ở cự ly gần - Cảnh bạo lực gia đình kinh hoàng bãi biển',
      excerpt: '"Một người đàn ông và một người đàn bà bước ra khỏi thuyền... Người đàn ông rút chiếc thắt lưng quật tới tấp vào lưng người đàn bà, nghiến răng rít lên: Mày chết đi cho ông nhờ! Chúng mày chết đi cho ông nhờ!... Người đàn bà nhẫn nhục cam chịu, không hề kêu một tiếng, không chống trả... Thằng Phác lao đến như một mũi tên giật chiếc thắt lưng định đâm cha..."',
      artisticHighlights: 'Nghệ thuật tương phản đối lập tàn nhẫn; nhịp văn gấp gáp, hành động thô bạo dồn dập; tình huống truyện nhận thức chấn động.',
      deepAnalysis: 'Ngay sau giây phút thăng hoa tột đỉnh, tấm màn sương mỏng manh bay đi để lộ sự thật trần trụi tàn nhẫn. Chiếc thuyền đẹp như thơ ngoài xa thực chất là nơi giam cầm một địa ngục trần gian: người chồng vũ phu đánh vợ ba ngày một trận nhẹ, năm ngày một trận nặng; người đàn bà cam chịu như một khúc gỗ; đứa con trai hận thù cha đến mức muốn giết cha bảo vệ mẹ. Nguyễn Minh Châu giáng một đòn mạnh vào cái nhìn thi vị hóa một chiều, buộc người nghệ sĩ phải đối diện với nỗi đau nhân sinh.',
      thematicSignificance: 'Cảnh báo về khoảng cách thăm thẳm giữa nghệ thuật lãng mạn xa xôi và hiện thực cuộc sống lam lũ, đau đớn của con người.',
      examTakeaway: 'Phân tích phản ứng của Phùng (chết lặng, vứt máy ảnh lao tới) và của thằng Phác để làm rõ mâu thuẫn đau đớn giữa cái đẹp hình thức và sự thật cuộc đời.'
    },
    {
      id: 'ctnx-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Cuộc đối thoại ở tòa án huyện - Triết lý nhân sinh của người đàn bà hàng chài',
      excerpt: '"Quý tòa để tôi nói... Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn... Đàn bà ở thuyền chúng tôi phải sống cho con chứ không thể sống cho mình như ở trên đất được... Giá tôi đẻ ít đi hoặc chúng tôi sắm được một chiếc thuyền rộng hơn... Vui nhất là lúc nhìn đàn con tôi chúng nó được ăn no..."',
      artisticHighlights: 'Nghệ thuật khắc họa chiều sâu tâm lý nhân vật vô danh; ngôn ngữ mộc mạc, thấm thía lẽ đời; đảo ngược vị thế người dạy dỗ và người được dạy dỗ.',
      deepAnalysis: 'Chánh án Đẩu và nghệ sĩ Phùng khuyên người đàn bà ly hôn nhân danh công lý sách vở. Nhưng bằng trải nghiệm máu thịt trên sóng gió, người đàn bà đã dạy cho hai người đàn ông trí thức một bài học về cuộc đời: con thuyền giữa biển khơi bắt buộc phải có một người đàn ông khỏe mạnh chèo chống phong ba; người chồng trước kia vốn hiền lành nhưng nghèo đói cùng cực đã tha hóa biến anh ta thành kẻ vũ phu; và trên hết là đức hy sinh vô bờ bến của người mẹ. Đằng sau vẻ ngoài thô kệch, rỗ mặt là một viên ngọc sáng của tình mẫu tử và lòng bao dung.',
      thematicSignificance: 'Tôn vinh vẻ đẹp tình mẫu tử và chiều sâu phẩm giá khuất lấp của con người lao động lam lũ thời hậu chiến.',
      examTakeaway: 'Phân tích sự vỡ lẽ nhận thức của Đẩu ("rút ra một cái gì đó vừa mới vỡ ra") và Phùng: không thể áp dụng công lý giản đơn vào cuộc sống phức tạp.'
    },
    {
      id: 'ctnx-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Tấm ảnh được chọn trong bộ lịch và nỗi ám ảnh muôn đời của nghệ sĩ Phùng',
      excerpt: '"Bao giờ tôi cũng nhìn thấy bức tranh đen trắng nhưng nhìn kỹ hơn thì thấy màu hồng hồng của ánh sương mai... Và nếu nhìn lâu hơn nữa, bao giờ tôi cũng thấy người đàn bà ấy đang bước ra khỏi tấm ảnh, lưng áo bạc phếch có miếng vá, nửa thân dưới ướt sũng, bước những bước chậm rãi trên bãi cát..."',
      artisticHighlights: 'Chi tiết nghệ thuật đa tầng nghĩa kết thúc tác phẩm; biểu tượng sự hòa quyện giữa chất thơ nghệ thuật và thân phận con người.',
      deepAnalysis: 'Tấm ảnh của Phùng được treo ở khắp các gia đình sành nghệ thuật. Nhưng mỗi lần ngắm nhìn, người nghệ sĩ không chỉ thấy màu hồng của sương mai lãng mạn mà luôn thấy hiện lên bóng dáng lam lũ của người đàn bà hàng chài bước ra khỏi khung hình. Hình ảnh ấy như một lời nhắc nhở nghiêm khắc của lương tâm người cầm bút: nghệ thuật đích thực không được quay lưng lại với số phận con người, mà phải đau nỗi đau của con người và đi tìm giải pháp cứu lấy họ.',
      thematicSignificance: 'Tuyên ngôn nghệ thuật vị nhân sinh bất hủ của Nguyễn Minh Châu trong thời kỳ đổi mới.',
      examTakeaway: 'Phân tích ý nghĩa biểu tượng của hai hình ảnh (màu hồng của sương và bóng người đàn bà bước ra) trong tấm ảnh bộ lịch.'
    }
  ],

  'hon-truong-ba-da-hang-thit': [
    {
      id: 'htb-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Màn đối thoại giữa Hồn Trương Ba và Xác Hàng Thịt - Bi kịch tha hóa đau đớn',
      excerpt: '"Hồn Trương Ba: Ta không muốn nhập vào mày nữa! Mày chỉ là cái vỏ bên ngoài thô kệch, tối tăm!... Xác hàng thịt: Ông không thể tách rời tôi được đâu! Ông đang sống nhờ tôi, thèm ăn thịt, thèm uống rượu, bàn tay ông đã trở nên thô bạo vụng về... Khi ông đứng bên cạnh vợ tôi, tim ông đập thình thịch, hơi thở nóng rực..."',
      artisticHighlights: 'Nghệ thuật đối thoại kịch sắc sảo; xung đột triết học giữa linh hồn thanh cao và thể xác bản năng; ngôn từ triết luận thâm thúy.',
      deepAnalysis: 'Lưu Quang Vũ đã tạo nên một màn kịch đối thoại triết học mẫu mực. Hồn Trương Ba đại diện cho đạo đức, phẩm giá trong sạch, còn Xác hàng thịt đại diện cho những dục vọng bản năng thấp hèn. Bi kịch đau đớn nhất của con người là bị tha hóa mà chính mình không thể kiểm soát: hồn Trương Ba ngậm ngùi nhận ra mình đang bị thể xác điều khiển, làm tổn thương những người thân yêu.',
      thematicSignificance: 'Cảnh báo về nguy cơ đánh mất chính mình khi phải sống chắp vá, dung tục hóa.',
      examTakeaway: 'Phân tích nghệ thuật đối thoại kịch sắc sảo và ý nghĩa ẩn dụ của cuộc đấu tranh giữa Hồn và Xác.'
    },
    {
      id: 'htb-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Bi kịch bị người thân cự tuyệt và sự cô đơn tột cùng giữa gia đình',
      excerpt: '"Vợ Trương Ba: Tôi sẽ đi biệt xứ để ông được thảnh thơi với cô hàng thịt... Con dâu: Thầy ơi, nhà ta tan hoang mất rồi! Thầy bây giờ không còn là thầy của ngày xưa nữa... Bé Gái: Ông không phải là ông nội tôi! Ông nội tôi tay khéo léo chiết cây, chứ không thô lỗ bẻ gãy chồi non, đạp nát cành cây của tôi!"',
      artisticHighlights: 'Đỉnh điểm xung đột kịch tính gia đình; ngôn ngữ nhân vật cá thể hóa cao độ; nỗi đau tinh thần quằn quại của Trương Ba.',
      deepAnalysis: 'Sống nhờ thân xác người khác không chỉ hành hạ bản thân Trương Ba mà còn đầu độc môi trường sống của gia đình ông. Vợ ông đòi bỏ đi, con dâu đau đớn nhìn gia đình tan nát, đặc biệt đứa cháu gái ngây thơ - niềm an ủi lớn nhất của đời ông - cự tuyệt quyết liệt vì không chấp nhận một người ông vụng về, thô bạo. Nỗi cô đơn bị chính những người mình yêu thương nhất chối từ đã đẩy Trương Ba đến quyết định phải tự giải phóng cho mình.',
      thematicSignificance: 'Bi kịch của sự giả tạo và tha hóa: khi con người không được là chính mình, họ sẽ vô tình gieo rắc đau khổ cho xung quanh.',
      examTakeaway: 'Phân tích phản ứng của bé Gái đối với Trương Ba - tiếng chuông cảnh tỉnh gắt gao nhất về sự biến chất của con người.'
    },
    {
      id: 'htb-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Cuộc tranh biện với Đế Thích và tuyên ngôn sống toàn vẹn bất hủ',
      excerpt: '"Không thể bên trong một đằng, bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn!... Sống nhờ vào đồ đạc, của cải người khác đã là chuyện không nên, đằng này đến cái thân tôi cũng phải sống nhờ anh hàng thịt. Ông chỉ nghĩ đơn giản là cho tôi sống, nhưng sống như thế nào thì ông chẳng cần biết!... Hãy cho cu Tị được sống, còn tôi xin được chết!"',
      artisticHighlights: 'Cao trào triết học đỉnh cao; thông điệp nhân sinh bất hủ; hành động thắp nén hương dứt khoát trả lại thân xác.',
      deepAnalysis: 'Đế Thích đưa ra giải pháp thỏa hiệp: cho hồn Trương Ba nhập vào xác cu Tị vừa mới chết. Nhưng Trương Ba dứt khoát từ chối vì ông hiểu rằng việc tiếp tục sống chắp vá chỉ kéo dài chuỗi bi kịch giả tạo. Ông thà chết thanh thản để được là chính mình toàn vẹn trong tâm tưởng mọi người còn hơn sống một cuộc đời méo mó, giả tạo. Cái chết của Trương Ba là sự khẳng định chiến thắng tuyệt đối của phẩm giá con người.',
      thematicSignificance: 'Chân lý sống cao đẹp: con người chỉ thực sự hạnh phúc khi được sống trung thực, hài hòa giữa tâm hồn và thể xác.',
      examTakeaway: 'Bình luận về tuyên ngôn sống: "Không thể bên trong một đằng, bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn!".'
    },
    {
      id: 'htb-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Cảnh kết trữ tình - Sự bất tử trong tâm tưởng người thân giữa khu vườn màu xanh',
      excerpt: '"Hồn Trương Ba hòa vào cây cỏ trong vườn: Tôi vẫn ở đây, trong màu xanh của lá cây, trong vị ngọt của quả na, trong những việc tốt các người làm... Tôi không mất đi đâu cả... Vợ Trương Ba, con dâu và bé Gái cùng ăn quả na ngọt lịm do chính tay ông trồng..."',
      artisticHighlights: 'Chất thơ lắng đọng xoa dịu bi kịch kịch tính; hình ảnh màu xanh khu vườn biểu tượng cho sự hồi sinh và bất tử.',
      deepAnalysis: 'Lưu Quang Vũ khép lại vở kịch bằng một trường đoạn trữ tình đầy chất thơ. Trương Ba tuy chết về thể xác nhưng linh hồn trong sáng của ông không hề biến mất. Ông hóa thân vào vạn vật, vào tình yêu thương và sự lương thiện của những người còn sống. Sự ra đi của Trương Ba mang ý nghĩa cứu rỗi: trả lại sự sống cho cu Tị, trả lại sự thanh thản cho gia đình và bảo toàn nhân phẩm thanh cao của chính mình.',
      thematicSignificance: 'Khẳng định sự bất tử của tâm hồn thanh cao, nhân hậu vượt qua cái chết sinh học thông thường.',
      examTakeaway: 'Phân tích ý nghĩa biểu tượng của cảnh kết khu vườn xanh và hương vị quả na ngọt ngào.'
    }
  ],

  'nhung-dua-con-trong-gia-dinh': [
    {
      id: 'ndc-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Biểu tượng "Dòng sông truyền thống" và cuốn sổ gia đình của Chú Năm',
      excerpt: '"Chuyện gia đình ta nó cũng dài như sông, để rồi chú gom lại, chú ghi cho mày một cuốn... Trong cuốn sổ ấy ghi chi chít những chiến công và tội ác giặc nợ máu của gia đình... Khúc sông sau bao giờ cũng chảy xa hơn khúc sông trước..."',
      artisticHighlights: 'Hình ảnh ẩn dụ kỳ vĩ "dòng sông truyền thống"; nghệ thuật xây dựng nhân vật Chú Năm - người giữ lửa lịch sử gia tộc.',
      deepAnalysis: 'Nguyễn Thi xây dựng quan niệm độc đáo: mỗi con người là một khúc sông trong dòng sông lớn của gia đình và dân tộc. Cuốn sổ của Chú Năm là bảo vật gia truyền, ghi lại từng mối thù cha bị chặt đầu, má bị đại bác bắn chết, đồng thời ghi lại từng chiến công giết giặc của thế hệ sau. Câu nói "Khúc sông sau bao giờ cũng chảy xa hơn khúc sông trước" thể hiện niềm tin sắt đá: thế hệ con cái (Chiến, Việt) sẽ đi xa hơn cha mẹ trên con đường giải phóng quê hương.',
      thematicSignificance: 'Mối quan hệ hữu cơ, gắn bó keo sơn giữa truyền thống gia đình và lòng yêu nước cách mạng.',
      examTakeaway: 'Phân tích ý nghĩa biểu tượng của hình ảnh dòng sông và cuốn sổ gia đình của chú Năm.'
    },
    {
      id: 'ndc-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Đêm mít tinh tòng quân - Hai chị em giành nhau đi bộ đội',
      excerpt: '"Đêm mít tinh ghi danh tòng quân, hai chị em Chiến và Việt giành nhau ký tên... Việt nói: Chị ở nhà nuôi em, để tôi đi! Chiến cãi lại: Tao là chị, tao phải đi trước!... Chú Năm phải đứng ra phân giải: Thôi, cho cả hai đứa cùng đi!"',
      artisticHighlights: 'Khắc họa tính cách nhân vật qua đối thoại tự nhiên, hồn nhiên đậm sắc thái Nam Bộ; chi tiết tranh giành cảm động.',
      deepAnalysis: 'Việc ra trận đánh giặc vốn là gian khổ hiểm nguy, nhưng đối với hai chị em Chiến và Việt, đó là niềm vinh dự, là trách nhiệm thiêng liêng phải giành nhau. Cảnh tranh giành vừa toát lên nét ngây thơ, hiếu thắng của tuổi trẻ vừa bộc lộ ý chí đánh giặc kiên cường được nuôi dưỡng từ dòng máu gia đình quật khởi.',
      thematicSignificance: 'Khí thế hào hùng, sục sôi của cả một thế hệ thanh niên miền Nam thời đánh Mỹ: dấn thân không tiếc đời mình.',
      examTakeaway: 'Làm nổi bật nét hồn nhiên mà kiên cường của tuổi trẻ Nam Bộ qua cảnh hai chị em tranh nhau đi tòng quân.'
    },
    {
      id: 'ndc-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Cảnh khiêng bàn thờ má sang gửi nhà Chú Năm - Thiêng liêng khúc ruột gia đình',
      excerpt: '"Trước ngày lên đường, hai chị em thu xếp nhà cửa... Việt ghé một đầu, Chiến khiêng một đầu... Nào, đưa má sang ở tạm bên chú, đến ngày thống nhất lại rước má về... Lòng Việt bỗng thấy thương chị lạ lùng. Má biến theo ánh nắng trên đầu cây, rồi má lại về đứng sau lưng chị..."',
      artisticHighlights: 'Chi tiết nghệ thuật thiêng liêng bậc thầy; không gian tâm linh ấm áp; sự trưởng thành vượt bậc trong tâm lý của Việt.',
      deepAnalysis: 'Đây là phân đoạn xúc động và đắt giá nhất của tác phẩm. Bàn thờ má là hiện thân của tổ ấm gia đình, của nỗi đau mất mát và ý chí trả thù. Khi hai chị em chung vai ghé khiêng bàn thờ má, Việt cảm nhận rõ nét hình bóng người má đang che chở, truyền sức mạnh cho hai con. Lần đầu tiên, cậu bé vô tư Việt biết thương chị Chiến, cảm thấy mình đã thực sự lớn khôn, sẵn sàng bước vào cuộc chiến đấu sinh tử vì non sông.',
      thematicSignificance: 'Sự hòa quyện thiêng liêng giữa tình cảm gia đình và tình yêu Tổ quốc: biến nỗi đau thành hành động cách mạng.',
      examTakeaway: 'Phân tích chi tiết hai chị em khiêng bàn thờ má sang nhà chú Năm - một trong những chi tiết giàu chất thơ và tính biểu tượng nhất văn học chống Mỹ.'
    },
    {
      id: 'ndc-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Chiến sĩ Việt bị thương lạc giữa chiến trường - Tư thế tiến công bất khuất',
      excerpt: '"Việt bị thương ngất đi tỉnh lại nhiều lần giữa rừng cao su... Mắt mù không thấy đường, khắp mình mẩy đau nhức rách nát... Nghe tiếng súng của đồng đội từ xa vọng lại, Việt bò về phía tiếng súng... Ngón tay cái của Việt vẫn nhúc nhích được, vẫn đặt sẵn trên cò súng: Hễ giặc đến là tao bắn!"',
      artisticHighlights: 'Nghệ thuật trần thuật theo dòng ý thức chập chờn; thử thách khốc liệt; tư thế chiến đấu ngoan cường.',
      deepAnalysis: 'Nguyễn Thi đặt nhân vật Việt vào hoàn cảnh ngặt nghèo nhất: một mình giữa bãi chiến trường hoang vắng, kiệt sức, đói khát và mù lòa. Nhưng trong hoàn cảnh ấy, phẩm chất anh hùng của đứa con Nam Bộ càng ngời sáng rực rỡ. Dù chỉ còn một ngón tay cử động được, ngón tay ấy vẫn bám chặt lấy cò súng. Âm thanh tiếng súng giải phóng như tiếng gọi của quê hương tiếp thêm sinh lực cho anh bò về phía đồng đội.',
      thematicSignificance: 'Khắc họa chủ nghĩa anh hùng cách mạng: tư thế luôn luôn tiến công, quyết tử cho Tổ quốc quyết sinh.',
      examTakeaway: 'Phân tích dòng hồi tưởng đan xen thực tại của nhân vật Việt khi bị thương để thấy tài năng miêu tả tâm lý của Nguyễn Thi.'
    }
  ],

  'ong-gia-va-bien-ca': [
    {
      id: 'ogvbc-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Biểu tượng con cá kiếm khổng lồ - Hiện thân của cái đẹp và ước mơ vĩ đại',
      excerpt: '"Con cá kiếm trồi lên mặt nước... Dài hơn chiếc thuyền hai thước, thân mình màu tím sẫm óng ánh ánh bạc dưới ánh mặt trời nhiệt đới, chiếc đuôi như chiếc lưỡi hái lớn vút lên bầu trời... Ông lão chưa từng thấy một sinh vật nào dũng mãnh và đẹp đẽ đến thế..."',
      artisticHighlights: 'Bút pháp miêu tả súc tích, gợi cảm; áp dụng nguyên lý tảng băng trôi; hình tượng biểu tượng kỳ vĩ.',
      deepAnalysis: 'Con cá kiếm không đơn thuần là một con mồi kiếm sống mà là hiện thân của thiên nhiên kỳ vĩ, của cái đẹp toàn bích và ước mơ lý tưởng mà con người khao khát chinh phục. Hemingway miêu tả con cá kiếm với tất cả sự trân trọng và tôn kính, nâng cuộc đi săn thành một nghi lễ nghệ thuật thiêng liêng.',
      thematicSignificance: 'Khát vọng vươn tới cái đẹp và chinh phục đỉnh cao của con người trong cuộc đời.',
      examTakeaway: 'Phân tích ý nghĩa biểu tượng của hình tượng con cá kiếm theo nguyên lý "tảng băng trôi" của Hemingway.'
    },
    {
      id: 'ogvbc-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Cuộc chiến đấu sinh tử giữa ông lão Xan-ti-a-gô và con cá kiếm',
      excerpt: '"Bàn tay ông lão bị dây cước cứa rách toạc rỉ máu... Chân bị chuột rút, đầu óc choáng váng hoa mắt... Nhưng ông lão vẫn ghì chặt sợi dây: Ta thương mày và kính trọng mày vô cùng, nhưng ta sẽ giết mày trước khi ngày hôm nay kết thúc!... Ông dồn hết sức tàn phóng ngọn lao xuyên qua tim con cá..."',
      artisticHighlights: 'Nghệ thuật độc thoại nội tâm; đối thoại với đối thủ; nhịp kể chậm rãi, dồn nén năng lượng; chi tiết thân xác kiệt quệ.',
      deepAnalysis: 'Cuộc chiến đấu giữa ông lão 84 ngày không bắt được con cá nào và con cá kiếm khổng lồ là cuộc đọ sức giữa ý chí con người và sức mạnh tự nhiên. Ông lão gọi con cá là "người anh em", khâm phục sự kiên cường của nó nhưng kiên quyết không bỏ cuộc. Cú phóng lao quyết định là sự thăng hoa của nghị lực phi thường, kinh nghiệm dày dạn và phẩm giá kiên cường.',
      thematicSignificance: 'Ca ngợi sức mạnh của ý chí và lòng dũng cảm của con người trước những thử thách khắc nghiệt nhất.',
      examTakeaway: 'Phân tích thái độ tôn trọng đối thủ của Xan-ti-a-gô để làm sáng tỏ chủ nghĩa nhân văn trong ngòi bút Hemingway.'
    },
    {
      id: 'ogvbc-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Cuộc chiến đấu với đàn cá mập dữ tợn và tuyên ngôn bất tử về phẩm giá',
      excerpt: '"Mùi máu con cá kiếm lan ra thu hút bầy cá mập hung hãn... Ông lão dùng dao buộc vào đầu chèo, dùng chày, dùng cả mái chèo gãy để chiến đấu bảo vệ thành quả... Ông nói: Con người không được sinh ra để dành cho thất bại. Con người có thể bị hủy diệt nhưng không thể bị đánh bại!"',
      artisticHighlights: 'Đỉnh điểm kịch tính; tuyên ngôn triết học nhân sinh bất hủ; biểu tượng bi kịch của sự mất mát vật chất.',
      deepAnalysis: 'Bầy cá mập đại diện cho những nghịch cảnh tàn nhẫn, bất công của số phận luôn rình rập cướp đi thành quả của con người. Dù biết mình yếu thế, Xan-ti-a-gô không hề đầu hàng mà chiến đấu đến tận mảnh vỡ cuối cùng của mái chèo. Tuyên ngôn bất hủ của ông khẳng định: Thể xác có thể bị hủy diệt, thành quả vật chất có thể bị tước đoạt, nhưng tinh thần và phẩm giá con người là bất khả chiến bại.',
      thematicSignificance: 'Bản tụng ca phẩm giá và sức mạnh bất khuất của con người trước định mệnh nghiệt ngã.',
      examTakeaway: 'Bình luận sâu sắc về câu nói kinh điển: "Con người có thể bị hủy diệt nhưng không thể bị đánh bại".'
    },
    {
      id: 'ogvbc-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Bộ xương cá kiếm trắng muốt trên bến cảng và giấc mơ về những con sư tử',
      excerpt: '"Chiếc thuyền cập bến trong đêm, bên cạnh chỉ còn trơ lại bộ xương trắng khổng lồ của con cá kiếm... Dân làng trầm trồ kinh ngạc trước kích thước vĩ đại của nó... Ông lão nằm ngủ li bì trong túp lều rách, và ông đang mơ về những con sư tử trên bãi biển châu Phi..."',
      artisticHighlights: 'Hình ảnh biểu tượng đa nghĩa kết thúc truyện; không khí thanh thản sau giông bão; sự hòa hợp tâm hồn.',
      deepAnalysis: 'Bộ xương cá kiếm là chứng tích của một chiến công phi thường mà không ai có thể phủ nhận. Giấc mơ về những con sư tử châu Phi - hình ảnh thời trai trẻ đầy sinh lực - biểu hiện tâm hồn ông lão vẫn nguyên vẹn niềm tin yêu cuộc đời, sự thanh thản và khát vọng sống bất diệt. Người chiến binh già đã chiến thắng chính bản thân mình.',
      thematicSignificance: 'Khẳng định chiến thắng tinh thần rực rỡ của con người: sự bình an tuyệt đối trong tâm hồn sau bão táp.',
      examTakeaway: 'Phân tích ý nghĩa biểu tượng của giấc mơ sư tử ở cuối tác phẩm.'
    }
  ],

  'thuoc': [
    {
      id: 'thuoc-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Chiếc bánh bao tẩm máu người - Phương thuốc quái đản chữa bệnh lao',
      excerpt: '"Trời chưa sáng rõ, lão Hoa Thuyên gom góp những đồng bạc cắc tích cóp bấy lâu, cầm chiếc đèn lồng đi mua bánh bao... Một gã đao phủ áo quần nhem nhuốc ném cho lão chiếc bánh bao còn nóng hổi, đỏ lòm máu người tử tù vừa bị chém... Lão cầm lấy, cảm thấy như đang nâng niu sự sống của thằng con trai duy nhất..."',
      artisticHighlights: 'Không khí u ám, lạnh lẽo thời trung cổ; chi tiết biểu tượng rùng rợn chiếc bánh bao nhuộm máu; ngòi bút miêu tả chân thực trần trụi.',
      deepAnalysis: 'Lỗ Tấn đã dựng lên một bức tranh hiện thực rùng rợn mở đầu tác phẩm. Chiếc bánh bao tẩm máu người tử tù cách mạng (Hạ Du) được người dân u mê xem là thần dược trị bệnh lao. Sự kiện này phơi bày căn bệnh mê tín dị đoan, ngu muội đến cùng cực của nhân dân Trung Hoa thời cận đại: người ta thản nhiên dùng máu của người chiến sĩ hy sinh vì tự do của mình để làm thuốc tẩm bổ.',
      thematicSignificance: 'Bản cáo trạng vạch trần căn bệnh tinh thần ngu muội, lạc hậu của quốc dân Trung Hoa.',
      examTakeaway: 'Phân tích ý nghĩa biểu tượng đa tầng của hình ảnh chiếc bánh bao tẩm máu người.'
    },
    {
      id: 'thuoc-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Bối cảnh quán trà nhà lão Hoa - Bức tranh thu nhỏ của xã hội vô cảm',
      excerpt: '"Quán trà ồn ào những lời bàn tán về kẻ bị chém sáng nay... Cậu Năm Gù gật gù: Cam đoan ăn bánh bao máu người là khỏi tiệt!... Bọn người xúm lại bàn tán về Hạ Du: Thằng ấy điên thật rồi! Vào tù mà dám rủ cả cai ngục làm giặc, lại còn nói thiên hạ này là của chúng ta!... Cả quán cười ồ lên thích thú..."',
      artisticHighlights: 'Nghệ thuật xây dựng không gian quán trà như một mô hình xã hội thu nhỏ; ngôn ngữ đối thoại mỉa mai, cay đắng; bi kịch người cách mạng tiên phong.',
      deepAnalysis: 'Quán trà là nơi tụ tập đủ mọi tầng lớp xã hội. Qua những câu chuyện thản nhiên, vô tâm, Lỗ Tấn chỉ rõ bi kịch xót xa của người chiến sĩ cách mạng Hạ Du: anh dấn thân hy sinh để giải phóng nhân dân, nhưng chính nhân dân lại coi anh là thằng điên, mua máu anh làm thuốc và lấy cái chết của anh làm trò cười mua vui. Quần chúng hoàn toàn xa lạ với lý tưởng cách mạng.',
      thematicSignificance: 'Phê phán sâu sắc sự vô cảm, tê liệt về tinh thần của quần chúng trước phong trào giải phóng dân tộc.',
      examTakeaway: 'Phân tích thái độ của những người trong quán trà đối với Hạ Du để làm rõ bi kịch của người chiến sĩ cách mạng tiên phong.'
    },
    {
      id: 'thuoc-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Cuộc gặp gỡ đau thương tại nghĩa địa mùa thanh minh - Nỗi đau chung của hai người mẹ',
      excerpt: '"Mùa thanh minh năm sau, bà mẹ thằng Thuyên mang hương hoa ra mộ con... Bà bắt gặp bà mẹ Hạ Du đang quỳ khóc bên nấm mộ phía bên kia con đường mòn ngăn cách nghĩa địa người chết nghèo và người tử tù... Hai người mẹ nhìn nhau, nỗi đau mất con đã xóa nhòa mọi ranh giới xa lạ..."',
      artisticHighlights: 'Không gian nghĩa địa lạnh lẽo đối lập; chi tiết con đường mòn ngăn cách mang ý nghĩa phân chia xã hội; tình mẫu tử đồng cảm sâu sắc.',
      deepAnalysis: 'Nghĩa địa được chia làm hai khu bởi một con đường mòn: bên trái chôn người nghèo, bên phải chôn tử tù chém đầu. Hai người mẹ - một mẹ của nạn nhân căn bệnh thể xác, một mẹ của nạn nhân căn bệnh tinh thần - gặp nhau trong cùng một nỗi đau tột cùng của sự mất mát. Tình mẫu tử thiêng liêng đã kéo hai con người xích lại gần nhau, vượt qua định kiến xã hội.',
      thematicSignificance: 'Tiếng chuông thức tỉnh nhân đạo: nỗi đau đớn chung của cả dân tộc dưới ách áp bức phong kiến suy tàn.',
      examTakeaway: 'Phân tích ý nghĩa biểu tượng của con đường mòn ngăn cách hai khu nghĩa địa.'
    },
    {
      id: 'thuoc-4',
      order: 4,
      sectionTitle: 'Phân đoạn 4: Vòng hoa bí ẩn trên mộ Hạ Du - Niềm hy vọng le lói vào tương lai thức tỉnh',
      excerpt: '"Bà mẹ Hạ Du bàng hoàng nhìn thấy trên đỉnh nấm mộ con mình có một vòng hoa, hoa trắng hoa đỏ xen lẫn cài khéo léo... Bà lẩm bẩm: Du ơi, có phải con oan ức hiển linh?... Một con quạ đen đậu trên cành cây khô bỗng vỗ cánh bay vút lên nền trời xám xịt..."',
      artisticHighlights: 'Hình ảnh biểu tượng vòng hoa đầy chất thơ; sự chuyển biến cảm xúc từ u tối sang niềm hy vọng; câu hỏi trăn trở cho tương lai.',
      deepAnalysis: 'Giữa không gian nghĩa địa xám xịt chết chóc, vòng hoa trên mộ Hạ Du rực sáng như một điểm tựa của niềm tin. Vòng hoa ấy chứng tỏ: Hạ Du không hoàn toàn cô độc, vẫn có những người đồng chí âm thầm tiếp bước lý tưởng của anh. Lỗ Tấn muốn nhắn gửi: dù xã hội còn u mê tăm tối, hạt giống cách mạng đã được gieo mầm và ngày thức tỉnh của quốc dân Trung Hoa nhất định sẽ đến.',
      thematicSignificance: 'Khép lại tác phẩm bằng niềm tin vào tương lai tất thắng của sự nghiệp thức tỉnh dân tộc.',
      examTakeaway: 'Bình luận về ý nghĩa biểu tượng của vòng hoa trên mộ Hạ Du - thông điệp "Gào thét" thức tỉnh thời đại của Lỗ Tấn.'
    }
  ],

  'tuyen-ngon-doc-lap': [
    {
      id: 'tndl-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Cơ sở pháp lý và chính nghĩa - "Gậy ông đập lưng ông"',
      excerpt: '"Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc" (Tuyên ngôn Độc lập Mỹ 1776)...',
      artisticHighlights: 'Nghệ thuật lập luận mẫu mực; trích dẫn hai bản tuyên ngôn danh tiếng của Mỹ và Pháp; phương pháp "gậy ông đập lưng ông".',
      deepAnalysis: 'Hồ Chí Minh mở đầu bản Tuyên ngôn Độc lập bằng việc trích dẫn hai áng văn bất hủ của phương Tây để thiết lập một cơ sở pháp lý vững chắc mà kẻ thù không thể bác bỏ. Bằng việc suy rộng ra: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng", Người đã nâng quyền con người cá nhân thành quyền tự quyết thiêng liêng của các dân tộc bị áp bức, đặt cách mạng Việt Nam ngang hàng với các cuộc cách mạng vĩ đại của nhân loại.',
      thematicSignificance: 'Khẳng định tính chính nghĩa tuyệt đối của nền độc lập dân tộc Việt Nam.',
      examTakeaway: 'Phân tích nghệ thuật mở đầu khéo léo, kiên quyết và tầm nhìn thời đại của Chủ tịch Hồ Chí Minh.'
    },
    {
      id: 'tndl-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Cơ sở thực tiễn - Bản cáo trạng đanh thép tố cáo thực dân Pháp',
      excerpt: '"Thế mà hơn 80 năm nay, bọn thực dân Pháp lợi dụng lá cờ tự do, bình đẳng, bác ái, đến cướp đất nước ta, áp bức đồng bào ta. Hành động của chúng hoàn toàn trái hẳn với nhân đạo và chính nghĩa... Về chính trị... Về kinh tế... Chúng bán nước ta hai lần cho Nhật..."',
      artisticHighlights: 'Từ ngữ đanh thép, lập luận logic chặt chẽ, liệt kê chứng cứ xác thực, điệp cấu trúc "Chúng...".',
      deepAnalysis: 'Bản tuyên ngôn vạch trần bộ mặt đạo đức giả của thực dân Pháp bằng hệ thống chứng cứ lịch sử không thể chối cãi: chia để trị, tắm các cuộc khởi nghĩa trong bể máu, thi hành chính sách ngu dân, vơ vét bóc lột tài nguyên khiến dân ta chết đói hơn hai triệu người năm 1945. Đặc biệt, Hồ Chí Minh chỉ rõ Pháp đã đầu hàng nhục nhã, dâng Đông Dương cho phát xít Nhật, do đó Pháp không còn bất kỳ quyền lợi hay tư cách pháp lý nào trên đất nước Việt Nam.',
      thematicSignificance: 'Bản cáo trạng lịch sử hùng hồn đập tan mọi âm mưu tái chiếm Đông Dương của chủ nghĩa thực dân.',
      examTakeaway: 'Phân tích nghệ thuật lập luận tương phản giữa lời rêu rao "khai hóa" và tội ác diệt chủng thực tế của giặc Pháp.'
    },
    {
      id: 'tndl-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Lời tuyên bố đanh thép và ý chí bảo vệ nền độc lập',
      excerpt: '"Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy!"',
      artisticHighlights: 'Giọng văn hào sảng, dứt khoát; cấu trúc câu khẳng định mang tính pháp lý quốc tế tối cao.',
      deepAnalysis: 'Đoạn kết vút cao như một lời thề non nước thiêng liêng. Không chỉ khẳng định quyền tự nhiên trên lý thuyết mà Người nhấn mạnh một hiện thực hiển nhiên: "sự thật đã thành một nước tự do độc lập". Lời thề quyết đem "tất cả tinh thần và lực lượng, tính mạng và của cải" là ý chí sắt đá của hai mươi lăm triệu đồng bào Việt Nam kiên quyết bảo vệ thành quả cách mạng.',
      thematicSignificance: 'Tuyên bố khai sinh ra nước Việt Nam Dân chủ Cộng hòa, mở ra kỷ nguyên mới cho dân tộc.',
      examTakeaway: 'Phân tích sức thuyết phục tối cao của lời tuyên ngôn độc lập kết hợp giữa lý lẽ đanh thép và nhiệt tình cách mạng sục sôi.'
    }
  ],

  'xuan-toc-do-cuu-quoc': [
    {
      id: 'xtd-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Sân quần Rollandes và màn kịch ngoại giao quốc tế của giới thượng lưu',
      excerpt: '"Tất cả những nhân vật tai mặt ở Bắc Kỳ hôm ấy đều có mặt tại sân quần Rollandes để xem cuộc đấu có tính cách quốc tế và lịch sử ấy... Vua Xiêm, Toàn quyền Pháp, quan Thống sứ, quan Tổng đốc cùng giới trưởng giả Âu hóa ăn mặc lộng lẫy ngồi chật kín khán đài..."',
      artisticHighlights: 'Đại cảnh sân khấu trào phúng; bút pháp phóng đại; tương phản giữa hình thức thể thao và mưu đồ chính trị giả tạo.',
      deepAnalysis: 'Vũ Trọng Phụng dựng lên một đại cảnh hài kịch khổng lồ. Một trận thi đấu quần vợt phong trào bỗng chốc bị đẩy lên thành vận mệnh hòa bình quốc tế và thể diện quốc gia. Sự hiện diện đông đủ của giới thực dân, vua chúa và đám quý tộc tư sản rởm đời ("Âu hóa", "thể thao cứu quốc") phơi bày sự rỗng tuếch, giả dối của một xã hội kim tiền đang lên cơn sốt thời thượng.',
      thematicSignificance: 'Phơi bày bản chất đạo đức giả và sự lố bịch của xã hội thực dân nửa phong kiến đương thời.',
      examTakeaway: 'Phân tích nghệ thuật xây dựng không gian sân quần Rollandes như một sàn diễn của sự lố lăng trưởng giả.'
    },
    {
      id: 'xtd-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Tình huống trớ trêu - Cú đánh bóng ra ngoài "cứu nguy cho tổ quốc"',
      excerpt: '"Xuân Tóc Đỏ đánh như điên cuồng, sắp thắng đến nơi... Vua Xiêm đỏ mặt tía tai dọa xua quân xâm lược... Quan Tổng đốc và ông Văn Minh hoảng hốt ghé tai Xuân: Nhường đi! Thua đi! Cứu nước đi con!... Xuân gạt vợt tống quả bóng bay vút ra ngoài hàng rào..."',
      artisticHighlights: 'Tình huống kịch tính nghịch lý; nghịch ngữ trào phúng; lột trần tâm lý sợ hãi của quan lại bán nước.',
      deepAnalysis: 'Tình huống truyện đạt tới đỉnh cao trào phúng: Kẻ sắp thắng cuộc lại bị bắt buộc phải chịu thua để giữ "hòa bình". Xuân Tóc Đỏ - kẻ nhặt bóng vô học đầu đường xó chợ - bỗng chốc nắm trong tay quyền sinh sát vận mệnh hai dân tộc Việt - Xiêm. Hành động đánh bóng hỏng có chủ đích là một sự dàn xếp hèn hạ nhưng lại được thi vị hóa thành hành động hy sinh vĩ đại vì nền hòa bình non sông.',
      thematicSignificance: 'Tiếng cười chua chát bóc trần sự bạc nhược của chính quyền thuộc địa trước nguy cơ xung đột ngoại giao.',
      examTakeaway: 'Làm rõ nghệ thuật tạo tình huống nghịch lý - sở trường số một của ngòi bút Vũ Trọng Phụng.'
    },
    {
      id: 'xtd-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Màn diễn thuyết bịp bợm trên nóc ô tô và sự tôn sùng điên rồ của đám đông',
      excerpt: '"Xuân Tóc Đỏ trèo phắt lên mui xe hơi, vẫy tay ra hiệu cho đám đông im lặng: Hỡi công chúng mi chưa hiểu rõ những lẽ cực kỳ to tát nó khiến ta đành phải nhường giải cho quán quân Xiêm La!... Đám đông reo hò dậy đất: Xuân Tóc Đỏ vạn tuế! Sự đại bại vạn tuế!"',
      artisticHighlights: 'Nghịch ngữ kinh điển "Sự đại bại vạn tuế!"; ngôn ngữ trơ trẽn trịch thượng của kẻ lưu manh; tâm lý đám đông mù quáng bị thôi miên.',
      deepAnalysis: 'Xuân Tóc Đỏ hiện nguyên hình là một gã đại bịp bợm thiên tài. Bắt chước giọng điệu của các chính khách thời thượng, hắn mắng thẳng vào mặt đám đông là "nông nổi" và tự phong mình là bậc thánh nhân cứu nước. Đám đông quần chúng ngu muội không những không phẫn nộ mà còn tung hô "Sự đại bại vạn tuế!". Nghịch ngữ quái đản này là bản án đanh thép nhất cho một xã hội đảo điên, nơi cái vô học và dối trá được tôn vinh tột bậc.',
      thematicSignificance: 'Cảnh tỉnh sâu sắc về hiện tượng mê muội tập thể và sự lên ngôi của những trò bịp bợm chính trị.',
      examTakeaway: 'Phân tích nghịch ngữ "Sự đại bại vạn tuế!" - đỉnh cao nghệ thuật châm biếm sâu cay của Vũ Trọng Phụng.'
    }
  ],

  'mua-la-rung-trong-vuon': [
    {
      id: 'mlr-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Chiều ba mươi Tết thiêng liêng và hình tượng người cha - ông Bằng',
      excerpt: '"Chiều ba mươi Tết, ông Bằng tắm gội sạch sẽ, mặc bộ đồ dạ cổ truyền, thắp nén hương trầm trước bàn thờ gia tiên... Trong làn khói hương nghi ngút, ông nhìn di ảnh người con cả liệt sĩ, lòng trĩu nặng nỗi buồn trước sự đổi thay của các con..."',
      artisticHighlights: 'Không gian tâm linh Tất niên thiêng liêng; bút pháp tả thực kết hợp nội tâm trầm lắng; hình tượng cây đại thụ gia đình.',
      deepAnalysis: 'Ma Văn Kháng tái hiện nghi lễ cúng gia tiên như một điểm tựa tinh thần thiêng liêng của nếp nhà truyền thống Hà Nội. Ông Bằng đại diện cho thế hệ cựu trào: nghiêm cẩn giữ gìn gia phong lễ giáo, trọng danh dự và tình nghĩa. Nhưng đằng sau vẻ trang nghiêm ấy là nỗi đau âm ỉ của một người cha chứng kiến các con (Cừ vượt biên, Lý thực dụng, Đông an phận) đang dần bị cơn lốc kinh tế thị trường làm xói mòn đạo đức.',
      thematicSignificance: 'Khắc họa sự va đập gay gắt giữa đạo lý truyền thống và lối sống thực dụng thời kỳ giao thời Đổi mới.',
      examTakeaway: 'Phân tích tâm trạng của ông Bằng trước bàn thờ tổ tiên để thấy chiều sâu triết lý gia đình của Ma Văn Kháng.'
    },
    {
      id: 'mlr-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Sự trở về của chị Hoài - Hơi ấm thủy chung lay động nếp nhà xao xác',
      excerpt: '"Chị Hoài bước vào nhà mang theo cả làn gió thơm thảo của thôn quê... Dù đã tái giá, chị vẫn một lòng coi ông Bằng là cha, các em là ruột thịt... Nước mắt người con dâu cũ lăn dài trên má khi chắp tay trước hương án..."',
      artisticHighlights: 'Khắc họa nhân vật phụ nữ giàu đức hy sinh; chi tiết quà quê giản dị mà nặng ân tình; điểm nhìn nhân đạo ấm áp.',
      deepAnalysis: 'Chị Hoài là biểu tượng của cội nguồn ân nghĩa thủy chung. Dù chồng đã hy sinh và chị đã có cuộc sống riêng ở quê, chị vẫn lặn lội về thăm ông Bằng ngày cuối năm. Sự xuất hiện của chị Hoài như một dòng suối mát lành thanh lọc bầu không khí toan tính, lạnh nhạt trong ngôi nhà phố, nhắc nhở mọi người về tình thân máu mủ và cội nguồn đạo lý.',
      thematicSignificance: 'Tôn vinh vẻ đẹp nhân ái, thủy chung son sắt của người phụ nữ nông thôn Việt Nam.',
      examTakeaway: 'Phân tích vai trò của nhân vật chị Hoài như một chất keo gắn kết tình thân gia đình.'
    },
    {
      id: 'mlr-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Ý nghĩa biểu tượng "Mùa lá rụng trong vườn" và sự hồi sinh của nếp nhà',
      excerpt: '"Gió bấc thổi qua khu vườn xao xác những chiếc lá bàng đỏ ối rơi rụng... Nhưng dưới lớp đất ẩm, những chồi non mùa xuân đang âm thầm tích tụ nhựa sống để chuẩn bị đâm chồi..."',
      artisticHighlights: 'Hình tượng biểu tượng giàu chất thơ triết luận; nhịp văn trữ tình chậm rãi; kết thúc giàu niềm tin nhân văn.',
      deepAnalysis: 'Hình ảnh lá rụng trong vườn vừa là quy luật chuyển mùa của tự nhiên, vừa là ẩn dụ sâu sắc cho sự rạn nứt, rơi rụng của những giá trị đạo đức cũ trước sự biến động của thời cuộc. Tuy nhiên, lá rụng để nuôi dưỡng mầm non đâm chồi mùa xuân: gia đình dẫu trải qua giông bão thử thách vẫn sẽ tìm lại sự cân bằng nhờ gốc rễ tình thương và lòng vị tha.',
      thematicSignificance: 'Niềm tin vững chắc vào sự trường tồn của đạo lý gia đình truyền thống dân tộc.',
      examTakeaway: 'Bình luận ý nghĩa biểu tượng của nhan đề "Mùa lá rụng trong vườn".'
    }
  ],

  'nhin-ve-von-van-hoa-dan-toc': [
    {
      id: 'vhdt-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Đặc trưng dung hợp và tính thiết thực trong tôn giáo, tín ngưỡng',
      excerpt: '"Người Việt Nam không có tôn giáo cuồng tín... Tiếp nhận Phật giáo, Đạo giáo, Nho giáo nhưng chỉ gạn lọc lấy những điều thiết thực, phục vụ cho cuộc sống trần thế... Tâm lý dung hợp khiến Tam giáo cùng chung sống hòa bình trong tâm thức làng xã..."',
      artisticHighlights: 'Phương pháp nghị luận so sánh văn hóa liên ngành; lập luận khách quan, khoa học; ngôn ngữ khúc chiết.',
      deepAnalysis: 'GS. Trần Đình Hượu chỉ ra nét cốt lõi của tâm thức văn hóa Việt: tính thiết thực và tinh thần dung hợp. Người Việt không theo đuổi những giáo lý siêu hình, khổ hạnh hay cuồng tín mà luôn hướng tới cuộc sống an lành, ấm êm nơi trần thế. Sự chung sống hòa bình của Nho - Phật - Đạo phản ánh bản tính bao dung, linh hoạt, chuộng hòa khí của cư dân nông nghiệp lúa nước.',
      thematicSignificance: 'Khẳng định bản sắc văn hóa linh hoạt, hòa hiếu và giàu tính thực tiễn của dân tộc.',
      examTakeaway: 'Phân tích cách tác giả đánh giá tính thiết thực của văn hóa Việt Nam ở cả mặt tích cực và giới hạn.'
    },
    {
      id: 'vhdt-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Quan niệm thẩm mỹ và mẫu người lý tưởng trong văn hóa truyền thống',
      excerpt: '"Cái đẹp vừa ý là cái đẹp xinh xắn, thanh cảnh, không chuộng cái kỳ vĩ, đồ sộ... Con người được ưa chuộng là con người hiền lành, tình nghĩa, chuộng sự hài hòa hơn là kẻ hùng mạnh bạo liệt..."',
      artisticHighlights: 'Khái quát hóa mỹ cảm dân tộc; hệ thống dẫn chứng từ kiến trúc, văn học dân gian đến ứng xử xã hội.',
      deepAnalysis: 'Trong nghệ thuật và kiến trúc, người Việt không xây dựng những lăng tẩm, kim tự tháp khổng lồ thách thức tự nhiên mà chuộng những mái đình, ngôi chùa xinh xắn ẩn mình dưới bóng cây xanh. Mẫu hình con người lý tưởng không phải là những anh hùng chinh phục vũ trụ hung bạo mà là con người có lòng nhân ái, hiếu đễ, biết sống hòa thuận với xóm giềng và thiên nhiên.',
      thematicSignificance: 'Tôn vinh vẻ đẹp thẩm mỹ thanh nhã, hài hòa và tính nhân văn sâu sắc của văn hóa dân tộc.',
      examTakeaway: 'Phân tích quan niệm thẩm mỹ "cái đẹp vừa ý" của người Việt trong bài thi Đọc hiểu và Nghị luận xã hội.'
    }
  ],

  'nang-luc-sang-tao': [
    {
      id: 'nlst-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Bản chất của năng lực sáng tạo và sự giải phóng khỏi định kiến thiên tài',
      excerpt: '"Sáng tạo không phải là độc quyền của một số ít thiên tài xuất chúng, mà là phẩm chất tiềm tàng trong mỗi con người bình thường khi biết tư duy độc lập, vượt ra khỏi lối mòn của những điều có sẵn..."',
      artisticHighlights: 'Định nghĩa khoa học chặt chẽ; phản biện quan niệm định kiến truyền thống; khơi gợi niềm tin vào tiềm năng cá nhân.',
      deepAnalysis: 'GS. Phan Đình Diệu phá vỡ ngộ nhận cho rằng sáng tạo chỉ thuộc về giới tinh hoa khoa học hay nghệ thuật. Sáng tạo thực chất là khả năng tìm ra cách tiếp cận mới, giải pháp mới hiệu quả cho các vấn đề đời sống thường nhật. Mọi cá nhân đều có thể sáng tạo nếu được kích hoạt tư duy phản biện và lòng đam mê tìm tòi.',
      thematicSignificance: 'Dân chủ hóa khái niệm sáng tạo, mở ra cơ hội phát triển công bằng cho thế hệ trẻ.',
      examTakeaway: 'Vận dụng định nghĩa của Phan Đình Diệu để viết đoạn văn nghị luận xã hội về tinh thần đổi mới sáng tạo.'
    },
    {
      id: 'nlst-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Điều kiện nuôi dưỡng sáng tạo: Nền tảng tri thức và môi trường tự do tư tưởng',
      excerpt: '"Muốn sáng tạo không thể chỉ trông chờ vào sự ngẫu hứng bột phát. Phải có nền tảng tri thức vững chắc tích lũy từ học tập, bản lĩnh hoài nghi khoa học và một môi trường xã hội tôn trọng sự khác biệt..."',
      artisticHighlights: 'Lập luận biện chứng giữa tích lũy và bứt phá; tư duy logic của nhà toán học lớn; tính thời sự cấp thiết đối với giáo dục.',
      deepAnalysis: 'Tác giả chỉ rõ mối quan hệ nhân quả: Tri thức là bệ phóng của sáng tạo; không có tri thức thì sáng tạo chỉ là ảo tưởng viển vông. Đồng thời, xã hội cần tạo ra không gian cởi mở cho sự hoài nghi lành mạnh và khuyến khích những ý tưởng khác biệt, vì sự rập khuôn giáo điều chính là kẻ thù số một của sự phát triển.',
      thematicSignificance: 'Bài học đắt giá cho công cuộc cải cách giáo dục và định hướng học tập cho học sinh lớp 12.',
      examTakeaway: 'Phân tích các điều kiện tiên quyết để đánh thức năng lực sáng tạo ở người trẻ trong thời đại số.'
    }
  ],

  'may-y-nghi-ve-tho': [
    {
      id: 'myt-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Thơ là tiếng nói trực tiếp của tâm hồn khi chạm vào cuộc đời',
      excerpt: '"Thơ là tiếng nói đầu tiên, tiếng nói thứ nhất của tâm hồn khi đụng chạm tới cuộc sống... Làm thơ không phải là xếp chữ ghép vần theo công thức, mà là để tâm hồn tự ngân vang khúc hát chân thực nhất của lòng mình..."',
      artisticHighlights: 'Quan niệm thi học hiện đại giàu chất thơ; ngôn từ truyền cảm, tinh tế; đối lập giữa kỹ thuật gượng ép và xúc cảm tự nhiên.',
      deepAnalysis: 'Nguyễn Đình Thi khẳng định bản chất cốt lõi của thơ ca: Thơ khởi nguồn từ những rung động mãnh liệt trước đời sống. Không có sự xúc động chân thành trước nỗi vui buồn của nhân dân thì câu thơ chỉ là vỏ bọc ngôn từ sáo rỗng. Thơ là phương tiện bộc lộ thế giới nội tâm trực tiếp và tinh khôi nhất của con người.',
      thematicSignificance: 'Khẳng định gốc rễ của thơ ca nằm ở sự gắn bó máu thịt với đời sống hiện thực.',
      examTakeaway: 'Sử dụng luận điểm của Nguyễn Đình Thi làm đòn bẩy lý luận văn học khi phân tích Tây Tiến, Việt Bắc, Sóng.'
    },
    {
      id: 'myt-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Nghệ thuật khoảng lặng giữa các chữ và nhịp điệu nội tâm',
      excerpt: '"Điều kỳ diệu của thơ nằm ở những khoảng lặng giữa các con chữ... Nhịp điệu của thơ không chỉ là niêm luật bằng trắc bên ngoài mà là nhịp sóng của tâm hồn bên trong đang cựa quậy..."',
      artisticHighlights: 'Phát hiện tinh vi về thi pháp thơ hiện đại; khái niệm "khoảng lặng"; đề cao sự đồng sáng tạo của người đọc.',
      deepAnalysis: 'Nhà thơ cách tân Nguyễn Đình Thi chỉ ra rằng sức gợi của câu thơ nằm ở phần "ý tại ngôn ngoại". Giữa các khoảng trắng, người đọc tự mình cảm nhận những dư ba tình cảm mà ngôn từ không thể diễn tả hết. Thơ hiện đại cần thoát khỏi sự gò bó của luật thơ cổ điển để tự do biểu đạt nhịp điệu phong phú, biến ảo của tâm hồn con người thời đại mới.',
      thematicSignificance: 'Mở đường cho sự phát triển của thơ tự do và thi pháp thơ ca kháng chiến hiện đại.',
      examTakeaway: 'Phân tích khái niệm "khoảng lặng giữa các chữ" khi bình giảng các câu thơ có dấu chấm lửng (...) hoặc ngắt nhịp phá cách.'
    }
  ],

  'hai-khau-linh-tu': [
    {
      id: 'hklt-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Trí tuệ trị quốc và bản lĩnh chính trị qua bản "Kê minh thập sách"',
      excerpt: '"Nguyễn Thị Bích Châu dâng biểu Kê minh thập sách khuyên vua Trần Duệ Tông: Bền gốc nước, yên lòng dân, kén chọn hiền tài, tiết giảm binh đao... Lời lẽ đanh thép, tầm nhìn sáng suốt vượt trên cả quần thần..."',
      artisticHighlights: 'Xây dựng nhân vật phụ nữ tài đức vẹn toàn; tái hiện áng văn chính luận mẫu mực trong truyện truyền kỳ; tinh thần ái quốc thương dân.',
      deepAnalysis: 'Đoàn Thị Điểm tôn vinh trí tuệ lỗi lạc của nữ lưu đất Việt. Không cam chịu số phận mua vui chốn cung cấm, Bích Châu chủ động can gián nhà vua bằng mười kế sách trị nước an dân. Lời tấu sắc sảo thể hiện tư tưởng chính trị tiến bộ: lấy dân làm gốc, đề cao đức trị và phòng ngừa nạn ngoại xâm.',
      thematicSignificance: 'Tôn vinh trí tuệ chính trị kiệt xuất và nhân cách cao đẹp của người phụ nữ Việt Nam thế kỷ XIV.',
      examTakeaway: 'Phân tích vẻ đẹp tài năng và bản lĩnh của Nguyễn Thị Bích Châu trước bối cảnh phong kiến trọng nam khinh nữ.'
    },
    {
      id: 'hklt-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Hành động trẫm mình cứu quân dân và sự bất tử hóa qua yếu tố kì ảo',
      excerpt: '"Trước sóng dữ bão gầm ở cửa biển Hải Khẩu do Quảng Lợi Vương đòi cống nạp người đẹp, Bích Châu khảng khái gieo mình xuống biển: Thiếp thà làm ngọc nát cứu muôn dân!... Nàng hiển thánh dưới thủy cung, sau phù trợ vua Lê Thánh Tông dẹp giặc, đền miếu linh thiêng ngàn năm khói tỏa..."',
      artisticHighlights: 'Hành động bi tráng lẫm liệt; đan cài yếu tố kì ảo hoang đường (thủy cung, hiển linh trong mộng); kết hợp lịch sử và truyền thuyết.',
      deepAnalysis: 'Cái chết của Bích Châu là sự hy sinh tự nguyện vì đại nghĩa dân tộc. Đoàn Thị Điểm sử dụng yếu tố kì ảo (thành thần tiên dưới biển sâu, phù trợ vua đánh giặc) như một phương thức thẩm mỹ đền bù thiêng liêng: nhân dân bất tử hóa người liệt nữ trong niềm tin tâm linh, tôn bà làm Chế Thắng Phu nhân chở che cho ngư dân cửa biển.',
      thematicSignificance: 'Bản anh hùng ca ca ngợi đức hy sinh xả thân vì nước và tấm lòng biết ơn của nhân dân.',
      examTakeaway: 'Phân tích vai trò của yếu tố kì ảo trong việc thể hiện ước mơ công lý và sự tôn vinh tiền nhân.'
    }
  ],

  'muoi-cua-rung': [
    {
      id: 'mcr-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Phát súng săn mùa xuân và sự đối đầu tàn nhẫn giữa con người và loài vật',
      excerpt: '"Ông Diểu với khẩu súng hai nòng hiện đại ngắm bắn hạ con khỉ đực đầu đàn... Tiếng súng nổ chát chúa phá vỡ sự yên tĩnh rừng xuân... Con khỉ đực rơi xuống vực, con khỉ cái liều mạng lao theo cứu chồng, con khỉ con kêu khóc thảm thiết..."',
      artisticHighlights: 'Bút pháp hiện thực sắc lạnh; chi tiết miêu tả chính xác, chân thực; thế đối lập giữa vũ khí hủy diệt và gia đình muôn thú.',
      deepAnalysis: 'Ông Diểu bước vào rừng xuân với tâm thế kiêu ngạo của kẻ thống trị trang bị công nghệ sát sinh tối tân. Phát súng bắn trúng khỉ đực là biểu tượng cho sự tàn bạo của con người đối với tự nhiên. Thế nhưng phản ứng của bầy khỉ - khỉ vợ quên thân cứu chồng, khỉ con gào khóc - đã giáng một đòn mạnh vào lương tâm kẻ đi săn: thế giới loài vật cũng có tình nghĩa thủy chung và nỗi đau mất mát không khác gì con người.',
      thematicSignificance: 'Phơi bày sự tha hóa bạo lực của con người khi tự tách mình ra khỏi thiên nhiên.',
      examTakeaway: 'Phân tích tình huống truyện mang tính bước ngoặt tâm lý khi ông Diểu đối mặt với tình cảm gia đình loài khỉ.'
    },
    {
      id: 'mcr-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Sự thức tỉnh lương tri - Băng bó vết thương và buông bỏ súng đạn',
      excerpt: '"Ông Diểu đến gần nhìn vào mắt con khỉ già... đôi mắt ươn ướt van lơn như mắt một đứa trẻ... Ông thở dài, cởi áo băng bó vết thương cho nó, vứt khẩu súng sang bên cạnh rồi thả nó về với rừng..."',
      artisticHighlights: 'Nghệ thuật miêu tả ánh mắt biết nói của loài vật; hành trình chuyển hóa nội tâm tinh vi; hành động buông bỏ vũ lực mang tính giải thoát.',
      deepAnalysis: 'Ánh mắt đau đớn, nhẫn nhục của con khỉ già đã đánh thức hạt mầm thiện lương sâu thẳm trong ông Diểu. Ông nhận ra hành động sát sinh của mình là vô nghĩa và độc ác. Hành động cởi áo băng bó và thả khỉ về rừng là biểu tượng của sự hòa giải: con người từ bỏ bạo lực để quay trở về với tình thương đồng loại muôn loài.',
      thematicSignificance: 'Khẳng định sức mạnh phục thiện của lương tri con người trước nỗi đau của sự sống.',
      examTakeaway: 'Phân tích diễn biến tâm trạng từ thích thú săn mồi đến xót xa hối hận và hành động phóng sinh của ông Diểu.'
    },
    {
      id: 'mcr-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Cuộc trở về trần trụi trong mưa xuân và biểu tượng hoa Tử Huyền',
      excerpt: '"Mất súng, mất quần áo, ông Diểu bước đi trần truồng trong mưa xuân ấm áp... Bỗng ông bắt gặp loài hoa tử huyền trắng muốt như muối của rừng, ba mươi năm mới nở một lần... Lòng ông thanh thản lạ lùng..."',
      artisticHighlights: 'Hình ảnh biểu tượng hoa tử huyền ("muối của rừng"); trạng thái trở về nguyên sơ trần trụi; không gian mưa xuân thanh lọc tâm hồn.',
      deepAnalysis: 'Trở về trong trạng thái trần trụi không còn vũ khí hay áo quần văn minh giả tạo, ông Diểu đã gột rửa toàn bộ lòng tham lam, sát phạt để hòa nhập làm một với tự nhiên. Cuộc hội ngộ kỳ diệu với hoa tử huyền trắng như muối là phần thưởng vô giá của rừng xanh: sự thánh thiện, bình an nội tâm đã cứu rỗi linh hồn con người. Muối của rừng chính là tinh hoa đạo đức, là điềm lành cho sự sống hòa hợp muôn đời.',
      thematicSignificance: 'Thông điệp sinh thái và triết lý nhân sinh: Hãy sống nhân từ, tôn trọng muôn loài để nhận về sự bình an vĩnh cửu.',
      examTakeaway: 'Bình luận ý nghĩa biểu tượng của hình ảnh hoa tử huyền và nhan đề truyện ngắn "Muối của rừng".'
    }
  ],

  'nhan-vat-quan-trong': [
    {
      id: 'nvqt-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Màn khoác lác leo thang không giới hạn của Khlestakov',
      excerpt: '"Khlestakov say sưa bịa chuyện: Tôi quen thân với Pu-skin, coi nhau như anh em ruột thịt... Ở Pê-téc-bua tôi chỉ huy một ban bệ khổng lồ... Ba vạn năm ngàn người đưa thư chạy rầm rập... Tôi sắp được phong Thống chế!..."',
      artisticHighlights: 'Thủ pháp tăng tiến khoa trương tột đỉnh; ngôn ngữ ba hoa xảo quyệt; tính cách hài kịch độc nhất vô nhị ("Chủ nghĩa Khlestakov").',
      deepAnalysis: 'Gogol xây dựng một màn độc thoại hài kịch mẫu mực. Khlestakov - một tên công chức quèn đói ăn, rỗng túi - trước sự cung kính tột cùng của đám quan lại tỉnh lẻ đã thả sức tưởng tượng. Lời nói dối leo thang từ việc khoe khoang quen biết văn chương đến việc thâu tóm toàn bộ quyền lực triều đình Nga hoàng. Bản chất háo danh, rỗng tuếch của nhân vật được phơi bày trần trụi dưới ánh sáng trào phúng sắc lạnh.',
      thematicSignificance: 'Phê phán thói ba hoa, khoác lác và căn bệnh háo danh thâm căn cố đế trong xã hội quan liêu.',
      examTakeaway: 'Phân tích nghệ thuật tăng tiến và nghệ thuật phóng đại trong ngôn ngữ đối thoại của Khlestakov.'
    },
    {
      id: 'nvqt-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Nỗi khiếp sợ mù quáng và sự đê hèn của bộ máy quan lại tham nhũng',
      excerpt: '"Viên Thị trưởng và các quan chức địa phương run lẩy bẩy, toát mồ hôi hột, nơm nớp sợ hãi... Lời khoác lác càng vô lý thì họ lại càng tin sái cổ và cúi rạp mình dâng hối lộ...",',
      artisticHighlights: 'Nghệ thuật xây dựng hành động kịch câm và bàng thoại; tiếng cười qua nước mắt của Gogol; vạch trần tâm lý "có tật giật mình".',
      deepAnalysis: 'Nghịch lý hài kịch chua chát: Viên Thị trưởng vốn là một con cáo già lọc lõi, lừa cả ba đời tổng đốc, nhưng lại bị một gã ranh con vặt mũi lừa trắng trợn. Chính nỗi sợ hãi tội lỗi tham nhũng, hà lạm công quỹ đã làm mù quáng lý trí của đám quan chức. Sự đê hèn, quỵ lụy của chúng phản chiếu sự mục ruỗng từ gốc rễ của bộ máy cai trị dưới thời Sa hoàng Nikolai I.',
      thematicSignificance: 'Bản cáo trạng xã hội đanh thép vạch trần sự thối nát, tham nhũng và giả dối của tầng lớp thống trị.',
      examTakeaway: 'Phân tích tâm lý sợ hãi của Thị trưởng để làm rõ nguyên nhân sâu xa dẫn tới tình huống nhận lầm hài kịch.'
    }
  ],

  'giau-cua': [
    {
      id: 'gc-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Màn giấu vàng quái đản và biến mẹ già thành "cây giá treo vàng"',
      excerpt: '"Vợ chồng Đại Cát hoảng loạn nhét vàng vào ống tre, guốc mộc, ruột tượng... Đỉnh điểm là bắt cụ Đại Lợi quấn vàng quanh người, đeo kiềng, xuyến kín cổ rồi trùm chăn giả ốm liệt giường để trốn tránh công tư hợp doanh..."',
      artisticHighlights: 'Hành động kịch liên hoàn dồn dập; ngôn ngữ kịch trào phúng sắc nét; tình huống trớ trêu bộc lộ lòng tham tha hóa nhân tính.',
      deepAnalysis: 'Lộng Chương tạo nên tiếng cười trào phúng giòn giã qua màn giấu của hỗn loạn. Đồng tiền và vàng bạc đã làm méo mó toàn bộ quan hệ gia đình thiêng liêng: một người con trai sẵn sàng biến mẹ đẻ già yếu thành một tấm bình phong cất giấu tài sản, bất chấp sự nguy hiểm đến tính mạng của bà cụ. Lòng tham vị kỷ biến những con người tư sản thành những con rối lố bịch trên sân khấu.',
      thematicSignificance: 'Phê phán sâu cay sự tha hóa đạo đức và nhân cách dưới sức mạnh chi phối của đồng tiền ích kỷ.',
      examTakeaway: 'Phân tích chi tiết cụ Đại Lợi bị biến thành nơi cất giấu vàng để làm nổi bật tiếng cười châm biếm sâu sắc của Lộng Chương.'
    },
    {
      id: 'gc-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Bi kịch tinh thần "Quẫn" - Tự biến ngôi nhà thành nhà tù giam cầm chính mình',
      excerpt: '"Càng giấu của, vợ chồng Đại Cát càng nơm nớp lo sợ: sợ con cái phát hiện, sợ người làm ăn cắp, sợ tiếng động ban đêm... Cả nhà rơi vào trạng thái bấn loạn, quẫn bách đến điên dại..."',
      artisticHighlights: 'Khắc họa trạng thái tâm lý bế tắc; kịch tính nội tâm sắc sảo; ý nghĩa biểu tượng của nhan đề vở kịch "Quẫn".',
      deepAnalysis: 'Nhan đề "Quẫn" đúc kết toàn bộ tấn bi hài kịch của tầng lớp tư sản cũ không chịu thích ứng với dòng chảy thời đại mới. Của cải tích cóp cả đời không mang lại hạnh phúc mà biến thành sợi dây thòng lọng siết chặt tâm hồn họ. Họ tự giam mình trong nỗi sợ hãi thường trực, trở thành nạn nhân thảm hại của chính lòng tham không đáy.',
      thematicSignificance: 'Khẳng định quy luật tất yếu của lịch sử và sự phá sản của lối sống ích kỷ, ôm giữ của cải cá nhân.',
      examTakeaway: 'Bình luận về ý nghĩa nhan đề vở kịch "Quẫn" và tài năng bậc thầy của nhà viết kịch Lộng Chương.'
    }
  ],

  'tac-gia-ho-chi-minh': [
    {
      id: 'tghcm-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Quan điểm sáng tác cách mạng - Văn nghệ là vũ khí chiến đấu phụng sự Tổ quốc',
      excerpt: '"Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy... Nay ở trong thơ nên có thép / Nhà thơ cũng phải biết xung phong... Khi viết luôn tự hỏi: Viết cho ai? Viết để làm gì? Viết cái gì? Viết như thế nào?..."',
      artisticHighlights: 'Hệ thống quan điểm sáng tác nhất quán, mẫu mực; tư tưởng văn nghệ phụng sự nhân dân; tính chân thực và tính dân tộc.',
      deepAnalysis: 'Chủ tịch Hồ Chí Minh coi ngòi bút văn chương là một thứ vũ khí sắc bén không kém súng đạn trên mặt trận giải phóng dân tộc. Người đòi hỏi văn nghệ sĩ phải gắn bó mật thiết với đời sống của quần chúng lao động. Bốn câu hỏi cốt lõi "Viết cho ai? Viết để làm gì? Viết cái gì? Viết thế nào?" là kim chỉ nam giúp tác phẩm văn học đạt tới đỉnh cao về tư tưởng tư tưởng và hiệu quả thực tiễn xã hội.',
      thematicSignificance: 'Đặt nền móng lý luận vững chắc cho nền văn nghệ cách mạng Việt Nam hiện đại.',
      examTakeaway: 'Trình bày ba quan điểm sáng tác cốt lõi của Hồ Chí Minh làm cơ sở phân tích thơ văn của Người.'
    },
    {
      id: 'tghcm-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Sự đa dạng và thống nhất trong phong cách nghệ thuật Hồ Chí Minh',
      excerpt: '"Từ văn chính luận đanh thép hùng hồn, truyện kí trào phúng sắc bén đến thơ ca cổ điển mà hiện đại... Tất cả đều thống nhất ở phong thái ung dung, tinh thần tiến công cách mạng và tấm lòng nhân ái bao la..."',
      artisticHighlights: 'Tổng kết sự nghiệp văn học đồ sộ; phân tích sự kết hợp giữa chất thép và chất tình; tinh hoa phương Đông và phương Tây.',
      deepAnalysis: 'Phong cách nghệ thuật của Hồ Chí Minh có sự biến hóa diệu kỳ tùy theo đối tượng và thể loại, nhưng luôn nhất quán ở tư tưởng yêu nước thương dân và phong thái ung dung tự tại. Chất thép chiến sĩ hòa quyện tự nhiên với chất tình thi sĩ, tạo nên một tầm vóc văn hóa độc nhất vô nhị trong lịch sử văn học dân tộc.',
      thematicSignificance: 'Khẳng định vị thế người khổng lồ văn hóa của Chủ tịch Hồ Chí Minh đối với nền văn học thế giới.',
      examTakeaway: 'Chứng minh sự thống nhất giữa chất thép và chất tình trong các tác phẩm của Bác.'
    }
  ],

  'nhung-tro-lo-va-ren-phan-boi-chau': [
    {
      id: 'ntlv-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Chân dung biếm họa Va-ren và màn độc thoại dụ dỗ trơ trẽn',
      excerpt: '"Va-ren bước vào xà lim nhà tù Hỏa Lò, thao thao bất tuyệt bài diễn văn đường mật: Tôi sẽ chăm sóc ông... hãy từ bỏ con đường chống đối... hãy noi gương tôi... Lời hứa của một tên phản bội giai cấp..."',
      artisticHighlights: 'Bút pháp biếm họa sắc sảo; thủ pháp nghịch dị; lời văn châm biếm mỉa mai sâu cay của Nguyễn Ái Quốc.',
      deepAnalysis: 'Nguyễn Ái Quốc lột trần bộ mặt đạo đức giả của tên Toàn quyền Đông Dương mới nhậm chức. Từng là đảng viên Xã hội nhưng Va-ren đã phản bội lý tưởng để nhận bổng lộc thực dân. Việc hắn mang cái gương phản bội của mình ra để khuyên một bậc đại trượng phu như Phan Bội Châu đầu hàng là một hành vi trơ trẽn, biến bài diễn văn của hắn thành một màn kịch hề lố lăng chốn lao tù.',
      thematicSignificance: 'Vạch trần bản chất lừa mị, phản trắc của chính sách thực dân Pháp tại Đông Dương.',
      examTakeaway: 'Phân tích nghệ thuật khắc họa nhân vật Va-ren qua bài độc thoại trơ trẽn.'
    },
    {
      id: 'ntlv-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Khí phách bất khuất của Phan Bội Châu qua sự im lặng và cái nhếch mép',
      excerpt: '"Cụ Phan ngồi im phắc như một bức tượng đồng... Đôi cánh phượng hoàng bị xiềng xích nhưng đôi mắt vẫn ngời sáng khí phách... Đôi ngọn râu mép của người tù nhếch lên một chút rồi hạ xuống ngay: nụ cười khinh bỉ tột cùng..."',
      artisticHighlights: 'Thủ pháp tương phản đối lập tuyệt đối; sức mạnh của sự im lặng; chi tiết cái nhếch mép và tái bút đầy kịch tính.',
      deepAnalysis: 'Trước những lời hứa hão và màn khoác lác của Va-ren, cụ Phan Bội Châu không thèm đáp nửa lời. Sự im lặng sừng sững của cụ biến Va-ren thành một chú hề nhảy múa đơn độc. Chi tiết cái nhếch mép (và chi tiết nhổ vào mặt theo nhân chứng ở lời tái bút) là sự khinh bỉ tột cùng của chủ nghĩa yêu nước chính nghĩa giáng vào mặt kẻ xâm lược đê hèn.',
      thematicSignificance: 'Tôn vinh khí phách hiên ngang, uy vũ bất năng khuất của người anh hùng cách mạng Việt Nam.',
      examTakeaway: 'Phân tích ý nghĩa nghệ thuật của sự im lặng và cái nhếch mép của nhân vật Phan Bội Châu.'
    }
  ],

  'nghe-thuat-bam-thit-ga': [
    {
      id: 'ntbg-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Màn thao diễn "nghệ thuật" băm một con gà thành 23 cỗ việc làng',
      excerpt: '"Anh Lăng mõ làng tay cầm con dao phay sắc ngọt... Dưới nhát dao thoăn thoắt, một con gà luộc biến thành 23 phần đều nhau chằn chặn: đĩa nào cũng có đủ 4 miếng da, thịt, phao câu, mề, gan không thừa không thiếu một mẩu...",',
      artisticHighlights: 'Nghệ thuật miêu tả thao tác chi tiết cận cảnh như một thước phim phóng sự; giọng điệu vừa thán phục vừa xót xa; tính chân thực sắc lạnh.',
      deepAnalysis: 'Ngô Tất Tố gọi hành động băm thịt gà của anh mõ làng là "nghệ thuật" với giọng điệu cay đắng. Để không bị làng phạt vạ sạt nghiệp vì thiếu phần cho các bậc chức sắc, người lao động nghèo phải khổ luyện một ngón nghề kỳ quái: chia một con gà nhỏ thành 92 miếng thịt đều nhau như khuôn đúc. Sự khéo léo phi thường ấy là sản phẩm của một cơ chế đè nén, đe dọa sinh tồn tàn nhẫn chốn làng quê.',
      thematicSignificance: 'Phơi bày sự khắt khe, phi lý đến quái đản của hủ tục hương ẩm phong kiến xưa.',
      examTakeaway: 'Phân tích tính xác thực và nghệ thuật phóng sự sắc bén của Ngô Tất Tố trong đoạn trích "Việc làng".'
    },
    {
      id: 'ntbg-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Bi kịch "Miếng ăn chốn đình trung" và bản án tố cáo hủ tục làng xã',
      excerpt: '"Một miếng giữa làng bằng một sàng xó bếp... Bao nhiêu trí tuệ, mồ hôi và cả nỗi sợ hãi chỉ để phục vụ thói ngôi thứ danh hão của đám kỳ hào lý dịch..."',
      artisticHighlights: 'Trữ tình ngoại đề sâu sắc; câu tục ngữ dân gian đúc kết hiện thực; tư tưởng nhân đạo bênh vực người cùng khổ.',
      deepAnalysis: 'Đằng sau màn băm thịt gà điêu luyện là tiếng thở dài não nuột của nhà văn. "Miếng ăn chốn đình trung" đã tha hóa phẩm giá con người, biến tình làng nghĩa xóm thành đấu trường tranh giành ngôi thứ, phạt vạ lẫn nhau. Ngô Tất Tố đã gióng lên hồi chuông cảnh tỉnh về sự trì trệ, hủ bại của nông thôn Việt Nam trước Cách mạng.',
      thematicSignificance: 'Bản cáo trạng nhân đạo sâu sắc đòi giải phóng người nông dân khỏi gông cùm hủ tục phong kiến.',
      examTakeaway: 'Bình luận về câu tục ngữ "Một miếng giữa làng bằng một sàng xó bếp" qua trang văn của Ngô Tất Tố.'
    }
  ],

  'buoc-vao-doi': [
    {
      id: 'bvd-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Khát vọng dấn thân - Từ bỏ sự an phận để hòa vào dòng chảy dân tộc',
      excerpt: '"Những năm 1925 - 1926, phong trào đòi ân xá Phan Bội Châu và để tang Phan Châu Trinh sôi sục khắp ba kỳ... Chàng thanh niên Đào Duy Anh quyết định từ chức giáo học, rời bỏ cuộc sống công chức an nhàn để dấn thân vào đời..."',
      artisticHighlights: 'Tính xác thực lịch sử cao độ của thể loại hồi kí; điểm nhìn hồi tưởng chân thành; khắc họa chuyển biến nhận thức của trí thức trẻ.',
      deepAnalysis: 'Học giả Đào Duy Anh tái hiện bước ngoặt quan trọng của cuộc đời: không cam tâm làm một viên chức an phận thủ thường trong khi vận nước đang chuyển mình sôi động. Khát vọng dấn thân của ông đại diện cho tinh thần quật khởi của cả một thế hệ thanh niên trí thức tân học đầu thế kỷ XX: dám từ bỏ vùng an toàn để tìm kiếm lý tưởng sống cao đẹp phụng sự non sông.',
      thematicSignificance: 'Truyền cảm hứng mạnh mẽ cho tuổi trẻ về tinh thần dấn thân và trách nhiệm xã hội.',
      examTakeaway: 'Phân tích bối cảnh lịch sử và động lực thôi thúc người trẻ "bước vào đời" trong trang hồi kí của Đào Duy Anh.'
    },
    {
      id: 'bvd-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Cuộc hạnh ngộ với các bậc chí sĩ và con đường văn hóa cứu quốc',
      excerpt: '"Gặp gỡ cụ Phan Bội Châu ở Huế, tham gia làm báo Tiếng Dân với cụ Huỳnh Thúc Kháng và sáng lập Quan Hải Tùng Thư... Tác giả xác lập sứ mệnh trọn đời: dùng ngòi bút học thuật để khai sáng dân trí..."',
      artisticHighlights: 'Chân dung chân thực về các danh nhân lịch sử; giọng văn điềm đạm, uyên bác; sự kết hợp giữa tự sự và chiêm nghiệm triết lý.',
      deepAnalysis: 'Qua những cuộc tiếp xúc với các bậc tiền bối kiệt xuất, Đào Duy Anh tìm thấy kim chỉ nam cho sự nghiệp: Muốn cứu nước lâu bền phải bắt đầu từ việc nâng cao dân trí và bồi đắp nền tảng học thuật dân tộc. Lựa chọn cống hiến cho văn hóa, sử học và từ điển học của ông đã để lại di sản vô giá cho muôn đời sau.',
      thematicSignificance: 'Khẳng định vai trò quyết định của văn hóa và tri thức đối với sự trường tồn của dân tộc.',
      examTakeaway: 'Rút ra bài học về việc lựa chọn con đường lập thân, lập nghiệp có ý nghĩa đối với học sinh lớp 12.'
    }
  ],

  'pa-ra-na': [
    {
      id: 'prn-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Khảo sát thực địa dữ liệu địa lý - sinh thái lưu vực sông Paraná',
      excerpt: '"Claude Lévi-Strauss ghi chép tỉ mỉ cấu trúc thổ nhưỡng đất đỏ, sự biến đổi độ cao và các dải rừng thông Paraná cổ thụ khi tiến sâu vào nội địa Nam Mỹ... Những số liệu khảo sát thực địa chính xác kết hợp quan sát tinh tế..."',
      artisticHighlights: 'Phương pháp thu thập dữ liệu điền dã nhân học sơ cấp; bố cục văn bản thông tin khoa học; ngôn ngữ miêu tả giàu tính tạo hình.',
      deepAnalysis: 'Nhà nhân học vĩ đại người Pháp cung cấp một hệ thống dữ liệu khoa học chuẩn xác về vùng đất Paraná (Brazil). Từng tầng địa chất, loài thực vật và dòng sông được phân tích dưới lăng kính sinh thái học. Cách tổ chức thông tin mạch lạc giúp người đọc hình dung trọn vẹn diện mạo hoang sơ, kỳ vĩ của vùng nhiệt đới Nam Mỹ thế kỷ XX.',
      thematicSignificance: 'Mẫu mực xuất sắc về kỹ năng xử lý dữ liệu thực địa trong văn bản thông tin.',
      examTakeaway: 'Chỉ ra sự kết hợp giữa dữ liệu định lượng (độ cao, tọa độ) và dữ liệu định tính (mô tả cảnh quan) trong văn bản thông tin.'
    },
    {
      id: 'prn-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Nỗi trăn trở nhân học trước sự tàn phá sinh thái và mai một văn hóa bản địa',
      excerpt: '"Nhìn những mảng rừng nguyên sinh bị san phẳng bởi các tuyến đường công nghiệp và những bộ tộc bản địa bị đẩy dồn vào bước đường cùng... Nỗi buồn của vùng nhiệt đới hiện lên đằng sau những trang ghi chép khoa học..."',
      artisticHighlights: 'Cái nhìn nhân văn sâu sắc đằng sau dữ liệu khoa học; tư tưởng phê phán nền văn minh công nghiệp bóc lột; chất suy tưởng triết học.',
      deepAnalysis: 'Lévi-Strauss không chỉ ghi chép như một nhà khoa học vô cảm mà bộc lộ sự đau xót tột cùng trước cái giá quá đắt của sự phát triển công nghiệp: thiên nhiên hoang sơ bị bức tử và các nền văn hóa bản địa độc đáo đứng trước nguy cơ tuyệt chủng. Văn bản đặt ra bài toán hóc búa về sự cân bằng giữa phát triển kinh tế và bảo tồn di sản sinh thái - văn hóa.',
      thematicSignificance: 'Thông điệp cảnh tỉnh toàn cầu về đạo đức sinh thái và bảo vệ các nền văn minh bản địa.',
      examTakeaway: 'Phân tích quan điểm nhân văn của Claude Lévi-Strauss thể hiện qua văn bản thông tin "Nhiệt đới buồn".'
    }
  ],

  'giao-duc-khai-phong-dong-kinh-nghia-thuc': [
    {
      id: 'gdkp-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Hệ thống dữ liệu lịch sử về cuộc cách mạng giáo dục Đông Kinh Nghĩa Thục (1907)',
      excerpt: '"Dù chỉ tồn tại 9 tháng năm 1907 tại Hà Nội, Đông Kinh Nghĩa Thục do cụ Lương Văn Can sáng lập đã làm nên cuộc cách mạng: dạy học miễn phí cho cả nam lẫn nữ, xóa bỏ lối học khoa cử từ chương, truyền bá chữ Quốc ngữ và tân học...",',
      artisticHighlights: 'Dữ liệu lịch sử chuẩn xác có trích dẫn nguồn và cước chú minh bạch; phương pháp nghiên cứu lịch sử tư tưởng liên ngành; lập luận khúc chiết.',
      deepAnalysis: 'TS. Nguyễn Nam phục dựng chân dung lịch sử của phong trào Đông Kinh Nghĩa Thục bằng hệ thống tư liệu xác thực. Ngôi trường đã tiên phong thay đổi toàn bộ triết lý giáo dục: từ việc học để làm quan vinh thân phì gia sang việc học thực nghiệp để nâng cao dân trí và phục vụ xã hội. Việc cổ vũ chữ Quốc ngữ trở thành công cụ giải phóng tư duy cho hàng triệu đồng bào.',
      thematicSignificance: 'Tôn vinh cống hiến vĩ đại của cụ Lương Văn Can và các chí sĩ duy tân đầu thế kỷ XX.',
      examTakeaway: 'Phân tích cách tác giả sử dụng cứ liệu lịch sử để chứng minh cho luận điểm giáo dục khai phóng.'
    },
    {
      id: 'gdkp-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Sáu phương diện cải cách trong "Văn minh tân học sách" và bài học cho hôm nay',
      excerpt: '"Dùng chữ Quốc ngữ, hiệu đính sách vở, sửa đổi phép thi, cổ vũ nhân tài, chấn hưng công nghệ và mở báo quán... Tinh thần giáo dục khai phóng hướng tới việc đào tạo con người tự do, tự chủ tư duy và có trách nhiệm công dân..."',
      artisticHighlights: 'Hệ thống hóa 6 phương diện cải cách rõ ràng; liên hệ đối chiếu mô hình giáo dục khai phóng thế giới; tính ứng dụng cao đối với thời đại mới.',
      deepAnalysis: 'Bản "Văn minh tân học sách" năm 1907 được chứng minh là một bản thiết kế giáo dục khai phóng mẫu mực. Tinh thần của Đông Kinh Nghĩa Thục không hề lạc hậu mà vẫn nguyên vẹn tính thời sự trong thế kỷ XXI: giáo dục không phải là nhồi nhét kiến thức thụ động mà là giải phóng tiềm năng con người, rèn luyện tư duy phản biện và tinh thần cống hiến cho cộng đồng.',
      thematicSignificance: 'Bài học định hướng quý báu cho công cuộc đổi mới giáo dục hiện đại và việc tự học của thế hệ trẻ.',
      examTakeaway: 'Vận dụng tinh thần Đông Kinh Nghĩa Thục để bàn về vai trò của tư duy khai phóng và tự học trong thời đại số.'
    }
  ],

  'doi-muoi': [
    {
      id: 'dm-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Hạt muối chiến lược định hình các nền văn minh và các cuộc chiến tranh nhân loại',
      excerpt: '"Trong lịch sử nhân loại, hạt muối từng quý như vàng: dùng để trả lương cho lính La Mã (nguồn gốc từ salary), độc quyền thuế muối xây dựng Vạn Lý Trường Thành ở Trung Hoa và là nguồn cơn của biết bao cuộc cách mạng...",',
      artisticHighlights: 'Phương pháp tiếp cận "lịch sử vi mô" (microhistory) độc đáo; hệ thống dữ liệu liên ngành (ngôn ngữ học, khảo cổ, kinh tế); liên tưởng bất ngờ.',
      deepAnalysis: 'Mark Kurlansky mở ra một góc nhìn kỳ thú: một hạt muối nhỏ bé quen thuộc trên bàn ăn lại từng là mặt hàng chiến lược chi phối vận mệnh các đế chế vĩ đại. Khả năng bảo quản thực phẩm của muối cho phép con người thực hiện các cuộc viễn chinh vượt đại dương và tích lũy của cải. Thuế muối từng là nguồn sống của các vương triều phong kiến và cũng là ngòi nổ bùng cháy các phong trào nổi dậy giành độc lập.',
      thematicSignificance: 'Khám phá chiều sâu lịch sử văn minh nhân loại qua những sự vật bình dị đời thường.',
      examTakeaway: 'Phân tích cách tác giả triển khai dữ liệu theo chiều dọc thời gian và chiều ngang không gian Đông - Tây.'
    },
    {
      id: 'dm-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Sự chuyển đổi vị thế của muối nhờ khoa học hiện đại và bài học nhận thức',
      excerpt: '"Khi khoa học địa chất và hóa học hiện đại phát hiện trữ lượng muối mỏ khổng lồ, muối trở nên rẻ mạt và bình dị... Nhưng giá trị lịch sử của nó vẫn là minh chứng cho sự kỳ diệu của nền văn minh loài người..."',
      artisticHighlights: 'Đối chiếu xưa - nay; dẫn dắt khoa học tự nhiên hòa vào khoa học xã hội; giọng văn lôi cuốn, giàu tính triết luận.',
      deepAnalysis: 'Tiến bộ của khoa học đã làm thay đổi hoàn toàn giá trị vật chất của muối, biến một báu vật tranh đoạt thành gia vị bình dân trong mọi căn bếp. Tuy nhiên, hành trình của hạt muối nhắc nhở con người về mối quan hệ mật thiết giữa tự nhiên, khoa học và xã hội: những thứ tưởng chừng nhỏ bé nhất lại có thể ẩn chứa những bài học vĩ đại nhất về lịch sử tiến hóa của nhân loại.',
      thematicSignificance: 'Khơi gợi niềm đam mê khám phá tri thức và tư duy nhìn nhận thế giới đa chiều cho người đọc.',
      examTakeaway: 'Rút ra bài học về cách quan sát, tìm hiểu những sự vật bình dị xung quanh cuộc sống.'
    }
  ],

  'tro-ve-hemingway': [
    {
      id: 'tvh-1',
      order: 1,
      sectionTitle: 'Phân đoạn 1: Ông lão Santiago vác cột buồm lên dốc - Biểu tượng bi tráng của sự chịu đựng',
      excerpt: '"Santiago cập bến trong đêm tối khi mọi ánh đèn đã tắt... Ông lặng lẽ tháo cột buồm, vác lên vai bước lên con dốc... Năm lần phải ngồi thụp xuống nghỉ vì kiệt sức... Hai bàn tay rướm máu, tấm lưng còng gánh nặng cây cột buồm...",',
      artisticHighlights: 'Bút pháp ước lệ giản dị của nguyên lý "tảng băng trôi"; liên tưởng tôn giáo sâu sắc (hình ảnh vác cây thập giá); vẻ đẹp bi tráng của con người.',
      deepAnalysis: 'Hành trình trở về của Santiago mang tầm vóc của một huyền thoại. Sau khi mất sạch con cá kiếm vào tay bầy cá mập bạo tàn, người chiến binh già không hề than vãn hay gục ngã. Hình ảnh ông lão vác chiếc cột buồm nặng trĩu lên dốc trong đêm khuya, năm lần ngã quỵ rồi lại gượng dậy bước tiếp gợi liên tưởng đến hình ảnh Chúa Giê-su vác cây thánh giá lên đồi Gô-gô-tha. Đó là biểu tượng tuyệt mỹ cho sức chịu đựng phi thường và phẩm giá bất khuất của con người trước số phận cay nghiệt.',
      thematicSignificance: 'Tôn vinh vẻ đẹp của sự kiên cường và lòng dũng cảm của con người trước nghịch cảnh bi thảm.',
      examTakeaway: 'Phân tích hình tượng ông lão vác cột buồm lên dốc theo nguyên lý "tảng băng trôi" của Hemingway.'
    },
    {
      id: 'tvh-2',
      order: 2,
      sectionTitle: 'Phân đoạn 2: Giọt nước mắt của Manolin và sự truyền lửa ý chí qua các thế hệ',
      excerpt: '"Cậu bé Manolin mang cà phê nóng đến lều... Nhìn đôi bàn tay đầy vết thương của ông lão, cậu bật khóc nức nở... Santiago nói: Nó đánh bại ông rồi. Manolin kiên quyết: Không, nó không đánh bại được ông! Từ nay cháu sẽ lại đi biển cùng ông, cháu còn phải học ông nhiều lắm!..."',
      artisticHighlights: 'Nghệ thuật đối thoại hàm súc, giàu cảm xúc; giọt nước mắt thấu cảm thiêng liêng; sự tiếp nối thế hệ.',
      deepAnalysis: 'Cuộc trò chuyện giữa ông lão và cậu bé là nốt nhạc ấm áp nhất của thiên truyện. Trái ngược với cái nhìn hời hợt của du khách (tưởng bộ xương cá kiếm 18 bộ là xương cá mập), cậu bé Manolin nhìn thấu chiến công vĩ đại và lòng dũng cảm vô song của Santiago. Giọt nước mắt của cậu bé là sự tôn vinh cao quý nhất dành cho người anh hùng bại trận. Quyết định tiếp tục đi biển cùng ông lão khẳng định ngọn lửa ý chí và bài học làm người đã được truyền lại trọn vẹn cho thế hệ tương lai.',
      thematicSignificance: 'Khẳng định sự bất tử của tinh thần hiệp sĩ và sự tiếp nối thiêng liêng giữa các thế hệ loài người.',
      examTakeaway: 'Phân tích phản ứng của cậu bé Manolin để làm rõ chiến thắng tinh thần của Santiago.'
    },
    {
      id: 'tvh-3',
      order: 3,
      sectionTitle: 'Phân đoạn 3: Giấc mơ về những con sư tử trên bờ biển châu Phi - Sự bình an tuyệt đối',
      excerpt: '"Ông lão nằm ngủ thiếp đi trên giường báo, úp mặt xuống chiếc gối bọc quần áo cũ... Và ông lão đang mơ về những con sư tử trên bãi cát vàng châu Phi..."',
      artisticHighlights: 'Chi tiết biểu tượng kết thúc tác phẩm giàu dư ba; hình tượng sư tử tượng trưng cho sinh lực thời trai trẻ; sự hòa hợp tâm hồn tuyệt đối.',
      deepAnalysis: 'Kết thúc tác phẩm là một hình ảnh thanh thản, thi vị tuyệt mỹ. Giấc mơ về những con sư tử thời niên thiếu cho thấy tâm hồn Santiago không hề bị bóng ma thất bại hay nỗi sợ hãi ám ảnh. Ông tìm thấy sự bình yên trọn vẹn trong cõi lòng, vẫn nguyên vẹn niềm tin yêu cuộc đời và khát vọng sống mãnh liệt. Người anh hùng già đã chiến thắng chính nỗi sợ hãi của bản thân, khẳng định chân lý bất hủ: Con người có thể bị hủy diệt nhưng không thể bị đánh bại!',
      thematicSignificance: 'Khúc khải hoàn ca bất diệt tụng ca phẩm giá, sức mạnh tinh thần và sự bất tử của con người.',
      examTakeaway: 'Bình luận sâu sắc về ý nghĩa biểu tượng của giấc mơ sư tử ở câu văn cuối cùng của tác phẩm.'
    }
  ]
};

